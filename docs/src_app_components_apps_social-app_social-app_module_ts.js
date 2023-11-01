"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_social-app_social-app_module_ts"],{

/***/ 15939:
/*!*************************************************************************************!*\
  !*** ./src/app/components/apps/social-app/image-gallery/image-gallery.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageGalleryComponent: () => (/* binding */ ImageGalleryComponent)
/* harmony export */ });
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);






function ImageGalleryComponent_figure_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Portfolio Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const img_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r1.srcUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class ImageGalleryComponent {
  constructor(gallery, lightbox) {
    this.gallery = gallery;
    this.lightbox = lightbox;
    this.imageData = data;
  }
  ngOnInit() {
    /** Basic Gallery Example */
    // Creat gallery items
    this.items = this.imageData.map(item => new ng_gallery__WEBPACK_IMPORTED_MODULE_1__.ImageItem({
      src: item.srcUrl,
      thumb: item.previewUrl
    }));
    /** Lightbox Example */
    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');
    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ng_gallery__WEBPACK_IMPORTED_MODULE_1__.ImageSize.Cover,
      thumbPosition: ng_gallery__WEBPACK_IMPORTED_MODULE_1__.ThumbnailsPosition.Top
    });
    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
  static #_ = this.ɵfac = function ImageGalleryComponent_Factory(t) {
    return new (t || ImageGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_gallery__WEBPACK_IMPORTED_MODULE_1__.Gallery), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_2__.Lightbox));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ImageGalleryComponent,
    selectors: [["app-image-gallery"]],
    decls: 2,
    vars: 1,
    consts: [["itemscope", "", "gallerize", "", 1, "my-gallery", "row", "gallery-with-description"], ["class", "col-xl-3 col-sm-6 box-col-4", "itemprop", "associatedMedia", 4, "ngFor", "ngForOf"], ["itemprop", "associatedMedia", 1, "col-xl-3", "col-sm-6", "box-col-4"], ["href", "javascript:void(0)", "itemprop", "contentUrl"], [1, "img-fluid", 3, "src"], [1, "caption"]],
    template: function ImageGalleryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageGalleryComponent_figure_1_Template, 8, 1, "figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imageData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_2__.GallerizeDirective],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}
const data = [{
  srcUrl: 'assets/images/lightgallry/01.jpg',
  previewUrl: 'assets/images/lightgallry/01.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/02.jpg',
  previewUrl: 'assets/images/lightgallry/02.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/03.jpg',
  previewUrl: 'assets/images/lightgallry/03.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/04.jpg',
  previewUrl: 'assets/images/lightgallry/04.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/05.jpg',
  previewUrl: 'assets/images/lightgallry/05.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/06.jpg',
  previewUrl: 'assets/images/lightgallry/06.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/07.jpg',
  previewUrl: 'assets/images/lightgallry/07.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/08.jpg',
  previewUrl: 'assets/images/lightgallry/08.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/09.jpg',
  previewUrl: 'assets/images/lightgallry/09.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/010.jpg',
  previewUrl: 'assets/images/lightgallry/010.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/011.jpg',
  previewUrl: 'assets/images/lightgallry/011.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/012.jpg',
  previewUrl: 'assets/images/lightgallry/012.jpg'
}];

/***/ }),

/***/ 84943:
/*!*************************************************************************!*\
  !*** ./src/app/components/apps/social-app/social-app-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialAppRoutingModule: () => (/* binding */ SocialAppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _social_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-app.component */ 99532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _social_app_component__WEBPACK_IMPORTED_MODULE_0__.SocialAppComponent
  }]
}];
class SocialAppRoutingModule {
  static #_ = this.ɵfac = function SocialAppRoutingModule_Factory(t) {
    return new (t || SocialAppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SocialAppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SocialAppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 99532:
/*!********************************************************************!*\
  !*** ./src/app/components/apps/social-app/social-app.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialAppComponent: () => (/* binding */ SocialAppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 49177);
/* harmony import */ var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-gallery/image-gallery.component */ 15939);






