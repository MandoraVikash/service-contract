"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_bonus-ui_advance_advance_module_ts"],{

/***/ 51187:
/*!***********************************************************************!*\
  !*** ./src/app/components/bonus-ui/advance/advance-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvanceRoutingModule: () => (/* binding */ AdvanceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _owl_carousel_owl_carousel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owl-carousel/owl-carousel.component */ 19451);
/* harmony import */ var _scrollable_scrollable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrollable/scrollable.component */ 49178);
/* harmony import */ var _dropzone_dropzone_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropzone/dropzone.component */ 62767);
/* harmony import */ var _sweet_alert2_sweet_alert2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sweet-alert2/sweet-alert2.component */ 62678);
/* harmony import */ var _sticky_sticky_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sticky/sticky.component */ 69822);
/* harmony import */ var _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-cropper/image-cropper.component */ 21531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);









const routes = [{
  path: '',
  children: [{
    path: 'scrollable',
    component: _scrollable_scrollable_component__WEBPACK_IMPORTED_MODULE_1__.ScrollableComponent
  }, {
    path: 'dropzone',
    component: _dropzone_dropzone_component__WEBPACK_IMPORTED_MODULE_2__.DropzoneComponent
  }, {
    path: 'sweetAlert2',
    component: _sweet_alert2_sweet_alert2_component__WEBPACK_IMPORTED_MODULE_3__.SweetAlert2Component
  }, {
    path: 'owl-carousel',
    component: _owl_carousel_owl_carousel_component__WEBPACK_IMPORTED_MODULE_0__.OwlCarouselComponent
  }, {
    path: 'image-cropper',
    component: _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_5__.ImageCropperComponent
  }, {
    path: 'sticky',
    component: _sticky_sticky_component__WEBPACK_IMPORTED_MODULE_4__.StickyComponent
  }]
}];
class AdvanceRoutingModule {
  static #_ = this.ɵfac = function AdvanceRoutingModule_Factory(t) {
    return new (t || AdvanceRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AdvanceRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AdvanceRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 74441:
/*!***************************************************************!*\
  !*** ./src/app/components/bonus-ui/advance/advance.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvanceModule: () => (/* binding */ AdvanceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ 18456);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-dropzone */ 5253);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 23751);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-image-cropper */ 4214);
/* harmony import */ var ngx_joyride__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-joyride */ 13290);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 56208);
/* harmony import */ var _advance_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advance-routing.module */ 51187);
/* harmony import */ var _dropzone_dropzone_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropzone/dropzone.component */ 62767);
/* harmony import */ var _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-cropper/image-cropper.component */ 21531);
/* harmony import */ var _owl_carousel_owl_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./owl-carousel/owl-carousel.component */ 19451);
/* harmony import */ var _scrollable_scrollable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollable/scrollable.component */ 49178);
/* harmony import */ var _sticky_sticky_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sticky/sticky.component */ 69822);
/* harmony import */ var _sweet_alert2_sweet_alert2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sweet-alert2/sweet-alert2.component */ 62678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);


















const DEFAULT_DROPZONE_CONFIG = {
  url: 'https://httpbin.org/post',
  acceptedFiles: 'image/*',
  createImageThumbnails: true
};
class AdvanceModule {
  static #_ = this.ɵfac = function AdvanceModule_Factory(t) {
    return new (t || AdvanceModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AdvanceModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    providers: [{
      provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__.DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _advance_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdvanceRoutingModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__.NgxDropzoneModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_12__.SweetAlert2Module, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__.DropzoneModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_16__.ImageCropperModule, ngx_joyride__WEBPACK_IMPORTED_MODULE_17__.JoyrideModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AdvanceModule, {
    declarations: [_scrollable_scrollable_component__WEBPACK_IMPORTED_MODULE_5__.ScrollableComponent, _dropzone_dropzone_component__WEBPACK_IMPORTED_MODULE_2__.DropzoneComponent, _sweet_alert2_sweet_alert2_component__WEBPACK_IMPORTED_MODULE_7__.SweetAlert2Component, _sticky_sticky_component__WEBPACK_IMPORTED_MODULE_6__.StickyComponent, _owl_carousel_owl_carousel_component__WEBPACK_IMPORTED_MODULE_4__.OwlCarouselComponent, _image_cropper_image_cropper_component__WEBPACK_IMPORTED_MODULE_3__.ImageCropperComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _advance_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdvanceRoutingModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__.NgxDropzoneModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_12__.SweetAlert2Module, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__.DropzoneModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_16__.ImageCropperModule, ngx_joyride__WEBPACK_IMPORTED_MODULE_17__.JoyrideModule]
  });
})();

/***/ }),

/***/ 62767:
/*!****************************************************************************!*\
  !*** ./src/app/components/bonus-ui/advance/dropzone/dropzone.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropzoneComponent: () => (/* binding */ DropzoneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-dropzone */ 5253);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);




function DropzoneComponent_ngx_dropzone_preview_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-dropzone-preview", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function DropzoneComponent_ngx_dropzone_preview_20_Template_ngx_dropzone_preview_removed_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const f_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onRemove(f_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", f_r2.name, " (", f_r2.type, ")");
  }
}
function DropzoneComponent_ngx_dropzone_preview_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-dropzone-preview", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function DropzoneComponent_ngx_dropzone_preview_38_Template_ngx_dropzone_preview_removed_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const f_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.onRemove(f_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", f_r5.name, " (", f_r5.type, ")");
  }
}
const _c0 = function () {
  return ["Bonus UI", "Advance"];
};
class DropzoneComponent {
  constructor() {
    this.files = [];
    this.files1 = [];
  }
  onSelect(event) {
    this.files.push(...event.addedFiles);
    if (this.files.length > 1) {
      this.replaceFile();
    }
  }
  replaceFile() {
    this.files.splice(0, 1);
  }
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  onSelect1(event) {
    this.files1.push(...event.addedFiles);
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function DropzoneComponent_Factory(t) {
    return new (t || DropzoneComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DropzoneComponent,
    selectors: [["app-dropzone"]],
    decls: 39,
    vars: 8,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row", "dropzone-custom"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "multiple", "change"], [1, "dz-message", "needsclick"], [1, "icon-cloud-up"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], [3, "removable", "removed"]],
    template: function DropzoneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Single File Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "ngx-dropzone", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DropzoneComponent_Template_ngx_dropzone_change_9_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ngx-dropzone-label")(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Drop files here or click to upload.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "(This is just a demo dropzone. Selected files are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "not");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " actually uploaded.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DropzoneComponent_ngx_dropzone_preview_20_Template, 3, 3, "ngx-dropzone-preview", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3)(22, "div", 4)(23, "div", 5)(24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Multi File Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 6)(27, "ngx-dropzone", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DropzoneComponent_Template_ngx_dropzone_change_27_listener($event) {
          return ctx.onSelect1($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ngx-dropzone-label")(29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Drop files here or click to upload.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "(This is just a demo dropzone. Selected files are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "not");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " actually uploaded.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, DropzoneComponent_ngx_dropzone_preview_38_Template, 3, 3, "ngx-dropzone-preview", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Dropzone")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0))("active_item", "Dropzone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.files1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__.NgxDropzoneLabelDirective, ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__.NgxDropzonePreviewComponent, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 21531:
/*!**************************************************************************************!*\
  !*** ./src/app/components/bonus-ui/advance/image-cropper/image-cropper.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageCropperComponent: () => (/* binding */ ImageCropperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _shared_directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/directives/only-numbers.directive */ 15466);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-image-cropper */ 4214);






const _c0 = function () {
  return ["Bonus UI", "Advance"];
};
class ImageCropperComponent {
  constructor() {
    this.imageChangedEvent = '';
    this.croppedImage = '';
    this.canvasRotation = 0;
    this.rotation = 0;
    this.scale = 1;
    this.showCropper = false;
    this.containWithinAspectRatio = false;
    this.transform = {};
  }
  fileChangeEvent(event) {
    this.imageChangedEvent = event;
  }
  imageCropped(event) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    this.showCropper = true;
  }
  cropperReady(sourceImageDimensions) {}
  loadImageFailed() {}
  rotateLeft() {
    this.canvasRotation--;
    this.flipAfterRotate();
  }
  rotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
  }
  flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
      ...this.transform,
      flipH: flippedV,
      flipV: flippedH
    };
  }
  flipHorizontal() {
    this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH
    };
  }
  flipVertical() {
    this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV
    };
  }
  resetImage() {
    this.scale = 1;
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
  }
  zoomOut() {
    this.scale -= .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }
  zoomIn() {
    this.scale += .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }
  toggleContainWithinAspectRatio() {
    this.containWithinAspectRatio = !this.containWithinAspectRatio;
  }
  updateRotation() {
    this.transform = {
      ...this.transform,
      rotate: this.rotation
    };
  }
  static #_ = this.ɵfac = function ImageCropperComponent_Factory(t) {
    return new (t || ImageCropperComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ImageCropperComponent,
    selectors: [["app-image-cropper"]],
    decls: 39,
    vars: 20,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "img-cropper"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], ["format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "containWithinAspectRatio", "aspectRatio", "resizeToWidth", "cropperMinWidth", "onlyScaleDown", "roundCropper", "canvasRotation", "transform", "alignImage", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"], [1, "btn-showcase"], [1, "text-center", "my-2"], [3, "src"], [1, "image-cropper-btn"], ["placeholder", "Choose Your Image", "type", "file", 1, "btn", "btn-outline-primary", 3, "change"], [1, "btn", "btn-primary", 3, "click"], ["for", "rotation", 1, "col-form-label"], ["placeholder", "Rotation", "type", "text", "onlyNumbers", "", 1, "btn", "btn-outline-primary", "ms-2", 3, "ngModel", "ngModelChange", "keyup"]],
    template: function ImageCropperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Image Cropper");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "image-cropper", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("imageCropped", function ImageCropperComponent_Template_image_cropper_imageCropped_10_listener($event) {
          return ctx.imageCropped($event);
        })("imageLoaded", function ImageCropperComponent_Template_image_cropper_imageLoaded_10_listener() {
          return ctx.imageLoaded();
        })("cropperReady", function ImageCropperComponent_Template_image_cropper_cropperReady_10_listener($event) {
          return ctx.cropperReady($event);
        })("loadImageFailed", function ImageCropperComponent_Template_image_cropper_loadImageFailed_10_listener() {
          return ctx.loadImageFailed();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9)(12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12)(15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ImageCropperComponent_Template_input_change_15_listener($event) {
          return ctx.fileChangeEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div")(17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_17_listener() {
          return ctx.rotateLeft();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Rotate left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_19_listener() {
          return ctx.rotateRight();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Rotate right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_21_listener() {
          return ctx.flipHorizontal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Flip horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_23_listener() {
          return ctx.flipVertical();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Flip vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div")(26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_26_listener() {
          return ctx.toggleContainWithinAspectRatio();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_28_listener() {
          return ctx.resetImage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Reset image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div")(31, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Rotation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImageCropperComponent_Template_input_ngModelChange_33_listener($event) {
          return ctx.rotation = $event;
        })("keyup", function ImageCropperComponent_Template_input_keyup_33_listener() {
          return ctx.updateRotation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div")(35, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_35_listener() {
          return ctx.zoomOut();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Zoom -");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageCropperComponent_Template_button_click_37_listener() {
          return ctx.zoomIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Zoom +");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Image Croper")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c0))("active_item", "Image Croper");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.showCropper ? null : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("imageChangedEvent", ctx.imageChangedEvent)("maintainAspectRatio", true)("containWithinAspectRatio", ctx.containWithinAspectRatio)("aspectRatio", 4 / 3)("resizeToWidth", 256)("cropperMinWidth", 128)("onlyScaleDown", true)("roundCropper", false)("canvasRotation", ctx.canvasRotation)("transform", ctx.transform)("alignImage", "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.croppedImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.containWithinAspectRatio ? "Fill Aspect Ratio" : "Contain Within Aspect Ratio", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.rotation);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _shared_directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_1__.OnlyNumbersDirective, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__.ImageCropperComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 19451:
/*!************************************************************************************!*\
  !*** ./src/app/components/bonus-ui/advance/owl-carousel/owl-carousel.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OwlCarouselComponent: () => (/* binding */ OwlCarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);




const _c0 = function (a0) {
  return [a0];
};
function OwlCarouselComponent_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const img_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, img_r13.img), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function OwlCarouselComponent_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OwlCarouselComponent_10_ng_template_0_Template, 1, 3, "ng-template", 9);
  }
  if (rf & 2) {
    const img_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", img_r13.id);
  }
}
function OwlCarouselComponent_17_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const img_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, img_r16.img), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function OwlCarouselComponent_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OwlCarouselComponent_17_ng_template_0_Template, 1, 3, "ng-template", 9);
  }
  if (rf & 2) {
    const img_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", img_r16.id);
  }
}
function OwlCarouselComponent_24_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const img_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, img_r19.img), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function OwlCarouselComponent_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OwlCarouselComponent_24_ng_template_0_Template, 1, 3, "ng-template", 9);
  }
  if (rf & 2) {
    const img_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", img_r19.id);
  }
}
function OwlCarouselComponent_31_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const img_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, img_r22.img), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function OwlCarouselComponent_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OwlCarouselComponent_31_ng_template_0_Template, 1, 3, "ng-template", 9);
  }
  if (rf & 2) {
    const img_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", img_r22.id);
  }
}
function OwlCarouselComponent_38_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const img_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, img_r25.img), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function OwlCarouselComponent_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OwlCarouselComponent_38_ng_template_0_Template, 1, 3, "ng-template", 9);
  }
  if (rf & 2) {
    const img_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", img_r25.id);
  }
}
function OwlCarouselComponent_45_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const img_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, img_r28.img), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function OwlCarouselComponent_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OwlCarouselComponent_45_ng_template_0_Template, 1, 3, "ng-template", 9);
  }
  if (rf & 2) {
    const img_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", img_r28.id);
  }
}
function OwlCarouselComponent_52_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const img_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, img_r31.img), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function OwlCarouselComponent_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OwlCarouselComponent_52_ng_template_0_Template, 1, 3, "ng-template", 9);
  }
  if (rf & 2) {
    const img_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", img_r31.id);
  }
}
function OwlCarouselComponent_59_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const img_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, img_r34.img), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function OwlCarouselComponent_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OwlCarouselComponent_59_ng_template_0_Template, 1, 3, "ng-template", 9);
  }
  if (rf & 2) {
    const img_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", img_r34.id);
  }
}
function OwlCarouselComponent_66_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const img_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, img_r37.img), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function OwlCarouselComponent_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OwlCarouselComponent_66_ng_template_0_Template, 1, 3, "ng-template", 9);
  }
  if (rf & 2) {
    const img_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", img_r37.id);
  }
}
function OwlCarouselComponent_73_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const img_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, img_r40.img), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function OwlCarouselComponent_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OwlCarouselComponent_73_ng_template_0_Template, 1, 3, "ng-template", 9);
  }
  if (rf & 2) {
    const img_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", img_r40.id);
  }
}
function OwlCarouselComponent_80_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const img_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, img_r43.img), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function OwlCarouselComponent_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OwlCarouselComponent_80_ng_template_0_Template, 1, 3, "ng-template", 9);
  }
  if (rf & 2) {
    const img_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", img_r43.id);
  }
}
function OwlCarouselComponent_87_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const img_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, img_r46.img), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function OwlCarouselComponent_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OwlCarouselComponent_87_ng_template_0_Template, 1, 3, "ng-template", 9);
  }
  if (rf & 2) {
    const img_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", img_r46.id);
  }
}
function OwlCarouselComponent_94_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const img_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, img_r49.img), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function OwlCarouselComponent_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OwlCarouselComponent_94_ng_template_0_Template, 1, 3, "ng-template", 9);
  }
  if (rf & 2) {
    const img_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", img_r49.id);
  }
}
const _c1 = function () {
  return ["Bonus UI", "Advance"];
};
class OwlCarouselComponent {
  constructor() {
    this.owlcarousel1 = [{
      id: 1,
      img: "assets/images/slider/1.jpg"
    }, {
      id: 2,
      img: "assets/images/slider/2.jpg"
    }, {
      id: 3,
      img: "assets/images/slider/3.jpg"
    }, {
      id: 4,
      img: "assets/images/slider/4.jpg"
    }, {
      id: 5,
      img: "assets/images/slider/5.jpg"
    }, {
      id: 6,
      img: "assets/images/slider/6.jpg"
    }, {
      id: 7,
      img: "assets/images/slider/7.jpg"
    }, {
      id: 8,
      img: "assets/images/slider/8.jpg"
    }, {
      id: 9,
      img: "assets/images/slider/9.jpg"
    }, {
      id: 10,
      img: "assets/images/slider/10.jpg"
    }];
    //Options
    this.owlcarousel1Options = {
      loop: true,
      margin: 10,
      lazyLoad: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    };
    this.owlcarousel2Options = {
      loop: true,
      margin: 10,
      lazyLoad: true,
      items: 5,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    };
    this.owlcarousel3Options = {
      center: true,
      items: 5,
      lazyLoad: true,
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    };
    this.owlcarousel4Options = {
      items: 5,
      loop: true,
      lazyLoad: true,
      margin: 10,
      merge: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1,
          mergeFit: true
        },
        768: {
          items: 2,
          mergeFit: true
        },
        992: {
          items: 3,
          mergeFit: true
        }
      }
    };
    this.owlcarousel5Options = {
      margin: 10,
      loop: true,
      lazyLoad: true,
      autoWidth: true,
      items: 5,
      nav: false
    };
    this.owlcarousel6Options = {
      items: 5,
      loop: false,
      center: true,
      margin: 10,
      lazyLoad: true,
      URLhashListener: true,
      autoplayHoverPause: true,
      startPosition: 'URLHash',
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1,
          mergeFit: true
        },
        768: {
          items: 2,
          mergeFit: true
        },
        992: {
          items: 3,
          mergeFit: true
        }
      }
    };
    this.owlcarousel7Options = {
      stagePadding: 50,
      loop: true,
      margin: 10,
      lazyLoad: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1,
          mergeFit: true
        },
        768: {
          items: 2,
          mergeFit: true
        },
        992: {
          items: 3,
          mergeFit: true
        }
      }
    };
    this.owlcarousel8Options = {
      stagePadding: 50,
      loop: true,
      margin: 10,
      nav: false,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1,
          mergeFit: true
        },
        768: {
          items: 2,
          mergeFit: true
        },
        992: {
          items: 3,
          mergeFit: true
        }
      }
    };
    this.owlcarousel9Options = {
      rtl: true,
      loop: true,
      margin: 10,
      lazyLoad: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1,
          mergeFit: true
        },
        768: {
          items: 2,
          mergeFit: true
        },
        992: {
          items: 3,
          mergeFit: true
        }
      }
    };
    this.owlcarousel10Options = {
      items: 5,
      lazyLoad: true,
      loop: true,
      margin: 5,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1,
          mergeFit: true
        },
        768: {
          items: 2,
          mergeFit: true
        },
        992: {
          items: 3,
          mergeFit: true
        }
      }
    };
    this.owlcarousel12Options = {
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      items: 5,
      lazyLoad: true,
      margin: 30,
      stagePadding: 30,
      smartSpeed: 450,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1,
          mergeFit: true
        },
        768: {
          items: 2,
          mergeFit: true
        },
        992: {
          items: 3,
          mergeFit: true
        }
      }
    };
    this.owlcarousel13Options = {
      items: 5,
      loop: true,
      lazyLoad: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1,
          mergeFit: true
        },
        768: {
          items: 2,
          mergeFit: true
        },
        992: {
          items: 3,
          mergeFit: true
        }
      }
    };
    this.owlcarousel14Options = {
      items: 1,
      margin: 10,
      autoHeight: true,
      nav: false
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function OwlCarouselComponent_Factory(t) {
    return new (t || OwlCarouselComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OwlCarouselComponent,
    selectors: [["app-owl-carousel"]],
    decls: 95,
    vars: 30,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", "class", "item", 3, "id"], ["alt", "", 3, "src"]],
    template: function OwlCarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Basic Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "owl-carousel-o", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OwlCarouselComponent_10_Template, 1, 1, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4)(12, "div", 5)(13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Responsive Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6)(16, "owl-carousel-o", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, OwlCarouselComponent_17_Template, 1, 1, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4)(19, "div", 5)(20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Center Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6)(23, "owl-carousel-o", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, OwlCarouselComponent_24_Template, 1, 1, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4)(26, "div", 5)(27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Merge Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 6)(30, "owl-carousel-o", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, OwlCarouselComponent_31_Template, 1, 1, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 4)(33, "div", 5)(34, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Auto Width Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 6)(37, "owl-carousel-o", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, OwlCarouselComponent_38_Template, 1, 1, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 4)(40, "div", 5)(41, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "URL Hash Navigations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 6)(44, "owl-carousel-o", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, OwlCarouselComponent_45_Template, 1, 1, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 4)(47, "div", 5)(48, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 6)(51, "owl-carousel-o", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, OwlCarouselComponent_52_Template, 1, 1, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 4)(54, "div", 5)(55, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Stage Padding Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 6)(58, "owl-carousel-o", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, OwlCarouselComponent_59_Template, 1, 1, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 4)(61, "div", 5)(62, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Right to Left Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 6)(65, "owl-carousel-o", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, OwlCarouselComponent_66_Template, 1, 1, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 4)(68, "div", 5)(69, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Lazy load Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 6)(72, "owl-carousel-o", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, OwlCarouselComponent_73_Template, 1, 1, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 4)(75, "div", 5)(76, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Animate Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 6)(79, "owl-carousel-o", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, OwlCarouselComponent_80_Template, 1, 1, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 4)(82, "div", 5)(83, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Auto Play Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 6)(86, "owl-carousel-o", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, OwlCarouselComponent_87_Template, 1, 1, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 4)(89, "div", 5)(90, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Auto Height Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 6)(93, "owl-carousel-o", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, OwlCarouselComponent_94_Template, 1, 1, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Owl-carousel")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c1))("active_item", "Owl-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.owlcarousel1Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.owlcarousel2Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.owlcarousel3Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.owlcarousel4Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.owlcarousel5Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.owlcarousel6Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.owlcarousel7Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.owlcarousel8Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.owlcarousel9Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.owlcarousel10Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.owlcarousel12Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.owlcarousel13Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.owlcarousel1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.owlcarousel14Options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.owlcarousel1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 49178:
/*!********************************************************************************!*\
  !*** ./src/app/components/bonus-ui/advance/scrollable/scrollable.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollableComponent: () => (/* binding */ ScrollableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);


const _c0 = function () {
  return ["Bonus UI", "Advance"];
};
class ScrollableComponent {
  constructor() {
    this.disabled = false;
    this.config = {
      suppressScrollX: false,
      useBothWheelAxes: false
    };
    this.configBothSideScroll = {
      suppressScrollX: false
    };
    this.configX = {
      suppressScrollX: false,
      suppressScrollY: true
    };
    this.configY = {
      suppressScrollX: true,
      suppressScrollY: false
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ScrollableComponent_Factory(t) {
    return new (t || ScrollableComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ScrollableComponent,
    selectors: [["app-scrollable"]],
    decls: 108,
    vars: 10,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-6"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "scroll-bar-wrap"], [1, "click-drag-handler", "scroll-demo", "p-0", 3, "perfectScrollbar"], ["src", "assets/images/banner/2.jpg", "alt", "", "width", "800", "height", "600"], [1, "scrollbar-margins", "large-margin", "scroll-demo", "p-0", 3, "perfectScrollbar"], ["src", "assets/images/banner/3.jpg", "alt", "girl", "width", "1200", "height", "800"], [1, "visible-scroll", "always-visible", "scroll-demo", 3, "perfectScrollbar"], [1, "horz-scroll-content"], ["src", "assets/images/banner/1.jpg", "alt", "girl", "width", "800", "height", "600px"], [1, "horizontal-scroll", "scroll-demo", 3, "perfectScrollbar"], [1, "col-sm-3"], [1, "vertical-scroll", "scroll-demo", 3, "perfectScrollbar"]],
    template: function ScrollableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Click and Drag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3)(13, "div", 4)(14, "div", 5)(15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Small Size Scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6)(18, "div", 7)(19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3)(22, "div", 4)(23, "div", 5)(24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Both Side Scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 6)(27, "div", 7)(28, "div", 12)(29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 3)(32, "div", 4)(33, "div", 5)(34, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Horizontal Scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 6)(37, "div", 7)(38, "div", 15)(39, "div", 13)(40, "div", 2)(41, "div", 16)(42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 16)(45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 16)(48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 16)(51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 3)(54, "div", 4)(55, "div", 5)(56, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Always Visible Scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 6)(59, "div", 7)(60, "div", 12)(61, "div", 13)(62, "div", 2)(63, "div", 16)(64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 16)(71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 16)(78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 16)(85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 3)(92, "div", 4)(93, "div", 5)(94, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Vertical Scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 6)(97, "div", 17)(98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Scrollable")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0))("active_item", "Scrollable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.configBothSideScroll);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.configX);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.configBothSideScroll);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.configY);
      }
    },
    dependencies: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 69822:
/*!************************************************************************!*\
  !*** ./src/app/components/bonus-ui/advance/sticky/sticky.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StickyComponent: () => (/* binding */ StickyComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_sticky_sticky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/sticky/sticky */ 99824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);





function StickyComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StickyComponent_div_12_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const note_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.deleteNote(note_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "textarea", 13)(5, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const note_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", note_r1.isDeleted ? "none" : "");
  }
}
const _c0 = function () {
  return ["Bonus UI", "Advance"];
};
class StickyComponent {
  constructor(eRef) {
    this.eRef = eRef;
    this.notes = _shared_data_sticky_sticky__WEBPACK_IMPORTED_MODULE_0__.sticky;
  }
  ngOnInit() {}
  //Add new sticky note
  addStickyNote() {
    this.notes.push({
      id: this.notes.length + 1,
      isDeleted: false
    });
  }
  //Delete a particulr sticky note
  deleteNote(note) {
    note.isDeleted = true;
  }
  static #_ = this.ɵfac = function StickyComponent_Factory(t) {
    return new (t || StickyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: StickyComponent,
    selectors: [["app-sticky"]],
    decls: 13,
    vars: 5,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row", "sticky-header-main"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "pull-right", "m-l-10", 3, "click"], [1, "card-body"], ["id", "board", 1, "sticky-note"], ["class", "note ui-draggable ui-draggable-handle", "ng-style", "{'display': 'none'}", 3, "display", 4, "ngFor", "ngForOf"], ["ng-style", "{'display': 'none'}", 1, "note", "ui-draggable", "ui-draggable-handle"], ["href", "javascript:void(0);", 1, "button", "remove", 3, "click"], ["contenteditable", "true", 1, "note_cnt"], ["placeholder", "Enter note title", 1, "title", 2, "height", "64px"], ["placeholder", "Enter note description here", 1, "cnt", 2, "height", "200px"]],
    template: function StickyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Sticky Note ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StickyComponent_Template_a_click_8_listener() {
          return ctx.addStickyNote();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Add New Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, StickyComponent_div_12_Template, 6, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Sticky")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("active_item", "Sticky");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.notes);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 62678:
/*!************************************************************************************!*\
  !*** ./src/app/components/bonus-ui/advance/sweet-alert2/sweet-alert2.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SweetAlert2Component: () => (/* binding */ SweetAlert2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);


const _c0 = function () {
  return ["Bonus UI", "Advance"];
};
const Swal = __webpack_require__(/*! sweetalert2 */ 27889);
class SweetAlert2Component {
  constructor() {}
  ngOnInit() {}
  // Basic Alert
  basicAlert() {
    Swal.fire('Any fool can use a computer');
  }
  // Alert Title
  withTitle() {
    Swal.fire('The Internet?', 'That thing is still around?', 'question');
  }
  // Alert with Image
  withImage() {
    Swal.fire({
      imageUrl: 'assets/images/logo/logo.png',
      imageAlt: 'A Cuba Logo'
    });
  }
  // A modal with a title, an error icon, a text, and a footer
  error() {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>'
    });
  }
  // A warning
  warning() {
    Swal.fire({
      type: 'warning',
      title: 'Warning',
      text: 'You clicked the button!',
      showConfirmButton: true
    });
  }
  // A warning
  success() {
    Swal.fire({
      type: 'success',
      title: 'Success',
      text: 'You clicked the button!',
      showConfirmButton: true
    });
  }
  // Info
  info() {
    Swal.fire({
      type: 'info',
      title: 'Info',
      text: 'You clicked the button!',
      showConfirmButton: true
    });
  }
  // Danger
  danger() {
    Swal.fire({
      type: 'error',
      title: 'Danger',
      text: 'You clicked the button!',
      showConfirmButton: true
    });
  }
  // Custom HTML description and buttons with ARIA labels
  customHTML() {
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      type: 'info',
      html: 'You can use <b>bold text</b>, ' + '<a href="//github.com">links</a> ' + 'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    });
  }
  // custom position
  customPosition() {
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
  }
  // Custom animation
  customAnimation() {
    Swal.fire({
      title: 'Custom animation with Animate.css',
      animation: true,
      customClass: 'animated tada'
    });
  }
  // A Custom animation
  customAlert() {
    Swal.fire({
      title: 'Custom width, padding, background.',
      width: 600,
      padding: 100,
      background: '#fff url(coming-soon-bg.jpg)',
      backdrop: `
            rgba(20, 72, 72, 0.48)
            center left
            no-repeat
          `,
      customClass: 'text-dark'
    });
  }
  // A warning message, with a function attached to the "Confirm"-button...
  withConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
  // A warning message, with a function attached to the "Confirm"-button and by passing a parameter, you can execute something else for "Cancel".
  withCancelled() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
      } else if (
      // Read more about handling dismissals
      result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
  // A message with auto close timer
  autoClose() {
    let timerInterval;
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <strong></strong> seconds.',
      timer: 2000,
      onBeforeOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          Swal.getContent().querySelector('strong').textContent = Swal.getTimerLeft();
        }, 100);
      },
      onClose: () => {
        clearInterval(timerInterval);
      }
    }).then(result => {
      if (
      // Read more about handling dismissals
      result.dismiss === Swal.DismissReason.timer) {}
    });
  }
  // A Ajax request example
  withAjax() {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: login => {
        return fetch(`//api.github.com/users/${login}`).then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        }).catch(error => {
          Swal.showValidationMessage(`Request failed: ${error}`);
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then(result => {
      if (result.value) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        });
      }
    });
  }
  // Chaining modals (queue) example
  stepsAlert() {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([{
      title: 'Question 1',
      text: 'Chaining swal2 modals is easy'
    }, 'Question 2', 'Question 3']).then(result => {
      if (result.value) {
        Swal.fire({
          title: 'All done!',
          html: 'Your answers: <pre><code>' + JSON.stringify(result.value) + '</code></pre>',
          confirmButtonText: 'Lovely!'
        });
      }
    });
  }
  // Dynamic queue example
  dynamicQueue() {
    const ipAPI = 'https://api.ipify.org?format=json';
    Swal.queue([{
      title: 'Your public IP',
      confirmButtonText: 'Show my public IP',
      text: 'Your public IP will be received ' + 'via AJAX request',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return fetch(ipAPI).then(response => response.json()).then(data => Swal.insertQueueStep(data.ip)).catch(() => {
          Swal.insertQueueStep({
            type: 'error',
            title: 'Unable to get your public IP'
          });
        });
      }
    }]);
  }
  //RTL Alert
  rtlAlert() {
    Swal.fire({
      title: 'هل تريد الاستمرار؟',
      type: 'question',
      customClass: {
        icon: 'swal2-arabic-question-mark'
      },
      confirmButtonText: 'نعم',
      cancelButtonText: 'لا',
      showCancelButton: true,
      showCloseButton: true
    });
  }
  //alter close after particular time
  customTimer() {
    let timerInterval;
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <strong></strong> seconds.<br/><br/>' + '<button id="increase" class="btn btn-warning">' + 'I need 5 more seconds!' + '</button><br/>' + '<button id="stop" class="btn btn-danger">' + 'Please stop the timer!!' + '</button><br/>' + '<button id="resume" class="btn btn-success" disabled>' + 'Phew... you can restart now!' + '</button><br/>' + '<button id="toggle" class="btn btn-primary">' + 'Toggle' + '</button>',
      timer: 10000,
      onBeforeOpen: () => {
        const content = Swal.getContent();
        const $ = content.querySelector.bind(content);
        const stop = $('#stop');
        const resume = $('#resume');
        const toggle = $('#toggle');
        const increase = $('#increase');
        Swal.showLoading();
        function toggleButtons() {
          stop.disabled = !Swal.isTimerRunning();
          resume.disabled = Swal.isTimerRunning();
        }
        stop.addEventListener('click', () => {
          Swal.stopTimer();
          toggleButtons();
        });
        resume.addEventListener('click', () => {
          Swal.resumeTimer();
          toggleButtons();
        });
        toggle.addEventListener('click', () => {
          Swal.toggleTimer();
          toggleButtons();
        });
        increase.addEventListener('click', () => {
          Swal.increaseTimer(5000);
        });
        timerInterval = setInterval(() => {
          Swal.getContent().querySelector('strong').textContent = (Swal.getTimerLeft() / 1000).toFixed(0);
        }, 100);
      },
      onClose: () => {
        clearInterval(timerInterval);
      }
    });
  }
  static #_ = this.ɵfac = function SweetAlert2Component_Factory(t) {
    return new (t || SweetAlert2Component)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SweetAlert2Component,
    selectors: [["app-sweet-alert2"]],
    decls: 71,
    vars: 4,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "btn-showcase"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
    template: function SweetAlert2Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_10_listener() {
          return ctx.basicAlert();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_12_listener() {
          return ctx.withTitle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "With Title alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_14_listener() {
          return ctx.withImage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "With Image alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_16_listener() {
          return ctx.error();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3)(19, "div", 4)(20, "div", 5)(21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Advanced");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 6)(24, "div", 7)(25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_25_listener() {
          return ctx.withConfirmation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "With Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_27_listener() {
          return ctx.withCancelled();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "With Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_29_listener() {
          return ctx.autoClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Auto Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_31_listener() {
          return ctx.withAjax();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "With Ajax");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_33_listener() {
          return ctx.stepsAlert();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Step Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_35_listener() {
          return ctx.dynamicQueue();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Dynamic Queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_37_listener() {
          return ctx.rtlAlert();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "RTL Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_39_listener() {
          return ctx.customTimer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Custom Timer Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 3)(42, "div", 4)(43, "div", 5)(44, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 6)(47, "div", 7)(48, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_48_listener() {
          return ctx.customAlert();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Custom Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_50_listener() {
          return ctx.customHTML();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Custom HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_52_listener() {
          return ctx.customAnimation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Custom Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_54_listener() {
          return ctx.customPosition();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Custom Positioned");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 3)(57, "div", 4)(58, "div", 5)(59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "States");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 6)(62, "div", 7)(63, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_63_listener() {
          return ctx.warning();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_65_listener() {
          return ctx.success();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_67_listener() {
          return ctx.info();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SweetAlert2Component_Template_button_click_69_listener() {
          return ctx.danger();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Sweet Alert 2")("items", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("active_item", "Sweet Alert 2");
      }
    },
    dependencies: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 99824:
/*!**********************************************!*\
  !*** ./src/app/shared/data/sticky/sticky.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sticky: () => (/* binding */ sticky)
/* harmony export */ });
var sticky = [{
  id: 1,
  isDeleted: false
}, {
  id: 2,
  isDeleted: false
}, {
  id: 3,
  isDeleted: false
}, {
  id: 4,
  isDeleted: false
}];

/***/ }),

/***/ 18456:
/*!********************************************************************************************!*\
  !*** ./node_modules/@sweetalert2/ngx-sweetalert2/fesm2020/sweetalert2-ngx-sweetalert2.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwalComponent: () => (/* binding */ SwalComponent),
/* harmony export */   SwalDirective: () => (/* binding */ SwalDirective),
/* harmony export */   SwalPortalDirective: () => (/* binding */ SwalPortalDirective),
/* harmony export */   SwalPortalTargets: () => (/* binding */ SwalPortalTargets),
/* harmony export */   SweetAlert2LoaderService: () => (/* binding */ SweetAlert2LoaderService),
/* harmony export */   SweetAlert2Module: () => (/* binding */ SweetAlert2Module)
/* harmony export */ });
/* harmony import */ var _Users_murchcode_Development_projects_service_contract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);







function SwalPortalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const swalProviderToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('@sweetalert2/ngx-sweetalert2#swalProvider');
const fireOnInitToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('@sweetalert2/ngx-sweetalert2#fireOnInit');
const dismissOnDestroyToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('@sweetalert2/ngx-sweetalert2#dismissOnDestroy');
class SweetAlert2LoaderService {
  // Using any because Angular metadata generator does not understand a pure TS type here
  constructor(swalProvider) {
    this.swalProvider = swalProvider;
  }
  get swal() {
    if (!this.swalPromiseCache) {
      this.preloadSweetAlertLibrary();
    }
    return this.swalPromiseCache;
  }
  preloadSweetAlertLibrary() {
    if (this.swalPromiseCache) return;
    const libPromise = isLoader(this.swalProvider) ? this.swalProvider() : Promise.resolve(this.swalProvider);
    this.swalPromiseCache = libPromise.then(value => isDefaultExport(value) ? value : value.default);
    function isLoader(value) {
      return typeof value === 'function' && value.version === undefined;
    }
    function isDefaultExport(value) {
      return typeof value === 'function';
    }
  }
}
SweetAlert2LoaderService.ɵfac = function SweetAlert2LoaderService_Factory(t) {
  return new (t || SweetAlert2LoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](swalProviderToken));
};
SweetAlert2LoaderService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SweetAlert2LoaderService,
  factory: SweetAlert2LoaderService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SweetAlert2LoaderService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [swalProviderToken]
      }]
    }];
  }, null);
})();

/**
 * <swal> component. See the README.md for usage.
 *
 * It contains a bunch of @Inputs that have a perfect 1:1 mapping with SweetAlert2 options.
 * Their types are directly coming from SweetAlert2 types defintitions, meaning that ngx-sweetalert2 is tightly coupled
 * to SweetAlert2, but also is type-safe even if both libraries do not evolve in sync.
 *
 * (?) If you want to use an object that declares the SweetAlert2 options all at once rather than many @Inputs,
 *     take a look at [swalOptions], that lets you pass a full {@link SweetAlertOptions} object.
 *
 * (?) If you are reading the TypeScript source of this component, you may think that it's a lot of code.
 *     Be sure that a lot of this code is types and Angular boilerplate. Compiled and minified code is much smaller.
 *     If you are really concerned about performance and/or don't care about the API and its convenient integration
 *     with Angular (notably change detection and transclusion), you may totally use SweetAlert2 natively as well ;)
 *
 * /!\ Some SweetAlert options aren't @Inputs but @Outputs: `willOpen`, `didOpen`, `didRender`, `willClose`, `didClose`
 *     and `didDestroy`.
 *     However, `preConfirm`, `preDeny` and `inputValidator` are still @Inputs because they are not event handlers,
 *     there can't be multiple listeners on them, and we need the values they can/must return.
 */
class SwalComponent {
  constructor(sweetAlert2Loader, moduleLevelFireOnInit, moduleLevelDismissOnDestroy) {
    this.sweetAlert2Loader = sweetAlert2Loader;
    this.moduleLevelFireOnInit = moduleLevelFireOnInit;
    this.moduleLevelDismissOnDestroy = moduleLevelDismissOnDestroy;
    /**
     * Modal lifecycle hook. Synchronously runs before the modal is shown on screen.
     */
    this.willOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Modal lifecycle hook. Synchronously runs before the modal is shown on screen.
     */
    this.didOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Modal lifecycle hook. Synchronously runs after the popup DOM has been updated (ie. just before the modal is
     * repainted on the screen).
     * Typically, this will happen after `Swal.fire()` or `Swal.update()`.
     * If you want to perform changes in the popup's DOM, that survive `Swal.update()`, prefer {@link didRender} over
     * {@link willOpen}.
     */
    this.didRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Modal lifecycle hook. Synchronously runs when the popup closes by user interaction (and not due to another popup
     * being fired).
     */
    this.willClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Modal lifecycle hook. Asynchronously runs after the popup has been disposed by user interaction (and not due to
     * another popup being fired).
     */
    this.didClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Modal lifecycle hook. Synchronously runs after popup has been destroyed either by user interaction or by another
     * popup.
     * If you have cleanup operations that you need to reliably execute each time a modal is closed, prefer
     * {@link didDestroy} over {@link didClose}.
     */
    this.didDestroy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Emits when the user clicks "Confirm".
     * The event value ($event) can be either:
     *  - by default, just `true`,
     *  - when using {@link input}, the input value,
     *  - when using {@link preConfirm}, the return value of this function.
     *
     * Example:
     *     <swal (confirm)="handleConfirm($event)"></swal>
     *
     *     public handleConfirm(email: string): void {
     *         // ... save user email
     *     }
     */
    this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Emits when the user clicks "Deny".
     * This event bears no value.
     * Use `(deny)` (along with {@link showDenyButton}) when you want a modal with three buttons (confirm, deny and
     * cancel), and/or when you want to handle clear refusal in a separate way than simple dismissal.
     *
     * Example:
     *     <swal (deny)="handleDeny()"></swal>
     *
     *     public handleDeny(): void {
     *     }
     */
    this.deny = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Emits when the user clicks "Cancel", or dismisses the modal by any other allowed way.
     * The event value ($event) is a string that explains how the modal was dismissed. It is `undefined` when
     * the modal was programmatically closed (through {@link close} for example).
     *
     * Example:
     *     <swal (dismiss)="handleDismiss($event)"></swal>
     *
     *     public handleDismiss(reason: DismissReason | undefined): void {
     *         // reason can be 'cancel', 'overlay', 'close', 'timer' or undefined.
     *         // ... do something
     *     }
     */
    this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * This Set retains the properties that have been changed from @Inputs, so we can know precisely
     * what options we have to send to {@link Swal.fire}.
     */
    this.touchedProps = new Set();
    /**
     * A function of signature `(propName: string): void` that adds a given property name to the list of
     * touched properties, ie. {@link touchedProps}.
     */
    this.markTouched = this.touchedProps.add.bind(this.touchedProps);
    /**
     * Is the SweetAlert2 modal represented by this component currently opened?
     */
    this.isCurrentlyShown = false;
  }
  /**
   * An object of SweetAlert2 native options, useful if:
   *  - you don't want to use the @Inputs for practical/philosophical reasons ;
   *  - there are missing @Inputs because ngx-sweetalert2 isn't up-to-date with SweetAlert2's latest changes.
   *
   * /!\ Please note that setting this property does NOT erase what has been set before unless you specify the
   *     previous properties you want to erase again.
   *     Ie. setting { title: 'Title' } and then { text: 'Text' } will give { title: 'Title', text: 'Text' }.
   *
   * /!\ Be aware that the options defined in this object will override the @Inputs of the same name.
   */
  set swalOptions(options) {
    //=> Update properties
    Object.assign(this, options);
    //=> Mark changed properties as touched
    const touchedKeys = Object.keys(options);
    touchedKeys.forEach(this.markTouched);
  }
  /**
   * Computes the options object that will get passed to SweetAlert2.
   * Only the properties that have been set at least once on this component will be returned.
   * Mostly for internal usage.
   */
  get swalOptions() {
    //=> We will compute the options object based on the option keys that are known to have changed.
    //   That avoids passing a gigantic object to SweetAlert2, making debugging easier and potentially
    //   avoiding side effects.
    return [...this.touchedProps].reduce((obj, key) => ({
      ...obj,
      [key]: this[key]
    }), {});
  }
  set swalVisible(visible) {
    visible ? this.fire() : this.close();
  }
  get swalVisible() {
    return this.isCurrentlyShown;
  }
  /**
   * Angular lifecycle hook.
   * Asks the SweetAlert2 loader service to preload the SweetAlert2 library, so it begins to be loaded only if there
   * is a <swal> component somewhere, and is probably fully loaded when the modal has to be displayed,
   * causing no delay.
   */
  ngOnInit() {
    //=> Preload SweetAlert2 library in case this component is activated.
    this.sweetAlert2Loader.preloadSweetAlertLibrary();
  }
  /**
   * Angular lifecycle hook.
   * Fires the modal, if the component or module is configured to do so.
   */
  ngAfterViewInit() {
    const fireOnInit = this.swalFireOnInit === undefined ? this.moduleLevelFireOnInit : this.swalFireOnInit;
    fireOnInit && this.fire();
  }
  /**
   * Angular lifecycle hook.
   * Updates the SweetAlert options, and if the modal is opened, asks SweetAlert to render it again.
   */
  ngOnChanges(changes) {
    //=> For each changed @Input that matches a SweetAlert2 option, mark as touched so we can
    //   send it with the next fire() or update() calls.
    Object.keys(changes)
    //=> If the filtering logic becomes more complex here, we can use Swal.isValidParameter
    .filter(key => !key.startsWith('swal')).forEach(this.markTouched);
    //=> Eventually trigger re-render if the modal is open.
    void this.update();
  }
  /**
   * Angular lifecycle hook.
   * Closes the SweetAlert when the component is destroyed.
   */
  ngOnDestroy() {
    //=> Release the modal if the component is destroyed and if that behaviour is not disabled.
    const dismissOnDestroy = this.swalDismissOnDestroy === undefined ? this.moduleLevelDismissOnDestroy : this.swalDismissOnDestroy;
    dismissOnDestroy && this.close();
  }
  /**
   * Shows the SweetAlert.
   *
   * Returns the SweetAlert2 promise for convenience and use in code behind templates.
   * Otherwise, (confirm)="myHandler($event)" and (dismiss)="myHandler($event)" can be used in templates.
   */
  fire() {
    var _this = this;
    return (0,_Users_murchcode_Development_projects_service_contract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const swal = yield _this.sweetAlert2Loader.swal;
      const userOptions = _this.swalOptions;
      //=> Build the SweetAlert2 options
      const options = {
        //=> Merge with calculated options set for that specific swal
        ...userOptions,
        //=> Handle modal lifecycle events
        willOpen: composeHook(userOptions.willOpen, modalElement => {
          _this.willOpen.emit({
            modalElement
          });
        }),
        didOpen: composeHook(userOptions.didOpen, modalElement => {
          _this.isCurrentlyShown = true;
          _this.didOpen.emit({
            modalElement
          });
        }),
        didRender: composeHook(userOptions.didRender, modalElement => {
          _this.didRender.emit({
            modalElement
          });
        }),
        willClose: composeHook(userOptions.willClose, modalElement => {
          _this.isCurrentlyShown = false;
          _this.willClose.emit({
            modalElement
          });
        }),
        didClose: composeHook(userOptions.didClose, () => {
          _this.didClose.emit();
        }),
        didDestroy: composeHook(userOptions.didDestroy, () => {
          _this.didDestroy.emit();
        })
      };
      //=> Show the Swal! And wait for confirmation or dimissal.
      const result = yield swal.fire(options);
      //=> Emit on (confirm), (deny) or (dismiss)
      switch (true) {
        case result.isConfirmed:
          _this.confirm.emit(result.value);
          break;
        case result.isDenied:
          _this.deny.emit();
          break;
        case result.isDismissed:
          _this.dismiss.emit(result.dismiss);
          break;
      }
      return result;
      function composeHook(userHook, libHook) {
        return (...args) => (libHook(...args), userHook?.(...args));
      }
    })();
  }
  /**
   * Closes the modal, if opened.
   *
   * @param result The value that the modal will resolve with, triggering either (confirm), (deny) or (dismiss).
   *               If the argument is not passed, it is (dismiss) that will emit an `undefined` reason.
   *               {@see Swal.close}.
   */
  close(result) {
    var _this2 = this;
    return (0,_Users_murchcode_Development_projects_service_contract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.isCurrentlyShown) return;
      const swal = yield _this2.sweetAlert2Loader.swal;
      swal.close(result);
    })();
  }
  /**
   * Updates SweetAlert2 options while the modal is opened, causing the modal to re-render.
   * If the modal is not opened, the component options will simply be updated and that's it.
   *
   * /!\ Please note that not all SweetAlert2 options are updatable while the modal is opened.
   *
   * @param options
   */
  update(options) {
    var _this3 = this;
    return (0,_Users_murchcode_Development_projects_service_contract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (options) {
        _this3.swalOptions = options;
      }
      if (!_this3.isCurrentlyShown) return;
      const swal = yield _this3.sweetAlert2Loader.swal;
      const allOptions = _this3.swalOptions;
      const updatableOptions = Object.keys(allOptions).filter(swal.isUpdatableParameter).reduce((obj, key) => ({
        ...obj,
        [key]: allOptions[key]
      }), {});
      swal.update(updatableOptions);
    })();
  }
}
SwalComponent.ɵfac = function SwalComponent_Factory(t) {
  return new (t || SwalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SweetAlert2LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](fireOnInitToken), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](dismissOnDestroyToken));
};
SwalComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SwalComponent,
  selectors: [["swal"]],
  inputs: {
    title: "title",
    titleText: "titleText",
    text: "text",
    html: "html",
    footer: "footer",
    icon: "icon",
    iconColor: "iconColor",
    iconHtml: "iconHtml",
    backdrop: "backdrop",
    toast: "toast",
    target: "target",
    input: "input",
    width: "width",
    padding: "padding",
    background: "background",
    position: "position",
    grow: "grow",
    showClass: "showClass",
    hideClass: "hideClass",
    customClass: "customClass",
    timer: "timer",
    timerProgressBar: "timerProgressBar",
    heightAuto: "heightAuto",
    allowOutsideClick: "allowOutsideClick",
    allowEscapeKey: "allowEscapeKey",
    allowEnterKey: "allowEnterKey",
    stopKeydownPropagation: "stopKeydownPropagation",
    keydownListenerCapture: "keydownListenerCapture",
    showConfirmButton: "showConfirmButton",
    showDenyButton: "showDenyButton",
    showCancelButton: "showCancelButton",
    confirmButtonText: "confirmButtonText",
    denyButtonText: "denyButtonText",
    cancelButtonText: "cancelButtonText",
    confirmButtonColor: "confirmButtonColor",
    denyButtonColor: "denyButtonColor",
    cancelButtonColor: "cancelButtonColor",
    confirmButtonAriaLabel: "confirmButtonAriaLabel",
    denyButtonAriaLabel: "denyButtonAriaLabel",
    cancelButtonAriaLabel: "cancelButtonAriaLabel",
    buttonsStyling: "buttonsStyling",
    reverseButtons: "reverseButtons",
    focusConfirm: "focusConfirm",
    focusDeny: "focusDeny",
    focusCancel: "focusCancel",
    showCloseButton: "showCloseButton",
    closeButtonHtml: "closeButtonHtml",
    closeButtonAriaLabel: "closeButtonAriaLabel",
    loaderHtml: "loaderHtml",
    showLoaderOnConfirm: "showLoaderOnConfirm",
    preConfirm: "preConfirm",
    preDeny: "preDeny",
    imageUrl: "imageUrl",
    imageWidth: "imageWidth",
    imageHeight: "imageHeight",
    imageAlt: "imageAlt",
    inputLabel: "inputLabel",
    inputPlaceholder: "inputPlaceholder",
    inputValue: "inputValue",
    inputOptions: "inputOptions",
    inputAutoTrim: "inputAutoTrim",
    inputAttributes: "inputAttributes",
    inputValidator: "inputValidator",
    returnInputValueOnDeny: "returnInputValueOnDeny",
    validationMessage: "validationMessage",
    progressSteps: "progressSteps",
    currentProgressStep: "currentProgressStep",
    progressStepsDistance: "progressStepsDistance",
    scrollbarPadding: "scrollbarPadding",
    swalOptions: "swalOptions",
    swalFireOnInit: "swalFireOnInit",
    swalDismissOnDestroy: "swalDismissOnDestroy",
    swalVisible: "swalVisible"
  },
  outputs: {
    willOpen: "willOpen",
    didOpen: "didOpen",
    didRender: "didRender",
    willClose: "willClose",
    didClose: "didClose",
    didDestroy: "didDestroy",
    confirm: "confirm",
    deny: "deny",
    dismiss: "dismiss"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 0,
  vars: 0,
  template: function SwalComponent_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'swal',
      template: '',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: SweetAlert2LoaderService
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [fireOnInitToken]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [dismissOnDestroyToken]
      }]
    }];
  }, {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    titleText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    html: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    footer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    iconColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    iconHtml: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    backdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    toast: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    target: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    input: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    padding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    background: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    grow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    hideClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    customClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    timer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    timerProgressBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    heightAuto: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    allowOutsideClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    allowEscapeKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    allowEnterKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    stopKeydownPropagation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    keydownListenerCapture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showConfirmButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showDenyButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showCancelButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    confirmButtonText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    denyButtonText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    cancelButtonText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    confirmButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    denyButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    cancelButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    confirmButtonAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    denyButtonAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    cancelButtonAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    buttonsStyling: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    reverseButtons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    focusConfirm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    focusDeny: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    focusCancel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showCloseButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    closeButtonHtml: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    closeButtonAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    loaderHtml: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showLoaderOnConfirm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    preConfirm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    preDeny: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageAlt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    inputLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    inputPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    inputValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    inputOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    inputAutoTrim: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    inputAttributes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    inputValidator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    returnInputValueOnDeny: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    validationMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    progressSteps: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    currentProgressStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    progressStepsDistance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scrollbarPadding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    swalOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    swalFireOnInit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    swalDismissOnDestroy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    swalVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    willOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    didOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    didRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    willClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    didClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    didDestroy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    confirm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    deny: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    dismiss: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();

/**
 * [swal] directive. It takes a value that defines the SweetAlert and can be of three types:
 *
 * 1) A simple array of two or three strings defining [title, text, icon] - the icon being optional, ex:
 *
 *    <button [swal]="['Title', 'Text']">Click me</button>
 *
 * 2) A native SweetAlert2 options object, ex:
 *
 *    <button [swal]="{ title: 'Title', text: 'Text' }">Click me</button>
 *
 * 3) A reference to an existing SwalComponent instance for more advanced uses, ex:
 *
 *    <button [swal]="mySwal">Click me</button>
 *    <swal #mySwal title="Title" text="Text"></swal>
 */
class SwalDirective {
  constructor(viewContainerRef, resolver) {
    this.viewContainerRef = viewContainerRef;
    this.resolver = resolver;
    /**
     * Emits when the user clicks "Confirm".
     * The event value ($event) can be either:
     *  - by default, just `true`,
     *  - when using {@link input}, the input value,
     *  - when using {@link preConfirm}, the return value of this function.
     *
     * Example:
     *     <swal (confirm)="handleConfirm($event)"></swal>
     *
     *     public handleConfirm(email: string): void {
     *         // ... save user email
     *     }
     */
    this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Emits when the user clicks "Deny".
     * This event bears no value.
     * Use `(deny)` (along with {@link showDenyButton}) when you want a modal with three buttons (confirm, deny and
     * cancel), and/or when you want to handle clear refusal in a separate way than simple dismissal.
     *
     * Example:
     *     <swal (deny)="handleDeny()"></swal>
     *
     *     public handleDeny(): void {
     *     }
     */
    this.deny = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Emits when the user clicks "Cancel", or dismisses the modal by any other allowed way.
     * The event value ($event) is a string that explains how the modal was dismissed. It is `undefined` when
     * the modal was programmatically closed (through {@link dismiss} for example).
     *
     * Example:
     *     <swal (dismiss)="handleDismiss($event)"></swal>
     *
     *     public handleDismiss(reason: DismissReason | undefined): void {
     *         // reason can be 'cancel', 'overlay', 'close', 'timer' or undefined.
     *         // ... do something
     *     }
     */
    this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  /**
   * SweetAlert2 options or a SwalComponent instance.
   * See the class doc block for more informations.
   */
  set swal(options) {
    if (options instanceof SwalComponent) {
      this.swalInstance = options;
    } else if (isArrayOptions(options)) {
      this.swalOptions = {};
      [this.swalOptions.title, this.swalOptions.text, this.swalOptions.icon] = options;
    } else {
      this.swalOptions = options;
    }
    function isArrayOptions(value) {
      return Array.isArray(options);
    }
  }
  /**
   * OnInit lifecycle handler.
   * Creates a SwalComponent instance if the user didn't provided one and binds on that component (confirm),
   * (deny) and (dismiss) outputs to reemit on the directive.
   */
  ngOnInit() {
    if (!this.swalInstance) {
      const factory = this.resolver.resolveComponentFactory(SwalComponent);
      this.swalRef = this.viewContainerRef.createComponent(factory);
      this.swalInstance = this.swalRef.instance;
    }
  }
  /**
   * OnDestroy lifecycle handler.
   * Destroys the dynamically-created SwalComponent.
   */
  ngOnDestroy() {
    if (this.swalRef) {
      this.swalRef.destroy();
    }
  }
  /**
   * Click handler.
   * The directive listens for onclick events on its host element.
   * When this happens, it shows the <swal> attached to this directive.
   */
  onClick(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
    if (!this.swalInstance) return;
    if (this.swalOptions) {
      this.swalInstance.swalOptions = this.swalOptions;
    }
    const swalClosed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.swalInstance.confirm.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(swalClosed)).subscribe(v => this.confirm.emit(v));
    this.swalInstance.deny.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(swalClosed)).subscribe(v => this.deny.emit(v));
    this.swalInstance.dismiss.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(swalClosed)).subscribe(v => this.dismiss.emit(v));
    this.swalInstance.fire().then(() => swalClosed.next());
  }
}
SwalDirective.ɵfac = function SwalDirective_Factory(t) {
  return new (t || SwalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver));
};
SwalDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: SwalDirective,
  selectors: [["", "swal", ""]],
  hostBindings: function SwalDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SwalDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  },
  inputs: {
    swal: "swal"
  },
  outputs: {
    confirm: "confirm",
    deny: "deny",
    dismiss: "dismiss"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[swal]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver
    }];
  }, {
    swal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    confirm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    deny: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    dismiss: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['click', ['$event']]
    }]
  });
})();

