(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/J2K":
/*!*******************************************************************!*\
  !*** ./src/app/main/profile/profile/disable-control.directive.ts ***!
  \*******************************************************************/
/*! exports provided: DisableControlDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableControlDirective", function() { return DisableControlDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DisableControlDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    set disableControl(condition) {
        this.renderer.setAttribute(this.el.nativeElement, 'disabled', condition ? 'disabled' : '');
    }
}
DisableControlDirective.ɵfac = function DisableControlDirective_Factory(t) { return new (t || DisableControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DisableControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DisableControlDirective, selectors: [["", "appDisableControl", ""]], inputs: { disableControl: "disableControl" } });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Innovalz\InnovalzWebsiteFront\src\main.ts */"zUnb");


/***/ }),

/***/ "3TnI":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthLayoutComponent {
    constructor() {
        this.lang = localStorage.getItem('lang') || 'en';
    }
    ngOnInit() {
    }
    rtl() {
        if (this.lang === 'en') {
            return 'ltr';
        }
        else {
            return 'rtl';
        }
    }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "3owW":
/*!*************************************!*\
  !*** ./src/app/guard/user.guard.ts ***!
  \*************************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class UserGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.can = false;
    }
    canActivate(next, state) {
        this.authService.isAuthenticated.subscribe(x => this.can = x);
        // this.authService.checkAdmin();
        if (this.can) {
            return true;
        }
        else {
            return this.router.parseUrl('/auth/sign-in');
        }
    }
}
UserGuard.ɵfac = function UserGuard_Factory(t) { return new (t || UserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserGuard, factory: UserGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "4KHl":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/core */ "ALmS");
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular/http */ "E21e");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/link/context */ "MWEN");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client/link/error */ "HuS5");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








// const uri = 'http://64.225.107.140:3001/graphql'; // <-- add the URL of the GraphQL server here
const uri = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].backendUrl; // <-- add the URL of the GraphQL server here
function createApollo(httpLink, auths) {
    const basic = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__["setContext"])((operation, context) => ({
        headers: {
            Accept: 'en',
        }
    }));
    const auth = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__["setContext"])((operation, context) => {
        const token = localStorage.getItem('token');
        const lang = localStorage.getItem('lang') || 'en';
        if (token === null) {
            return {};
        }
        else {
            return {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Accept-Language': lang
                },
            };
        }
    });
    const headerss = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__["setContext"])((operation, context) => {
        const lang = localStorage.getItem('lang') || 'en';
        return {
            headers: {
                'Accept-Language': lang
            },
        };
    });
    const error = Object(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_5__["onError"])(({ graphQLErrors, networkError, response, operation }) => {
        // Checking GraphQL Errors
        if (graphQLErrors) {
            graphQLErrors.map(({ message, path }) => {
                if (message === 'INVALID_TOKEN') {
                    localStorage.removeItem('token');
                    window.location.href = '/';
                }
                if (message === 'UNAUTHENTICATED') {
                    this.session.destroy();
                    localStorage.removeItem('token');
                    window.location.href = '/';
                }
                if (message === '["Unauthorized"]') {
                    this.session.destroy();
                    localStorage.removeItem('token');
                    window.location.href = '/';
                }
                // localStorage.removeItem('token');
                console.log({
                    interceptorError: `[GraphQL Error]: Type: ${message}, Message: ${message}`, path
                });
                // alert(`[GraphQL Error]: Type: ${message}, Message: ${message}`);
            });
        }
        // Checking in Network Errors
        if (networkError) {
        }
    });
    const link = _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"].from([basic, headerss, auth, error, httpLink.create({ uri })]);
    const cache = new _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]();
    return {
        link,
        cache
    };
}
class GraphQLModule {
}
GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: GraphQLModule });
GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function GraphQLModule_Factory(t) { return new (t || GraphQLModule)(); }, providers: [
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["APOLLO_OPTIONS"],
            useFactory: createApollo,
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]],
        },
    ] });


/***/ }),

/***/ "7Ufg":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _main_home_home_homequeries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/home/home/homequeries */ "eXr/");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





















