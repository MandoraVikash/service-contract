"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_faq_faq_module_ts"],{

/***/ 2635:
/*!***********************************************************!*\
  !*** ./src/app/components/apps/faq/faq-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqRoutingModule: () => (/* binding */ FaqRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.component */ 28050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _faq_component__WEBPACK_IMPORTED_MODULE_0__.FaqComponent
}];
class FaqRoutingModule {
  static #_ = this.ɵfac = function FaqRoutingModule_Factory(t) {
    return new (t || FaqRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: FaqRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FaqRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 28050:
/*!******************************************************!*\
  !*** ./src/app/components/apps/faq/faq.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqComponent: () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_faq_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/faq/accordion */ 91471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 49177);







function FaqComponent_div_40_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-feather-icons", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const acc_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "help-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", acc_r4.title, "");
  }
}
function FaqComponent_div_40_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const acc_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", acc_r4.content, " ");
  }
}
function FaqComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "ngb-accordion", 70, 71)(3, "ngb-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FaqComponent_div_40_ng_template_4_Template, 2, 2, "ng-template", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FaqComponent_div_40_ng_template_5_Template, 1, 1, "ng-template", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closeOthers", true);
  }
}
function FaqComponent_div_44_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-feather-icons", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const acc_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "help-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", acc_r11.title, "");
  }
}
function FaqComponent_div_44_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const acc_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", acc_r11.content, " ");
  }
}
function FaqComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "ngb-accordion", 70, 71)(3, "ngb-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FaqComponent_div_44_ng_template_4_Template, 2, 2, "ng-template", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FaqComponent_div_44_ng_template_5_Template, 1, 1, "ng-template", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closeOthers", true);
  }
}
function FaqComponent_div_48_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-feather-icons", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const acc_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "help-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", acc_r18.title, "");
  }
}
function FaqComponent_div_48_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const acc_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", acc_r18.content, " ");
  }
}
function FaqComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "ngb-accordion", 70, 71)(3, "ngb-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FaqComponent_div_48_ng_template_4_Template, 2, 2, "ng-template", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FaqComponent_div_48_ng_template_5_Template, 1, 1, "ng-template", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closeOthers", true);
  }
}
function FaqComponent_div_52_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-feather-icons", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const acc_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "help-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", acc_r25.title, "");
  }
}
function FaqComponent_div_52_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const acc_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", acc_r25.content, " ");
  }
}
function FaqComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "ngb-accordion", 70, 71)(3, "ngb-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FaqComponent_div_52_ng_template_4_Template, 2, 2, "ng-template", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FaqComponent_div_52_ng_template_5_Template, 1, 1, "ng-template", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closeOthers", true);
  }
}
const _c0 = function () {
  return ["Apps"];
};
class FaqComponent {
  constructor() {
    this.accordion1 = _shared_data_faq_accordion__WEBPACK_IMPORTED_MODULE_0__.accordion1;
    this.accordion2 = _shared_data_faq_accordion__WEBPACK_IMPORTED_MODULE_0__.accordion2;
    this.accordion3 = _shared_data_faq_accordion__WEBPACK_IMPORTED_MODULE_0__.accordion3;
    this.accordion4 = _shared_data_faq_accordion__WEBPACK_IMPORTED_MODULE_0__.accordion4;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FaqComponent_Factory(t) {
    return new (t || FaqComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FaqComponent,
    selectors: [["app-faq"]],
    decls: 370,
    vars: 23,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid", "faq-page"], [1, "faq-wrap"], [1, "row"], [1, "col-xl-4", "box-col-6"], [1, "card", "bg-primary"], [1, "card-body"], [1, "media", "faq-widgets"], [1, "media-body"], [3, "icon"], [1, "col-xl-4", "col-sm-6", "box-col-6"], [1, "col-xl-4", "col-sm-6", "box-col-12"], [1, "col-lg-12"], [1, "header-faq"], [1, "mb-0"], ["id", "accordionoc", 1, "row", "default-according", "style-1", "faq-accordion"], [1, "col-xl-8", "xl-60", "col-lg-6", "col-md-7"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "faq-title"], [1, "col-xl-4", "xl-40", "col-lg-6", "col-md-5"], [1, "card", "card-mb-faq", "xs-mt-search"], [1, "card-header", "faq-header", "pb-0"], [1, "card-header", "faq-header"], [1, "me-3", 3, "icon"], [1, "card-body", "faq-body"], [1, "faq-form"], ["type", "text", "name", "search", "type", "text", "placeholder", "Search..", 1, "form-control", 3, "ngModel", "ngModelChange"], ["data-feather", "search", 1, "search-icon"], [1, "card", "card-mb-faq"], [1, "navigation-btn"], ["href", "#", 1, "btn", "btn-primary"], ["data-feather", "message-square", 1, "m-r-10"], [1, "navigation-option"], ["href", "#"], [1, "badge", "badge-primary", "rounded-pill", "pull-right"], [1, "card"], [1, "d-inline-block"], [1, "pull-right", "d-inline-block"], [1, "media", "updates-faq-main"], [1, "updates-faq"], ["data-feather", "rotate-cw", 1, "font-primary"], [1, "media-body", "updates-bottom-time"], ["data-feather", "dollar-sign", 1, "font-primary"], ["data-feather", "link", 1, "font-primary"], ["data-feather", "check", 1, "font-primary"], [1, "col-xxl-3", "col-md-6", "box-col-6"], [1, "card", "features-faq", "product-box"], [1, "faq-image", "product-img"], ["src", "assets/images/faq/1.jpg", "alt", "", 1, "img-fluid"], [1, "product-hover"], [1, "icon-link"], [1, "icon-import"], [1, "card-footer"], [1, "pull-right"], [1, "fa", "fa-star", "font-primary"], ["src", "assets/images/faq/2.jpg", "alt", "", 1, "img-fluid"], [1, "fa", "fa-star-o", "font-primary"], ["src", "assets/images/faq/3.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/faq/4.jpg", "alt", "", 1, "img-fluid"], [1, "fa", "fa-star-half-o", "font-primary"], [1, "col-xl-4", "col-md-6"], [1, "col-sm-12"], [1, "media"], ["data-feather", "codepen", 1, "m-r-30"], [1, "f-w-500"], ["data-feather", "file-text", 1, "m-r-30"], [1, "col-xl-4"], [1, "col-xl-12", "col-md-6"], ["data-feather", "youtube", 1, "m-r-30"], [1, "col-xl-12"], ["activeIds", "ngb-panel-0", 3, "closeOthers"], ["acc", "ngbAccordion"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], [1, "me-2", 3, "icon"]],
    template: function FaqComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10)(15, "div", 5)(16, "div", 6)(17, "div", 7)(18, "div", 8)(19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Knowledgebase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11)(25, "div", 5)(26, "div", 6)(27, "div", 7)(28, "div", 8)(29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 12)(35, "div", 13)(36, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Quick Questions are answered");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 15)(39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, FaqComponent_div_40_Template, 6, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 18)(42, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Intellectual Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, FaqComponent_div_44_Template, 6, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 18)(46, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Selling And Buying");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, FaqComponent_div_48_Template, 6, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 18)(50, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "User Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, FaqComponent_div_52_Template, 6, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 19)(54, "div", 3)(55, "div", 12)(56, "div", 20)(57, "div", 21)(58, "div", 22)(59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Search articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "app-feather-icons", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 24)(63, "div", 25)(64, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FaqComponent_Template_input_ngModelChange_64_listener($event) {
          return ctx.term = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 12)(67, "div", 28)(68, "div", 22)(69, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 24)(73, "div", 29)(74, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Ask Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 32)(78, "ul")(79, "li")(80, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Tutorials");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "li")(84, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Help center");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "li")(88, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Knowledgebase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "li")(92, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "42");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "li")(98, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](99, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Video Tutorials");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "648");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "li")(104, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](105, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Ask our community");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "li")(108, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "ul")(113, "li")(114, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Ask our community");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "li")(118, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 12)(122, "div", 35)(123, "div", 22)(124, "h5", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "Latest Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 24)(129, "div", 38)(130, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 41)(133, "p")(134, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "David Linner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "requested money back for a double debit card charge");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "10 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 38)(140, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 41)(143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "All sellers have received monthly payouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "2 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 38)(148, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 41)(151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "User Christopher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, "Wallace");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, " is on hold and awaiting for staff reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "45 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 38)(159, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 41)(162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Ticket #43683 has been closed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "Victoria Wilson");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167, "Dec 7, 11:48");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 12)(169, "div", 13)(170, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "Featured Tutorials");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 3)(173, "div", 45)(174, "div", 46)(175, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](176, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "div", 49)(178, "ul")(179, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](180, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](182, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "div", 6)(184, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, "Web Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "div", 52)(189, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, "Dec 15, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](192, "i", 54)(193, "i", 54)(194, "i", 54)(195, "i", 54)(196, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "div", 45)(198, "div", 46)(199, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](200, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "div", 49)(202, "ul")(203, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](204, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](206, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "div", 6)(208, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](209, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](211, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "div", 52)(213, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, "Dec 15, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](216, "i", 54)(217, "i", 54)(218, "i", 54)(219, "i", 54)(220, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "div", 45)(222, "div", 46)(223, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](224, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "div", 49)(226, "ul")(227, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](228, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](230, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "div", 6)(232, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](233, "UI Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](235, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "div", 52)(237, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](238, "Dec 15, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](239, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](240, "i", 54)(241, "i", 54)(242, "i", 54)(243, "i", 54)(244, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "div", 45)(246, "div", 46)(247, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](248, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "div", 49)(250, "ul")(251, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](252, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](254, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "div", 6)(256, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](257, "UX Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](259, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "div", 52)(261, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](262, "Dec 15, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](264, "i", 54)(265, "i", 54)(266, "i", 54)(267, "i", 54)(268, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "div", 12)(270, "div", 13)(271, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, "Latest articles and videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "div", 3)(274, "div", 60)(275, "div", 3)(276, "div", 61)(277, "div", 35)(278, "div", 6)(279, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](280, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "div", 8)(282, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](283, "Using Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](284, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](285, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](286, "div", 61)(287, "div", 35)(288, "div", 6)(289, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](290, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](291, "div", 8)(292, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](293, "Vel illum qu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](294, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](295, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](296, "div", 61)(297, "div", 35)(298, "div", 6)(299, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](300, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](301, "div", 8)(302, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](303, " Cum sociis natoqu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](304, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](305, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](306, "div", 60)(307, "div", 3)(308, "div", 61)(309, "div", 35)(310, "div", 6)(311, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](312, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "div", 8)(314, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](315, " Donec pede justo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](316, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317, " Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](318, "div", 61)(319, "div", 35)(320, "div", 6)(321, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](322, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](323, "div", 8)(324, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](325, " Nam quam nunc");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](326, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](327, " Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](328, "div", 61)(329, "div", 35)(330, "div", 6)(331, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](332, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](333, "div", 8)(334, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](335, "Using Video ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](336, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](337, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](338, "div", 66)(339, "div", 3)(340, "div", 67)(341, "div", 35)(342, "div", 6)(343, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](344, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](345, "div", 8)(346, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](347, " Vel illum qu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](348, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](349, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](350, "div", 67)(351, "div", 35)(352, "div", 6)(353, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](354, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](355, "div", 8)(356, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](357, " Cum sociis natoqu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](358, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](359, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](360, "div", 69)(361, "div", 35)(362, "div", 6)(363, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](364, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](365, "div", 8)(366, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](367, "Donec pede justo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](368, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](369, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Faq")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c0))("active_item", "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "book-open");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "aperture");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.accordion2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.accordion2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.accordion3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.accordion4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "help-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "globe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "book-open");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "message-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "message-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "mail");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPanelTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPanelContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__.FeatherIconsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 62128:
/*!***************************************************!*\
  !*** ./src/app/components/apps/faq/faq.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqModule: () => (/* binding */ FaqModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 56208);
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq-routing.module */ 2635);
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.component */ 28050);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);