/**
 * @internal
 * Holds a consumer's Angular template and displays it on a Sweet Alert.
 * See SwalPortalDirective for info about the covered feature.
 */
class SwalPortalComponent {
  constructor() {
    this.template = null;
  }
}
SwalPortalComponent.ɵfac = function SwalPortalComponent_Factory(t) {
  return new (t || SwalPortalComponent)();
};
SwalPortalComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SwalPortalComponent,
  selectors: [["swal-portal"]],
  inputs: {
    template: "template"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngTemplateOutlet"]],
  template: function SwalPortalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SwalPortalComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.template);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalPortalComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'swal-portal',
      template: '<ng-container *ngTemplateOutlet="template"></ng-container>',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * Represents an object of targets for <swal> portals (use with *swalPortal directive).
 * We must use thunks to access the Swal.* functions listed below, because they get created after the first modal is
 * shown, so this object lets us reference those functions safely and in a statically-typed manner.
 */
class SwalPortalTargets {
  constructor() {
    /**
     * Targets the modal close button block contents.
     */
    this.closeButton = {
      element: swal => swal.getCloseButton(),
      options: {
        showCloseButton: true
      }
    };
    /**
     * Targets the modal title block contents.
     */
    this.title = {
      element: swal => swal.getTitle(),
      // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
      options: {
        title: ' '
      }
    };
    /**
     * Targets the modal text block contents (that is another block inside the first content block, so you can still
     * use other modal features like Swal inputs, that are situated inside that parent content block).
     */
    this.content = {
      element: swal => swal.getHtmlContainer(),
      // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
      options: {
        text: ' '
      }
    };
    /**
     * Targets the actions block contents, where are the confirm and cancel buttons in a normal time.
     * /!\ WARNING: using this target destroys some of the native SweetAlert2 modal's DOM, therefore, if you use this
     *     target, do not update the modal via <swal> @Inputs while the modal is open, or you'll get an error.
     *     We could workaround that inconvenient inside this integration, but that'd be detrimental to memory and
     *     performance of everyone, for a relatively rare use case.
     */
    this.actions = {
      element: swal => swal.getActions(),
      // The button will never exist, but SweetAlert2 shows the actions block only if there is at least one button.
      options: {
        showConfirmButton: true
      }
    };
    /**
     * Targets the confirm button contents, replacing the text inside it (not the button itself)
     */
    this.confirmButton = {
      element: swal => swal.getConfirmButton(),
      options: {
        showConfirmButton: true
      }
    };
    /**
     * Targets the deny button contents, replacing the text inside it (not the button itself)
     */
    this.denyButton = {
      element: swal => swal.getDenyButton(),
      options: {
        showDenyButton: true
      }
    };
    /**
     * Targets the cancel button contents, replacing the text inside it (not the button itself)
     */
    this.cancelButton = {
      element: swal => swal.getCancelButton(),
      options: {
        showCancelButton: true
      }
    };
    /**
     * Targets the modal footer contents.
     */
    this.footer = {
      element: swal => swal.getFooter(),
      // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
      options: {
        footer: ' '
      }
    };
  }
}
SwalPortalTargets.ɵfac = function SwalPortalTargets_Factory(t) {
  return new (t || SwalPortalTargets)();
};
SwalPortalTargets.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SwalPortalTargets,
  factory: SwalPortalTargets.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalPortalTargets, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

/**
 * A structural directive that lets you use Angular templates inside of SweetAlerts.
 * There are different targetable zones provided by {@link SwalPortalTargets}: title, content, confirmButton, etc, but
 * you can also make your own target by implementing {@link SwalPortalTarget} and giving it to this directive.
 * The default target is the alert text content zone.
 *
 * Usage in your component's TypeScript (if you use another target than {@link SwalPortalTargets.content}):
 *
 *     @Component({ ... })
 *     export class MyComponent {
 *         public constructor(public readonly swalTargets: SwalPortalTargets) {
 *         }
 *     }
 *
 * Usage in the template:
 *
 *     <swal title="Fill the form" (confirm)="confirmHandler()">
 *         <!-- This form will be displayed as the alert main content
 *              Targets the alert's main content zone by default -->
 *         <form *swalPortal [formControl]="myForm">
 *             ...
 *         </form>
 *
 *         <!-- This targets the confirm button's inner content
 *              Notice the usage of ng-container to avoid creating an useless DOM element inside the button -->
 *         <ng-container *swalPortal="swalTargets.confirmButton">
 *              Send ({{ secondsLeft }} seconds left)
 *         </ng-container>
 *     <swal>
 */
class SwalPortalDirective {
  constructor(resolver, injector, app, templateRef, sweetAlert2Loader, swalTargets, swalComponent) {
    this.resolver = resolver;
    this.injector = injector;
    this.app = app;
    this.templateRef = templateRef;
    this.sweetAlert2Loader = sweetAlert2Loader;
    this.swalTargets = swalTargets;
    this.swalComponent = swalComponent;
    this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  /**
   * Subscribes to the the SweetAlert appearance/disappearance events to create/destroy the SwalPortalComponent
   * that will receive the consumer's template.
   */
  ngOnInit() {
    // Can't be set in a default property value, if the customer lets *swalPortal empty, the value we get is undef.
    this.target = this.target || this.swalTargets.content;
    //=> Apply the options provided by the target definition
    void this.swalComponent.update(this.target.options);
    //=> Subscribe to a few hooks frm the parent SwalComponent.
    this.swalComponent.didRender.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroyed)).subscribe(this.didRenderHook.bind(this));
    this.swalComponent.willOpen.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroyed)).subscribe(this.willOpenHook.bind(this));
    this.swalComponent.didDestroy.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroyed)).subscribe(this.didDestroyHook.bind(this));
  }
  /**
   * Signal any {@link destroyed} consumer that this is over, so they can unsubscribe from the
   * parent SwalComponent events.
   */
  ngOnDestroy() {
    this.destroyed.next();
  }
  /**
   * This didRender hook runs 1..n times (per modal instance), just before the modal is shown (and also before the
   * {@link willOpenHook}), or after Swal.update() is called.
   * This is a good place to render, or re-render, our portal contents.
   */
  didRenderHook() {
    var _this4 = this;
    return (0,_Users_murchcode_Development_projects_service_contract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //=> Ensure the portal component is created
      if (!_this4.portalComponentRef) {
        _this4.portalComponentRef = _this4.createPortalComponent();
      }
      //=> SweetAlert2 created the modal or just erased all of our content, so we need to install/reinstall it.
      // Swal.update() is synchronous, this observable too, and mountComponentOnTarget too (the promise inside
      // this function is already resolved at this point), so the whole process of re-rendering and re-mounting
      // the portal component is fully synchronous, causing no blinks in the modal contents.
      const swal = yield _this4.sweetAlert2Loader.swal;
      //=> Find target element
      const targetEl = _this4.target.element(swal);
      if (!targetEl) return;
      //=> Replace target's contents with our component
      // https://jsperf.com/innerhtml-vs-removechild/15
      while (targetEl.firstChild) {
        targetEl.removeChild(targetEl.firstChild);
      }
      targetEl.appendChild(_this4.portalComponentRef.location.nativeElement);
    })();
  }
  /**
   * This willOpen hook runs once (per modal instance), just before the modal is shown on the screen.
   * This is a good place to declare our detached view to the Angular app.
   */
  willOpenHook() {
    if (!this.portalComponentRef) return;
    //=> Make the Angular app aware of that detached view so rendering and change detection can happen
    this.app.attachView(this.portalComponentRef.hostView);
  }
  /**
   * This didDestroy hook runs once (per modal instance), just after the modal closing animation terminated.
   * This is a good place to detach and destroy our content, that is not visible anymore.
   */
  didDestroyHook() {
    if (!this.portalComponentRef) return;
    //=> Detach the portal component from the app and destroy it
    this.app.detachView(this.portalComponentRef.hostView);
    this.portalComponentRef.destroy();
    this.portalComponentRef = void 0;
  }
  /**
   * Creates the {@link SwalPortalComponent} and gives it the customer's template ref.
   */
  createPortalComponent() {
    //=> Create the SwalPortalComponent that will hold our content
    const factory = this.resolver.resolveComponentFactory(SwalPortalComponent);
    // Yes, we do not use the third argument that would directly use the target as the component's view
    // (unfortunately, because that would give a cleaner DOM and would avoid dirty and direct DOM manipulations)
    // That's because we want to keep our component safe from SweetAlert2's operations on the DOM, and to be
    // able to restore it at any moment, ie. after the modal has been re-rendered.
    const componentRef = factory.create(this.injector, []);
    //=> Apply the consumer's template on the component
    componentRef.instance.template = this.templateRef;
    return componentRef;
  }
}
SwalPortalDirective.ɵfac = function SwalPortalDirective_Factory(t) {
  return new (t || SwalPortalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SweetAlert2LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SwalPortalTargets), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SwalComponent, 1));
};
SwalPortalDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: SwalPortalDirective,
  selectors: [["", "swalPortal", ""]],
  inputs: {
    target: ["swalPortal", "target"]
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalPortalDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[swalPortal]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
    }, {
      type: SweetAlert2LoaderService
    }, {
      type: SwalPortalTargets
    }, {
      type: SwalComponent,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
      }]
    }];
  }, {
    target: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['swalPortal']
    }]
  });
})();
function provideDefaultSwal() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! sweetalert2 */ 27889, 19));
}
class SweetAlert2Module {
  static forRoot(options = {}) {
    return {
      ngModule: SweetAlert2Module,
      providers: [SweetAlert2LoaderService, {
        provide: swalProviderToken,
        useValue: options.provideSwal || provideDefaultSwal
      }, {
        provide: fireOnInitToken,
        useValue: options.fireOnInit || false
      }, {
        provide: dismissOnDestroyToken,
        useValue: options.dismissOnDestroy || true
      }]
    };
  }
  static forChild(options = {}) {
    return {
      ngModule: SweetAlert2Module,
      providers: [...(options.provideSwal ? [SweetAlert2LoaderService, {
        provide: swalProviderToken,
        useValue: options.provideSwal
      }] : []), ...(options.fireOnInit !== undefined ? [{
        provide: fireOnInitToken,
        useValue: options.fireOnInit
      }] : []), ...(options.dismissOnDestroy !== undefined ? [{
        provide: dismissOnDestroyToken,
        useValue: options.dismissOnDestroy
      }] : [])]
    };
  }
}
SweetAlert2Module.ɵfac = function SweetAlert2Module_Factory(t) {
  return new (t || SweetAlert2Module)();
};
SweetAlert2Module.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SweetAlert2Module
});
SweetAlert2Module.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SweetAlert2Module, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [SwalDirective, SwalComponent, SwalPortalDirective, SwalPortalComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      exports: [SwalComponent, SwalPortalDirective, SwalDirective]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4214:
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/fesm2020/ngx-image-cropper.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CropService: () => (/* binding */ CropService),
/* harmony export */   CropperSettings: () => (/* binding */ CropperSettings),
/* harmony export */   ImageCropperComponent: () => (/* binding */ ImageCropperComponent),
/* harmony export */   ImageCropperModule: () => (/* binding */ ImageCropperModule),
/* harmony export */   LoadImageService: () => (/* binding */ LoadImageService),
/* harmony export */   base64ToFile: () => (/* binding */ base64ToFile),
/* harmony export */   resizeCanvas: () => (/* binding */ resizeCanvas)
/* harmony export */ });
/* harmony import */ var _Users_murchcode_Development_projects_service_contract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);