function MainNavComponent_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r3);
} }
function MainNavComponent_mat_icon_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r3);
} }
function MainNavComponent_h2_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MainNavComponent_h2_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "SIGN-IN"), " ");
} }
function MainNavComponent_h2_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_h2_21_Template_h2_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "SIGN-OUT"), " ");
} }
function MainNavComponent_h2_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "control_point");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "SIGN-UP"), " ");
} }
function MainNavComponent_h2_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "h2", 45);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r10);
} }
function MainNavComponent_h2_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " English ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r10);
} }
function MainNavComponent_button_62_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_button_62_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { exact: true }; };
const _c1 = function (a0) { return [a0]; };
const _c2 = function (a0) { return { parent: a0 }; };
function MainNavComponent_div_67_h4_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, "/services/viewService/" + service_r20.id))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c2, service_r20 == null ? null : service_r20.parentService == null ? null : service_r20.parentService.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", service_r20 == null ? null : service_r20.title, " ");
} }
function MainNavComponent_div_67_h4_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, "/products/viewProduct/" + product_r22.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r22.title, " ");
} }
function MainNavComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "HOME");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "SERVICES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, MainNavComponent_div_67_h4_9_Template, 2, 9, "h4", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h2", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "PRODUCTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, MainNavComponent_div_67_h4_16_Template, 2, 4, "h4", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "h2", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "ABOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "h2", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "CONTACT");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "h2", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "CAREERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@animation", ctx_r12.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r12.services);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@animation", ctx_r12.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r12.products);
} }
function MainNavComponent_div_70_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r25);
} }
function MainNavComponent_div_70_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r25);
} }
function MainNavComponent_div_70_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r28);
} }
function MainNavComponent_div_70_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r28);
} }
function MainNavComponent_div_70_h2_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "PROFILE"), " ");
} }
function MainNavComponent_div_70_h2_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "SIGN-IN"), " ");
} }
function MainNavComponent_div_70_h2_17_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_div_70_h2_17_Template_h2_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r33.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "SIGN-OUT"), " ");
} }
function MainNavComponent_div_70_h2_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "control_point");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "SIGN-UP"), " ");
} }
function MainNavComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MainNavComponent_div_70_mat_icon_1_Template, 2, 1, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MainNavComponent_div_70_mat_icon_2_Template, 2, 1, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-menu", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_div_70_Template_h2_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r35.setLang("en"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " English ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h2", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_div_70_Template_h2_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r37.setLang("ar"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " \u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, MainNavComponent_div_70_mat_icon_10_Template, 2, 1, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MainNavComponent_div_70_mat_icon_11_Template, 2, 1, "mat-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-menu", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, MainNavComponent_div_70_h2_15_Template, 5, 3, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, MainNavComponent_div_70_h2_16_Template, 5, 3, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, MainNavComponent_div_70_h2_17_Template, 5, 3, "h2", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, MainNavComponent_div_70_h2_18_Template, 5, 3, "h2", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.isEnglish());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r13.isEnglish());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.isLogged);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r13.isLogged);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.isLogged);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r13.isLogged);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.isLogged);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r13.isLogged);
} }
const _c3 = ["*"];
class MainNavComponent {
    constructor(breakpointObserver, matIconRegistry, domSanitizer, apollo, authServ, router, translate) {
        this.breakpointObserver = breakpointObserver;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.apollo = apollo;
        this.authServ = authServ;
        this.router = router;
        this.translate = translate;
        this.state = 'show';
        this.loading = true;
        this.hideUserMenu = true;
        this.services = [];
        this.products = [];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
        this.isWeb$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Large)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
        this.lang = localStorage.getItem('lang') || 'en';
        // add svg icons
        this.checkLogged();
        this.addIcons();
        this.getData();
        // language settings
        translate.addLangs(['en', 'ar']);
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
    }
    getData() {
        this.apollo
            .watchQuery({
            query: _main_home_home_homequeries__WEBPACK_IMPORTED_MODULE_2__["navbarQuery"],
            fetchPolicy: 'network-only'
        })
            .valueChanges.subscribe((result) => {
            var _a, _b, _c, _d;
            this.services = (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.findManyChildServices) === null || _b === void 0 ? void 0 : _b.entities;
            this.products = (_d = (_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.findManyProducts) === null || _d === void 0 ? void 0 : _d.entities;
            this.loading = result.loading;
        });
    }
    addIcons() {
        // this.matIconRegistry.addSvgIcon(
        //   `userColors`,
        //   this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/userColors.svg')
        // );
        this.matIconRegistry.addSvgIcon(`ar`, this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/ar.svg'));
    }
    isEnglish() {
        const lang = localStorage.getItem('lang');
        if (lang === 'en') {
            return true;
        }
        else {
            return false;
        }
    }
    setLang(lang) {
        localStorage.setItem('lang', lang);
        this.translate.use(lang);
        window.location.reload();
    }
    navigate() {
        this.router.navigate(['pricing/request-offer/1']);
    }
    checkLogged() {
        this.authServ.logged().subscribe((logged) => {
            this.isLogged = logged;
            if (this.isLogged === false) {
                // this.authServ.destoryCredentials();
            }
        });
    }
    logOut() {
        this.authServ.signOut();
    }
}
MainNavComponent.ɵfac = function MainNavComponent_Factory(t) { return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"])); };
MainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MainNavComponent, selectors: [["app-main-nav"]], ngContentSelectors: _c3, decls: 73, vars: 50, consts: [[1, "sidenav-container"], [1, "sidenav", 3, "mode", "opened"], ["drawer", ""], [1, "row"], ["src", "/assets/logo.svg", "routerLink", "/home", 1, "logo1"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "mat-elevation-z3", 2, "background-image", "url('favicon.ico')", "min-height", "100px", "min-width", "100px", "border-radius", "50%"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["src", "favicon.ico", 2, "margin", "25px 0"], [2, "margin-top", "20px"], ["mat-button", "", "class", "sideprofileIcon", "fxFlex", "0 1 auto", 3, "matMenuTriggerFor", 4, "ngIf"], ["style", "color: black ;", "mat-button", "", "class", "sideprofileIcon", "fxFlex", "0 1 auto", 3, "matMenuTriggerFor", 4, "ngIf"], [1, "usermen"], [1, "user-menu"], ["menu", "matMenu"], ["routerLink", "/profile", "mat-menu-item", "", "style", "cursor: pointer", 4, "ngIf"], ["routerLink", "/auth/sign-in", "mat-menu-item", "", "style", "cursor: pointer", 4, "ngIf"], ["mat-menu-item", "", "style", "cursor: pointer", 3, "click", 4, "ngIf"], ["routerLink", "/auth/sign-up", "mat-menu-item", "", "style", "cursor: pointer", 4, "ngIf"], ["routerLink", "/home", "routerLinkActive", "active-link", "mat-list-item", ""], ["routerLink", "/services/list", "mat-list-item", "", "routerLinkActive", "active-link"], ["routerLink", "/products", "mat-list-item", "", "routerLinkActive", "active-link"], ["routerLink", "/about/about", "mat-list-item", "", "routerLinkActive", "active-link"], ["routerLink", "/contact", "mat-list-item", "", "routerLinkActive", "active-link"], ["routerLink", "/careers", "mat-list-item", "", "routerLinkActive", "active-link"], ["mat-raised-button", "", 1, "reqBtn", 3, "click"], ["routerLink", "/pricing/pricing-tool", "mat-raised-button", "", 1, "price-btn"], ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "margin", "5px"], ["mat-button", "", "class", "profileIcon", "fxFlex", "0 1 auto", 3, "matMenuTriggerFor", 4, "ngIf"], ["fxLayout", "column", 1, "user-menu"], ["langMenu", "matMenu"], ["fxFlexAlign", "center center", "mat-menu-item", "", 2, "cursor", "pointer", 3, "click"], ["fxLayout", "row", 2, "background-color", "black !important"], ["fxFlex", "100", 1, "outer"], ["style", "color: white", "type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["src", "/assets/logo.svg", "routerLink", "/home", 1, "logo"], ["class", "mainContainer", 4, "ngIf"], [4, "ngIf"], ["mat-button", "", "fxFlex", "0 1 auto", 1, "sideprofileIcon", 3, "matMenuTriggerFor"], ["src", "../../assets/icons/userColor.png"], ["mat-button", "", "fxFlex", "0 1 auto", 1, "sideprofileIcon", 2, "color", "black", 3, "matMenuTriggerFor"], ["routerLink", "/profile", "mat-menu-item", "", 2, "cursor", "pointer"], ["routerLink", "/auth/sign-in", "mat-menu-item", "", 2, "cursor", "pointer"], ["mat-menu-item", "", 2, "cursor", "pointer", 3, "click"], ["routerLink", "/auth/sign-up", "mat-menu-item", "", 2, "cursor", "pointer"], ["mat-button", "", "fxFlex", "0 1 auto", 1, "profileIcon", 3, "matMenuTriggerFor"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 2, "color", "white", 3, "click"], ["aria-label", "Side nav toggle icon"], [1, "mainContainer"], ["mat-list-item", "", "routerLink", "/home", "routerLinkActive", "active-link", "translate", "", 1, "nav-link"], ["mat-list-item", "", "routerLinkActive", "active-link", 1, "nav-link"], ["routerLink", "/services/list", "translate", ""], [2, "font-size", "18px", "vertical-align", "bottom", "margin-left", "-3px"], [1, "dropdown-menu", "mat-elevation-z5"], ["routerLinkActive", "active-link-dropDown", 3, "routerLinkActiveOptions", "routerLink", "queryParams", 4, "ngFor", "ngForOf"], ["routerLink", "/products/list", "translate", ""], [2, "font-size", "18px", "vertical-align", "bottom"], ["routerLinkActive", "active-link-dropDown", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLink", "/about", "mat-list-item", "", "routerLinkActive", "active-link", "translate", "", 1, "nav-link"], ["routerLink", "/contact", "mat-list-item", "", "routerLinkActive", "active-link", "translate", "", 1, "nav-link"], ["routerLink", "/careers", "mat-list-item", "", "routerLinkActive", "active-link", "translate", "", 1, "nav-link"], ["routerLinkActive", "active-link-dropDown", 3, "routerLinkActiveOptions", "routerLink", "queryParams"], ["routerLinkActive", "active-link-dropDown", 3, "routerLink"], ["style", "margin-right:10px", "mat-button", "", "class", "profileIcon", "fxFlex", "0 1 auto", 3, "matMenuTriggerFor", 4, "ngIf"], ["fxFlexAlign", "center center", "mat-menu-item", "", 2, "cursor", "pointer", "margin-bottom", "0", 3, "click"], ["mat-button", "", "class", "profileIcon", "style", "color: white", "fxFlex", "0 1 auto", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", "style", "cursor: pointer;margin-bottom: 0", 3, "click", 4, "ngIf"], ["routerLink", "/auth/sign-up", "mat-menu-item", "", "style", "cursor: pointer;margin-bottom: 0", 4, "ngIf"], ["routerLink", "/pricing/request-offer", "translate", "REQUEST-OFFER", 1, "reqBtn", "nav-link"], ["routerLink", "/pricing", "mat-raised-button", "", "translate", "PRICE-IT", 1, "price-btn"], ["src", "../../assets/icons/lang.png", 2, "margin-right", "10px"], ["mat-button", "", "fxFlex", "0 1 auto", 1, "profileIcon", 2, "margin-right", "10px", 3, "matMenuTriggerFor"], ["src", "../../assets/icons/enlang.png"], ["mat-button", "", "fxFlex", "0 1 auto", 1, "profileIcon", 2, "color", "white", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 2, "cursor", "pointer", "margin-bottom", "0", 3, "click"], ["routerLink", "/auth/sign-up", "mat-menu-item", "", 2, "cursor", "pointer", "margin-bottom", "0"]], template: function MainNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "mat-divider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, MainNavComponent_mat_icon_14_Template, 2, 1, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, MainNavComponent_mat_icon_15_Template, 2, 1, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-menu", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, MainNavComponent_h2_19_Template, 4, 0, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, MainNavComponent_h2_20_Template, 5, 3, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, MainNavComponent_h2_21_Template, 5, 3, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, MainNavComponent_h2_22_Template, 5, 3, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "mat-divider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_Template_button_click_42_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, MainNavComponent_h2_50_Template, 1, 1, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, MainNavComponent_h2_51_Template, 2, 1, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-menu", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_Template_h2_click_55_listener() { return ctx.setLang("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, " English ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavComponent_Template_h2_click_57_listener() { return ctx.setLang("ar"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, " \u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "mat-toolbar", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, MainNavComponent_button_62_Template, 3, 0, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](63, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](64, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, MainNavComponent_div_67_Template, 23, 4, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](68, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](69, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](70, MainNavComponent_div_70_Template, 21, 8, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](71, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", "over")("opened", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 22, ctx.isWeb$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 24, "HOME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 26, "SERVICES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 28, "PRODUCTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](35, 30, "ABOUT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 32, "CONTACT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](41, 34, "CAREERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](44, 36, "REQUEST-OFFER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](48, 38, "PRICE-IT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isEnglish());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isEnglish());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](63, 40, ctx.isWeb$) || !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](64, 42, ctx.isHandset$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](68, 44, ctx.isWeb$) || !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](69, 46, ctx.isHandset$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](71, 48, ctx.isHandset$));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatNavList"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexAlignDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuTrigger"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: [".sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.reqBtn[_ngcontent-%COMP%] {\n  width: 145px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  padding: 0 10px;\n  font-weight: normal;\n  font-style: normal;\n  border-radius: 3rem;\n  border: 2px solid #FFB000;\n  background: black;\n  color: white;\n  margin-top: 10px;\n  font-size: 14px !important;\n}\n\n.reqBtn[_ngcontent-%COMP%]:focus {\n  border: 2px solid #FFB000;\n}\n\n.price-btn[_ngcontent-%COMP%] {\n  vertical-align: center;\n  padding: 0 20px;\n  width: 145px;\n  margin-left: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-family: Poppins-bold;\n  font-weight: bolder;\n  background: #ffb000 0% 0% no-repeat padding-box;\n  border-radius: 3rem;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  height: 28px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:hover {\n  background-color: #ffb000;\n  border-radius: 8px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%] {\n  padding: 5px 5px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  display: none;\n  position: absolute;\n  min-width: 210px !important;\n  margin-top: 12px;\n  padding: 5px 10px;\n  color: black;\n  background-color: white;\n  z-index: 3;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  padding: 5px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW4tbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQUFGOztBQUNFO0VBQ0UseUJBQUE7QUFDSjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0MsWUFBQTtBQUZEOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUlFO0VBQ0UsZ0JBQUE7QUFGSjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUhGOztBQUtFO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQUhKIiwiZmlsZSI6Im1haW4tbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5yZXFCdG4ge1xyXG4gIHdpZHRoOiAxNDVweDtcclxuICAvL2hlaWdodDogMzNweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBib3JkZXItcmFkaXVzOiAzcmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkIwMDA7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZCMDAwO1xyXG4gIH1cclxufVxyXG5cclxuLnByaWNlLWJ0biB7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgd2lkdGg6IDE0NXB4O1xyXG4gIC8vaGVpZ2h0OiA0MHAgeDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgLy8gZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLWJvbGQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZiMDAwIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3JkZXItcmFkaXVzOiAzcmVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSBoNCB7XHJcbiBoZWlnaHQ6IDI4cHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IGg0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAvL3RyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBoNCB7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtaW4td2lkdGg6IDIxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogMztcclxuXHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICB9XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('animation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    opacity: 1,
                    transform: 'translateY(100)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    opacity: 0,
                    transform: 'translateY(-100%)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('350ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('350ms ease-in'))
            ])
        ] } });


