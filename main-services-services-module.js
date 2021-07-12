(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-services-services-module"],{

/***/ "4X9i":
/*!******************************************************************************************!*\
  !*** ./src/app/main/services/add-edit-child-service/add-edit-child-service.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddEditChildServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditChildServiceComponent", function() { return AddEditChildServiceComponent; });
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














function AddEditChildServiceComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddEditChildServiceComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddEditChildServiceComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " icon to upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r2.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function AddEditChildServiceComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddEditChildServiceComponent_div_30_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.handleFileInput("logo", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddEditChildServiceComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " logo to upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r4.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function AddEditChildServiceComponent_input_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 20);
} }
function AddEditChildServiceComponent_input_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 21);
} }
function AddEditChildServiceComponent_div_37_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "en:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "textarea", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "ar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddEditChildServiceComponent_div_37_div_6_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const i_r14 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r15.removeDesc(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r14);
} }
function AddEditChildServiceComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddEditChildServiceComponent_div_37_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.addDesc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddEditChildServiceComponent_div_37_div_6_Template, 11, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.desc.controls);
} }
function AddEditChildServiceComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddEditChildServiceComponent_div_44_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.handleFileInput("icon", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddEditChildServiceComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddEditChildServiceComponent_div_45_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.handleFileInput("logo", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AddEditChildServiceComponent {
    constructor(fb, apollo, route, router) {
        this.fb = fb;
        this.apollo = apollo;
        this.route = route;
        this.router = router;
        this.lang = 'en';
        this.changeLogo = false;
        this.lang = localStorage.getItem('lang') || 'en';
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
    isEditing() {
        return (this.id && (this.id !== null) && (this.id !== 'null') && (this.id !== undefined));
    }
    ngOnInit() {
        this.createNullForm();
        this.route.params.subscribe(params => {
            this.parentId = params.parentId;
        });
        this.route.queryParams.subscribe(params => {
            this.id = params.childId;
            if (this.isEditing()) {
                this.get();
            }
            else {
                this.createNullForm();
            }
        });
    }
    get() {
        this.apollo.query({
            query: _home_home_homequeries__WEBPACK_IMPORTED_MODULE_1__["findOneChildServiceQuery"],
            fetchPolicy: 'network-only',
            variables: { id: Number(this.id) }
        }).subscribe((result) => {
            var _a;
            this.service = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.findOneChildService;
            this.createExistingForm();
        });
    }
    createExistingForm() {
        this.serviceForm = this.fb.group({
            parentService: this.parentId,
            id: Number(this.service.id),
            onHome: [this.service.onHome],
            isActive: [this.service.isActive],
            title: this.fb.group({
                [this.lang]: [this.service.title, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            }),
            fullDesc: this.fb.array(this.service.fullDesc)
        });
    }
    createNullForm() {
        this.serviceForm = this.fb.group({
            parentService: [Number(this.parentId)],
            onHome: [''],
            isActive: [''],
            title: this.fb.group({
                ar: [''],
                en: ['']
            }),
            fullDesc: this.fb.array([])
        });
    }
    send() {
        this.apollo.mutate({
            mutation: _home_home_homemutation__WEBPACK_IMPORTED_MODULE_2__["createChildService"],
            variables: this.toSend,
            context: {
                useMultipart: true
            }
        }).subscribe(response => {
            if (response.data) {
                // alert('Child Service created successfully');
                this.router.navigateByUrl('/services/list');
            }
        }, error => alert(error));
    }
    update() {
    }
    submit() {
        this.toSend = this.serviceForm.value;
        this.toUpdate = this.serviceForm.value;
        this.toSend.icon = this.icon;
        this.toSend.logo = this.logo;
        this.isEditing() ? this.update() : this.send();
    }
    localizedObj() {
        return this.fb.group({
            ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    get desc() {
        return this.serviceForm.get('fullDesc');
    }
    addDesc() {
        this.desc.push(this.localizedObj());
    }
    removeDesc(i) {
        this.desc.removeAt(i);
    }
}
AddEditChildServiceComponent.ɵfac = function AddEditChildServiceComponent_Factory(t) { return new (t || AddEditChildServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AddEditChildServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddEditChildServiceComponent, selectors: [["app-add-edit-child-service"]], decls: 48, vars: 14, consts: [[2, "margin-top", "150px"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start center", 3, "formGroup"], ["fxLayout", "column"], ["fxFlex", "row", "fxLayoutAlign", "center centre"], [1, "icon", 2, "max-width", "100%", "max-height", "350px", 3, "src"], ["type", "file", 1, "input", 3, "change"], ["fxFlex", "row", "fxLayoutAlign", "center centre", 4, "ngIf"], ["fxFlex", "row", "fxLayoutAlign", "center center"], [2, "max-width", "100%", "max-height", "350px", 3, "src"], ["mat-raised-button", "", "color", "primary", 2, "width", "75px", 3, "click"], ["fxLayout", "column", 4, "ngIf"], ["fxLayout", "row", "formGroupName", "title"], ["placeholder", "Enlglish title", "formControlName", "en", 4, "ngIf"], ["placeholder", "arabic title", "formControlName", "ar", 4, "ngIf"], ["formControlName", "onHome", "fxFlexAlign", "start"], ["formControlName", "isActive", "fxFlexAlign", "start"], ["fxFlex", "row", "fxLayoutAlign", "start center", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "type", "submit", 2, "margin", "10px", 3, "disabled", "click"], ["placeholder", "Enlglish title", "formControlName", "en"], ["placeholder", "arabic title", "formControlName", "ar"], ["formArrayName", "fullDesc"], ["mat-raised-button", "", "color", "accent", 2, "margin", "10px", 3, "click"], [4, "ngFor", "ngForOf"], [3, "formGroupName"], ["fxLayout", "row", 2, "padding", "7px"], ["formControlName", "en"], ["formControlName", "ar"], [2, "margin", "10px", 3, "click"], ["fxFlex", "row", "fxLayoutAlign", "start center"]], template: function AddEditChildServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddEditChildServiceComponent_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddEditChildServiceComponent_span_4_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " service");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "images");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "change");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddEditChildServiceComponent_Template_input_change_17_listener($event) { return ctx.handleFileInput("icon", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AddEditChildServiceComponent_div_19_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " logo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddEditChildServiceComponent_Template_button_click_27_listener() { return ctx.changeLogo = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddEditChildServiceComponent_div_30_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddEditChildServiceComponent_div_31_Template, 3, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, AddEditChildServiceComponent_input_35_Template, 1, 0, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, AddEditChildServiceComponent_input_36_Template, 1, 0, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, AddEditChildServiceComponent_div_37_Template, 7, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-checkbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "on home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-checkbox", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, AddEditChildServiceComponent_div_44_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, AddEditChildServiceComponent_div_45_Template, 4, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddEditChildServiceComponent_Template_button_click_46_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isEditing());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isEditing());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.serviceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.service == null ? null : ctx.service.icon, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.iconUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.service == null ? null : ctx.service.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.changeLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.logoUrl != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.isEditing() && ctx.lang == "ar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.isEditing() && ctx.lang == "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isEditing());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isEditing());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isEditing());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.serviceForm.invalid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZWRpdC1jaGlsZC1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "5FBo":
/*!*********************************************************************************!*\
  !*** ./src/app/main/services/view-service/add-feature/add-feature.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddFeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFeatureComponent", function() { return AddFeatureComponent; });
/* harmony import */ var _home_home_homequeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../home/home/homequeries */ "eXr/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_home_homemutation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../home/home/homemutation */ "c/1x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function AddFeatureComponent_input_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 9);
} }
function AddFeatureComponent_input_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 10);
} }
function AddFeatureComponent_textarea_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "textarea", 11);
} }
function AddFeatureComponent_textarea_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "textarea", 12);
} }
function AddFeatureComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddFeatureComponent_div_12_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.handleFileInput("image", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AddFeatureComponent {
    constructor(dialogRef, apollo, fb, router) {
        this.dialogRef = dialogRef;
        this.apollo = apollo;
        this.fb = fb;
        this.router = router;
        this.loading = true;
        this.lang = 'en';
        this.lang = localStorage.getItem('lang') || 'en';
    }
    ngOnInit() {
        this.createNullForm();
        if ((this.id != null) && (this.id !== undefined)) {
            this.get();
        }
        else {
            this.createNullForm();
        }
    }
    get() {
        this.apollo.watchQuery({
            query: _home_home_homequeries__WEBPACK_IMPORTED_MODULE_0__["oneFeature"],
            fetchPolicy: 'network-only',
            variables: { id: Number(this.id) }
        }).valueChanges.subscribe((result) => {
            var _a;
            this.loading = false;
            this.feature = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.findOneServiceFeature;
            this.createExistingForm();
        });
    }
    createExistingForm() {
        this.featuresForm = this.fb.group({
            id: Number(this.id),
            title: this.fb.group({
                [this.lang]: [this.feature.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            }),
            desc: this.fb.group({
                [this.lang]: [this.feature.desc, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            }),
        });
    }
    createNullForm() {
        this.featuresForm = this.fb.group({
            title: this.fb.group({
                ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            desc: this.fb.group({
                ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            service: [this.serviceId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    send() {
        this.apollo.mutate({
            mutation: _home_home_homemutation__WEBPACK_IMPORTED_MODULE_2__["createServiceFeature"],
            variables: this.toSend,
            context: {
                useMultipart: true
            }
        }).subscribe(response => {
            if (response.data) {
                alert('Feature created successfully');
                this.close();
            }
        }, error => alert(error));
    }
    close() {
        this.dialogRef.close();
    }
    update() {
    }
    submit() {
        this.toSend = this.featuresForm.value;
        this.toUpdate = this.featuresForm.value;
        this.toSend.image = this.image;
        this.id ? this.update() : this.send();
    }
    handleFileInput(type, e) {
        this.image = e.target.files[0];
    }
}
AddFeatureComponent.ɵfac = function AddFeatureComponent_Factory(t) { return new (t || AddFeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AddFeatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddFeatureComponent, selectors: [["app-add-feature"]], decls: 15, vars: 6, consts: [["fxLayout", "column", "fxLayoutAlign", "center start", 2, "margin", "100px", 3, "formGroup"], ["fxLayout", "row", "formGroupName", "title"], ["placeholder", "Enlglish title", "formControlName", "en", 4, "ngIf"], ["placeholder", "arabic title", "formControlName", "ar", 4, "ngIf"], ["fxLayout", "row", "formGroupName", "desc"], ["placeholder", "Enlglish short description", "formControlName", "en", 4, "ngIf"], ["placeholder", "arabic short desc", "formControlName", "ar", 4, "ngIf"], ["fxFlex", "row", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 2, "margin", "10px", 3, "click"], ["placeholder", "Enlglish title", "formControlName", "en"], ["placeholder", "arabic title", "formControlName", "ar"], ["placeholder", "Enlglish short description", "formControlName", "en"], ["placeholder", "arabic short desc", "formControlName", "ar"], ["fxFlex", "row"], ["type", "file", 1, "input", 3, "change"]], template: function AddFeatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddFeatureComponent_input_4_Template, 1, 0, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AddFeatureComponent_input_5_Template, 1, 0, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AddFeatureComponent_textarea_9_Template, 1, 0, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddFeatureComponent_textarea_10_Template, 1, 0, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AddFeatureComponent_div_12_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddFeatureComponent_Template_button_click_13_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.featuresForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.id && ctx.lang == "ar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.id && ctx.lang == "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.id && ctx.lang == "ar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.id && ctx.lang == "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.id);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZmVhdHVyZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "GE5N":
/*!**********************************************************************************!*\
  !*** ./src/app/main/services/add-parent-service/add-parent-service.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddParentServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddParentServiceComponent", function() { return AddParentServiceComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_home_homemutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home/home/homemutation */ "c/1x");
/* harmony import */ var _home_home_homequeries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/home/homequeries */ "eXr/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function AddParentServiceComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " icon to upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function AddParentServiceComponent_input_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 12);
} }
function AddParentServiceComponent_input_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 13);
} }
function AddParentServiceComponent_textarea_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "textarea", 14);
} }
function AddParentServiceComponent_textarea_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "textarea", 15);
} }
class AddParentServiceComponent {
    constructor(fb, apollo, route, router) {
        this.fb = fb;
        this.apollo = apollo;
        this.route = route;
        this.router = router;
        this.lang = 'en';
        this.lang = localStorage.getItem('lang') || 'en';
    }
    updateIcon() {
        this.apollo.mutate({
            mutation: _home_home_homemutation__WEBPACK_IMPORTED_MODULE_1__["updateParentIcon"],
            variables: { id: this.toUpdate.id, icon: this.fileToUpload },
            context: { useMultipart: true }
        }).subscribe(response => {
        }, error => alert('Icon Not Updated'));
    }
    ngOnInit() {
        this.createNullForm();
        this.route.params.subscribe(params => {
            this.id = params.parentId;
            if (this.isEditing()) {
                this.get();
            }
            else {
                this.createNullForm();
            }
        });
    }
    get() {
        this.apollo.query({
            query: _home_home_homequeries__WEBPACK_IMPORTED_MODULE_2__["findOneParentServiceQuery"],
            fetchPolicy: 'network-only',
            variables: { id: Number(this.id) }
        }).subscribe((result) => {
            var _a;
            this.service = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.findOneParentService;
            this.createExistingForm();
        });
    }
    createExistingForm() {
        this.serviceForm = this.fb.group({
            id: Number(this.id),
            title: this.fb.group({
                [this.lang]: [this.service.title, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            }),
            desc: this.fb.group({
                [this.lang]: [this.service.desc, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            }),
        });
    }
    isEditing() {
        return (this.id && (this.id !== null) && (this.id !== 'null') && (this.id !== undefined));
    }
    updateNoImage() {
        this.apollo.mutate({
            mutation: _home_home_homemutation__WEBPACK_IMPORTED_MODULE_1__["createParentService"],
            variables: this.toSend,
            context: {
                useMultipart: true
            }
        }).subscribe((response) => {
            alert('service created');
        }, error => alert(error));
    }
    updateWithImage() {
    }
    send() {
        this.apollo.mutate({
            mutation: _home_home_homemutation__WEBPACK_IMPORTED_MODULE_1__["createParentService"],
            variables: this.toSend,
            context: {
                useMultipart: true
            }
        }).subscribe((response) => {
            alert('service created');
        }, error => alert(error));
    }
    submit() {
        this.toSend = this.serviceForm.value;
        this.toUpdate = this.serviceForm.value;
        this.toSend.icon = this.fileToUpload;
        this.isEditing() ? this.update() : this.send();
    }
    update() {
    }
    handleFileInput(e) {
        if (e.target.files[0]) {
            this.fileToUpload = e.target.files[0];
            this.readURL(e, 'imageUrl');
        }
        else {
            this.fileToUpload = null;
            this.imageUrl = null;
        }
    }
    readURL(event, localVar) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e => this[localVar] = reader.result;
        }
    }
    createNullForm() {
        this.serviceForm = this.fb.group({
            title: this.fb.group({
                ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            }),
            desc: this.fb.group({
                ar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                en: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            }),
        });
    }
}
AddParentServiceComponent.ɵfac = function AddParentServiceComponent_Factory(t) { return new (t || AddParentServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AddParentServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddParentServiceComponent, selectors: [["app-add-parent-service"]], decls: 25, vars: 7, consts: [[2, "margin", "100px", 3, "formGroup"], ["fxFlex", "row", "fxLayoutAlign", "center centre"], [1, "icon", 2, "max-width", "100%", "max-height", "350px", 3, "src"], ["type", "file", 1, "input", 3, "change"], ["fxFlex", "row", "fxLayoutAlign", "center centre", 4, "ngIf"], ["fxLayout", "row", "formGroupName", "title"], ["placeholder", "Enlglish title", "formControlName", "en", 4, "ngIf"], ["placeholder", "arabic title", "formControlName", "ar", 4, "ngIf"], ["fxLayout", "row", "formGroupName", "desc"], ["placeholder", "Enlglish short description", "formControlName", "en", 4, "ngIf"], ["placeholder", "arabic short desc", "formControlName", "ar", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["placeholder", "Enlglish title", "formControlName", "en"], ["placeholder", "arabic title", "formControlName", "ar"], ["placeholder", "Enlglish short description", "formControlName", "en"], ["placeholder", "arabic short desc", "formControlName", "ar"]], template: function AddParentServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "change");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddParentServiceComponent_Template_input_change_7_listener($event) { return ctx.handleFileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AddParentServiceComponent_div_9_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AddParentServiceComponent_input_13_Template, 1, 0, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AddParentServiceComponent_input_14_Template, 1, 0, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AddParentServiceComponent_textarea_18_Template, 1, 0, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AddParentServiceComponent_textarea_19_Template, 1, 0, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddParentServiceComponent_Template_input_change_22_listener($event) { return ctx.handleFileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddParentServiceComponent_Template_button_click_23_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.serviceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.service == null ? null : ctx.service.icon, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.isEditing() && ctx.lang == "ar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.isEditing() && ctx.lang == "en"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.isEditing() && ctx.lang == "ar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.isEditing() && ctx.lang == "en"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcGFyZW50LXNlcnZpY2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "IZ+y":
/*!**************************************************************!*\
  !*** ./src/app/main/services/services/services.component.ts ***!
  \**************************************************************/
/*! exports provided: ServicesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesListComponent", function() { return ServicesListComponent; });
/* harmony import */ var _home_home_homequeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home/home/homequeries */ "eXr/");
/* harmony import */ var _add_parent_service_add_parent_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-parent-service/add-parent-service.component */ "GE5N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_lets_talk_lets_talk_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/lets-talk/lets-talk.component */ "9Ii+");
/* harmony import */ var _shared_loading_animation_loading_animation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/loading-animation/loading-animation.component */ "XF20");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");














function ServicesListComponent_app_loading_animation_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loading-animation", 7);
} }
function ServicesListComponent_div_6_div_1_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const serv_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/services/add-parent/" + serv_r4.id);
} }
function ServicesListComponent_div_6_div_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ServicesListComponent_div_6_div_1_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const serv_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.deleteService(serv_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ServicesListComponent_div_6_div_1_div_13_h5_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", feature_r15.title, "");
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0) { return { parent: a0 }; };
function ServicesListComponent_div_6_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ServicesListComponent_div_6_div_1_div_13_h5_9_Template, 2, 1, "h5", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r13 = ctx.$implicit;
    const serv_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, "/services/viewService/" + child_r13.id))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c1, serv_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", child_r13.icon, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", child_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", child_r13.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", child_r13.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 7, "DISCOVER-SERVICE"));
} }
const _c2 = function (a1) { return ["/services/add-child/", a1]; };
const _c3 = function () { return { childId: null }; };
function ServicesListComponent_div_6_div_1_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const serv_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c2, serv_r4.id))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c3));
} }
function ServicesListComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ServicesListComponent_div_6_div_1_button_8_Template, 4, 1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ServicesListComponent_div_6_div_1_button_9_Template, 4, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ServicesListComponent_div_6_div_1_div_13_Template, 14, 13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ServicesListComponent_div_6_div_1_button_15_Template, 3, 5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const serv_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", serv_r4.icon, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](serv_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.admin && !ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.admin && !ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](serv_r4.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", serv_r4.childServices);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.admin);
} }
function ServicesListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ServicesListComponent_div_6_div_1_Template, 16, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.services);
} }
function ServicesListComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ServicesListComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.openDialogService(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ServicesListComponent {
    constructor(apollo, auth, dialog, router) {
        this.apollo = apollo;
        this.auth = auth;
        this.dialog = dialog;
        this.router = router;
        this.services = [];
        this.admin = false;
        this.loading = true;
    }
    ngOnInit() {
        this.auth.checkAdmin().subscribe(x => this.admin = x);
        this.loading = true;
        this.getParentServices();
    }
    getParentServices() {
        this.apollo
            .watchQuery({
            query: _home_home_homequeries__WEBPACK_IMPORTED_MODULE_0__["parentServiceQuery"], fetchPolicy: 'network-only'
        })
            .valueChanges.subscribe((result) => {
            var _a;
            this.services = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.findManyParentServices.entities;
            this.loading = false;
        });
    }
    openDialogService() {
        const dialogRef1 = this.dialog.open(_add_parent_service_add_parent_service_component__WEBPACK_IMPORTED_MODULE_1__["AddParentServiceComponent"]);
        // dialogRef1.componentInstance.id = id;
        dialogRef1.afterClosed().subscribe(result => {
            this.getParentServices();
        });
    }
    deleteService(serv) {
        if (serv.childServices.length) {
            alert('please delete all children first');
        }
        else {
            const conf = confirm('are you sure you want to delete this service');
            if (conf) {
                alert('deleting');
                this.loading = true;
                this.apollo.mutate({
                    mutation: _home_home_homequeries__WEBPACK_IMPORTED_MODULE_0__["removeParentService"],
                    variables: { id: Number(serv.id) }
                }).subscribe((result) => {
                    this.loading = false;
                    alert('deleted successfully');
                    this.router.navigateByUrl('/services/list');
                });
            }
        }
    }
}
ServicesListComponent.ɵfac = function ServicesListComponent_Factory(t) { return new (t || ServicesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ServicesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ServicesListComponent, selectors: [["app-services"]], decls: 10, vars: 6, consts: [["fxLayoutAlign", "center center", "fxLayout", "column", 1, "center", "topmargin", 2, "background-color", "white"], ["style", "margin-top: 350px", 4, "ngIf"], [2, "text-align", "center", "font-size", "xx-large", "margin-top", "100px"], ["fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["style", "margin: 50px;width: 100px;border-radius: 25%; height: 100px; float: right", "color", "accent", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "bottom-section"], ["fxFlex", "100"], [2, "margin-top", "350px"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["class", "parent-card", 4, "ngFor", "ngForOf"], [1, "parent-card"], ["fxLayoutAlign", "center center", 1, "row", "wrap", "center", 2, "width", "100%"], ["fxLayout", "row", "fxFlex", "100", "fxFlex.gt-lg", "55", "fxFlex.lg", "80", "fxFlex.md", "90", "fxFlex.sm", "90", "fxLayoutAlign", "start center"], ["fxLayout", "column", "fxFlex", "70", "fxFlex.gt-lg", "90", "fxFlex.md", "90", "fxFlex.lg", "90", "fxFlex.sm", "90", "fxLayoutAlign", "start start", "fxFlexAlign", "start start"], [1, "service-img", 2, "margin", "0", 3, "src"], [1, "card-header"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["mat-raised-button", "", "color", "primary", 3, "routerLink", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], [2, "margin", "5px"], ["fxLayout", "row wrap", "fxFlex", "100", "fxFlex.gt-lg", "80", "fxFlex.lg", "85", "fxFlex.md", "100", "fxFlex.sm", "100", "fxLayoutAlign", "center center"], ["class", "service row", "fxFlex.gt-lg", "35", "fxFlex.md", "40", "fxFlex.lg", "45", "fxFlex.sm", "100", "fxLayoutAlign", "center start", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], ["style", "margin: 50px;width: 100px;border-radius: 25%; height: 100px; float: right", "color", "accent", "mat-raised-button", "", 3, "routerLink", "queryParams", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fxFlex.gt-lg", "35", "fxFlex.md", "40", "fxFlex.lg", "45", "fxFlex.sm", "100", "fxLayoutAlign", "center start", 1, "service", "row", 3, "routerLink", "queryParams"], ["fxLayout", "column", 2, "min-height", "200px"], ["fxLayoutAlign", "space-between start", 1, "row", 2, "min-height", "100px", "max-height", "200px"], [2, "max-width", "100%", "max-height", "100px", "margin-right", "1rem", 3, "src", "alt"], ["fxLayout", "column", 1, "p-3"], [2, "margin-bottom", "10px"], ["style", "margin: 0", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxFlexAlign", "end", "fxLayoutAlign", "start", 2, "width", "100%"], ["mat-raised-button", "", 1, "curved-btn-primary"], [2, "margin", "0"], ["color", "accent", "mat-raised-button", "", 2, "margin", "50px", "width", "100px", "border-radius", "25%", "height", "100px", "float", "right", 3, "routerLink", "queryParams"], ["color", "accent", "mat-raised-button", "", 2, "margin", "50px", "width", "100px", "border-radius", "25%", "height", "100px", "float", "right", 3, "click"]], template: function ServicesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ServicesListComponent_app_loading_animation_1_Template, 1, 0, "app-loading-animation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ServicesListComponent_div_6_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ServicesListComponent_button_7_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-lets-talk", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 4, "SERVICES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.admin);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_lets_talk_lets_talk_component__WEBPACK_IMPORTED_MODULE_9__["LetsTalkComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _shared_loading_animation_loading_animation_component__WEBPACK_IMPORTED_MODULE_10__["LoadingAnimationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".parent-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 20px;\n  width: 57%;\n  max-width: 90%;\n  margin: 30px;\n  background-color: #fafafa;\n}\n\n.service[_ngcontent-%COMP%] {\n  padding: 15px;\n  min-width: 240px;\n  max-width: 480px;\n  min-height: 140px;\n  max-height: 230px;\n  background-color: white;\n  margin: 5px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.letsTalk-row[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.service-img[_ngcontent-%COMP%] {\n  margin: 0;\n  max-height: 100px;\n  max-width: 100px;\n}\n\n.curved-btn-primary[_ngcontent-%COMP%] {\n  border-radius: 1.5rem;\n  background-color: white;\n  color: black;\n  border: 1px solid #FFB000;\n  font-weight: bold;\n  align-self: flex-end;\n  padding: 0px 20px;\n  margin-top: 1rem;\n}\n\n.curved-btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #ffb000;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  max-width: 100%;\n  font-weight: bold;\n  margin: 5px;\n  color: #fbb000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VydmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDRTtFQUNJLHlCQUFBO0FBQ047O0FBSUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQURGIiwiZmlsZSI6InNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmVudC1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDU3JTtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG5cclxuLnNlcnZpY2Uge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWluLXdpZHRoOiAyNDBweDtcclxuICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDIzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sZXRzVGFsay1yb3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlcnZpY2UtaW1nIHtcclxuICBtYXJnaW46IDA7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmN1cnZlZC1idG4tcHJpbWFyeSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRkZCMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMDAwO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGNvbG9yOiAjZmJiMDAwO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "X0UH":
/*!**********************************************************************!*\
  !*** ./src/app/main/services/view-service/view-service.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewServiceComponent", function() { return ViewServiceComponent; });
/* harmony import */ var _home_home_homequeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home/home/homequeries */ "eXr/");
/* harmony import */ var _add_feature_add_feature_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-feature/add-feature.component */ "5FBo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_lets_talk_lets_talk_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/lets-talk/lets-talk.component */ "9Ii+");
/* harmony import */ var _shared_loading_animation_loading_animation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/loading-animation/loading-animation.component */ "XF20");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

















function ViewServiceComponent_app_loading_animation_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loading-animation", 6);
} }
const _c0 = function (a1) { return ["/services/add-child/", a1]; };
const _c1 = function (a0) { return { childId: a0 }; };
function ViewServiceComponent_div_3_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r2.parentId))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, ctx_r2.service.id));
} }
function ViewServiceComponent_div_3_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewServiceComponent_div_3_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.deleteService(ctx_r8.service); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewServiceComponent_div_3_mat_list_item_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "album");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const desc_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", desc_r10, " ");
} }
function ViewServiceComponent_div_3_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewServiceComponent_div_3_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.openDialog(ctx_r11.service.id, null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Add Feature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewServiceComponent_div_3_div_26_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewServiceComponent_div_3_div_26_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r16.openDialog(ctx_r16.service.id, item_r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewServiceComponent_div_3_div_26_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewServiceComponent_div_3_div_26_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.deleteFeature(item_r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewServiceComponent_div_3_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ViewServiceComponent_div_3_div_26_button_9_Template, 3, 0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ViewServiceComponent_div_3_div_26_button_10_Template, 3, 0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", item_r13.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r13.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.admin && !ctx_r6.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.admin && !ctx_r6.loading);
} }
function ViewServiceComponent_div_3_owl_carousel_o_31_ng_container_1_ng_template_1_h5_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", feature_r26.title, "");
} }
const _c2 = function (a0) { return { parent: a0 }; };
function ViewServiceComponent_div_3_owl_carousel_o_31_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ViewServiceComponent_div_3_owl_carousel_o_31_ng_container_1_ng_template_1_h5_6_Template, 2, 1, "h5", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/services/viewService/", slide_r23.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c2, slide_r23.parentService.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", slide_r23.icon, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", slide_r23.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", slide_r23.features);
} }
function ViewServiceComponent_div_3_owl_carousel_o_31_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ViewServiceComponent_div_3_owl_carousel_o_31_ng_container_1_ng_template_1_Template, 7, 7, "ng-template", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function ViewServiceComponent_div_3_owl_carousel_o_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "owl-carousel-o", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ViewServiceComponent_div_3_owl_carousel_o_31_ng_container_1_Template, 2, 0, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r7.customOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.services);
} }
function ViewServiceComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ViewServiceComponent_div_3_button_11_Template, 3, 6, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ViewServiceComponent_div_3_button_12_Template, 3, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ViewServiceComponent_div_3_mat_list_item_13_Template, 5, 1, "mat-list-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ViewServiceComponent_div_3_button_24_Template, 4, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ViewServiceComponent_div_3_div_26_Template, 11, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ViewServiceComponent_div_3_owl_carousel_o_31_Template, 2, 2, "owl-carousel-o", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.service.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.service.fullDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 11, "REQUEST-OFFER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.service.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 13, "WHAT-WE-PROVIDE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.service.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 15, "OTHER-SERVICES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.services);
} }
class ViewServiceComponent {
    constructor(route, apollo, auth, router, dialog) {
        this.route = route;
        this.apollo = apollo;
        this.auth = auth;
        this.router = router;
        this.dialog = dialog;
        this.admin = false;
        this.loading = true;
        this.customOptions = {
            autoWidth: true,
            margin: 10,
            loop: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            nav: true,
            navSpeed: 700,
            navText: ['<', '>'],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 2
                },
                940: {
                    items: 3
                },
                1024: {
                    items: 3
                }
            },
        };
    }
    deleteFeature(id) {
        const confirmme = confirm('are you sure you want to delete');
        if (confirmme) {
            this.loading = true;
            this.apollo.mutate({
                mutation: _home_home_homequeries__WEBPACK_IMPORTED_MODULE_0__["removeServiceFeature"],
                variables: { id: Number(id) }
            }).subscribe((result) => {
                this.loading = false;
                alert('deleted successfully');
                window.location.reload();
            });
        }
    }
    openDialog(serviceId, featureId) {
        const dialogRef1 = this.dialog.open(_add_feature_add_feature_component__WEBPACK_IMPORTED_MODULE_1__["AddFeatureComponent"]);
        dialogRef1.componentInstance.serviceId = serviceId;
        dialogRef1.componentInstance.id = featureId;
        dialogRef1.afterClosed().subscribe(result => {
            this.get(this.id, this.parentId);
        });
    }
    ngOnInit() {
        this.auth.checkAdmin().subscribe(x => this.admin = x);
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.loading = true;
            this.route.queryParams.subscribe(param => {
                this.parentId = param.parent;
                this.get(this.id, this.parentId);
            });
        });
    }
    deleteService(serv) {
        const confirmme = confirm('are you sure you want to delete this service');
        if (confirmme) {
            alert('deleting');
            this.loading = true;
            this.apollo.mutate({
                mutation: _home_home_homequeries__WEBPACK_IMPORTED_MODULE_0__["removeChildService"],
                variables: { id: Number(serv.id) }
            }).subscribe((result) => {
                this.loading = false;
                alert('deleted successfully');
                this.router.navigateByUrl('/services/list');
            });
        }
    }
    get(id, parent) {
        this.loading = true;
        this.apollo
            .watchQuery({
            query: _home_home_homequeries__WEBPACK_IMPORTED_MODULE_0__["findOneServiceQuery"],
            variables: { id: Number(id), parentId: Number(this.parentId) },
            fetchPolicy: 'network-only'
        })
            .valueChanges.subscribe((result) => {
            var _a;
            this.loading = false;
            this.loading = result === null || result === void 0 ? void 0 : result.loading;
            this.service = result === null || result === void 0 ? void 0 : result.data.findOneChildService;
            this.services = (_a = result === null || result === void 0 ? void 0 : result.data.findOneParentService) === null || _a === void 0 ? void 0 : _a.childServices;
            this.services = this.services.filter((item) => {
                return (Number(item.id) !== Number(this.id));
            });
        });
    }
}
ViewServiceComponent.ɵfac = function ViewServiceComponent_Factory(t) { return new (t || ViewServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
ViewServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ViewServiceComponent, selectors: [["app-view-service"]], decls: 6, vars: 2, consts: [["fxLayoutAlign", "center center", "fxLayout", "column", 1, "center", "top-margin"], ["style", "margin-top: 250px", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "background-color", "white"], ["style", "min-height:100%;max-width: 100%", "fxLayout", "column", "fxFlex", "80", "fxLayoutAlign", "center start", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "100", 1, "bottom-section"], [2, "margin-top", "250px"], ["fxLayout", "column", "fxFlex", "80", "fxLayoutAlign", "center start", 2, "min-height", "100%", "max-width", "100%"], ["fxLayout", "column", "fxFlex", "80", "fxLayoutAlign", "center center"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayout.lt-md", "column-reverse"], ["fxLayout", "column", "fxFlex", "60", "fxFlex.lt-lg", "100", 2, "padding", "10px"], ["fxLayout", "row"], ["fxLayout", "column", "fxFlex", "70"], [2, "color", "#fbb000", "padding", "20px 0", "margin-bottom", "0px"], ["style", "border-radius: 10px;", "color", "accent", "mat-raised-button", "", 3, "routerLink", "queryParams", 4, "ngIf"], ["style", "border-radius: 10px;", "color", "accent", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["style", "margin-top: 20px", 4, "ngFor", "ngForOf"], ["fxFlexAlign", "start", "mat-raised-button", "", "routerLink", "/pricing/request-offer", 1, "curved-btn-primary"], ["fxLayout", "column", "fxFlex.lt-md", "100", "fxFlex", "40"], ["fxLayout", "column", "fxFlex", "50", 2, "padding", "20px"], [3, "src"], [1, "header-text", 2, "margin-top", "100px"], ["style", "margin: 10px;border-radius: 10px; float: right", "color", "accent", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["fxLayout", "row wrap", "fxFlex", "80", "fxLayoutAlign", "center", 2, "align-self", "center"], ["class", "provide", "fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "20", 4, "ngFor", "ngForOf"], ["class", "carousel3", "fxLayoutAlign", "center center", "fxLayout", "row", 3, "options", 4, "ngIf"], ["color", "accent", "mat-raised-button", "", 2, "border-radius", "10px", 3, "routerLink", "queryParams"], ["color", "accent", "mat-raised-button", "", 2, "border-radius", "10px", 3, "click"], [2, "margin-top", "20px"], ["mat-line", ""], ["mat-list-icon", "", 2, "color", "#fbb000", "font-size", "12px"], ["color", "accent", "mat-raised-button", "", 2, "margin", "10px", "border-radius", "10px", "float", "right", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "20", 1, "provide"], [2, "background-color", "#f4f4f4", "border-radius", "50%", "padding", "15px", "margin-bottom", "8px"], [2, "width", "50px", "height", "50px", 3, "src"], [1, "bold-poppins"], ["fxLayout", "row", "fxLayoutAlign", "center end"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fxLayoutAlign", "center center", "fxLayout", "row", 1, "carousel3", 3, "options"], ["class", "caro-card", 4, "ngFor", "ngForOf"], [1, "caro-card"], ["carouselSlide", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "cursor", 2, "background-color", "#fafafa", "padding", "25px", 3, "routerLink", "queryParams"], ["alt", "img", "fxFlexAlign", "start center", 2, "align-self", "baseline", "max-width", "75px", "max-height", "75px", "margin-right", "1rem", 3, "src"], ["fxLayout", "column", "fxFlex", "60", 2, "align-items", "baseline"], [2, "margin-bottom", "10px"], ["style", "margin: 0", 4, "ngFor", "ngForOf"], [2, "margin", "0"]], template: function ViewServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ViewServiceComponent_app_loading_animation_1_Template, 1, 0, "app-loading-animation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ViewServiceComponent_div_3_Template, 32, 17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-lets-talk", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service && !ctx.loading);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_lets_talk_lets_talk_component__WEBPACK_IMPORTED_MODULE_9__["LetsTalkComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _shared_loading_animation_loading_animation_component__WEBPACK_IMPORTED_MODULE_10__["LoadingAnimationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListIconCssMatStyler"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselSlideDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"]], styles: [".curved-btn-primary[_ngcontent-%COMP%] {\n  min-width: 70px;\n  border: none;\n  font-weight: bold;\n  border-radius: 1.5rem;\n  background-color: #ffb000;\n  color: black;\n  align-self: center;\n  padding: 0 20px;\n  min-height: 30px;\n  margin-top: 40px;\n}\n\n.service-img[_ngcontent-%COMP%] {\n  max-width: 350px;\n  max-height: 350px;\n}\n\n.carousel3[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  width: 100%;\n  margin-bottom: 100px;\n  text-align: center;\n}\n\n.caro-img[_ngcontent-%COMP%] {\n  max-width: 150px;\n  max-height: 150px;\n}\n\n.caro-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  max-width: 150px;\n  width: 150px;\n}\n\n.reqBtn[_ngcontent-%COMP%] {\n  width: 164px;\n  height: 44px;\n  margin: 10px;\n  background: white;\n  color: black 0% 0% no-repeat padding-box;\n  border: 2px solid #ffb000;\n  border-radius: 25px;\n}\n\n.provide[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 350px;\n  margin: 5px;\n  padding: 25px;\n}\n\n.bottom-section[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding: 40px;\n  background: #fafafa;\n  width: 100%;\n  height: 400px;\n}\n\n.bold-poppins[_ngcontent-%COMP%] {\n  font-family: poppins-bold;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlldy1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBR0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBRUYiLCJmaWxlIjoidmlldy1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jdXJ2ZWQtYnRuLXByaW1hcnkge1xyXG4gIG1pbi13aWR0aDogNzBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIwMDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgbWluLWhlaWdodDogMzBweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uc2VydmljZS1pbWd7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuICBtYXgtaGVpZ2h0OiAzNTBweDtcclxufVxyXG4uY2Fyb3VzZWwzIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJvLWltZyB7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxuICBtYXgtaGVpZ2h0OiAxNTBweDtcclxufVxyXG4uY2Fyby1jYXJkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuLnJlcUJ0biB7XHJcbiAgLy90b3A6IDQwcHg7XHJcbiAgLy9sZWZ0OiAxNDcwcHg7XHJcbiAgd2lkdGg6IDE2NHB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZiMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgLy9vcGFjaXR5OiAxO1xyXG59XHJcbi5wcm92aWRle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuLmJvdHRvbS1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uYm9sZC1wb3BwaW5ze1xyXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zLWJvbGQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "XF20":
/*!*************************************************************************!*\
  !*** ./src/app/shared/loading-animation/loading-animation.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoadingAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingAnimationComponent", function() { return LoadingAnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lottie */ "DPnb");


class LoadingAnimationComponent {
    constructor() {
        this.options = {
            path: '/assets/lightbulb.json',
            loop: true,
        };
    }
    animationCreated(animationItem) {
        animationItem.playSpeed = 2;
    }
    ngOnInit() {
    }
}
LoadingAnimationComponent.ɵfac = function LoadingAnimationComponent_Factory(t) { return new (t || LoadingAnimationComponent)(); };
LoadingAnimationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingAnimationComponent, selectors: [["app-loading-animation"]], decls: 1, vars: 1, consts: [["width", "100px", "height", "100px", 3, "options", "animationCreated"]], template: function LoadingAnimationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-lottie", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationCreated", function LoadingAnimationComponent_Template_ng_lottie_animationCreated_0_listener($event) { return ctx.animationCreated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
    } }, directives: [ngx_lottie__WEBPACK_IMPORTED_MODULE_1__["LottieComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLWFuaW1hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "fJkL":
/*!**************************************************!*\
  !*** ./src/app/main/services/services.module.ts ***!
  \**************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _view_service_view_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-service/view-service.component */ "X0UH");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/services.component */ "IZ+y");
/* harmony import */ var _shared_loading_animation_loading_animation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/loading-animation/loading-animation.component */ "XF20");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var _pricing_pricing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pricing/pricing.module */ "/6Yg");
/* harmony import */ var _add_edit_child_service_add_edit_child_service_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-edit-child-service/add-edit-child-service.component */ "4X9i");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _add_parent_service_add_parent_service_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-parent-service/add-parent-service.component */ "GE5N");
/* harmony import */ var _view_service_add_feature_add_feature_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-service/add-feature/add-feature.component */ "5FBo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");















