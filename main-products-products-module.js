(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-products-products-module"],{

/***/ "5rxQ":
/*!************************************************************************!*\
  !*** ./src/app/main/products/add-paragraph/add-paragraph.component.ts ***!
  \************************************************************************/
/*! exports provided: AddParagraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddParagraphComponent", function() { return AddParagraphComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_home_homemutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home/home/homemutation */ "c/1x");
/* harmony import */ var _auth_authMutation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/authMutation */ "tfCn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _view_paragraph_view_paragraph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-paragraph/view-paragraph.component */ "DCgG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












function AddParagraphComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "en:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "textarea", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "ar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddParagraphComponent_div_24_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.removeDesc(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r2);
} }
class AddParagraphComponent {
    constructor(fb, apollo, route, router) {
        this.fb = fb;
        this.apollo = apollo;
        this.route = route;
        this.router = router;
        this.paragraphsToAddToProd = [];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
        });
        this.createParagraphForm();
        this.getAllParagraphs();
    }
    getAllParagraphs() {
        this.apollo.watchQuery({
            query: _auth_authMutation__WEBPACK_IMPORTED_MODULE_2__["getParagraph"], fetchPolicy: 'network-only'
        }).valueChanges.subscribe((result) => {
            this.paragraphs = result.data.findManySmallParagraphs.entities;
        });
    }
    addParagraphsIdsToProduct(ids) {
        this.apollo.mutate({
            mutation: _home_home_homemutation__WEBPACK_IMPORTED_MODULE_1__["addProductParagraphs"],
            variables: { id: Number(this.id), paragraphs: ids }
        }).subscribe((response) => {
            this.createParagraphForm();
            this.getAllParagraphs();
            alert('Done');
            this.router.navigateByUrl('/products/viewProduct/' + this.id);
        }, error => alert(error));
    }
    createParagraphForm() {
        this.smallPara = this.fb.group({
            headline: this.localizedObj(),
            fullDesc: this.fb.array([])
        });
    }
    localizedObj() {
        return this.fb.group({
            ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    get desc() {
        return this.smallPara.get('fullDesc');
    }
    addDesc() {
        this.desc.push(this.localizedObj());
    }
    send() {
        this.apollo.mutate({
            mutation: _home_home_homemutation__WEBPACK_IMPORTED_MODULE_1__["sendsmallpara"],
            variables: this.smallPara.value
        }).subscribe((response) => {
            this.createParagraphForm();
            this.getAllParagraphs();
            alert('Done');
        }, error => alert(error));
    }
    submit() {
        this.send();
    }
    removeDesc(i) {
        this.desc.removeAt(i);
    }
}
AddParagraphComponent.ɵfac = function AddParagraphComponent_Factory(t) { return new (t || AddParagraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AddParagraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddParagraphComponent, selectors: [["app-add-product"]], decls: 30, vars: 5, consts: [[2, "margin-top", "150px"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [3, "paragraphs", "ids"], [3, "formGroup"], [3, "formGroupName"], ["fxLayout", "row"], ["formControlName", "en"], ["formControlName", "ar"], ["mat-raised-button", "", "color", "accent", 2, "margin", "10px", 3, "click"], ["formArrayName", "fullDesc"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent", "type", "submit", 2, "margin", "10px", 3, "disabled", "click"], ["fxLayout", "row", 2, "padding", "7px"], [2, "margin", "10px", "width", "75px", "height", "75px", 3, "click"]], template: function AddParagraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "add/edit product");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-view-paragraph", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ids", function AddParagraphComponent_Template_app_view_paragraph_ids_4_listener($event) { return ctx.addParagraphsIdsToProduct($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Paragraph Headline");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "en:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "                      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "ar:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "                      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Paragraph shortLines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddParagraphComponent_Template_button_click_20_listener() { return ctx.addDesc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, AddParagraphComponent_div_24_Template, 12, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddParagraphComponent_Template_button_click_25_listener() { return ctx.addDesc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddParagraphComponent_Template_button_click_28_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("paragraphs", ctx.paragraphs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.smallPara);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", "headline");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.desc.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.smallPara.invalid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _view_paragraph_view_paragraph_component__WEBPACK_IMPORTED_MODULE_7__["ViewParagraphComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcGFyYWdyYXBoLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "7rWL":
/*!************************************************************************!*\
  !*** ./src/app/main/products/products-list/products-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var _home_home_homequeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home/home/homequeries */ "eXr/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_lets_talk_lets_talk_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/lets-talk/lets-talk.component */ "9Ii+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_trancate_words_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/trancate-words.pipe */ "8Wwf");












const _c0 = function (a0) { return [a0]; };
function ProductsListComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "trancateWords");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, "/products/viewProduct/" + product_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r4.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", product_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 5, product_r4.shortDesc, 69), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, "REQUEST-OFFER"));
} }
function ProductsListComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "customize your product now to just fit your needs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, "CUSTOMIZE-PRODUCTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 4, "REQUEST-OFFER"));
} }
function ProductsListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsListComponent_div_9_div_1_Template, 12, 12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductsListComponent_div_9_div_2_Template, 12, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.products.length);
} }
const _c1 = function () { return ["/products/add-edit-product/", null]; };
function ProductsListComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
} }
class ProductsListComponent {
    constructor(apollo, auth) {
        this.apollo = apollo;
        this.auth = auth;
        this.products = [];
        this.admin = false;
    }
    replaceComma(stringo) {
        return stringo.replace(/,/g, ' ');
    }
    ngOnInit() {
        this.auth.checkAdmin().subscribe(x => this.admin = x);
        this.apollo
            .watchQuery({
            query: _home_home_homequeries__WEBPACK_IMPORTED_MODULE_0__["allProductsQuery"],
            fetchPolicy: 'network-only'
        })
            .valueChanges.subscribe((result) => {
            var _a;
            this.products = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.findManyProducts.entities;
        });
    }
}
ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) { return new (t || ProductsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ProductsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductsListComponent, selectors: [["app-products-list"]], decls: 13, vars: 8, consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 2, "background-color", "white"], ["fxLayoutAlign", "center center", 2, "min-height", "100%", "max-width", "100%"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "55%"], [1, "header-text"], [1, "sub-text"], ["fxLayout", "row", "class", "wrap", "fxFlex", "100", "fxLayoutAlign", "center center", 4, "ngIf"], ["style", "margin: 50px;width: 100px;border-radius: 25%; height: 100px; float: right", "color", "accent", "mat-raised-button", "", 3, "routerLink", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "bottom-section"], ["fxFlex", "100"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "center center", 1, "wrap"], ["class", "product", "fxFlex", "40", "fxFlex.lt-md", "100", "fxLayout", "column", "fxLayoutAlign", "center center", 3, "routerLink", 4, "ngFor", "ngForOf"], ["class", "cusotmize-prod", "style", "overflow: hidden", "fxLayout", "row", "fxFlex.lt-md", "100", "fxFlex", "82.5", "fxLayoutAlign", "center start", 4, "ngIf"], ["fxFlex", "40", "fxFlex.lt-md", "100", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "product", 3, "routerLink"], [1, "product-img", 3, "src"], [1, "product-title"], [1, "product-desc"], ["mat-raised-button", "", "routerLink", "/pricing/request-offer", 1, "reqBtn"], ["fxLayout", "row", "fxFlex.lt-md", "100", "fxFlex", "82.5", "fxLayoutAlign", "center start", 1, "cusotmize-prod", 2, "overflow", "hidden"], ["src", "/assets/icons/customize.svg", 1, "product-img"], ["fxLayout", "column", "fxLayoutAlign", "start start"], [1, "product-title", 2, "padding", "10px"], [1, "last-desc", 2, "padding", "10px"], ["color", "accent", "mat-raised-button", "", 2, "margin", "50px", "width", "100px", "border-radius", "25%", "height", "100px", "float", "right", 3, "routerLink"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProductsListComponent_div_9_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProductsListComponent_button_10_Template, 3, 2, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-lets-talk", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, "OUR-PRODUCTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 6, "PRODUCTS-PARAGRAPH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.products.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.admin);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_lets_talk_lets_talk_component__WEBPACK_IMPORTED_MODULE_6__["LetsTalkComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _shared_trancate_words_pipe__WEBPACK_IMPORTED_MODULE_11__["TrancateWordsPipe"]], styles: [".header-text[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 100px;\n  font-family: poppins-bold;\n  font-size: 36px;\n  font-weight: bolder;\n  color: black;\n}\n\n.sub-text[_ngcontent-%COMP%] {\n  color: black;\n  padding-top: 80px;\n  font-size: large;\n  font-family: Poppins;\n}\n\n.reqBtn[_ngcontent-%COMP%]:hover {\n  background-color: #ffb000;\n}\n\n.product[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin: 45px;\n}\n\n.product[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 22px #3740530F;\n  border-radius: 10px;\n  padding: 15px;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  min-height: 320px;\n  background: white 0% 0% no-repeat padding-box;\n  cursor: pointer;\n}\n\n.product[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.cusotmize-prod[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 22px #3740530F;\n  border-radius: 10px;\n  padding-top: 15px;\n  vertical-align: center;\n  min-height: 230px;\n}\n\n.product-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Poppins;\n  font-weight: bolder;\n  color: black;\n  font-size: large;\n  text-align: center;\n}\n\n.product-desc[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: center;\n  color: black;\n  font-size: small;\n}\n\n.last-desc[_ngcontent-%COMP%] {\n  width: 90%;\n  color: black;\n  font-size: small;\n}\n\n.reqBtn[_ngcontent-%COMP%] {\n  width: 164px;\n  height: 44px;\n  background: white;\n  font-family: poppins-bold;\n  margin: 10px 5px;\n  color: black 0% 0% no-repeat padding-box;\n  border: 2px solid #ffb000;\n  box-shadow: none;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZHVjdHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFERjs7QUFJQTtFQUVFLHlCQUFBO0FBRkY7O0FBS0E7RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUVBLFlBQUE7QUFKRjs7QUFPQTtFQUtFLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZUFBQTtBQVJGOztBQUpFO0VBQ0UsWUFBQTtBQU1KOztBQVVBO0VBQ0Usa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQVBGOztBQVVBO0VBQ0UsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUEYiLCJmaWxlIjoicHJvZHVjdHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaGVhZGVyLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnMtYm9sZDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcblxyXG59XHJcblxyXG4uc3ViLXRleHQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG59XHJcblxyXG4ucmVxQnRuOmhvdmVyIHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjAwMDtcclxufVxyXG5cclxuLnByb2R1Y3RcclxuLnByb2R1Y3QtaW1nIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICAvL21heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDQ1cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0IHtcclxuXHJcbiAgLnByb2R1Y3QtaW1nIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyMnB4ICMzNzQwNTMwRjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWluLWhlaWdodDogMzIwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcblxyXG59XHJcblxyXG4uY3Vzb3RtaXplLXByb2Qge1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMjJweCAjMzc0MDUzMEY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDIzMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC10aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZHVjdC1kZXNjIHtcclxuICB3aWR0aDogODAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLmxhc3QtZGVzYyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLnJlcUJ0biB7XHJcbiAgd2lkdGg6IDE2NHB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogcG9wcGlucy1ib2xkO1xyXG4gIG1hcmdpbjogMTBweCA1cHg7XHJcbiAgY29sb3I6IGJsYWNrIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZiMDAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "DCgG":
/*!****************************************************************************************!*\
  !*** ./src/app/main/products/add-paragraph/view-paragraph/view-paragraph.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ViewParagraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewParagraphComponent", function() { return ViewParagraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");










function ViewParagraphComponent_mat_checkbox_4_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const desc_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](desc_r3);
} }
function ViewParagraphComponent_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewParagraphComponent_mat_checkbox_4_Template_mat_checkbox_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const paragraph_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logo(paragraph_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewParagraphComponent_mat_checkbox_4_li_8_Template, 2, 1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const paragraph_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("id : ", paragraph_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paragraph_r1.headline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", paragraph_r1.fullDesc);
} }
class ViewParagraphComponent {
    constructor(fb, apollo) {
        this.fb = fb;
        this.apollo = apollo;
        this.ids = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reloaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedIds = [];
        this.prevSelectedIds = [];
    }
    logo(p) {
        this.selectedIds.push(p.id);
    }
    done() {
        this.ids.emit(this.selectedIds);
    }
    ngOnInit() {
    }
}
ViewParagraphComponent.ɵfac = function ViewParagraphComponent_Factory(t) { return new (t || ViewParagraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"])); };
ViewParagraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewParagraphComponent, selectors: [["app-view-paragraph"]], inputs: { reload: "reload", paragraphs: "paragraphs" }, outputs: { ids: "ids", reloaded: "reloaded" }, decls: 7, vars: 1, consts: [["fxLayout", "row wrap"], ["style", "margin: 5px", "class", "mat-elevation-z4 m-10", "fxLayout", "column", "fxFlex", "", "fxLayoutAlign", "center start", 3, "change", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fxLayout", "column", "fxFlex", "", "fxLayoutAlign", "center start", 1, "mat-elevation-z4", "m-10", 2, "margin", "5px", 3, "change"], ["fxLayout", "column", 1, "wrap", 2, "max-height", "300px", "padding", "10px"], ["class", "wrap", 4, "ngFor", "ngForOf"], [1, "wrap"]], template: function ViewParagraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "all Paragraphs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewParagraphComponent_mat_checkbox_4_Template, 9, 3, "mat-checkbox", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewParagraphComponent_Template_button_click_5_listener() { return ctx.done(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paragraphs);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXBhcmFncmFwaC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Hx44":
/*!**************************************************!*\
  !*** ./src/app/main/products/products.module.ts ***!
  \**************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.component */ "n3Xn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-list/products-list.component */ "7rWL");
/* harmony import */ var _add_paragraph_add_paragraph_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-paragraph/add-paragraph.component */ "5rxQ");
/* harmony import */ var _add_paragraph_view_paragraph_view_paragraph_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-paragraph/view-paragraph/view-paragraph.component */ "DCgG");
/* harmony import */ var _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-edit-product/add-edit-product.component */ "pYmy");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var _pricing_pricing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pricing/pricing.module */ "/6Yg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [{
        path: 'viewProduct/:id',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]
    }, {
        path: 'add-paragraph/:id',
        component: _add_paragraph_add_paragraph_component__WEBPACK_IMPORTED_MODULE_5__["AddParagraphComponent"]
    }, {
        path: 'add-paragraph',
        component: _add_paragraph_add_paragraph_component__WEBPACK_IMPORTED_MODULE_5__["AddParagraphComponent"]
    }, {
        path: 'add-edit-product/:id',
        component: _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["AddEditProductComponent"]
    }, {
        path: 'list',
        component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductsListComponent"]
    }, {
        path: '',
        redirectTo: 'list'
    }];