/***/ }),

/***/ "8Wwf":
/*!***********************************************!*\
  !*** ./src/app/shared/trancate-words.pipe.ts ***!
  \***********************************************/
/*! exports provided: TrancateWordsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrancateWordsPipe", function() { return TrancateWordsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TrancateWordsPipe {
    transform(value, length) {
        const biggestWord = 50;
        const elipses = '...';
        if (typeof value === 'undefined') {
            return value;
        }
        if (value.length <= length) {
            return value;
        }
        if (length < elipses.length) {
            return '';
        }
        //.. truncate to about correct lenght
        let truncatedText = value.slice(0, length + biggestWord);
        //.. now nibble ends till correct length
        while (truncatedText.length > length - elipses.length) {
            let lastSpace = truncatedText.lastIndexOf(' ');
            if (lastSpace === -1) {
                truncatedText = '';
                break;
            }
            truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?]$/, '');
        }
        ;
        return truncatedText + elipses;
    }
}
TrancateWordsPipe.ɵfac = function TrancateWordsPipe_Factory(t) { return new (t || TrancateWordsPipe)(); };
TrancateWordsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "trancateWords", type: TrancateWordsPipe, pure: true });


/***/ }),

/***/ "9Ii+":
/*!*********************************************************!*\
  !*** ./src/app/shared/lets-talk/lets-talk.component.ts ***!
  \*********************************************************/
/*! exports provided: LetsTalkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetsTalkComponent", function() { return LetsTalkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class LetsTalkComponent {
    constructor() { }
    ngOnInit() {
    }
}
LetsTalkComponent.ɵfac = function LetsTalkComponent_Factory(t) { return new (t || LetsTalkComponent)(); };
LetsTalkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LetsTalkComponent, selectors: [["app-lets-talk"]], decls: 8, vars: 6, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", "fxFlex", "100", 2, "background-color", "#fafafa"], ["fxLayout", "column", "fxFlex", "100", "fxLayoutAlign", "center center", 2, "margin", "120px 0"], [1, "letsTalk-text"], ["routerLink", "/contact/contact", 1, "curved-btn-primary", "cursor"]], template: function LetsTalkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "CONTACT-US-CREATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "LETS-TALK"));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".letsTalk-text[_ngcontent-%COMP%] {\n  align-self: center;\n  text-align: center;\n  font-family: Poppins-medium;\n  font-weight: normal;\n  font-size: 28px;\n}\n\n.curved-btn-primary[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 0;\n  font-family: Poppins-bold;\n  padding: 9px 40px;\n  border: none;\n  min-width: 110px;\n  font-weight: bold;\n  font-size: 17px;\n  border-radius: 1.5rem;\n  background-color: #ffb000;\n  color: black;\n  align-self: center;\n  min-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsZXRzLXRhbGsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUYiLCJmaWxlIjoibGV0cy10YWxrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sZXRzVGFsay10ZXh0IHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLW1lZGl1bTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuLmN1cnZlZC1idG4tcHJpbWFyeSB7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLWJvbGQ7XHJcbiAgcGFkZGluZzogOXB4IDQwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1pbi13aWR0aDogMTEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMDAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMzBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
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
    production: true,
    backendUrl: 'http://35.167.136.164:3000/graphql'
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

/***/ "C+Iy":
/*!*****************************************!*\
  !*** ./src/app/shared/trancate.pipe.ts ***!
  \*****************************************/
