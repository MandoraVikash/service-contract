"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_email_email_module_ts"],{

/***/ 12317:
/*!***************************************************************!*\
  !*** ./src/app/components/apps/email/email-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailRoutingModule: () => (/* binding */ EmailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.component */ 85909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _email_component__WEBPACK_IMPORTED_MODULE_0__.EmailComponent
  }]
}];
class EmailRoutingModule {
  static #_ = this.ɵfac = function EmailRoutingModule_Factory(t) {
    return new (t || EmailRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: EmailRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmailRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 85909:
/*!**********************************************************!*\
  !*** ./src/app/components/apps/email/email.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailComponent: () => (/* binding */ EmailComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_email_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/email/email */ 88638);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ 37914);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 18301);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);

// import { Email } from '../../../shared/model/email.model';







function EmailComponent_a_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 24)(1, "div", 9)(2, "label", 99)(3, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function EmailComponent_a_121_Template_input_change_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const userEmail_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.selectedmail($event, userEmail_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_a_121_Template_div_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const userEmail_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.selectedUserEmail(userEmail_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_a_121_Template_div_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const userEmail_r2 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.selectedUserEmail(userEmail_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "(");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const userEmail_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", userEmail_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", userEmail_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](userEmail_r2.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](userEmail_r2.cc);
  }
}
function EmailComponent_ng_container_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 104)(2, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "No mail found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function () {
  return ["Apps", "Ecommerce"];
};
const _c1 = function (a0) {
  return {
    "active show": a0
  };
};
class EmailComponent {
  constructor() {
    this.compose = true;
    this.allEmails = _shared_data_email_email__WEBPACK_IMPORTED_MODULE_0__.Mail.Emails;
    this.selectedEmails = [];
    this.ClassicEditor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
  }
  ngOnInit() {}
  getUserEmail(type) {
    let emails = [];
    return this.allEmails.filter(email => {
      if (type == 'allmail') {
        return emails.push(email);
      } else if (type == 'favourite') {
        if (email.favourite) {
          return emails.push(email);
        }
      } else if (email.type === type) {
        return emails.push(email);
      }
    });
  }
  selectedUserEmail(email) {
    this.selectEmail = email;
    this.compose = false;
  }
  selectedmail($event, email) {
    var index = this.selectedEmails.indexOf(email);
    if ($event.target.checked === true && index === -1) {
      // val not found, pushing onto array
      this.selectedEmails.push(email);
    } else {
      // val is found, removing from array
      this.selectedEmails.splice(index, 1);
    }
  }
  moveEmails(val) {
    if (!val) return;
    this.selectedEmails.filter(email => {
      return email.type = val;
    });
  }
  addFavourite(email) {
    email.favourite = !email.favourite;
  }
  static #_ = this.ɵfac = function EmailComponent_Factory(t) {
    return new (t || EmailComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: EmailComponent,
    selectors: [["app-email"]],
    decls: 211,
    vars: 32,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "email-wrap"], [1, "row"], [1, "col-xl-3", "col-md-6", "box-col-6"], [1, "email-left-aside"], [1, "card"], [1, "card-body"], [1, "email-app-sidebar"], [1, "media"], [1, "media-size-email"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "me-3", "rounded-circle", "img-60"], [1, "media-body"], [1, "f-w-600"], ["role", "tablist", 1, "nav", "main-menu"], [1, "nav-item"], ["href", "javascript:void(0)", "role", "tab", 1, "btn-primary", "btn-block", "btn-mail", "w-100", "active", 3, "click"], [1, "icofont", "icofont-envelope", "me-2"], [1, "nav-item", 3, "click"], ["href", "javascript:void(0)", "id", "pills-darkprofile-tab", "data-bs-toggle", "pill", "role", "tab", "aria-controls", "pills-darkprofile", "aria-selected", "false", 1, "show"], [1, "title"], [1, "icon-import"], [1, "badge", "pull-right", "digits"], [3, "click"], ["href", "javascript:void(0)"], [1, "icon-folder"], [1, "icon-new-window"], [1, "icon-pencil-alt"], [1, "icon-trash"], [1, "icon-info-alt"], [1, "icon-star"], [1, "icon-email"], [1, "icon-export"], [1, "icon-share"], [1, "icon-file"], [1, "icon-bell"], [1, "icon-notepad"], [1, "email-right-aside"], [1, "card", "email-body"], [1, "pe-0", "b-r-light"], [1, "email-top"], [1, "col"], [1, "col", "text-end"], ["ngbDropdown", "", 1, "dropdown"], ["id", "dropdownMenuButton", "ngbDropdownToggle", "", 1, "btn", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownMenuButton", 1, "email-option-position"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "inbox", "custom-scrollbar"], ["href", "javascript:void(0)", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-xl-6", "col-md-12", "box-col-12"], [1, "card", "email-body", "radius-left"], [1, "ps-0"], [1, "tab-content"], ["id", "pills-darkhome", "role", "tabpanel", "aria-labelledby", "pills-darkhome-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "email-compose"], [1, "email-top", "compose-border"], [1, "col-sm-8", "xl-50"], [1, "mb-0"], [1, "col-sm-4", "btn-middle", "xl-50"], ["type", "button", 1, "btn", "btn-primary", "btn-mail", "text-center", "mb-0", "mt-0", "w-100"], [1, "fa", "fa-paper-plane", "me-2"], [1, "email-wrapper"], [1, "theme-form"], [1, "form-group", "mb-3"], ["for", "exampleInputEmail1", 1, "col-form-label", "pt-0"], ["id", "exampleInputEmail1", "type", "email", 1, "form-control"], ["for", "exampleInputPassword1"], ["id", "exampleInputPassword1", "type", "text", 1, "form-control"], [1, "form-group", "mb-0"], ["data", "<p>Hello, world!</p>", 3, "editor"], ["id", "pills-darkprofile", "role", "tabpanel", "aria-labelledby", "pills-darkprofile-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "email-content"], [1, "col-md-6", "xl-100", "col-sm-12"], ["alt", "image", 1, "me-3", "rounded-circle", "img-50", 3, "src"], [1, "digits"], [1, "col-md-6", "col-sm-12"], [1, "float-end", "d-flex"], [1, "user-emailid"], [1, "fa", "fa-star-o", "f-18", "mt-1", 3, "click"], [3, "innerHTML"], [1, "d-inline-block"], [1, "text-muted"], [1, "icofont", "icofont-clip"], ["href", "javascript:void(0)", 1, "text-muted", "text-end", "right-download"], [1, "fa", "fa-long-arrow-down", "me-2"], [1, "clearfix"], [1, "attachment"], [1, "list-inline"], [1, "list-inline-item"], ["src", "assets/images/email/1.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/email/2.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/email/3.jpg", "alt", "", 1, "img-fluid"], [1, "action-wrapper"], [1, "actions"], ["href", "javascript:void(0)", 1, "text-muted"], [1, "fa", "fa-reply", "me-2"], [1, "fa", "fa-reply-all", "me-2"], [1, "fa", "fa-share", "me-2"], ["for", "chk-ani", 1, "d-block"], ["id", "chk-ani", "name", "chk-ani", "type", "checkbox", 1, "checkbox_animated", 3, "change"], [1, "media-size-email", 3, "click"], ["alt", "", 1, "me-3", "rounded-circle", "img-50", 3, "src"], [1, "media-body", 3, "click"], [1, "search-not-found", "text-center"], [1, ""], ["src", "assets/images/search-not-found.png", "alt", "", 1, "second-search"]],
    template: function EmailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12)(13, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "MARKJENCO");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Markjecno@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ul", 14)(18, "li", 15)(19, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_a_click_19_listener() {
          return ctx.compose = true;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "NEW MAIL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_22_listener() {
          return ctx.getUserEmail(ctx.type = "inbox");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 19)(24, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_29_listener() {
          return ctx.getUserEmail(ctx.type = "allmail");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "a", 24)(31, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " All mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_34_listener() {
          return ctx.getUserEmail(ctx.type = "sent");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "a", 24)(36, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_41_listener() {
          return ctx.getUserEmail(ctx.type = "draft");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "a", 24)(43, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " DRAFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_48_listener() {
          return ctx.getUserEmail(ctx.type = "trash");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "a", 24)(50, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " TRASH");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "li")(56, "a", 24)(57, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " IMPORTANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_60_listener() {
          return ctx.getUserEmail(ctx.type = "favourite");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "a", 24)(62, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Starred");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_67_listener() {
          return ctx.getUserEmail(ctx.type = "unread");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "a", 24)(69, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, " UNREAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_72_listener() {
          return ctx.getUserEmail(ctx.type = "spam");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "a", 24)(74, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " SPAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_77_listener() {
          return ctx.getUserEmail(ctx.type = "outbox");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "a", 24)(79, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, " OUTBOX");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "li")(83, "a", 24)(84, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, " UPDATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "li")(88, "a", 24)(89, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, " ALERT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "li")(93, "a", 24)(94, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, " NOTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "(20)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 4)(100, "div", 37)(101, "div", 38)(102, "div", 39)(103, "div", 40)(104, "div", 3)(105, "div", 41)(106, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](108, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 42)(110, "div", 43)(111, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "More");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 45)(114, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_a_click_114_listener() {
          return ctx.moveEmails("draft");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Move to Draft");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_a_click_116_listener() {
          return ctx.moveEmails("trash");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Move to Trash");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_a_click_118_listener() {
          return ctx.moveEmails("spam");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Move to Spam");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](121, EmailComponent_a_121_Template, 16, 4, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](122, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](123, EmailComponent_ng_container_123_Template, 6, 0, "ng-container", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 50)(125, "div", 37)(126, "div", 51)(127, "div", 52)(128, "div", 53)(129, "div", 54)(130, "div", 55)(131, "div", 56)(132, "div", 3)(133, "div", 57)(134, "h4", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "New Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 59)(137, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](138, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, " SEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 62)(141, "form", 63)(142, "div", 64)(143, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 64)(147, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 69)(151, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "ckeditor", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 71)(155, "div", 72)(156, "div", 40)(157, "div", 3)(158, "div", 73)(159, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 12)(162, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "small")(165, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, " 6:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, " AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 76)(173, "div", 77)(174, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailComponent_Template_i_click_176_listener() {
          return ctx.addFavourite(ctx.selectEmail);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](178, "span", 80)(179, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "div", 81)(181, "h6", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](182, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](183, " ATTACHMENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](185, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "Download All");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](187, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "div", 87)(189, "ul", 88)(190, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](191, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](193, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](195, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](196, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "div", 93)(198, "ul", 94)(199, "li")(200, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](201, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "li")(204, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](206, "Reply All");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "li")(208, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](209, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "Forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Email")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](27, _c0))("active_item", "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx.getUserEmail("inbox").length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx.getUserEmail("sent").length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx.getUserEmail("draft").length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx.getUserEmail("trash").length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.type ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](108, 21, ctx.type) : "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](122, 23, ctx.getUserEmail(ctx.type ? ctx.type : "inbox"), 0, 7));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.getUserEmail(ctx.type ? ctx.type : "inbox").length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](28, _c1, ctx.compose));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editor", ctx.ClassicEditor);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](30, _c1, !ctx.compose));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.selectEmail == null ? null : ctx.selectEmail.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.selectEmail == null ? null : ctx.selectEmail.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx.selectEmail == null ? null : ctx.selectEmail.date, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectEmail == null ? null : ctx.selectEmail.cc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectEmail == null ? null : ctx.selectEmail.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("starred", ctx.selectEmail == null ? null : ctx.selectEmail.favourite);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.selectEmail == null ? null : ctx.selectEmail.text, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorComponent, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 89549:
