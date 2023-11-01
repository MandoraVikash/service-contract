"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_tasks_tasks_module_ts"],{

/***/ 2178:
/*!****************************************************************************!*\
  !*** ./src/app/components/apps/tasks/modal/add-task/add-task.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddTaskComponent: () => (/* binding */ AddTaskComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);






const _c0 = ["addTask"];
function AddTaskComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTaskComponent_ng_template_0_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "form", 5)(6, "div", 6)(7, "div", 7)(8, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Task Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sub task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "div", 12)(17, "div", 13)(18, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Remind on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13)(24, "select", 17)(25, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "7:00 am");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "7:30 am");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "8:00 am");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "8:30 am");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "9:00 am");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "9:30 am");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "10:00 am");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "10:30 am");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "11:00 am");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "11:30 am");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "12:00 pm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "12:30 pm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "1:00 pm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "2:00 pm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "3:00 pm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "4:00 pm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "5:00 pm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "6:00 pm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 13)(62, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "notification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13)(66, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 22)(70, "select", 23)(71, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "My Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 22)(74, "select", 25)(75, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 27)(78, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class AddTaskComponent {
  constructor(platformId, modalService) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.modalOpen = false;
  }
  ngOnInit() {}
  openModal() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.AddTask, {
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
  static #_ = this.ɵfac = function AddTaskComponent_Factory(t) {
    return new (t || AddTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AddTaskComponent,
    selectors: [["app-add-task"]],
    viewQuery: function AddTaskComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.AddTask = _t.first);
      }
    },
    decls: 2,
    vars: 0,
    consts: [["addTask", ""], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["id", "bookmark-form", "novalidate", "", 1, "form-bookmark", "needs-validation"], [1, "row"], [1, "form-group", "col-md-12"], ["for", "task-title"], ["id", "task-title", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], ["for", "sub-task"], ["id", "sub-task", "type", "text", "required", "", "autocomplete", "off", 1, "form-control"], [1, "d-flex", "date-details"], [1, "d-inline-block"], ["for", "chk-ani", 1, "d-block", "mb-0"], ["id", "chk-ani", "type", "checkbox", 1, "checkbox_animated"], ["type", "text", "data-language", "en", "placeholder", "Date", 1, "datepicker-here", "form-control", "digits"], [1, "form-control"], ["for", "chk-ani1", 1, "d-block", "mb-0"], ["id", "chk-an1", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani2", 1, "d-block", "mb-0"], ["id", "chk-an2", "type", "checkbox", 1, "checkbox_animated"], [1, "form-group", "col-md-6"], [1, "js-example-basic-single"], ["value", "task"], ["id", "bm-collection", 1, "js-example-disabled-results"], ["value", "general"], [1, "form-group", "col-md-12", "my-0"], ["required", "", "autocomplete", "off", 1, "form-control"], ["id", "index_var", "type", "hidden", "value", "6"], ["id", "Bookmark", "onclick", "submitBookMark()", "type", "submit", 1, "btn", "btn-secondary", "me-1"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary"]],
    template: function AddTaskComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddTaskComponent_ng_template_0_Template, 85, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 57102:
/*!********************************************************************************!*\
  !*** ./src/app/components/apps/tasks/modal/create-tag/create-tag.component.ts ***!
  \********************************************************************************/
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
    selectors: [["app-create-task-tag"]],
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

/***/ 59023:
/*!***************************************************************!*\
  !*** ./src/app/components/apps/tasks/tasks-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksRoutingModule: () => (/* binding */ TasksRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.component */ 2558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _tasks_component__WEBPACK_IMPORTED_MODULE_0__.TasksComponent
  }]
}];
class TasksRoutingModule {
  static #_ = this.ɵfac = function TasksRoutingModule_Factory(t) {
    return new (t || TasksRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: TasksRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TasksRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2558:
/*!**********************************************************!*\
  !*** ./src/app/components/apps/tasks/tasks.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksComponent: () => (/* binding */ TasksComponent)
/* harmony export */ });
/* harmony import */ var _modal_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/add-task/add-task.component */ 2178);
/* harmony import */ var _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/create-tag/create-tag.component */ 57102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 49177);