/*! exports provided: TrancatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrancatePipe", function() { return TrancatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TrancatePipe {
    transform(value, length) {
        const biggestWord = 50;
        const elipses = '...';
        if (typeof value === 'undefined') {
            return value;
        }
        if (value.length <= length) {
            return value;
        }
        //.. truncate to about correct lenght
        let truncatedText = value.slice(0, length + biggestWord);
        //.. now nibble ends till correct length
        while (truncatedText.length > length - elipses.length) {
            let lastSpace = truncatedText.lastIndexOf(' ');
            if (lastSpace === -1) {
                break;
            }
            truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?;:]$/, '');
        }
        ;
        return truncatedText + elipses;
    }
}
TrancatePipe.ɵfac = function TrancatePipe_Factory(t) { return new (t || TrancatePipe)(); };
TrancatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "trancate", type: TrancatePipe, pure: true });


/***/ }),

/***/ "CG4R":
/*!*******************************************************!*\
  !*** ./src/app/main/auth/signin/sign-in.component.ts ***!
  \*******************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









class SignInComponent {
    constructor(fb, serv) {
        this.fb = fb;
        this.serv = serv;
    }
    submit() {
        this.serv.signIn(this.userData.value);
    }
    ngOnInit() {
        this.userData = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
        });
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-signin"]], decls: 45, vars: 31, consts: [["fxLayout", "row wrap", "fxFlexAlign", "center center", "fxLayout.lt-md", "column", 2, "min-height", "100%", "max-width", "100%"], ["fxLayout", "row", "fxFlex", "50", "fxFlexAlign", "start start", "fxLayoutAlign", "center center"], ["fxLayout", "column", "fxFlexAlign", "start start", "fxLayoutAlign", "center center", "fxFlex", "100"], ["fxFlexAlign", "start", "fxLayoutAlign", "start", 1, "row"], ["src", "/assets/logo.svg", "routerLink", "/home", 1, "logo", 2, "margin-left", "50px"], ["fxLayout", "column", "fxFlex", "50", "fxFlexAlign", "start center", 1, "left-one"], ["fxLayout", "row", 2, "width", "100%"], ["fxLayout", "column", "fxFlex", "70", "fxFlexAlign", "center center", 1, "inner-col", 3, "formGroup"], [1, "header-text"], ["formControlName", "email", "autocapitalize", "off", "autocomplete", "email", 1, "input"], ["formControlName", "password", "autocomplete", "password", "type", "password", 1, "input"], ["routerLink", "/auth/forget-password", 2, "padding-top", "50px", "padding-left", "10px", "color", "#ffb000", "cursor", "pointer"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["mat-raised-button", "", 1, "curved-btn-primary", 3, "click"], ["fxLayout", "column", "fxFlex", "50", "fxFlexAlign", "center center", 1, "right-one"], ["fxLayout", "column", "fxFlexAlign", "center center", 1, "inner-col2"], [1, "header-text2"], [1, "sub-text"], ["routerLink", "/auth/sign-up", 2, "padding-left", "10px", "color", "#ffb000", "cursor", "pointer"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_27_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 11, "SIGNIN-INNOVALZ"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 13, "EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 15, "PASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 17, "REMEMBER-ME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 19, "FORGOT-PASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 21, "SIGN-IN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 23, "SIGN-IN-HEAD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 25, "SIGN-IN-PARA"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 27, "DONT-HAVE-ACCOUNT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 29, "SIGN-UP"));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".input[_ngcontent-%COMP%] {\n  height: 30px;\n}\n\n.right-one[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n  justify-content: center;\n}\n\n.left-one[_ngcontent-%COMP%] {\n  color: black;\n  background-color: white;\n  justify-content: center;\n}\n\n.inner-col[_ngcontent-%COMP%] {\n  padding: 30px;\n  align-self: center;\n  vertical-align: baseline;\n  min-width: 350px;\n}\n\n.inner-col2[_ngcontent-%COMP%] {\n  padding: 30px;\n  align-self: center;\n  vertical-align: center;\n}\n\n.curved-btn-primary[_ngcontent-%COMP%] {\n  font-weight: bold;\n  border-radius: 1.25rem;\n  background-color: #ffb000;\n  color: black;\n  align-self: center;\n  padding: 0 30px;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-size: xx-large;\n  align-self: center;\n}\n\n.header-text2[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-size: xxx-large;\n  align-self: center;\n}\n\n.sub-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: lighter;\n  align-self: center;\n  width: 50%;\n  font-size: large;\n  font-family: Poppins;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lnbi1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNGIiwiZmlsZSI6InNpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLnJpZ2h0LW9uZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5sZWZ0LW9uZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW5uZXItY29sIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgbWluLXdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuLmlubmVyLWNvbDIge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uY3VydmVkLWJ0bi1wcmltYXJ5IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIwMDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItdGV4dDIge1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Yi10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _main_profile_profile_disable_control_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../main/profile/profile/disable-control.directive */ "/J2K");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./highlight.directive */ "TQA+");
/* harmony import */ var _trancate_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./trancate.pipe */ "C+Iy");
/* harmony import */ var _trancate_words_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./trancate-words.pipe */ "8Wwf");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _lets_talk_lets_talk_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lets-talk/lets-talk.component */ "9Ii+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ "fXoL");




























const PIPES = [_trancate_pipe__WEBPACK_IMPORTED_MODULE_23__["TrancatePipe"], _trancate_words_pipe__WEBPACK_IMPORTED_MODULE_24__["TrancateWordsPipe"]];
const modulesToExport = [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"]
];
const directives = [_main_profile_profile_disable_control_directive__WEBPACK_IMPORTED_MODULE_21__["DisableControlDirective"], _highlight_directive__WEBPACK_IMPORTED_MODULE_22__["HighlightDirective"]];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[...modulesToExport], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_main_profile_profile_disable_control_directive__WEBPACK_IMPORTED_MODULE_21__["DisableControlDirective"], _highlight_directive__WEBPACK_IMPORTED_MODULE_22__["HighlightDirective"], _trancate_pipe__WEBPACK_IMPORTED_MODULE_23__["TrancatePipe"], _trancate_words_pipe__WEBPACK_IMPORTED_MODULE_24__["TrancateWordsPipe"], _lets_talk_lets_talk_component__WEBPACK_IMPORTED_MODULE_26__["LetsTalkComponent"]], imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"]], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _main_profile_profile_disable_control_directive__WEBPACK_IMPORTED_MODULE_21__["DisableControlDirective"], _highlight_directive__WEBPACK_IMPORTED_MODULE_22__["HighlightDirective"], _trancate_pipe__WEBPACK_IMPORTED_MODULE_23__["TrancatePipe"], _trancate_words_pipe__WEBPACK_IMPORTED_MODULE_24__["TrancateWordsPipe"], _lets_talk_lets_talk_component__WEBPACK_IMPORTED_MODULE_26__["LetsTalkComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.title = 'innovalz';
        // this language will be used as a fallback when a translation isn't found in the current language
        // the lang to use, if the lang isn't available, it will use the current loader to get them
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TQA+":
/*!***********************************************!*\
  !*** ./src/app/shared/highlight.directive.ts ***!
  \***********************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HighlightDirective {
    constructor(el) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}
HighlightDirective.ɵfac = function HighlightDirective_Factory(t) { return new (t || HighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HighlightDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HighlightDirective, selectors: [["", "appHighlight", ""]] });


/***/ }),