const routes = [
    {
        path: 'viewService/:id',
        component: _view_service_view_service_component__WEBPACK_IMPORTED_MODULE_1__["ViewServiceComponent"]
    }, {
        path: 'add-child/:parentId',
        component: _add_edit_child_service_add_edit_child_service_component__WEBPACK_IMPORTED_MODULE_8__["AddEditChildServiceComponent"]
    }, {
        path: 'add-parent/:parentId',
        component: _add_parent_service_add_parent_service_component__WEBPACK_IMPORTED_MODULE_10__["AddParentServiceComponent"]
    }, {
        path: 'list',
        component: _services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesListComponent"]
    }, {
        path: '',
        redirectTo: 'list'
    },
];
class ServicesModule {
}
ServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: ServicesModule });
ServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function ServicesModule_Factory(t) { return new (t || ServicesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"].forRoot({ player: _pricing_pricing_module__WEBPACK_IMPORTED_MODULE_7__["playerFactory"] }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](ServicesModule, { declarations: [_view_service_view_service_component__WEBPACK_IMPORTED_MODULE_1__["ViewServiceComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesListComponent"], _shared_loading_animation_loading_animation_component__WEBPACK_IMPORTED_MODULE_5__["LoadingAnimationComponent"], _add_edit_child_service_add_edit_child_service_component__WEBPACK_IMPORTED_MODULE_8__["AddEditChildServiceComponent"], _add_parent_service_add_parent_service_component__WEBPACK_IMPORTED_MODULE_10__["AddParentServiceComponent"], _view_service_add_feature_add_feature_component__WEBPACK_IMPORTED_MODULE_11__["AddFeatureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_6__["LottieModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=main-services-services-module.js.map