class ProductsModule {
}
ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function ProductsModule_Factory(t) { return new (t || ProductsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ngx_lottie__WEBPACK_IMPORTED_MODULE_8__["LottieModule"].forRoot({ player: _pricing_pricing_module__WEBPACK_IMPORTED_MODULE_9__["playerFactory"] }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"], _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductsListComponent"], _add_paragraph_add_paragraph_component__WEBPACK_IMPORTED_MODULE_5__["AddParagraphComponent"], _add_paragraph_view_paragraph_view_paragraph_component__WEBPACK_IMPORTED_MODULE_6__["ViewParagraphComponent"], _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["AddEditProductComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_8__["LottieModule"]] }); })();


/***/ }),

/***/ "n3Xn":
/*!************************************************************!*\
  !*** ./src/app/main/products/product/product.component.ts ***!
  \************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _home_home_homequeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home/home/homequeries */ "eXr/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_lets_talk_lets_talk_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/lets-talk/lets-talk.component */ "9Ii+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















function ProductComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng-lottie", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationCreated", function ProductComponent_div_0_div_1_Template_ng_lottie_animationCreated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.animationCreated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.options);
} }
function ProductComponent_div_0_div_2_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/products/add-edit-product/" + ctx_r5.product.id);
} }
function ProductComponent_div_0_div_2_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductComponent_div_0_div_2_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r9.deleteProduct(ctx_r9.product.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductComponent_div_0_div_2_div_12_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "album");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const desc_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", desc_r13, "");
} }
function ProductComponent_div_0_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProductComponent_div_0_div_2_div_12_mat_list_item_5_Template, 5, 1, "mat-list-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const paragraph_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](paragraph_r11.headline);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", paragraph_r11.fullDesc);
} }
const _c0 = function (a1) { return ["/pricing/request-offer/", a1]; };
function ProductComponent_div_0_div_2_owl_carousel_o_20_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/products/viewProduct/", slide_r15.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", slide_r15.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", "image")("title", slide_r15.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r15.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r15.shortDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, slide_r15.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, "REQUEST-OFFER"));
} }
function ProductComponent_div_0_div_2_owl_carousel_o_20_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductComponent_div_0_div_2_owl_carousel_o_20_ng_container_1_ng_template_1_Template, 13, 12, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function ProductComponent_div_0_div_2_owl_carousel_o_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductComponent_div_0_div_2_owl_carousel_o_20_ng_container_1_Template, 2, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r8.customOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.products);
} }
function ProductComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProductComponent_div_0_div_2_button_5_Template, 4, 1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProductComponent_div_0_div_2_button_6_Template, 4, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProductComponent_div_0_div_2_div_12_Template, 6, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProductComponent_div_0_div_2_owl_carousel_o_20_Template, 2, 2, "owl-carousel-o", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-lets-talk", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.admin && !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.admin && !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.product.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.product.shortDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.product.smallParagraphs);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/pricing/request-offer/", ctx_r2.product.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 10, "REQUEST-OFFER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 12, "MAY-LIKE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.products);
} }
function ProductComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductComponent_div_0_div_2_Template, 23, 14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
} }
class ProductComponent {
    constructor(route, router, apollo, auth) {
        this.route = route;
        this.router = router;
        this.apollo = apollo;
        this.auth = auth;
        this.admin = false;
        this.loading = true;
        this.products = [];
        this.customOptions = {
            center: false,
            autoWidth: false,
            loop: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            nav: true,
            navSpeed: 700,
            navText: ['<', '>'],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 3
                },
                740: {
                    items: 3
                },
                940: {
                    items: 3
                },
                1024: {
                    items: 3
                }
            },
        };
        this.options = {
            path: '/assets/lightbulb.json',
            loop: true,
        };
    }
    animationCreated(animationItem) {
        animationItem.playSpeed = 2;
    }
    deleteProduct(id) {
        this.loading = true;
        this.apollo.mutate({
            mutation: _home_home_homequeries__WEBPACK_IMPORTED_MODULE_0__["removeProduct"],
            variables: { id: Number(id) }
        }).subscribe((result) => {
            this.loading = false;
            this.router.navigateByUrl('/products/list');
        });
    }
    ngOnInit() {
        this.auth.checkAdmin().subscribe(x => this.admin = x);
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.loading = true;
            this.apollo.watchQuery({
                query: _home_home_homequeries__WEBPACK_IMPORTED_MODULE_0__["oneProdQuery"],
                fetchPolicy: 'network-only',
                variables: { id: Number(this.id) }
            }).valueChanges.subscribe((result) => {
                var _a, _b;
                this.loading = false;
                this.products = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.findManyProducts.entities;
                this.products = this.products.filter((item) => {
                    return (Number(item.id) !== Number(this.id));
                });
                this.product = (_b = result === null || result === void 0 ? void 0 : result.data) === null || _b === void 0 ? void 0 : _b.findOneProduct;
            });
        });
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 1, vars: 1, consts: [["style", "min-height:100%;max-width: 100%;margin-top: 75px;background-color: white", 4, "ngIf"], [2, "min-height", "100%", "max-width", "100%", "margin-top", "75px", "background-color", "white"], ["style", "margin-top: 450px", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "margin-top", "450px"], ["width", "100px", "height", "100px", 3, "options", "animationCreated"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [1, "header-text"], ["fxLayout", "row", "fxLayoutAlign", "center end"], ["mat-raised-button", "", "color", "primary", 3, "routerLink", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "product-img", 3, "src"], ["fxLayout", "row ", "fxLayoutAlign", "center center"], ["fxLayout", "column", "fxFlex", "60", "fxLayout.sm", "column", "fxLayoutAlign", "start start"], ["fxFlexAlign", "start center", 1, "wrap"], ["fxLayout", "column", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "curved-btn-primary", 3, "routerLink"], ["fxLayout", "column", "fxFlex", "100", "fxLayoutAlign", "center center", 2, "background-color", "#FBFBFB", "width", "80%", "padding", "20px", "border-radius", "10px"], ["class", "carousel3", 3, "options", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "bottom-section"], ["fxFlex", "100"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fxLayout", "column"], ["fxLayout", "column wrap", "fxFlex", "50", 2, "max-width", "50%", "padding", "5px"], [4, "ngFor", "ngForOf"], ["mat-line", ""], ["mat-list-icon", "", 2, "color", "#fbb000", "font-size", "12px"], [1, "carousel3", 3, "options"], ["carouselSlide", ""], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mat-elevation-z3", 2, "margin", "20px", "padding", "8px", "cursor", "pointer", "height", "328px", 3, "routerLink"], [1, "caro-img", 2, "width", "100px", "height", "100px", "padding", "5px", ";align-self", "center", "border-radius", "25%", 3, "src", "alt", "title"], [1, "prod-desc"], [2, "color", "#ff8700"], ["mat-raised-button", "", 1, "reqBtn", 3, "routerLink"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], ngx_lottie__WEBPACK_IMPORTED_MODULE_7__["LottieComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _shared_lets_talk_lets_talk_component__WEBPACK_IMPORTED_MODULE_9__["LetsTalkComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListIconCssMatStyler"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__["CarouselSlideDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]], styles: [".product-img[_ngcontent-%COMP%] {\n  max-height: 80%;\n  max-width: 450px;\n  margin: 45px;\n}\n\n.curved-btn-primary[_ngcontent-%COMP%] {\n  min-width: 70px;\n  border: none;\n  font-weight: normal;\n  border-radius: 1.5rem;\n  background-color: #ffb000;\n  color: black;\n  align-self: center;\n  min-height: 30px;\n  margin: 75px 0 75px;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  font-family: poppins-extra-bold;\n  font-size: 32px;\n  margin: 50px 10px 50px;\n  align-self: center;\n  font-weight: bolder;\n}\n\n.prod-card[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 0px 8px 22px #3740530F;\n  align-self: center;\n  padding: 20px;\n  border-radius: 10px;\n  width: 300px;\n  height: 260px;\n  background-color: white;\n}\n\n.prod-desc[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  \n  -webkit-box-orient: vertical;\n  font-size: 12px;\n  margin-top: auto;\n}\n\n.prod-name[_ngcontent-%COMP%] {\n  line-height: 24px;\n  text-align: center;\n  align-self: center;\n  font-size: 16px;\n  margin: 0px;\n  font-family: Poppins-bold;\n  font-weight: bolder;\n}\n\n.products-section[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n  margin-top: 50px;\n  width: 100%;\n  align-content: center;\n  justify-content: center;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  margin: 100px 0;\n  font-family: Poppins-bold;\n  font-size: 38px;\n  font-weight: bold;\n  align-content: center;\n  text-align: center;\n}\n\n.reqBtn[_ngcontent-%COMP%] {\n  align-self: center;\n  font-family: Poppins-medium;\n  background-color: white;\n  padding: 7px 24px;\n  margin-bottom: 13px;\n  border-radius: 25px;\n  border: 2px solid #ffb000;\n}\n\n.reqBtn[_ngcontent-%COMP%]:hover {\n  background-color: #ffb000;\n}\n\n.carousel2[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQXVCLDRCQUFBO0VBQ3ZCLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQU1GOztBQURBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUlGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFJRjs7QUFIRTtFQUNFLHlCQUFBO0FBS0o7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFLRiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtaW1ne1xyXG4gIG1heC1oZWlnaHQ6IDgwJTtcclxuICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gIG1hcmdpbjogNDVweDtcclxufVxyXG5cclxuLmN1cnZlZC1idG4tcHJpbWFyeSB7XHJcbiAgbWluLXdpZHRoOiA3MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMDAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMzBweDtcclxuICBtYXJnaW46IDc1cHggMCA3NXB4O1xyXG59XHJcbi5oZWFkZXItdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnMtZXh0cmEtYm9sZDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbWFyZ2luOiA1MHB4IDEwcHggNTBweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHJcbn1cclxuLnByb2QtY2FyZHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDIycHggIzM3NDA1MzBGO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6MzAwcHg7XHJcbiAgaGVpZ2h0OiAyNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucHJvZC1kZXNje1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyOyAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuLnByb2QtbmFtZXtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLWJvbGQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4ucHJvZHVjdHMtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLnNlY3Rpb24taGVhZGVyIHtcclxuICBtYXJnaW46MTAwcHggMDtcclxuICBmb250LWZhbWlseTogUG9wcGlucy1ib2xkO1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVxQnRuIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtbWVkaXVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDdweCAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206MTNweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmIwMDA7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMDAwO1xyXG4gIH1cclxufVxyXG4uY2Fyb3VzZWwyIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "pYmy":
/*!******************************************************************************!*\
  !*** ./src/app/main/products/add-edit-product/add-edit-product.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddEditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditProductComponent", function() { return AddEditProductComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_home_homequeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home/home/homequeries */ "eXr/");
/* harmony import */ var _home_home_homemutation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/home/homemutation */ "c/1x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");














function AddEditProductComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddEditProductComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddEditProductComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " icon to upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r2.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function AddEditProductComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddEditProductComponent_div_29_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.handleFileInput("logo", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddEditProductComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " logo to upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r4.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function AddEditProductComponent_input_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 27);
} }
function AddEditProductComponent_input_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 28);
} }
function AddEditProductComponent_input_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 29);
} }
function AddEditProductComponent_input_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 30);
} }
function AddEditProductComponent_textarea_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "textarea", 31);
} }
function AddEditProductComponent_textarea_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "textarea", 32);
} }
function AddEditProductComponent_mat_card_57_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const desc_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](desc_r16);
} }
function AddEditProductComponent_mat_card_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddEditProductComponent_mat_card_57_li_3_Template, 2, 1, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const paragraph_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", paragraph_r14 == null ? null : paragraph_r14.headline, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", paragraph_r14 == null ? null : paragraph_r14.fullDesc);
} }
class AddEditProductComponent {
    constructor(fb, apollo, route, router) {
        this.fb = fb;
        this.apollo = apollo;
        this.route = route;
        this.router = router;
        this.loading = true;
        this.lang = 'en';
        this.changeIcon = false;
        this.changeLogo = false;
        this.lang = localStorage.getItem('lang') || 'en';
    }
    isEditing() {
        return (this.id && (this.id !== null) && (this.id !== 'null') && (this.id !== undefined));
    }
    send() {
        this.apollo.mutate({
            mutation: _home_home_homemutation__WEBPACK_IMPORTED_MODULE_2__["createProduct"],
            variables: this.toSend,
            context: {
                useMultipart: true
            }
        }).subscribe(response => {
            if (response.data) {
                alert('product created successfully');
                this.router.navigateByUrl('/products/list');
            }
        }, error => alert(error));
    }
    updateIcon() {
        this.apollo.mutate({
            mutation: _home_home_homemutation__WEBPACK_IMPORTED_MODULE_2__["updateProductIcon"],
            variables: { id: this.toUpdate.id, icon: this.icon },
            context: { useMultipart: true }
        }).subscribe(response => {
        }, error => alert('Icon Not Updated'));
    }
    updateLogo() {
        this.apollo.mutate({
            mutation: _home_home_homemutation__WEBPACK_IMPORTED_MODULE_2__["updateProductLogo"],
            variables: { id: this.toUpdate.id, logo: this.logo },
            context: { useMultipart: true }
        }).subscribe(response => {
        }, error => alert('logo not updated'));
    }
    update() {
    }
    submit() {
        this.toSend = this.productForm.value;
        this.toSend.icon = this.icon;
        this.toSend.logo = this.logo;
        this.isEditing() ? this.update() : this.send();
    }
    readURL(event, localVar) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e => this[localVar] = reader.result;
        }
    }
    handleFileInput(type, e) {
        if (type === 'icon') {
            if (e.target.files[0]) {
                this.icon = e.target.files[0];
                this.readURL(e, 'iconUrl');
            }
            else {
                this.icon = null;
                this.iconUrl = null;
            }
        }
        else if (type === 'logo') {
            if (e.target.files[0]) {
                this.logo = e.target.files[0];
                this.readURL(e, 'logoUrl');
                this.logoUrl = URL.createObjectURL(this.logo);
            }
            else {
                this.logo = null;
                this.logoUrl = null;
            }
        }
    }
    ngOnInit() {
        this.createNullForm();
        this.route.params.subscribe(params => {
            this.id = params.id;
            if (this.id && (this.id !== null) && (this.id !== 'null') && (this.id !== undefined)) {
                this.get();
            }
            else {
                this.createNullForm();
            }
        });
    }
    get() {
        this.apollo.watchQuery({
            query: _home_home_homequeries__WEBPACK_IMPORTED_MODULE_1__["oneProdQuery"],
            fetchPolicy: 'network-only',
            variables: { id: Number(this.id) }
        }).valueChanges.subscribe((result) => {
            var _a;
            this.loading = false;
            this.product = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.findOneProduct;
            this.createExistingForm();
        });
    }
    createExistingForm() {
        this.productForm = this.fb.group({
            id: Number(this.id),
            onHome: [this.product.onHome],
            isActive: [this.product.isActive],
            title: this.fb.group({
                [this.lang]: [this.product.title, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            }),
            subTitle: this.fb.group({
                [this.lang]: [this.product.subTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            }),
            shortDesc: this.fb.group({
                [this.lang]: [this.product.shortDesc, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            }),
        });
    }
    createNullForm() {
        this.productForm = this.fb.group({
            onHome: [''],
            isActive: [''],
            smallParagraphs: [[1]],
            title: this.fb.group({
                ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            }),
            subTitle: this.fb.group({
                ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            }),
            shortDesc: this.fb.group({
                ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            })
        });
    }
    localizedObj(en, ar) {
        return this.fb.group({
            ar: [ar, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            en: [en, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
}
AddEditProductComponent.ɵfac = function AddEditProductComponent_Factory(t) { return new (t || AddEditProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AddEditProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddEditProductComponent, selectors: [["app-add-edit-product"]], decls: 60, vars: 17, consts: [["fxLayout", "column", 2, "min-height", "100%"], [2, "margin-top", "150px"], [4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center start", 2, "margin", "100px", 3, "formGroup"], ["fxLayout", "column"], ["fxFlex", "row", "fxLayoutAlign", "center centre"], [1, "icon", 2, "max-width", "100%", "max-height", "350px", 3, "src"], ["type", "file", 1, "input", 3, "change"], ["fxFlex", "row", "fxLayoutAlign", "center centre", 4, "ngIf"], ["fxFlex", "row", "fxLayoutAlign", "center center"], [2, "max-width", "100%", "max-height", "350px", 3, "src"], ["mat-raised-button", "", "color", "primary", 2, "width", "75px", 3, "click"], ["fxLayout", "column", 4, "ngIf"], ["fxLayout", "row", "formGroupName", "title"], ["placeholder", "Enlglish title", "formControlName", "en", 4, "ngIf"], ["placeholder", "arabic title", "formControlName", "ar", 4, "ngIf"], ["fxLayout", "row", "formGroupName", "subTitle"], ["placeholder", "Enlglish subtitle", "formControlName", "en", 4, "ngIf"], ["placeholder", "arabic subtitle", "formControlName", "ar", 4, "ngIf"], ["fxLayout", "row", "formGroupName", "shortDesc"], ["placeholder", "Enlglish short description", "formControlName", "en", 4, "ngIf"], ["placeholder", "arabic short desc", "formControlName", "ar", 4, "ngIf"], ["formControlName", "onHome"], ["formControlName", "isActive"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px", 3, "click"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], ["placeholder", "Enlglish title", "formControlName", "en"], ["placeholder", "arabic title", "formControlName", "ar"], ["placeholder", "Enlglish subtitle", "formControlName", "en"], ["placeholder", "arabic subtitle", "formControlName", "ar"], ["placeholder", "Enlglish short description", "formControlName", "en"], ["placeholder", "arabic short desc", "formControlName", "ar"]], template: function AddEditProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddEditProductComponent_span_2_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddEditProductComponent_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "images");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "change");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddEditProductComponent_Template_input_change_16_listener($event) { return ctx.handleFileInput("icon", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AddEditProductComponent_div_18_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " logo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddEditProductComponent_Template_button_click_26_listener() { return ctx.changeLogo = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AddEditProductComponent_div_29_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddEditProductComponent_div_30_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AddEditProductComponent_input_34_Template, 1, 0, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, AddEditProductComponent_input_35_Template, 1, 0, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "subTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, AddEditProductComponent_input_39_Template, 1, 0, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, AddEditProductComponent_input_40_Template, 1, 0, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "shortDesc");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, AddEditProductComponent_textarea_44_Template, 1, 0, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, AddEditProductComponent_textarea_45_Template, 1, 0, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-checkbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "on home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-checkbox", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddEditProductComponent_Template_button_click_52_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "full desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, AddEditProductComponent_mat_card_57_Template, 4, 2, "mat-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isEditing());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isEditing());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" product : ", ctx.product == null ? null : ctx.product.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.product == null ? null : ctx.product.icon, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.iconUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.product == null ? null : ctx.product.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.changeLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.logoUrl != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.isEditing() && ctx.lang == "ar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.isEditing() && ctx.lang == "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.isEditing() && ctx.lang == "ar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.isEditing() && ctx.lang == "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.isEditing() && ctx.lang == "ar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.isEditing() && ctx.lang == "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.product == null ? null : ctx.product.smallParagraphs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/products/add-paragraph/", ctx.product == null ? null : ctx.product.id, "");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"]], styles: [".icon[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLWVkaXQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoiYWRkLWVkaXQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29ue1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=main-products-products-module.js.map