/***/ "U9Ir":
/*!**********************************************!*\
  !*** ./src/assets/animationts/animations.ts ***!
  \**********************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('HomePage <=> AboutPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> FilterPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ])
]);


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, createTranslateLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "7Ufg");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/user-layout/user-layout.component */ "cav2");
/* harmony import */ var _main_auth_signin_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/auth/signin/sign-in.component */ "CG4R");
/* harmony import */ var _main_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/auth/signup/signup.component */ "zloA");
/* harmony import */ var _main_auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/auth/forget-password/forget-password.component */ "uH1P");
/* harmony import */ var _main_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/auth/reset-password/reset-password.component */ "m0bE");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "3TnI");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./graphql.module */ "4KHl");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! apollo-angular/http */ "E21e");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./terms/terms.component */ "eIz4");
/* harmony import */ var _guard_user_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guard/user.guard */ "3owW");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");




















// import {TranslateHttpLoader} from '@ngx-translate/http-loader';





const appRoutes = [
    {
        path: '',
        component: _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_8__["UserLayoutComponent"],
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() | main-home-home-module */[__webpack_require__.e("default~main-home-home-module~main-pricing-pricing-module~main-products-products-module~main-service~a2a119d3"), __webpack_require__.e("main-home-home-module")]).then(__webpack_require__.bind(null, /*! ./main/home/home.module */ "L+0V")).then(m => m.HomeModule), data: { preload: true }
            },
            {
                path: 'pricing',
                loadChildren: () => __webpack_require__.e(/*! import() | main-pricing-pricing-module */ "default~main-home-home-module~main-pricing-pricing-module~main-products-products-module~main-service~a2a119d3").then(__webpack_require__.bind(null, /*! ./main/pricing/pricing.module */ "/6Yg")).then(m => m.PricingModule), data: { preload: false }
            }, {
                path: 'products',
                loadChildren: () => Promise.all(/*! import() | main-products-products-module */[__webpack_require__.e("default~main-home-home-module~main-pricing-pricing-module~main-products-products-module~main-service~a2a119d3"), __webpack_require__.e("main-products-products-module")]).then(__webpack_require__.bind(null, /*! ./main/products/products.module */ "Hx44")).then(m => m.ProductsModule), data: { preload: false }
            },
            {
                path: 'services',
                loadChildren: () => Promise.all(/*! import() | main-services-services-module */[__webpack_require__.e("default~main-home-home-module~main-pricing-pricing-module~main-products-products-module~main-service~a2a119d3"), __webpack_require__.e("main-services-services-module")]).then(__webpack_require__.bind(null, /*! ./main/services/services.module */ "fJkL")).then(m => m.ServicesModule), data: { preload: false }
            }, {
                path: 'about', data: { preload: false, animation: 'FilterPage' },
                loadChildren: () => __webpack_require__.e(/*! import() | main-about-about-module */ "main-about-about-module").then(__webpack_require__.bind(null, /*! ./main/about/about.module */ "59Ah")).then(m => m.AboutModule)
            },
            {
                path: 'contact',
                data: { preload: false },
                loadChildren: () => __webpack_require__.e(/*! import() | main-contact-contact-module */ "main-contact-contact-module").then(__webpack_require__.bind(null, /*! ./main/contact/contact.module */ "OM9L")).then(m => m.ContactModule),
            },
            {
                path: 'careers',
                loadChildren: () => __webpack_require__.e(/*! import() | main-careers-careers-module */ "main-careers-careers-module").then(__webpack_require__.bind(null, /*! ./main/careers/careers.module */ "VXh7")).then(m => m.CareersModule), data: { preload: false }
            },
            {
                path: 'contact',
                loadChildren: () => __webpack_require__.e(/*! import() | main-contact-contact-module */ "main-contact-contact-module").then(__webpack_require__.bind(null, /*! ./main/contact/contact.module */ "OM9L")).then(m => m.ContactModule), data: { preload: false }
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() | main-profile-profile-module */ "main-profile-profile-module").then(__webpack_require__.bind(null, /*! ./main/profile/profile.module */ "KX/I")).then(m => m.ProfileModule), data: { preload: false },
                canActivate: [_guard_user_guard__WEBPACK_IMPORTED_MODULE_19__["UserGuard"]]
            }, {
                path: 'terms',
                component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_18__["TermsComponent"]
            },
            {
                path: '',
                redirectTo: 'home', pathMatch: 'full'
            }
        ]
    },
    {
        path: 'auth',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_13__["AuthLayoutComponent"],
        children: [
            { path: 'sign-in', component: _main_auth_signin_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"] },
            { path: 'sign-up', component: _main_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"] },
            { path: 'forget-password', component: _main_auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgetPasswordComponent"] },
            { path: 'reset-password', component: _main_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__["ResetPasswordComponent"] },
            { path: '', redirectTo: 'sign-in', pathMatch: 'full' }
        ]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_16__["APOLLO_OPTIONS"],
            useFactory: _graphql_module__WEBPACK_IMPORTED_MODULE_14__["createApollo"],
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_17__["HttpLink"]],
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateModule"].forRoot({
                defaultLanguage: 'en',
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateLoader"],
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]]
                }
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
            _graphql_module__WEBPACK_IMPORTED_MODULE_14__["GraphQLModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_main_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"], _main_auth_signin_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"], _main_auth_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgetPasswordComponent"], _main_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__["ResetPasswordComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_13__["AuthLayoutComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["MainNavComponent"],
        _layouts_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_8__["UserLayoutComponent"],
        _terms_terms_component__WEBPACK_IMPORTED_MODULE_18__["TermsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
        _graphql_module__WEBPACK_IMPORTED_MODULE_14__["GraphQLModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]] }); })();
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_21__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
}


/***/ }),

/***/ "cav2":
/*!**************************************************************!*\
  !*** ./src/app/layouts/user-layout/user-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: UserLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLayoutComponent", function() { return UserLayoutComponent; });
/* harmony import */ var src_assets_animationts_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/animationts/animations */ "U9Ir");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../main-nav/main-nav.component */ "7Ufg");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../footer/footer.component */ "fp1T");






class UserLayoutComponent {
    constructor() {
        this.lang = localStorage.getItem('lang') || 'en';
    }
    // prepareRoute(outlet: RouterOutlet) {
    //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    // }
    ngOnInit() {
    }
    rtl() {
        if (this.lang === 'en') {
            return 'ltr';
        }
        else {
            return 'rtl';
        }
    }
}
UserLayoutComponent.ɵfac = function UserLayoutComponent_Factory(t) { return new (t || UserLayoutComponent)(); };
UserLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserLayoutComponent, selectors: [["app-user-layout"]], decls: 5, vars: 3, consts: [[2, "min-height", "100%"], [3, "dir"], [1, "footer", 3, "dir"]], template: function UserLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-main-nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-footer", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", ctx.rtl());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", ctx.rtl());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", ctx.rtl());
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__["MainNavComponent"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Dir"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            src_assets_animationts_animations__WEBPACK_IMPORTED_MODULE_0__["slideInAnimation"]
            // animation triggers go here
        ] } });


