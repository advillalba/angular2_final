// Importar el núcleo de Angular
import { Component,OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/Restaurante";


 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-list',
    templateUrl:"app/view/restaurantes-list.html",
    providers: [RestauranteService]
    
})

// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesListComponent implements OnInit{
	public titulo:string = "Listado de restaurantes";
	public restaurantes: Restaurante[];
	public status:string;
	public errorMessage;
	public loading:string;
	public confirmado;
	constructor (
		private _route: ActivatedRoute,
		private _router: Router,
		private _restauranteService: RestauranteService
		){}

	ngOnInit(){
		this.loading="show";
		this.getRestaurantes();
		console.log("restaurantes-list component cargado");}

	getRestaurantes(){
	//	let box_restaurantes = <HTMLElement>document.querySelector("#restaurantes-list .loading");
	//	box_restaurantes.style.visibility = "visible";
		this._restauranteService.getRestaurantes()
								.subscribe(
									result => {
										this.restaurantes = result.data;
										this.status = result.status;

										if(this.status !== "success"){alert("Error en el servidor")};
	//									box_restaurantes.style.display = "none";
										this.loading = "hide";
									},
									error => {
										this.errorMessage = <any>error;
										if(this.errorMessage !== null) {
											console.log(this.errorMessage);
											alert("Error en la petición");
										}
									}
									)
	}

	onBorrarRestaurante(id:number) {
		this._restauranteService.deleteRestaurante(id)
								.subscribe(
									result => {
										this.status = result.status;

										if(this.status !== "success"){alert("Error en el servidor")};
	//									box_restaurantes.style.display = "none";
										this.loading = "hide";
										this.getRestaurantes();
									},
									error => {
										this.errorMessage = <any>error;
										if(this.errorMessage !== null) {
											console.log(this.errorMessage);
											alert("Error en la petición");
										}
									}
									)
	}
	onBorrarConfirm(id:number) {
		this.confirmado = id; 

	}
	onCancelarConfirm(id:number) {
		this.confirmado = null;
	}
	
}