/*!*******************************************************!*\
  !*** ./src/app/components/apps/email/email.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailModule: () => (/* binding */ EmailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 18301);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 56208);
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-routing.module */ 12317);
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email.component */ 85909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);








class EmailModule {
  static #_ = this.ɵfac = function EmailModule_Factory(t) {
    return new (t || EmailModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: EmailModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _email_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmailRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EmailModule, {
    declarations: [_email_component__WEBPACK_IMPORTED_MODULE_2__.EmailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _email_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmailRoutingModule]
  });
})();

/***/ }),

/***/ 88638:
/*!********************************************!*\
  !*** ./src/app/shared/data/email/email.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mail: () => (/* binding */ Mail)
/* harmony export */ });
class Mail {
  static #_ = this.Emails = [{
    id: 1,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "pork@company.com",
    date: "15 Feb 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 2,
    image: "assets/images/user/2.png",
    name: "Lorm lpsa",
    email: "lpsa@company.com",
    date: "16 Feb 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: true
  }, {
    id: 3,
    image: "assets/images/user/3.jpg",
    name: "Vincent Porter",
    email: "vincent@company.com",
    date: "17 Feb 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 4,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "vincent@company.com",
    date: "18 Feb 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "sent",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 5,
    image: "assets/images/user/2.png",
    name: "Lorm lpsa",
    email: "Lion@company.com",
    date: "19 Feb 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "sent",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 6,
    image: "assets/images/user/3.jpg",
    name: "Vincent Porter",
    email: "solvn@company.com",
    date: "20 Feb 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "sent",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: true
  }, {
    id: 7,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "soft@company.com",
    date: "21 Feb 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "trash",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 8,
    image: "assets/images/user/2.png",
    name: "Lorm lpsa",
    email: "lorapasoft23@company.com",
    date: "1 March 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "trash",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 9,
    image: "assets/images/user/3.jpg",
    name: "Vincent Porter",
    email: "vincent@company.com",
    date: "2 March 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "trash",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 10,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "vincent@company.com",
    date: "15 March 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "draft",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 11,
    image: "assets/images/user/2.png",
    name: "Lorm lpsa",
    email: "herry@company.com",
    date: "16 March 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "draft",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 12,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "john@company.com",
    date: "21 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "outbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: true
  }, {
    id: 13,
    image: "assets/images/user/2.png",
    name: "Lorm lpsa",
    email: "deojoseph@company.com",
    date: "22 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "outbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 14,
    image: "assets/images/user/6.jpg",
    name: "Charlie Porter",
    email: "charle21@company.com",
    date: "23 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "unread",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 15,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 16,
    image: "assets/images/user/8.jpg",
    name: "Ross Singh",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: true
  }, {
    id: 17,
    image: "assets/images/user/14.png",
    name: "Sam Porter",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: true
  }, {
    id: 18,
    image: "assets/images/user/7.jpg",
    name: "Jenisha Trivedi",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 19,
    image: "assets/images/user/8.jpg",
    name: "Ross Singh",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 20,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 21,
    image: "assets/images/user/14.png",
    name: "Sam Porter",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 22,
    image: "assets/images/user/5.jpg",
    name: "Ashiyana Oza",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "sent",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 23,
    image: "assets/images/user/6.jpg",
    name: "Charlie Porter",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "sent",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 24,
    image: "assets/images/user/7.jpg",
    name: "Jenisha Trivedi",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "draft",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 25,
    image: "assets/images/user/8.jpg",
    name: "Ross Singh",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "draft",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 26,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "sent",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 27,
    image: "assets/images/user/14.png",
    name: "Sam Porter",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "spam",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 28,
    image: "assets/images/user/8.jpg",
    name: "Ross Singh",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "spam",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 29,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "spam",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 30,
    image: "assets/images/user/14.png",
    name: "Sam Porter",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "spam",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 32,
    image: "assets/images/user/5.jpg",
    name: "Ashiyana Oza",
    email: "sam1254@company.com",
    date: "30 Apr 2022",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "spam",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }];
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_email_email_module_ts.js.map