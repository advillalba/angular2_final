import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import {RestaurantesListComponent} from "./components/restaurantes-list.component";
import {RestauranteDetailsComponent} from "./components/restaurante-details.component";
import {RestauranteAddComponent} from "./components/restaurante-add.component";
import {RestauranteEditComponent} from "./components/restaurante-edit.component";

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing ],
  declarations: [ AppComponent, RestaurantesListComponent,
				  RestauranteDetailsComponent,
				  RestauranteAddComponent,
				  RestauranteEditComponent
				  ],
  providers: [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }