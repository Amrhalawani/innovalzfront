(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-profile-profile-module"],{

/***/ "/lmB":
/*!***********************************************************************************!*\
  !*** ./src/app/main/profile/estimattion-history/estimattion-history.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EstimattionHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimattionHistoryComponent", function() { return EstimattionHistoryComponent; });
/* harmony import */ var _auth_authMutation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth/authMutation */ "tfCn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function EstimattionHistoryComponent_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r3.title);
} }
function EstimattionHistoryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EstimattionHistoryComponent_div_1_li_5_Template, 2, 1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const history_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", history_r1.pricingServices);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Estimated Cost : $", history_r1.totalPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("user : $", history_r1.user.email, "");
} }
class EstimattionHistoryComponent {
    constructor(apollo) {
        this.apollo = apollo;
    }
    ngOnInit() {
        this.apollo.watchQuery({
            query: _auth_authMutation__WEBPACK_IMPORTED_MODULE_0__["getUserProfile"],
        }).valueChanges.subscribe((result) => {
            this.apollo.watchQuery({
                query: _auth_authMutation__WEBPACK_IMPORTED_MODULE_0__["historyQuery"], fetchPolicy: 'network-only'
            }).valueChanges.subscribe((resulto) => {
                this.pricingHistory = resulto.data.findManyPricingHistories.entities;
            });
        });
    }
}
EstimattionHistoryComponent.ɵfac = function EstimattionHistoryComponent_Factory(t) { return new (t || EstimattionHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"])); };
EstimattionHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EstimattionHistoryComponent, selectors: [["app-estimattion-history"]], decls: 2, vars: 1, consts: [["fxLayout", "column"], ["class", "history-entry", "fxLayout", "row", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 1, "history-entry"], ["src", "assets/icons/customize.svg"], ["fxLayout", "column", 1, "wrap", 2, "height", "150px", "padding", "15px"], ["style", "margin: 5px", 4, "ngFor", "ngForOf"], [2, "margin", "5px"]], template: function EstimattionHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EstimattionHistoryComponent_div_1_Template, 12, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pricingHistory);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".history-entry[_ngcontent-%COMP%] {\n  background-color: #EBEBEB;\n  padding: 10px;\n  margin: 10px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXN0aW1hdHRpb24taGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoiZXN0aW1hdHRpb24taGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXN0b3J5LWVudHJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "KX/I":
/*!************************************************!*\
  !*** ./src/app/main/profile/profile.module.ts ***!
  \************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _estimattion_history_estimattion_history_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estimattion-history/estimattion-history.component */ "/lmB");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "lq4n");
/* harmony import */ var _profile_nav_profile_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-nav/profile-nav.component */ "iuf4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: '', component: _profile_nav_profile_nav_component__WEBPACK_IMPORTED_MODULE_3__["ProfileNavComponent"],
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'history', component: _estimattion_history_estimattion_history_component__WEBPACK_IMPORTED_MODULE_1__["EstimattionHistoryComponent"] },
            { path: 'overview', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
        ],
    },
];
class ProfileModule {
}
ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_estimattion_history_estimattion_history_component__WEBPACK_IMPORTED_MODULE_1__["EstimattionHistoryComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], _profile_nav_profile_nav_component__WEBPACK_IMPORTED_MODULE_3__["ProfileNavComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


/***/ }),

/***/ "iuf4":
/*!*******************************************************************!*\
  !*** ./src/app/main/profile/profile-nav/profile-nav.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileNavComponent", function() { return ProfileNavComponent; });
/* harmony import */ var _auth_authMutation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth/authMutation */ "tfCn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










function ProfileNavComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " History ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileNavComponent_div_0_Template_h2_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Log Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hi,", ctx_r0.username, "!");
} }
class ProfileNavComponent {
    constructor(apollo, auth) {
        this.apollo = apollo;
        this.auth = auth;
    }
    logOut() {
        this.auth.signOut();
    }
    ngOnInit() {
        this.apollo.watchQuery({
            query: _auth_authMutation__WEBPACK_IMPORTED_MODULE_0__["getUsername"],
        }).valueChanges.subscribe((result) => {
            this.username = result.data.me.name;
        });
    }
}
ProfileNavComponent.ɵfac = function ProfileNavComponent_Factory(t) { return new (t || ProfileNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ProfileNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileNavComponent, selectors: [["app-profile-nav"]], decls: 1, vars: 1, consts: [["class", "profile-page", 4, "ngIf"], [1, "profile-page"], ["fxLayout", "row", "fxLayoutAlign", "center start", "fxFlexAlign", "center center", "fxLayout.lt-lg", "column", 1, "profile-page"], ["fxLayout", "column", "fxFlex", "40", "fxLayoutAlign", "center center"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "navi"], ["routerLink", "/profile/overview", "routerLinkActive", "active", 1, "link"], ["routerLink", "/profile/history", 1, "link"], [1, "link", 3, "click"], ["fxLayout", "column", "fxFlex", "50", "fxLayoutAlign", "start  start", 2, "overflow", "auto"]], template: function ProfileNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProfileNavComponent_div_0_Template, 24, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.username);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]], styles: [".profile-page[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  width: 100%;\n  height: 100%;\n}\n\n.navi[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 400px;\n  border-radius: 12pt;\n  border: 2px solid #E4E5E6;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n  color: #ffb000;\n}\n\n.link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZmlsZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNBLGVBQUE7QUFFQSIsImZpbGUiOiJwcm9maWxlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXBhZ2Uge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5hdmkge1xyXG4vL2JhY2tncm91bmQtY29sb3I6ICNmZmIwMDA7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJwdDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjRTRFNUU2O1xyXG59XHJcbi5saW5rOmhvdmVye1xyXG4gIGNvbG9yOiAjZmZiMDAwO1xyXG59XHJcbi5saW5re1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "lq4n":
/*!***********************************************************!*\
  !*** ./src/app/main/profile/profile/profile.component.ts ***!
  \***********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _auth_authMutation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth/authMutation */ "tfCn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function ProfileComponent_div_0_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_0_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r3.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_0_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r5.disable = !ctx_r5.disable; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Personal Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "company");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "would you like to receive messages on your email ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-radio-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ProfileComponent_div_0_button_24_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ProfileComponent_div_0_button_25_Template, 4, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.userData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.disable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.disable);
} }
class ProfileComponent {
    constructor(apollo, auth, fb) {
        this.apollo = apollo;
        this.auth = auth;
        this.fb = fb;
        this.userData = this.fb.group({ name: [''], phone: [''], email: [''], company: [''] });
        this.disable = true;
    }
    ngOnInit() {
        this.apollo.watchQuery({
            query: _auth_authMutation__WEBPACK_IMPORTED_MODULE_0__["getUserProfile"],
        }).valueChanges.subscribe((result) => {
            this.recUserData = result.data.me;
            this.createForm();
        });
    }
    createForm() {
        this.userData = this.fb.group({
            name: [this.recUserData.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            id: [this.recUserData.id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: [this.recUserData.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [this.recUserData.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            company: [this.recUserData.company, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    update() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 1, vars: 1, consts: [["class", "profile", "fxLayout", "column", 4, "ngIf"], ["fxLayout", "column", 1, "profile"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlexAlign", "center center", 3, "formGroup"], [2, "margin", "10px"], [1, "label-text"], ["formControlName", "name", 1, "input"], ["formControlName", "phone", 1, "input"], ["formControlName", "email", 1, "input"], ["formControlName", "company", 1, "input"], ["fxLayout", "column", "fxLayoutAlign", "center center", 2, "padding", "20px"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["checked", "true"], ["mat-raised-button", "", "class", "curved-btn-primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 1, "curved-btn-primary", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 26, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.recUserData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: [".profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: #EBEBEB;\n  margin: 20px;\n  border-radius: 7pt;\n  width: 90%;\n}\n\n.curved-btn-primary[_ngcontent-%COMP%] {\n  min-width: 70px;\n  border: none;\n  font-weight: bold;\n  border-radius: 1.5rem;\n  background-color: #ffb000;\n  color: black;\n  align-self: center;\n  min-height: 30px;\n  margin: 20px;\n}\n\n.label-text[_ngcontent-%COMP%] {\n  align-self: start;\n  margin-left: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHQ7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmN1cnZlZC1idG4tcHJpbWFyeSB7XHJcbiAgbWluLXdpZHRoOiA3MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjAwMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4ubGFiZWwtdGV4dCB7XHJcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcblxyXG5cclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=main-profile-profile-module.js.map