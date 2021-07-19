(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function AppComponent_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tecla: ", ctx_r0.teclaPresionada, "");
} }
function AppComponent_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tecla: ", ctx_r1.teclaPresionada, "");
} }
function AppComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "F L Y N");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Vuela tu avioncito en la peque\u00F1a ciudad, entre m\u00E1s recorrido hagas, m\u00E1s colores y estados del d\u00EDa ver\u00E1s. El sol te seguira, en cuanto te muevas, el sol avanzar\u00E1 de igual forma. La luna ir\u00E1 m\u00E1s r\u00E1pido, la luna ir\u00E1 a\u00FAn m\u00E1s r\u00E1pido seg\u00FAn tu velocidad de vuelo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Usa los controles de tu teclado, las entradas aceptadas son las siguientes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "W");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_8_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.confirmar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "E N T E N D I D O");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A1Buenos d\u00EDas!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "24 horas de vuelo completadas, \u00A1Genial!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 97);
} }
function AppComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 98);
} }
function AppComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 99);
} }
function AppComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_198_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.title = 'buenos dias';
        this.vocabulario = ['A', 'W', 'S', 'D', 'a', 'w', 's', 'd'];
        this.hour = -700;
        this.estadoInicio = 0;
        this.estadoFinal = [0];
        this.estadoActual = this.estadoInicio;
        this.heightA = "50px";
        this.heightB = 50;
        this.estatus = false;
        this.vuelo = "-700px";
        this.contador = 0;
        this.progreso = 0;
        this.teclaPresionada = "N/A";
        this.width = -370;
        this.wCtrl = "-370px"; // MAX Horizontal 950px
        this.band = false;
        this.band2 = false;
        this.band3 = false;
        this.color = "#85cadd";
        this.cicle = false;
        this.confirm = false;
    }
    ngOnInit() {
    }
    keypress(e) {
        if (e.key == this.vocabulario[3] || e.key == this.vocabulario[7]) {
            this.teclaD();
        }
        if (e.key == this.vocabulario[0] || e.key == this.vocabulario[4]) {
            this.teclaA();
        }
        if (e.key == this.vocabulario[1] || e.key == this.vocabulario[5]) {
            this.teclaW();
        }
        if (e.key == this.vocabulario[2] || e.key == this.vocabulario[6]) {
            this.teclaS();
        }
        this.teclaPresionada = e.key;
    }
    teclaD() {
        this.estadoActual = 0;
        this.hour += 30;
        this.vuelo = this.hour + 'px';
        if (this.hour >= 1350) {
            this.hour = -700;
            this.vuelo = "-700px";
            this.contador = 0;
            this.progreso = 0;
        }
        this.evalEstado();
        this.countable();
    }
    teclaA() {
        this.hour -= 30;
        this.vuelo = this.hour + 'px';
        if (this.hour <= -700) {
            this.hour = -700;
            this.vuelo = "-700px";
            this.contador = 0;
            this.progreso = 0;
        }
        this.countableLow();
    }
    teclaW() {
        this.heightB -= 5;
        if (this.heightB >= -90) {
            this.heightA = this.heightB + 'px';
        }
    }
    teclaS() {
        this.heightB += 5;
        if (this.heightB <= 190) {
            this.heightA = this.heightB + 'px';
        }
    }
    countableLow() {
        this.contador++;
        if (this.hour >= 4.4 * this.contador) {
            this.progreso -= 3.3;
        }
    }
    countable() {
        this.contador++;
        if (this.hour >= 4.4 * this.contador) {
            this.progreso += 3.3;
        }
    }
    estadoAmanecer() {
        if (this.width > 104) {
            this.estadoActual = 1;
        }
        else {
            this.width += 9.13;
            this.wCtrl = this.width + 'px';
        }
    }
    estadoDia() {
        if (this.estadoActual == 1) {
            if (this.width > 104 && this.width < 497) {
                this.width += 9.13;
                this.wCtrl = this.width + 'px';
            }
            else {
                this.estadoActual = 2;
            }
        }
    }
    estadoAtardecer() {
        if (this.estadoActual == 2) {
            if (this.width > 497 && this.width < 1000) {
                this.width += 9.13;
                this.wCtrl = this.width + 'px';
            }
        }
        if (this.width > 1000) {
            this.estadoActual = 3;
            this.wCtrl = "-370px"; // MAX Horizontal 950px
            this.width = -370;
            this.band = true;
        }
    }
    estadoAnochecer() {
        if (this.width > 104) {
            this.band = false;
            this.band2 = true;
            this.estadoActual = 4;
        }
        else {
            this.estatus = true;
            this.color = '#000';
            this.width += 9.13;
            this.wCtrl = this.width + 'px';
        }
    }
    estadoMadrugada() {
        if (this.width > 104 && this.width < 497) {
            this.width += 9.13;
            this.wCtrl = this.width + 'px';
        }
        else {
            this.band2 = false;
            this.band3 = true;
        }
    }
    estadoFinNoche() {
        if (this.width > 497 && this.width < 1000) {
            this.width += 9.13;
            this.wCtrl = this.width + 'px';
        }
        if (this.width > 1000) {
            this.estadoActual = 3;
            this.wCtrl = "-370px"; // MAX Horizontal 950px
            this.width = -370;
            this.band3 = false;
            this.estatus = false;
            this.estadoActual = 1;
            this.color = "#85cadd";
            this.cicle = true;
            setTimeout(() => {
                this.cicle = false;
            }, 3000);
        }
    }
    confirmar() {
        this.confirm = true;
    }
    evalEstado() {
        if (this.estadoActual === 0 && !this.band && !this.band2 && !this.band3) {
            this.title = 'buenos dias';
            this.estadoAmanecer();
        }
        if (this.estadoActual === 1 && !this.band && !this.band2 && !this.band3) {
            this.estadoDia();
        }
        if (this.estadoActual === 2 && !this.band && !this.band2 && !this.band3) {
            this.title = 'buenas tardes';
            this.color = "#FFDF99";
            this.estadoAtardecer();
        }
        if (this.band) {
            this.title = 'buenas noches';
            this.estadoAnochecer();
        }
        if (this.band2) {
            this.title = 'buenas madrugadas';
            this.color = '#3D487A';
            this.estadoMadrugada();
        }
        if (this.band3) {
            this.title = 'buen fin de noche';
            this.estadoFinNoche();
            this.estadoActual = 0;
            if (this.estadoActual == 0) {
                this.title = 'concluido el ciclo';
                setTimeout(() => {
                    this.cicle = false;
                }, 3000);
            }
            ;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AppComponent_keydown_HostBindingHandler($event) { return ctx.keypress($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 216, vars: 26, consts: [[1, "container", "background"], [1, "mx-auto"], [1, "", 2, "text-align", "center"], ["style", "color: black", 4, "ngIf"], ["style", "color: white", 4, "ngIf"], ["class", "aviso", 4, "ngIf"], ["class", "notification", 4, "ngIf"], ["class", "sun-light", 4, "ngIf"], ["class", "sun", 4, "ngIf"], ["class", "moon", 4, "ngIf"], ["style", "z-index: 1000!important;", 4, "ngIf"], [1, "row", 2, "margin-top", "-0px", "z-index", "-1", "margin-bottom", "50px"], [1, "col"], [1, "container"], [1, "tree", "first"], [1, "trunk"], [1, "crown"], [1, "leaves"], [1, "stadium"], [1, "front"], [1, "pillar-left", "block"], [1, "pillar-center", "block"], [1, "pillar-right", "block"], [1, "cherry-on-top", "block"], [1, "horizontals"], [1, "horizontal", "block"], [1, "block", "diagonal"], [1, "bridge"], [1, "block", "skyscraperII"], [1, "window"], [1, "block", "skyscraperIII"], [1, "tree", "second"], [1, "block", "skyscraper"], [1, "palace"], [1, "block", "floor-eight"], [1, "block", "floor-seven"], [1, "block", "floor-six"], [1, "block", "floor-five"], [1, "block", "floor-four"], [1, "block", "floor-three"], [1, "block", "floor-two"], [1, "block", "floor-one"], [1, "door"], [1, "district"], [1, "block", "house"], [1, "roof"], [1, "libeskind"], [1, "block"], [1, "block", "front"], [1, "streets"], [1, "little-street", "block"], ["class", "decorations", 4, "ngIf"], [1, "sky"], [1, "plane"], [1, "plane-window"], [2, "width", "20px", "height", "20px", "border-radius", "50%", "background", "#e0e0e0", "margin-top", "-30px", "margin-left", "-40px"], [1, "plane-wing"], [1, "plane-backwing"], [1, "add"], [1, "chefron"], [2, "color", "white"], [1, "add-line", "block"], [1, "street", "block"], [1, "pilars"], [1, "pilar-left", "block"], [1, "pilar-right", "block"], [1, "line-left", "one", "block"], [1, "line-left", "two", "block"], [1, "line-left", "three", "block"], [1, "line-right", "one", "block"], [1, "line-right", "two", "block"], [1, "line-right", "three", "block"], [1, "tree", "third"], [2, "margin-bottom", "-158px", "margin-left", "20px"], ["type", "button", 1, "btn", "btn-dark", 2, "margin-top", "10px", "padding", "5px 10px 5px 10px", 3, "click"], ["type", "button", 1, "btn", "btn-dark", 2, "margin-top", "10px", "padding", "5px 10px 5px 10px", "margin-bottom", "75px", 3, "click"], ["type", "button", 1, "btn", "btn-dark", 2, "margin-top", "10px", "padding", "5px 10px 5px 10px", "margin-left", "-33px", 3, "click"], ["type", "button", 1, "btn", "btn-dark", 2, "margin-top", "10px", "padding", "5px 10px 5px 10px", "margin-left", "3px", 3, "click"], [1, "controles"], [1, "form-group", "row"], [1, "col", "w-25"], [1, "col", 2, "margin-left", "-700px"], ["for", "formControlRange"], ["disabled", "", "type", "range", "id", "formControlRange", 1, "form-control-range", 3, "value", "click"], [2, "color", "black"], [1, "aviso"], [1, "jumbotron", 2, "padding", "20px", "height", "600px", "width", "1100px", "background", "#fbbb21"], [1, "display-4", 2, "color", "white"], [1, "lead", 2, "margin-top", "50px", "color", "white"], [1, "my-4"], [2, "margin-left", "20px"], ["type", "button", 1, "btn", "btn-dark", 2, "margin-top", "50px", "padding", "15px 30px 15px 30px"], ["type", "button", 1, "btn", "btn-dark", 2, "margin-top", "10px", "padding", "15px 30px 15px 30px", "margin-bottom", "75px"], ["type", "button", 1, "btn", "btn-dark", 2, "margin-top", "50px", "padding", "15px 30px 15px 30px", "margin-left", "-73px"], ["type", "button", 1, "btn", "btn-dark", 2, "margin-top", "50px", "padding", "15px 30px 15px 30px", "margin-left", "3px"], ["href", "#", "role", "button", 1, "btn", "btn-primary", "btn-lg", 2, "padding", "5px", "margin-top", "20px", "background", "#000", 3, "click"], [1, "notification"], [1, "sun-light"], [1, "sun"], [1, "moon"], [2, "z-index", "1000!important"], [1, "star", 2, "margin-top", "0px", "margin-left", "0px", "margin-bottom", "0px"], [1, "star", 2, "margin-top", "100px", "margin-left", "100px", "margin-bottom", "100px"], [1, "star", 2, "margin-top", "-150px", "margin-left", "300px", "margin-bottom", "100px"], [1, "star", 2, "margin-top", "-200px", "margin-left", "400px", "margin-bottom", "150px"], [1, "star", 2, "margin-top", "-225px", "margin-left", "600px", "margin-bottom", "200px"], [1, "star", 2, "margin-top", "250px", "margin-left", "800px", "margin-bottom", "-25px"], [1, "star", 2, "margin-top", "0px", "margin-left", "1000px", "margin-bottom", "-100px"], [1, "starOff", 2, "margin-top", "0px", "margin-left", "0px", "margin-bottom", "0px"], [1, "starOff", 2, "margin-top", "100px", "margin-left", "100px", "margin-bottom", "100px"], [1, "starOff", 2, "margin-top", "-150px", "margin-left", "300px", "margin-bottom", "100px"], [1, "starOff", 2, "margin-top", "-200px", "margin-left", "400px", "margin-bottom", "150px"], [1, "starOff", 2, "margin-top", "-225px", "margin-left", "600px", "margin-bottom", "200px"], [1, "starOff", 2, "margin-top", "250px", "margin-left", "800px", "margin-bottom", "-25px"], [1, "starOff", 2, "margin-top", "0px", "margin-left", "1000px", "margin-bottom", "-100px"], [1, "decorations"], [1, "circle", "yellow"], [1, "circle", "violet"], [1, "circle", "green"], [1, "rectangle", "yellow"], [1, "rectangle", "red"], [1, "rectangle", "green"], [1, "rectangle", "violet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_h1_4_Template, 2, 1, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_h1_5_Template, 2, 1, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_8_Template, 20, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_10_Template, 5, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_12_Template, 1, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_13_Template, 1, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_15_Template, 1, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_div_16_Template, 8, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_div_17_Template, 8, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, AppComponent_div_99_Template, 8, 0, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h6", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](198, AppComponent_div_198_Template, 8, 0, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_200_listener() { return ctx.teclaA(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_202_listener() { return ctx.teclaW(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_204_listener() { return ctx.teclaS(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_206_listener() { return ctx.teclaD(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "label", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "R E C O R R I D O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_input_click_215_listener() { return ctx.countable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background:", ctx.color, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.confirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cicle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("position: absolute; z-index: 1000000; left: ", ctx.wCtrl, "; top: 100px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("position: absolute; z-index: 1000000; left: ", ctx.wCtrl, "; top: 100px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate2"]("left: ", ctx.vuelo, "; top: ", ctx.heightA, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.estatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.progreso);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@charset \"UTF-8\";\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: content-box;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  margin: 0 auto;\n  position: relative;\n  \n}\n.block[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  border: 2px solid #4a4a49;\n  display: inline-block;\n}\n.skyscraper[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 50px;\n  position: absolute;\n  bottom: 20px;\n  left: 380px;\n}\n.skyscraperII[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 50px;\n  position: absolute;\n  bottom: 0px;\n  left: 10px;\n}\n.skyscraperIII[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 50px;\n  position: absolute;\n  bottom: 0px;\n  left: 80px;\n}\n.window[_ngcontent-%COMP%] {\n  background-color: #5854ae;\n  border: 2px solid #4a4a49;\n  height: 20px;\n  width: 15px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n.window[_ngcontent-%COMP%]:nth-child(1) {\n  top: 10px;\n  animation: window-animation 11s ease infinite;\n}\n.window[_ngcontent-%COMP%]:nth-child(2) {\n  top: 40px;\n  animation: window-animation 11s ease infinite;\n  animation-delay: 0.1s;\n}\n.window[_ngcontent-%COMP%]:nth-child(3) {\n  top: 70px;\n  animation: window-animation 11s ease infinite;\n  animation-delay: 0.2s;\n}\n.window[_ngcontent-%COMP%]:nth-child(4) {\n  top: 100px;\n  animation: window-animation 11s ease infinite;\n  animation-delay: 0.4s;\n}\n.window[_ngcontent-%COMP%]:nth-child(5) {\n  top: 130px;\n  animation: window-animation 11s ease infinite;\n  animation-delay: 0.6s;\n}\n.window[_ngcontent-%COMP%]:nth-child(6) {\n  top: 160px;\n  animation: window-animation 11s ease infinite;\n  animation-delay: 0.8s;\n}\n.district[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 80px;\n  height: 50px;\n  width: 50px;\n}\n.house[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 25px;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n}\n.roof[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-left: 14px solid transparent;\n  border-right: 14px solid transparent;\n  border-bottom: 14px solid #4a4a49;\n  position: absolute;\n  left: -1px;\n  top: -15px;\n  z-index: 5;\n}\n.house[_ngcontent-%COMP%]:nth-child(2) {\n  height: 35px;\n  width: 23px;\n  position: absolute;\n  bottom: 0px;\n  left: 30px;\n}\n.house[_ngcontent-%COMP%]:nth-child(2)   .roof[_ngcontent-%COMP%] {\n  border-left: 13px solid transparent;\n  border-right: 13px solid transparent;\n  border-bottom: 13px solid #4a4a49;\n  left: -2px;\n  top: -28px;\n}\n.libeskind[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 35px;\n  position: absolute;\n  bottom: 20px;\n  right: 10px;\n}\n.libeskind[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  height: 180px;\n  width: 40px;\n  position: absolute;\n  bottom: 20px;\n  right: 5px;\n  z-index: 5;\n  border-left: 0;\n  border-top: 0;\n}\n.libeskind[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]:before {\n  content: \" \";\n  display: inline-block;\n  width: 35px;\n  height: 210px;\n  position: absolute;\n  bottom: -2px;\n  left: -22px;\n  -webkit-transform: skew(10deg);\n  -moz-transform: skew(10deg);\n  -o-transform: skew(10deg);\n  background-color: #e0e0e0;\n  border: 2px solid #4a4a49;\n  border-right: 0;\n}\n.libeskind[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: inline-block;\n  width: 55px;\n  height: 20px;\n  position: absolute;\n  top: -18px;\n  right: 0;\n  -webkit-transform: rotate(34deg);\n  -moz-transform: rotate(34deg);\n  -o-transform: rotate(34deg);\n  background-color: #e0e0e0;\n  border-top: 2px solid #4a4a49;\n}\n.libeskind[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: inline-block;\n  background-color: #c1272d;\n  width: 2px;\n  height: 205px;\n  -webkit-transform: rotate(-10deg);\n  -moz-transform: rotate(-10deg);\n  -o-transform: rotate(-10deg);\n  position: absolute;\n  bottom: 25px;\n  right: 60px;\n  z-index: 20;\n  background: linear-gradient(258deg, #e84331, #e87b31, #e8c431, #18b44e, #20a9d2, #2420d2, #d22020, #c1272d, #c1272d, #c1272d);\n  background-size: 100% 800%;\n  animation: gradient-animation 9s ease infinite;\n}\n.tree[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 6px;\n  height: 20px;\n  background-color: #4a4a49;\n  bottom: 20px;\n}\n.tree.first[_ngcontent-%COMP%] {\n  left: 0px;\n}\n.tree.second[_ngcontent-%COMP%] {\n  left: 340px;\n}\n.tree.third[_ngcontent-%COMP%] {\n  left: 640px;\n}\n.crown[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -20px;\n  bottom: 0;\n}\n.leaves[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  background-color: #00a99d;\n  border-radius: 100%;\n  border: 2px solid #4a4a49;\n  z-index: 7;\n  position: absolute;\n  left: 0px;\n  bottom: 13px;\n}\n.leaves[_ngcontent-%COMP%]:nth-child(2) {\n  left: 15px;\n  bottom: 13px;\n  z-index: 5;\n}\n.leaves[_ngcontent-%COMP%]:nth-child(3) {\n  left: 5px;\n  bottom: 25px;\n  z-index: 9;\n}\n.palace[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 200px;\n  position: absolute;\n  left: 450px;\n  bottom: 20px;\n}\n.palace[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.palace[_ngcontent-%COMP%]   .floor-eight[_ngcontent-%COMP%] {\n  width: 0;\n  height: 100%;\n}\n.palace[_ngcontent-%COMP%]   .floor-seven[_ngcontent-%COMP%] {\n  width: 2%;\n  height: 92%;\n}\n.palace[_ngcontent-%COMP%]   .floor-six[_ngcontent-%COMP%] {\n  width: 8%;\n  height: 87%;\n}\n.palace[_ngcontent-%COMP%]   .floor-five[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 80%;\n}\n.palace[_ngcontent-%COMP%]   .floor-four[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 65%;\n}\n.palace[_ngcontent-%COMP%]   .floor-three[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 55%;\n}\n.palace[_ngcontent-%COMP%]   .floor-two[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 30%;\n}\n.palace[_ngcontent-%COMP%]   .floor-one[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10%;\n}\n.palace[_ngcontent-%COMP%]   .door[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  z-index: 10;\n  background-color: #ffffff;\n  border: 2px solid #4a4a49;\n}\n.bridge[_ngcontent-%COMP%] {\n  width: 125px;\n  height: 95px;\n  position: absolute;\n  left: 175px;\n  bottom: 20px;\n}\n.street[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  bottom: 0;\n  z-index: 5;\n}\n.pilar-left[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 50px;\n  -webkit-transform: skew(-10deg);\n  -moz-transform: skew(-10deg);\n  -o-transform: skew(-10deg);\n  z-index: 10;\n}\n.pilar-right[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 70px;\n  -webkit-transform: skew(10deg);\n  -moz-transform: skew(10deg);\n  -o-transform: skew(10deg);\n}\n.line-right[_ngcontent-%COMP%] {\n  width: 0px;\n  border-width: 1px;\n  height: 95%;\n  position: absolute;\n  top: 0;\n  left: 80px;\n  -webkit-transform: skew(20deg);\n  -moz-transform: skew(20deg);\n  -o-transform: skew(20deg);\n  z-index: -1;\n}\n.line-right.two[_ngcontent-%COMP%] {\n  left: 85px;\n  -webkit-transform: skew(25deg);\n  -moz-transform: skew(25deg);\n  -o-transform: skew(25deg);\n}\n.line-right.three[_ngcontent-%COMP%] {\n  left: 90px;\n  -webkit-transform: skew(30deg);\n  -moz-transform: skew(30deg);\n  -o-transform: skew(30deg);\n}\n.line-left[_ngcontent-%COMP%] {\n  width: 0px;\n  border-width: 1px;\n  height: 95%;\n  position: absolute;\n  top: 0;\n  left: 43px;\n  -webkit-transform: skew(-20deg);\n  -moz-transform: skew(-20deg);\n  -o-transform: skew(-20deg);\n  z-index: -1;\n}\n.line-left.two[_ngcontent-%COMP%] {\n  left: 38px;\n  -webkit-transform: skew(-25deg);\n  -moz-transform: skew(-25deg);\n  -o-transform: skew(-25deg);\n}\n.line-left.three[_ngcontent-%COMP%] {\n  left: 33px;\n  -webkit-transform: skew(-30deg);\n  -moz-transform: skew(-30deg);\n  -o-transform: skew(-30deg);\n}\n.stadium[_ngcontent-%COMP%] {\n  border-top: 60px solid #e0e0e0;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  height: 0;\n  width: 100px;\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n}\n.pillar-center[_ngcontent-%COMP%] {\n  height: 85px;\n  width: 0px;\n  border-width: 1px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  z-index: 5;\n}\n.pillar-left[_ngcontent-%COMP%] {\n  height: 73px;\n  width: 0px;\n  border-width: 1px;\n  position: absolute;\n  bottom: 0;\n  left: -10px;\n  z-index: 5;\n  -webkit-transform: skew(12deg);\n  -moz-transform: skew(12deg);\n  -o-transform: skew(12deg);\n}\n.pillar-left[_ngcontent-%COMP%]:nth-child(2) {\n  height: 70px;\n  left: 10px;\n  z-index: 5;\n  -webkit-transform: skew(8deg);\n  -moz-transform: skew(8deg);\n  -o-transform: skew(8deg);\n}\n.pillar-left[_ngcontent-%COMP%]:nth-child(3) {\n  height: 68px;\n  left: 30px;\n  z-index: 5;\n  -webkit-transform: skew(4deg);\n  -moz-transform: skew(4deg);\n  -o-transform: skew(4deg);\n}\n.pillar-right[_ngcontent-%COMP%] {\n  height: 73px;\n  width: 0px;\n  border-width: 1px;\n  position: absolute;\n  bottom: 0;\n  right: -10px;\n  z-index: 5;\n  -webkit-transform: skew(-12deg);\n  -moz-transform: skew(-12deg);\n  -o-transform: skew(-12deg);\n}\n.pillar-right[_ngcontent-%COMP%]:nth-child(2) {\n  height: 70px;\n  right: 10px;\n  z-index: 5;\n  -webkit-transform: skew(-8deg);\n  -moz-transform: skew(-8deg);\n  -o-transform: skew(-8deg);\n}\n.pillar-right[_ngcontent-%COMP%]:nth-child(3) {\n  height: 68px;\n  right: 30px;\n  z-index: 5;\n  -webkit-transform: skew(-4deg);\n  -moz-transform: skew(-4deg);\n  -o-transform: skew(-4deg);\n}\n.horizontal[_ngcontent-%COMP%] {\n  height: 0;\n  width: 107%;\n  border-width: 1px;\n  position: absolute;\n  bottom: 15px;\n  left: -5%;\n  right: 0;\n  margin: 0 auto;\n  z-index: 5;\n  animation: stadium-animation ease 5s infinite;\n}\n.horizontal[_ngcontent-%COMP%]:nth-child(2) {\n  bottom: 30px;\n  width: 113%;\n  left: -8%;\n}\n.horizontal[_ngcontent-%COMP%]:nth-child(3) {\n  bottom: 45px;\n  width: 118%;\n  left: -10%;\n}\n.horizontal[_ngcontent-%COMP%]:nth-child(4) {\n  bottom: 60px;\n  width: 124%;\n  left: -13%;\n}\n.diagonal[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #4a4a49;\n  height: 0;\n  width: 60px;\n  border-width: 1px;\n  bottom: 65px;\n  right: 50px;\n  margin: 0;\n  z-index: -1;\n  -webkit-transform: rotate(-10deg);\n  -moz-transform: rotate(-10deg);\n  -o-transform: rotate(-10deg);\n}\n.diagonal[_ngcontent-%COMP%]:nth-child(6) {\n  right: -10px;\n  z-index: -1;\n  -webkit-transform: rotate(10deg);\n  -moz-transform: rotate(10deg);\n  -o-transform: rotate(10deg);\n}\n.cherry-on-top[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 10px;\n  width: 20px;\n  height: 6px;\n  left: 0;\n  right: 0;\n  bottom: 70px;\n  margin: 0 auto;\n  z-index: 10;\n}\n.little-street[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  bottom: 0;\n  width: 30px;\n  border-width: 1px;\n}\n.little-street[_ngcontent-%COMP%]:nth-child(2) {\n  left: 130px;\n  bottom: 7px;\n}\n.little-street[_ngcontent-%COMP%]:nth-child(3) {\n  left: 150px;\n  bottom: -5px;\n}\n.little-street[_ngcontent-%COMP%]:nth-child(4) {\n  left: 475px;\n}\n.little-street[_ngcontent-%COMP%]:nth-child(5) {\n  left: 525px;\n  bottom: 5px;\n}\n.little-street[_ngcontent-%COMP%]:nth-child(6) {\n  left: 750px;\n}\n.circle[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 100px;\n  position: absolute;\n}\n.circle.yellow[_ngcontent-%COMP%] {\n  background-color: #fbbb21;\n  left: 550px;\n  top: 5px;\n}\n.circle.violet[_ngcontent-%COMP%] {\n  background-color: #5854ae;\n  left: 150px;\n  top: 0px;\n}\n.circle.green[_ngcontent-%COMP%] {\n  background-color: #00a99d;\n  left: 125px;\n  top: 150px;\n}\n.rectangle[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 4px;\n  position: absolute;\n}\n.rectangle.yellow[_ngcontent-%COMP%] {\n  background-color: #fbbb21;\n  left: 10px;\n  top: 50px;\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n}\n.rectangle.red[_ngcontent-%COMP%] {\n  background-color: #c1272d;\n  left: 80px;\n  top: 125px;\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n}\n.rectangle.green[_ngcontent-%COMP%] {\n  background-color: #00a99d;\n  left: 650px;\n  top: 35px;\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n}\n.rectangle.violet[_ngcontent-%COMP%] {\n  background-color: #5854ae;\n  left: 560px;\n  top: 125px;\n  -webkit-transform: rotate(15deg);\n  -moz-transform: rotate(15deg);\n  -o-transform: rotate(15deg);\n}\n.sky[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 50px;\n  position: absolute;\n  perspective: 200px;\n  perspective-origin: 50% 50px;\n  z-index: 120000000;\n  \n}\n.plane[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 14px;\n  background-color: #4a4a49;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transform: rotateY(-75deg) skewY(14deg);\n  border-radius: 15px 10px 10px 15px;\n  z-index: 120000000;\n  \n  \n}\n.plane[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: inline-block;\n  width: 144px;\n  height: 11px;\n  background-color: #e0e0e0;\n  position: absolute;\n  right: 1px;\n  top: 2px;\n  border-radius: 11px 7px 7px 11px;\n  z-index: -3 !important;\n}\n.plane-window[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 5px;\n  background-color: #29abe2;\n  border: 2px solid #4a4a49;\n  border-radius: 10px;\n  position: absolute;\n  top: 7px;\n  right: -4px;\n  z-index: 20;\n}\n.plane-wing[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  width: 25px;\n  height: 5px;\n  -webkit-transform: rotateY(-25deg) skewY(14deg) rotateZ(-40deg);\n  -moz-transform: rotateY(-25deg) skewY(14deg) rotateZ(-40deg);\n  -o-transform: rotateY(-25deg) skewY(14deg) rotateZ(-40deg);\n  border-radius: 10px 10px 15px 15px;\n  border: 2px solid #4a4a49;\n  position: absolute;\n  top: 12px;\n  right: 30px;\n  z-index: 20;\n  animation: wing-animation 4s ease infinite;\n}\n.plane-backwing[_ngcontent-%COMP%]:after {\n  content: \"\u25E2\";\n  color: #e0e0e0;\n  display: inline-block;\n  font-size: 16px;\n  z-index: 20;\n  position: absolute;\n  top: -18px;\n  right: 110px;\n  -webkit-text-stroke: 1px #4a4a49;\n}\n.chefron[_ngcontent-%COMP%] {\n  width: 155px;\n  height: 15px;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 55px;\n  z-index: 10;\n}\n.chefron[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  display: inline-block;\n  background-color: #fbbb21;\n  width: 75px;\n  height: 15px;\n  -webkit-transform: skewY(2deg);\n  -moz-transform: skewY(2deg);\n  -o-transform: skewY(2deg);\n  border: 2px solid #4a4a49;\n  border-right: 0;\n}\n.chefron[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  display: inline-block;\n  background-color: #fbbb21;\n  width: 75px;\n  height: 15px;\n  -webkit-transform: skewY(-2deg);\n  -moz-transform: skewY(-2deg);\n  -o-transform: skewY(-2deg);\n  border: 2px solid #4a4a49;\n  border-left: 0;\n}\n.add[_ngcontent-%COMP%] {\n  width: 125px;\n}\n.add[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:before {\n  content: \"\u25BC\";\n  color: #4a4a49;\n  display: inline-block;\n  font-size: 17px;\n  -webkit-transform: rotate(10deg);\n  -moz-transform: rotate(10deg);\n  -o-transform: rotate(10deg);\n  z-index: -1;\n  position: absolute;\n}\n.add[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(1):before {\n  top: -12px;\n  left: 0px;\n}\n.add[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(2):before {\n  top: -9px;\n  left: 14px;\n}\n.add[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(3):before {\n  top: -7px;\n  left: 26px;\n}\n.add[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(4):before {\n  top: -5px;\n  left: 40px;\n}\n.add[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:after {\n  content: \"\u25BC\";\n  display: inline-block;\n  font-size: 12px;\n  -webkit-transform: rotate(10deg);\n  -moz-transform: rotate(10deg);\n  -o-transform: rotate(10deg);\n  z-index: 3;\n  position: absolute;\n}\n.add[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(1):after {\n  color: #5854ae;\n  top: -10px;\n  left: 3px;\n}\n.add[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(2):after {\n  color: #00a99d;\n  top: -8px;\n  left: 16px;\n}\n.add[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(3):after {\n  color: #29abe2;\n  top: -6px;\n  left: 28px;\n}\n.add[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(4):after {\n  color: #c1272d;\n  top: -4px;\n  left: 43px;\n}\n.add-line[_ngcontent-%COMP%] {\n  height: 0;\n  width: 75px;\n  border-width: 1px;\n  position: absolute;\n  top: 0;\n  right: 75px;\n  margin: 0 auto;\n  z-index: 5;\n}\n.add-line[_ngcontent-%COMP%]:last-child {\n  top: 5px;\n  right: 110px;\n  width: 40px;\n  transform: rotate(-20deg);\n  background-color: #4a4a49;\n}\n@keyframes gradient-animation {\n  0% {\n    background-position: 0% 34%;\n  }\n  50% {\n    background-position: 100% 67%;\n  }\n  100% {\n    background-position: 0% 34%;\n  }\n}\n@keyframes sky-animation {\n  0% {\n    left: -1000px;\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(3deg);\n  }\n  50% {\n    left: 300px;\n  }\n  75% {\n    transform: rotate(-2deg);\n  }\n  100% {\n    left: 1600px;\n    transform: rotate(0deg);\n  }\n}\n@keyframes window-animation {\n  49% {\n    background-color: #5854ae;\n  }\n  50% {\n    background-color: #ffffff;\n  }\n  51% {\n    background-color: #5854ae;\n  }\n}\n@keyframes wing-animation {\n  0% {\n    transform: rotateY(-35deg);\n  }\n  50% {\n    transform: rotateY(-25deg);\n  }\n  100% {\n    transform: rotateY(-35deg);\n  }\n}\n@keyframes stadium-animation {\n  50% {\n    border-bottom: 3px solid #c1272d;\n  }\n}\n.sun[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  background: #fbbb21;\n  border-radius: 50%;\n  z-index: 10;\n  margin-top: -125px;\n  margin-left: 225px;\n  animation: sky-animation 9s ease infinite;\n}\n.sun-light[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  background: #fbbb21;\n  opacity: 20%;\n  border-radius: 50%;\n  z-index: 10;\n  margin-left: 200px;\n  animation: sky-animation 9s ease infinite;\n}\n.moon[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n  background-color: transparent;\n  box-shadow: -10px 10px 0 7.5px white;\n  border-radius: 50%;\n  margin-top: -125px;\n  margin-left: 225px;\n  position: absolute;\n  z-index: 10000000;\n  top: 200px;\n  animation: sky-animation 9s ease infinite;\n}\n.controles[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  background: #fbbb21;\n  padding: 20px;\n  border-radius: 10px;\n  color: white;\n}\n.star[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: white;\n}\n.starOff[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: transparent;\n}\n.notification[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  background-color: #fbbb21;\n  padding: 10px;\n  border-radius: 10px;\n  color: white;\n}\n.aviso[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  text-align: center;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7Ozs7O0NBQUE7QUFXQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFBRjtBQUdBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQUY7QUFHQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FBQUY7QUFHQTtFQUNFLFNBQUE7RUFHQSw2Q0FBQTtBQUFGO0FBR0E7RUFDRSxTQUFBO0VBR0EsNkNBQUE7RUFDQSxxQkFBQTtBQUFGO0FBR0E7RUFDRSxTQUFBO0VBR0EsNkNBQUE7RUFDQSxxQkFBQTtBQUFGO0FBR0E7RUFDRSxVQUFBO0VBR0EsNkNBQUE7RUFDQSxxQkFBQTtBQUFGO0FBR0E7RUFDRSxVQUFBO0VBR0EsNkNBQUE7RUFDQSxxQkFBQTtBQUFGO0FBR0E7RUFDRSxVQUFBO0VBR0EsNkNBQUE7RUFDQSxxQkFBQTtBQUFGO0FBS0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFGRjtBQUtBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBRkY7QUFJQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBREY7QUFJQTtFQUNFLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBREY7QUFJQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQURGO0FBSUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQURGO0FBSUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw2SEFBQTtFQUNBLDBCQUFBO0VBR0EsOENBQUE7QUFERjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQURGO0FBSUE7RUFDRSxTQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtBQURGO0FBSUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFERjtBQUlBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBREY7QUFJQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFERjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBREY7QUFJQTtFQUNFLFFBQUE7RUFDQSxZQUFBO0FBREY7QUFJQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FBREY7QUFJQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FBREY7QUFJQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBREY7QUFJQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBREY7QUFJQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBREY7QUFJQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7RUFD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c2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG5saWdodCBibHVlOiAjODVjYWRkXG5ibHVlOiAjMjlhYmUyXG55ZWxsb3c6ICNmYmJiMjFcbnJlZDogI2MxMjcyZFxuZ3JlZW46ICMwMGE5OWRcbnZpb2xldDogIzU4NTRhZVxubGlnaHQgZ3JleTogI2UwZTBlMFxuZ3JleTogIzRhNGE0OVxuKi9cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbmJvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyAqL1xufVxuXG4uYmxvY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNGE0YTQ5O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5za3lzY3JhcGVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiAzODBweDtcbn1cblxuLnNreXNjcmFwZXJJSSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4uc2t5c2NyYXBlcklJSSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiA4MHB4O1xufVxuXG4ud2luZG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NTRhZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzRhNGE0OTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi53aW5kb3c6bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiAxMHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogd2luZG93LWFuaW1hdGlvbiAxMXMgZWFzZSBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHdpZG5vdy1hbmltYXRpb24gMTFzIGVhc2UgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogd2luZG93LWFuaW1hdGlvbiAxMXMgZWFzZSBpbmZpbml0ZTtcbn1cblxuLndpbmRvdzpudGgtY2hpbGQoMikge1xuICB0b3A6IDQwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiB3aW5kb3ctYW5pbWF0aW9uIDExcyBlYXNlIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogd2luZG93LWFuaW1hdGlvbiAxMXMgZWFzZSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiB3aW5kb3ctYW5pbWF0aW9uIDExcyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XG59XG5cbi53aW5kb3c6bnRoLWNoaWxkKDMpIHtcbiAgdG9wOiA3MHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogd2luZG93LWFuaW1hdGlvbiAxMXMgZWFzZSBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHdpbmRvdy1hbmltYXRpb24gMTFzIGVhc2UgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogd2luZG93LWFuaW1hdGlvbiAxMXMgZWFzZSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4ud2luZG93Om50aC1jaGlsZCg0KSB7XG4gIHRvcDogMTAwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiB3aW5kb3ctYW5pbWF0aW9uIDExcyBlYXNlIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogd2luZG93LWFuaW1hdGlvbiAxMXMgZWFzZSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiB3aW5kb3ctYW5pbWF0aW9uIDExcyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG59XG5cbi53aW5kb3c6bnRoLWNoaWxkKDUpIHtcbiAgdG9wOiAxMzBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHdpbmRvdy1hbmltYXRpb24gMTFzIGVhc2UgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiB3aW5kb3ctYW5pbWF0aW9uIDExcyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb246IHdpbmRvdy1hbmltYXRpb24gMTFzIGVhc2UgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuLndpbmRvdzpudGgtY2hpbGQoNikge1xuICB0b3A6IDE2MHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogd2luZG93LWFuaW1hdGlvbiAxMXMgZWFzZSBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHdpbmRvdy1hbmltYXRpb24gMTFzIGVhc2UgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogd2luZG93LWFuaW1hdGlvbiAxMXMgZWFzZSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xufVxuXG4uZGlzdHJpY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDgwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5ob3VzZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbn1cblxuLnJvb2Yge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxNHB4IHNvbGlkICM0YTRhNDk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtMTVweDtcbiAgei1pbmRleDogNTtcbn1cblxuLmhvdXNlOm50aC1jaGlsZCgyKSB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDIzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDMwcHg7XG59XG5cbi5ob3VzZTpudGgtY2hpbGQoMikgLnJvb2Yge1xuICBib3JkZXItbGVmdDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxM3B4IHNvbGlkICM0YTRhNDk7XG4gIGxlZnQ6IC0ycHg7XG4gIHRvcDogLTI4cHg7XG59XG5cbi5saWJlc2tpbmQgLmJsb2NrIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDM1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmxpYmVza2luZCAuZnJvbnQge1xuICBoZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHotaW5kZXg6IDU7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItdG9wOiAwO1xufVxuXG4ubGliZXNraW5kIC5mcm9udDpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAyMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0ycHg7XG4gIGxlZnQ6IC0yMnB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygxMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiBza2V3KDEwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiBza2V3KDEwZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzRhNGE0OTtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuXG4ubGliZXNraW5kIC5mcm9udDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMThweDtcbiAgcmlnaHQ6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzRkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM0ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzRkZWcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzRhNGE0OTtcbn1cblxuLmxpYmVza2luZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxMjcyZDtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAyMDVweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyNXB4O1xuICByaWdodDogNjBweDtcbiAgei1pbmRleDogMjA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNThkZWcsICNlODQzMzEsICNlODdiMzEsICNlOGM0MzEsICMxOGI0NGUsICMyMGE5ZDIsICMyNDIwZDIsICNkMjIwMjAsICNjMTI3MmQsICNjMTI3MmQsICNjMTI3MmQpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgODAwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGdyYWRpZW50LWFuaW1hdGlvbiA5cyBlYXNlIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogZ3JhZGllbnQtYW5pbWF0aW9uIDlzIGVhc2UgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogZ3JhZGllbnQtYW5pbWF0aW9uIDlzIGVhc2UgaW5maW5pdGU7XG59XG5cbi50cmVlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNDk7XG4gIGJvdHRvbTogMjBweDtcbn1cblxuLnRyZWUuZmlyc3Qge1xuICBsZWZ0OiAwcHg7XG59XG5cbi50cmVlLnNlY29uZCB7XG4gIGxlZnQ6IDM0MHB4O1xufVxuXG4udHJlZS50aGlyZCB7XG4gIGxlZnQ6IDY0MHB4O1xufVxuXG4uY3Jvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0yMHB4O1xuICBib3R0b206IDA7XG59XG5cbi5sZWF2ZXMge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhOTlkO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNGE0YTQ5O1xuICB6LWluZGV4OiA3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiAxM3B4O1xufVxuXG4ubGVhdmVzOm50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDE1cHg7XG4gIGJvdHRvbTogMTNweDtcbiAgei1pbmRleDogNTtcbn1cblxuLmxlYXZlczpudGgtY2hpbGQoMykge1xuICBsZWZ0OiA1cHg7XG4gIGJvdHRvbTogMjVweDtcbiAgei1pbmRleDogOTtcbn1cblxuLnBhbGFjZSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0NTBweDtcbiAgYm90dG9tOiAyMHB4O1xufVxuXG4ucGFsYWNlIC5ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5wYWxhY2UgLmZsb29yLWVpZ2h0IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBhbGFjZSAuZmxvb3Itc2V2ZW4ge1xuICB3aWR0aDogMiU7XG4gIGhlaWdodDogOTIlO1xufVxuXG4ucGFsYWNlIC5mbG9vci1zaXgge1xuICB3aWR0aDogOCU7XG4gIGhlaWdodDogODclO1xufVxuXG4ucGFsYWNlIC5mbG9vci1maXZlIHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi5wYWxhY2UgLmZsb29yLWZvdXIge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDY1JTtcbn1cblxuLnBhbGFjZSAuZmxvb3ItdGhyZWUge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuLnBhbGFjZSAuZmxvb3ItdHdvIHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAzMCU7XG59XG5cbi5wYWxhY2UgLmZsb29yLW9uZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwJTtcbn1cblxuLnBhbGFjZSAuZG9vciB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMnB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNGE0YTQ5O1xufVxuXG4uYnJpZGdlIHtcbiAgd2lkdGg6IDEyNXB4O1xuICBoZWlnaHQ6IDk1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTc1cHg7XG4gIGJvdHRvbTogMjBweDtcbn1cblxuLnN0cmVldCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5waWxhci1sZWZ0IHtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTEwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHNrZXcoLTEwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiBza2V3KC0xMGRlZyk7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4ucGlsYXItcmlnaHQge1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA3MHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygxMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiBza2V3KDEwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiBza2V3KDEwZGVnKTtcbn1cblxuLmxpbmUtcmlnaHQge1xuICB3aWR0aDogMHB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiA5NSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA4MHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygyMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiBza2V3KDIwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiBza2V3KDIwZGVnKTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5saW5lLXJpZ2h0LnR3byB7XG4gIGxlZnQ6IDg1cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDI1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHNrZXcoMjVkZWcpO1xuICAtby10cmFuc2Zvcm06IHNrZXcoMjVkZWcpO1xufVxuXG4ubGluZS1yaWdodC50aHJlZSB7XG4gIGxlZnQ6IDkwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDMwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHNrZXcoMzBkZWcpO1xuICAtby10cmFuc2Zvcm06IHNrZXcoMzBkZWcpO1xufVxuXG4ubGluZS1sZWZ0IHtcbiAgd2lkdGg6IDBweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGhlaWdodDogOTUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNDNweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTIwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHNrZXcoLTIwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiBza2V3KC0yMGRlZyk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubGluZS1sZWZ0LnR3byB7XG4gIGxlZnQ6IDM4cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0yNWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiBza2V3KC0yNWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogc2tldygtMjVkZWcpO1xufVxuXG4ubGluZS1sZWZ0LnRocmVlIHtcbiAgbGVmdDogMzNweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTMwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHNrZXcoLTMwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiBza2V3KC0zMGRlZyk7XG59XG5cbi5zdGFkaXVtIHtcbiAgYm9yZGVyLXRvcDogNjBweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDIwcHg7XG59XG5cbi5waWxsYXItY2VudGVyIHtcbiAgaGVpZ2h0OiA4NXB4O1xuICB3aWR0aDogMHB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogNTtcbn1cblxuLnBpbGxhci1sZWZ0IHtcbiAgaGVpZ2h0OiA3M3B4O1xuICB3aWR0aDogMHB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IC0xMHB4O1xuICB6LWluZGV4OiA1O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygxMmRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiBza2V3KDEyZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiBza2V3KDEyZGVnKTtcbn1cblxuLnBpbGxhci1sZWZ0Om50aC1jaGlsZCgyKSB7XG4gIGhlaWdodDogNzBweDtcbiAgbGVmdDogMTBweDtcbiAgei1pbmRleDogNTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoOGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiBza2V3KDhkZWcpO1xuICAtby10cmFuc2Zvcm06IHNrZXcoOGRlZyk7XG59XG5cbi5waWxsYXItbGVmdDpudGgtY2hpbGQoMykge1xuICBoZWlnaHQ6IDY4cHg7XG4gIGxlZnQ6IDMwcHg7XG4gIHotaW5kZXg6IDU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDRkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogc2tldyg0ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiBza2V3KDRkZWcpO1xufVxuXG4ucGlsbGFyLXJpZ2h0IHtcbiAgaGVpZ2h0OiA3M3B4O1xuICB3aWR0aDogMHB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAtMTBweDtcbiAgei1pbmRleDogNTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTEyZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHNrZXcoLTEyZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiBza2V3KC0xMmRlZyk7XG59XG5cbi5waWxsYXItcmlnaHQ6bnRoLWNoaWxkKDIpIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogNTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLThkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogc2tldygtOGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogc2tldygtOGRlZyk7XG59XG5cbi5waWxsYXItcmlnaHQ6bnRoLWNoaWxkKDMpIHtcbiAgaGVpZ2h0OiA2OHB4O1xuICByaWdodDogMzBweDtcbiAgei1pbmRleDogNTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTRkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogc2tldygtNGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogc2tldygtNGRlZyk7XG59XG5cbi5ob3Jpem9udGFsIHtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMTA3JTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNXB4O1xuICBsZWZ0OiAtNSU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogNTtcbiAgYW5pbWF0aW9uOiBzdGFkaXVtLWFuaW1hdGlvbiBlYXNlIDVzIGluZmluaXRlO1xufVxuXG4uaG9yaXpvbnRhbDpudGgtY2hpbGQoMikge1xuICBib3R0b206IDMwcHg7XG4gIHdpZHRoOiAxMTMlO1xuICBsZWZ0OiAtOCU7XG59XG5cbi5ob3Jpem9udGFsOm50aC1jaGlsZCgzKSB7XG4gIGJvdHRvbTogNDVweDtcbiAgd2lkdGg6IDExOCU7XG4gIGxlZnQ6IC0xMCU7XG59XG5cbi5ob3Jpem9udGFsOm50aC1jaGlsZCg0KSB7XG4gIGJvdHRvbTogNjBweDtcbiAgd2lkdGg6IDEyNCU7XG4gIGxlZnQ6IC0xMyU7XG59XG5cbi5kaWFnb25hbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0OTtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogNjBweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvdHRvbTogNjVweDtcbiAgcmlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMDtcbiAgei1pbmRleDogLTE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xufVxuXG4uZGlhZ29uYWw6bnRoLWNoaWxkKDYpIHtcbiAgcmlnaHQ6IC0xMHB4O1xuICB6LWluZGV4OiAtMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG59XG5cbi5jaGVycnktb24tdG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDcwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmxpdHRsZS1zdHJlZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xufVxuXG4ubGl0dGxlLXN0cmVldDpudGgtY2hpbGQoMikge1xuICBsZWZ0OiAxMzBweDtcbiAgYm90dG9tOiA3cHg7XG59XG5cbi5saXR0bGUtc3RyZWV0Om50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDE1MHB4O1xuICBib3R0b206IC01cHg7XG59XG5cbi5saXR0bGUtc3RyZWV0Om50aC1jaGlsZCg0KSB7XG4gIGxlZnQ6IDQ3NXB4O1xufVxuXG4ubGl0dGxlLXN0cmVldDpudGgtY2hpbGQoNSkge1xuICBsZWZ0OiA1MjVweDtcbiAgYm90dG9tOiA1cHg7XG59XG5cbi5saXR0bGUtc3RyZWV0Om50aC1jaGlsZCg2KSB7XG4gIGxlZnQ6IDc1MHB4O1xufVxuXG4uY2lyY2xlIHtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jaXJjbGUueWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYmIyMTtcbiAgbGVmdDogNTUwcHg7XG4gIHRvcDogNXB4O1xufVxuXG4uY2lyY2xlLnZpb2xldCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODU0YWU7XG4gIGxlZnQ6IDE1MHB4O1xuICB0b3A6IDBweDtcbn1cblxuLmNpcmNsZS5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE5OWQ7XG4gIGxlZnQ6IDEyNXB4O1xuICB0b3A6IDE1MHB4O1xufVxuXG4ucmVjdGFuZ2xlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5yZWN0YW5nbGUueWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYmIyMTtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiA1MHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLnJlY3RhbmdsZS5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzEyNzJkO1xuICBsZWZ0OiA4MHB4O1xuICB0b3A6IDEyNXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLnJlY3RhbmdsZS5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE5OWQ7XG4gIGxlZnQ6IDY1MHB4O1xuICB0b3A6IDM1cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4ucmVjdGFuZ2xlLnZpb2xldCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODU0YWU7XG4gIGxlZnQ6IDU2MHB4O1xuICB0b3A6IDEyNXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcbn1cblxuLnNreSB7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBlcnNwZWN0aXZlOiAyMDBweDtcbiAgcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgNTBweDtcbiAgei1pbmRleDogMTIwMDAwMDAwO1xuICAvKiAgLXdlYmtpdC1hbmltYXRpb246IHNreS1hbmltYXRpb24gOXMgZWFzZSBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHNreS1hbmltYXRpb24gOXMgZWFzZSBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IHNreS1hbmltYXRpb24gOXMgZWFzZSBpbmZpbml0ZTsqL1xufVxuXG4ucGxhbmUge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtNzVkZWcpIHNrZXdZKDE0ZGVnKTtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxMHB4IDEwcHggMTVweDtcbiAgei1pbmRleDogMTIwMDAwMDAwO1xuICAvKiAgICBib3JkZXI6IDNweCBzb2xpZCAjNGE0YTQ5OyovXG4gIC8qICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgIzRhNGE0OTsqL1xufVxuXG4ucGxhbmU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNDRweDtcbiAgaGVpZ2h0OiAxMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcHg7XG4gIHRvcDogMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMXB4IDdweCA3cHggMTFweDtcbiAgei1pbmRleDogLTMgIWltcG9ydGFudDtcbn1cblxuLnBsYW5lLXdpbmRvdyB7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlhYmUyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNGE0YTQ5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogN3B4O1xuICByaWdodDogLTRweDtcbiAgei1pbmRleDogMjA7XG59XG5cbi5wbGFuZS13aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogNXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMjVkZWcpIHNrZXdZKDE0ZGVnKSByb3RhdGVaKC00MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0yNWRlZykgc2tld1koMTRkZWcpIHJvdGF0ZVooLTQwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKC0yNWRlZykgc2tld1koMTRkZWcpIHJvdGF0ZVooLTQwZGVnKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDE1cHggMTVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzRhNGE0OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiAyMDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHdpbmctYW5pbWF0aW9uIDRzIGVhc2UgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiB3aW5nLWFuaW1hdGlvbiA0cyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb246IHdpbmctYW5pbWF0aW9uIDRzIGVhc2UgaW5maW5pdGU7XG59XG5cbi5wbGFuZS1iYWNrd2luZzphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4peiXCI7XG4gIGNvbG9yOiAjZTBlMGUwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgei1pbmRleDogMjA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMThweDtcbiAgcmlnaHQ6IDExMHB4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggIzRhNGE0OTtcbn1cblxuLmNoZWZyb24ge1xuICB3aWR0aDogMTU1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTVweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jaGVmcm9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmJiMjE7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WSgyZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHNrZXdZKDJkZWcpO1xuICAtby10cmFuc2Zvcm06IHNrZXdZKDJkZWcpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNGE0YTQ5O1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG5cbi5jaGVmcm9uOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYmIyMTtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdZKC0yZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHNrZXdZKC0yZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiBza2V3WSgtMmRlZyk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0YTRhNDk7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4uYWRkIHtcbiAgd2lkdGg6IDEyNXB4O1xufVxuXG4uYWRkIGI6YmVmb3JlIHtcbiAgY29udGVudDogXCLilrxcIjtcbiAgY29sb3I6ICM0YTRhNDk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxN3B4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmFkZCBiOm50aC1jaGlsZCgxKTpiZWZvcmUge1xuICB0b3A6IC0xMnB4O1xuICBsZWZ0OiAwcHg7XG59XG5cbi5hZGQgYjpudGgtY2hpbGQoMik6YmVmb3JlIHtcbiAgdG9wOiAtOXB4O1xuICBsZWZ0OiAxNHB4O1xufVxuXG4uYWRkIGI6bnRoLWNoaWxkKDMpOmJlZm9yZSB7XG4gIHRvcDogLTdweDtcbiAgbGVmdDogMjZweDtcbn1cblxuLmFkZCBiOm50aC1jaGlsZCg0KTpiZWZvcmUge1xuICB0b3A6IC01cHg7XG4gIGxlZnQ6IDQwcHg7XG59XG5cbi5hZGQgYjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pa8XCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWRkIGI6bnRoLWNoaWxkKDEpOmFmdGVyIHtcbiAgY29sb3I6ICM1ODU0YWU7XG4gIHRvcDogLTEwcHg7XG4gIGxlZnQ6IDNweDtcbn1cblxuLmFkZCBiOm50aC1jaGlsZCgyKTphZnRlciB7XG4gIGNvbG9yOiAjMDBhOTlkO1xuICB0b3A6IC04cHg7XG4gIGxlZnQ6IDE2cHg7XG59XG5cbi5hZGQgYjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xuICBjb2xvcjogIzI5YWJlMjtcbiAgdG9wOiAtNnB4O1xuICBsZWZ0OiAyOHB4O1xufVxuXG4uYWRkIGI6bnRoLWNoaWxkKDQpOmFmdGVyIHtcbiAgY29sb3I6ICNjMTI3MmQ7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogNDNweDtcbn1cblxuLmFkZC1saW5lIHtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogNzVweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogNzVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDU7XG59XG5cbi5hZGQtbGluZTpsYXN0LWNoaWxkIHtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAxMTBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNDk7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBncmFkaWVudC1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMzQlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA2NyU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMzQlO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZ3JhZGllbnQtYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDM0JTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNjclO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDM0JTtcbiAgfVxufVxuQGtleWZyYW1lcyBncmFkaWVudC1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMzQlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA2NyU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMzQlO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc2t5LWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBsZWZ0OiAtMTAwMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICBsZWZ0OiAzMDBweDtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAxNjAwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBza3ktYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIGxlZnQ6IC0xMDAwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IDMwMHB4O1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDE2MDBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBza3ktYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIGxlZnQ6IC0xMDAwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IDMwMHB4O1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDE2MDBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHdpbmRvdy1hbmltYXRpb24ge1xuICA0OSUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODU0YWU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIDUxJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NTRhZTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHdpbmRvdy1hbmltYXRpb24ge1xuICA0OSUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODU0YWU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIDUxJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NTRhZTtcbiAgfVxufVxuQGtleWZyYW1lcyB3aW5kb3ctYW5pbWF0aW9uIHtcbiAgNDklIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1NGFlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgfVxuICA1MSUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODU0YWU7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyB3aW5nLWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM1ZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMjVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMzVkZWcpO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgd2luZy1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0zNWRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTI1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM1ZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyB3aW5nLWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM1ZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMjVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMzVkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN0YWRpdW0tYW5pbWF0aW9uIHtcbiAgNTAlIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2MxMjcyZDtcbiAgfVxufVxuLnN1biB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogI2ZiYmIyMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxMDtcbiAgbWFyZ2luLXRvcDogLTEyNXB4O1xuICBtYXJnaW4tbGVmdDogMjI1cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBza3ktYW5pbWF0aW9uIDlzIGVhc2UgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBza3ktYW5pbWF0aW9uIDlzIGVhc2UgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc2t5LWFuaW1hdGlvbiA5cyBlYXNlIGluZmluaXRlO1xufVxuXG4uc3VuLWxpZ2h0IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmJiYjIxO1xuICBvcGFjaXR5OiAyMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTA7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNreS1hbmltYXRpb24gOXMgZWFzZSBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IHNreS1hbmltYXRpb24gOXMgZWFzZSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBza3ktYW5pbWF0aW9uIDlzIGVhc2UgaW5maW5pdGU7XG59XG5cbi5tb29uIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogLTEwcHggMTBweCAwIDcuNXB4IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IC0xMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDIyNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDAwMDAwO1xuICB0b3A6IDIwMHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2t5LWFuaW1hdGlvbiA5cyBlYXNlIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogc2t5LWFuaW1hdGlvbiA5cyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb246IHNreS1hbmltYXRpb24gOXMgZWFzZSBpbmZpbml0ZTtcbn1cblxuLmNvbnRyb2xlcyB7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG4gIGJhY2tncm91bmQ6ICNmYmJiMjE7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0YXIge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0YXJPZmYge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmJiMjE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmF2aXNvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, { keypress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\danie\Documents\Software\Angular\CityDay-proyecto\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map