class FaqModule {
  static #_ = this.ɵfac = function FaqModule_Factory(t) {
    return new (t || FaqModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: FaqModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _faq_routing_module__WEBPACK_IMPORTED_MODULE_1__.FaqRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAccordionModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FaqModule, {
    declarations: [_faq_component__WEBPACK_IMPORTED_MODULE_2__.FaqComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _faq_routing_module__WEBPACK_IMPORTED_MODULE_1__.FaqRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAccordionModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 91471:
/*!**********************************************!*\
  !*** ./src/app/shared/data/faq/accordion.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accordion1: () => (/* binding */ accordion1),
/* harmony export */   accordion2: () => (/* binding */ accordion2),
/* harmony export */   accordion3: () => (/* binding */ accordion3),
/* harmony export */   accordion4: () => (/* binding */ accordion4)
/* harmony export */ });
const accordion1 = [{
  title: "Integrating WordPress with Your Website?",
  content: "How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.",
  icon: "file-text"
}, {
  title: "WordPress Site Maintenance ?",
  content: "We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.",
  icon: "file-text"
}, {
  title: "Meta Tags in WordPress ?",
  content: "Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress.",
  icon: "file-text"
}, {
  title: "WordPress in Your Language ?",
  content: "As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process.",
  icon: "file-text"
}];
const accordion2 = [{
  title: "WordPress Site Maintenance ?",
  content: "We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.",
  icon: "file-text"
}, {
  title: "WordPress in Your Language ?",
  content: "As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process.",
  icon: "file-text"
}, {
  title: "Integrating WordPress with Your Website ?",
  content: "How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.",
  icon: "file-text"
}];
const accordion3 = [{
  title: "WordPress Site Maintenance ?",
  content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  icon: "file-text"
}, {
  title: "Meta Tags in WordPress ?",
  content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  icon: "file-text"
}, {
  title: "Integrate WordPress Website ?",
  content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  icon: "file-text"
}, {
  title: "WordPress Site Maintenance ?",
  content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  icon: "file-text"
}];
const accordion4 = [{
  title: "WordPress Site Maintenance ?",
  content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  icon: "file-text"
}, {
  title: "WordPress in Your Language ?",
  content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  icon: "file-text"
}, {
  title: "Integrate WordPress Website ?",
  content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  icon: "file-text"
}, {
  title: "WordPress Site Maintenance ?",
  content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  icon: "file-text"
}, {
  title: "WordPress Site Maintenance ?",
  content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  icon: "file-text"
}];

/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_faq_faq_module_ts.js.map