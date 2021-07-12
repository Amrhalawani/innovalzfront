(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-about-about-module"],{

/***/ "59Ah":
/*!********************************************!*\
  !*** ./src/app/main/about/about.module.ts ***!
  \********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "erLQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [{ path: '', redirectTo: 'about' },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
    },
    {
        path: '', redirectTo: 'about', pathMatch: 'full'
    }
];
class AboutModule {
}
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AboutModule_Factory(t) { return new (t || AboutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();


/***/ }),

/***/ "GYT+":
/*!************************************************!*\
  !*** ./src/app/main/about/about/aboutQuery.ts ***!
  \************************************************/
/*! exports provided: AboutQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutQuery", function() { return AboutQuery; });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ "/IUn");

const AboutQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query findManyServices{
    getAboutKey{title desc desc2}
    getVisionKey{title desc }
    getMissionKey{title desc }
  },
`;


/***/ }),

/***/ "erLQ":
/*!*****************************************************!*\
  !*** ./src/app/main/about/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _aboutQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutQuery */ "GYT+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_lets_talk_lets_talk_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/lets-talk/lets-talk.component */ "9Ii+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








function AboutComponent_div_2_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const desc_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](desc_r2);
} }
function AboutComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AboutComponent_div_2_p_7_Template, 2, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 7, "ABOUT-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.about == null ? null : ctx_r0.about.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.about == null ? null : ctx_r0.about.desc2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.vision == null ? null : ctx_r0.vision.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.vision == null ? null : ctx_r0.vision.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.mission == null ? null : ctx_r0.mission.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.mission == null ? null : ctx_r0.mission.desc);
} }
class AboutComponent {
    // https://my.matterport.com/show/?m=cuzx3MPJykm
    constructor(apollo, sanitizer) {
        this.apollo = apollo;
        this.sanitizer = sanitizer;
        this.loading = true;
        this.name = 'Set iframe source';
        // url: string = 'https://my.matterport.com/show/?m=Kuem2vxoJmk&mls=1frameborder=0allowfullscreen allow=xr-spatial-tracking';
        this.url = 'https://mpembed.com/show/?m=Kuem2vxoJmk&minimap=1&mdir=1&lang=en&bgmusic=https://www.bensound.com/bensound-music/bensound-summer.mp3&play=1';
        // url2 = 'https://my.matterport.com/show/?m=cuzx3MPJykm';
        this.url2 = 'https://mpembed.com/show/?m=cuzx3MPJykm&minimap=1&mdir=1&lang=en&bgmusic=https://www.bensound.com/bensound-music/bensound-summer.mp3&play=1';
        this.getAbout();
    }
    ngOnInit() {
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
        this.urlSafe2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
    }
    getAbout() {
        this.apollo
            .watchQuery({
            query: _aboutQuery__WEBPACK_IMPORTED_MODULE_0__["AboutQuery"]
        })
            .valueChanges.subscribe((result) => {
            var _a, _b, _c;
            this.loading = result.loading;
            this.about = (_a = result.data) === null || _a === void 0 ? void 0 : _a.getAboutKey;
            this.vision = (_b = result === null || result === void 0 ? void 0 : result.data) === null || _b === void 0 ? void 0 : _b.getVisionKey;
            this.mission = (_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.getMissionKey;
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 7, vars: 1, consts: [["fxLayout", "column"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["fxLayoutAlign", "center center", "fxFlexAlign", "space-between start", 4, "ngIf"], ["fxFlex", "100"], ["src", "assets/about/map.svg", 1, "worldMap-img"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxFlex", "100"], ["fxLayoutAlign", "center center", "fxFlexAlign", "space-between start"], ["fxLayout", "column", "fxFlex", "80", 2, "margin-top", "150px"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayout.lt-lg", "column", 1, "wrap"], ["fxLayout", "column", "fxLayoutAlign", "center start", "fxFlex", "40"], [2, "font-family", "Poppins-Bold", "font-size", "34px"], [4, "ngFor", "ngForOf"], ["fxFlex", "40"], ["src", "assets/about/about1.png", 2, "width", "400px", "height", "400px"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayout.lt-lg", "column", 2, "margin-top", "150px"], ["src", "assets/about/since.svg", 2, "max-width", "288px", "max-height", "146px"], ["fxFlex", "50"], [1, "since-text"], ["fxLayout", "row", "fxFlex", "50", "fxLayoutAlign", "space-between center", "fxLayout.lt-lg", "column", 2, "margin-top", "150px"], ["fxLayout", "row", 1, "vission-mission"], ["src", "assets/about/vision.png", 1, "vission-mission-img"], [1, "vission-mission-CardHeader"], [1, "vission-mission-text"], ["fxLayout", "row", "fxFlex", "50", 1, "vission-mission"], ["src", "assets/about/mission.png", 1, "vission-mission-img"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AboutComponent_div_2_Template, 30, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-lets-talk", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _shared_lets_talk_lets_talk_component__WEBPACK_IMPORTED_MODULE_6__["LetsTalkComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".header-text[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  padding-top: 150px;\n  align-self: center;\n  align-content: center;\n  font-size: xx-large;\n  font-weight: bolder;\n}\n\n.aboutimg[_ngcontent-%COMP%] {\n  justify-content: center;\n  max-width: 870px;\n  align-self: center;\n  max-height: 250px;\n  max-width: 100%;\n}\n\n.col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n}\n\n.about-text[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-size: large;\n  width: 50%;\n  align-self: center;\n}\n\n.curved-btn-primary[_ngcontent-%COMP%] {\n  border-radius: 1.5rem;\n  background-color: #ffb000;\n  color: black;\n  border: none;\n  font-weight: bold;\n  align-self: center;\n  width: 193px;\n  height: 40px;\n  margin: 50px;\n}\n\n.letsTalk-text[_ngcontent-%COMP%] {\n  align-self: center;\n  text-align: center;\n  margin-top: 200px;\n  font-family: Poppins;\n  font-weight: bolder;\n  font-size: large;\n}\n\n.vission-mission[_ngcontent-%COMP%] {\n  background: #fafafa 0% 0% no-repeat padding-box;\n  box-shadow: 0px 8px 22px #3740530F;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 20px;\n}\n\n.vission-mission-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  padding: 10px;\n}\n\n.vission-mission-text[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.vission-mission-CardHeader[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  font-family: Poppins-bold;\n  width: 80%;\n  padding: 10px;\n  color: #fbb000;\n}\n\n.since-text[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.worldMap-img[_ngcontent-%COMP%] {\n  min-height: 390px;\n  max-width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFHQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQUZGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci10ZXh0IHtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxuICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5hYm91dGltZyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiA4NzBweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWJvdXQtdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB3aWR0aDogNTAlO1xyXG4gIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLy9wYWRkaW5nOiAzMHB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmN1cnZlZC1idG4tcHJpbWFyeSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIwMDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDE5M3B4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW46IDUwcHg7XHJcbn1cclxuXHJcbi5sZXRzVGFsay10ZXh0IHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLnZpc3Npb24tbWlzc2lvbiB7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmFmYSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyMnB4ICMzNzQwNTMwRjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4udmlzc2lvbi1taXNzaW9uLWltZyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi52aXNzaW9uLW1pc3Npb24tdGV4dCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnZpc3Npb24tbWlzc2lvbi1DYXJkSGVhZGVyIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLWJvbGQ7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiAjZmJiMDAwO1xyXG59XHJcblxyXG4uc2luY2UtdGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ud29ybGRNYXAtaW1nIHtcclxuICBtaW4taGVpZ2h0OiAzOTBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgLy9iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYWJvdXQvbWFwLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbn1cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=main-about-about-module.js.map