const _c0 = ["wrapper"];
const _c1 = ["sourceImage"];
function ImageCropperComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function ImageCropperComponent_img_2_Template_img_load_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.imageLoadedInView());
    })("mousedown", function ImageCropperComponent_img_2_Template_img_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.startMove($event, ctx_r6.moveTypes.Drag));
    })("touchstart", function ImageCropperComponent_img_2_Template_img_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.startMove($event, ctx_r7.moveTypes.Drag));
    })("error", function ImageCropperComponent_img_2_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.loadImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx_r1.imageVisible ? "visible" : "hidden")("transform", ctx_r1.safeTransformStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-ic-draggable", !ctx_r1.disabled && ctx_r1.allowMoveImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.safeImgDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("alt", ctx_r1.imageAltText);
  }
}
function ImageCropperComponent_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.startMove($event, ctx_r10.moveTypes.Resize, "topleft"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.startMove($event, ctx_r12.moveTypes.Resize, "topleft"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.startMove($event, ctx_r13.moveTypes.Resize, "topright"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.startMove($event, ctx_r14.moveTypes.Resize, "topright"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.startMove($event, ctx_r15.moveTypes.Resize, "bottomright"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.startMove($event, ctx_r16.moveTypes.Resize, "bottomright"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.startMove($event, ctx_r17.moveTypes.Resize, "bottomleft"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.startMove($event, ctx_r18.moveTypes.Resize, "bottomleft"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.startMove($event, ctx_r19.moveTypes.Resize, "top"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.startMove($event, ctx_r20.moveTypes.Resize, "top"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.startMove($event, ctx_r21.moveTypes.Resize, "right"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.startMove($event, ctx_r22.moveTypes.Resize, "right"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.startMove($event, ctx_r23.moveTypes.Resize, "bottom"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.startMove($event, ctx_r24.moveTypes.Resize, "bottom"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.startMove($event, ctx_r25.moveTypes.Resize, "left"));
    })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.startMove($event, ctx_r26.moveTypes.Resize, "left"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function ImageCropperComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function ImageCropperComponent_div_4_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r27.keyboardAccess($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_Template_div_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r29.startMove($event, ctx_r29.moveTypes.Move));
    })("touchstart", function ImageCropperComponent_div_4_Template_div_touchstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r30.startMove($event, ctx_r30.moveTypes.Move));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ImageCropperComponent_div_4_ng_container_2_Template, 21, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx_r2.cropper.y1, "px")("left", ctx_r2.cropper.x1, "px")("width", ctx_r2.cropper.x2 - ctx_r2.cropper.x1, "px")("height", ctx_r2.cropper.y2 - ctx_r2.cropper.y1, "px")("margin-left", ctx_r2.alignImage === "center" ? ctx_r2.marginLeft : null)("visibility", ctx_r2.imageVisible ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-ic-round", ctx_r2.roundCropper);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.hideResizeSquares);
  }
}
class CropperSettings {
  constructor() {
    // From options
    this.format = 'png';
    this.maintainAspectRatio = true;
    this.transform = {};
    this.aspectRatio = 1;
    this.resetCropOnAspectRatioChange = true;
    this.resizeToWidth = 0;
    this.resizeToHeight = 0;
    this.cropperMinWidth = 0;
    this.cropperMinHeight = 0;
    this.cropperMaxHeight = 0;
    this.cropperMaxWidth = 0;
    this.cropperStaticWidth = 0;
    this.cropperStaticHeight = 0;
    this.canvasRotation = 0;
    this.initialStepSize = 3;
    this.roundCropper = false;
    this.onlyScaleDown = false;
    this.imageQuality = 92;
    this.autoCrop = true;
    this.backgroundColor = null;
    this.containWithinAspectRatio = false;
    this.hideResizeSquares = false;
    this.alignImage = 'center';
    // Internal
    this.cropperScaledMinWidth = 20;
    this.cropperScaledMinHeight = 20;
    this.cropperScaledMaxWidth = 20;
    this.cropperScaledMaxHeight = 20;
    this.stepSize = this.initialStepSize;
  }
  setOptions(options) {
    Object.keys(options).filter(k => k in this).forEach(k => this[k] = options[k]);
    this.validateOptions();
  }
  setOptionsFromChanges(changes) {
    Object.keys(changes).filter(k => k in this).forEach(k => this[k] = changes[k].currentValue);
    this.validateOptions();
  }
  validateOptions() {
    if (this.maintainAspectRatio && !this.aspectRatio) {
      throw new Error('`aspectRatio` should > 0 when `maintainAspectRatio` is enabled');
    }
  }
}
var MoveTypes;
(function (MoveTypes) {
  MoveTypes["Drag"] = "drag";
  MoveTypes["Move"] = "move";
  MoveTypes["Resize"] = "resize";
  MoveTypes["Pinch"] = "pinch";
})(MoveTypes || (MoveTypes = {}));
function getPositionForKey(key) {
  switch (key) {
    case 'ArrowUp':
      return 'top';
    case 'ArrowRight':
      return 'right';
    case 'ArrowDown':
      return 'bottom';
    case 'ArrowLeft':
    default:
      return 'left';
  }
}
function getInvertedPositionForKey(key) {
  switch (key) {
    case 'ArrowUp':
      return 'bottom';
    case 'ArrowRight':
      return 'left';
    case 'ArrowDown':
      return 'top';
    case 'ArrowLeft':
    default:
      return 'right';
  }
}
function getEventForKey(key, stepSize) {
  switch (key) {
    case 'ArrowUp':
      return {
        clientX: 0,
        clientY: stepSize * -1
      };
    case 'ArrowRight':
      return {
        clientX: stepSize,
        clientY: 0
      };
    case 'ArrowDown':
      return {
        clientX: 0,
        clientY: stepSize
      };
    case 'ArrowLeft':
    default:
      return {
        clientX: stepSize * -1,
        clientY: 0
      };
  }
}

/*
 * Hermite resize - fast image resize/resample using Hermite filter.
 * https://github.com/viliusle/Hermite-resize
 */
function resizeCanvas(canvas, width, height) {
  const width_source = canvas.width;
  const height_source = canvas.height;
  width = Math.round(width);
  height = Math.round(height);
  const ratio_w = width_source / width;
  const ratio_h = height_source / height;
  const ratio_w_half = Math.ceil(ratio_w / 2);
  const ratio_h_half = Math.ceil(ratio_h / 2);
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const img = ctx.getImageData(0, 0, width_source, height_source);
    const img2 = ctx.createImageData(width, height);
    const data = img.data;
    const data2 = img2.data;
    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        const x2 = (i + j * width) * 4;
        const center_y = j * ratio_h;
        let weight = 0;
        let weights = 0;
        let weights_alpha = 0;
        let gx_r = 0;
        let gx_g = 0;
        let gx_b = 0;
        let gx_a = 0;
        const xx_start = Math.floor(i * ratio_w);
        const yy_start = Math.floor(j * ratio_h);
        let xx_stop = Math.ceil((i + 1) * ratio_w);
        let yy_stop = Math.ceil((j + 1) * ratio_h);
        xx_stop = Math.min(xx_stop, width_source);
        yy_stop = Math.min(yy_stop, height_source);
        for (let yy = yy_start; yy < yy_stop; yy++) {
          const dy = Math.abs(center_y - yy) / ratio_h_half;
          const center_x = i * ratio_w;
          const w0 = dy * dy; //pre-calc part of w
          for (let xx = xx_start; xx < xx_stop; xx++) {
            const dx = Math.abs(center_x - xx) / ratio_w_half;
            const w = Math.sqrt(w0 + dx * dx);
            if (w >= 1) {
              //pixel too far
              continue;
            }
            //hermite filter
            weight = 2 * w * w * w - 3 * w * w + 1;
            const pos_x = 4 * (xx + yy * width_source);
            //alpha
            gx_a += weight * data[pos_x + 3];
            weights_alpha += weight;
            //colors
            if (data[pos_x + 3] < 255) weight = weight * data[pos_x + 3] / 250;
            gx_r += weight * data[pos_x];
            gx_g += weight * data[pos_x + 1];
            gx_b += weight * data[pos_x + 2];
            weights += weight;
          }
        }
        data2[x2] = gx_r / weights;
        data2[x2 + 1] = gx_g / weights;
        data2[x2 + 2] = gx_b / weights;
        data2[x2 + 3] = gx_a / weights_alpha;
      }
    }
    canvas.width = width;
    canvas.height = height;
    //draw
    ctx.putImageData(img2, 0, 0);
  }
}
function percentage(percent, totalValue) {
  return percent / 100 * totalValue;
}
class CropService {
  crop(sourceImage, loadedImage, cropper, settings) {
    const imagePosition = this.getImagePosition(sourceImage, loadedImage, cropper, settings);
    const width = imagePosition.x2 - imagePosition.x1;
    const height = imagePosition.y2 - imagePosition.y1;
    const cropCanvas = document.createElement('canvas');
    cropCanvas.width = width;
    cropCanvas.height = height;
    const ctx = cropCanvas.getContext('2d');
    if (!ctx) {
      return null;
    }
    if (settings.backgroundColor != null) {
      ctx.fillStyle = settings.backgroundColor;
      ctx.fillRect(0, 0, width, height);
    }
    const scaleX = (settings.transform.scale || 1) * (settings.transform.flipH ? -1 : 1);
    const scaleY = (settings.transform.scale || 1) * (settings.transform.flipV ? -1 : 1);
    const {
      translateH,
      translateV
    } = this.getCanvasTranslate(sourceImage, loadedImage, settings);
    const transformedImage = loadedImage.transformed;
    ctx.setTransform(scaleX, 0, 0, scaleY, transformedImage.size.width / 2 + translateH, transformedImage.size.height / 2 + translateV);
    ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
    ctx.rotate((settings.transform.rotate || 0) * Math.PI / 180);
    ctx.drawImage(transformedImage.image, -transformedImage.size.width / 2, -transformedImage.size.height / 2);
    const output = {
      width,
      height,
      imagePosition,
      cropperPosition: {
        ...cropper
      }
    };
    if (settings.containWithinAspectRatio) {
      output.offsetImagePosition = this.getOffsetImagePosition(sourceImage, loadedImage, cropper, settings);
    }
    const resizeRatio = this.getResizeRatio(width, height, settings);
    if (resizeRatio !== 1) {
      output.width = Math.round(width * resizeRatio);
      output.height = settings.maintainAspectRatio ? Math.round(output.width / settings.aspectRatio) : Math.round(height * resizeRatio);
      resizeCanvas(cropCanvas, output.width, output.height);
    }
    output.base64 = cropCanvas.toDataURL('image/' + settings.format, this.getQuality(settings));
    return output;
  }
  getCanvasTranslate(sourceImage, loadedImage, settings) {
    if (settings.transform.translateUnit === 'px') {
      const ratio = this.getRatio(sourceImage, loadedImage);
      return {
        translateH: (settings.transform.translateH || 0) * ratio,
        translateV: (settings.transform.translateV || 0) * ratio
      };
    } else {
      return {
        translateH: settings.transform.translateH ? percentage(settings.transform.translateH, loadedImage.transformed.size.width) : 0,
        translateV: settings.transform.translateV ? percentage(settings.transform.translateV, loadedImage.transformed.size.height) : 0
      };
    }
  }
  getRatio(sourceImage, loadedImage) {
    const sourceImageElement = sourceImage.nativeElement;
    return loadedImage.transformed.size.width / sourceImageElement.offsetWidth;
  }
  getImagePosition(sourceImage, loadedImage, cropper, settings) {
    const ratio = this.getRatio(sourceImage, loadedImage);
    const out = {
      x1: Math.round(cropper.x1 * ratio),
      y1: Math.round(cropper.y1 * ratio),
      x2: Math.round(cropper.x2 * ratio),
      y2: Math.round(cropper.y2 * ratio)
    };
    if (!settings.containWithinAspectRatio) {
      out.x1 = Math.max(out.x1, 0);
      out.y1 = Math.max(out.y1, 0);
      out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
      out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
    }
    return out;
  }
  getOffsetImagePosition(sourceImage, loadedImage, cropper, settings) {
    const canvasRotation = settings.canvasRotation + loadedImage.exifTransform.rotate;
    const sourceImageElement = sourceImage.nativeElement;
    const ratio = loadedImage.transformed.size.width / sourceImageElement.offsetWidth;
    let offsetX;
    let offsetY;
    if (canvasRotation % 2) {
      offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.height) / 2;
      offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.width) / 2;
    } else {
      offsetX = (loadedImage.transformed.size.width - loadedImage.original.size.width) / 2;
      offsetY = (loadedImage.transformed.size.height - loadedImage.original.size.height) / 2;
    }
    const out = {
      x1: Math.round(cropper.x1 * ratio) - offsetX,
      y1: Math.round(cropper.y1 * ratio) - offsetY,
      x2: Math.round(cropper.x2 * ratio) - offsetX,
      y2: Math.round(cropper.y2 * ratio) - offsetY
    };
    if (!settings.containWithinAspectRatio) {
      out.x1 = Math.max(out.x1, 0);
      out.y1 = Math.max(out.y1, 0);
      out.x2 = Math.min(out.x2, loadedImage.transformed.size.width);
      out.y2 = Math.min(out.y2, loadedImage.transformed.size.height);
    }
    return out;
  }
  getResizeRatio(width, height, settings) {
    const ratioWidth = settings.resizeToWidth / width;
    const ratioHeight = settings.resizeToHeight / height;
    const ratios = new Array();
    if (settings.resizeToWidth > 0) {
      ratios.push(ratioWidth);
    }
    if (settings.resizeToHeight > 0) {
      ratios.push(ratioHeight);
    }
    const result = ratios.length === 0 ? 1 : Math.min(...ratios);
    if (result > 1 && !settings.onlyScaleDown) {
      return result;
    }
    return Math.min(result, 1);
  }
  getQuality(settings) {
    return Math.min(1, Math.max(0, settings.imageQuality / 100));
  }
}
CropService.ɵfac = function CropService_Factory(t) {
  return new (t || CropService)();
};
CropService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CropService,
  factory: CropService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CropService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class CropperPositionService {
  resetCropperPosition(sourceImage, cropperPosition, settings) {
    if (!sourceImage?.nativeElement) {
      return;
    }
    const sourceImageElement = sourceImage.nativeElement;
    if (settings.cropperStaticHeight && settings.cropperStaticWidth) {
      cropperPosition.x1 = 0;
      cropperPosition.x2 = sourceImageElement.offsetWidth > settings.cropperStaticWidth ? settings.cropperStaticWidth : sourceImageElement.offsetWidth;
      cropperPosition.y1 = 0;
      cropperPosition.y2 = sourceImageElement.offsetHeight > settings.cropperStaticHeight ? settings.cropperStaticHeight : sourceImageElement.offsetHeight;
    } else {
      const cropperWidth = Math.min(settings.cropperScaledMaxWidth, sourceImageElement.offsetWidth);
      const cropperHeight = Math.min(settings.cropperScaledMaxHeight, sourceImageElement.offsetHeight);
      if (!settings.maintainAspectRatio) {
        cropperPosition.x1 = 0;
        cropperPosition.x2 = cropperWidth;
        cropperPosition.y1 = 0;
        cropperPosition.y2 = cropperHeight;
      } else if (sourceImageElement.offsetWidth / settings.aspectRatio < sourceImageElement.offsetHeight) {
        cropperPosition.x1 = 0;
        cropperPosition.x2 = cropperWidth;
        const cropperHeightWithAspectRatio = cropperWidth / settings.aspectRatio;
        cropperPosition.y1 = (sourceImageElement.offsetHeight - cropperHeightWithAspectRatio) / 2;
        cropperPosition.y2 = cropperPosition.y1 + cropperHeightWithAspectRatio;
      } else {
        cropperPosition.y1 = 0;
        cropperPosition.y2 = cropperHeight;
        const cropperWidthWithAspectRatio = cropperHeight * settings.aspectRatio;
        cropperPosition.x1 = (sourceImageElement.offsetWidth - cropperWidthWithAspectRatio) / 2;
        cropperPosition.x2 = cropperPosition.x1 + cropperWidthWithAspectRatio;
      }
    }
  }
  move(event, moveStart, cropperPosition) {
    const diffX = this.getClientX(event) - moveStart.clientX;
    const diffY = this.getClientY(event) - moveStart.clientY;
    cropperPosition.x1 = moveStart.x1 + diffX;
    cropperPosition.y1 = moveStart.y1 + diffY;
    cropperPosition.x2 = moveStart.x2 + diffX;
    cropperPosition.y2 = moveStart.y2 + diffY;
  }
  resize(event, moveStart, cropperPosition, maxSize, settings) {
    const moveX = this.getClientX(event) - moveStart.clientX;
    const moveY = this.getClientY(event) - moveStart.clientY;
    switch (moveStart.position) {
      case 'left':
        cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
        break;
      case 'topleft':
        cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
        cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
        break;
      case 'top':
        cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
        break;
      case 'topright':
        cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
        cropperPosition.y1 = Math.min(Math.max(moveStart.y1 + moveY, cropperPosition.y2 - settings.cropperScaledMaxHeight), cropperPosition.y2 - settings.cropperScaledMinHeight);
        break;
      case 'right':
        cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
        break;
      case 'bottomright':
        cropperPosition.x2 = Math.max(Math.min(moveStart.x2 + moveX, cropperPosition.x1 + settings.cropperScaledMaxWidth), cropperPosition.x1 + settings.cropperScaledMinWidth);
        cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
        break;
      case 'bottom':
        cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
        break;
      case 'bottomleft':
        cropperPosition.x1 = Math.min(Math.max(moveStart.x1 + moveX, cropperPosition.x2 - settings.cropperScaledMaxWidth), cropperPosition.x2 - settings.cropperScaledMinWidth);
        cropperPosition.y2 = Math.max(Math.min(moveStart.y2 + moveY, cropperPosition.y1 + settings.cropperScaledMaxHeight), cropperPosition.y1 + settings.cropperScaledMinHeight);
        break;
      case 'center':
        const scale = event.scale;
        const newWidth = Math.min(Math.max(settings.cropperScaledMinWidth, Math.abs(moveStart.x2 - moveStart.x1) * scale), settings.cropperScaledMaxWidth);
        const newHeight = Math.min(Math.max(settings.cropperScaledMinHeight, Math.abs(moveStart.y2 - moveStart.y1) * scale), settings.cropperScaledMaxHeight);
        cropperPosition.x1 = moveStart.clientX - newWidth / 2;
        cropperPosition.x2 = moveStart.clientX + newWidth / 2;
        cropperPosition.y1 = moveStart.clientY - newHeight / 2;
        cropperPosition.y2 = moveStart.clientY + newHeight / 2;
        if (cropperPosition.x1 < 0) {
          cropperPosition.x2 -= cropperPosition.x1;
          cropperPosition.x1 = 0;
        } else if (cropperPosition.x2 > maxSize.width) {
          cropperPosition.x1 -= cropperPosition.x2 - maxSize.width;
          cropperPosition.x2 = maxSize.width;
        }
        if (cropperPosition.y1 < 0) {
          cropperPosition.y2 -= cropperPosition.y1;
          cropperPosition.y1 = 0;
        } else if (cropperPosition.y2 > maxSize.height) {
          cropperPosition.y1 -= cropperPosition.y2 - maxSize.height;
          cropperPosition.y2 = maxSize.height;
        }
        break;
    }
    if (settings.maintainAspectRatio) {
      this.checkAspectRatio(moveStart.position, cropperPosition, maxSize, settings);
    }
  }
  checkAspectRatio(position, cropperPosition, maxSize, settings) {
    let overflowX = 0;
    let overflowY = 0;
    switch (position) {
      case 'top':
        cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
        overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
        overflowY = Math.max(0 - cropperPosition.y1, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case 'bottom':
        cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
        overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
        overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case 'topleft':
        cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        overflowX = Math.max(0 - cropperPosition.x1, 0);
        overflowY = Math.max(0 - cropperPosition.y1, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x1 += overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case 'topright':
        cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
        overflowY = Math.max(0 - cropperPosition.y1, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y1 += overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case 'right':
      case 'bottomright':
        cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        overflowX = Math.max(cropperPosition.x2 - maxSize.width, 0);
        overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x2 -= overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case 'left':
      case 'bottomleft':
        cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        overflowX = Math.max(0 - cropperPosition.x1, 0);
        overflowY = Math.max(cropperPosition.y2 - maxSize.height, 0);
        if (overflowX > 0 || overflowY > 0) {
          cropperPosition.x1 += overflowY * settings.aspectRatio > overflowX ? overflowY * settings.aspectRatio : overflowX;
          cropperPosition.y2 -= overflowY * settings.aspectRatio > overflowX ? overflowY : overflowX / settings.aspectRatio;
        }
        break;
      case 'center':
        cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * settings.aspectRatio;
        cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / settings.aspectRatio;
        const overflowX1 = Math.max(0 - cropperPosition.x1, 0);
        const overflowX2 = Math.max(cropperPosition.x2 - maxSize.width, 0);
        const overflowY1 = Math.max(cropperPosition.y2 - maxSize.height, 0);
        const overflowY2 = Math.max(0 - cropperPosition.y1, 0);
        if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
          cropperPosition.x1 += overflowY1 * settings.aspectRatio > overflowX1 ? overflowY1 * settings.aspectRatio : overflowX1;
          cropperPosition.x2 -= overflowY2 * settings.aspectRatio > overflowX2 ? overflowY2 * settings.aspectRatio : overflowX2;
          cropperPosition.y1 += overflowY2 * settings.aspectRatio > overflowX2 ? overflowY2 : overflowX2 / settings.aspectRatio;
          cropperPosition.y2 -= overflowY1 * settings.aspectRatio > overflowX1 ? overflowY1 : overflowX1 / settings.aspectRatio;
        }
        break;
    }
  }
  getClientX(event) {
    return event.touches?.[0].clientX || event.clientX || 0;
  }
  getClientY(event) {
    return event.touches?.[0].clientY || event.clientY || 0;
  }
}
CropperPositionService.ɵfac = function CropperPositionService_Factory(t) {
  return new (t || CropperPositionService)();
};
CropperPositionService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CropperPositionService,
  factory: CropperPositionService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CropperPositionService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

// Black 2x1 JPEG, with the following meta information set:
// - EXIF Orientation: 6 (Rotated 90° CCW)
// Source: https://github.com/blueimp/JavaScript-Load-Image
const testAutoOrientationImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' + 'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' + 'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' + 'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' + 'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' + 'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
function supportsAutomaticRotation() {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      // Check if browser supports automatic image orientation:
      const supported = img.width === 1 && img.height === 2;
      resolve(supported);
    };
    img.src = testAutoOrientationImageURL;
  });
}
function getTransformationsFromExifData(exifRotationOrBase64Image) {
  if (typeof exifRotationOrBase64Image === 'string') {
    exifRotationOrBase64Image = getExifRotation(exifRotationOrBase64Image);
  }
  switch (exifRotationOrBase64Image) {
    case 2:
      return {
        rotate: 0,
        flip: true
      };
    case 3:
      return {
        rotate: 2,
        flip: false
      };
    case 4:
      return {
        rotate: 2,
        flip: true
      };
    case 5:
      return {
        rotate: 1,
        flip: true
      };
    case 6:
      return {
        rotate: 1,
        flip: false
      };
    case 7:
      return {
        rotate: 3,
        flip: true
      };
    case 8:
      return {
        rotate: 3,
        flip: false
      };
    default:
      return {
        rotate: 0,
        flip: false
      };
  }
}
function getExifRotation(imageBase64) {
  const view = new DataView(base64ToArrayBuffer(imageBase64));
  if (view.getUint16(0, false) !== 0xFFD8) {
    return -2;
  }
  const length = view.byteLength;
  let offset = 2;
  while (offset < length) {
    if (view.getUint16(offset + 2, false) <= 8) return -1;
    const marker = view.getUint16(offset, false);
    offset += 2;
    if (marker == 0xFFE1) {
      if (view.getUint32(offset += 2, false) !== 0x45786966) {
        return -1;
      }
      const little = view.getUint16(offset += 6, false) == 0x4949;
      offset += view.getUint32(offset + 4, little);
      const tags = view.getUint16(offset, little);
      offset += 2;
      for (let i = 0; i < tags; i++) {
        if (view.getUint16(offset + i * 12, little) == 0x0112) {
          return view.getUint16(offset + i * 12 + 8, little);
        }
      }
    } else if ((marker & 0xFF00) !== 0xFF00) {
      break;
    } else {
      offset += view.getUint16(offset, false);
    }
  }
  return -1;
}
function base64ToArrayBuffer(imageBase64) {
  imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
  const binaryString = atob(imageBase64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}
class LoadImageService {
  constructor() {
    this.autoRotateSupported = supportsAutomaticRotation();
  }
  loadImageFile(file, cropperSettings) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = event => {
        this.loadImage(event.target.result, file.type, cropperSettings).then(resolve).catch(reject);
      };
      fileReader.readAsDataURL(file);
    });
  }
  loadImage(imageBase64, imageType, cropperSettings) {
    if (!this.isValidImageType(imageType)) {
      return Promise.reject(new Error('Invalid image type'));
    }
    return this.loadBase64Image(imageBase64, cropperSettings);
  }
  isValidImageType(type) {
    return /image\/(png|jpg|jpeg|bmp|gif|tiff|webp|x-icon|vnd.microsoft.icon)/.test(type);
  }
  loadImageFromURL(url, cropperSettings) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onerror = () => reject;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        context?.drawImage(img, 0, 0);
        this.loadBase64Image(canvas.toDataURL(), cropperSettings).then(resolve);
      };
      img.crossOrigin = 'anonymous';
      img.src = url;
    });
  }
  loadBase64Image(imageBase64, cropperSettings) {
    return new Promise((resolve, reject) => {
      const originalImage = new Image();
      originalImage.onload = () => resolve({
        originalImage,
        originalBase64: imageBase64
      });
      originalImage.onerror = reject;
      originalImage.src = imageBase64;
    }).then(res => this.transformImageBase64(res, cropperSettings));
  }
  transformImageBase64(res, cropperSettings) {
    var _this = this;
    return (0,_Users_murchcode_Development_projects_service_contract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const autoRotate = yield _this.autoRotateSupported;
      const exifTransform = yield getTransformationsFromExifData(autoRotate ? -1 : res.originalBase64);
      if (!res.originalImage || !res.originalImage.complete) {
        return Promise.reject(new Error('No image loaded'));
      }
      const loadedImage = {
        original: {
          base64: res.originalBase64,
          image: res.originalImage,
          size: {
            width: res.originalImage.naturalWidth,
            height: res.originalImage.naturalHeight
          }
        },
        exifTransform
      };
      return _this.transformLoadedImage(loadedImage, cropperSettings);
    })();
  }
  transformLoadedImage(loadedImage, cropperSettings) {
    var _this2 = this;
    return (0,_Users_murchcode_Development_projects_service_contract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const canvasRotation = cropperSettings.canvasRotation + loadedImage.exifTransform.rotate;
      const originalSize = {
        width: loadedImage.original.image.naturalWidth,
        height: loadedImage.original.image.naturalHeight
      };
      if (canvasRotation === 0 && !loadedImage.exifTransform.flip && !cropperSettings.containWithinAspectRatio) {
        return {
          original: {
            base64: loadedImage.original.base64,
            image: loadedImage.original.image,
            size: {
              ...originalSize
            }
          },
          transformed: {
            base64: loadedImage.original.base64,
            image: loadedImage.original.image,
            size: {
              ...originalSize
            }
          },
          exifTransform: loadedImage.exifTransform
        };
      }
      const transformedSize = _this2.getTransformedSize(originalSize, loadedImage.exifTransform, cropperSettings);
      const canvas = document.createElement('canvas');
      canvas.width = transformedSize.width;
      canvas.height = transformedSize.height;
      const ctx = canvas.getContext('2d');
      ctx?.setTransform(loadedImage.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
      ctx?.rotate(Math.PI * (canvasRotation / 2));
      ctx?.drawImage(loadedImage.original.image, -originalSize.width / 2, -originalSize.height / 2);
      const transformedBase64 = canvas.toDataURL();
      const transformedImage = yield _this2.loadImageFromBase64(transformedBase64);
      return {
        original: {
          base64: loadedImage.original.base64,
          image: loadedImage.original.image,
          size: {
            ...originalSize
          }
        },
        transformed: {
          base64: transformedBase64,
          image: transformedImage,
          size: {
            width: transformedImage.width,
            height: transformedImage.height
          }
        },
        exifTransform: loadedImage.exifTransform
      };
    })();
  }
  loadImageFromBase64(imageBase64) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = imageBase64;
    });
  }
  getTransformedSize(originalSize, exifTransform, cropperSettings) {
    const canvasRotation = cropperSettings.canvasRotation + exifTransform.rotate;
    if (cropperSettings.containWithinAspectRatio) {
      if (canvasRotation % 2) {
        const minWidthToContain = originalSize.width * cropperSettings.aspectRatio;
        const minHeightToContain = originalSize.height / cropperSettings.aspectRatio;
        return {
          width: Math.max(originalSize.height, minWidthToContain),
          height: Math.max(originalSize.width, minHeightToContain)
        };
      } else {
        const minWidthToContain = originalSize.height * cropperSettings.aspectRatio;
        const minHeightToContain = originalSize.width / cropperSettings.aspectRatio;
        return {
          width: Math.max(originalSize.width, minWidthToContain),
          height: Math.max(originalSize.height, minHeightToContain)
        };
      }
    }
    if (canvasRotation % 2) {
      return {
        height: originalSize.width,
        width: originalSize.height
      };
    }
    return {
      width: originalSize.width,
      height: originalSize.height
    };
  }
}
LoadImageService.ɵfac = function LoadImageService_Factory(t) {
  return new (t || LoadImageService)();
};
LoadImageService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LoadImageService,
  factory: LoadImageService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoadImageService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class ImageCropperComponent {
  constructor(cropService, cropperPositionService, loadImageService, sanitizer, cd) {
    this.cropService = cropService;
    this.cropperPositionService = cropperPositionService;
    this.loadImageService = loadImageService;
    this.sanitizer = sanitizer;
    this.cd = cd;
    this.Hammer = window?.['Hammer'] || null;
    this.settings = new CropperSettings();
    this.setImageMaxSizeRetries = 0;
    this.resizedWhileHidden = false;
    this.marginLeft = '0px';
    this.maxSize = {
      width: 0,
      height: 0
    };
    this.moveTypes = MoveTypes;
    this.imageVisible = false;
    this.format = this.settings.format;
    this.transform = {};
    this.maintainAspectRatio = this.settings.maintainAspectRatio;
    this.aspectRatio = this.settings.aspectRatio;
    this.resetCropOnAspectRatioChange = this.settings.resetCropOnAspectRatioChange;
    this.resizeToWidth = this.settings.resizeToWidth;
    this.resizeToHeight = this.settings.resizeToHeight;
    this.cropperMinWidth = this.settings.cropperMinWidth;
    this.cropperMinHeight = this.settings.cropperMinHeight;
    this.cropperMaxHeight = this.settings.cropperMaxHeight;
    this.cropperMaxWidth = this.settings.cropperMaxWidth;
    this.cropperStaticWidth = this.settings.cropperStaticWidth;
    this.cropperStaticHeight = this.settings.cropperStaticHeight;
    this.canvasRotation = this.settings.canvasRotation;
    this.initialStepSize = this.settings.initialStepSize;
    this.roundCropper = this.settings.roundCropper;
    this.onlyScaleDown = this.settings.onlyScaleDown;
    this.imageQuality = this.settings.imageQuality;
    this.autoCrop = this.settings.autoCrop;
    this.backgroundColor = this.settings.backgroundColor;
    this.containWithinAspectRatio = this.settings.containWithinAspectRatio;
    this.hideResizeSquares = this.settings.hideResizeSquares;
    this.allowMoveImage = false;
    this.cropper = {
      x1: -100,
      y1: -100,
      x2: 10000,
      y2: 10000
    };
    this.alignImage = this.settings.alignImage;
    this.disabled = false;
    this.hidden = false;
    this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.transformChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.reset();
  }
  ngOnChanges(changes) {
    this.onChangesUpdateSettings(changes);
    this.onChangesInputImage(changes);
    if (this.loadedImage?.original.image.complete && (changes['containWithinAspectRatio'] || changes['canvasRotation'])) {
      this.loadImageService.transformLoadedImage(this.loadedImage, this.settings).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
    }
    if (changes['cropper'] || changes['maintainAspectRatio'] || changes['aspectRatio']) {
      this.setMaxSize();
      this.setCropperScaledMinSize();
      this.setCropperScaledMaxSize();
      if (this.maintainAspectRatio && (this.resetCropOnAspectRatioChange || !this.aspectRatioIsCorrect()) && (changes['maintainAspectRatio'] || changes['aspectRatio'])) {
        this.resetCropperPosition();
      } else if (changes['cropper']) {
        this.checkCropperPosition(false);
        this.doAutoCrop();
      }
      this.cd.markForCheck();
    }
    if (changes['transform']) {
      this.transform = this.transform || {};
      this.setCssTransform();
      this.doAutoCrop();
      this.cd.markForCheck();
    }
    if (changes['hidden'] && this.resizedWhileHidden && !this.hidden) {
      setTimeout(() => {
        this.onResize();
        this.resizedWhileHidden = false;
      });
    }
  }
  onChangesUpdateSettings(changes) {
    this.settings.setOptionsFromChanges(changes);
    if (this.settings.cropperStaticHeight && this.settings.cropperStaticWidth) {
      this.settings.setOptions({
        hideResizeSquares: true,
        cropperMinWidth: this.settings.cropperStaticWidth,
        cropperMinHeight: this.settings.cropperStaticHeight,
        cropperMaxHeight: this.settings.cropperStaticHeight,
        cropperMaxWidth: this.settings.cropperStaticWidth,
        maintainAspectRatio: false
      });
    }
  }
  onChangesInputImage(changes) {
    if (changes['imageChangedEvent'] || changes['imageURL'] || changes['imageBase64'] || changes['imageFile']) {
      this.reset();
    }
    if (changes['imageChangedEvent'] && this.isValidImageChangedEvent()) {
      this.loadImageFile(this.imageChangedEvent.target.files[0]);
    }
    if (changes['imageURL'] && this.imageURL) {
      this.loadImageFromURL(this.imageURL);
    }
    if (changes['imageBase64'] && this.imageBase64) {
      this.loadBase64Image(this.imageBase64);
    }
    if (changes['imageFile'] && this.imageFile) {
      this.loadImageFile(this.imageFile);
    }
  }
  isValidImageChangedEvent() {
    return this.imageChangedEvent?.target?.files?.length > 0;
  }
  setCssTransform() {
    const translateUnit = this.transform?.translateUnit || '%';
    this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle(`translate(${this.transform.translateH || 0}${translateUnit}, ${this.transform.translateV || 0}${translateUnit})` + ' scaleX(' + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ')' + ' scaleY(' + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ')' + ' rotate(' + (this.transform.rotate || 0) + 'deg)');
  }
  ngOnInit() {
    this.settings.stepSize = this.initialStepSize;
    this.activatePinchGesture();
  }
  reset() {
    this.imageVisible = false;
    this.loadedImage = undefined;
    this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg' + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU' + 'AAarVyFEAAAAASUVORK5CYII=';
    this.moveStart = {
      active: false,
      type: null,
      position: null,
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      clientX: 0,
      clientY: 0
    };
    this.maxSize = {
      width: 0,
      height: 0
    };
    this.cropper.x1 = -100;
    this.cropper.y1 = -100;
    this.cropper.x2 = 10000;
    this.cropper.y2 = 10000;
  }
  loadImageFile(file) {
    this.loadImageService.loadImageFile(file, this.settings).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
  }
  loadBase64Image(imageBase64) {
    this.loadImageService.loadBase64Image(imageBase64, this.settings).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
  }
  loadImageFromURL(url) {
    this.loadImageService.loadImageFromURL(url, this.settings).then(res => this.setLoadedImage(res)).catch(err => this.loadImageError(err));
  }
  setLoadedImage(loadedImage) {
    this.loadedImage = loadedImage;
    this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(loadedImage.transformed.base64);
    this.cd.markForCheck();
  }
  loadImageError(error) {
    console.error(error);
    this.loadImageFailed.emit();
  }
  imageLoadedInView() {
    if (this.loadedImage != null) {
      this.imageLoaded.emit(this.loadedImage);
      this.setImageMaxSizeRetries = 0;
      setTimeout(() => this.checkImageMaxSizeRecursively());
    }
  }
  checkImageMaxSizeRecursively() {
    if (this.setImageMaxSizeRetries > 40) {
      this.loadImageFailed.emit();
    } else if (this.sourceImageLoaded()) {
      this.setMaxSize();
      this.setCropperScaledMinSize();
      this.setCropperScaledMaxSize();
      this.resetCropperPosition();
      this.cropperReady.emit({
        ...this.maxSize
      });
      this.cd.markForCheck();
    } else {
      this.setImageMaxSizeRetries++;
      setTimeout(() => this.checkImageMaxSizeRecursively(), 50);
    }
  }
  sourceImageLoaded() {
    return this.sourceImage?.nativeElement?.offsetWidth > 0;
  }
  onResize() {
    if (!this.loadedImage) {
      return;
    }
    if (this.hidden) {
      this.resizedWhileHidden = true;
    } else {
      this.resizeCropperPosition();
      this.setMaxSize();
      this.setCropperScaledMinSize();
      this.setCropperScaledMaxSize();
    }
  }
  activatePinchGesture() {
    if (this.Hammer) {
      const hammer = new this.Hammer(this.wrapper.nativeElement);
      hammer.get('pinch').set({
        enable: true
      });
      hammer.on('pinchmove', this.onPinch.bind(this));
      hammer.on('pinchend', this.pinchStop.bind(this));
      hammer.on('pinchstart', this.startPinch.bind(this));
    } else if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)()) {
      console.warn('[NgxImageCropper] Could not find HammerJS - Pinch Gesture won\'t work');
    }
  }
  resizeCropperPosition() {
    const sourceImageElement = this.sourceImage.nativeElement;
    if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
      this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
      this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
      this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
      this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
    }
  }
  resetCropperPosition() {
    this.cropperPositionService.resetCropperPosition(this.sourceImage, this.cropper, this.settings);
    this.doAutoCrop();
    this.imageVisible = true;
  }
  keyboardAccess(event) {
    this.changeKeyboardStepSize(event);
    this.keyboardMoveCropper(event);
  }
  changeKeyboardStepSize(event) {
    const key = +event.key;
    if (key >= 1 && key <= 9) {
      this.settings.stepSize = key;
    }
  }
  keyboardMoveCropper(event) {
    const keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
    if (!keyboardWhiteList.includes(event.key)) {
      return;
    }
    const moveType = event.shiftKey ? MoveTypes.Resize : MoveTypes.Move;
    const position = event.altKey ? getInvertedPositionForKey(event.key) : getPositionForKey(event.key);
    const moveEvent = getEventForKey(event.key, this.settings.stepSize);
    event.preventDefault();
    event.stopPropagation();
    this.startMove({
      clientX: 0,
      clientY: 0
    }, moveType, position);
    this.moveImg(moveEvent);
    this.moveStop();
  }
  startMove(event, moveType, position = null) {
    if (this.disabled || this.moveStart?.active && this.moveStart?.type === MoveTypes.Pinch || moveType === MoveTypes.Drag && !this.allowMoveImage) {
      return;
    }
    if (event.preventDefault) {
      event.preventDefault();
    }
    this.moveStart = {
      active: true,
      type: moveType,
      position,
      transform: {
        ...this.transform
      },
      clientX: this.cropperPositionService.getClientX(event),
      clientY: this.cropperPositionService.getClientY(event),
      ...this.cropper
    };
  }
  startPinch(event) {
    if (!this.safeImgDataUrl) {
      return;
    }
    if (event.preventDefault) {
      event.preventDefault();
    }
    this.moveStart = {
      active: true,
      type: MoveTypes.Pinch,
      position: 'center',
      clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2,
      clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2,
      ...this.cropper
    };
  }
  moveImg(event) {
    if (this.moveStart.active) {
      if (event.stopPropagation) {
        event.stopPropagation();
      }
      if (event.preventDefault) {
        event.preventDefault();
      }
      if (this.moveStart.type === MoveTypes.Move) {
        this.cropperPositionService.move(event, this.moveStart, this.cropper);
        this.checkCropperPosition(true);
      } else if (this.moveStart.type === MoveTypes.Resize) {
        if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
          this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
        }
        this.checkCropperPosition(false);
      } else if (this.moveStart.type === MoveTypes.Drag) {
        const diffX = this.cropperPositionService.getClientX(event) - this.moveStart.clientX;
        const diffY = this.cropperPositionService.getClientY(event) - this.moveStart.clientY;
        this.transform = {
          ...this.transform,
          translateH: (this.moveStart.transform?.translateH || 0) + diffX,
          translateV: (this.moveStart.transform?.translateV || 0) + diffY
        };
        this.setCssTransform();
      }
      this.cd.detectChanges();
    }
  }
  onPinch(event) {
    if (this.moveStart.active) {
      if (event.stopPropagation) {
        event.stopPropagation();
      }
      if (event.preventDefault) {
        event.preventDefault();
      }
      if (this.moveStart.type === MoveTypes.Pinch) {
        this.cropperPositionService.resize(event, this.moveStart, this.cropper, this.maxSize, this.settings);
        this.checkCropperPosition(false);
      }
      this.cd.detectChanges();
    }
  }
  setMaxSize() {
    if (this.sourceImage) {
      const sourceImageElement = this.sourceImage.nativeElement;
      this.maxSize.width = sourceImageElement.offsetWidth;
      this.maxSize.height = sourceImageElement.offsetHeight;
      this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
    }
  }
  setCropperScaledMinSize() {
    if (this.loadedImage?.transformed?.image) {
      this.setCropperScaledMinWidth();
      this.setCropperScaledMinHeight();
    } else {
      this.settings.cropperScaledMinWidth = 20;
      this.settings.cropperScaledMinHeight = 20;
    }
  }
  setCropperScaledMinWidth() {
    this.settings.cropperScaledMinWidth = this.cropperMinWidth > 0 ? Math.max(20, this.cropperMinWidth / this.loadedImage.transformed.image.width * this.maxSize.width) : 20;
  }
  setCropperScaledMinHeight() {
    if (this.maintainAspectRatio) {
      this.settings.cropperScaledMinHeight = Math.max(20, this.settings.cropperScaledMinWidth / this.aspectRatio);
    } else if (this.cropperMinHeight > 0) {
      this.settings.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.loadedImage.transformed.image.height * this.maxSize.height);
    } else {
      this.settings.cropperScaledMinHeight = 20;
    }
  }
  setCropperScaledMaxSize() {
    if (this.loadedImage?.transformed?.image) {
      const ratio = this.loadedImage.transformed.size.width / this.maxSize.width;
      this.settings.cropperScaledMaxWidth = this.cropperMaxWidth > 20 ? this.cropperMaxWidth / ratio : this.maxSize.width;
      this.settings.cropperScaledMaxHeight = this.cropperMaxHeight > 20 ? this.cropperMaxHeight / ratio : this.maxSize.height;
      if (this.maintainAspectRatio) {
        if (this.settings.cropperScaledMaxWidth > this.settings.cropperScaledMaxHeight * this.aspectRatio) {
          this.settings.cropperScaledMaxWidth = this.settings.cropperScaledMaxHeight * this.aspectRatio;
        } else if (this.settings.cropperScaledMaxWidth < this.settings.cropperScaledMaxHeight * this.aspectRatio) {
          this.settings.cropperScaledMaxHeight = this.settings.cropperScaledMaxWidth / this.aspectRatio;
        }
      }
    } else {
      this.settings.cropperScaledMaxWidth = this.maxSize.width;
      this.settings.cropperScaledMaxHeight = this.maxSize.height;
    }
  }
  checkCropperPosition(maintainSize = false) {
    if (this.cropper.x1 < 0) {
      this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
      this.cropper.x1 = 0;
    }
    if (this.cropper.y1 < 0) {
      this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
      this.cropper.y1 = 0;
    }
    if (this.cropper.x2 > this.maxSize.width) {
      this.cropper.x1 -= maintainSize ? this.cropper.x2 - this.maxSize.width : 0;
      this.cropper.x2 = this.maxSize.width;
    }
    if (this.cropper.y2 > this.maxSize.height) {
      this.cropper.y1 -= maintainSize ? this.cropper.y2 - this.maxSize.height : 0;
      this.cropper.y2 = this.maxSize.height;
    }
  }
  moveStop() {
    if (this.moveStart.active) {
      this.moveStart.active = false;
      if (this.moveStart?.type === MoveTypes.Drag) {
        this.transformChange.emit(this.transform);
      } else {
        this.doAutoCrop();
      }
    }
  }
  pinchStop() {
    if (this.moveStart.active) {
      this.moveStart.active = false;
      this.doAutoCrop();
    }
  }
  doAutoCrop() {
    if (this.autoCrop) {
      this.crop();
    }
  }
  crop() {
    if (this.loadedImage?.transformed?.image != null) {
      this.startCropImage.emit();
      const output = this.cropService.crop(this.sourceImage, this.loadedImage, this.cropper, this.settings);
      if (output != null) {
        this.imageCropped.emit(output);
      }
      return output;
    }
    return null;
  }
  aspectRatioIsCorrect() {
    const currentCropAspectRatio = (this.cropper.x2 - this.cropper.x1) / (this.cropper.y2 - this.cropper.y1);
    return currentCropAspectRatio === this.aspectRatio;
  }
}
ImageCropperComponent.ɵfac = function ImageCropperComponent_Factory(t) {
  return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CropService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CropperPositionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LoadImageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
ImageCropperComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ImageCropperComponent,
  selectors: [["image-cropper"]],
  viewQuery: function ImageCropperComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sourceImage = _t.first);
    }
  },
  hostVars: 6,
  hostBindings: function ImageCropperComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function ImageCropperComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("mousemove", function ImageCropperComponent_mousemove_HostBindingHandler($event) {
        return ctx.moveImg($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("touchmove", function ImageCropperComponent_touchmove_HostBindingHandler($event) {
        return ctx.moveImg($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("mouseup", function ImageCropperComponent_mouseup_HostBindingHandler() {
        return ctx.moveStop();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("touchend", function ImageCropperComponent_touchend_HostBindingHandler() {
        return ctx.moveStop();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("text-align", ctx.alignImage);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.disabled)("ngx-ix-hidden", ctx.hidden);
    }
  },
  inputs: {
    imageChangedEvent: "imageChangedEvent",
    imageURL: "imageURL",
    imageBase64: "imageBase64",
    imageFile: "imageFile",
    imageAltText: "imageAltText",
    format: "format",
    transform: "transform",
    maintainAspectRatio: "maintainAspectRatio",
    aspectRatio: "aspectRatio",
    resetCropOnAspectRatioChange: "resetCropOnAspectRatioChange",
    resizeToWidth: "resizeToWidth",
    resizeToHeight: "resizeToHeight",
    cropperMinWidth: "cropperMinWidth",
    cropperMinHeight: "cropperMinHeight",
    cropperMaxHeight: "cropperMaxHeight",
    cropperMaxWidth: "cropperMaxWidth",
    cropperStaticWidth: "cropperStaticWidth",
    cropperStaticHeight: "cropperStaticHeight",
    canvasRotation: "canvasRotation",
    initialStepSize: "initialStepSize",
    roundCropper: "roundCropper",
    onlyScaleDown: "onlyScaleDown",
    imageQuality: "imageQuality",
    autoCrop: "autoCrop",
    backgroundColor: "backgroundColor",
    containWithinAspectRatio: "containWithinAspectRatio",
    hideResizeSquares: "hideResizeSquares",
    allowMoveImage: "allowMoveImage",
    cropper: "cropper",
    alignImage: "alignImage",
    disabled: "disabled",
    hidden: "hidden"
  },
  outputs: {
    imageCropped: "imageCropped",
    startCropImage: "startCropImage",
    imageLoaded: "imageLoaded",
    cropperReady: "cropperReady",
    loadImageFailed: "loadImageFailed",
    transformChange: "transformChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 5,
  vars: 10,
  consts: [["wrapper", ""], ["class", "ngx-ic-source-image", 3, "src", "visibility", "transform", "ngx-ic-draggable", "load", "mousedown", "touchstart", "error", 4, "ngIf"], [1, "ngx-ic-overlay"], ["class", "ngx-ic-cropper", "tabindex", "0", 3, "ngx-ic-round", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], [1, "ngx-ic-source-image", 3, "src", "load", "mousedown", "touchstart", "error"], ["sourceImage", ""], ["tabindex", "0", 1, "ngx-ic-cropper", 3, "keydown"], [1, "ngx-ic-move", 3, "mousedown", "touchstart"], [4, "ngIf"], [1, "ngx-ic-resize", "ngx-ic-topleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-square"], [1, "ngx-ic-resize", "ngx-ic-top"], [1, "ngx-ic-resize", "ngx-ic-topright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-right"], [1, "ngx-ic-resize", "ngx-ic-bottomright", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-bottom"], [1, "ngx-ic-resize", "ngx-ic-bottomleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-left"], [1, "ngx-ic-resize-bar", "ngx-ic-top", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize-bar", "ngx-ic-right", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize-bar", "ngx-ic-bottom", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize-bar", "ngx-ic-left", 3, "mousedown", "touchstart"]],
  template: function ImageCropperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ImageCropperComponent_img_2_Template, 2, 8, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ImageCropperComponent_div_4_Template, 3, 15, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.imageVisible && ctx.backgroundColor);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.safeImgDataUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.maxSize.width, "px")("height", ctx.maxSize.height, "px")("margin-left", ctx.alignImage === "center" ? ctx.marginLeft : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageVisible);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image.ngx-ic-draggable[_ngcontent-%COMP%]{user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:grab}[_nghost-%COMP%]   .ngx-ic-overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color, white) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:transparent;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color, rgba(255, 255, 255, .3)) solid 100vw;touch-action:none}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{outline-width:100vh}}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:after{position:absolute;content:\"\";inset:0;pointer-events:none;border:dashed 1px;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:focus   .ngx-ic-move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]   .ngx-ic-square[_ngcontent-%COMP%]{display:inline-block;background:#53535C;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw #ffffff4d;box-shadow:0 0 0 100vw var(--cropper-outline-color, rgba(255, 255, 255, .3))}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh #ffffff4d;box-shadow:0 0 0 100vh var(--cropper-outline-color, rgba(255, 255, 255, .3))}}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{display:none}.ngx-ix-hidden[_nghost-%COMP%]{display:none}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImageCropperComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'image-cropper',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: "<div\n  [style.background]=\"imageVisible && backgroundColor\"\n  #wrapper\n>\n  <img\n    #sourceImage\n    class=\"ngx-ic-source-image\"\n    *ngIf=\"safeImgDataUrl\"\n    [src]=\"safeImgDataUrl\"\n    [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n    [style.transform]=\"safeTransformStyle\"\n    [class.ngx-ic-draggable]=\"!disabled && allowMoveImage\"\n    [attr.alt]=\"imageAltText\"\n    (load)=\"imageLoadedInView()\"\n    (mousedown)=\"startMove($event, moveTypes.Drag)\"\n    (touchstart)=\"startMove($event, moveTypes.Drag)\"\n    (error)=\"loadImageError($event)\"\n  >\n  <div\n    class=\"ngx-ic-overlay\"\n    [style.width.px]=\"maxSize.width\"\n    [style.height.px]=\"maxSize.height\"\n    [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n  ></div>\n  <div class=\"ngx-ic-cropper\"\n       *ngIf=\"imageVisible\"\n       [class.ngx-ic-round]=\"roundCropper\"\n       [style.top.px]=\"cropper.y1\"\n       [style.left.px]=\"cropper.x1\"\n       [style.width.px]=\"cropper.x2 - cropper.x1\"\n       [style.height.px]=\"cropper.y2 - cropper.y1\"\n       [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n       [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n       (keydown)=\"keyboardAccess($event)\"\n       tabindex=\"0\"\n  >\n    <div\n      (mousedown)=\"startMove($event, moveTypes.Move)\"\n      (touchstart)=\"startMove($event, moveTypes.Move)\"\n      class=\"ngx-ic-move\">\n    </div>\n    <ng-container *ngIf=\"!hideResizeSquares\">\n            <span class=\"ngx-ic-resize ngx-ic-topleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topleft')\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n      <span class=\"ngx-ic-resize ngx-ic-top\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n      <span class=\"ngx-ic-resize ngx-ic-topright\"\n            (mousedown)=\"startMove($event, moveTypes.Resize, 'topright')\"\n            (touchstart)=\"startMove($event, moveTypes.Resize, 'topright')\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n      <span class=\"ngx-ic-resize ngx-ic-right\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n      <span class=\"ngx-ic-resize ngx-ic-bottomright\"\n            (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomright')\"\n            (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomright')\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n      <span class=\"ngx-ic-resize ngx-ic-bottom\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n      <span class=\"ngx-ic-resize ngx-ic-bottomleft\"\n            (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomleft')\"\n            (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomleft')\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n      <span class=\"ngx-ic-resize ngx-ic-left\">\n                <span class=\"ngx-ic-square\"></span>\n            </span>\n      <span class=\"ngx-ic-resize-bar ngx-ic-top\"\n            (mousedown)=\"startMove($event, moveTypes.Resize, 'top')\"\n            (touchstart)=\"startMove($event, moveTypes.Resize, 'top')\">\n            </span>\n      <span class=\"ngx-ic-resize-bar ngx-ic-right\"\n            (mousedown)=\"startMove($event, moveTypes.Resize, 'right')\"\n            (touchstart)=\"startMove($event, moveTypes.Resize, 'right')\">\n            </span>\n      <span class=\"ngx-ic-resize-bar ngx-ic-bottom\"\n            (mousedown)=\"startMove($event, moveTypes.Resize, 'bottom')\"\n            (touchstart)=\"startMove($event, moveTypes.Resize, 'bottom')\">\n            </span>\n      <span class=\"ngx-ic-resize-bar ngx-ic-left\"\n            (mousedown)=\"startMove($event, moveTypes.Resize, 'left')\"\n            (touchstart)=\"startMove($event, moveTypes.Resize, 'left')\">\n            </span>\n    </ng-container>\n  </div>\n</div>\n",
      styles: [":host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}:host>div{width:100%;position:relative}:host>div img.ngx-ic-source-image{max-width:100%;max-height:100%;transform-origin:center}:host>div img.ngx-ic-source-image.ngx-ic-draggable{user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:grab}:host .ngx-ic-overlay{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color, white) solid 100vw;top:0;left:0}:host .ngx-ic-cropper{position:absolute;display:flex;color:#53535c;background:transparent;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color, rgba(255, 255, 255, .3)) solid 100vw;touch-action:none}@media (orientation: portrait){:host .ngx-ic-cropper{outline-width:100vh}}:host .ngx-ic-cropper:after{position:absolute;content:\"\";inset:0;pointer-events:none;border:dashed 1px;opacity:.75;color:inherit;z-index:1}:host .ngx-ic-cropper .ngx-ic-move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .ngx-ic-cropper:focus .ngx-ic-move{border-color:#1e90ff;border-width:2px}:host .ngx-ic-cropper .ngx-ic-resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .ngx-ic-cropper .ngx-ic-resize .ngx-ic-square{display:inline-block;background:#53535C;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-topright{top:-12px;right:-12px;cursor:nesw-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar{position:absolute;z-index:1}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .ngx-ic-cropper.ngx-ic-round{outline-color:transparent}:host .ngx-ic-cropper.ngx-ic-round:after{border-radius:100%;box-shadow:0 0 0 100vw #ffffff4d;box-shadow:0 0 0 100vw var(--cropper-outline-color, rgba(255, 255, 255, .3))}@media (orientation: portrait){:host .ngx-ic-cropper.ngx-ic-round:after{box-shadow:0 0 0 100vh #ffffff4d;box-shadow:0 0 0 100vh var(--cropper-outline-color, rgba(255, 255, 255, .3))}}:host .ngx-ic-cropper.ngx-ic-round .ngx-ic-move{border-radius:100%}:host.disabled .ngx-ic-cropper .ngx-ic-resize,:host.disabled .ngx-ic-cropper .ngx-ic-resize-bar,:host.disabled .ngx-ic-cropper .ngx-ic-move{display:none}:host.ngx-ix-hidden{display:none}\n"]
    }]
  }], function () {
    return [{
      type: CropService
    }, {
      type: CropperPositionService
    }, {
      type: LoadImageService
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    wrapper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['wrapper', {
        static: true
      }]
    }],
    sourceImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['sourceImage', {
        static: false
      }]
    }],
    imageChangedEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageURL: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageBase64: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageFile: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageAltText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    transform: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maintainAspectRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    aspectRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    resetCropOnAspectRatioChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    resizeToWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    resizeToHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    cropperMinWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    cropperMinHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    cropperMaxHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    cropperMaxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    cropperStaticWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    cropperStaticHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    canvasRotation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    initialStepSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    roundCropper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onlyScaleDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageQuality: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autoCrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    containWithinAspectRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    hideResizeSquares: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    allowMoveImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    cropper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    alignImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['style.text-align']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.disabled']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    hidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.ngx-ix-hidden']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageCropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    startCropImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    imageLoaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    cropperReady: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    loadImageFailed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    transformChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['window:resize']
    }],
    moveImg: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['document:mousemove', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['document:touchmove', ['$event']]
    }],
    moveStop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['document:mouseup']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['document:touchend']
    }]
  });
})();
class ImageCropperModule {}
ImageCropperModule.ɵfac = function ImageCropperModule_Factory(t) {
  return new (t || ImageCropperModule)();
};
ImageCropperModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ImageCropperModule
});
ImageCropperModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImageCropperModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      declarations: [ImageCropperComponent],
      exports: [ImageCropperComponent]
    }]
  }], null, null);
})();
function base64ToFile(base64Image) {
  const split = base64Image.split(',');
  const type = split[0].replace('data:', '').replace(';base64', '');
  const byteString = atob(split[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], {
    type
  });
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 13290:
/*!***********************************************************!*\
  !*** ./node_modules/ngx-joyride/fesm2020/ngx-joyride.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARROW_SIZE: () => (/* binding */ ARROW_SIZE),