const _c0 = ["addTask"];
const _c1 = ["createTag"];
const _c2 = function () {
  return ["Apps"];
};
class TasksComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function TasksComponent_Factory(t) {
    return new (t || TasksComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: TasksComponent,
    selectors: [["app-tasks"]],
    viewQuery: function TasksComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.AddTask = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.CreateTag = _t.first);
      }
    },
    decls: 541,
    vars: 59,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "email-wrap", "bookmark-wrap"], [1, "row"], [1, "col-xl-3", "box-col-4a"], [1, "email-left-aside"], [1, "card"], [1, "card-body"], [1, "email-app-sidebar", "left-bookmark"], [1, "media"], [1, "media-size-email"], ["src", "assets/images/user/user.png", "alt", "", 1, "me-3", "rounded-circle"], [1, "media-body"], [1, "f-w-600"], ["role", "tablist", 1, "nav", "main-menu"], [1, "nav-item"], ["type", "button", 1, "badge-light-primary", "w-100", "btn-mail", 3, "click"], ["data-feather", "check-circle", 1, "me-2"], [1, "main-title"], ["id", "pills-created-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-created", "aria-selected", "true"], [1, "title"], ["id", "pills-todaytask-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-todaytask", "aria-selected", "false", 1, "show"], ["id", "pills-delayed-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-delayed", "aria-selected", "false", 1, "show"], ["id", "pills-upcoming-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-upcoming", "aria-selected", "false", 1, "show"], ["id", "pills-weekly-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-weekly", "aria-selected", "false", 1, "show"], ["id", "pills-monthly-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-monthly", "aria-selected", "false", 1, "show"], ["id", "pills-assigned-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-assigned", "aria-selected", "false", 1, "show"], ["id", "pills-tasks-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-tasks", "aria-selected", "false", 1, "show"], [1, "pull-right"], ["href", "javascript:void(0)", 3, "click"], [3, "icon"], ["id", "pills-notification-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-notification", "aria-selected", "false", 1, "show"], ["id", "pills-newsletter-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-newsletter", "aria-selected", "false", 1, "show"], ["id", "pills-business-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-business", "aria-selected", "false", 1, "show"], ["id", "pills-holidays-tab", "data-bs-toggle", "pill", "href", "javascript:void(0)", "role", "tab", "aria-controls", "pills-holidays", "aria-selected", "false", 1, "show"], [1, "col-xl-9", "col-md-12", "box-col-8"], [1, "email-right-aside", "bookmark-tabcontent"], [1, "card", "email-body", "radius-left"], [1, "ps-0"], [1, "tab-content"], ["id", "pills-created", "role", "tabpanel", "aria-labelledby", "pills-created-tab", 1, "tab-pane", "fade", "active", "show"], [1, "card", "mb-0"], [1, "card-header", "d-flex"], [1, "mb-0"], ["href", "javascript:void(0)"], ["data-feather", "printer", 1, "me-2"], [1, "card-body", "p-0"], [1, "taskadd"], [1, "table-responsive"], [1, "table"], [1, "task_title_0"], [1, "project_name_0"], [1, "task_desc_0"], ["href", "javascript:void(0)", 1, "me-2"], ["id", "pills-todaytask", "role", "tabpanel", "aria-labelledby", "pills-todaytask-tab", 1, "fade", "tab-pane"], [1, "details-bookmark", "text-center"], ["id", "favouriteData", 1, "row"], [1, "no-favourite"], ["id", "pills-delayed", "role", "tabpanel", "aria-labelledby", "pills-delayed-tab", 1, "fade", "tab-pane"], ["id", "pills-upcoming", "role", "tabpanel", "aria-labelledby", "pills-upcoming-tab", 1, "fade", "tab-pane"], ["id", "pills-weekly", "role", "tabpanel", "aria-labelledby", "pills-weekly-tab", 1, "fade", "tab-pane"], ["id", "pills-monthly", "role", "tabpanel", "aria-labelledby", "pills-monthly-tab", 1, "fade", "tab-pane"], ["id", "pills-assigned", "role", "tabpanel", "aria-labelledby", "pills-assigned-tab", 1, "fade", "tab-pane"], ["id", "pills-tasks", "role", "tabpanel", "aria-labelledby", "pills-tasks-tab", 1, "fade", "tab-pane"], ["id", "pills-notification", "role", "tabpanel", "aria-labelledby", "pills-notification-tab", 1, "fade", "tab-pane"], ["id", "pills-newsletter", "role", "tabpanel", "aria-labelledby", "pills-newsletter-tab", 1, "fade", "tab-pane"], ["id", "createtag", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade", "modal-bookmark"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], ["novalidate", "", 1, "form-bookmark", "needs-validation"], [1, "form-group", "col-md-12"], ["type", "text", "required", "", "autocomplete", "off", 1, "form-control"], [1, "form-group", "col-md-12", "mb-0"], ["type", "color", "value", "#563d7c", 1, "form-control", "form-control-color"], ["type", "button", 1, "btn", "btn-secondary", "me-1"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "me-1"], ["addTask", ""], ["createTag", ""]],
    template: function TasksComponent_Template(rf, ctx) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TasksComponent_Template_button_click_19_listener() {
          return ctx.AddTask.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " New Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li", 15)(23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "li")(26, "a", 19)(27, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Created by me");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "li")(30, "a", 21)(31, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Today's Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "li")(34, "a", 22)(35, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Delayed Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "li")(38, "a", 23)(39, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Upcoming Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "li")(42, "a", 24)(43, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "This week tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "li")(46, "a", 25)(47, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "This month tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "li")(50, "a", 26)(51, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Assigned to me");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "li")(54, "a", 27)(55, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "My tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "li")(60, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, " Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "span", 28)(63, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TasksComponent_Template_a_click_63_listener() {
          return ctx.CreateTag.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "li")(66, "a", 31)(67, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, " notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "li")(70, "a", 32)(71, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, " Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "li")(74, "a", 33)(75, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, " Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "li")(78, "a", 34)(79, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, " Holidays");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 35)(82, "div", 36)(83, "div", 37)(84, "div", 38)(85, "div", 39)(86, "div", 40)(87, "div", 41)(88, "div", 42)(89, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Created by me");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](92, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 46)(95, "div", 47)(96, "div", 48)(97, "table", 49)(98, "tbody")(99, "tr")(100, "td")(101, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "Client meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "td")(106, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "td")(109, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](110, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](112, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "td")(114, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](115, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "tr")(117, "td")(118, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Plan webinar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "td")(123, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "td")(126, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](127, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](129, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "td")(131, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](132, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "tr")(134, "td")(135, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "Email newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "td")(140, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "td")(143, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](144, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](146, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "td")(148, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](149, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "tr")(151, "td")(152, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](153, "Publish podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](155, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "td")(157, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](158, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "td")(160, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](161, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](163, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "td")(165, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](166, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "tr")(168, "td")(169, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](170, "Lunch website");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "td")(174, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](175, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "td")(177, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](178, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](180, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "td")(182, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](183, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "tr")(185, "td")(186, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187, "Client meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](189, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "td")(191, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](192, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "td")(194, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](195, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](196, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](197, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "td")(199, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](200, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "tr")(202, "td")(203, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](204, "Plan webinar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](205, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](206, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](207, "td")(208, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](209, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](210, "td")(211, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](212, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](213, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](214, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](215, "td")(216, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](217, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "tr")(219, "td")(220, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](221, "Email newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](222, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](223, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](224, "td")(225, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](226, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](227, "td")(228, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](229, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](231, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](232, "td")(233, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](234, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "div", 54)(236, "div", 41)(237, "div", 42)(238, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](239, "Today's Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](240, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](241, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](242, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](243, "div", 7)(244, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](245, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](246, "div", 57)(247, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](248, "No task due today.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](249, "div", 58)(250, "div", 41)(251, "div", 42)(252, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](253, "Delayed Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](254, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](255, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](256, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](257, "div", 7)(258, "div", 55)(259, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](260, "No tasks found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](261, "div", 59)(262, "div", 41)(263, "div", 42)(264, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](265, "Upcoming Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](266, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](267, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](268, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](269, "div", 7)(270, "div", 55)(271, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](272, "No tasks found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](273, "div", 60)(274, "div", 41)(275, "div", 42)(276, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](277, "This Week Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](278, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](279, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](280, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](281, "div", 7)(282, "div", 55)(283, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](284, "No tasks found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](285, "div", 61)(286, "div", 41)(287, "div", 42)(288, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](289, "This Month Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](290, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](291, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](292, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "div", 7)(294, "div", 55)(295, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](296, "No tasks found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](297, "div", 62)(298, "div", 41)(299, "div", 42)(300, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](301, "Assigned to me");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](302, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](303, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](304, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](305, "div", 46)(306, "div", 47)(307, "div", 48)(308, "table", 49)(309, "tr")(310, "td")(311, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](312, "Task name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](313, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](314, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](315, "td")(316, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](317, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](318, "td")(319, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](320, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](321, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](322, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](323, "td")(324, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](325, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](326, "tr")(327, "td")(328, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](329, "Task name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](330, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](331, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](332, "td")(333, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](334, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](335, "td")(336, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](337, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](338, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](339, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](340, "td")(341, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](342, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](343, "tr")(344, "td")(345, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](346, "Task name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](347, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](348, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](349, "td")(350, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](351, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](352, "td")(353, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](354, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](355, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](356, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](357, "td")(358, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](359, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](360, "tr")(361, "td")(362, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](363, "Task name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](364, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](365, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](366, "td")(367, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](368, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](369, "td")(370, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](371, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](372, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](373, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](374, "td")(375, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](376, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](377, "tr")(378, "td")(379, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](380, "Task name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](381, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](382, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](383, "td")(384, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](385, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](386, "td")(387, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](388, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](389, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](390, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](391, "td")(392, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](393, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](394, "div", 63)(395, "div", 41)(396, "div", 42)(397, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](398, "My tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](399, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](400, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](401, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](402, "div", 46)(403, "div", 47)(404, "div", 48)(405, "table", 49)(406, "tr")(407, "td")(408, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](409, "Task name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](410, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](411, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](412, "td")(413, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](414, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](415, "td")(416, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](417, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](418, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](419, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](420, "td")(421, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](422, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](423, "tr")(424, "td")(425, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](426, "Task name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](427, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](428, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](429, "td")(430, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](431, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](432, "td")(433, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](434, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](435, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](436, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](437, "td")(438, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](439, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](440, "tr")(441, "td")(442, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](443, "Task name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](444, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](445, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](446, "td")(447, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](448, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](449, "td")(450, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](451, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](452, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](453, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](454, "td")(455, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](456, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](457, "tr")(458, "td")(459, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](460, "Task name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](461, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](462, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](463, "td")(464, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](465, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](466, "td")(467, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](468, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](469, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](470, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](471, "td")(472, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](473, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](474, "tr")(475, "td")(476, "h6", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](477, "Task name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](478, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](479, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](480, "td")(481, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](482, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](483, "td")(484, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](485, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](486, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](487, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](488, "td")(489, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](490, "app-feather-icons", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](491, "div", 64)(492, "div", 41)(493, "div", 42)(494, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](495, "notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](496, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](497, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](498, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](499, "div", 7)(500, "div", 55)(501, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](502, "No tasks found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](503, "div", 65)(504, "div", 41)(505, "div", 42)(506, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](507, "Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](508, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](509, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](510, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](511, "div", 7)(512, "div", 55)(513, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](514, "No tasks found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](515, "div", 66)(516, "div", 67)(517, "div", 68)(518, "div", 69)(519, "h5", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](520, "Create Tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](521, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](522, "div", 72)(523, "form", 73)(524, "div", 3)(525, "div", 74)(526, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](527, "Tag Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](528, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](529, "div", 76)(530, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](531, "Tag color");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](532, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](533, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](534, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](535, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](536, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](537, "app-add-task", null, 80)(539, "app-create-task-tag", null, 81);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Tasks")("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](58, _c2))("active_item", "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "plus-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "trash-2");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__.FeatherIconsComponent, _modal_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_0__.AddTaskComponent, _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_1__.CreateTagComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 73444:
/*!*******************************************************!*\
  !*** ./src/app/components/apps/tasks/tasks.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksModule: () => (/* binding */ TasksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 56208);
/* harmony import */ var _tasks_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks-routing.module */ 59023);
/* harmony import */ var _tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.component */ 2558);
/* harmony import */ var _modal_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/add-task/add-task.component */ 2178);
/* harmony import */ var _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/create-tag/create-tag.component */ 57102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);







class TasksModule {
  static #_ = this.ɵfac = function TasksModule_Factory(t) {
    return new (t || TasksModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: TasksModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _tasks_routing_module__WEBPACK_IMPORTED_MODULE_1__.TasksRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TasksModule, {
    declarations: [_tasks_component__WEBPACK_IMPORTED_MODULE_2__.TasksComponent, _modal_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_3__.AddTaskComponent, _modal_create_tag_create_tag_component__WEBPACK_IMPORTED_MODULE_4__.CreateTagComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _tasks_routing_module__WEBPACK_IMPORTED_MODULE_1__.TasksRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_tasks_tasks_module_ts.js.map