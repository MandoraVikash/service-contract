"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_contacts_contacts_module_ts"],{

/***/ 68927:
/*!*********************************************************************!*\
  !*** ./src/app/components/apps/contacts/contacts-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactsRoutingModule: () => (/* binding */ ContactsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.component */ 8862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _contacts_component__WEBPACK_IMPORTED_MODULE_0__.ContactsComponent
  }]
}];
class ContactsRoutingModule {
  static #_ = this.ɵfac = function ContactsRoutingModule_Factory(t) {
    return new (t || ContactsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ContactsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8862:
/*!****************************************************************!*\
  !*** ./src/app/components/apps/contacts/contacts.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactsComponent: () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var _modal_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/add-contact/add-contact.component */ 43561);
/* harmony import */ var _modal_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/add-category/add-category.component */ 23786);
/* harmony import */ var _modal_print_contact_print_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/print-contact/print-contact.component */ 3345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);










const _c0 = ["addContact"];
const _c1 = ["addCategory"];
const _c2 = ["print"];
const _c3 = function () {
  return ["Apps"];
};
const _c4 = function (a0) {
  return {
    "display": a0
  };
};
class ContactsComponent {
  constructor() {
    this.history = false;
    this.editContact = false;
  }
  ngOnInit() {}
  showHistory() {
    this.history = !this.history;
  }
  static #_ = this.ɵfac = function ContactsComponent_Factory(t) {
    return new (t || ContactsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ContactsComponent,
    selectors: [["app-contacts"]],
    viewQuery: function ContactsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.AddContact = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.AddCategory = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.Print = _t.first);
      }
    },
    decls: 608,
    vars: 12,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "email-wrap", "bookmark-wrap"], [1, "row"], [1, "col-xl-3", "box-col-3"], [1, "email-left-aside"], [1, "card"], [1, "card-body"], [1, "email-app-sidebar", "left-bookmark"], [1, "media"], [1, "media-size-email"], ["src", "assets/images/user/user.png", "alt", "", 1, "me-3", "rounded-circle"], [1, "media-body"], [1, "f-w-600"], ["role", "tablist", 1, "nav", "main-menu", "contact-options"], [1, "nav-item"], ["type", "button", 1, "badge-light-primary", "w-100", "btn-mail", 3, "click"], ["data-feather", "users", 1, "me-2"], [1, "main-title"], ["id", "pills-personal-tab", "data-bs-toggle", "pill", "href", "#pills-personal", "role", "tab", "aria-controls", "pills-personal", "aria-selected", "true"], [1, "title"], ["type", "button", 1, "btn", "btn-category", 3, "click"], ["id", "pills-organization-tab", "data-bs-toggle", "pill", "href", "#pills-organization", "role", "tab", "aria-controls", "pills-organization", "aria-selected", "false", 1, "show"], ["href", "javascript:void(0)"], [1, "col-xl-9", "col-md-12", "box-col-9"], [1, "email-right-aside", "bookmark-tabcontent", "contacts-tabs"], [1, "card", "email-body", "radius-left"], [1, "ps-0"], [1, "tab-content"], ["id", "pills-personal", "role", "tabpanel", "aria-labelledby", "pills-personal-tab", 1, "tab-pane", "fade", "active", "show"], [1, "card", "mb-0"], [1, "card-header", "d-flex"], [1, "f-14", "pull-right", "mt-0"], [1, "card-body", "p-0"], ["id", "addcon", 1, "row", "list-persons"], [1, "col-xl-4", "xl-50", "col-md-5"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["id", "v-pills-user-tab", "data-bs-toggle", "pill", "href", "#v-pills-user", "role", "tab", "aria-controls", "v-pills-user", "aria-selected", "true", 1, "contact-tab-0", "nav-link", "active"], ["src", "assets/images/user/2.png", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle", "update_img_0"], [1, "first_name_0"], [1, "last_name_0"], [1, "email_add_0"], ["id", "v-pills-profile-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "v-pills-profile", "aria-selected", "false", 1, "contact-tab-1", "nav-link"], ["src", "assets/images/user/8.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle", "update_img_1"], [1, "first_name_1"], [1, "last_name_1"], [1, "email_add_1"], ["id", "v-pills-messages-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "v-pills-messages", "aria-selected", "false", 1, "contact-tab-2", "nav-link"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle", "update_img_2"], [1, "first_name_2"], [1, "last_name_2"], [1, "email_add_2"], ["id", "v-pills-settings-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "v-pills-settings", "aria-selected", "false", 1, "contact-tab-3", "nav-link"], ["src", "assets/images/user/14.png", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle", "update_img_3"], [1, "first_name_3"], [1, "last_name_3"], [1, "email__3"], ["id", "v-pills-contact1-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "v-pills-settings", "aria-selected", "false", 1, "contact-tab-4", "nav-link"], ["src", "assets/images/user/5.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle", "update_img_4"], [1, "first_name_4"], [1, "last_name_4"], [1, "email_add_4"], ["id", "v-pills-contact8-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "v-pills-settings", "aria-selected", "false", 1, "contact-tab-5", "nav-link"], ["src", "assets/images/avtar/11.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle", "update_img_5"], [1, "first_name_5"], [1, "last_name_5"], [1, "email_add_5"], ["id", "v-pills-contact3-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "v-pills-settings", "aria-selected", "false", 1, "contact-tab-6", "nav-link"], ["src", "assets/images/avtar/16.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle", "update_img_6"], [1, "first_name_6"], [1, "last_name_6"], [1, "email_add_6"], [1, "col-xl-8", "xl-50", "col-md-7"], ["id", "v-pills-tabContent", 1, "tab-content", 3, "ngStyle"], ["id", "v-pills-user", "role", "tabpanel", "aria-labelledby", "v-pills-user-tab", 1, "tab-pane", "contact-tab-0", "tab-content-child", "fade", "show", "active"], [1, "profile-mail"], ["src", "assets/images/user/2.png", "alt", "", 1, "img-100", "img-fluid", "m-r-20", "rounded-circle", "update_img_0"], ["type", "file", "name", "img", 1, "updateimg"], [1, "media-body", "mt-0"], ["href", "javascript:void(0)", 3, "click"], [1, "email-general"], [1, "mb-3"], [1, "font-primary", "first_name_0"], [1, "font-primary"], [1, "birth_day_0"], [1, "birth_month_0", "ms-1"], [1, "birth_year_0", "ms-1"], [1, "font-primary", "personality_0"], [1, "font-primary", "city_0"], [1, "font-primary", "mobile_num_0"], [1, "font-primary", "email_add_0"], [1, "font-primary", "url_add_0"], [1, "font-primary", "interest_0"], [1, "contact-editform", "ps-0", 3, "ngStyle"], [1, "row", "g-2"], [1, "mt-0", "mb-3", "col-md-12"], [1, "col-sm-6"], ["id", "first_name", "type", "text", "required", "", "placeholder", "First Name", "value", "first_name", 1, "form-control"], ["id", "last_name", "type", "text", "required", "", "placeholder", "Last Name", "value", "last_name", 1, "form-control"], ["id", "email_add", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], ["id", "mobile_num", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-control"], [1, "row", "more-data"], [1, "form-group", "mb-3", "col-md-12"], [1, "col-lg-6", "col-sm-6"], ["id", "url_add", "type", "text", "required", "", 1, "form-control"], [1, "col-lg-4", "col-sm-6"], [1, "js-example-basic-single"], ["value", "pw"], ["value", "cw"], ["value", "fb"], ["value", "tw"], [1, "d-block"], ["for", "edo-ani", 1, "me-3"], ["id", "edo-ani", "type", "radio", "name", "rdo-ani", "checked", "", 1, "radio_animated"], ["for", "edo-ani1"], ["id", "edo-ani1", "type", "radio", "name", "rdo-ani", 1, "radio_animated"], [1, "col-lg-2", "col-sm-4"], ["id", "birth_day", 1, "form-control"], [1, "col-lg-3", "col-sm-4"], ["id", "birth_month", 1, "form-control"], ["id", "birth_year", "type", "text", 1, "form-control"], ["id", "personality", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], ["id", "interest", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], [1, "mb-3", "col-md-12"], [1, "col-12"], [1, "mb-2"], ["type", "text", "placeholder", "Address", 1, "form-control"], ["id", "city", "type", "text", "placeholder", "City", 1, "form-control"], ["type", "text", "placeholder", "State", 1, "form-control"], ["type", "text", "placeholder", "Country", 1, "form-control"], ["type", "text", "placeholder", "Pin Code", 1, "form-control"], ["type", "button", 1, "btn", "btn-secondary", "update-contact"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "pills-organization", "role", "tabpanel", "aria-labelledby", "pills-organization", 1, "fade", "tab-pane"], [1, "row", "list-persons"], ["id", "v-pills-tab1", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["id", "v-pills-iduser-tab", "data-bs-toggle", "pill", "href", "#v-pills-iduser", "role", "tab", "aria-controls", "v-pills-iduser", "aria-selected", "true", 1, "nav-link", "active"], ["src", "assets/images/user/user.png", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["id", "v-pills-iduser1-tab", "data-bs-toggle", "pill", "href", "#v-pills-iduser1", "role", "tab", "aria-controls", "v-pills-iduser1", "aria-selected", "false", 1, "nav-link"], ["src", "assets/images/user/3.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["id", "v-pills-iduser2-tab", "data-bs-toggle", "pill", "href", "#v-pills-iduser2", "role", "tab", "aria-controls", "v-pills-iduser2", "aria-selected", "false", 1, "nav-link"], ["src", "assets/images/user/4.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["id", "v-pills-iduser3-tab", "data-bs-toggle", "pill", "href", "#v-pills-iduser3", "role", "tab", "aria-controls", "v-pills-iduser3", "aria-selected", "false", 1, "nav-link"], ["src", "assets/images/user/10.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["id", "v-pills-tabContent1", 1, "tab-content"], ["id", "v-pills-iduser", "role", "tabpanel", "aria-labelledby", "v-pills-iduser-tab", 1, "tab-pane", "fade", "show", "active"], ["src", "assets/images/user/user.png", "alt", "", 1, "img-100", "img-fluid", "m-r-20", "rounded-circle", "update_img_5"], [1, "font-primary", "email_add_5"], [1, "gender"], ["id", "v-pills-iduser1", "role", "tabpanel", "aria-labelledby", "v-pills-iduser1-tab", 1, "tab-pane", "fade"], ["src", "assets/images/user/3.jpg", "alt", "", 1, "img-100", "img-fluid", "m-r-20", "rounded-circle", "update_img_6"], [1, "font-primary", "email_add_6"], ["id", "v-pills-iduser2", "role", "tabpanel", "aria-labelledby", "v-pills-iduser2-tab", 1, "tab-pane", "fade"], ["src", "assets/images/user/4.jpg", "alt", "", 1, "img-100", "img-fluid", "m-r-20", "rounded-circle", "update_img_7"], [1, "first_name_7"], [1, "last_name_7"], [1, "email_add_7"], [1, "font-primary", "email_add_7"], ["id", "v-pills-iduser3", "role", "tabpanel", "aria-labelledby", "v-pills-iduser3-tab", 1, "tab-pane", "fade"], ["src", "assets/images/user/10.jpg", "alt", "", 1, "img-100", "img-fluid", "m-r-20", "rounded-circle", "update_img_8"], [1, "first_name_8"], [1, "last_name_8"], [1, "email_add_8"], [1, "font-primary", "email_add_8"], ["id", "right-history"], [1, "modal-header", "p-20", 3, "click"], [1, "modal-title", "w-100"], [1, "pull-right"], ["href", "javascript:void(0)", 1, "closehistory"], [1, "icofont", "icofont-close"], [1, "history-details"], [1, "text-center"], [1, "icofont", "icofont-ui-edit"], [1, "icofont", "icofont-star", "me-3"], [1, "mt-0"], [1, "mb-0"], [1, "f-12"], ["addContact", ""], ["addCategory", ""], ["print", ""]],
    template: function ContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 12)(13, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "MARK JENCO");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Markjecno@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ul", 14)(18, "li", 15)(19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_19_listener() {
          return ctx.AddContact.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " New Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li", 15)(23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "li")(26, "a", 19)(27, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "li")(30, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_30_listener() {
          return ctx.AddCategory.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " + Add Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "li")(34, "a", 22)(35, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "li")(38, "a", 23)(39, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Follow up");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "li")(42, "a", 23)(43, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "li")(46, "a", 23)(47, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Ideas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "li")(50, "a", 23)(51, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "li")(54, "a", 23)(55, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "li")(58, "a", 23)(59, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Holidays");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 24)(62, "div", 25)(63, "div", 26)(64, "div", 27)(65, "div", 28)(66, "div", 29)(67, "div", 30)(68, "div", 31)(69, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "5 Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 33)(74, "div", 34)(75, "div", 35)(76, "div", 36)(77, "a", 37)(78, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 12)(81, "h6")(82, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Bucky ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Barnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "barnes@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "a", 42)(89, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 12)(92, "h6")(93, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "Comeren ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "Diaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "comeren@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "a", 47)(100, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 12)(103, "h6")(104, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "Issa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Bell");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "issabell@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "a", 52)(111, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](112, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "div", 12)(114, "h6")(115, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, "Andew ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "Jon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120, "andewjon@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "a", 57)(122, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](123, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "div", 12)(125, "h6")(126, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "Jason ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "Borne");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "jasonb@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "a", 62)(133, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](134, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "div", 12)(136, "h6")(137, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "Monty ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "Carlo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, "monty@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "a", 67)(144, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](145, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "div", 12)(147, "h6")(148, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, "Brock ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, "Lee");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](153, "lee@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "div", 72)(155, "div", 73)(156, "div", 74)(157, "div", 75)(158, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](159, "img", 76)(160, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "div", 78)(162, "h5")(163, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164, "Bucky ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](166, "Barnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, "barnes@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "ul")(170, "li")(171, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_171_listener() {
          return ctx.editContact = true;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "li")(174, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](175, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "li")(177, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_177_listener() {
          return ctx.showHistory();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "li")(180, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_180_listener() {
          return ctx.Print.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](181, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "div", 80)(183, "h6", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](184, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "ul")(186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](189, "Bucky");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](191, "Gender ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](192, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](193, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](194, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](195, "Birthday");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](196, "span", 83)(197, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](198, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](199, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](200, "May");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](202, "1994");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](204, "Personality");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](205, "span", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](206, "Cool");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](207, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](208, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](209, "span", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](210, "moline acres");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](212, "Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](213, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](214, "+0 1800 76855");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](215, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](216, "Email Addr ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](217, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](218, "barnes@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](219, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](220, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](221, "span", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](222, "www.test.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](223, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](224, "Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](225, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](226, "photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](227, "div", 93)(228, "form")(229, "div", 94)(230, "div", 95)(231, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](232, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "div", 3)(234, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](235, "input", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](236, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](237, "input", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](238, "div", 95)(239, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](240, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](241, "input", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](242, "div", 95)(243, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](244, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](245, "div", 3)(246, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](247, "input", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](248, "div", 96)(249, "select", 101)(250, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](251, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](252, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](253, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](254, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](255, "Others");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](256, "div", 102)(257, "div", 103)(258, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](259, "URLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](260, "div", 3)(261, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](262, "input", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](263, "div", 106)(264, "select", 107)(265, "option", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](266, "Personal web address");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](267, "option", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](268, "Company web address");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](269, "option", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](270, "Fabebook URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](271, "option", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](272, "Twitter URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](273, "div", 95)(274, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](275, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](276, "div", 112)(277, "label", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](278, "input", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](279, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](280, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](281, "label", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](282, "input", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](283, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](284, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](285, "div", 95)(286, "div", 3)(287, "div", 117)(288, "select", 118)(289, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](290, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](291, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](292, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](294, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](295, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](296, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](297, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](298, "04");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](299, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](300, "05");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](301, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](302, "06");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](303, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](304, "07");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](305, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](306, "08");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](307, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](308, "09");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](309, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](310, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](311, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](312, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](313, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](314, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](315, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](316, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](317, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](318, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](319, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](320, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](321, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](322, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](323, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](324, "17");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](325, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](326, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](327, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](328, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](329, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](330, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](331, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](332, "21");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](333, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](334, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](335, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](336, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](337, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](338, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](339, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](340, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](341, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](342, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](343, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](344, "27");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](345, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](346, "28");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](347, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](348, "29");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](349, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](350, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](351, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](352, "31");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](353, "div", 119)(354, "select", 120)(355, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](356, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](357, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](358, "January");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](359, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](360, "February");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](361, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](362, "March");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](363, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](364, "April");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](365, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](366, "May");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](367, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](368, "June");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](369, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](370, "July");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](371, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](372, "August");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](373, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](374, "September");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](375, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](376, "October");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](377, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](378, "November");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](379, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](380, "December");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](381, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](382, "input", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](383, "div", 95)(384, "div", 3)(385, "div", 96)(386, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](387, "Personality");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](388, "input", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](389, "div", 96)(390, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](391, "Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](392, "input", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](393, "div", 124)(394, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](395, "Home Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](396, "div", 3)(397, "div", 125)(398, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](399, "input", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](400, "div", 96)(401, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](402, "input", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](403, "div", 96)(404, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](405, "input", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](406, "div", 96)(407, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](408, "input", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](409, "div", 96)(410, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](411, "input", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](412, "button", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](413, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](414, "button", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](415, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](416, "div", 134)(417, "div", 30)(418, "div", 31)(419, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](420, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](421, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](422, "10 Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](423, "div", 33)(424, "div", 135)(425, "div", 35)(426, "div", 136)(427, "a", 137)(428, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](429, "img", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](430, "div", 12)(431, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](432, "Mark jecno");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](433, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](434, "markjecno@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](435, "a", 139)(436, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](437, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](438, "div", 12)(439, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](440, "Jason Borne");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](441, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](442, "jasonb@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](443, "a", 141)(444, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](445, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](446, "div", 12)(447, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](448, "Sarah Loren");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](449, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](450, "barnes@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](451, "a", 143)(452, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](453, "img", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](454, "div", 12)(455, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](456, "Andew Jon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](457, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](458, "andrewj@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](459, "div", 72)(460, "div", 145)(461, "div", 146)(462, "div", 75)(463, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](464, "img", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](465, "div", 78)(466, "h5")(467, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](468, "Mark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](469, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](470, "jecno");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](471, "p", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](472, "markjecno@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](473, "ul")(474, "li")(475, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_475_listener() {
          return ctx.Print.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](476, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](477, "div", 80)(478, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](479, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](480, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](481, "Email Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](482, "span", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](483, "markjecno@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](484, "div", 149)(485, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](486, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](487, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](488, "Gender: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](489, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](490, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](491, "div", 150)(492, "div", 75)(493, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](494, "img", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](495, "div", 78)(496, "h5")(497, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](498, "Jason ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](499, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](500, "Borne");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](501, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](502, "jasonb@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](503, "ul")(504, "li")(505, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_505_listener() {
          return ctx.Print.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](506, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](507, "div", 80)(508, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](509, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](510, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](511, "Email Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](512, "span", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](513, "jasonb@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](514, "div", 149)(515, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](516, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](517, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](518, "Gender: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](519, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](520, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](521, "div", 153)(522, "div", 75)(523, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](524, "img", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](525, "div", 78)(526, "h5")(527, "span", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](528, "Sarah ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](529, "span", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](530, "Loren");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](531, "p", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](532, "barnes@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](533, "ul")(534, "li")(535, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_535_listener() {
          return ctx.Print.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](536, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](537, "div", 80)(538, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](539, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](540, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](541, "Email Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](542, "span", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](543, "barnes@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](544, "div", 149)(545, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](546, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](547, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](548, "Gender: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](549, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](550, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](551, "div", 159)(552, "div", 75)(553, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](554, "img", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](555, "div", 78)(556, "h5")(557, "span", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](558, "Andew ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](559, "span", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](560, "Jon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](561, "p", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](562, "andrewj@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](563, "ul")(564, "li")(565, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactsComponent_Template_a_click_565_listener() {
          return ctx.Print.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](566, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](567, "div", 80)(568, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](569, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](570, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](571, "Email Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](572, "span", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](573, "andrewj@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](574, "div", 149)(575, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](576, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](577, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](578, "Gender: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](579, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](580, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](581, "div", 165)(582, "div", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactsComponent_Template_div_click_582_listener() {
          return ctx.showHistory();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](583, "h6", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](584, "Contact History");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](585, "span", 168)(586, "a", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](587, "i", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](588, "div", 171)(589, "div", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](590, "i", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](591, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](592, "Contact has not been modified yet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](593, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](594, "i", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](595, "div", 78)(596, "h6", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](597, "Contact Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](598, "p", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](599, "Contact is created via mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](600, "span", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](601, "Sep 10, 2022 4:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](602, "app-add-contact", null, 178)(604, "app-add-category", null, 179)(606, "app-print-contact", null, 180);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Contact")("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c3))("active_item", "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c4, ctx.editContact ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c4, !ctx.editContact ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](354);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("show", ctx.history);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _modal_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_0__.AddContactComponent, _modal_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_1__.AddCategoryComponent, _modal_print_contact_print_contact_component__WEBPACK_IMPORTED_MODULE_2__.PrintContactComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 87521:
/*!*************************************************************!*\
  !*** ./src/app/components/apps/contacts/contacts.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactsModule: () => (/* binding */ ContactsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 56208);
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts-routing.module */ 68927);
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.component */ 8862);
/* harmony import */ var _modal_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/add-contact/add-contact.component */ 43561);
/* harmony import */ var _modal_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/add-category/add-category.component */ 23786);
/* harmony import */ var _modal_print_contact_print_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/print-contact/print-contact.component */ 3345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);