/* harmony export */   DEFAULT_DISTANCE_FROM_MARGIN_LEFT: () => (/* binding */ DEFAULT_DISTANCE_FROM_MARGIN_LEFT),
/* harmony export */   DEFAULT_DISTANCE_FROM_MARGIN_TOP: () => (/* binding */ DEFAULT_DISTANCE_FROM_MARGIN_TOP),
/* harmony export */   DEFAULT_TEXTS: () => (/* binding */ DEFAULT_TEXTS),
/* harmony export */   DEFAULT_THEME_COLOR: () => (/* binding */ DEFAULT_THEME_COLOR),
/* harmony export */   DEFAULT_TIMEOUT_BETWEEN_STEPS: () => (/* binding */ DEFAULT_TIMEOUT_BETWEEN_STEPS),
/* harmony export */   DISTANCE_FROM_TARGET: () => (/* binding */ DISTANCE_FROM_TARGET),
/* harmony export */   DocumentService: () => (/* binding */ DocumentService),
/* harmony export */   DomRefService: () => (/* binding */ DomRefService),
/* harmony export */   EventListenerService: () => (/* binding */ EventListenerService),
/* harmony export */   JoyrideArrowComponent: () => (/* binding */ JoyrideArrowComponent),
/* harmony export */   JoyrideBackdropService: () => (/* binding */ JoyrideBackdropService),
/* harmony export */   JoyrideButtonComponent: () => (/* binding */ JoyrideButtonComponent),
/* harmony export */   JoyrideCloseButtonComponent: () => (/* binding */ JoyrideCloseButtonComponent),
/* harmony export */   JoyrideDirective: () => (/* binding */ JoyrideDirective),
/* harmony export */   JoyrideModule: () => (/* binding */ JoyrideModule),
/* harmony export */   JoyrideOptionsService: () => (/* binding */ JoyrideOptionsService),
/* harmony export */   JoyrideService: () => (/* binding */ JoyrideService),
/* harmony export */   JoyrideStepComponent: () => (/* binding */ JoyrideStepComponent),
/* harmony export */   JoyrideStepService: () => (/* binding */ JoyrideStepService),
/* harmony export */   JoyrideStepsContainerService: () => (/* binding */ JoyrideStepsContainerService),
/* harmony export */   KEY_CODE: () => (/* binding */ KEY_CODE),
/* harmony export */   LoggerService: () => (/* binding */ LoggerService),
/* harmony export */   NO_POSITION: () => (/* binding */ NO_POSITION),
/* harmony export */   ObservableCustomTexts: () => (/* binding */ ObservableCustomTexts),
/* harmony export */   STEP_DEFAULT_POSITION: () => (/* binding */ STEP_DEFAULT_POSITION),
/* harmony export */   Scroll: () => (/* binding */ Scroll),
/* harmony export */   StepActionType: () => (/* binding */ StepActionType),
/* harmony export */   StepDrawerService: () => (/* binding */ StepDrawerService),
/* harmony export */   TemplatesService: () => (/* binding */ TemplatesService),
/* harmony export */   routerModuleForChild: () => (/* binding */ routerModuleForChild)
/* harmony export */ });
/* harmony import */ var _Users_murchcode_Development_projects_service_contract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 12235);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 17474);









