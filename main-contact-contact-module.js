(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-contact-contact-module"],{

/***/ "3hH7":
/*!***************************************************************!*\
  !*** ./src/app/main/contact/contactus/contactus.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_home_homemutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home/home/homemutation */ "c/1x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











function ContactusComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter valid name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactusComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactusComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please enter valid number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactusComponent_a_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const socialLink_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", socialLink_r4.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", socialLink_r4.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class ContactusComponent {
    constructor(fb, apollo) {
        this.fb = fb;
        this.apollo = apollo;
        this.socialLinks = [
            { iconUrl: "assets/social-icons/socialicons/fb.png", link: "https://www.facebook.com/innovalz" },
            { iconUrl: "assets/social-icons/socialicons/tw.png", link: "https://twitter.com/innovalz" },
            { iconUrl: "assets/social-icons/socialicons/insta.png", link: "https://www.instagram.com/innovalz.insta/" },
            { iconUrl: "assets/social-icons/socialicons/yt.png", link: "https://www.youtube.com/channel/UCNZdBUY5zXer1YAhvs1m5kg" },
            { iconUrl: "assets/social-icons/socialicons/in.png", link: "http://www.linkedin.com/company/innovalz-tech" },
        ];
    }
    send() {
        this.apollo.mutate({
            mutation: _home_home_homemutation__WEBPACK_IMPORTED_MODULE_1__["sendContactMsg"],
            variables: this.contact.value
        }).subscribe((response) => {
            alert('we have received your request');
        });
    }
    ngOnInit() {
        this.contact = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(11)]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]]
        });
    }
}
ContactusComponent.ɵfac = function ContactusComponent_Factory(t) { return new (t || ContactusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"])); };
ContactusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactusComponent, selectors: [["app-contactus"]], decls: 64, vars: 46, consts: [[2, "min-height", "100%", "width", "100%"], [1, "contact-page"], [1, "header-text"], [2, "align-self", "center"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "row", "wrap", 2, "width", "90%", "align-self", "center"], ["fxLayout", "column", "fxFlex", "50", "fxLayoutAlign", "start center", 1, "form", 3, "formGroup"], ["fxFlex", "", 1, "card-header"], [1, "formField"], ["formControlName", "name", 2, "width", "100%", "height", "30px", 3, "placeholder"], [4, "ngIf"], ["formControlName", "email", 2, "width", "100%", "height", "30px", 3, "placeholder"], ["formControlName", "phone", 2, "width", "100%", "height", "30px", 3, "placeholder"], ["aria-placeholder", "Message", "formControlName", "message", 2, "width", "100%", "height", "80px", 3, "placeholder"], ["mat-raised-button", "", "type", "submit", 1, "curved-btn-primary", 3, "disabled", "click"], ["fxLayout", "column", "fxFlex", "30", "fxFlex.lt-md", "100"], [1, "form2"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["src", "assets/icons/location.svg", 1, "ico"], [1, "card-header"], [1, "contact-text"], ["src", "assets/icons/mail.svg", 1, "ico"], ["src", "assets/icons/mob.svg", 1, "ico"], [1, "contact-text", 3, "dir"], ["fxLayout", "row", "fxFlex", "40", "fxLayoutAlign", "left center", 2, "padding", "15px", "margin", "10px 0px 10px 30px"], ["style", "margin-right: 5px", "target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], [2, "margin-top", "100px", "align-self", "center", "font-weight", "bolder", "font-size", "30px", "font-family", "Poppins-Bold"], ["target", "blank", "href", "https://www.google.com/maps/place/innovalz/@29.9659547,30.9305178,21z/data=!4m5!3m4!1s0x145857bc3ded3ccf:0x83af89e584a77763!8m2!3d29.9659287!4d30.9306253", 1, "location-img"], ["target", "_blank", 2, "margin-right", "5px", 3, "href"], ["alt", "image", 2, "cursor", "pointer", "width", "30px", "height", "30px", 3, "src"]], template: function ContactusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ContactusComponent_mat_error_17_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ContactusComponent_mat_error_21_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ContactusComponent_mat_error_25_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactusComponent_Template_button_click_30_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "info@Innovalz.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "+02 011 2170020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, ContactusComponent_a_59_Template, 2, 2, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 20, "GET-IN-TOUCH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 22, "SAY-HELLO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 24, "SEND-MSG"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 26, "FULL-NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contact.controls.name.invalid && (ctx.contact.controls.name.dirty || ctx.contact.controls.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 28, "EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contact.controls.email.invalid && (ctx.contact.controls.email.dirty || ctx.contact.controls.email.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 30, "PHONE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contact.controls.phone.invalid && (ctx.contact.controls.phone.dirty || ctx.contact.controls.phone.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 32, "ENTER-MSG"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.contact.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 34, "SEND"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 36, "ADDRESS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 38, "OUR-ADDRESS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](48, 40, "EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](55, 42, "PHONE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dir", "ltr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.socialLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](62, 44, "OFFICE-DIRECTIONS"));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: [".contact-page[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  min-height: 100%;\n}\n\n.form[_ngcontent-%COMP%] {\n  min-width: 350px;\n  padding: 30px;\n}\n\n.formField[_ngcontent-%COMP%] {\n  padding: 15px;\n  width: 100%;\n}\n\n.form2[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 20px;\n  margin-top: 20px;\n  margin-left: 20px;\n  height: auto;\n  background-color: #fafafa;\n  display: flex;\n  flex-direction: column;\n}\n\n.ico[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 30px;\n  height: 30px;\n}\n\n.contact-text[_ngcontent-%COMP%] {\n  padding-left: 50px;\n}\n\n.location-img[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  min-height: 390px;\n  cursor: pointer;\n  max-width: 100%;\n  background: url(\"/assets/location.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  overflow: auto;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  margin-top: 100px;\n  align-self: center;\n  font-family: poppins-bold;\n  font-weight: bold;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: bolder;\n  align-self: start;\n  font-family: Poppins-bold;\n  font-weight: bold;\n}\n\n.curved-btn-primary[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0px 40px;\n  min-width: 70px;\n  font-weight: bold;\n  border-radius: 1.5rem;\n  background-color: #ffb000;\n  color: black;\n  align-self: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUdBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFGIiwiZmlsZSI6ImNvbnRhY3R1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LXBhZ2Uge1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmZvcm1GaWVsZCB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0yIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5pY28ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY29udGFjdC10ZXh0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1pbWcge1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgbWluLWhlaWdodDogMzkwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvbG9jYXRpb24ucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGVyLXRleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zLWJvbGQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLWJvbGQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jdXJ2ZWQtYnRuLXByaW1hcnkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwcHggNDBweDtcclxuICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIwMDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "OM9L":
/*!************************************************!*\
  !*** ./src/app/main/contact/contact.module.ts ***!
  \************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactus/contactus.component */ "3hH7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: 'contact', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_1__["ContactusComponent"] },
    { path: '', redirectTo: 'contact' }
];
class ContactModule {
}
ContactModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ContactModule });
ContactModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function ContactModule_Factory(t) { return new (t || ContactModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ContactModule, { declarations: [_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_1__["ContactusComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();


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


/***/ })

}]);
//# sourceMappingURL=main-contact-contact-module.js.map