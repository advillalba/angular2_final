"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var restaurantes_list_component_1 = require("./components/restaurantes-list.component");
var restaurante_details_component_1 = require("./components/restaurante-details.component");
var restaurante_add_component_1 = require("./components/restaurante-add.component");
var restaurante_edit_component_1 = require("./components/restaurante-edit.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: "", component: restaurantes_list_component_1.RestaurantesListComponent },
    { path: "restaurante/:id", component: restaurante_details_component_1.RestauranteDetailsComponent },
    { path: "crear-restaurante", component: restaurante_add_component_1.RestauranteAddComponent },
    { path: "editar-restaurante/:id", component: restaurante_edit_component_1.RestauranteEditComponent },
    { path: "donde-como-hoy/:random", component: restaurante_details_component_1.RestauranteDetailsComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map