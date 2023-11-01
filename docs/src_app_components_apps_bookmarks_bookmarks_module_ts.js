"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_bookmarks_bookmarks_module_ts"],{

/***/ 70295:
/*!***********************************************************************!*\
  !*** ./src/app/components/apps/bookmarks/bookmarks-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookmarksRoutingModule: () => (/* binding */ BookmarksRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _bookmarks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookmarks.component */ 98665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _bookmarks_component__WEBPACK_IMPORTED_MODULE_0__.BookmarksComponent
  }]
}];
class BookmarksRoutingModule {
  static #_ = this.ɵfac = function BookmarksRoutingModule_Factory(t) {
    return new (t || BookmarksRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: BookmarksRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BookmarksRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 98665:
/*!******************************************************************!*\
  !*** ./src/app/components/apps/bookmarks/bookmarks.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookmarksComponent: () => (/* binding */ BookmarksComponent)
/* harmony export */ });
/* harmony import */ var _modal_add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/add-bookmark/add-bookmark.component */ 46781);
/* harmony import */ var _modal_edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/edit-bookmark/edit-bookmark.component */ 90149);
/* harmony import */ var _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/create-tag/create-tag.component */ 45258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 49177);









const _c0 = ["addbookmark"];
const _c1 = ["editbookmark"];
const _c2 = ["createTag"];
const _c3 = function () {
  return ["Apps"];
};
class BookmarksComponent {
  constructor() {
    this.listBookmark = false;
  }
  ngOnInit() {}
  changeLayoutBookmark() {
    this.listBookmark = !this.listBookmark;
  }
  static #_ = this.ɵfac = function BookmarksComponent_Factory(t) {
    return new (t || BookmarksComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: BookmarksComponent,
    selectors: [["app-bookmarks"]],
    viewQuery: function BookmarksComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.AddBookmark = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.EditBookmark = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.CreateTag = _t.first);
      }
    },
    decls: 664,
    vars: 87,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "email-wrap", "bookmark-wrap"], [1, "row"], [1, "col-xl-3", "box-col-4a"], [1, "email-left-aside"], [1, "card"], [1, "card-body"], [1, "email-app-sidebar", "left-bookmark"], [1, "media"], [1, "media-size-email"], ["src", "assets/images/user/user.png", "alt", "", 1, "me-3", "rounded-circle"], [1, "media-body"], [1, "f-w-600"], ["role", "tablist", 1, "nav", "main-menu"], [1, "nav-item"], ["type", "button", 1, "badge-light-primary", "w-100", "btn-mail", 3, "click"], ["data-feather", "bookmark", 1, "me-2"], [1, "main-title"], ["id", "pills-created-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-created", "aria-selected", "true"], [1, "title"], ["id", "pills-favourites-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-favourites", "aria-selected", "false", 1, "show"], ["id", "pills-shared-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-shared", "aria-selected", "false", 1, "show"], ["id", "pills-bookmark-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-bookmark", "aria-selected", "false", 1, "show"], [1, "pull-right"], ["href", "javascript:void(0)", 3, "click"], [3, "icon"], ["id", "pills-notification-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-notification", "aria-selected", "false", 1, "show"], ["id", "pills-newsletter-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-newsletter", "aria-selected", "false", 1, "show"], ["id", "pills-business-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-business-tab", "aria-selected", "false", 1, "show"], ["id", "pills-holidays-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-holidays-tab", "aria-selected", "false", 1, "show"], ["id", "pills-important-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-important-tab", "aria-selected", "false", 1, "show"], ["id", "pills-orgenization-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-orgenization-tab", "aria-selected", "false", 1, "show"], [1, "col-xl-9", "col-md-12", "box-col-8"], [1, "email-right-aside", "bookmark-tabcontent"], [1, "card", "email-body", "radius-left"], [1, "ps-0"], [1, "tab-content"], ["id", "pills-created", "role", "tabpanel", "aria-labelledby", "pills-created-tab", 1, "tab-pane", "fade", "active", "show"], [1, "card", "mb-0"], [1, "card-header", "d-flex"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "grid-bookmark-view", 3, "click"], ["href", "javascript:void(0)", 1, "list-layout-view", 3, "click"], [1, "details-bookmark", "text-center"], ["id", "bookmarkData", 1, "row"], [1, "col-xxl-3", "col-md-4", "col-ed-4"], [1, "card", "card-with-border", "bookmark-card", "o-hidden"], [1, "details-website"], ["src", "assets/images/lightgallry/01.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_0"], ["href", "javascript:void(0)"], [1, "fa", "fa-star"], [1, "desciption-data"], [1, "title-bookmark"], [1, "title_0"], [1, "weburl_0"], [1, "hover-block"], ["href", "javascript:void(0)", "data-bs-toggle", "modal", 3, "click"], [1, "pull-right", "text-end"], [1, "content-general"], [1, "desc_0"], [1, "collection_0"], ["src", "assets/images/lightgallry/02.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_1"], [1, "title_1"], [1, "weburl_1"], [1, "desc_1"], [1, "collection_1"], ["src", "assets/images/lightgallry/03.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_2"], [1, "title_2"], [1, "weburl_2"], [1, "desc_2"], [1, "collection_2"], ["src", "assets/images/lightgallry/04.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_3"], [1, "title_3"], [1, "weburl_3"], [1, "desc_3"], [1, "collection_3"], ["src", "assets/images/lightgallry/05.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_4"], [1, "title_4"], [1, "weburl_4"], [1, "desc_4"], [1, "collection_4"], ["src", "assets/images/lightgallry/06.jpg", "alt", "", 1, "img-fluid"], [1, "favourite-icon", "favourite_5"], [1, "title_5"], [1, "weburl_5"], [1, "desc_5"], [1, "collection_5"], ["id", "pills-favourites", "role", "tabpanel", "aria-labelledby", "pills-favourites-tab", 1, "fade", "tab-pane"], ["href", "javascript:void(0)", 1, "grid-bookmark-view"], ["href", "javascript:void(0)", 1, "list-layout-view"], ["id", "favouriteData", 1, "row"], [1, "no-favourite"], ["id", "pills-shared", "role", "tabpanel", "aria-labelledby", "pills-shared-tab", 1, "fade", "tab-pane"], ["id", "pills-bookmark", "role", "tabpanel", "aria-labelledby", "pills-bookmark-tab", 1, "fade", "tab-pane"], ["id", "bookmarkData1", 1, "row"], ["src", "assets/images/lightgallry/07.jpg", "alt", "", 1, "img-fluid"], ["id", "pills-notification", "role", "tabpanel", "aria-labelledby", "pills-notification-tab", 1, "fade", "tab-pane"], ["id", "pills-newsletter", "role", "tabpanel", "aria-labelledby", "pills-newsletter-tab", 1, "fade", "tab-pane"], ["id", "pills-business", "role", "tabpanel", "aria-labelledby", "pills-business-tab", 1, "fade", "tab-pane"], ["id", "pills-holidays", "role", "tabpanel", "aria-labelledby", "pills-holidays-tab", 1, "fade", "tab-pane"], ["id", "pills-important", "role", "tabpanel", "aria-labelledby", "pills-important-tab", 1, "fade", "tab-pane"], ["id", "pills-orgenization", "role", "tabpanel", "aria-labelledby", "pills-orgenization-tab", 1, "fade", "tab-pane"], ["addbookmark", ""], ["editbookmark", ""], ["createTag", ""]],
    template: function BookmarksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 12)(13, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "MARK JENCO");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Markjecno@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ul", 14)(18, "li", 15)(19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookmarksComponent_Template_button_click_19_listener() {
          return ctx.AddBookmark.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " New Bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "li", 15)(23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "li")(26, "a", 19)(27, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Created by me");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "li")(30, "a", 21)(31, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " Favourites");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "li")(34, "a", 22)(35, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Shared with me");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "li")(38, "a", 23)(39, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " My bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "li")(44, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span", 24)(47, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_47_listener() {
          return ctx.CreateTag.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "li")(50, "a", 27)(51, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, " notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "li")(54, "a", 28)(55, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, " Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "li")(58, "a", 29)(59, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, " Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "li")(62, "a", 30)(63, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, " Holidays");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "li")(66, "a", 31)(67, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, " Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "li")(70, "a", 32)(71, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, " Orgenization");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 33)(74, "div", 34)(75, "div", 35)(76, "div", 36)(77, "div", 37)(78, "div", 38)(79, "div", 39)(80, "div", 40)(81, "h6", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "Created by me");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "ul")(84, "li")(85, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_85_listener() {
          return ctx.changeLayoutBookmark();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](86, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "li")(88, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_88_listener() {
          return ctx.changeLayoutBookmark();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](89, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 7)(91, "div", 44)(92, "div", 45)(93, "div", 46)(94, "div", 47)(95, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](96, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 50)(98, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](99, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 53)(101, "div", 54)(102, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "Admin Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "http://admin.pixelstrap.com//ltr/landing-page.html");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 57)(107, "ul")(108, "li")(109, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_109_listener() {
          return ctx.EditBookmark.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](110, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "li")(112, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](113, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "li")(115, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](116, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "li")(118, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](119, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "li", 59)(121, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](122, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "div", 60)(124, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](125, " is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 46)(129, "div", 47)(130, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](131, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "div", 64)(133, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](134, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "div", 53)(136, "div", 54)(137, "h6", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "Universal Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](140, "https://angular.pixelstrap.com/universal/landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "div", 57)(142, "ul")(143, "li")(144, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_144_listener() {
          return ctx.EditBookmark.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](145, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "li")(147, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](148, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "li")(150, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](151, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "li")(153, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](154, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "li", 59)(156, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](157, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "div", 60)(159, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](160, "Universal is beautifully crafted, clean and modern designed admin theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](162, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "div", 46)(164, "div", 47)(165, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](166, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "div", 70)(168, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](169, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "div", 53)(171, "div", 54)(172, "h6", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](173, "Angular Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](174, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, "https://angular.pixelstrap.com/cuba/landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "div", 57)(177, "ul")(178, "li")(179, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_179_listener() {
          return ctx.EditBookmark.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](180, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "li")(182, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](183, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "li")(185, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](186, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](187, "li")(188, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](189, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](190, "li", 59)(191, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](192, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](193, "div", 60)(194, "p", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](195, "Cuba is beautifully crafted, clean and modern designed admin theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](196, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](197, "Fs");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](198, "div", 46)(199, "div", 47)(200, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](201, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](202, "div", 76)(203, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](204, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](205, "div", 53)(206, "div", 54)(207, "h6", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](208, "Multikart Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](209, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](210, "http://themes.pixelstrap.com/multikart/back-end/index.html");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](211, "div", 57)(212, "ul")(213, "li")(214, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_214_listener() {
          return ctx.EditBookmark.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](215, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](216, "li")(217, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](218, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](219, "li")(220, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](221, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](222, "li")(223, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](224, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](225, "li", 59)(226, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](227, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](228, "div", 60)(229, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](230, "Multikart Admin is modern designed admin theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](231, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](232, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](233, "div", 46)(234, "div", 47)(235, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](236, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](237, "div", 82)(238, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](239, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](240, "div", 53)(241, "div", 54)(242, "h6", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](243, "Ecommerece theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](244, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](245, "http://themes.pixelstrap.com/multikart");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](246, "div", 57)(247, "ul")(248, "li")(249, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_249_listener() {
          return ctx.EditBookmark.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](250, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](251, "li")(252, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](253, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](254, "li")(255, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](256, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](257, "li")(258, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](259, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](260, "li", 59)(261, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](262, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](263, "div", 60)(264, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](265, "Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](266, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](267, "General ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](268, "div", 46)(269, "div", 47)(270, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](271, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](272, "div", 88)(273, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](274, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](275, "div", 53)(276, "div", 54)(277, "h6", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](278, "Tovo app landing page");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](279, "p", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](280, "http://vue.pixelstrap.com/tovo/home-one");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](281, "div", 57)(282, "ul")(283, "li")(284, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_284_listener() {
          return ctx.EditBookmark.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](285, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](286, "li")(287, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](288, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](289, "li")(290, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](291, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](292, "li")(293, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](294, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](295, "li", 59)(296, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](297, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](298, "div", 60)(299, "p", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](300, "Amazing Landing Page With Easy Customization");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](301, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](302, "Fs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](303, "div", 93)(304, "div", 39)(305, "div", 40)(306, "h6", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](307, "Favourites");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](308, "ul")(309, "li")(310, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](311, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](312, "li")(313, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](314, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](315, "div", 7)(316, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](317, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](318, "div", 97)(319, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](320, "No Bookmarks Found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](321, "div", 98)(322, "div", 39)(323, "div", 40)(324, "h6", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](325, "Shared with me");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](326, "ul")(327, "li")(328, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](329, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](330, "li")(331, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](332, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](333, "div", 7)(334, "div", 44)(335, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](336, "No Bookmarks Found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](337, "div", 99)(338, "div", 39)(339, "div", 40)(340, "h6", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](341, "My bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](342, "ul")(343, "li")(344, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](345, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](346, "li")(347, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](348, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](349, "div", 7)(350, "div", 44)(351, "div", 100)(352, "div", 46)(353, "div", 47)(354, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](355, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](356, "div", 50)(357, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](358, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](359, "div", 53)(360, "div", 54)(361, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](362, "Admin Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](363, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](364, "http://admin.pixelstrap.com/Cuba/ltr/landing-page.html");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](365, "div", 57)(366, "ul")(367, "li")(368, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_368_listener() {
          return ctx.EditBookmark.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](369, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](370, "li")(371, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](372, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](373, "li")(374, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](375, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](376, "li")(377, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](378, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](379, "li", 59)(380, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](381, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](382, "div", 60)(383, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](384, "Cuba is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](385, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](386, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](387, "div", 46)(388, "div", 47)(389, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](390, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](391, "div", 64)(392, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](393, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](394, "div", 53)(395, "div", 54)(396, "h6", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](397, "Universal Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](398, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](399, "https://angular.pixelstrap.com/universal/landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](400, "div", 57)(401, "ul")(402, "li")(403, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_403_listener() {
          return ctx.EditBookmark.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](404, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](405, "li")(406, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](407, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](408, "li")(409, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](410, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](411, "li")(412, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](413, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](414, "li", 59)(415, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](416, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](417, "div", 60)(418, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](419, "Universal is beautifully crafted, clean and modern designed admin theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](420, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](421, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](422, "div", 46)(423, "div", 47)(424, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](425, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](426, "div", 70)(427, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](428, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](429, "div", 53)(430, "div", 54)(431, "h6", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](432, "Angular Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](433, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](434, "https://angular.pixelstrap.com/cuba/landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](435, "div", 57)(436, "ul")(437, "li")(438, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_438_listener() {
          return ctx.EditBookmark.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](439, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](440, "li")(441, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](442, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](443, "li")(444, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](445, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](446, "li")(447, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](448, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](449, "li", 59)(450, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](451, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](452, "div", 60)(453, "p", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](454, "Cuba is beautifully crafted, clean and modern designed admin theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](455, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](456, "Fs");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](457, "div", 46)(458, "div", 47)(459, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](460, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](461, "div", 76)(462, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](463, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](464, "div", 53)(465, "div", 54)(466, "h6", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](467, "Multikart Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](468, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](469, "http://themes.pixelstrap.com/multikart/back-end/index.html");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](470, "div", 57)(471, "ul")(472, "li")(473, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_473_listener() {
          return ctx.EditBookmark.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](474, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](475, "li")(476, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](477, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](478, "li")(479, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](480, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](481, "li")(482, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](483, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](484, "li", 59)(485, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](486, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](487, "div", 60)(488, "p", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](489, "Multikart Admin is modern designed admin theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](490, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](491, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](492, "div", 46)(493, "div", 47)(494, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](495, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](496, "div", 82)(497, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](498, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](499, "div", 53)(500, "div", 54)(501, "h6", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](502, "Ecommerece theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](503, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](504, "http://themes.pixelstrap.com/multikart");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](505, "div", 57)(506, "ul")(507, "li")(508, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_508_listener() {
          return ctx.EditBookmark.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](509, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](510, "li")(511, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](512, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](513, "li")(514, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](515, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](516, "li")(517, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](518, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](519, "li", 59)(520, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](521, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](522, "div", 60)(523, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](524, "Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](525, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](526, "General ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](527, "div", 46)(528, "div", 47)(529, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](530, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](531, "div", 88)(532, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](533, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](534, "div", 53)(535, "div", 54)(536, "h6", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](537, "Tovo app landing page");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](538, "p", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](539, "http://vue.pixelstrap.com/tovo/home-one");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](540, "div", 57)(541, "ul")(542, "li")(543, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookmarksComponent_Template_a_click_543_listener() {
          return ctx.EditBookmark.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](544, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](545, "li")(546, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](547, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](548, "li")(549, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](550, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](551, "li")(552, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](553, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](554, "li", 59)(555, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](556, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](557, "div", 60)(558, "p", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](559, "Amazing Landing Page With Easy Customization");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](560, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](561, "Fs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](562, "div", 102)(563, "div", 39)(564, "div", 40)(565, "h6", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](566, "notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](567, "ul")(568, "li")(569, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](570, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](571, "li")(572, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](573, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](574, "div", 7)(575, "div", 44)(576, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](577, "No Bookmarks Found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](578, "div", 103)(579, "div", 39)(580, "div", 40)(581, "h6", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](582, "Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](583, "ul")(584, "li")(585, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](586, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](587, "li")(588, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](589, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](590, "div", 7)(591, "div", 44)(592, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](593, "No Bookmarks Found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](594, "div", 104)(595, "div", 39)(596, "div", 40)(597, "h6", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](598, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](599, "ul")(600, "li")(601, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](602, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](603, "li")(604, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](605, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](606, "div", 7)(607, "div", 44)(608, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](609, "No Bookmarks Found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](610, "div", 105)(611, "div", 39)(612, "div", 40)(613, "h6", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](614, "Holidays");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](615, "ul")(616, "li")(617, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](618, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](619, "li")(620, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](621, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](622, "div", 7)(623, "div", 44)(624, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](625, "No Bookmarks Found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](626, "div", 106)(627, "div", 39)(628, "div", 40)(629, "h6", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](630, "Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](631, "ul")(632, "li")(633, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](634, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](635, "li")(636, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](637, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](638, "div", 7)(639, "div", 44)(640, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](641, "No Bookmarks Found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](642, "div", 107)(643, "div", 39)(644, "div", 40)(645, "h6", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](646, "Orgenization");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](647, "ul")(648, "li")(649, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](650, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](651, "li")(652, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](653, "app-feather-icons", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](654, "div", 7)(655, "div", 44)(656, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](657, "No Bookmarks Found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](658, "app-add-bookmark", null, 108)(660, "app-edit-bookmark", null, 109)(662, "app-create-tag", null, 110);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Bookmark")("items", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](86, _c3))("active_item", "Bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "plus-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("list-bookmark", ctx.listBookmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "edit-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "share-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "edit-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "share-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "edit-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "share-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "edit-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "share-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "edit-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "share-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "edit-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "share-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "edit-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "share-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "edit-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "share-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "edit-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "share-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "edit-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "share-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "edit-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "share-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "edit-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "share-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "list");
      }
    },
    dependencies: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_4__.FeatherIconsComponent, _modal_add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_0__.AddBookmarkComponent, _modal_edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_1__.EditBookmarkComponent, _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_2__.CreateTagComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 10413:
/*!***************************************************************!*\
  !*** ./src/app/components/apps/bookmarks/bookmarks.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookmarksModule: () => (/* binding */ BookmarksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 56208);
/* harmony import */ var _bookmarks_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookmarks-routing.module */ 70295);
/* harmony import */ var _bookmarks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookmarks.component */ 98665);
/* harmony import */ var _modal_add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/add-bookmark/add-bookmark.component */ 46781);
/* harmony import */ var _modal_edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/edit-bookmark/edit-bookmark.component */ 90149);
/* harmony import */ var _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/create-tag/create-tag.component */ 45258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);








class BookmarksModule {
  static #_ = this.ɵfac = function BookmarksModule_Factory(t) {
    return new (t || BookmarksModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: BookmarksModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _bookmarks_routing_module__WEBPACK_IMPORTED_MODULE_1__.BookmarksRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BookmarksModule, {
    declarations: [_bookmarks_component__WEBPACK_IMPORTED_MODULE_2__.BookmarksComponent, _modal_add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_3__.AddBookmarkComponent, _modal_edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_4__.EditBookmarkComponent, _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_5__.CreateTagComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _bookmarks_routing_module__WEBPACK_IMPORTED_MODULE_1__.BookmarksRoutingModule]
  });
})();

