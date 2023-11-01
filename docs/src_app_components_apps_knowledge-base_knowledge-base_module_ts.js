"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_knowledge-base_knowledge-base_module_ts"],{

/***/ 13090:
/*!*********************************************************************************!*\
  !*** ./src/app/components/apps/knowledge-base/knowledge-base-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KnowledgeBaseRoutingModule: () => (/* binding */ KnowledgeBaseRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _knowledge_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knowledge-base.component */ 3600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _knowledge_base_component__WEBPACK_IMPORTED_MODULE_0__.KnowledgeBaseComponent
  }]
}];
class KnowledgeBaseRoutingModule {
  static #_ = this.ɵfac = function KnowledgeBaseRoutingModule_Factory(t) {
    return new (t || KnowledgeBaseRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: KnowledgeBaseRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](KnowledgeBaseRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3600:
/*!****************************************************************************!*\
  !*** ./src/app/components/apps/knowledge-base/knowledge-base.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KnowledgeBaseComponent: () => (/* binding */ KnowledgeBaseComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_knowledge_base_knowledge_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/knowledge-base/knowledge-base */ 9791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 49177);








const _c0 = function () {
  return ["Apps"];
};
const _c1 = function () {
  return {
    "background-image": "url(assets/images/knowledgebase/bg_1.jpg)",
    "background-size": "cover",
    "background-position": "center center",
    display: "block"
  };
};
class KnowledgeBaseComponent {
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
    this.Kb = _shared_data_knowledge_base_knowledge_base__WEBPACK_IMPORTED_MODULE_0__.KB_DB.Kb_Category;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function KnowledgeBaseComponent_Factory(t) {
    return new (t || KnowledgeBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: KnowledgeBaseComponent,
    selectors: [["app-knowledge-base"]],
    decls: 615,
    vars: 64,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "knowledgebase-bg", 3, "ngStyle"], ["src", "assets/images/knowledgebase/bg_1.jpg", "alt", "looginpage", 1, "bg-img-cover", "bg-center", "d-none"], [1, "knowledgebase-search"], ["action", "#", "method", "get", 1, "form-inline"], [1, "form-group", "w-100", "m-0"], [3, "icon"], ["type", "text", "placeholder", "Type question here", "title", "", 1, "form-control-plaintext", "w-100"], [1, "col-xl-4", "col-sm-6"], [1, "card", "bg-primary"], [1, "card-body"], [1, "media", "faq-widgets"], [1, "media-body"], [1, "col-xl-4"], [1, "col-sm-12"], [1, "header-faq"], [1, "mb-0"], [1, "card"], [1, "card-header"], [1, "row", "browse"], [1, "col-xl-4", "xl-50", "col-md-6"], [1, "browse-articles"], ["href", "#"], [1, "badge", "badge-primary", "pull-right"], [1, "browse-articles", "browse-bottom"], [1, "col-xl-4", "xl-100"], [1, "col-lg-12"], [1, "col-xl-3", "xl-50", "col-md-6", "box-col-6"], [1, "card", "features-faq", "product-box"], [1, "faq-image", "product-img"], ["src", "assets/images/faq/1.jpg", "alt", "", 1, "img-fluid"], [1, "product-hover"], [1, "icon-link"], [1, "icon-import"], [1, "card-footer"], [1, "pull-right"], [1, "fa", "fa-star", "font-primary"], ["src", "assets/images/faq/2.jpg", "alt", "", 1, "img-fluid"], [1, "fa", "fa-star-o", "font-primary"], ["src", "assets/images/faq/3.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/faq/4.jpg", "alt", "", 1, "img-fluid"], [1, "fa", "fa-star-half-o", "font-primary"], [1, "col-xl-4", "col-md-6"], [1, "media"], ["data-feather", "codepen", 1, "m-r-30"], [1, "f-w-500"], ["data-feather", "file-text", 1, "m-r-30"], [1, "col-xl-12", "col-md-6"], ["data-feather", "youtube", 1, "m-r-30"], [1, "col-xl-12"]],
    template: function KnowledgeBaseComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div")(8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "How Can I help you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-feather-icons", 9)(13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11)(25, "div", 12)(26, "div", 13)(27, "div", 14)(28, "div", 15)(29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Knowledgebase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 16)(35, "div", 12)(36, "div", 13)(37, "div", 14)(38, "div", 15)(39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 17)(45, "div", 18)(46, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Browse articles by category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 2)(49, "div", 17)(50, "div", 20)(51, "div", 21)(52, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Browse Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 13)(55, "div", 22)(56, "div", 23)(57, "div", 24)(58, "h6")(59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Quick Questions are answered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "ul")(63, "li")(64, "a", 25)(65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Lorem Ipsum is simply dummy text of the printing");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "li")(70, "a", 25)(71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Lorem Ipsum has been the industry's standard dummy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "li")(78, "a", 25)(79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "When an unknown printer took a galley ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "li")(84, "a", 25)(85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "But also the leap into electronic typesetting, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "li")(90, "a", 25)(91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "See More (40)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 23)(96, "div", 24)(97, "h6")(98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](99, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, " Integrating WordPress with Your Website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "ul")(102, "li")(103, "a", 25)(104, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](105, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "It was popularised in the 1960s with the release");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "li")(111, "a", 25)(112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Etraset sheets containing Lorem Ipsum passages");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "li")(117, "a", 25)(118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Desktop publishing software like Aldus PageMaker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "li")(125, "a", 25)(126, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Making this the first true generator on the Internet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "li")(131, "a", 25)(132, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "See More (90)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 23)(137, "div", 24)(138, "h6")(139, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](140, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "WordPress Site Maintenance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "ul")(143, "li")(144, "a", 25)(145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "The point of using Lorem Ipsum is that it has a more-or-less ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "li")(150, "a", 25)(151, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](152, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, "Normal distribution of letters, as opposed to using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, "Closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "li")(158, "a", 25)(159, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, "Lorem Ipsum, you need to be sure there isn't anything ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "li")(164, "a", 25)(165, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](166, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "Repetition, injected humour, or non words etc");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "li")(170, "a", 25)(171, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](172, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "See More (50)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "div", 23)(176, "div", 27)(177, "h6")(178, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](179, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, " Meta Tags in WordPress");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "ul")(182, "li")(183, "a", 25)(184, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](185, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, "Nemo enim ipsam voluptatem quia voluptas sit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](189, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "li")(191, "a", 25)(192, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](193, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "Ipsum quia dolor sit amet, consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "li")(197, "a", 25)(198, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](199, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "Sed quia non numquam eius modi tempora incidunt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "li")(203, "a", 25)(204, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "Lorem eum fugiat quo voluptas nulla pariatu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "li")(209, "a", 25)(210, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](211, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](213, "See More (90)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "div", 23)(215, "div", 27)(216, "h6")(217, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](218, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, "WordPress in Your Language ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "ul")(221, "li")(222, "a", 25)(223, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](224, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](226, "Desktop publishing software like Aldus PageMaker");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "li")(228, "a", 25)(229, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](230, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "Etraset sheets containing Lorem Ipsum passages");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "li")(234, "a", 25)(235, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](236, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](238, "It was popularised in the 1960s with the release");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](239, "li")(240, "a", 25)(241, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](242, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](244, "Making this the first true generator on the Internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](246, "Closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "li")(248, "a", 25)(249, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](250, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](252, "See More (50)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "div", 23)(254, "div", 27)(255, "h6")(256, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](257, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](258, "Know Your Sources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "ul")(260, "li")(261, "a", 25)(262, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](263, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](265, "The point of using Lorem Ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "li")(267, "a", 25)(268, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](269, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](271, "It has a more-or-less normal distribution of letters");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](272, "li")(273, "a", 25)(274, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](275, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](277, "Et harum quidem rerum facilis est et expedita");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](278, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](279, "Article");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](280, "li")(281, "a", 25)(282, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](283, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](284, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](285, "Nam libero tempore, cum soluta nobis est eligendi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](286, "li")(287, "a", 25)(288, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](289, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](291, "See More (26)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](292, "div", 23)(293, "div", 27)(294, "h6")(295, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](296, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](297, "Validating a Website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](298, "ul")(299, "li")(300, "a", 25)(301, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](302, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](303, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](304, "When our power of choice is untrammelled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](306, "Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](307, "li")(308, "a", 25)(309, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](310, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](311, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](312, "It will frequently occur that pleasures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "li")(314, "a", 25)(315, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](316, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](317, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](318, "who fail in their duty through weakness ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](319, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](320, "Closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](321, "li")(322, "a", 25)(323, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](324, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](325, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](326, " At vero eos et accusamus et iusto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](327, "li")(328, "a", 25)(329, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](330, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](331, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](332, "See More (10)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](333, "div", 23)(334, "div", 27)(335, "h6")(336, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](337, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](338, "Quick Questions are answered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](339, "ul")(340, "li")(341, "a", 25)(342, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](343, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](344, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](345, "Quis autem vel eum iure reprehenderit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](346, "li")(347, "a", 25)(348, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](349, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](350, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](351, "Ducimus blanditiis praesentium voluptatum");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](352, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](353, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](354, "li")(355, "a", 25)(356, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](357, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](358, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](359, "Omnis voluptas assumenda est");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](360, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](361, "Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](362, "li")(363, "a", 25)(364, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](365, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](366, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](367, "Produces no resultant pleasure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](368, "li")(369, "a", 25)(370, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](371, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](372, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](373, "See More (21)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](374, "div", 28)(375, "div", 27)(376, "h6")(377, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](378, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](379, "Integrating WordPress with Your Website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](380, "ul")(381, "li")(382, "a", 25)(383, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](384, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](385, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](386, "Lorem Ipsum passage, and going through");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](387, "li")(388, "a", 25)(389, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](390, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](391, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](392, "The first line of Lorem Ipsum, Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](393, "li")(394, "a", 25)(395, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](396, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](397, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](398, "Thus comes from a line in section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](399, "li")(400, "a", 25)(401, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](402, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](403, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](404, "First true generator on the Internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](405, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](406, "On hold");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](407, "li")(408, "a", 25)(409, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](410, "app-feather-icons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](411, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](412, "See More (34)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](413, "div", 29)(414, "div", 18)(415, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](416, "Featured Tutorials");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](417, "div", 2)(418, "div", 30)(419, "div", 31)(420, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](421, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](422, "div", 34)(423, "ul")(424, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](425, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](426, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](427, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](428, "div", 13)(429, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](430, "Web Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](431, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](432, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](433, "div", 37)(434, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](435, "Dec 15, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](436, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](437, "i", 39)(438, "i", 39)(439, "i", 39)(440, "i", 39)(441, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](442, "div", 30)(443, "div", 31)(444, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](445, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](446, "div", 34)(447, "ul")(448, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](449, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](450, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](451, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](452, "div", 13)(453, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](454, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](455, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](456, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](457, "div", 37)(458, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](459, "Dec 15, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](460, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](461, "i", 39)(462, "i", 39)(463, "i", 39)(464, "i", 39)(465, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](466, "div", 30)(467, "div", 31)(468, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](469, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](470, "div", 34)(471, "ul")(472, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](473, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](474, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](475, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](476, "div", 13)(477, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](478, "UI Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](479, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](480, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](481, "div", 37)(482, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](483, "Dec 15, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](484, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](485, "i", 39)(486, "i", 39)(487, "i", 39)(488, "i", 39)(489, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](490, "div", 30)(491, "div", 31)(492, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](493, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](494, "div", 34)(495, "ul")(496, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](497, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](498, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](499, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](500, "div", 13)(501, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](502, "UX Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](503, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](504, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](505, "div", 37)(506, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](507, "Dec 15, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](508, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](509, "i", 39)(510, "i", 39)(511, "i", 39)(512, "i", 39)(513, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](514, "div", 29)(515, "div", 18)(516, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](517, "Latest articles and videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](518, "div", 2)(519, "div", 45)(520, "div", 2)(521, "div", 17)(522, "div", 20)(523, "div", 13)(524, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](525, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](526, "div", 15)(527, "h6", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](528, "Using Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](529, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](530, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](531, "div", 17)(532, "div", 20)(533, "div", 13)(534, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](535, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](536, "div", 15)(537, "h6", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](538, "Vel illum qu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](539, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](540, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](541, "div", 17)(542, "div", 20)(543, "div", 13)(544, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](545, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](546, "div", 15)(547, "h6", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](548, "Cum sociis natoqu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](549, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](550, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](551, "div", 45)(552, "div", 2)(553, "div", 17)(554, "div", 20)(555, "div", 13)(556, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](557, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](558, "div", 15)(559, "h6", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](560, "Donec pede justo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](561, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](562, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](563, "div", 17)(564, "div", 20)(565, "div", 13)(566, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](567, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](568, "div", 15)(569, "h6", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](570, "Nam quam nunc");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](571, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](572, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](573, "div", 17)(574, "div", 20)(575, "div", 13)(576, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](577, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](578, "div", 15)(579, "h6", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](580, "Using Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](581, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](582, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](583, "div", 16)(584, "div", 2)(585, "div", 50)(586, "div", 20)(587, "div", 13)(588, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](589, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](590, "div", 15)(591, "h6", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](592, "Vel illum qu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](593, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](594, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](595, "div", 50)(596, "div", 20)(597, "div", 13)(598, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](599, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](600, "div", 15)(601, "h6", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](602, "Cum sociis natoqu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](603, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](604, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](605, "div", 52)(606, "div", 20)(607, "div", 13)(608, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](609, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](610, "div", 15)(611, "h6", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](612, "Donec pede justo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](613, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](614, "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Knowledgebase")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](62, _c0))("active_item", "Knowledgebase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](63, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "book-open");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "aperture");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "arrow-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "arrow-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "arrow-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "arrow-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "arrow-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "arrow-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "arrow-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "arrow-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "arrow-right");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__.FeatherIconsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 88791:
/*!*************************************************************************!*\
  !*** ./src/app/components/apps/knowledge-base/knowledge-base.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KnowledgeBaseModule: () => (/* binding */ KnowledgeBaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 56208);
/* harmony import */ var _knowledge_base_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knowledge-base-routing.module */ 13090);
/* harmony import */ var _knowledge_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knowledge-base.component */ 3600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);


// import { Ng2SearchPipeModule } from 'ng2-search-filter';




class KnowledgeBaseModule {
  static #_ = this.ɵfac = function KnowledgeBaseModule_Factory(t) {
    return new (t || KnowledgeBaseModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: KnowledgeBaseModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _knowledge_base_routing_module__WEBPACK_IMPORTED_MODULE_1__.KnowledgeBaseRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](KnowledgeBaseModule, {
    declarations: [_knowledge_base_component__WEBPACK_IMPORTED_MODULE_2__.KnowledgeBaseComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _knowledge_base_routing_module__WEBPACK_IMPORTED_MODULE_1__.KnowledgeBaseRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 9791:
/*!**************************************************************!*\
  !*** ./src/app/shared/data/knowledge-base/knowledge-base.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KB_DB: () => (/* binding */ KB_DB)
/* harmony export */ });
class KB_DB {
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
  }
  static #_ = this.Kb_Category = [{
    title: 'Quick Questions are answered',
    desc: `
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Lorem Ipsum is simply dummy text of the printing</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Lorem Ipsum has been the industry's standard dummy </span><span class="badge badge-primary pull-right">New</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>When an unknown printer took a galley </span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>But also the leap into electronic typesetting, </span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (40)</span></a></li>`
  }, {
    title: 'Integrating WordPress with Your Website',
    desc: `
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>It was popularised in the 1960s with the release</span><span class="badge badge-primary pull-right">Review</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Etraset sheets containing Lorem Ipsum passages</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Desktop publishing software like Aldus PageMaker </span><span class="badge badge-primary pull-right">Articles</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Making this the first true generator on the Internet.</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (90)</span></a></li>`
  }, {
    title: 'WordPress Site Maintenance',
    desc: `
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>The point of using Lorem Ipsum is that it has a more-or-less </span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Normal distribution of letters, as opposed to using </span><span class="badge badge-primary pull-right">Closed</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Lorem Ipsum, you need to be sure there isn't anything  </span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Repetition, injected humour, or non-characteristic words etc</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (50)</span></a></li>`
  }, {
    title: ' Meta Tags in WordPress',
    desc: `
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Nemo enim ipsam voluptatem quia voluptas sit  </span><span class="badge badge-primary pull-right">Popular</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Ipsum quia dolor sit amet, consectetur</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Sed quia non numquam eius modi tempora incidunt</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Lorem eum fugiat quo voluptas nulla pariatu</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (90)</span></a></li>`
  }, {
    title: 'WordPress in Your Language',
    desc: `
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Desktop publishing software like Aldus PageMaker</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Etraset sheets containing Lorem Ipsum passages</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>It was popularised in the 1960s with the release</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Making this the first true generator on the Internet</span><span class="badge badge-primary pull-right">Closed</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (50)</span></a></li>`
  }, {
    title: 'Know Your Sources',
    desc: `
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>The point of using Lorem Ipsum </span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>It has a more-or-less normal distribution of letters</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Et harum quidem rerum facilis est et expedita</span><span class="badge badge-primary pull-right">Article</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Nam libero tempore, cum soluta nobis est eligendi </span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (26)</span></a></li>`
  }, {
    title: 'Validating a Website',
    desc: `
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>When our power of choice is untrammelled </span><span class="badge badge-primary pull-right">Review</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>It will frequently occur that pleasures  </span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>who fail in their duty through weakness </span><span class="badge badge-primary pull-right">Closed</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span> At vero eos et accusamus et iusto </span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (10)</span></a></li>`
  }, {
    title: 'Quick Questions are answered',
    desc: `
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Quis autem vel eum iure reprehenderit  </span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Ducimus  blanditiis praesentium voluptatum</span><span class="badge badge-primary pull-right">Popular</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Omnis voluptas assumenda est</span><span class="badge badge-primary pull-right">Review</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Produces no resultant pleasure</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (21)</span></a></li>`
  }, {
    title: 'Integrating WordPress with Your Website',
    desc: `
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Lorem Ipsum passage, and going through</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>The first line of Lorem Ipsum,  Lorem ipsum </span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>Thus comes from a line in section</span></a></li>
                <li><a  href="javascript:void(0)"><span><app-feather-icons [icon]="'file-text'"></app-feather-icons></span><span>First true generator on the Internet</span><span class="badge badge-primary pull-right">On hold</span></a></li>
                <li><a  href="javascript:void(0)"><span><i data-feather="arrow-right"></i></span><span>See More (34)</span></a></li>`
  }];
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_knowledge-base_knowledge-base_module_ts.js.map