const _c0 = function (a0, a1, a2) {
  return {
    "background-color": a0,
    "color": a1,
    "border-color": a2
  };
};
const _c1 = ["*"];
const _c2 = ["stepHolder"];
const _c3 = ["stepContainer"];
function JoyrideStepComponent_joyride_arrow_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "joyride-arrow", 17);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx_r1.arrowTopPosition, "px")("left", ctx_r1.arrowLeftPosition, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("position", ctx_r1.arrowPosition);
  }
}
function JoyrideStepComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function JoyrideStepComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r5.text), " ");
  }
}
function JoyrideStepComponent_div_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function JoyrideStepComponent_div_15_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.counter);
  }
}
function JoyrideStepComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JoyrideStepComponent_div_15_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, JoyrideStepComponent_div_15_ng_template_2_Template, 2, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.customCounter ? ctx_r6.customCounter : _r12)("ngTemplateOutletContext", ctx_r6.counterData);
  }
}
function JoyrideStepComponent_div_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function JoyrideStepComponent_div_17_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "joyride-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r16.themeColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r16.prevText));
  }
}
function JoyrideStepComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JoyrideStepComponent_div_17_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.prev());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JoyrideStepComponent_div_17_ng_container_1_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, JoyrideStepComponent_div_17_ng_template_2_Template, 3, 4, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.customPrevButton ? ctx_r7.customPrevButton : _r15);
  }
}
function JoyrideStepComponent_div_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function JoyrideStepComponent_div_18_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "joyride-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r21.themeColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r21.nextText));
  }
}
function JoyrideStepComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JoyrideStepComponent_div_18_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JoyrideStepComponent_div_18_ng_container_1_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, JoyrideStepComponent_div_18_ng_template_2_Template, 3, 4, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.customNextButton ? ctx_r8.customNextButton : _r20);
  }
}
function JoyrideStepComponent_ng_template_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function JoyrideStepComponent_ng_template_19_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "joyride-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r26.themeColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r26.doneText));
  }
}
function JoyrideStepComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JoyrideStepComponent_ng_template_19_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r27.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JoyrideStepComponent_ng_template_19_ng_container_1_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, JoyrideStepComponent_ng_template_19_ng_template_2_Template, 3, 4, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.customDoneButton ? ctx_r10.customDoneButton : _r25);
  }
}
class JoyrideStep {
  constructor() {
    this.title = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject();
    this.text = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject();
  }
}
class JoyrideError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, JoyrideError.prototype);
  }
}
class JoyrideStepDoesNotExist extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, JoyrideStepDoesNotExist.prototype);
  }
}
class JoyrideStepOutOfRange extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, JoyrideStepOutOfRange.prototype);
  }
}
const DEFAULT_THEME_COLOR = '#3b5560';
const STEP_DEFAULT_POSITION = 'bottom';
const DEFAULT_TIMEOUT_BETWEEN_STEPS = 1;
class ObservableCustomTexts {}
const DEFAULT_TEXTS = {
  prev: (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)('prev'),
  next: (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)('next'),
  done: (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)('done'),
  close: (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null)
};
class JoyrideOptionsService {
  constructor() {
    this.themeColor = DEFAULT_THEME_COLOR;
    this.stepDefaultPosition = STEP_DEFAULT_POSITION;
    this.logsEnabled = false;
    this.showCounter = true;
    this.showPrevButton = true;
    this.stepsOrder = [];
  }
  setOptions(options) {
    this.stepsOrder = options.steps;
    this.stepDefaultPosition = options.stepDefaultPosition ? options.stepDefaultPosition : this.stepDefaultPosition;
    this.logsEnabled = typeof options.logsEnabled !== 'undefined' ? options.logsEnabled : this.logsEnabled;
    this.showCounter = typeof options.showCounter !== 'undefined' ? options.showCounter : this.showCounter;
    this.showPrevButton = typeof options.showPrevButton !== 'undefined' ? options.showPrevButton : this.showPrevButton;
    this.themeColor = options.themeColor ? options.themeColor : this.themeColor;
    this.firstStep = options.startWith;
    this.waitingTime = typeof options.waitingTime !== 'undefined' ? options.waitingTime : DEFAULT_TIMEOUT_BETWEEN_STEPS;
    typeof options.customTexts !== 'undefined' ? this.setCustomText(options.customTexts) : this.setCustomText(DEFAULT_TEXTS);
  }
  getBackdropColor() {
    return this.hexToRgb(this.themeColor);
  }
  getThemeColor() {
    return this.themeColor;
  }
  getStepDefaultPosition() {
    return this.stepDefaultPosition;
  }
  getStepsOrder() {
    return this.stepsOrder;
  }
  getFirstStep() {
    return this.firstStep;
  }
  getWaitingTime() {
    return this.waitingTime;
  }
  areLogsEnabled() {
    return this.logsEnabled;
  }
  isCounterVisible() {
    return this.showCounter;
  }
  isPrevButtonVisible() {
    return this.showPrevButton;
  }
  getCustomTexts() {
    return this.customTexts;
  }
  setCustomText(texts) {
    let prev;
    let next;
    let done;
    let close;
    prev = texts.prev ? texts.prev : DEFAULT_TEXTS.prev;
    next = texts.next ? texts.next : DEFAULT_TEXTS.next;
    done = texts.done ? texts.done : DEFAULT_TEXTS.done;
    close = texts.close ? texts.close : DEFAULT_TEXTS.close;
    this.customTexts = {
      prev: this.toObservable(prev),
      next: this.toObservable(next),
      done: this.toObservable(done),
      close: this.toObservable(close)
    };
  }
  toObservable(value) {
    return value instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable ? value : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(value);
  }
  hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
  }
}
JoyrideOptionsService.ɵfac = function JoyrideOptionsService_Factory(t) {
  return new (t || JoyrideOptionsService)();
};
JoyrideOptionsService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: JoyrideOptionsService,
  factory: JoyrideOptionsService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JoyrideOptionsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
const JOYRIDE = 'ngx-joyride:::';
class LoggerService {
  constructor(optionService) {
    this.optionService = optionService;
  }
  debug(message, data = "") {
    if (this.optionService.areLogsEnabled()) {
      console.debug(JOYRIDE + message, data);
    }
  }
  info(message, data = "") {
    if (this.optionService.areLogsEnabled()) {
      console.info(JOYRIDE + message, data);
    }
  }
  warn(message, data = "") {
    if (this.optionService.areLogsEnabled()) {
      console.warn(JOYRIDE + message, data);
    }
  }
  error(message, data = "") {
    if (this.optionService.areLogsEnabled()) {
      console.error(JOYRIDE + message, data);
    }
  }
}
LoggerService.ɵfac = function LoggerService_Factory(t) {
  return new (t || LoggerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](JoyrideOptionsService));
};
LoggerService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LoggerService,
  factory: LoggerService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoggerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: JoyrideOptionsService
    }];
  }, null);
})();
const ROUTE_SEPARATOR = '@';
class Step {}
var StepActionType;
(function (StepActionType) {
  StepActionType["NEXT"] = "NEXT";
  StepActionType["PREV"] = "PREV";
})(StepActionType || (StepActionType = {}));
class JoyrideStepsContainerService {
  constructor(stepOptions, logger) {
    this.stepOptions = stepOptions;
    this.logger = logger;
    this.tempSteps = [];
    this.currentStepIndex = -2;
    this.stepHasBeenModified = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  getFirstStepIndex() {
    const firstStep = this.stepOptions.getFirstStep();
    const stepIds = this.stepOptions.getStepsOrder();
    let index = stepIds.indexOf(firstStep);
    if (index < 0) {
      index = 0;
      if (firstStep !== undefined) this.logger.warn(`The step ${firstStep} does not exist. Check in your step list if it's present.`);
    }
    return index;
  }
  init() {
    this.logger.info('Initializing the steps array.');
    this.steps = [];
    this.currentStepIndex = this.getFirstStepIndex() - 1;
    let stepIds = this.stepOptions.getStepsOrder();
    stepIds.forEach(stepId => this.steps.push({
      id: stepId,
      step: null
    }));
  }
  addStep(stepToAdd) {
    let stepExist = this.tempSteps.filter(step => step.name === stepToAdd.name).length > 0;
    if (!stepExist) {
      this.logger.info(`Adding step ${stepToAdd.name} to the steps list.`);
      this.tempSteps.push(stepToAdd);
    } else {
      let stepIndexToReplace = this.tempSteps.findIndex(step => step.name === stepToAdd.name);
      this.tempSteps[stepIndexToReplace] = stepToAdd;
    }
  }
  get(action) {
    if (action === StepActionType.NEXT) this.currentStepIndex++;else this.currentStepIndex--;
    if (this.currentStepIndex < 0 || this.currentStepIndex >= this.steps.length) throw new JoyrideStepOutOfRange('The first or last step of the tour cannot be found!');
    const stepName = this.getStepName(this.steps[this.currentStepIndex].id);
    const index = this.tempSteps.findIndex(step => step.name === stepName);
    let stepFound = this.tempSteps[index];
    this.steps[this.currentStepIndex].step = stepFound;
    if (stepFound == null) {
      this.logger.warn(`Step ${this.steps[this.currentStepIndex].id} not found in the DOM. Check if it's hidden by *ngIf directive.`);
    }
    return stepFound;
  }
  getStepRoute(action) {
    let stepID;
    if (action === StepActionType.NEXT) {
      stepID = this.steps[this.currentStepIndex + 1] ? this.steps[this.currentStepIndex + 1].id : null;
    } else {
      stepID = this.steps[this.currentStepIndex - 1] ? this.steps[this.currentStepIndex - 1].id : null;
    }
    let stepRoute = stepID && stepID.includes(ROUTE_SEPARATOR) ? stepID.split(ROUTE_SEPARATOR)[1] : '';
    return stepRoute;
  }
  updatePosition(stepName, position) {
    let index = this.getStepIndex(stepName);
    if (this.steps[index].step) {
      this.steps[index].step.position = position;
      this.stepHasBeenModified.next(this.steps[index].step);
    } else {
      this.logger.warn(`Trying to modify the position of ${stepName} to ${position}. Step not found!Is this step located in a different route?`);
    }
  }
  getStepNumber(stepName) {
    return this.getStepIndex(stepName) + 1;
  }
  getStepsCount() {
    let stepsOrder = this.stepOptions.getStepsOrder();
    return stepsOrder.length;
  }
  getStepIndex(stepName) {
    const index = this.steps.map(step => step.id.includes(ROUTE_SEPARATOR) ? step.id.split(ROUTE_SEPARATOR)[0] : step.id).findIndex(name => stepName === name);
    if (index === -1) throw new JoyrideError(`The step with name: ${stepName} does not exist in the step list.`);
    return index;
  }
  getStepName(stepID) {
    let stepName = stepID && stepID.includes(ROUTE_SEPARATOR) ? stepID.split(ROUTE_SEPARATOR)[0] : stepID;
    return stepName;
  }
}
JoyrideStepsContainerService.ɵfac = function JoyrideStepsContainerService_Factory(t) {
  return new (t || JoyrideStepsContainerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](JoyrideOptionsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LoggerService));
};
JoyrideStepsContainerService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: JoyrideStepsContainerService,
  factory: JoyrideStepsContainerService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JoyrideStepsContainerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: JoyrideOptionsService
    }, {
      type: LoggerService
    }];
  }, null);
})();
class DomRefService {
  constructor(platformId) {
    this.platformId = platformId;
    this.fakeDocument = {
      body: {},
      documentElement: {}
    };
    this.fakeWindow = {
      document: this.fakeDocument,
      navigator: {}
    };
  }
  getNativeWindow() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) return window;else return this.fakeWindow;
  }
  getNativeDocument() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) return document;else return this.fakeDocument;
  }
}
DomRefService.ɵfac = function DomRefService_Factory(t) {
  return new (t || DomRefService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
};
DomRefService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DomRefService,
  factory: DomRefService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomRefService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }];
  }, null);
})();
class TemplatesService {
  setPrevButton(template) {
    this._prevButton = template;
  }
  getPrevButton() {
    return this._prevButton;
  }
  setNextButton(template) {
    this._nextButton = template;
  }
  getNextButton() {
    return this._nextButton;
  }
  setDoneButton(template) {
    this._doneButton = template;
  }
  getDoneButton() {
    return this._doneButton;
  }
  setCounter(template) {
    this._counter = template;
  }
  getCounter() {
    return this._counter;
  }
}
TemplatesService.ɵfac = function TemplatesService_Factory(t) {
  return new (t || TemplatesService)();
};
TemplatesService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TemplatesService,
  factory: TemplatesService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TemplatesService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