/***/ }),

/***/ "eIz4":
/*!******************************************!*\
  !*** ./src/app/terms/terms.component.ts ***!
  \******************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TermsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const term_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](term_r1.headline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](term_r1.desc);
} }
class TermsComponent {
    constructor() {
        this.terms = [{
                headline: 'Privacy Policy',
                desc: 'At Innovalz.com, accessible from www.Innovalz.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that are collected and recorded by Innovalz.com and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Innovalz.com. This policy is not applicable to any information collected offline or via channels other than this website.'
            }, {
                headline: 'Consent',
                desc: 'By using our website, you hereby consent to our Privacy Policy and agree to its terms.'
            }, {
                headline: 'Information we collect',
                desc: 'The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.'
            }, {
                headline: 'How we use your information ',
                desc: 'We use the information we collect in various ways, including: Provide, operate, and maintain our website Improve, personalize, and expand our website Understand and analyze how you use our website Develop new products, services, features, and functionality Send you emails Find and prevent fraud'
            }, {
                headline: 'Log Files',
                desc: 'Innovalz.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.'
            }, {
                headline: 'Cookies and Web Beacons',
                desc: 'Like any other website, Innovalz.com uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information. For more general information on cookies, please read “What Are Cookies” from Cookie Consent.'
            }, {
                headline: 'Advertising Partners Privacy Policies',
                desc: 'You may consult this list to find the Privacy Policy for each of the advertising partners of Innovalz.com. Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Innovalz.com, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that Innovalz.com has no access to or control over these cookies that are used by third-party advertisers.'
            },
        ];
    }
    ngOnInit() {
    }
}
TermsComponent.ɵfac = function TermsComponent_Factory(t) { return new (t || TermsComponent)(); };
TermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsComponent, selectors: [["app-terms"]], decls: 7, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 2, "margin-top", "100px"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "50"], ["fxLayout", "column", "fxLayoutAlign", "center start", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutAlign", "center start"], [2, "margin", "20px"]], template: function TermsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Terms & conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TermsComponent_div_6_Template, 6, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.terms);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "eXr/":
/*!***********************************************!*\
  !*** ./src/app/main/home/home/homequeries.ts ***!
  \***********************************************/
/*! exports provided: navbarQuery, allProductsQuery, onePartner, oneFeature, oneProdQuery, parentServiceQuery, findOneParentServiceQuery, findOneServiceQuery, findOneChildServiceQuery, findServiceWithSameParent, removeProduct, removePartner, removeServiceFeature, removeParentService, removeChildService, homeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navbarQuery", function() { return navbarQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allProductsQuery", function() { return allProductsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onePartner", function() { return onePartner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneFeature", function() { return oneFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneProdQuery", function() { return oneProdQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parentServiceQuery", function() { return parentServiceQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findOneParentServiceQuery", function() { return findOneParentServiceQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findOneServiceQuery", function() { return findOneServiceQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findOneChildServiceQuery", function() { return findOneChildServiceQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findServiceWithSameParent", function() { return findServiceWithSameParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProduct", function() { return removeProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePartner", function() { return removePartner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeServiceFeature", function() { return removeServiceFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeParentService", function() { return removeParentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChildService", function() { return removeChildService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeQuery", function() { return homeQuery; });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ "/IUn");

const navbarQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query findManyServices{
    findManyChildServices {
      entities {
        parentService{id}
        id
        title
      }
    },
    findManyProducts{
      entities{
        id
        title
      }
    }
  },
`;
const allProductsQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query allProductsQuery{
    findManyProducts{
      entities{
        icon
        id
        title
        subTitle
        shortDesc
      }
    }
  }
`;
const onePartner = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `

  query oneProdQuery($id:Int!){
    findOnePartner(query: {id: $id}){
    id  title image  desc  onHome isActive
    }
  }
`;
const oneFeature = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query oneFeature($id:Int!){
    findOneServiceFeature(query: {id: $id}){
    id  title image  desc
    }
  }
`;
const oneProdQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `


  query oneProdQuery($id:Int!){
    findOneProduct(query: {id: $id}){
    id logo title icon  shortDesc subTitle onHome isActive
        smallParagraphs {
        fullDesc
        headline
      }
    }
    findManyProducts{
      entities{
        icon
        id
        title
        shortDesc
      }
    }
  }
`;
const parentServiceQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query parentServiceQuery{
    findManyParentServices {
      entities {
        id
        icon
        desc
        title
        childServices{id title icon features{title}}
      }
    }
  }
`;
const findOneParentServiceQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query findOneServiceQuery($id:Int!) {
  findOneParentService(query: {id: $id}) {
    id
    desc
    icon
    title
  }
  }
`;
const findOneServiceQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query findOneServiceQuery($id:Int!,$parentId:Int) {
    findOneChildService(query: {id: $id}) {
      id
      logo
      title
      fullDesc
      features{image desc title id}
    }
    findOneParentService(query: {id: $parentId}) {
      childServices{
        icon
        parentService{id}
        id
        logo
        title
      features{image desc title id}

      }
    }

  }
`;
const findOneChildServiceQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query findOneServiceQuery($id:Int!) {
    findOneChildService(query: {id: $id}) {
      id icon logo
      title
      fullDesc
      onHome isActive
    }
  }
`;
const findServiceWithSameParent = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query findServiceWithSameParent($parentId:Int) {
    findOneParentService(query: {id: $parentId}) {
      childServices{
        parentService{id}
        id
        logo
        title
      }
    }
  }
`;
const removeProduct = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `

  mutation removeProduct($id:Int!){
    removeProduct(id: $id){id }
  }
`;
const removePartner = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `

  mutation removePartner($id:Int!){
    removePartner(id: $id){id }
  }
`;
const removeServiceFeature = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `

  mutation removeServiceFeature($id:Int!){
    removeServiceFeature(id: $id){id }
  }
`;
const removeParentService = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `

  mutation removeParentService($id:Int!){
    removeParentService(id: $id){id }
  }
`;
const removeChildService = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `

  mutation removeChildService($id:Int!){
    removeChildService(id: $id){id }
  }
`;
const homeQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `

  query homeQuery{
    findManyParentServices {
      entities {
        icon
        id
        title
        childServices{id title}
      }
    },
    findManyProducts{
      entities{
        id
        title
        subTitle
        icon
        shortDesc

      }


    } ,
    findManyPartners{
      entities{
        id
        title
        image
        desc
      }


    }

  }
`;


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





function FooterComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const socialLink_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", socialLink_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", socialLink_r1.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class FooterComponent {
    constructor() {
        this.socialLinks = [
            { iconUrl: "assets/social-icons/fb.svg", link: "https://www.facebook.com/innovalz" },
            { iconUrl: "assets/social-icons/tw.svg", link: "https://twitter.com/innovalz" },
            { iconUrl: "assets/social-icons/socialicons/insta.png", link: "https://www.instagram.com/innovalz.insta/" },
            { iconUrl: "assets/social-icons/yt.svg", link: "https://www.youtube.com/channel/UCNZdBUY5zXer1YAhvs1m5kg" },
            { iconUrl: "assets/social-icons/in.svg", link: "http://www.linkedin.com/company/innovalz-tech" },
        ];
        this.services = [{ headline: "Mobile App Development", id: 1 },
            { headline: "Web App Development", id: 2 },
            { headline: "Marketing", id: 3 },
            { headline: "Digital Marketing", id: 4 },
            { headline: "Branding", id: 4 },
            { headline: "Media Production", id: 4 },
        ];
        this.products = [{ headline: "E Learning", id: 1 },
            { headline: "Gym Management", id: 2 },
            { headline: "Library archieving", id: 3 },
            { headline: "Health Care", id: 3 },
            { headline: "Friday Mall", id: 3 },
            { headline: "E-commerce", id: 4 },
        ];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 37, vars: 39, consts: [["fxLayoutAlign", "center center", 1, "footer", 2, "max-width", "100%"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["fxLayout", "row", "fxFlex", "1 1 auto", "fxLayoutAlign", "space-between", 2, "padding", "15px", "margin-top", "10px"], ["style", "margin-right: 10px", "target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxflex", "100", "fxFlexAlign", "center center", "fxLayoutAlign", "space-between center", 2, "margin-left", "20px"], ["mat-list-item", "", "routerLink", "/home", 1, "nav-link", 3, "routerLinkActive"], ["mat-list-item", "", "routerLink", "/services/list", 1, "nav-link", 3, "routerLinkActive"], ["mat-list-item", "", "routerLink", "/products/list", 1, "nav-link", 3, "routerLinkActive"], ["routerLink", "/about", "mat-list-item", "", 1, "nav-link", 3, "routerLinkActive"], ["routerLink", "/contact", "mat-list-item", "", 1, "nav-link", 3, "routerLinkActive"], ["routerLink", "/careers", "mat-list-item", "", 1, "nav-link", 3, "routerLinkActive"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 2, "text-align", "center", "max-width", "100%"], ["src", "assets/icons/heart-icon.svg", 2, "width", "16px", "height", "16px", "margin", "5px 5px 0px 5px"], ["fxLayout", "row", "fxflex10", ""], ["routerLink", "/terms", 2, "cursor", "pointer", 3, "routerLinkActive"], ["target", "_blank", 2, "margin-right", "10px", 3, "href"], ["alt", "image", 2, "cursor", "pointer", 3, "src"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FooterComponent_a_3_Template, 2, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.socialLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 19, "HOME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 21, "SERVICES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 23, "PRODUCTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 25, "ABOUT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 27, "CONTACT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 29, "CAREERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 31, "RIGHTS"), "", "\n", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 33, "DESIGNED-WITH"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 35, "BY-INNOVALZ"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 37, "TERMS"), "");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _main_auth_authMutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/auth/authMutation */ "tfCn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "/IUn");




