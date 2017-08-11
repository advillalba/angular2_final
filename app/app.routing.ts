import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RestaurantesListComponent} from "./components/restaurantes-list.component";
import {RestauranteDetailsComponent} from "./components/restaurante-details.component";
import {RestauranteAddComponent} from "./components/restaurante-add.component";
import {RestauranteEditComponent} from "./components/restaurante-edit.component";

const appRoutes: Routes = [
{
	path: '',
	redirectTo: '/',
	pathMatch:'full'
	},
{path: "", component: RestaurantesListComponent},
{path: "restaurante/:id", component: RestauranteDetailsComponent},
{path: "crear-restaurante", component: RestauranteAddComponent},
{path: "editar-restaurante/:id", component: RestauranteEditComponent},
{path: "donde-como-hoy/:random", component: RestauranteDetailsComponent}
	];

	export const appRoutingProviders: any[] = [];

	export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);