class ContactsModule {
  static #_ = this.ɵfac = function ContactsModule_Factory(t) {
    return new (t || ContactsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: ContactsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _contacts_routing_module__WEBPACK_IMPORTED_MODULE_1__.ContactsRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ContactsModule, {
    declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_2__.ContactsComponent, _modal_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_3__.AddContactComponent, _modal_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__.AddCategoryComponent, _modal_print_contact_print_contact_component__WEBPACK_IMPORTED_MODULE_5__.PrintContactComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _contacts_routing_module__WEBPACK_IMPORTED_MODULE_1__.ContactsRoutingModule]
  });
})();

/***/ }),

/***/ 23786:
/*!***************************************************************************************!*\
  !*** ./src/app/components/apps/contacts/modal/add-category/add-category.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddCategoryComponent: () => (/* binding */ AddCategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);






const _c0 = ["addCategory"];
function AddCategoryComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCategoryComponent_ng_template_0_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "form", 5)(6, "div", 6)(7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class AddCategoryComponent {
  constructor(platformId, modalService) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.modalOpen = false;
  }
  ngOnInit() {}
  openModal() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.AddCategory, {
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
  static #_ = this.ɵfac = function AddCategoryComponent_Factory(t) {
    return new (t || AddCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AddCategoryComponent,
    selectors: [["app-add-category"]],
    viewQuery: function AddCategoryComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.AddCategory = _t.first);
      }
    },
    decls: 2,
    vars: 0,
    consts: [["addCategory", ""], [1, "modal-header"], ["id", "exampleModalLabel1", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form-bookmark"], [1, "row"], [1, "form-group", "mb-3", "col-md-12", "my-0"], ["type", "text", "required", "", "placeholder", "Enter category name", "autocomplete", "off", 1, "form-control"], ["type", "button", 1, "btn", "btn-secondary", "me-1"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary"]],
    template: function AddCategoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddCategoryComponent_ng_template_0_Template, 13, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 43561:
/*!*************************************************************************************!*\
  !*** ./src/app/components/apps/contacts/modal/add-contact/add-contact.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddContactComponent: () => (/* binding */ AddContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);






const _c0 = ["addContact"];
function AddContactComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddContactComponent_ng_template_0_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "form", 5)(6, "div", 6)(7, "div", 7)(8, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14)(20, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6)(23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9)(26, "select", 17)(27, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Work");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Others");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class AddContactComponent {
  constructor(platformId, modalService) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.modalOpen = false;
  }
  ngOnInit() {}
  openModal() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.AddContact, {
        size: 'lg',
        ariaLabelledBy: 'modal',
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
  static #_ = this.ɵfac = function AddContactComponent_Factory(t) {
    return new (t || AddContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AddContactComponent,
    selectors: [["app-add-contact"]],
    viewQuery: function AddContactComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.AddContact = _t.first);
      }
    },
    decls: 2,
    vars: 0,
    consts: [["addContact", ""], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["id", "bookmark-form", "novalidate", "", 1, "form-bookmark", "needs-validation"], [1, "row"], [1, "form-group", "mb-3", "col-md-12"], ["for", "con-name"], [1, "col-sm-6"], ["id", "con-name", "type", "text", "required", "", "placeholder", "First Name", "autocomplete", "off", 1, "form-control"], ["id", "con-last", "type", "text", "required", "", "placeholder", "Last Name", "autocomplete", "off", 1, "form-control"], ["for", "con-mail"], ["id", "con-mail", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-group", "mb-3", "col-md-12", "my-0"], ["for", "con-phone"], ["id", "con-phone", "type", "number", "required", "", "autocomplete", "off", 1, "form-control"], ["id", "con-select", 1, "form-control"], ["id", "index_var", "type", "hidden", "value", "5"], ["type", "submit", 1, "btn", "btn-secondary", "me-1"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "me-1"]],
    template: function AddContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddContactComponent_ng_template_0_Template, 38, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3345:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/apps/contacts/modal/print-contact/print-contact.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrintContactComponent: () => (/* binding */ PrintContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);





const _c0 = ["print"];
function PrintContactComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Print preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintContactComponent_ng_template_0_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8)(9, "h5")(10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Bucky ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Barnes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "barnes@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12)(17, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email Address: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "barnes@gmail.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class PrintContactComponent {
  constructor(platformId, modalService) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.modalOpen = false;
  }
  ngOnInit() {}
  openModal() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.Print, {
        size: 'lg',
        ariaLabelledBy: 'modal',
        centered: true,
        windowClass: 'modal'
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
  static #_ = this.ɵfac = function PrintContactComponent_Factory(t) {
    return new (t || PrintContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PrintContactComponent,
    selectors: [["app-print-contact"]],
    viewQuery: function PrintContactComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.Print = _t.first);
      }
    },
    decls: 2,
    vars: 0,
    consts: [["print", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", "list-persons"], ["id", "DivIdToPrint", 1, "profile-mail", "pt-0"], [1, "media"], ["id", "updateimg", "src", "assets/images/user/2.png", "alt", "", 1, "img-100", "img-fluid", "m-r-20", "rounded-circle"], [1, "media-body", "mt-0"], ["id", "printname"], ["id", "printlast"], ["id", "printmail"], [1, "email-general"], ["id", "mailadd", 1, "font-primary"], ["id", "btnPrint", "type", "button", 1, "btn", "btn-secondary", "me-1"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "me-1"]],
    template: function PrintContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PrintContactComponent_ng_template_0_Template, 27, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_contacts_contacts_module_ts.js.map