// Importar el núcleo de Angular
import { Component,OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/Restaurante";


 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-detail',
    templateUrl:"app/view/restaurante-detail.html",
    providers: [RestauranteService]
    
})

// Clase del componente donde iran los datos y funcionalidades
export class RestauranteDetailsComponent implements OnInit{
	public parametro;
	public errorMessage:string;
	public status;
	public restaurante: Restaurante[];

constructor (
		private _route: ActivatedRoute,
		private _router: Router,
		private _restauranteService: RestauranteService
		){}

	ngOnInit(){
		
		this.getRestaurante();
	}

	getRestaurante() {
		this._route.params.forEach((params : Params) => {
				let id = params["id"];
				let random = params["random"];


			this._restauranteService.getRestaurante(id, random).subscribe(
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

}