const NO_POSITION = 'NO_POSITION';
class JoyrideDirective {
  constructor(joyrideStepsContainer, viewContainerRef, domService, router, templateService, platformId) {
    this.joyrideStepsContainer = joyrideStepsContainer;
    this.viewContainerRef = viewContainerRef;
    this.domService = domService;
    this.router = router;
    this.templateService = templateService;
    this.platformId = platformId;
    this.stepPosition = NO_POSITION;
    this.prev = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.subscriptions = [];
    this.windowRef = this.domService.getNativeWindow();
    this.step = new JoyrideStep();
  }
  ngAfterViewInit() {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) return;
    if (this.prevTemplate) this.templateService.setPrevButton(this.prevTemplate);
    if (this.nextTemplate) this.templateService.setNextButton(this.nextTemplate);
    if (this.doneTemplate) this.templateService.setDoneButton(this.doneTemplate);
    if (this.counterTemplate) this.templateService.setCounter(this.counterTemplate);
    this.step.position = this.stepPosition;
    this.step.targetViewContainer = this.viewContainerRef;
    this.setAsyncFields(this.step);
    this.step.stepContent = this.stepContent;
    this.step.stepContentParams = this.stepContentParams;
    this.step.nextClicked = this.next;
    this.step.prevCliked = this.prev;
    this.step.tourDone = this.done;
    if (!this.name) throw new JoyrideError("All the steps should have the 'joyrideStep' property set with a custom name.");
    this.step.name = this.name;
    this.step.route = this.router.url.substr(0, 1) === '/' ? this.router.url.substr(1) : this.router.url;
    this.step.transformCssStyle = this.windowRef.getComputedStyle(this.viewContainerRef.element.nativeElement).transform;
    this.step.isElementOrAncestorFixed = this.isElementFixed(this.viewContainerRef.element) || this.isAncestorsFixed(this.viewContainerRef.element.nativeElement.parentElement);
    this.joyrideStepsContainer.addStep(this.step);
  }
  ngOnChanges(changes) {
    if (changes['title'] || changes['text']) {
      this.setAsyncFields(this.step);
    }
  }
  isElementFixed(element) {
    return this.windowRef.getComputedStyle(element.nativeElement).position === 'fixed';
  }
  setAsyncFields(step) {
    if (this.title instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable) {
      this.subscriptions.push(this.title.subscribe(title => {
        step.title.next(title);
      }));
    } else {
      step.title.next(this.title);
    }
    if (this.text instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable) {
      this.subscriptions.push(this.text.subscribe(text => {
        step.text.next(text);
      }));
    } else {
      step.text.next(this.text);
    }
  }
  isAncestorsFixed(nativeElement) {
    if (!nativeElement || !nativeElement.parentElement) return false;
    let isElementFixed = this.windowRef.getComputedStyle(nativeElement.parentElement).position === 'fixed';
    if (nativeElement.nodeName === 'BODY') {
      return isElementFixed;
    }
    if (isElementFixed) return true;else return this.isAncestorsFixed(nativeElement.parentElement);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
JoyrideDirective.ɵfac = function JoyrideDirective_Factory(t) {
  return new (t || JoyrideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](JoyrideStepsContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DomRefService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TemplatesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
};
JoyrideDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: JoyrideDirective,
  selectors: [["joyrideStep"], ["", "joyrideStep", ""]],
  inputs: {
    name: ["joyrideStep", "name"],
    nextStep: "nextStep",
    title: "title",
    text: "text",
    stepPosition: "stepPosition",
    stepContent: "stepContent",
    stepContentParams: "stepContentParams",
    prevTemplate: "prevTemplate",
    nextTemplate: "nextTemplate",
    doneTemplate: "doneTemplate",
    counterTemplate: "counterTemplate"
  },
  outputs: {
    prev: "prev",
    next: "next",
    done: "done"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JoyrideDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'joyrideStep, [joyrideStep]'
    }]
  }], function () {
    return [{
      type: JoyrideStepsContainerService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
    }, {
      type: DomRefService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
    }, {
      type: TemplatesService
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['joyrideStep']
    }],
    nextStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    stepPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    stepContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    stepContentParams: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    prevTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nextTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    doneTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    counterTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    prev: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    next: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    done: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
class JoyrideStepInfo {}
class DocumentService {
  constructor(DOMService, platformId) {
    this.DOMService = DOMService;
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(platformId)) {
      return;
    }
    this.setDocumentHeight();
    var doc = DOMService.getNativeDocument();
    if (doc && !doc.elementsFromPoint) {
      // IE 11 - Edge browsers
      doc.elementsFromPoint = this.elementsFromPoint.bind(this);
    }
  }
  getElementFixedTop(elementRef) {
    return elementRef.nativeElement.getBoundingClientRect().top;
  }
  getElementFixedLeft(elementRef) {
    return elementRef.nativeElement.getBoundingClientRect().left;
  }
  getElementAbsoluteTop(elementRef) {
    const scrollOffsets = this.getScrollOffsets();
    return elementRef.nativeElement.getBoundingClientRect().top + scrollOffsets.y;
  }
  getElementAbsoluteLeft(elementRef) {
    const scrollOffsets = this.getScrollOffsets();
    return elementRef.nativeElement.getBoundingClientRect().left + scrollOffsets.x;
  }
  setDocumentHeight() {
    this.documentHeight = this.calculateDocumentHeight();
  }
  getDocumentHeight() {
    return this.documentHeight;
  }
  isParentScrollable(elementRef) {
    return this.getFirstScrollableParent(elementRef.nativeElement) !== this.DOMService.getNativeDocument().body;
  }
  isElementBeyondOthers(elementRef, isElementFixed, keywordToDiscard) {
    const x1 = isElementFixed ? this.getElementFixedLeft(elementRef) : this.getElementAbsoluteLeft(elementRef);
    const y1 = isElementFixed ? this.getElementFixedTop(elementRef) : this.getElementAbsoluteTop(elementRef);
    const x2 = x1 + elementRef.nativeElement.getBoundingClientRect().width - 1;
    const y2 = y1 + elementRef.nativeElement.getBoundingClientRect().height - 1;
    const elements1 = this.DOMService.getNativeDocument().elementsFromPoint(x1, y1);
    const elements2 = this.DOMService.getNativeDocument().elementsFromPoint(x2, y2);
    if (elements1.length === 0 && elements2.length === 0) return 1;
    if (this.getFirstElementWithoutKeyword(elements1, keywordToDiscard) !== elementRef.nativeElement || this.getFirstElementWithoutKeyword(elements2, keywordToDiscard) !== elementRef.nativeElement) {
      return 2;
    }
    return 3;
  }
  scrollIntoView(elementRef, isElementFixed) {
    const firstScrollableParent = this.getFirstScrollableParent(elementRef.nativeElement);
    const top = isElementFixed ? this.getElementFixedTop(elementRef) : this.getElementAbsoluteTop(elementRef);
    if (firstScrollableParent !== this.DOMService.getNativeDocument().body) {
      if (firstScrollableParent.scrollTo) {
        firstScrollableParent.scrollTo(0, top - 150);
      } else {
        // IE 11 - Edge browsers
        firstScrollableParent.scrollTop = top - 150;
      }
    } else {
      this.DOMService.getNativeWindow().scrollTo(0, top - 150);
    }
  }
  scrollToTheTop(elementRef) {
    const firstScrollableParent = this.getFirstScrollableParent(elementRef.nativeElement);
    if (firstScrollableParent !== this.DOMService.getNativeDocument().body) {
      if (firstScrollableParent.scrollTo) {
        firstScrollableParent.scrollTo(0, 0);
      } else {
        // IE 11 - Edge browsers
        firstScrollableParent.scrollTop = 0;
      }
    } else {
      this.DOMService.getNativeWindow().scrollTo(0, 0);
    }
  }
  scrollToTheBottom(elementRef) {
    const firstScrollableParent = this.getFirstScrollableParent(elementRef.nativeElement);
    if (firstScrollableParent !== this.DOMService.getNativeDocument().body) {
      if (firstScrollableParent.scrollTo) {
        firstScrollableParent.scrollTo(0, this.DOMService.getNativeDocument().body.scrollHeight);
      } else {
        // IE 11 - Edge browsers
        firstScrollableParent.scrollTop = firstScrollableParent.scrollHeight - firstScrollableParent.clientHeight;
      }
    } else {
      this.DOMService.getNativeWindow().scrollTo(0, this.DOMService.getNativeDocument().body.scrollHeight);
    }
  }
  getFirstScrollableParent(node) {
    const regex = /(auto|scroll|overlay)/;
    const style = (node, prop) => this.DOMService.getNativeWindow().getComputedStyle(node, null).getPropertyValue(prop);
    const scroll = node => regex.test(style(node, 'overflow') + style(node, 'overflow-y') + style(node, 'overflow-x'));
    const scrollparent = node => {
      return !node || node === this.DOMService.getNativeDocument().body ? this.DOMService.getNativeDocument().body : scroll(node) ? node : scrollparent(node.parentNode);
    };
    return scrollparent(node);
  }
  calculateDocumentHeight() {
    const documentRef = this.DOMService.getNativeDocument();
    return Math.max(documentRef.body.scrollHeight, documentRef.documentElement.scrollHeight, documentRef.body.offsetHeight, documentRef.documentElement.offsetHeight, documentRef.body.clientHeight, documentRef.documentElement.clientHeight);
  }
  getScrollOffsets() {
    const winReference = this.DOMService.getNativeWindow();
    const docReference = this.DOMService.getNativeDocument();
    // This works for all browsers except IE versions 8 and before
    if (winReference.pageXOffset != null) return {
      x: winReference.pageXOffset,
      y: winReference.pageYOffset
    };
    // For IE (or any browser) in Standards mode
    if (docReference.compatMode == 'CSS1Compat') return {
      x: docReference.documentElement.scrollLeft,
      y: docReference.documentElement.scrollTop
    };
    // For browsers in Quirks mode
    return {
      x: docReference.body.scrollLeft,
      y: docReference.body.scrollTop
    };
  }
  elementsFromPoint(x, y) {
    var parents = [];
    var parent = void 0;
    do {
      const elem = this.DOMService.getNativeDocument().elementFromPoint(x, y);
      if (elem && parent !== elem) {
        parent = elem;
        parents.push(parent);
        parent.style.pointerEvents = 'none';
      } else {
        parent = false;
      }
    } while (parent);
    parents.forEach(function (parent) {
      return parent.style.pointerEvents = 'all';
    });
    return parents;
  }
  getFirstElementWithoutKeyword(elements, keyword) {
    while (elements[0] && elements[0].classList.toString().includes(keyword)) {
      elements.shift();
    }
    return elements[0];
  }
}
DocumentService.ɵfac = function DocumentService_Factory(t) {
  return new (t || DocumentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DomRefService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
};
DocumentService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DocumentService,
  factory: DocumentService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DocumentService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: DomRefService
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }];
  }, null);
})();
class JoyrideBackdropService {
  constructor(documentService, optionsService, rendererFactory) {
    this.documentService = documentService;
    this.optionsService = optionsService;
    this.rendererFactory = rendererFactory;
    this.lastXScroll = 0;
    this.lastYScroll = 0;
    this.setRenderer();
  }
  setRenderer() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }
  draw(step) {
    this.elementRef = step.targetViewContainer;
    this.targetAbsoluteTop = this.getTargetTotalTop(step);
    this.targetAbsoluteLeft = this.getTargetTotalLeft(step);
    this.currentBackdropContainer = this.renderer.createElement('div');
    this.renderer.addClass(this.currentBackdropContainer, 'backdrop-container');
    this.renderer.setStyle(this.currentBackdropContainer, 'position', 'fixed');
    this.renderer.setStyle(this.currentBackdropContainer, 'top', '0px');
    this.renderer.setStyle(this.currentBackdropContainer, 'left', '0px');
    this.renderer.setStyle(this.currentBackdropContainer, 'width', '100%');
    this.renderer.setStyle(this.currentBackdropContainer, 'height', '100%');
    this.renderer.setStyle(this.currentBackdropContainer, 'z-index', '1000');
    this.renderer.setAttribute(this.currentBackdropContainer, 'id', 'backdrop-' + step.name);
    this.backdropContent = this.renderer.createElement('div');
    this.renderer.addClass(this.backdropContent, 'backdrop-content');
    this.renderer.setStyle(this.backdropContent, 'position', 'relative');
    this.renderer.setStyle(this.backdropContent, 'height', '100%');
    this.renderer.setStyle(this.backdropContent, 'display', 'flex');
    this.renderer.setStyle(this.backdropContent, 'flex-direction', 'column');
    this.renderer.appendChild(this.currentBackdropContainer, this.backdropContent);
    this.backdropTop = this.renderer.createElement('div');
    this.renderer.addClass(this.backdropTop, 'joyride-backdrop');
    this.renderer.addClass(this.backdropTop, 'backdrop-top');
    this.renderer.setStyle(this.backdropTop, 'width', '100%');
    this.renderer.setStyle(this.backdropTop, 'height', this.targetAbsoluteTop - this.lastYScroll + 'px');
    this.renderer.setStyle(this.backdropTop, 'flex-shrink', '0');
    this.renderer.setStyle(this.backdropTop, 'background-color', `rgba(${this.optionsService.getBackdropColor()}, 0.7)`);
    this.renderer.appendChild(this.backdropContent, this.backdropTop);
    this.backdropMiddleContainer = this.renderer.createElement('div');
    this.renderer.addClass(this.backdropMiddleContainer, 'backdrop-middle-container');
    this.renderer.setStyle(this.backdropMiddleContainer, 'height', this.elementRef.element.nativeElement.offsetHeight + 'px');
    this.renderer.setStyle(this.backdropMiddleContainer, 'width', '100%');
    this.renderer.setStyle(this.backdropMiddleContainer, 'flex-shrink', '0');
    this.renderer.appendChild(this.backdropContent, this.backdropMiddleContainer);
    this.backdropMiddleContent = this.renderer.createElement('div');
    this.renderer.addClass(this.backdropMiddleContent, 'backdrop-middle-content');
    this.renderer.setStyle(this.backdropMiddleContent, 'display', 'flex');
    this.renderer.setStyle(this.backdropMiddleContent, 'width', '100%');
    this.renderer.setStyle(this.backdropMiddleContent, 'height', '100%');
    this.renderer.appendChild(this.backdropMiddleContainer, this.backdropMiddleContent);
    this.leftBackdrop = this.renderer.createElement('div');
    this.renderer.addClass(this.leftBackdrop, 'joyride-backdrop');
    this.renderer.addClass(this.leftBackdrop, 'backdrop-left');
    this.renderer.setStyle(this.leftBackdrop, 'flex-shrink', '0');
    this.renderer.setStyle(this.leftBackdrop, 'width', this.targetAbsoluteLeft - this.lastXScroll + 'px');
    this.renderer.setStyle(this.leftBackdrop, 'background-color', `rgba(${this.optionsService.getBackdropColor()}, 0.7)`);
    this.renderer.appendChild(this.backdropMiddleContent, this.leftBackdrop);
    this.targetBackdrop = this.renderer.createElement('div');
    this.renderer.addClass(this.targetBackdrop, 'backdrop-target');
    this.renderer.setStyle(this.targetBackdrop, 'flex-shrink', '0');
    this.renderer.setStyle(this.targetBackdrop, 'width', this.elementRef.element.nativeElement.offsetWidth + 'px');
    this.renderer.appendChild(this.backdropMiddleContent, this.targetBackdrop);
    this.rightBackdrop = this.renderer.createElement('div');
    this.renderer.addClass(this.rightBackdrop, 'joyride-backdrop');
    this.renderer.addClass(this.rightBackdrop, 'backdrop-right');
    this.renderer.setStyle(this.rightBackdrop, 'width', '100%');
    this.renderer.setStyle(this.rightBackdrop, 'background-color', `rgba(${this.optionsService.getBackdropColor()}, 0.7)`);
    this.renderer.appendChild(this.backdropMiddleContent, this.rightBackdrop);
    this.backdropBottom = this.renderer.createElement('div');
    this.renderer.addClass(this.backdropBottom, 'joyride-backdrop');
    this.renderer.addClass(this.backdropBottom, 'backdrop-bottom');
    this.renderer.setStyle(this.backdropBottom, 'width', '100%');
    this.renderer.setStyle(this.backdropBottom, 'height', '100%');
    this.renderer.setStyle(this.backdropBottom, 'background-color', `rgba(${this.optionsService.getBackdropColor()}, 0.7)`);
    this.renderer.appendChild(this.backdropContent, this.backdropBottom);
    this.removeLastBackdrop();
    this.drawCurrentBackdrop();
    this.lastBackdropContainer = this.currentBackdropContainer;
  }
  remove() {
    this.removeLastBackdrop();
  }
  redrawTarget(step) {
    this.targetAbsoluteLeft = this.getTargetTotalLeft(step);
    this.targetAbsoluteTop = this.getTargetTotalTop(step);
    this.handleVerticalScroll(step);
    this.handleHorizontalScroll(step);
  }
  getTargetTotalTop(step) {
    let targetVC = step.targetViewContainer;
    return step.isElementOrAncestorFixed ? this.documentService.getElementFixedTop(targetVC.element) : this.documentService.getElementAbsoluteTop(targetVC.element);
  }
  getTargetTotalLeft(step) {
    let targetVC = step.targetViewContainer;
    return step.isElementOrAncestorFixed ? this.documentService.getElementFixedLeft(targetVC.element) : this.documentService.getElementAbsoluteLeft(targetVC.element);
  }
  redraw(step, scroll) {
    if (this.lastYScroll !== scroll.scrollY) {
      this.lastYScroll = scroll.scrollY;
      if (this.elementRef) {
        this.handleVerticalScroll(step);
      }
    }
    if (this.lastXScroll !== scroll.scrollX) {
      this.lastXScroll = scroll.scrollX;
      if (this.elementRef) {
        this.handleHorizontalScroll(step);
      }
    }
  }
  handleHorizontalScroll(step) {
    let newBackdropLeftWidth = step.isElementOrAncestorFixed ? this.targetAbsoluteLeft : this.targetAbsoluteLeft - this.lastXScroll;
    if (newBackdropLeftWidth >= 0) {
      this.renderer.setStyle(this.leftBackdrop, 'width', newBackdropLeftWidth + 'px');
      this.renderer.setStyle(this.targetBackdrop, 'width', this.elementRef.element.nativeElement.offsetWidth + 'px');
    } else {
      this.handleTargetPartialWidth(newBackdropLeftWidth);
    }
  }
  handleTargetPartialWidth(newBackdropLeftWidth) {
    this.renderer.setStyle(this.leftBackdrop, 'width', 0 + 'px');
    let visibleTargetWidth = this.elementRef.element.nativeElement.offsetWidth + newBackdropLeftWidth;
    if (visibleTargetWidth >= 0) {
      this.renderer.setStyle(this.targetBackdrop, 'width', visibleTargetWidth + 'px');
    } else {
      this.renderer.setStyle(this.targetBackdrop, 'width', 0 + 'px');
    }
  }
  handleVerticalScroll(step) {
    let newBackdropTopHeight = step.isElementOrAncestorFixed ? this.targetAbsoluteTop : this.targetAbsoluteTop - this.lastYScroll;
    if (newBackdropTopHeight >= 0) {
      this.renderer.setStyle(this.backdropTop, 'height', newBackdropTopHeight + 'px');
      this.renderer.setStyle(this.backdropMiddleContainer, 'height', this.elementRef.element.nativeElement.offsetHeight + 'px');
    } else {
      this.handleTargetPartialHeight(newBackdropTopHeight);
    }
  }
  handleTargetPartialHeight(newBackdropTopHeight) {
    this.renderer.setStyle(this.backdropTop, 'height', 0 + 'px');
    let visibleTargetHeight = this.elementRef.element.nativeElement.offsetHeight + newBackdropTopHeight;
    if (visibleTargetHeight >= 0) {
      this.renderer.setStyle(this.backdropMiddleContainer, 'height', visibleTargetHeight + 'px');
    } else {
      this.renderer.setStyle(this.backdropMiddleContainer, 'height', 0 + 'px');
    }
  }
  removeLastBackdrop() {
    if (this.lastBackdropContainer) {
      this.renderer.removeChild(document.body, this.lastBackdropContainer);
      this.lastBackdropContainer = undefined;
    }
  }
  drawCurrentBackdrop() {
    this.renderer.appendChild(document.body, this.currentBackdropContainer);
  }
}
JoyrideBackdropService.ɵfac = function JoyrideBackdropService_Factory(t) {
  return new (t || JoyrideBackdropService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](JoyrideOptionsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2));
};
JoyrideBackdropService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: JoyrideBackdropService,
  factory: JoyrideBackdropService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JoyrideBackdropService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: DocumentService
    }, {
      type: JoyrideOptionsService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2
    }];
  }, null);
})();
class Scroll {}
class EventListenerService {
  constructor(rendererFactory, DOMService) {
    this.rendererFactory = rendererFactory;
    this.DOMService = DOMService;
    this.scrollEvent = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.resizeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  startListeningScrollEvents() {
    this.scrollUnlisten = this.renderer.listen('document', 'scroll', evt => {
      this.scrollEvent.next({
        scrollX: this.DOMService.getNativeWindow().pageXOffset,
        scrollY: this.DOMService.getNativeWindow().pageYOffset
      });
    });
  }
  startListeningResizeEvents() {
    this.resizeUnlisten = this.renderer.listen('window', 'resize', evt => {
      this.resizeEvent.next(evt);
    });
  }
  stopListeningScrollEvents() {
    this.scrollUnlisten();
  }
  stopListeningResizeEvents() {
    this.resizeUnlisten();
  }
}
EventListenerService.ɵfac = function EventListenerService_Factory(t) {
  return new (t || EventListenerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DomRefService));
};
EventListenerService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: EventListenerService,
  factory: EventListenerService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EventListenerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2
    }, {
      type: DomRefService
    }];
  }, null);
})();
class JoyrideArrowComponent {
  constructor() {
    this.position = 'top';
  }
}
JoyrideArrowComponent.ɵfac = function JoyrideArrowComponent_Factory(t) {
  return new (t || JoyrideArrowComponent)();
};
JoyrideArrowComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: JoyrideArrowComponent,
  selectors: [["joyride-arrow"]],
  inputs: {
    position: "position"
  },
  decls: 1,
  vars: 8,
  template: function JoyrideArrowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("joyride-arrow__top", ctx.position == "top")("joyride-arrow__bottom", ctx.position == "bottom")("joyride-arrow__left", ctx.position == "left")("joyride-arrow__right", ctx.position == "right");
    }
  },
  styles: [".joyride-arrow__top{border-left:11px solid transparent;border-right:11px solid transparent;border-bottom:11px solid #ffffff}.joyride-arrow__bottom{border-left:11px solid transparent;border-right:11px solid transparent;border-top:11px solid #ffffff}.joyride-arrow__right{border-left:11px solid #ffffff;border-bottom:11px solid transparent;border-top:11px solid transparent}.joyride-arrow__left{border-right:11px solid #ffffff;border-top:11px solid transparent;border-bottom:11px solid transparent}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JoyrideArrowComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'joyride-arrow',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      template: "<div [class.joyride-arrow__top]=\"position == 'top'\"\n     [class.joyride-arrow__bottom]=\"position == 'bottom'\"\n     [class.joyride-arrow__left]=\"position == 'left'\"\n     [class.joyride-arrow__right]=\"position == 'right'\">\n</div>",
      styles: [".joyride-arrow__top{border-left:11px solid transparent;border-right:11px solid transparent;border-bottom:11px solid #ffffff}.joyride-arrow__bottom{border-left:11px solid transparent;border-right:11px solid transparent;border-top:11px solid #ffffff}.joyride-arrow__right{border-left:11px solid #ffffff;border-bottom:11px solid transparent;border-top:11px solid transparent}.joyride-arrow__left{border-right:11px solid #ffffff;border-top:11px solid transparent;border-bottom:11px solid transparent}\n"]
    }]
  }], null, {
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class JoyrideCloseButtonComponent {}
JoyrideCloseButtonComponent.ɵfac = function JoyrideCloseButtonComponent_Factory(t) {
  return new (t || JoyrideCloseButtonComponent)();
};
JoyrideCloseButtonComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: JoyrideCloseButtonComponent,
  selectors: [["joy-close-button"]],
  decls: 3,
  vars: 0,
  consts: [["viewBox", "0 0 25 25", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "1", "y1", "24", "x2", "24", "y2", "1", "stroke", "black", "stroke-width", "3"], ["x1", "1", "y1", "1", "x2", "24", "y2", "24", "stroke", "black", "stroke-width", "3"]],
  template: function JoyrideCloseButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "line", 1)(2, "line", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JoyrideCloseButtonComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'joy-close-button',
      template: `<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="24" 
                    x2="24" y2="1" 
                    stroke="black" 
                    stroke-width="3"/>
                <line x1="1" y1="1" 
                    x2="24" y2="24" 
                    stroke="black" 
                    stroke-width="3"/>
            </svg>`
    }]
  }], null, null);
})();
class JoyrideButtonComponent {
  constructor() {
    this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  onClick() {
    this.clicked.emit();
  }
}
JoyrideButtonComponent.ɵfac = function JoyrideButtonComponent_Factory(t) {
  return new (t || JoyrideButtonComponent)();
};
JoyrideButtonComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: JoyrideButtonComponent,
  selectors: [["joyride-button"]],
  inputs: {
    color: "color"
  },
  outputs: {
    clicked: "clicked"
  },
  ngContentSelectors: _c1,
  decls: 2,
  vars: 5,
  consts: [[1, "joyride-button", 3, "ngStyle", "mouseleave", "mouseover", "click"]],
  template: function JoyrideButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseleave", function JoyrideButtonComponent_Template_button_mouseleave_0_listener() {
        return ctx.hover = false;
      })("mouseover", function JoyrideButtonComponent_Template_button_mouseover_0_listener() {
        return ctx.hover = true;
      })("click", function JoyrideButtonComponent_Template_button_click_0_listener() {
        return ctx.onClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c0, ctx.hover ? "#fff" : ctx.color, ctx.hover ? ctx.color : "#fff", ctx.hover ? ctx.color : "transparent"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle],
  styles: [".joyride-button[_ngcontent-%COMP%]{text-transform:uppercase;border:2px solid transparent;outline:none;padding:6px 12px;font-size:12px;font-weight:700;color:#fff;background-color:#3b5560;cursor:pointer}.joyride-button[_ngcontent-%COMP%]:hover{color:#3b5560;border:2px solid #3b5560;background-color:#fff}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JoyrideButtonComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'joyride-button',
      template: "<button (mouseleave)=\"hover=false\" (mouseover)=\"hover=true\"\n    [ngStyle]=\"{'background-color': hover ? '#fff' : color, \n                'color': hover ? color : '#fff',\n                'border-color' : hover ? color : 'transparent'}\"\n    class=\"joyride-button\" (click)=\"onClick()\">\n    <ng-content></ng-content>\n</button>",
      styles: [".joyride-button{text-transform:uppercase;border:2px solid transparent;outline:none;padding:6px 12px;font-size:12px;font-weight:700;color:#fff;background-color:#3b5560;cursor:pointer}.joyride-button:hover{color:#3b5560;border:2px solid #3b5560;background-color:#fff}\n"]
    }]
  }], null, {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    clicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
const STEP_MIN_WIDTH = 200;
const STEP_MAX_WIDTH = 400;
const CUSTOM_STEP_MAX_WIDTH_VW = 90;
const STEP_HEIGHT = 200;
const ASPECT_RATIO = 1.212;
const DEFAULT_DISTANCE_FROM_MARGIN_TOP = 2;
const DEFAULT_DISTANCE_FROM_MARGIN_LEFT = 2;
const DEFAULT_DISTANCE_FROM_MARGIN_BOTTOM = 5;
const DEFAULT_DISTANCE_FROM_MARGIN_RIGHT = 5;
var KEY_CODE;
(function (KEY_CODE) {
  KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
  KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
  KEY_CODE[KEY_CODE["ESCAPE_KEY"] = 27] = "ESCAPE_KEY";
})(KEY_CODE || (KEY_CODE = {}));
class JoyrideStepComponent {
  constructor(injector, stepsContainerService, eventListenerService, documentService, renderer, logger, optionsService, templateService) {
    this.injector = injector;
    this.stepsContainerService = stepsContainerService;
    this.eventListenerService = eventListenerService;
    this.documentService = documentService;
    this.renderer = renderer;
    this.logger = logger;
    this.optionsService = optionsService;
    this.templateService = templateService;
    this.stepWidth = STEP_MIN_WIDTH;
    this.stepHeight = STEP_HEIGHT;
    this.showArrow = true;
    this.arrowSize = ARROW_SIZE;
    this.subscriptions = [];
  }
  ngOnInit() {
    // Need to Inject here otherwise you will obtain a circular dependency
    this.joyrideStepService = this.injector.get(JoyrideStepService);
    this.documentHeight = this.documentService.getDocumentHeight();
    this.subscriptions.push(this.subscribeToResizeEvents());
    this.title = this.step.title.asObservable();
    this.text = this.step.text.asObservable();
    this.setCustomTemplates();
    this.setCustomTexts();
    this.counter = this.getCounter();
    this.isCounterVisible = this.optionsService.isCounterVisible();
    this.isPrevButtonVisible = this.optionsService.isPrevButtonVisible();
    this.themeColor = this.optionsService.getThemeColor();
    if (this.text) this.text.subscribe(val => this.checkRedraw(val));
    if (this.title) this.title.subscribe(val => this.checkRedraw(val));
  }
  ngAfterViewInit() {
    if (this.isCustomized()) {
      this.renderer.setStyle(this.stepContainer.nativeElement, 'max-width', CUSTOM_STEP_MAX_WIDTH_VW + 'vw');
      this.updateStepDimensions();
    } else {
      this.renderer.setStyle(this.stepContainer.nativeElement, 'max-width', STEP_MAX_WIDTH + 'px');
      let dimensions = this.getDimensionsByAspectRatio(this.stepContainer.nativeElement.clientWidth, this.stepContainer.nativeElement.clientHeight, ASPECT_RATIO);
      dimensions = this.adjustDimensions(dimensions.width, dimensions.height);
      this.stepWidth = dimensions.width;
      this.stepHeight = dimensions.height;
      this.renderer.setStyle(this.stepContainer.nativeElement, 'width', this.stepWidth + 'px');
      this.renderer.setStyle(this.stepContainer.nativeElement, 'height', this.stepHeight + 'px');
    }
    this.drawStep();
  }
  checkRedraw(val) {
    if (val != null) {
      // Need to wait that the change is rendered before redrawing
      setTimeout(() => {
        this.redrawStep();
      }, 2);
    }
  }
  isCustomized() {
    return this.step.stepContent || this.templateService.getCounter() || this.templateService.getPrevButton() || this.templateService.getNextButton() || this.templateService.getDoneButton();
  }
  setCustomTexts() {
    const customeTexts = this.optionsService.getCustomTexts();
    this.prevText = customeTexts.prev;
    this.nextText = customeTexts.next;
    this.doneText = customeTexts.done;
  }
  drawStep() {
    let position = this.step.isElementOrAncestorFixed ? 'fixed' : 'absolute';
    this.renderer.setStyle(this.stepHolder.nativeElement, 'position', position);
    this.renderer.setStyle(this.stepHolder.nativeElement, 'transform', this.step.transformCssStyle);
    this.targetWidth = this.step.targetViewContainer.element.nativeElement.getBoundingClientRect().width;
    this.targetHeight = this.step.targetViewContainer.element.nativeElement.getBoundingClientRect().height;
    this.targetAbsoluteLeft = position === 'fixed' ? this.documentService.getElementFixedLeft(this.step.targetViewContainer.element) : this.documentService.getElementAbsoluteLeft(this.step.targetViewContainer.element);
    this.targetAbsoluteTop = position === 'fixed' ? this.documentService.getElementFixedTop(this.step.targetViewContainer.element) : this.documentService.getElementAbsoluteTop(this.step.targetViewContainer.element);
    this.setStepStyle();
  }
  getCounter() {
    let stepPosition = this.stepsContainerService.getStepNumber(this.step.name);
    let numberOfSteps = this.stepsContainerService.getStepsCount();
    this.counterData = {
      step: stepPosition,
      total: numberOfSteps
    };
    return stepPosition + '/' + numberOfSteps;
  }
  setCustomTemplates() {
    this.customContent = this.step.stepContent;
    this.ctx = this.step.stepContentParams;
    this.customPrevButton = this.templateService.getPrevButton();
    this.customNextButton = this.templateService.getNextButton();
    this.customDoneButton = this.templateService.getDoneButton();
    this.customCounter = this.templateService.getCounter();
  }
  keyEvent(event) {
    console.log(event);
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      if (this.isLastStep()) {
        this.close();
      } else {
        this.next();
      }
    } else if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.prev();
    } else if (event.keyCode === KEY_CODE.ESCAPE_KEY) {
      this.close();
    }
  }
  prev() {
    this.joyrideStepService.prev();
  }
  next() {
    this.joyrideStepService.next();
  }
  close() {
    this.joyrideStepService.close();
  }
  isFirstStep() {
    return this.stepsContainerService.getStepNumber(this.step.name) === 1;
  }
  isLastStep() {
    return this.stepsContainerService.getStepNumber(this.step.name) === this.stepsContainerService.getStepsCount();
  }
  setStepStyle() {
    switch (this.step.position) {
      case 'top':
        {
          this.setStyleTop();
          break;
        }
      case 'bottom':
        {
          this.setStyleBottom();
          break;
        }
      case 'right':
        {
          this.setStyleRight();
          break;
        }
      case 'left':
        {
          this.setStyleLeft();
          break;
        }
      case 'center':
        {
          this.setStyleCenter();
          break;
        }
      default:
        {
          this.setStyleBottom();
        }
    }
  }
  setStyleTop() {
    this.stepsContainerService.updatePosition(this.step.name, 'top');
    this.topPosition = this.targetAbsoluteTop - DISTANCE_FROM_TARGET - this.stepHeight;
    this.stepAbsoluteTop = this.targetAbsoluteTop - DISTANCE_FROM_TARGET - this.stepHeight;
    this.arrowTopPosition = this.stepHeight;
    this.leftPosition = this.targetWidth / 2 - this.stepWidth / 2 + this.targetAbsoluteLeft;
    this.stepAbsoluteLeft = this.targetWidth / 2 - this.stepWidth / 2 + this.targetAbsoluteLeft;
    this.arrowLeftPosition = this.stepWidth / 2 - this.arrowSize;
    this.adjustLeftPosition();
    this.adjustRightPosition();
    this.arrowPosition = 'bottom';
    this.autofixTopPosition();
  }
  setStyleRight() {
    this.stepsContainerService.updatePosition(this.step.name, 'right');
    this.topPosition = this.targetAbsoluteTop + this.targetHeight / 2 - this.stepHeight / 2;
    this.stepAbsoluteTop = this.targetAbsoluteTop + this.targetHeight / 2 - this.stepHeight / 2;
    this.arrowTopPosition = this.stepHeight / 2 - this.arrowSize;
    this.leftPosition = this.targetAbsoluteLeft + this.targetWidth + DISTANCE_FROM_TARGET;
    this.stepAbsoluteLeft = this.targetAbsoluteLeft + this.targetWidth + DISTANCE_FROM_TARGET;
    this.arrowLeftPosition = -this.arrowSize;
    this.adjustTopPosition();
    this.adjustBottomPosition();
    this.arrowPosition = 'left';
    this.autofixRightPosition();
  }
  setStyleBottom() {
    this.stepsContainerService.updatePosition(this.step.name, 'bottom');
    this.topPosition = this.targetAbsoluteTop + this.targetHeight + DISTANCE_FROM_TARGET;
    this.stepAbsoluteTop = this.targetAbsoluteTop + this.targetHeight + DISTANCE_FROM_TARGET;
    this.arrowTopPosition = -this.arrowSize;
    this.arrowLeftPosition = this.stepWidth / 2 - this.arrowSize;
    this.leftPosition = this.targetWidth / 2 - this.stepWidth / 2 + this.targetAbsoluteLeft;
    this.stepAbsoluteLeft = this.targetWidth / 2 - this.stepWidth / 2 + this.targetAbsoluteLeft;
    this.adjustLeftPosition();
    this.adjustRightPosition();
    this.arrowPosition = 'top';
    this.autofixBottomPosition();
  }
  setStyleLeft() {
    this.stepsContainerService.updatePosition(this.step.name, 'left');
    this.topPosition = this.targetAbsoluteTop + this.targetHeight / 2 - this.stepHeight / 2;
    this.stepAbsoluteTop = this.targetAbsoluteTop + this.targetHeight / 2 - this.stepHeight / 2;
    this.arrowTopPosition = this.stepHeight / 2 - this.arrowSize;
    this.leftPosition = this.targetAbsoluteLeft - this.stepWidth - DISTANCE_FROM_TARGET;
    this.stepAbsoluteLeft = this.targetAbsoluteLeft - this.stepWidth - DISTANCE_FROM_TARGET;
    this.arrowLeftPosition = this.stepWidth;
    this.adjustTopPosition();
    this.adjustBottomPosition();
    this.arrowPosition = 'right';
    this.autofixLeftPosition();
  }
  setStyleCenter() {
    this.renderer.setStyle(this.stepHolder.nativeElement, 'position', 'fixed');
    this.renderer.setStyle(this.stepHolder.nativeElement, 'top', '50%');
    this.renderer.setStyle(this.stepHolder.nativeElement, 'left', '50%');
    this.updateStepDimensions();
    this.renderer.setStyle(this.stepHolder.nativeElement, 'transform', `translate(-${this.stepWidth / 2}px, -${this.stepHeight / 2}px)`);
    this.showArrow = false;
  }
  adjustLeftPosition() {
    if (this.leftPosition < 0) {
      this.arrowLeftPosition = this.arrowLeftPosition + this.leftPosition - DEFAULT_DISTANCE_FROM_MARGIN_LEFT;
      this.leftPosition = DEFAULT_DISTANCE_FROM_MARGIN_LEFT;
    }
  }
  adjustRightPosition() {
    let currentWindowWidth = document.body.clientWidth;
    if (this.stepAbsoluteLeft + this.stepWidth > currentWindowWidth) {
      let newLeftPos = this.leftPosition - (this.stepAbsoluteLeft + this.stepWidth + DEFAULT_DISTANCE_FROM_MARGIN_RIGHT - currentWindowWidth);
      let deltaLeftPosition = newLeftPos - this.leftPosition;
      this.leftPosition = newLeftPos;
      this.arrowLeftPosition = this.arrowLeftPosition - deltaLeftPosition;
    }
  }
  adjustTopPosition() {
    if (this.stepAbsoluteTop < 0) {
      this.arrowTopPosition = this.arrowTopPosition + this.topPosition - DEFAULT_DISTANCE_FROM_MARGIN_TOP;
      this.topPosition = DEFAULT_DISTANCE_FROM_MARGIN_TOP;
    }
  }
  adjustBottomPosition() {
    if (this.stepAbsoluteTop + this.stepHeight > this.documentHeight) {
      let newTopPos = this.topPosition - (this.stepAbsoluteTop + this.stepHeight + DEFAULT_DISTANCE_FROM_MARGIN_BOTTOM - this.documentHeight);
      let deltaTopPosition = newTopPos - this.topPosition;
      this.topPosition = newTopPos;
      this.arrowTopPosition = this.arrowTopPosition - deltaTopPosition;
    }
  }
  autofixTopPosition() {
    if (this.positionAlreadyFixed) {
      this.logger.warn('No step positions found for this step. The step will be centered.');
    } else if (this.targetAbsoluteTop - this.stepHeight - this.arrowSize < 0) {
      this.positionAlreadyFixed = true;
      this.setStyleRight();
    }
  }
  autofixRightPosition() {
    if (this.targetAbsoluteLeft + this.targetWidth + this.stepWidth + this.arrowSize > document.body.clientWidth) {
      this.setStyleBottom();
    }
  }
  autofixBottomPosition() {
    if (this.targetAbsoluteTop + this.stepHeight + this.arrowSize + this.targetHeight > this.documentHeight) {
      this.setStyleLeft();
    }
  }
  autofixLeftPosition() {
    if (this.targetAbsoluteLeft - this.stepWidth - this.arrowSize < 0) {
      this.setStyleTop();
    }
  }
  subscribeToResizeEvents() {
    return this.eventListenerService.resizeEvent.subscribe(() => {
      this.redrawStep();
    });
  }
  redrawStep() {
    this.updateStepDimensions();
    this.drawStep();
  }
  getDimensionsByAspectRatio(width, height, aspectRatio) {
    let calcHeight = (width + height) / (1 + aspectRatio);
    let calcWidth = calcHeight * aspectRatio;
    return {
      width: calcWidth,
      height: calcHeight
    };
  }
  adjustDimensions(width, height) {
    let area = width * height;
    let newWidth = width;
    let newHeight = height;
    if (width > STEP_MAX_WIDTH) {
      newWidth = STEP_MAX_WIDTH;
      newHeight = area / newWidth;
    } else if (width < STEP_MIN_WIDTH) {
      newWidth = STEP_MIN_WIDTH;
      newHeight = STEP_MIN_WIDTH / ASPECT_RATIO;
    }
    return {
      width: newWidth,
      height: newHeight
    };
  }
  updateStepDimensions() {
    this.stepWidth = this.stepContainer.nativeElement.clientWidth;
    this.stepHeight = this.stepContainer.nativeElement.clientHeight;
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
JoyrideStepComponent.ɵfac = function JoyrideStepComponent_Factory(t) {
  return new (t || JoyrideStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](JoyrideStepsContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](EventListenerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LoggerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](JoyrideOptionsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TemplatesService));
};
JoyrideStepComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: JoyrideStepComponent,
  selectors: [["joyride-step"]],
  viewQuery: function JoyrideStepComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepHolder = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepContainer = _t.first);
    }
  },
  hostBindings: function JoyrideStepComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function JoyrideStepComponent_keyup_HostBindingHandler($event) {
        return ctx.keyEvent($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    }
  },
  inputs: {
    step: "step"
  },
  decls: 21,
  vars: 17,
  consts: [[1, "joyride-step__holder", 3, "id"], ["stepHolder", ""], ["class", "joyride-step__arrow", 3, "position", "top", "left", 4, "ngIf"], [1, "joyride-step__container"], ["stepContainer", ""], [1, "joyride-step__close", 3, "click"], [1, "joyride-step__header"], [1, "joyride-step__title"], [1, "joyride-step__body"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultContent", ""], [1, "joyride-step__footer"], ["class", "joyride-step__counter-container", 4, "ngIf"], [1, "joyride-step__buttons-container"], ["class", "joyride-step__prev-container joyride-step__button", 3, "click", 4, "ngIf"], ["class", "joyride-step__next-container joyride-step__button", 3, "click", 4, "ngIf", "ngIfElse"], ["doneButton", ""], [1, "joyride-step__arrow", 3, "position"], [1, "joyride-step__counter-container"], ["defaultCounter", ""], [1, "joyride-step__counter"], [1, "joyride-step__prev-container", "joyride-step__button", 3, "click"], [4, "ngTemplateOutlet"], ["defaultPrevButton", ""], [1, "joyride-step__prev-button", 3, "color"], [1, "joyride-step__next-container", "joyride-step__button", 3, "click"], ["defaulNextButton", ""], [3, "color"], [1, "joyride-step__done-container", "joyride-step__button", 3, "click"], ["defaultDoneButton", ""], [1, "joyride-step__done-button", 3, "color"]],
  template: function JoyrideStepComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, JoyrideStepComponent_joyride_arrow_2_Template, 1, 5, "joyride-arrow", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3, 4)(5, "joy-close-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JoyrideStepComponent_Template_joy_close_button_click_5_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, JoyrideStepComponent_ng_container_11_Template, 1, 0, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, JoyrideStepComponent_ng_template_12_Template, 2, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, JoyrideStepComponent_div_15_Template, 4, 2, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, JoyrideStepComponent_div_17_Template, 4, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, JoyrideStepComponent_div_18_Template, 4, 1, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, JoyrideStepComponent_ng_template_19_Template, 4, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx.topPosition, "px")("left", ctx.leftPosition, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "joyride-step-" + ctx.step.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showArrow);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.themeColor);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 15, ctx.title));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.customContent ? ctx.customContent : _r4)("ngTemplateOutletContext", ctx.ctx);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCounterVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPrevButtonVisible && !ctx.isFirstStep());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLastStep())("ngIfElse", _r9);
    }
  },
  dependencies: [JoyrideArrowComponent, JoyrideCloseButtonComponent, JoyrideButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: [".joyride-step__holder{position:absolute;font-family:Arial,Helvetica,sans-serif;font-size:16px;z-index:1001}.joyride-step__arrow{position:absolute;left:40px;z-index:1002}.joyride-step__container{box-sizing:border-box;position:relative;color:#000;background-color:#fff;display:flex;flex-direction:column;justify-content:space-between;padding:10px;box-shadow:0 0 30px 1px #000}.joyride-step__header{display:flex;align-items:center;padding:8px}.joyride-step__title{font-weight:700;font-size:20px}.joyride-step__close{position:absolute;right:10px;top:10px;width:14px;height:14px;cursor:pointer}.joyride-step__body{text-align:left;padding:10px 8px}.joyride-step__footer{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-left:8px}.joyride-step__buttons-container{display:flex;flex-direction:row}.joyride-step__button:first-child{margin-right:2.5px}.joyride-step__button:last-child{margin-left:2.5px}.joyride-step__counter{font-weight:700;font-size:14px}.joyride-step__counter-container{margin-right:10px}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JoyrideStepComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'joyride-step',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      template: "<div #stepHolder class=\"joyride-step__holder\" [id]=\"'joyride-step-' + step.name\" [style.top.px]=\"topPosition\" [style.left.px]=\"leftPosition\">\n    <joyride-arrow *ngIf=\"showArrow\" class=\"joyride-step__arrow\" [position]=\"arrowPosition\" [style.top.px]=\"arrowTopPosition\"\n        [style.left.px]=\"arrowLeftPosition\"></joyride-arrow>\n    <div #stepContainer class=\"joyride-step__container\">\n        <joy-close-button class=\"joyride-step__close\" (click)=\"close()\"></joy-close-button>\n        <div class=\"joyride-step__header\">\n            <div class=\"joyride-step__title\" [style.color]=\"themeColor\">{{ title | async }}</div>\n        </div>\n        <div class=\"joyride-step__body\">\n            <ng-container *ngTemplateOutlet=\"customContent ? customContent : defaultContent; context: ctx\"></ng-container>\n            <ng-template #defaultContent>\n                {{ text | async }}\n            </ng-template>\n        </div>\n        <div class=\"joyride-step__footer\">\n            <div *ngIf=\"isCounterVisible\" class=\"joyride-step__counter-container\">\n                <ng-container *ngTemplateOutlet=\"customCounter ? customCounter : defaultCounter; context: counterData\"></ng-container>\n                <ng-template #defaultCounter>\n                    <div class=\"joyride-step__counter\">{{ counter }}</div>\n                </ng-template>\n            </div>\n            <div class=\"joyride-step__buttons-container\">\n                <div class=\"joyride-step__prev-container joyride-step__button\" *ngIf=\"isPrevButtonVisible && !isFirstStep()\" (click)=\"prev()\">\n                    <ng-container *ngTemplateOutlet=\"customPrevButton ? customPrevButton : defaultPrevButton\"></ng-container>\n                    <ng-template #defaultPrevButton>\n                        <joyride-button class=\"joyride-step__prev-button\" [color]=\"themeColor\">{{ prevText | async }}</joyride-button>\n                    </ng-template>\n                </div>\n                <div class=\"joyride-step__next-container joyride-step__button\" *ngIf=\"!isLastStep(); else doneButton\" (click)=\"next()\">\n                    <ng-container *ngTemplateOutlet=\"customNextButton ? customNextButton : defaulNextButton\"></ng-container>\n                    <ng-template #defaulNextButton>\n                        <joyride-button [color]=\"themeColor\">{{ nextText | async }}</joyride-button>\n                    </ng-template>\n                </div>\n                <ng-template #doneButton>\n                    <div class=\"joyride-step__done-container joyride-step__button\" (click)=\"close()\">\n                        <ng-container *ngTemplateOutlet=\"customDoneButton ? customDoneButton : defaultDoneButton\"></ng-container>\n                        <ng-template #defaultDoneButton>\n                            <joyride-button class=\"joyride-step__done-button\" [color]=\"themeColor\">{{ doneText | async }}</joyride-button>\n                        </ng-template>\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>",
      styles: [".joyride-step__holder{position:absolute;font-family:Arial,Helvetica,sans-serif;font-size:16px;z-index:1001}.joyride-step__arrow{position:absolute;left:40px;z-index:1002}.joyride-step__container{box-sizing:border-box;position:relative;color:#000;background-color:#fff;display:flex;flex-direction:column;justify-content:space-between;padding:10px;box-shadow:0 0 30px 1px #000}.joyride-step__header{display:flex;align-items:center;padding:8px}.joyride-step__title{font-weight:700;font-size:20px}.joyride-step__close{position:absolute;right:10px;top:10px;width:14px;height:14px;cursor:pointer}.joyride-step__body{text-align:left;padding:10px 8px}.joyride-step__footer{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-left:8px}.joyride-step__buttons-container{display:flex;flex-direction:row}.joyride-step__button:first-child{margin-right:2.5px}.joyride-step__button:last-child{margin-left:2.5px}.joyride-step__counter{font-weight:700;font-size:14px}.joyride-step__counter-container{margin-right:10px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
    }, {
      type: JoyrideStepsContainerService
    }, {
      type: EventListenerService
    }, {
      type: DocumentService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: LoggerService
    }, {
      type: JoyrideOptionsService
    }, {
      type: TemplatesService
    }];
  }, {
    step: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    stepHolder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['stepHolder', {
        static: true
      }]
    }],
    stepContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['stepContainer', {
        static: true
      }]
    }],
    keyEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['window:keyup', ['$event']]
    }]
  });
})();
class StepDrawerService {
  constructor(componentFactoryResolver, appRef, injector) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.appRef = appRef;
    this.injector = injector;
    this.refMap = {};
  }
  draw(step) {
    // 1. Create a component reference from the component
    const ref = this.componentFactoryResolver.resolveComponentFactory(JoyrideStepComponent).create(this.injector);
    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(ref.hostView);
    // 3. Get DOM element from component
    const domElem = ref.hostView.rootNodes[0];
    // 4. Append DOM element to the body
    document.body.appendChild(domElem);
    const instance = ref.instance;
    instance.step = step;
    ref.changeDetectorRef.detectChanges();
    step.stepInstance = instance;
    this.refMap[step.name] = ref;
  }
  remove(step) {
    this.appRef.detachView(this.refMap[step.name].hostView);
    this.refMap[step.name].destroy();
  }
}
StepDrawerService.ɵfac = function StepDrawerService_Factory(t) {
  return new (t || StepDrawerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
};
StepDrawerService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: StepDrawerService,
  factory: StepDrawerService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StepDrawerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
    }];
  }, null);
})();
const SCROLLBAR_SIZE = 20;
const DISTANCE_FROM_TARGET = 15;
const ARROW_SIZE = 10;
class JoyrideStepService {
  constructor(backDropService, eventListener, stepsContainerService, documentService, DOMService, stepDrawerService, optionsService, router, logger) {
    this.backDropService = backDropService;
    this.eventListener = eventListener;
    this.stepsContainerService = stepsContainerService;
    this.documentService = documentService;
    this.DOMService = DOMService;
    this.stepDrawerService = stepDrawerService;
    this.optionsService = optionsService;
    this.router = router;
    this.logger = logger;
    this.winTopPosition = 0;
    this.winBottomPosition = 0;
    this.stepsObserver = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject();
    this.initViewportPositions();
    this.subscribeToScrollEvents();
    this.subscribeToResizeEvents();
  }
  initViewportPositions() {
    this.winTopPosition = 0;
    this.winBottomPosition = this.DOMService.getNativeWindow().innerHeight - SCROLLBAR_SIZE;
  }
  subscribeToScrollEvents() {
    this.eventListener.startListeningScrollEvents();
    this.eventListener.scrollEvent.subscribe(scroll => {
      this.winTopPosition = scroll.scrollY;
      this.winBottomPosition = this.winTopPosition + this.DOMService.getNativeWindow().innerHeight - SCROLLBAR_SIZE;
      if (this.currentStep) this.backDropService.redraw(this.currentStep, scroll);
    });
  }
  subscribeToResizeEvents() {
    this.eventListener.resizeEvent.subscribe(() => {
      if (this.currentStep) this.backDropService.redrawTarget(this.currentStep);
    });
  }
  drawStep(step) {
    step.position = step.position === NO_POSITION ? this.optionsService.getStepDefaultPosition() : step.position;
    this.stepDrawerService.draw(step);
  }
  startTour() {
    this.stepsObserver = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject();
    this.stepsContainerService.init();
    this.documentService.setDocumentHeight();
    this.tryShowStep(StepActionType.NEXT);
    this.eventListener.startListeningResizeEvents();
    this.subscribeToStepsUpdates();
    return this.stepsObserver.asObservable();
  }
  close() {
    this.removeCurrentStep();
    this.notifyTourIsFinished();
    this.DOMService.getNativeWindow().scrollTo(0, 0);
    this.eventListener.stopListeningResizeEvents();
    this.backDropService.remove();
  }
  prev() {
    this.removeCurrentStep();
    this.currentStep.prevCliked.emit();
    this.tryShowStep(StepActionType.PREV);
  }
  next() {
    this.removeCurrentStep();
    this.currentStep.nextClicked.emit();
    this.tryShowStep(StepActionType.NEXT);
  }
  navigateToStepPage(action) {
    var _this = this;
    return (0,_Users_murchcode_Development_projects_service_contract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let stepRoute = _this.stepsContainerService.getStepRoute(action);
      if (stepRoute) {
        return yield _this.router.navigate([stepRoute]);
      }
    })();
  }
  subscribeToStepsUpdates() {
    this.stepsContainerService.stepHasBeenModified.subscribe(updatedStep => {
      if (this.currentStep && this.currentStep.name === updatedStep.name) {
        this.currentStep = updatedStep;
      }
    });
  }
  tryShowStep(actionType) {
    var _this2 = this;
    return (0,_Users_murchcode_Development_projects_service_contract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.navigateToStepPage(actionType);
      const timeout = _this2.optionsService.getWaitingTime();
      if (timeout > 100) _this2.backDropService.remove();
      setTimeout(() => {
        try {
          _this2.showStep(actionType);
        } catch (error) {
          if (error instanceof JoyrideStepDoesNotExist) {
            _this2.tryShowStep(actionType);
          } else if (error instanceof JoyrideStepOutOfRange) {
            _this2.logger.error('Forcing the tour closure: First or Last step not found in the DOM.');
            _this2.close();
          } else {
            throw new Error(error);
          }
        }
      }, timeout);
    })();
  }
  showStep(actionType) {
    this.currentStep = this.stepsContainerService.get(actionType);
    if (this.currentStep == null) throw new JoyrideStepDoesNotExist('');
    this.notifyStepClicked(actionType);
    // Scroll the element to get it visible if it's in a scrollable element
    this.scrollIfElementBeyondOtherElements();
    this.backDropService.draw(this.currentStep);
    this.drawStep(this.currentStep);
    this.scrollIfStepAndTargetAreNotVisible();
  }
  notifyStepClicked(actionType) {
    let stepInfo = {
      number: this.stepsContainerService.getStepNumber(this.currentStep.name),
      name: this.currentStep.name,
      route: this.currentStep.route,
      actionType
    };
    this.stepsObserver.next(stepInfo);
  }
  notifyTourIsFinished() {
    if (this.currentStep) this.currentStep.tourDone.emit();
    this.stepsObserver.complete();
  }
  removeCurrentStep() {
    if (this.currentStep) this.stepDrawerService.remove(this.currentStep);
  }
  scrollIfStepAndTargetAreNotVisible() {
    this.scrollWhenTargetOrStepAreHiddenBottom();
    this.scrollWhenTargetOrStepAreHiddenTop();
  }
  scrollWhenTargetOrStepAreHiddenBottom() {
    let totalTargetBottom = this.getMaxTargetAndStepBottomPosition();
    if (totalTargetBottom > this.winBottomPosition) {
      this.DOMService.getNativeWindow().scrollBy(0, totalTargetBottom - this.winBottomPosition);
    }
  }
  scrollWhenTargetOrStepAreHiddenTop() {
    let totalTargetTop = this.getMaxTargetAndStepTopPosition();
    if (totalTargetTop < this.winTopPosition) {
      this.DOMService.getNativeWindow().scrollBy(0, totalTargetTop - this.winTopPosition);
    }
  }
  getMaxTargetAndStepBottomPosition() {
    let targetAbsoluteTop = this.documentService.getElementAbsoluteTop(this.currentStep.targetViewContainer.element);
    if (this.currentStep.position === 'top') {
      return targetAbsoluteTop + this.currentStep.stepInstance.targetHeight;
    } else if (this.currentStep.position === 'bottom') {
      return targetAbsoluteTop + this.currentStep.stepInstance.targetHeight + this.currentStep.stepInstance.stepHeight + ARROW_SIZE + DISTANCE_FROM_TARGET;
    } else if (this.currentStep.position === 'right' || this.currentStep.position === 'left') {
      return Math.max(targetAbsoluteTop + this.currentStep.stepInstance.targetHeight, targetAbsoluteTop + this.currentStep.stepInstance.targetHeight / 2 + this.currentStep.stepInstance.stepHeight / 2);
    }
  }
  getMaxTargetAndStepTopPosition() {
    let targetAbsoluteTop = this.documentService.getElementAbsoluteTop(this.currentStep.targetViewContainer.element);
    if (this.currentStep.position === 'top') {
      return targetAbsoluteTop - (this.currentStep.stepInstance.stepHeight + ARROW_SIZE + DISTANCE_FROM_TARGET);
    } else if (this.currentStep.position === 'bottom') {
      return targetAbsoluteTop;
    } else if (this.currentStep.position === 'right' || this.currentStep.position === 'left') {
      return Math.min(targetAbsoluteTop, targetAbsoluteTop + this.currentStep.stepInstance.targetHeight / 2 - this.currentStep.stepInstance.stepHeight / 2);
    }
  }
  scrollIfElementBeyondOtherElements() {
    if (this.isElementBeyondOthers() === 2) {
      this.documentService.scrollToTheTop(this.currentStep.targetViewContainer.element);
    }
    if (this.isElementBeyondOthers() === 2) {
      this.documentService.scrollToTheBottom(this.currentStep.targetViewContainer.element);
    }
    if (this.isElementBeyondOthers() === 1 && this.documentService.isParentScrollable(this.currentStep.targetViewContainer.element)) {
      this.documentService.scrollIntoView(this.currentStep.targetViewContainer.element, this.currentStep.isElementOrAncestorFixed);
    }
    if (this.isElementBeyondOthers() === 1 && this.documentService.isParentScrollable(this.currentStep.targetViewContainer.element)) {
      this.currentStep.targetViewContainer.element.nativeElement.scrollIntoView();
    }
  }
  isElementBeyondOthers() {
    return this.documentService.isElementBeyondOthers(this.currentStep.targetViewContainer.element, this.currentStep.isElementOrAncestorFixed, 'backdrop');
  }
}
JoyrideStepService.ɵfac = function JoyrideStepService_Factory(t) {
  return new (t || JoyrideStepService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](JoyrideBackdropService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](EventListenerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](JoyrideStepsContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DomRefService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](StepDrawerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](JoyrideOptionsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LoggerService));
};
JoyrideStepService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: JoyrideStepService,
  factory: JoyrideStepService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JoyrideStepService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: JoyrideBackdropService
    }, {
      type: EventListenerService
    }, {
      type: JoyrideStepsContainerService
    }, {
      type: DocumentService
    }, {
      type: DomRefService
    }, {
      type: StepDrawerService
    }, {
      type: JoyrideOptionsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
    }, {
      type: LoggerService
    }];
  }, null);
})();
class JoyrideService {
  constructor(platformId, stepService, optionsService) {
    this.platformId = platformId;
    this.stepService = stepService;
    this.optionsService = optionsService;
    this.tourInProgress = false;
  }
  startTour(options) {
    if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(new JoyrideStepInfo());
    }
    if (!this.tourInProgress) {
      this.tourInProgress = true;
      if (options) {
        this.optionsService.setOptions(options);
      }
      this.tour$ = this.stepService.startTour().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.tourInProgress = false));
      this.tour$.subscribe();
    }
    return this.tour$;
  }
  closeTour() {
    if (this.isTourInProgress()) this.stepService.close();
  }
  isTourInProgress() {
    return this.tourInProgress;
  }
}
JoyrideService.ɵfac = function JoyrideService_Factory(t) {
  return new (t || JoyrideService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](JoyrideStepService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](JoyrideOptionsService));
};
JoyrideService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: JoyrideService,
  factory: JoyrideService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JoyrideService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: JoyrideStepService
    }, {
      type: JoyrideOptionsService
    }];
  }, null);
})();
const routerModuleForChild = _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([]);
class JoyrideModule {
  static forRoot() {
    return {
      ngModule: JoyrideModule,
      providers: [JoyrideService, JoyrideStepService, JoyrideStepsContainerService, JoyrideBackdropService, EventListenerService, DocumentService, JoyrideOptionsService, StepDrawerService, DomRefService, LoggerService, TemplatesService]
    };
  }
  static forChild() {
    return {
      ngModule: JoyrideModule,
      providers: []
    };
  }
}
JoyrideModule.ɵfac = function JoyrideModule_Factory(t) {
  return new (t || JoyrideModule)();
};
JoyrideModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: JoyrideModule
});
JoyrideModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, routerModuleForChild]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JoyrideModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, routerModuleForChild],
      declarations: [JoyrideDirective, JoyrideStepComponent, JoyrideArrowComponent, JoyrideButtonComponent, JoyrideCloseButtonComponent],
      exports: [JoyrideDirective]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-joyride
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_components_bonus-ui_advance_advance_module_ts.js.map