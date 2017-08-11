import { Component,OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/Restaurante";


 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-edit',
    templateUrl:"app/view/restaurante-add.html",
    providers: [RestauranteService]
    
})

// Clase del componente donde iran los datos y funcionalidades
export class RestauranteEditComponent implements OnInit{
	public titulo:string = "Editar restaurante"
	public parametro;
	public errorMessage:string;
	public status;
	public restaurante: Restaurante;
	public accion:string = "Editar restaurante";
	public filesToUpload:Array<File>;
	public resultUpload;

constructor (
		private _route: ActivatedRoute,
		private _router: Router,
		private _restauranteService: RestauranteService
		){}
	onSubmit() {
		this._route.params.forEach((params : Params) => {
			let id = params["id"];
			this._restauranteService.editRestaurante(id, this.restaurante).subscribe(
				response => {
					this.status = response.status;
					if(this.status !== "success")
						alert("Error en el servidor");

					},
				error => {
					this.errorMessage = <any>error;
					if(this.errorMessage !== null) {
						console.log(this.errorMessage);
						alert("Error en la petición");
						}
				});
		});
			
		
		this._router.navigate(["/"]);
	}




	ngOnInit(){
		console.log("Componente RestauranteAdd Cargando");

		this.restaurante = new Restaurante("","","","","null","");
		this.getRestaurante();
	}
	getRestaurante() {
		this._route.params.forEach((params : Params) => {
			let id = params["id"];
			this._restauranteService.getRestaurante(id).subscribe(
				response => {
						this.restaurante = response.data;
						this.status = response.status;
						if(this.status !== "success"){
							//alert("Error en el servidor");
							this._router.navigate(["/"]);

						}
						
											
							},
				error => {
					this.errorMessage = <any>error;
					if(this.errorMessage !== null) {
						console.log(this.errorMessage);
						alert("Error en la petición");
						}
					}
				);
		});
			
	}
	callPrecio(value) {
		this.restaurante.precio = value;
	}
	fileChangeEvent(fileInput:any) {
		console.log("Entrando en la función fileChangeEvent");
		this.filesToUpload = <Array<File>>fileInput.target.files;

		this.makeFileRequest("http://localhost/slim/restaurantes-api.php/upload-file",
			[], this.filesToUpload).then((result) => {
				this.resultUpload = result;
				this.restaurante.imagen = this.resultUpload.filename;
				console.log(this.resultUpload.filename);
			}, (error) => {
				console.log(error);
				});

	}
	makeFileRequest(url:string, params:Array<string>, files:Array<File>) {
		console.log("Entrando en la función makeFileRequest");
		return new Promise((resolve, reject) => {
				var formData:any = new FormData();
				var xhr = new XMLHttpRequest();

				for(var i = 0; i < files.length; i++){
					formData.append("uploads[]", files[i], files[i].name);
				}
				xhr.onreadystatechange = function () {
					if(xhr.readyState == 4){
						if(xhr.status == 200) {
							resolve(JSON.parse(xhr.response));
						} else {
							reject(xhr.response);
						}
					}
				}
				xhr.open("POST", url,true);
				xhr.send(formData);
			});
	}


}