class AuthService {
    // userName: BehaviorSubject<string> = new BehaviorSubject('');
    constructor(apollo) {
        this.apollo = apollo;
        this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.isAdmin = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        if (localStorage.getItem('token')) {
            this.isAuthenticated.next(true);
        }
        else {
            this.isAuthenticated.next(false);
        }
    }
    checkAdmin() {
        this.apollo
            .query({
            query: _main_auth_authMutation__WEBPACK_IMPORTED_MODULE_1__["getUser"],
            fetchPolicy: 'network-only'
        })
            .subscribe((result) => {
            if (result.data.me.roles[0] === 'admin') {
                this.isAdmin.next(true);
            }
            else {
                this.isAdmin.next(false);
            }
        }, error => {
            this.isAdmin.next(false);
        });
        return this.isAdmin;
    }
    checkvalidtoken() {
        this.apollo
            .query({
            query: _main_auth_authMutation__WEBPACK_IMPORTED_MODULE_1__["getUser"],
            fetchPolicy: 'network-only'
        })
            .subscribe((result) => {
            if (result.data.me) {
                this.isAuthenticated.next(true);
            }
            else {
                this.signOut();
                this.isAuthenticated.next(false);
            }
        }, error => {
            this.signOut();
            this.isAuthenticated.next(false);
        });
        return this.isAuthenticated;
    }
    logged() {
        return this.isAuthenticated;
    }
    isAdminUser() {
        return this.isAdmin;
    }
    signIn(userData) {
        this.apollo
            .mutate({
            mutation: _main_auth_authMutation__WEBPACK_IMPORTED_MODULE_1__["signIn"],
            variables: userData
        })
            .subscribe((result) => {
            localStorage.setItem('token', result.data.userLogin.token);
            this.isAuthenticated.next(true);
            // this.userName.next(String(result.data.userLogin.user.name));
            window.location.href = '/';
        }, error => {
            alert(error);
        });
    }
    register(userData) {
        this.apollo
            .mutate({
            mutation: _main_auth_authMutation__WEBPACK_IMPORTED_MODULE_1__["signUp"],
            variables: userData
        })
            .subscribe((result) => {
            var _a, _b;
            localStorage.setItem('token', (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.userRegister) === null || _b === void 0 ? void 0 : _b.token);
            this.isAuthenticated.next(true);
            window.location.href = '/';
        }, (error => alert(error)));
    }
    signOut() {
        localStorage.removeItem('token');
        this.isAuthenticated.next(false);
        // this.userName.next('');
        window.location.href = '/';
    }
    destoryCredentials() {
        localStorage.removeItem('token');
        this.isAuthenticated.next(false);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "m0bE":
/*!**********************************************************************!*\
  !*** ./src/app/main/auth/reset-password/reset-password.component.ts ***!
  \**********************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ResetPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 2, vars: 0, template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reset-password works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "tfCn":
/*!*******************************************!*\
  !*** ./src/app/main/auth/authMutation.ts ***!
  \*******************************************/
/*! exports provided: signIn, signUp, forgetPassword, getUser, getUserProfile, getUsername, getParagraph, updateStepMutation, historyQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgetPassword", function() { return forgetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProfile", function() { return getUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsername", function() { return getUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParagraph", function() { return getParagraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStepMutation", function() { return updateStepMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "historyQuery", function() { return historyQuery; });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ "/IUn");

const signIn = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation ($email: String!, $password: String!) {
    userLogin(data:{email: $email, password: $password}) {
      token
      user {
        name
      }
    }
  }
`;
const signUp = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation userRegister($email: String!, $password: String!,$name:String!,$company:String!,  $confirmPassword: String! ,$phone:String! ) {
    userRegister(data:{email: $email, password: $password,name:$name,confirmPassword:$confirmPassword,phone:$phone,company:$company}) {
      token
      user {
        name
      }
    }
  }
`;
const forgetPassword = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `

mutation userForgetPassword($email: String!) {
  userForgetPassword(data: {email: $email})
}
`;
const getUser = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
query me{
  me {
    roles
    name
  }
  }
`;
const getUserProfile = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
query{
  me {
    email
    name
    phone
    company
    id
  }
  }
`;
const getUsername = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
query{
  me {
    name
  }
  }
`;
const getParagraph = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
query getParagraph{
findManySmallParagraphs(options:{limit:100}){
  entities{id ,headline fullDesc}
}
  }
`;
const updateStepMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
mutation ($name:String!,$phone:String!,$id:Int! ,$email:String!,$company:String!){
  updateUser(data: {id:$id , name: $name, phone: $phone, email: $email, company: $company}) {
    name
  }
},
`;
// (query: {user: {email: $email}})
const historyQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
query {
  findManyPricingHistories{
  entities {
    id
    totalPrice
    pricingServices {
      title
    }
    user{email name}
  }
}
}
`;


/***/ }),

/***/ "uH1P":
/*!************************************************************************!*\
  !*** ./src/app/main/auth/forget-password/forget-password.component.ts ***!
  \************************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var _authMutation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authMutation */ "tfCn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