const _c0 = function () {
  return ["Apps", "Social App"];
};
const _c1 = function (a0) {
  return {
    "active show": a0
  };
};
const _c2 = function (a0) {
  return {
    "show active": a0
  };
};
class SocialAppComponent {
  constructor() {
    this.isProfile = false;
    this.isProfile2 = false;
    this.isProfile3 = false;
    this.isProfile4 = false;
    this.isProfile5 = false;
    this.isProfile6 = false;
    this.isProfile7 = false;
    this.isProfile8 = false;
    this.isProfile9 = false;
    this.openTab = 'Timeline';
    this.active = 1;
  }
  //Fileupload
  readUrl(event) {
    if (event.target.files.length === 0) return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = _event => {
      this.url = reader.result;
    };
  }
  tabbed(val) {
    this.openTab = val;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function SocialAppComponent_Factory(t) {
    return new (t || SocialAppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SocialAppComponent,
    selectors: [["app-social-app"]],
    decls: 1809,
    vars: 64,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "user-profile", "social-app-profile"], [1, "row"], [1, "col-sm-12", "box-col-12"], [1, "card", "hovercard", "text-center"], [1, "cardheader", "socialheader"], [1, "user-image"], [1, "avatar"], ["alt", "", "src", "assets/images/user/7.jpg"], [1, "icon-wrapper"], [1, "icofont", "icofont-pencil-alt-5"], [1, "share-icons"], ["href", "javascript:void(0)", 1, "social-icon", "bg-primary"], [1, "fa", "fa-smile-o"], ["href", "javascript:void(0)", 1, "social-icon", "bg-secondary"], [1, "fa", "fa-wechat"], ["href", "javascript:void(0)", 1, "social-icon", "bg-warning"], [1, "fa", "fa-share-alt"], [1, "info", "market-tabs", "p-0"], ["id", "top-tab", "role", "tablist", 1, "nav", "nav-tabs", "border-tab", "tabs-scoial"], [1, "nav-item"], [1, "nav-link", 3, "ngClass", "click"], [1, "user-designation"], [1, "title"], ["target", "_blank", "href", ""], [1, "desc", "mt-2"], ["id", "top-tabContent", 1, "tab-content"], [1, "tab-pane", "fade", "show", "active", 3, "ngClass"], [1, "col-xl-3", "xl-40", "col-lg-12", "col-md-5", "box-col-4"], ["id", "accordionExample", 1, "default-according", "style-1", "faq-accordion"], [1, "card"], ["id", "headingOne", 1, "card-header"], [1, "mb-0"], ["type", "button", "aria-controls", "collapse", 1, "btn", "btn-link", "btn-block", "text-start", 3, "click"], [1, "collapse", "show", 3, "ngbCollapse"], [1, "card-body", "socialprofile", "filter-cards-view"], [1, "media"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], [1, "media-body"], [1, "font-primary", "f-w-600"], [1, "d-block"], [1, "fa", "fa-comments-o"], [1, "px-2"], [1, "badge", "rounded-pill", "badge-light", "ms-2"], [1, "fa", "fa-bell-o"], [1, "social-btngroup", "d-flex"], ["type", "button", 1, "btn", "btn-primary", "text-center"], ["type", "button", 1, "btn", "btn-light", "text-center", "ms-2"], [1, "likes-profile", "text-center"], [1, "fa", "fa-heart", "font-danger"], [1, "text-center"], [1, "customers", "text-center", "social-group"], [1, "d-inline-block"], ["src", "assets/images/user/3.jpg", "alt", "", "data-container", "body", "data-bs-toggle", "tooltip", "title", "Johny Waston", 1, "img-40", "rounded-circle"], ["src", "assets/images/user/5.jpg", "alt", "", "data-container", "body", "data-bs-toggle", "tooltip", "title", "Andew Jon", 1, "img-40", "rounded-circle"], ["src", "assets/images/user/1.jpg", "alt", "", "data-container", "body", "data-bs-toggle", "tooltip", "title", "Comeren Diaz", 1, "img-40", "rounded-circle"], ["src", "assets/images/user/2.png", "alt", "", "data-container", "body", "data-bs-toggle", "tooltip", "title", "Bucky Barnes", 1, "img-40", "rounded-circle"], ["src", "assets/images/user/8.jpg", "alt", "", "data-container", "body", "data-bs-toggle", "tooltip", "title", "Jason Borne", 1, "img-40", "rounded-circle"], ["src", "assets/images/user/11.png", "alt", "", "data-container", "body", "data-bs-toggle", "tooltip", "title", "Comeren Diaz", 1, "img-40", "rounded-circle"], ["alt", "", "src", "assets/images/social-app/timeline-3.png", 1, "img-fluid", "mt-5"], ["id", "headingTwo", 1, "card-header"], ["type", "button", "aria-controls", "collapse", 1, "btn", "btn-link", "btn-block", "text-start", "collapsed", 3, "click"], ["id", "collapseTwo", 1, "collapse", "show", 3, "ngbCollapse"], [1, "card-body", "social-status", "filter-cards-view"], ["src", "assets/images/user/2.png", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], [1, "social-status", "social-online"], [1, "f-w-600", "d-block"], ["src", "assets/images/user/10.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], [1, "social-status", "social-busy"], ["src", "assets/images/user/6.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], [1, "social-status", "social-offline"], ["src", "assets/images/user/8.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["src", "assets/images/user/14.png", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["src", "assets/images/user/4.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["src", "assets/images/user/3.png", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["id", "headingThree", 1, "card-header"], ["href", "#"], [1, "light-span"], ["src", "assets/images/user/3.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["src", "assets/images/user/5.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], [1, "col-xl-6", "xl-60", "col-lg-12", "col-md-7", "box-col-8e"], [1, "col-sm-12"], [1, "card-body"], [1, "new-users-social"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "rounded-circle", "image-radius", "m-r-15"], [1, "mb-0", "f-w-700"], [1, "pull-right", "mt-0"], [3, "icon"], ["alt", "", "src", "assets/images/social-app/timeline-1.png", 1, "img-fluid"], [1, "timeline-content"], [1, "like-content"], [1, "pull-right", "comment-number"], [1, "fa", "fa-share-alt", "me-0"], [1, "social-chat"], [1, "your-msg"], ["alt", "", "src", "assets/images/user/1.jpg", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], [1, "f-w-600"], [1, "fa", "fa-reply", "font-primary"], [1, "other-msg"], ["alt", "", "src", "assets/images/user/2.png", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["alt", "", "src", "assets/images/user/3.png", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], [1, "comments-box"], [1, "input-group", "text-box"], ["type", "text", "name", "message-to-send", "placeholder", "Post Your commnets", 1, "form-control", "input-txt-bx"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-transparent"], ["alt", "", "src", "assets/images/social-app/timeline-2.png", 1, "img-fluid"], [1, "col-xl-3", "xl-100", "box-col-12"], ["id", "accordionoc1", 1, "default-according", "style-1", "faq-accordion", "job-accordion"], [1, "col-xl-12", "xl-50", "box-col-6"], [1, "card-header"], ["aria-controls", "collapse", 1, "btn", "btn-link", 3, "click"], [1, "card-body", "filter-cards-view"], [1, "f-w-600", "mb-2", "d-block"], [1, "social-network", "theme-form"], [1, "btn", "social-btn", "btn-fb", "mb-2", "text-center"], [1, "fa", "fa-facebook", "m-r-5"], [1, "btn", "social-btn", "btn-twitter", "mb-2", "text-center"], [1, "fa", "fa-twitter", "m-r-5"], [1, "btn", "social-btn", "btn-google", "text-center"], [1, "fa", "fa-dribbble", "m-r-5"], [1, "card-body", "social-list", "filter-cards-view"], ["alt", "", "src", "assets/images/user/3.jpg", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["alt", "", "src", "assets/images/user/10.jpg", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["alt", "", "src", "assets/images/user/11.png", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], [1, "card-body", "photos", "filter-cards-view", "px-0"], [1, "latest-post"], ["alt", "", "src", "assets/images/social-app/post-1.png", 1, "img-fluid"], ["alt", "", "src", "assets/images/social-app/post-2.png", 1, "img-fluid"], ["alt", "", "src", "assets/images/social-app/post-3.png", 1, "img-fluid"], ["alt", "", "src", "assets/images/social-app/post-4.png", 1, "img-fluid"], ["alt", "", "src", "assets/images/social-app/post-5.png", 1, "img-fluid"], ["alt", "", "src", "assets/images/social-app/post-6.png", 1, "img-fluid"], ["alt", "", "src", "assets/images/social-app/post-7.png", 1, "img-fluid"], ["alt", "", "src", "assets/images/social-app/post-8.png", 1, "img-fluid"], [1, "card-body", "avatar-showcase", "filter-cards-view"], [1, "d-inline-block", "friend-pic"], ["src", "assets/images/user/3.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/5.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/1.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/2.png", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/3.png", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/6.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/10.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/14.png", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/4.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/11.png", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/8.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/social-app/timeline-4.png", "alt", "", 1, "img-fluid"], ["id", "about", 1, "tab-pane", "fade", 3, "ngClass"], [1, "col-xl-6", "xl-60", "col-lg-12", "col-md-8", "box-col-8e"], [1, "card-body", "avatar-showcase"], [1, "pepole-knows"], [1, "add-friend", "text-center"], ["alt", "", "src", "assets/images/user/2.png", 1, "img-60", "img-fluid", "rounded-circle"], [1, "btn", "btn-primary", "btn-xs"], ["alt", "", "src", "assets/images/user/3.png", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", "assets/images/user/3.jpg", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", "assets/images/user/4.jpg", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", "assets/images/user/8.jpg", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", "assets/images/user/10.jpg", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", "assets/images/user/14.png", 1, "img-60", "img-fluid", "rounded-circle"], [1, "card-header", "social-header"], [1, "pull-right"], [1, "row", "details-about"], [1, "col-sm-6"], [1, "your-details"], [1, "your-details", "your-details-xs"], [1, "activity-log"], [1, "my-activity"], [1, "f-w-600", "mb-3"], ["data-feather", "thumbs-up", 1, "m-r-20"], ["data-feather", "user-plus", 1, "m-r-20"], ["data-feather", "message-square", 1, "m-r-20"], ["id", "friends", 1, "tab-pane", "fade", 3, "ngClass"], [1, "col-xl-4", "col-sm-6", "col-xxl-3", "col-ed-4", "box-col-4"], [1, "card", "social-profile"], [1, "social-img-wrap"], [1, "social-img"], ["src", "assets/images/dashboard-5/profile.png", "alt", "profile"], [1, "edit-icon"], ["href", "assets/svg/icon-sprite.svg#profile-check"], [1, "social-details"], [1, "mb-1"], ["href", "social-app.html"], [1, "f-light"], [1, "card-social"], ["href", "https://www.facebook.com/", "target", "_blank"], [1, "fa", "fa-facebook"], ["href", "https://accounts.google.com/", "target", "_blank"], [1, "fa", "fa-google-plus"], ["href", "https://twitter.com/", "target", "_blank"], [1, "fa", "fa-twitter"], ["href", "https://www.instagram.com/", "target", "_blank"], [1, "fa", "fa-instagram"], ["href", "https://rss.app/", "target", "_blank"], [1, "fa", "fa-rss"], [1, "social-follow"], ["src", "assets/images/avtar/3.jpg", "alt", "profile", 1, "img-fluid"], ["src", "assets/images/avtar/11.jpg", "alt", "profile", 1, "img-fluid"], ["src", "assets/images/avtar/16.jpg", "alt", "profile", 1, "img-fluid"], ["src", "assets/images/user/7.jpg", "alt", "profile", 1, "img-fluid"], ["src", "assets/images/avtar/4.jpg", "alt", "profile", 1, "img-fluid"], ["src", "assets/images/user/1.jpg", "alt", "profile", 1, "img-fluid"], ["src", "assets/images/user/2.png", "alt", "profile", 1, "img-fluid"], ["id", "photos", 1, "tab-pane", "fade", 3, "ngClass"]],
    template: function SocialAppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ul", 12)(13, "li")(14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li")(17, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li")(20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 19)(23, "ul", 20)(24, "li", 21)(25, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_a_click_25_listener() {
          return ctx.tabbed("Timeline");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "li", 21)(28, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_a_click_28_listener() {
          return ctx.tabbed("About");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 24)(33, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "ElANA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "general manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li", 21)(38, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_a_click_38_listener() {
          return ctx.tabbed("Friends");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "li", 21)(41, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_a_click_41_listener() {
          return ctx.tabbed("Photos");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 27)(44, "div", 28)(45, "div", 3)(46, "div", 29)(47, "div", 30)(48, "div", 31)(49, "div", 32)(50, "h2", 33)(51, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_button_click_51_listener() {
          return ctx.isProfile = !ctx.isProfile;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 35)(54, "div", 36)(55, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 39)(58, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "My Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "span", 41)(61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "span", 41)(68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 46)(75, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Likes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 49)(80, "h5")(81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " 884");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "35 New Likes This Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 52)(87, "ul")(88, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](99, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 31)(102, "div", 61)(103, "h2", 33)(104, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_button_click_104_listener() {
          return ctx.isProfile2 = !ctx.isProfile2;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Mutual Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 63)(107, "div", 64)(108, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "img", 65)(110, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 39)(112, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Bucky Barnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "winter@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](117, "img", 68)(118, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 39)(120, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Sarah Loren");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "barnes@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "img", 70)(126, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 39)(128, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Jason Borne");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "jasonb@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "img", 72)(134, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 39)(136, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Comeren Diaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "comere@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "img", 73)(142, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "div", 39)(144, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "Andew Jon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "andrewj@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "img", 74)(150, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 39)(152, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "Johny Waston");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "johny@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](157, "img", 75)(158, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 39)(160, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "Johny William");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "johnyw@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](165, "img", 65)(166, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 39)(168, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "Bucky Barnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "winter@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](173, "img", 68)(174, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "div", 39)(176, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, "Sarah Loren");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, "barnes@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](181, "img", 70)(182, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "div", 39)(184, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, "Jason Borne");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, "jasonb@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](189, "img", 72)(190, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "div", 39)(192, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, "Comeren Diaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "comere@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](197, "img", 73)(198, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "div", 39)(200, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "Andew Jon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "andrewj@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "img", 74)(206, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "div", 39)(208, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](209, "Johny Waston");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](211, "johny@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](213, "img", 75)(214, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "div", 39)(216, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217, "Johny William");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, "johnyw@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "div", 31)(221, "div", 76)(222, "h2", 33)(223, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_button_click_223_listener() {
          return ctx.isProfile3 = !ctx.isProfile3;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, "Activity Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "div", 35)(226, "div", 64)(227, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](228, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "div", 39)(230, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](231, "Andew Jon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](233, "Commented on Shaun Park's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](235, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](237, "20 min Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](239, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "div", 39)(241, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, "Johny Waston");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](244, "Commented on Shaun Park's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](246, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](248, "1 hour Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](250, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "div", 39)(252, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](253, "Comeren Diaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](255, "Commented on Shaun Park's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](257, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](259, "1 days Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](261, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](262, "div", 39)(263, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](264, "Sarah Loren");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](266, "Commented on Shaun Park's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](268, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](270, "2 days Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](272, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "div", 39)(274, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](275, "Johny Waston");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](277, "Commented on Shaun Park's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](278, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](279, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](280, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](281, "5 days Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](283, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](284, "div", 39)(285, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](286, "Comeren Diaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](287, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](288, "Commented on Shaun Park's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](289, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](290, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](291, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "6 days Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "div", 81)(294, "div", 3)(295, "div", 82)(296, "div", 31)(297, "div", 83)(298, "div", 84)(299, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](300, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](301, "div", 39)(302, "h6", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](303, "ELANA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](304, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](305, "January, 12,2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](306, "span", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](307, "app-feather-icons", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](308, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](309, "div", 90)(310, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](311, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. Fusce placerat enim et odio molestie sagittis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](312, "div", 91)(313, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](314, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](315, "span", 92)(316, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317, "20 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](318, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](319, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](320, "span", 92)(321, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](322, "10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](323, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](324, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](325, "div", 94)(326, "div", 95)(327, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](328, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](329, "div", 39)(330, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](331, "Jason Borne ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](332, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](333, "1 Year Ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](334, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](335, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](336, "we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](337, "div", 99)(338, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](339, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](340, "div", 39)(341, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](342, "Alexendra Dhadio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](343, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](344, "1 Month Ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](345, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](346, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](347, "yes, really very awesome car i see the features of this car in the official website of #Mercedes-Benz and really impressed :-)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](348, "div", 99)(349, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](350, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](351, "div", 39)(352, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](353, "Olivia Jon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](354, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](355, "15 Days Ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](356, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](357, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](358, "i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](359, "div", 95)(360, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](361, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](362, "div", 39)(363, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](364, "Issa Bell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](365, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](366, "1 Year Ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](367, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](368, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](369, "we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](370, "div", 51)(371, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](372, "More Commnets");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](373, "div", 102)(374, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](375, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](376, "div", 39)(377, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](378, "input", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](379, "div", 105)(380, "button", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](381, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](382, "div", 82)(383, "div", 31)(384, "div", 83)(385, "div", 84)(386, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](387, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](388, "div", 39)(389, "h6", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](390, "ELANA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](391, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](392, "January, 12,2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](393, "span", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](394, "app-feather-icons", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](395, "img", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](396, "div", 90)(397, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](398, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. Fusce placerat enim et odio molestie sagittis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](399, "div", 91)(400, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](401, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](402, "span", 92)(403, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](404, "20 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](405, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](406, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](407, "span", 92)(408, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](409, "10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](410, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](411, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](412, "div", 94)(413, "div", 95)(414, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](415, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](416, "div", 39)(417, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](418, "Jason Borne ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](419, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](420, "1 Year Ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](421, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](422, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](423, "we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](424, "div", 95)(425, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](426, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](427, "div", 39)(428, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](429, "Issa Bell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](430, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](431, "1 Year Ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](432, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](433, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](434, "we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](435, "div", 51)(436, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](437, "More Commnets");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](438, "div", 102)(439, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](440, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](441, "div", 39)(442, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](443, "input", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](444, "div", 105)(445, "button", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](446, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](447, "div", 108)(448, "div", 109)(449, "div", 3)(450, "div", 110)(451, "div", 31)(452, "div", 111)(453, "h5", 33)(454, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_button_click_454_listener() {
          return ctx.isProfile4 = !ctx.isProfile4;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](455, "Profile Intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](456, "div", 35)(457, "div", 113)(458, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](459, "About Me :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](460, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](461, "Hi, I\u2019m elana, I\u2019m 30 and I work as a web Designer for the \u201CDaydreams\u201D Agency in Pier 56.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](462, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](463, "Favourite TV shows :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](464, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](465, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](466, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](467, "Favourite Music Bands :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](468, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](469, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](470, "div", 115)(471, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](472, "Social Networks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](473, "button", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](474, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](475, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](476, "button", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](477, "i", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](478, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](479, "button", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](480, "i", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](481, "Dribbble");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](482, "div", 110)(483, "div", 31)(484, "div", 111)(485, "h5", 33)(486, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_button_click_486_listener() {
          return ctx.isProfile5 = !ctx.isProfile5;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](487, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](488, "div", 35)(489, "div", 122)(490, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](491, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](492, "div", 39)(493, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](494, "Bucky Barnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](495, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](496, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](497, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](498, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](499, "div", 39)(500, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](501, "Sarah Loren");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](502, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](503, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](504, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](505, "img", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](506, "div", 39)(507, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](508, "Jason Borne");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](509, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](510, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](511, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](512, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](513, "div", 39)(514, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](515, "Comeren Diaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](516, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](517, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](518, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](519, "img", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](520, "div", 39)(521, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](522, "Andew Jon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](523, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](524, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](525, "div", 110)(526, "div", 31)(527, "div", 111)(528, "h5", 33)(529, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_button_click_529_listener() {
          return ctx.isProfile6 = !ctx.isProfile6;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](530, "Followings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](531, "div", 35)(532, "div", 122)(533, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](534, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](535, "div", 39)(536, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](537, "Sarah Loren");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](538, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](539, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](540, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](541, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](542, "div", 39)(543, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](544, "Bucky Barnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](545, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](546, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](547, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](548, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](549, "div", 39)(550, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](551, "Comeren Diaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](552, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](553, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](554, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](555, "img", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](556, "div", 39)(557, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](558, "Jason Borne");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](559, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](560, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](561, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](562, "img", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](563, "div", 39)(564, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](565, "Andew Jon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](566, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](567, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](568, "div", 110)(569, "div", 31)(570, "div", 111)(571, "h5", 33)(572, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_button_click_572_listener() {
          return ctx.isProfile7 = !ctx.isProfile7;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](573, "Latest Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](574, "div", 35)(575, "div", 126)(576, "ul", 51)(577, "li")(578, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](579, "img", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](580, "li")(581, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](582, "img", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](583, "li")(584, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](585, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](586, "li")(587, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](588, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](589, "li")(590, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](591, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](592, "li")(593, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](594, "img", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](595, "li")(596, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](597, "img", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](598, "li")(599, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](600, "img", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](601, "div", 110)(602, "div", 31)(603, "div", 111)(604, "h5", 33)(605, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_button_click_605_listener() {
          return ctx.isProfile8 = !ctx.isProfile8;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](606, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](607, "div", 35)(608, "div", 136)(609, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](610, "img", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](611, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](612, "img", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](613, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](614, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](615, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](616, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](617, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](618, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](619, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](620, "img", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](621, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](622, "img", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](623, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](624, "img", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](625, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](626, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](627, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](628, "img", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](629, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](630, "img", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](631, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](632, "img", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](633, "div", 110)(634, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](635, "img", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](636, "div", 150)(637, "div", 3)(638, "div", 29)(639, "div", 30)(640, "div", 31)(641, "div", 32)(642, "h2", 33)(643, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_button_click_643_listener() {
          return ctx.isProfile = !ctx.isProfile;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](644, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](645, "div", 35)(646, "div", 36)(647, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](648, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](649, "div", 39)(650, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](651, "My Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](652, "span", 41)(653, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](654, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](655, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](656, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](657, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](658, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](659, "span", 41)(660, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](661, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](662, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](663, "notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](664, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](665, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](666, "div", 46)(667, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](668, "Likes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](669, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](670, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](671, "div", 49)(672, "h5")(673, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](674, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](675, " 884");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](676, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](677, "35 New Likes This Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](678, "div", 52)(679, "ul")(680, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](681, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](682, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](683, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](684, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](685, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](686, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](687, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](688, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](689, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](690, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](691, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](692, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](693, "div", 31)(694, "div", 61)(695, "h2", 33)(696, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_button_click_696_listener() {
          return ctx.isProfile2 = !ctx.isProfile2;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](697, "Mutual Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](698, "div", 63)(699, "div", 64)(700, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](701, "img", 65)(702, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](703, "div", 39)(704, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](705, "Bucky Barnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](706, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](707, "winter@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](708, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](709, "img", 68)(710, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](711, "div", 39)(712, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](713, "Sarah Loren");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](714, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](715, "barnes@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](716, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](717, "img", 70)(718, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](719, "div", 39)(720, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](721, "Jason Borne");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](722, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](723, "jasonb@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](724, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](725, "img", 72)(726, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](727, "div", 39)(728, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](729, "Comeren Diaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](730, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](731, "comere@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](732, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](733, "img", 73)(734, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](735, "div", 39)(736, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](737, "Andew Jon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](738, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](739, "andrewj@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](740, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](741, "img", 74)(742, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](743, "div", 39)(744, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](745, "Johny Waston");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](746, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](747, "johny@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](748, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](749, "img", 75)(750, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](751, "div", 39)(752, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](753, "Johny William");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](754, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](755, "johnyw@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](756, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](757, "img", 65)(758, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](759, "div", 39)(760, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](761, "Bucky Barnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](762, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](763, "winter@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](764, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](765, "img", 68)(766, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](767, "div", 39)(768, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](769, "Sarah Loren");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](770, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](771, "barnes@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](772, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](773, "img", 70)(774, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](775, "div", 39)(776, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](777, "Jason Borne");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](778, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](779, "jasonb@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](780, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](781, "img", 72)(782, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](783, "div", 39)(784, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](785, "Comeren Diaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](786, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](787, "comere@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](788, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](789, "img", 73)(790, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](791, "div", 39)(792, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](793, "Andew Jon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](794, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](795, "andrewj@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](796, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](797, "img", 74)(798, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](799, "div", 39)(800, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](801, "Johny Waston");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](802, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](803, "johny@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](804, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](805, "img", 75)(806, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](807, "div", 39)(808, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](809, "Johny William");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](810, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](811, "johnyw@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](812, "div", 31)(813, "div", 76)(814, "h2", 33)(815, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_button_click_815_listener() {
          return ctx.isProfile3 = !ctx.isProfile3;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](816, "Activity Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](817, "div", 35)(818, "div", 64)(819, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](820, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](821, "div", 39)(822, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](823, "Andew Jon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](824, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](825, "Commented on Shaun Park's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](826, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](827, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](828, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](829, "20 min Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](830, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](831, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](832, "div", 39)(833, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](834, "Johny Waston");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](835, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](836, "Commented on Shaun Park's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](837, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](838, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](839, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](840, "1 hour Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](841, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](842, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](843, "div", 39)(844, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](845, "Comeren Diaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](846, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](847, "Commented on Shaun Park's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](848, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](849, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](850, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](851, "1 days Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](852, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](853, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](854, "div", 39)(855, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](856, "Sarah Loren");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](857, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](858, "Commented on Shaun Park's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](859, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](860, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](861, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](862, "2 days Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](863, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](864, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](865, "div", 39)(866, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](867, "Johny Waston");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](868, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](869, "Commented on Shaun Park's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](870, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](871, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](872, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](873, "5 days Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](874, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](875, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](876, "div", 39)(877, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](878, "Comeren Diaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](879, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](880, "Commented on Shaun Park's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](881, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](882, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](883, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](884, "6 days Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](885, "div", 151)(886, "div", 3)(887, "div", 82)(888, "div", 31)(889, "div", 111)(890, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](891, "Pepole You May Know");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](892, "div", 152)(893, "div", 153)(894, "ul")(895, "li")(896, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](897, "img", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](898, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](899, "Jason Borne");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](900, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](901, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](902, "li")(903, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](904, "img", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](905, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](906, "Anna Mull");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](907, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](908, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](909, "li")(910, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](911, "img", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](912, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](913, "Dion Cast");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](914, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](915, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](916, "li")(917, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](918, "img", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](919, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](920, "Karlene Lex");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](921, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](922, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](923, "li")(924, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](925, "img", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](926, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](927, "Vella Chism");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](928, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](929, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](930, "li")(931, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](932, "img", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](933, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](934, "Wai Schalk");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](935, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](936, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](937, "li")(938, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](939, "img", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](940, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](941, "Karlene Lex");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](942, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](943, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](944, "div", 82)(945, "div", 31)(946, "div", 163)(947, "h5")(948, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](949, "Hobbies and Interests");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](950, "span", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](951, "app-feather-icons", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](952, "div", 83)(953, "div", 165)(954, "div", 166)(955, "div", 167)(956, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](957, "Hobbies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](958, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](959, "I like to ride the bike to work, swimming, and working out. I also like reading design magazines, go to museums, and binge watching a good tv show while it\u2019s raining outside.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](960, "div", 166)(961, "div", 168)(962, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](963, "Favourite Music Bands / Artists:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](964, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](965, "Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](966, "div", 165)(967, "div", 166)(968, "div", 167)(969, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](970, "Favourite TV Shows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](971, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](972, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](973, "div", 166)(974, "div", 168)(975, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](976, "Favourite Books:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](977, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](978, "The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](979, "div", 165)(980, "div", 166)(981, "div", 167)(982, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](983, "Favourite Movies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](984, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](985, "Idiocratic, The Scarred Wizard and the Fire Crown, Crime Squad Ferrum Man.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](986, "div", 166)(987, "div", 168)(988, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](989, "Favourite Writers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](990, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](991, "Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandr Platt, Marcus Roth.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](992, "div", 165)(993, "div", 166)(994, "div", 167)(995, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](996, "Favourite Games:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](997, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](998, "The First of Us, Assassin\u2019s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](999, "div", 166)(1000, "div", 168)(1001, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1002, "Other Interests:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1003, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1004, "Swimming, Surfing, Scuba Diving, Anime, Photography, Tattoos, Street Art.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1005, "div", 82)(1006, "div", 31)(1007, "div", 163)(1008, "h5")(1009, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1010, "Education and Employement");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1011, "span", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1012, "app-feather-icons", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1013, "div", 83)(1014, "div", 165)(1015, "div", 166)(1016, "div", 167)(1017, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1018, "The New College of Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1019, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1020, "2001 - 2006");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1021, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1022, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1023, "div", 166)(1024, "div", 168)(1025, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1026, "Digital Design Intern");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1027, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1028, "2006-2008");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1029, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1030, "Digital Design Intern for the \u201CMultimedz\u201D agency. Was in charge of the communication with the clients.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1031, "div", 165)(1032, "div", 166)(1033, "div", 167)(1034, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1035, "Rembrandt Institute");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1036, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1037, "2008");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1038, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1039, "Five months Digital Illustration course. Professor: Leonardo Stagg.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1040, "div", 166)(1041, "div", 168)(1042, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1043, "UI/UX Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1044, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1045, "2001 - 2006");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1046, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1047, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1048, "div", 165)(1049, "div", 166)(1050, "div", 167)(1051, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1052, "The Digital College");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1053, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1054, "2010");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1055, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1056, "6 months intensive Motion Graphics course. After Effects and Premire. Professor: Donatello Urtle.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1057, "div", 166)(1058, "div", 168)(1059, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1060, "The New College of Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1061, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1062, "2008 - 2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1063, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1064, "UI/UX Designer for the \u201CDaydreams\u201D agency.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1065, "div", 82)(1066, "div", 31)(1067, "div", 111)(1068, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1069, "Viewed Your Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1070, "div", 152)(1071, "div", 153)(1072, "ul")(1073, "li")(1074, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1075, "img", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1076, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1077, "Jason Borne");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1078, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1079, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1080, "li")(1081, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1082, "img", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1083, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1084, "Anna Mull");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1085, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1086, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1087, "li")(1088, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1089, "img", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1090, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1091, "Dion Cast");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1092, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1093, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1094, "li")(1095, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1096, "img", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1097, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1098, "Karlene Lex");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1099, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1100, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1101, "li")(1102, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1103, "img", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1104, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1105, "Vella Chism");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1106, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1107, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1108, "li")(1109, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1110, "img", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1111, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1112, "Wai Schalk");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1113, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1114, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1115, "li")(1116, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1117, "img", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1118, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1119, "Karlene Lex");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1120, "button", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1121, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1122, "div", 82)(1123, "div", 31)(1124, "div", 111)(1125, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1126, "Activity Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1127, "div", 83)(1128, "div", 169)(1129, "div", 170)(1130, "h6", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1131, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1132, "p")(1133, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1134, "i", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1135, "Comeren Diaz likes your photos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1136, "p")(1137, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1138, "i", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1139, "Karlene Lex and Comeren Diaz now friends. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1140, "p")(1141, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1142, "i", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1143, "Sarah Loren wrote on your timeline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1144, "p")(1145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1146, "i", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1147, "Johny Waston likes your post's. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1148, "p")(1149, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1150, "i", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1151, "Andew Jon became friends with Comeren Diaz. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1152, "p")(1153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1154, "i", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1155, "Johny Waston became friends with Bucky Barnes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1156, "div", 170)(1157, "h6", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1158, "25 December");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1159, "p")(1160, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1161, "i", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1162, "Comeren Diaz likes your photos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1163, "p")(1164, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1165, "i", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1166, "Johny Waston likes your post's. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1167, "p")(1168, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1169, "i", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1170, "Karlene Lex and Comeren Diaz now friends. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1171, "p")(1172, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1173, "i", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1174, "Johny Waston became friends with Bucky Barnes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1175, "p")(1176, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1177, "i", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1178, "Sarah Loren wrote on your timeline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1179, "p")(1180, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1181, "i", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1182, "Comeren Diaz wrote on your timeline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1183, "div", 170)(1184, "h6", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1185, "8 september");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1186, "p")(1187, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1188, "i", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1189, "Comeren Diaz likes your photos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1190, "p")(1191, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1192, "i", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1193, "Johny Waston likes your post's. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1194, "p")(1195, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1196, "i", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1197, "Karlene Lex and Comeren Diaz now friends. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1198, "p")(1199, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1200, "i", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1201, "Johny Waston became friends with Bucky Barnes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1202, "p")(1203, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1204, "i", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1205, "Sarah Loren wrote on your timeline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1206, "p")(1207, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1208, "i", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1209, "Andew Jon became friends with Comeren Diaz. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1210, "div", 170)(1211, "h6", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1212, "6 June");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1213, "p")(1214, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1215, "i", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1216, "Comeren Diaz likes your photos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1217, "p")(1218, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1219, "i", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1220, "Karlene Lex and Comeren Diaz now friends. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1221, "p")(1222, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1223, "i", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1224, "Sarah Loren wrote on your timeline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1225, "p")(1226, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1227, "i", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1228, "Johny Waston likes your post's. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1229, "p")(1230, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1231, "i", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1232, "Andew Jon became friends with Comeren Diaz. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1233, "p")(1234, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1235, "i", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1236, "Johny Waston became friends with Bucky Barnes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1237, "div", 108)(1238, "div", 109)(1239, "div", 3)(1240, "div", 110)(1241, "div", 31)(1242, "div", 111)(1243, "h5", 33)(1244, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_button_click_1244_listener() {
          return ctx.isProfile4 = !ctx.isProfile4;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1245, "Profile Intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1246, "div", 35)(1247, "div", 113)(1248, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1249, "About Me :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1250, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1251, "Hi, I\u2019m elana, I\u2019m 30 and I work as a web Designer for the \u201CDaydreams\u201D Agency in Pier 56.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1252, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1253, "Favourite TV shows :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1254, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1255, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1256, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1257, "Favourite Music Bands :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1258, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1259, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1260, "div", 115)(1261, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1262, "Social Networks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1263, "button", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1264, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1265, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1266, "button", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1267, "i", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1268, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1269, "button", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1270, "i", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1271, "Dribbble");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1272, "div", 110)(1273, "div", 31)(1274, "div", 111)(1275, "h5", 33)(1276, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_button_click_1276_listener() {
          return ctx.isProfile5 = !ctx.isProfile5;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1277, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1278, "div", 35)(1279, "div", 122)(1280, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1281, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1282, "div", 39)(1283, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1284, "Bucky Barnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1285, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1286, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1287, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1288, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1289, "div", 39)(1290, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1291, "Sarah Loren");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1292, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1293, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1294, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1295, "img", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1296, "div", 39)(1297, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1298, "Jason Borne");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1299, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1300, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1301, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1302, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1303, "div", 39)(1304, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1305, "Comeren Diaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1306, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1307, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1308, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1309, "img", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1310, "div", 39)(1311, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1312, "Andew Jon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1313, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1314, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1315, "div", 110)(1316, "div", 31)(1317, "div", 111)(1318, "h5", 33)(1319, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_button_click_1319_listener() {
          return ctx.isProfile6 = !ctx.isProfile6;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1320, "Followings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1321, "div", 35)(1322, "div", 122)(1323, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1324, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1325, "div", 39)(1326, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1327, "Sarah Loren");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1328, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1329, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1330, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1331, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1332, "div", 39)(1333, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1334, "Bucky Barnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1335, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1336, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1337, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1338, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1339, "div", 39)(1340, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1341, "Comeren Diaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1342, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1343, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1344, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1345, "img", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1346, "div", 39)(1347, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1348, "Jason Borne");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1349, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1350, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1351, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1352, "img", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1353, "div", 39)(1354, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1355, "Andew Jon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1356, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1357, "Add Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1358, "div", 110)(1359, "div", 31)(1360, "div", 111)(1361, "h5", 33)(1362, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_button_click_1362_listener() {
          return ctx.isProfile7 = !ctx.isProfile7;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1363, "Latest Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1364, "div", 35)(1365, "div", 126)(1366, "ul", 51)(1367, "li")(1368, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1369, "img", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1370, "li")(1371, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1372, "img", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1373, "li")(1374, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1375, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1376, "li")(1377, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1378, "img", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1379, "li")(1380, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1381, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1382, "li")(1383, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1384, "img", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1385, "li")(1386, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1387, "img", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1388, "li")(1389, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1390, "img", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1391, "div", 110)(1392, "div", 31)(1393, "div", 111)(1394, "h5", 33)(1395, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialAppComponent_Template_button_click_1395_listener() {
          return ctx.isProfile8 = !ctx.isProfile8;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1396, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1397, "div", 35)(1398, "div", 136)(1399, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1400, "img", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1401, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1402, "img", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1403, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1404, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1405, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1406, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1407, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1408, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1409, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1410, "img", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1411, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1412, "img", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1413, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1414, "img", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1415, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1416, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1417, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1418, "img", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1419, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1420, "img", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1421, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1422, "img", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1423, "div", 110)(1424, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1425, "img", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1426, "div", 175)(1427, "div", 3)(1428, "div", 176)(1429, "div", 177)(1430, "div", 83)(1431, "div", 178)(1432, "div", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1433, "img", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1434, "div", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1435, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1436, "use", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1437, "div", 183)(1438, "h5", 184)(1439, "a", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1440, "Brooklyn Simmons");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1441, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1442, "@brookly.simmons");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1443, "ul", 187)(1444, "li")(1445, "a", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1446, "i", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1447, "li")(1448, "a", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1449, "i", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1450, "li")(1451, "a", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1452, "i", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1453, "li")(1454, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1455, "i", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1456, "li")(1457, "a", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1458, "i", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1459, "ul", 198)(1460, "li")(1461, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1462, "1,908");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1463, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1464, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1465, "li")(1466, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1467, "34.0k");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1468, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1469, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1470, "li")(1471, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1472, "897");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1473, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1474, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1475, "div", 176)(1476, "div", 177)(1477, "div", 83)(1478, "div", 178)(1479, "div", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1480, "img", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1481, "div", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1482, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1483, "use", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1484, "div", 183)(1485, "h5", 184)(1486, "a", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1487, "Mark Jecno");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1488, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1489, "@mark.jeco");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1490, "ul", 187)(1491, "li")(1492, "a", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1493, "i", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1494, "li")(1495, "a", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1496, "i", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1497, "li")(1498, "a", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1499, "i", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1500, "li")(1501, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1502, "i", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1503, "li")(1504, "a", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1505, "i", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1506, "ul", 198)(1507, "li")(1508, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1509, "875");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1510, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1511, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1512, "li")(1513, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1514, "12.0k");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1515, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1516, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1517, "li")(1518, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1519, "1400");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1520, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1521, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1522, "div", 176)(1523, "div", 177)(1524, "div", 83)(1525, "div", 178)(1526, "div", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1527, "img", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1528, "div", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1529, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1530, "use", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1531, "div", 183)(1532, "h5", 184)(1533, "a", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1534, "Dev John");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1535, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1536, "@john.dev");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1537, "ul", 187)(1538, "li")(1539, "a", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1540, "i", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1541, "li")(1542, "a", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1543, "i", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1544, "li")(1545, "a", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1546, "i", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1547, "li")(1548, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1549, "i", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1550, "li")(1551, "a", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1552, "i", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1553, "ul", 198)(1554, "li")(1555, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1556, "1,274");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1557, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1558, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1559, "li")(1560, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1561, "15.0k");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1562, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1563, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1564, "li")(1565, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1566, "1874");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1567, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1568, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1569, "div", 176)(1570, "div", 177)(1571, "div", 83)(1572, "div", 178)(1573, "div", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1574, "img", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1575, "div", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1576, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1577, "use", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1578, "div", 183)(1579, "h5", 184)(1580, "a", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1581, "Johan Deo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1582, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1583, "@deo.johan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1584, "ul", 187)(1585, "li")(1586, "a", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1587, "i", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1588, "li")(1589, "a", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1590, "i", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1591, "li")(1592, "a", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1593, "i", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1594, "li")(1595, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1596, "i", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1597, "li")(1598, "a", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1599, "i", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1600, "ul", 198)(1601, "li")(1602, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1603, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1604, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1605, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1606, "li")(1607, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1608, "8.0k");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1609, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1610, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1611, "li")(1612, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1613, "570");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1614, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1615, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1616, "div", 176)(1617, "div", 177)(1618, "div", 83)(1619, "div", 178)(1620, "div", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1621, "img", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1622, "div", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1623, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1624, "use", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1625, "div", 183)(1626, "h5", 184)(1627, "a", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1628, "Douglas Reichel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1629, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1630, "@reichel.douglas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1631, "ul", 187)(1632, "li")(1633, "a", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1634, "i", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1635, "li")(1636, "a", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1637, "i", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1638, "li")(1639, "a", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1640, "i", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1641, "li")(1642, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1643, "i", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1644, "li")(1645, "a", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1646, "i", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1647, "ul", 198)(1648, "li")(1649, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1650, "460");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1651, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1652, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1653, "li")(1654, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1655, "2k");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1656, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1657, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1658, "li")(1659, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1660, "350");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1661, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1662, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1663, "div", 176)(1664, "div", 177)(1665, "div", 83)(1666, "div", 178)(1667, "div", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1668, "img", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1669, "div", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1670, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1671, "use", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1672, "div", 183)(1673, "h5", 184)(1674, "a", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1675, "Lisa lillian");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1676, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1677, "@lisa.lillian");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1678, "ul", 187)(1679, "li")(1680, "a", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1681, "i", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1682, "li")(1683, "a", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1684, "i", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1685, "li")(1686, "a", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1687, "i", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1688, "li")(1689, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1690, "i", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1691, "li")(1692, "a", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1693, "i", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1694, "ul", 198)(1695, "li")(1696, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1697, "547");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1698, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1699, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1700, "li")(1701, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1702, "3.5k");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1703, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1704, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1705, "li")(1706, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1707, "822");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1708, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1709, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1710, "div", 176)(1711, "div", 177)(1712, "div", 83)(1713, "div", 178)(1714, "div", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1715, "img", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1716, "div", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1717, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1718, "use", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1719, "div", 183)(1720, "h5", 184)(1721, "a", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1722, "Olivia rose");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1723, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1724, "@rose.olivia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1725, "ul", 187)(1726, "li")(1727, "a", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1728, "i", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1729, "li")(1730, "a", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1731, "i", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1732, "li")(1733, "a", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1734, "i", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1735, "li")(1736, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1737, "i", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1738, "li")(1739, "a", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1740, "i", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1741, "ul", 198)(1742, "li")(1743, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1744, "868");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1745, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1746, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1747, "li")(1748, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1749, "1k");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1750, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1751, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1752, "li")(1753, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1754, "742");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1755, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1756, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1757, "div", 176)(1758, "div", 177)(1759, "div", 83)(1760, "div", 178)(1761, "div", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1762, "img", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1763, "div", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1764, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1765, "use", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1766, "div", 183)(1767, "h5", 184)(1768, "a", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1769, "Sarah Karen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1770, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1771, "@karen.sarah");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1772, "ul", 187)(1773, "li")(1774, "a", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1775, "i", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1776, "li")(1777, "a", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1778, "i", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1779, "li")(1780, "a", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1781, "i", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1782, "li")(1783, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1784, "i", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1785, "li")(1786, "a", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1787, "i", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1788, "ul", 198)(1789, "li")(1790, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1791, "972");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1792, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1793, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1794, "li")(1795, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1796, "2.5k");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1797, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1798, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1799, "li")(1800, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1801, "864");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1802, "span", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1803, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1804, "div", 206)(1805, "div", 3)(1806, "div", 82)(1807, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1808, "app-image-gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Social App")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](47, _c0))("active_item", "Social App");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](48, _c1, ctx.openTab == "Timeline"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](50, _c1, ctx.openTab == "About"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](52, _c1, ctx.openTab == "Friends"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](54, _c1, ctx.openTab == "Photos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](56, _c2, ctx.openTab == "Timeline"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isProfile2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isProfile3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "more-vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "more-vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isProfile4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isProfile5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isProfile6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isProfile7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isProfile8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isProfile8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](58, _c2, ctx.openTab == "About"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isProfile2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isProfile3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "more-vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "more-vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](232);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isProfile4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isProfile5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isProfile6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isProfile7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !ctx.isProfile8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isProfile8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](60, _c2, ctx.openTab == "Friends"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](378);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](62, _c2, ctx.openTab == "Photos"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCollapse, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_2__.ImageGalleryComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 98109:
/*!*****************************************************************!*\
  !*** ./src/app/components/apps/social-app/social-app.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialAppModule: () => (/* binding */ SocialAppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 56208);
/* harmony import */ var _social_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-app-routing.module */ 84943);
/* harmony import */ var _social_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-app.component */ 99532);
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ 31841);
/* harmony import */ var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-gallery/image-gallery.component */ 15939);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ 4700);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mousetrap */ 83929);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);












class SocialAppModule {
  static #_ = this.ɵfac = function SocialAppModule_Factory(t) {
    return new (t || SocialAppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: SocialAppModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _social_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.SocialAppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_10__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_11__.LightboxModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SocialAppModule, {
    declarations: [_social_app_component__WEBPACK_IMPORTED_MODULE_2__.SocialAppComponent, _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_3__.ImageGalleryComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _social_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.SocialAppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_10__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_11__.LightboxModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_social-app_social-app_module_ts.js.map