/***/ }),

/***/ 46781:
/*!****************************************************************************************!*\
  !*** ./src/app/components/apps/bookmarks/modal/add-bookmark/add-bookmark.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddBookmarkComponent: () => (/* binding */ AddBookmarkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);






const _c0 = ["addBookmark"];
function AddBookmarkComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddBookmarkComponent_ng_template_0_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "form", 5)(6, "div", 6)(7, "div", 7)(8, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Web Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 14)(23, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "My Bookmarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Collection");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 16)(29, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "fs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class AddBookmarkComponent {
  constructor(platformId, modalService) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.modalOpen = false;
  }
  ngOnInit() {}
  openModal() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.addBookmark, {
        size: 'lg',
        ariaLabelledBy: 'modal-bookmark',
        centered: true,
        windowClass: 'modal-bookmark'
      }).result.then(result => {
        this.modalOpen = true;
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
  }
  static #_ = this.ɵfac = function AddBookmarkComponent_Factory(t) {
    return new (t || AddBookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AddBookmarkComponent,
    selectors: [["app-add-bookmark"]],
    viewQuery: function AddBookmarkComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addBookmark = _t.first);
      }
    },
    decls: 2,
    vars: 0,
    consts: [["addBookmark", ""], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", "data-original-title", "", "title", "", 1, "btn-close", 3, "click"], [1, "modal-body"], ["id", "bookmark-form", "novalidate", "", 1, "form-bookmark", "needs-validation"], [1, "row"], [1, "form-group", "col-md-12"], ["for", "bm-weburl"], ["id", "bm-weburl", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], ["for", "bm-title"], ["id", "bm-title", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], ["id", "bm-desc", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-group", "col-md-6", "mb-0"], ["id", "bm-group", 1, "js-example-basic-single"], ["value", "bookmark"], ["id", "bm-collection", 1, "js-example-disabled-results"], ["value", "general"], ["value", "fs"], ["id", "index_var", "type", "hidden", "value", "6"], ["id", "Bookmark", "type", "submit", 1, "btn", "btn-secondary", "me-1"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "me-1"]],
    template: function AddBookmarkComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddBookmarkComponent_ng_template_0_Template, 38, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 45258:
/*!************************************************************************************!*\
  !*** ./src/app/components/apps/bookmarks/modal/create-tag/create-tag.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTagComponent: () => (/* binding */ CreateTagComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);






const _c0 = ["createTag"];
function CreateTagComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTagComponent_ng_template_0_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "form", 5)(6, "div", 6)(7, "div", 7)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tag Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tag color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class CreateTagComponent {
  constructor(platformId, modalService) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.modalOpen = false;
  }
  ngOnInit() {}
  openModal() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.CreateTag, {
        size: 'lg',
        ariaLabelledBy: 'modal-bookmark',
        centered: true,
        windowClass: 'modal-bookmark'
      }).result.then(result => {
        this.modalOpen = true;
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
  }
  static #_ = this.ɵfac = function CreateTagComponent_Factory(t) {
    return new (t || CreateTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CreateTagComponent,
    selectors: [["app-create-tag"]],
    viewQuery: function CreateTagComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.CreateTag = _t.first);
      }
    },
    decls: 2,
    vars: 0,
    consts: [["createTag", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["novalidate", "", 1, "form-bookmark", "needs-validation"], [1, "row"], [1, "form-group", "col-md-12"], ["type", "text", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-group", "col-md-12", "mb-0"], ["type", "color", "value", "#563d7c", 1, "form-control", "form-control-color"], ["type", "button", 1, "btn", "btn-secondary", "me-1"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "me-1"]],
    template: function CreateTagComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CreateTagComponent_ng_template_0_Template, 19, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 90149:
/*!******************************************************************************************!*\
  !*** ./src/app/components/apps/bookmarks/modal/edit-bookmark/edit-bookmark.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditBookmarkComponent: () => (/* binding */ EditBookmarkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);






const _c0 = ["editBookmark"];
function EditBookmarkComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditBookmarkComponent_ng_template_0_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "form", 5)(6, "div", 6)(7, "div", 7)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Web Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cuba is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 12)(24, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "My Bookmarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11)(27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Collection");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 14)(30, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "fs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class EditBookmarkComponent {
  constructor(platformId, modalService) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.modalOpen = false;
  }
  ngOnInit() {}
  openModal() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.EditBookmark, {
        size: 'lg',
        ariaLabelledBy: 'modal-bookmark',
        centered: true,
        windowClass: 'modal-bookmark'
      }).result.then(result => {
        this.modalOpen = true;
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
  }
  static #_ = this.ɵfac = function EditBookmarkComponent_Factory(t) {
    return new (t || EditBookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EditBookmarkComponent,
    selectors: [["app-edit-bookmark"]],
    viewQuery: function EditBookmarkComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.EditBookmark = _t.first);
      }
    },
    decls: 2,
    vars: 0,
    consts: [["editBookmark", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["novalidate", "", 1, "form-bookmark", "needs-validation"], [1, "row"], [1, "form-group", "col-md-12"], ["id", "editurl", "type", "text", "required", "", "autocomplete", "off", "value", "http://admin.pixelstrap.com/Cuba/ltr/landing-page.html", 1, "form-control"], ["id", "edittitle", "type", "text", "required", "", "autocomplete", "off", "value", "Admin Template", 1, "form-control"], ["id", "editdesc", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-group", "col-md-6", "mb-0"], [1, "js-example-basic-single"], ["value", "AL"], [1, "js-example-disabled-results"], ["value", "general"], ["value", "fs"], ["type", "button", 1, "btn", "btn-secondary", "me-1"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "me-1"]],
    template: function EditBookmarkComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditBookmarkComponent_ng_template_0_Template, 38, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_bookmarks_bookmarks_module_ts.js.map