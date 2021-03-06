"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importar el núcleo de Angular
var core_1 = require("@angular/core");
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var AppComponent = (function () {
    function AppComponent() {
        this.titulo = "Restaurantes";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "app/view/home.html",
        })
        // Clase del componente donde iran los datos y funcionalidades
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map