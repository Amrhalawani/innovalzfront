(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-careers-careers-module"],{

/***/ "DY6R":
/*!*******************************************************************!*\
  !*** ./src/app/main/careers/careershome/careershome.component.ts ***!
  \*******************************************************************/
/*! exports provided: CareershomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareershomeComponent", function() { return CareershomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






function CareershomeComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacancy_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vacancy_r1.headline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", vacancy_r1.years, " Years Of Experience In The Same Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/careers/vacancy/", vacancy_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, "APPLY"));
} }
class CareershomeComponent {
    constructor() {
        this.vacancies = [
            { headline: 'Web Application Developer', years: '2', id: 1 },
            { headline: 'Mobile Application Developer', years: '2', id: 2 },
            { headline: 'Graphic Designer', years: '1', id: 3 },
            { headline: 'Social Media Specialist', years: '1', id: 4 },
            { headline: 'Performance Marketing Manager', years: '3', id: 5 },
            { headline: 'Sales Manager', years: '4', id: 6 },
        ];
    }
    ngOnInit() {
    }
}
CareershomeComponent.ɵfac = function CareershomeComponent_Factory(t) { return new (t || CareershomeComponent)(); };
CareershomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CareershomeComponent, selectors: [["app-careershome"]], decls: 21, vars: 16, consts: [["fxLayoutAlign", "center center", 2, "background-color", "white", "padding-bottom", "50px"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "70", 2, "max-width", "70%"], [1, "header-text"], ["src", "assets/careers/Careers.svg", 1, "career-img"], [1, "teasing-text"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "center center", "fxLayout.lt-lg", "column", 1, "wrap"], ["class", "vacancy", "fxLayout", "column", "fxFlex", "40", "fxFlex.lt-lg", "100", "fxLayoutAlign", "center center", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "bottom-section"], [1, "tail-text"], ["mat-raised-button", "", "routerLink", "/careers/vacancy", 1, "send-cv-btn"], ["fxLayout", "column", "fxFlex", "40", "fxFlex.lt-lg", "100", "fxLayoutAlign", "center center", 1, "vacancy"], [2, "max-width", "80%"], [2, "font-family", "poppins-bold"], ["fxFlexAlign", "center center"], ["mat-raised-button", "", 1, "apply-btn", 3, "routerLink"]], template: function CareershomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CareershomeComponent_div_13_Template, 10, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, "JOIN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, "JOIN-PARA"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, "CURRENT-OPENING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vacancies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 12, "NO-VACANCY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 14, "SEND-CV-ANYWAY"), "");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexAlignDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".header-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  font-family: poppins-bold;\n  font-size: 40px;\n  font-weight: bolder;\n}\n\n.tail-text[_ngcontent-%COMP%] {\n  font-family: poppins;\n  font-size: 26px;\n  font-weight: 500;\n}\n\n.teasing-text[_ngcontent-%COMP%] {\n  width: 90%;\n  font-size: large;\n  padding-top: 80px;\n  font-family: Poppins-medium;\n}\n\n.career-img[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  max-width: 100%;\n}\n\n.vacancy[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 350px;\n  padding: 10px;\n  border-radius: 1rem;\n  margin: 10px;\n  height: 260px;\n  display: flex;\n  flex-direction: column;\n  background-color: #f4f4f4;\n  width: 30%;\n}\n\n.vacancy[_ngcontent-%COMP%]:hover   .apply-btn[_ngcontent-%COMP%] {\n  background-color: #ffb000;\n}\n\n.apply-btn[_ngcontent-%COMP%] {\n  width: 164px;\n  height: 44px;\n  margin-left: 20px;\n  border-radius: 25px;\n  border: 2px solid #ffb000;\n  font-family: poppins-bold;\n  font-size: 16px;\n}\n\n.send-cv-btn[_ngcontent-%COMP%] {\n  font-family: poppins-bold;\n  font-weight: bold;\n  font-size: 16px;\n  margin: 20px;\n  height: 44px;\n  background: #ffb000 0% 0% no-repeat padding-box;\n  opacity: 1;\n  border-radius: 3rem;\n  padding: 0 30px;\n}\n\n.bottom-section[_ngcontent-%COMP%] {\n  margin-top: 0;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  background: #fafafa;\n  width: 100%;\n  height: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FyZWVyc2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFFQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFJRjs7QUFGSTtFQUNFLHlCQUFBO0FBSU47O0FBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBR0YiLCJmaWxlIjoiY2FyZWVyc2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRleHR7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zLWJvbGQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLnRhaWwtdGV4dHtcclxuICBmb250LWZhbWlseTogcG9wcGlucztcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4udGVhc2luZy10ZXh0e1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxuICBmb250LWZhbWlseTogUG9wcGlucy1tZWRpdW07XHJcbn1cclxuLmNhcmVlci1pbWd7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG5cclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLnZhY2FuY3l7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBoZWlnaHQ6IDI2MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgJjpob3ZlcntcclxuICAgIC5hcHBseS1idG57XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmIwMDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5hcHBseS1idG57XHJcbiAgd2lkdGg6IDE2NHB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmIwMDA7XHJcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnMtYm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG59XHJcbi5zZW5kLWN2LWJ0bntcclxuICBmb250LWZhbWlseTogcG9wcGlucy1ib2xkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4gOjIwcHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmIwMDAgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbn1cclxuXHJcbi5ib3R0b20tc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "VXh7":
/*!************************************************!*\
  !*** ./src/app/main/careers/careers.module.ts ***!
  \************************************************/
/*! exports provided: CareersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersModule", function() { return CareersModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _careershome_careershome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./careershome/careershome.component */ "DY6R");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _career_vacancy_career_vacancy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./career-vacancy/career-vacancy.component */ "o0TT");
/* harmony import */ var _guard_user_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../guard/user.guard */ "3owW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: 'home', component: _careershome_careershome_component__WEBPACK_IMPORTED_MODULE_1__["CareershomeComponent"] },
    {
        path: 'vacancy/:id', component: _career_vacancy_career_vacancy_component__WEBPACK_IMPORTED_MODULE_4__["CareerVacancyComponent"],
        canActivate: [_guard_user_guard__WEBPACK_IMPORTED_MODULE_5__["UserGuard"]]
    }, {
        path: 'vacancy', component: _career_vacancy_career_vacancy_component__WEBPACK_IMPORTED_MODULE_4__["CareerVacancyComponent"],
        canActivate: [_guard_user_guard__WEBPACK_IMPORTED_MODULE_5__["UserGuard"]]
    },
    { path: '', redirectTo: 'home' }
];
class CareersModule {
}
CareersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CareersModule });
CareersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function CareersModule_Factory(t) { return new (t || CareersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CareersModule, { declarations: [_careershome_careershome_component__WEBPACK_IMPORTED_MODULE_1__["CareershomeComponent"], _career_vacancy_career_vacancy_component__WEBPACK_IMPORTED_MODULE_4__["CareerVacancyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();


/***/ }),

/***/ "c/1x":
/*!************************************************!*\
  !*** ./src/app/main/home/home/homemutation.ts ***!
  \************************************************/
/*! exports provided: sendContactMsg, sendRequestOffer, sendRequestOfferOther, sendjobRequest, createParentService, createProduct, createPartner, createServiceFeature, createChildService, updateProduct, updateProductIcon, updateParentIcon, updateProductLogo, updateServiceFeature, updateService, updateParentService, sendRequire, sendsmallpara, addProductParagraphs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendContactMsg", function() { return sendContactMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequestOffer", function() { return sendRequestOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequestOfferOther", function() { return sendRequestOfferOther; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendjobRequest", function() { return sendjobRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createParentService", function() { return createParentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProduct", function() { return createProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPartner", function() { return createPartner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createServiceFeature", function() { return createServiceFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createChildService", function() { return createChildService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProduct", function() { return updateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProductIcon", function() { return updateProductIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateParentIcon", function() { return updateParentIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProductLogo", function() { return updateProductLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateServiceFeature", function() { return updateServiceFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateService", function() { return updateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateParentService", function() { return updateParentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequire", function() { return sendRequire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendsmallpara", function() { return sendsmallpara; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductParagraphs", function() { return addProductParagraphs; });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ "/IUn");

const sendContactMsg = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation sendContactMsg ($name:String!, $email:String!,$phone:String!,$message:String!){
    createContactUs(data: {name:$name,email:$email,phone:$phone,message: $message }) {
      id
    },
  },
`;
const sendRequestOffer = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation createRequestOffer ($name:String!, $email:String!,$phone:String!,$details:String!,$product:Int!,$features:[Int!]){
    createRequestOffer (data: {name:$name,email:$email,phone:$phone,details: $details,product:$product,features:$features }) {
      id
    },
  },
`;
const sendRequestOfferOther = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation createRequestOffer ($name:String!, $email:String!,$phone:String!,$details:String!,$otherProduct:String,$features:[Int!]){
    createRequestOffer (data: {name:$name,email:$email,phone:$phone,details: $details,otherProduct:$otherProduct,features:$features }) {
      id
    },
  },
`;
const sendjobRequest = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation createJobForm ($name:String!, $email:String!,$phone:String!,$job:Int!,$cv:Resume!){
    createJobForm (data: {name:$name,email:$email,phone:$phone,job: $job,cv:$cv }) {
      id
    },
  },
`;
const createParentService = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation createParentService ($title:LocalizeInput!, $desc:LocalizeInput!,$icon:Image!){
    createParentService (data: {title:$title,desc:$desc,icon:$icon}) {
      id
    },
  },
`;
const createProduct = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
mutation  createProduct ($title:LocalizeInput!,$smallParagraphs:[Int!]!,
 $subTitle:LocalizeInput!, $shortDesc:LocalizeInput!,
 $icon:Image!,$logo:Image!,$onHome:Boolean!,$isActive:Boolean!) {
  createProduct(data:
   {title: $title,
    subTitle: $subTitle,
    shortDesc:$shortDesc,
    logo: $logo,
    icon: $icon,
    smallParagraphs:$smallParagraphs
    isActive: $isActive,
     onHome: $onHome}) {
    id
}
  },
`;
const createPartner = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
mutation  createPartner ($title:LocalizeInput!,$desc:LocalizeInput!,
$image:Image!,$onHome:Boolean!,$isActive:Boolean!) {
  createPartner(data:
   {title: $title,
    desc:$desc,
    image: $image,
    isActive: $isActive,
     onHome: $onHome}) {
    id
}
  },
`;
const createServiceFeature = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
mutation  createServiceFeature ($title:LocalizeInput!,$desc:LocalizeInput!,$service:Int! ,
$image:Image!) {
  createServiceFeature(data:
   {title: $title,
    desc:$desc,
    childService:$service
    image: $image}) {
    id
}
  },
`;
const createChildService = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
mutation  createChildService (
$title:LocalizeInput!,
 $fullDesc:[LocalizeInput!]!,
 $icon:Image!,$logo:Image!,$parentService:Int!,$onHome:Boolean!,$isActive:Boolean!) {
  createChildService(data:
   {
    parentService: $parentService,
   title: $title,
    fullDesc:$fullDesc,
    logo: $logo,
    icon: $icon,
    isActive: $isActive,
     onHome: $onHome}) {
    id
}
  },
`;
const updateProduct = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
mutation  updateProduct (
$id:Int!,
$title:PartialLocalizeInput,
 $subTitle:PartialLocalizeInput, $shortDesc:PartialLocalizeInput,$onHome:Boolean,$isActive:Boolean) {
  updateProduct(data:
   {
   id:$id,
   title: $title,
    subTitle: $subTitle,
    shortDesc:$shortDesc,
    isActive: $isActive,
     onHome: $onHome}) {
    id
}
  },
`;
const updateProductIcon = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
mutation  updateProductIcon (
$id:Int!,
$icon:Image!) {
  updateProduct(data:
   {
   id:$id,
     icon:$icon}) {
    id
}
  },
`;
const updateParentIcon = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
mutation  updateParentIcon (
$id:Int!,
$icon:Image!) {
  updateParentService(data:
   {
   id:$id,
     icon:$icon}) {
    id
}
  },
`;
const updateProductLogo = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
mutation  updateProductLogo (
$id:Int!,
$logo:Image!) {
  updateProduct(data:
   {
    id:$id,
     logo:$logo}) {
    id
}
  },
`;
const updateServiceFeature = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
mutation  updateServiceFeature (
$id:Int!,
$title:PartialLocalizeInput,
  $desc:PartialLocalizeInput) {
  updateServiceFeature(data:
   {
   id:$id,
   title: $title,
    desc:$desc,
  }) {
    id
}
  },
`;
const updateService = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
mutation  updateChildService (
$id:Int!,
$title:PartialLocalizeInput!, $desc:[LocalizeInput!],$onHome:Boolean,$isActive:Boolean) {
  updateChildService(data:
   {
   id:$id,
   title: $title,
    fullDesc:$desc,
    isActive: $isActive,
     onHome: $onHome}) {
    id
}
  },
`;
const updateParentService = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
mutation  updateParentService (
$id:Int!,$desc:PartialLocalizeInput,$title:PartialLocalizeInput
 ) {
  updateParentService(data:
   {
   id:$id,
   title: $title
   desc:$desc
     }
     ) {
    id
}
  },
`;
const sendRequire = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation sendRequire ($name:String!, $email:String!,$phone:String!,$details:String!,$product:Int!,$otherProduct:String!,$features:[Int!]){
    createRequestOffer(data: {name:$name,email:$email,phone:$phone,details: $details,product: $product ,otherProduct:$otherProduct,
      features:$features}) {
      id
    },
  },
`;
const sendsmallpara = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation createSmallParagraph ($headline:LocalizeInput!, $fullDesc:[LocalizeInput!]!){
    createSmallParagraph(data: {headline:$headline,fullDesc:$fullDesc}) {
      id
    },
  },
`;
const addProductParagraphs = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
mutation  updateProduct (
$id:Int!,$paragraphs:[Int!]

 ) {
  updateProduct(data:
   {
   id:$id,
     smallParagraphs: $paragraphs}) {
    id
}
  },

`;


/***/ }),

/***/ "o0TT":
/*!*************************************************************************!*\
  !*** ./src/app/main/careers/career-vacancy/career-vacancy.component.ts ***!
  \*************************************************************************/
/*! exports provided: CareerVacancyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerVacancyComponent", function() { return CareerVacancyComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_home_homemutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home/home/homemutation */ "c/1x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








function CareerVacancyComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const req_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](req_r1);
} }
class CareerVacancyComponent {
    constructor(fb, apollo) {
        this.fb = fb;
        this.apollo = apollo;
        this.fileToUpload = null;
        this.duties = 'We are looking for an experienced and passionate Social Media Specialist to join our creative team. responsible for managing the social media accounts while ensuring the accounts and content shared increase a brand’s visibility and reputation. The successful candidate will be an excellent communicator, a versatile creative writer, and a team player. You will be an active participant in data collection and analyses in order to consistently improve the company’s social media practices over time.';
        this.requirements = ['Bachelor’s degree in, communications, marketing, or a related field.',
            ' 3 or more years of social media experience including planning and managing content in a corporate, or agency setting.',
            'Excellent written and verbal communication skills and must have a thorough understanding of social media management and strategy.',
            'Experience using various analytics software.'
        ];
    }
    handleFileInput(e) {
        this.fileToUpload = e.target.files[0];
    }
    submit() {
        this.toSend = this.userData.value;
        this.toSend.cv = this.fileToUpload;
        this.send();
    }
    send() {
        this.apollo.mutate({
            mutation: _home_home_homemutation__WEBPACK_IMPORTED_MODULE_1__["sendjobRequest"],
            variables: this.toSend,
            context: {
                useMultipart: true
            }
        }).subscribe((response) => {
            alert('we have received your request');
        }, error => alert(error));
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.userData = this.fb.group({
            job: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(11)]],
        });
    }
}
CareerVacancyComponent.ɵfac = function CareerVacancyComponent_Factory(t) { return new (t || CareerVacancyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"])); };
CareerVacancyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CareerVacancyComponent, selectors: [["app-career-vacancy"]], decls: 34, vars: 3, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 2, "margin-top", "100px"], ["fxLayout", "column", "fxFlex", "70", "fxLayoutAlign", "center center"], ["fxLayout", "column", "fxLayoutAlign", "center start"], [1, "header"], ["style", "padding: 10px", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "cv-form", 3, "formGroup"], [1, "header-text"], ["formControlName", "name", "autocomplete", "name", 1, "input"], ["formControlName", "email", "autocapitalize", "off", "autocomplete", "email", 1, "input"], ["formControlName", "phone", "autocomplete", "phone", "type", "text", 1, "input"], ["type", "file", 1, "input", 3, "change"], ["mat-raised-button", "", "type", "submit", 1, "curved-btn-primary", 3, "click"], [2, "padding", "10px"]], template: function CareerVacancyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Social Media Specialist");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Duties");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CareerVacancyComponent_li_12_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Get in touch using the form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CareerVacancyComponent_Template_input_change_31_listener($event) { return ctx.handleFileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CareerVacancyComponent_Template_button_click_32_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.duties);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.requirements);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.userData);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".cv-form[_ngcontent-%COMP%] {\n  background: #EBEBEB;\n  border-radius: 10px;\n  margin: 75px;\n  padding: 70px;\n}\n\n.curved-btn-primary[_ngcontent-%COMP%] {\n  padding: 0px 50px;\n  min-width: 70px;\n  border: none;\n  font-weight: bold;\n  border-radius: 1.5rem;\n  background-color: #ffb000;\n  color: black;\n  align-self: center;\n  min-height: 30px;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FyZWVyLXZhY2FuY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFMRjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFORiIsImZpbGUiOiJjYXJlZXItdmFjYW5jeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLmhlYWRlciB7XHJcbi8vICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4vLyAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuLy9cclxuLy99XHJcblxyXG4uY3YtZm9ybSB7XHJcbiAgYmFja2dyb3VuZDogI0VCRUJFQjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogNzVweDtcclxuICBwYWRkaW5nOiA3MHB4O1xyXG4gIC8vbWluLXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmN1cnZlZC1idG4tcHJpbWFyeSB7XHJcbiAgcGFkZGluZzogMHB4IDUwcHg7XHJcbiAgbWluLXdpZHRoOiA3MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjAwMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=main-careers-careers-module.js.map