class ForgetPasswordComponent {
    constructor(apollo, fb, router) {
        this.apollo = apollo;
        this.fb = fb;
        this.router = router;
    }
    ngOnInit() {
        this.userData = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        });
    }
    send() {
        this.apollo
            .mutate({
            mutation: _authMutation__WEBPACK_IMPORTED_MODULE_0__["forgetPassword"],
            variables: this.userData.value
        })
            .subscribe((result) => {
            if (result.data.userForgetPassword) {
                alert('check your email to reset password');
                this.router.navigateByUrl('/auth/sign-in');
            }
            else {
                alert('Error , email not found');
            }
        }, (error => alert(error)));
    }
}
ForgetPasswordComponent.ɵfac = function ForgetPasswordComponent_Factory(t) { return new (t || ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ForgetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ForgetPasswordComponent, selectors: [["app-forget-password"]], decls: 14, vars: 1, consts: [[2, "min-height", "100%", "max-width", "100%"], ["fxLayout", "column", "fxFlex", "100", "fxFlexAlign", "center center"], [1, "header-text"], [1, "sub-text"], ["fxFlexAlign", "center", 3, "formGroup"], ["formControlName", "email", 1, "mail"], ["mat-raised-button", "", "type", "submit", 1, "curved-btn-primary", 3, "click"]], template: function ForgetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "To retrieve your email access again please make sure to have access to the mail and kindly supply us with your mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ForgetPasswordComponent_Template_button_click_11_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.userData);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".header-text[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-size: xx-large;\n  align-self: center;\n  font-weight: bolder;\n}\n\n.sub-text[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-size: large;\n  align-self: center;\n  width: 50%;\n}\n\n.mail[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 300px;\n}\n\n.curved-btn-primary[_ngcontent-%COMP%] {\n  min-width: 90px;\n  border: none;\n  font-weight: bold;\n  border-radius: 1.5rem;\n  background-color: #ffb000;\n  color: black;\n  align-self: center;\n  min-height: 20px;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUVFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNELFVBQUE7QUFERDs7QUFJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQURGIiwiZmlsZSI6ImZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdGV4dHtcclxuICAvL3BhZGRpbmctdG9wOiAxMDBweDtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG5cclxufVxyXG4uc3ViLXRleHR7XHJcbiAgLy9wYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiB3aWR0aDogNTAlO1xyXG4gIC8vZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4ubWFpbHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uY3VydmVkLWJ0bi1wcmltYXJ5IHtcclxuICBtaW4td2lkdGg6IDkwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMDAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zloA":
/*!******************************************************!*\
  !*** ./src/app/main/auth/signup/signup.component.ts ***!
  \******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











function SignupComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter valid name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter valid Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter valid Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter valid phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(fb, serv) {
        this.fb = fb;
        this.serv = serv;
    }
    ngOnInit() {
        this.userData = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
        });
    }
    submit() {
        this.serv.register(this.userData.value);
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 65, vars: 45, consts: [["fxLayout", "column"], ["fxFlex", "100", "fxLayout", "row wrap", "fxFlexAlign", "center center", "fxLayout.lt-md", "column-reverse"], ["fxLayout", "column", "fxFlex", "50", "fxFlexAlign", "center center", 1, "left-one"], [1, "row"], ["alt", "home", "src", "/assets/logo.svg", "routerLink", "/home", 1, "logo"], ["fxLayout", "column", "fxFlexAlign", "center center", 1, "inner-col2"], [1, "header-text2"], [1, "sub-text"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["routerLink", "/auth/sign-in", 2, "padding-left", "10px", "color", "#ffb000", "cursor", "pointer"], ["fxLayout", "column", "fxFlex", "50", "fxFlexAlign", "center center", 1, "right-one"], ["fxLayout", "column", "fxFlex", "70", "fxFlexAlign", "center center", 1, "inner-col", 3, "formGroup"], [1, "header-text"], ["formControlName", "name", "autocomplete", "name", 1, "input"], [4, "ngIf"], ["formControlName", "email", "autocapitalize", "off", "autocomplete", "email", 1, "input"], ["formControlName", "password", "autocomplete", "password", "type", "password", 1, "input"], ["formControlName", "confirmPassword", "autocomplete", "password", "type", "password", 1, "input"], ["formControlName", "phone", "autocomplete", "phone", 1, "input"], ["formControlName", "company", "autocomplete", "company", 1, "input"], ["mat-raised-button", "", "type", "submit", 1, "curved-btn-primary", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SignupComponent_mat_error_28_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, SignupComponent_mat_error_35_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, SignupComponent_mat_error_40_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, SignupComponent_mat_error_46_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, SignupComponent_mat_error_52_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_62_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 19, "WELCOME-BACK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 21, "SIGN-IN-PARA"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 23, "HAVE-ACCOUNT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 25, "SIGN-IN"), "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 27, "CREATE-ACCOUNT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 29, "FULL-NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userData.controls.name.invalid && (ctx.userData.controls.name.dirty || ctx.userData.controls.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 31, "EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userData.controls.email.invalid && (ctx.userData.controls.email.dirty || ctx.userData.controls.email.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 33, "PASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userData.controls.password.invalid && (ctx.userData.controls.password.dirty || ctx.userData.controls.password.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 35, "CONFIRM-PASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userData.controls.confirmPassword.invalid && (ctx.userData.controls.confirmPassword.dirty || ctx.userData.controls.confirmPassword.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 37, "PHONE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userData.controls.phone.invalid && (ctx.userData.controls.phone.dirty || ctx.userData.controls.phone.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](56, 39, "COMPANY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 41, "REMEMBER-ME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](64, 43, "SIGN-UP"));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: [".left-one[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n\n.right-one[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n\n.input[_ngcontent-%COMP%] {\n  flex-direction: row;\n  height: 50px;\n  width: 80%;\n}\n\n.social-icons[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 20px;\n  width: 40px;\n  height: 40px;\n}\n\n.inner-col[_ngcontent-%COMP%] {\n  margin-top: 20%;\n  width: 60%;\n  padding: 30px;\n  align-self: center;\n  vertical-align: center;\n}\n\n.inner-col2[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  padding: 30px;\n  align-self: center;\n  vertical-align: center;\n}\n\n.curved-btn-primary[_ngcontent-%COMP%] {\n  vertical-align: center;\n  width: 90px;\n  border: none;\n  font-weight: bold;\n  border-radius: 1.25rem;\n  background-color: #ffb000;\n  color: black;\n  align-self: center;\n  height: 25px;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-size: xx-large;\n  align-self: center;\n}\n\n.header-text2[_ngcontent-%COMP%] {\n  padding-top: 20%;\n  font-family: Poppins;\n  font-size: xxx-large;\n  align-self: center;\n}\n\n.sub-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: lighter;\n  align-self: center;\n  width: 50%;\n  font-size: large;\n  font-family: Poppins;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBSUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBRUUsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFKRiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxlZnQtb25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5yaWdodC1vbmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uc29jaWFsLWljb25zIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmlubmVyLWNvbCB7XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlubmVyLWNvbDIge1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmN1cnZlZC1idG4tcHJpbWFyeSB7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogOTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMDAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXRleHQge1xyXG4gIC8vcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIC8vZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLmhlYWRlci10ZXh0MiB7XHJcbiAgcGFkZGluZy10b3A6IDIwJTtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxuICBmb250LXNpemU6IHh4eC1sYXJnZTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgLy9mb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uc3ViLXRleHQge1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map