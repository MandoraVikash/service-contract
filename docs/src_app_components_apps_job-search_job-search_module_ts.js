"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_job-search_job-search_module_ts"],{

/***/ 54689:
/*!*****************************************************************************!*\
  !*** ./src/app/components/apps/job-search/job-apply/job-apply.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobApplyComponent: () => (/* binding */ JobApplyComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/job-search/job-search */ 66379);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _shared_directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/disable-key-press.directive */ 64251);
/* harmony import */ var _shared_directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/only-alphabets.directive */ 77221);
/* harmony import */ var _shared_directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/directives/only-numbers.directive */ 15466);
/* harmony import */ var _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../job-filter/job-filter.component */ 96414);













function JobApplyComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Your full name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function JobApplyComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Invalid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function JobApplyComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Invalid Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function JobApplyComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Invalid Repeat Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function JobApplyComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function JobApplyComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "collegename is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function JobApplyComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "specialization is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function JobApplyComponent_div_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "location is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function JobApplyComponent_div_185_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "company_name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["Apps", "Job Apply"];
};
const _c1 = function () {
  return {
    standalone: true
  };
};
class JobApplyComponent {
  constructor(route, router, fb) {
    this.route = route;
    this.router = router;
    this.fb = fb;
    this.jobs = _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__.JobDB.Job_Category;
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.jobs.filter(items => {
        if (items.Id === id) {
          this.arr = items;
        }
      });
    });
  }
  ngOnInit() {
    this.jobForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      rpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      collegename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      specialization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    this.dropdownList = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }, {
      "id": 6,
      "itemName": "Germany"
    }, {
      "id": 7,
      "itemName": "France"
    }, {
      "id": 8,
      "itemName": "Russia"
    }, {
      "id": 9,
      "itemName": "Italy"
    }, {
      "id": 10,
      "itemName": "Sweden"
    }];
    this.selectedItems = [{
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }];
    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }
  static #_ = this.ɵfac = function JobApplyComponent_Factory(t) {
    return new (t || JobApplyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: JobApplyComponent,
    selectors: [["app-job-apply"]],
    decls: 215,
    vars: 43,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xl-3", "xl-40"], [1, "col-xl-9", "xl-60"], [1, "card"], [1, "job-search"], [1, "card-body", "pb-0"], [1, "media"], ["alt", "", 1, "img-40", "img-fluid", "m-r-20", 3, "src"], [1, "media-body"], [1, "f-w-600"], ["href", "javascript:void(0)"], [1, "pull-right"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-check", "text-white"], [1, "fa", "fa-star", "font-warning"], [1, "job-description"], [1, "mb-0"], [1, "form", "theme-form", 3, "formGroup"], [1, "col"], [1, "mb-3"], ["for", "exampleFormControlInput1"], [1, "font-danger"], ["name", "name", "autocomplete", "off", "id", "name", "type", "text", "placeholder", "Enter first name", "required", "required", "onlyAlphabets", "", 1, "form-control", 3, "formControl"], ["class", "text text-danger", 4, "ngIf"], ["for", "exampleFormControlInput3"], ["name", "email", "autocomplete", "off", "id", "email", "type", "email", "placeholder", "Enter email", "required", "required", 1, "form-control", 3, "formControl"], ["for", "exampleFormControlpassword"], ["name", "password", "autocomplete", "off", "id", "password", "type", "password", "placeholder", "Enter password", "required", "required", 1, "form-control", 3, "formControl"], ["for", "exampleFormControlpassword1"], ["id", "rpassword", "name", "rpassword", "autocomplete", "off", "type", "password", "placeholder", "Repeat password", "required", "required", 1, "form-control", 3, "formControl"], [1, "col-form-label", "pt-0"], [1, "input-group", "custom-datepicker", "job-input-datepicker"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", "disableKeyPress", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "click"], ["d", "ngbDatepicker"], ["for", "exampleFormControlInput4"], ["id", "phone", "name", "phone", "autocomplete", "off", "type", "email", "placeholder", "Enter Phone no.", "required", "required", "onlyNumbers", "", 1, "form-control", 3, "formControl"], [1, "form", "theme-form"], [1, "col-xl-6", "xl-100"], ["for", "exampleFormControlInput5"], ["id", "collegename", "name", "collegename", "autocomplete", "off", "type", "email", "placeholder", "Enter college name", "required", "required", 1, "form-control", 3, "formControl"], [1, "col-xl-6", "xl-100", "xl-mt-job"], [1, "col-form-label", "text-end", "pt-0"], [1, "col-sm-6"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", "disableKeyPress", "", 1, "datepicker-here", "form-control", "digits", 3, "ngModel", "ngModelOptions", "ngModelChange", "click"], ["sd", "ngbDatepicker"], [1, "col-sm-6", "xs-mt-period"], ["ed", "ngbDatepicker"], [1, "js-example-basic-single", "col-sm-12", "job-select2"], ["label", "Choose a Option"], ["value", "student"], ["value", "Bachelor"], ["value", "Master"], ["value", "Associate"], ["for", "exampleFormControlInput6"], ["id", "specialization", "name", "specialization", "autocomplete", "off", "type", "email", "placeholder", "Enter specialization", 1, "form-control", 3, "formControl"], ["for", "exampleFormControlInput7", 1, "form-label"], ["id", "location", "name", "location", "autocomplete", "off", "type", "email", "placeholder", "Enter Location", 1, "form-control", 3, "formControl"], ["psd", "ngbDatepicker"], ["ped", "ngbDatepicker"], [1, "js-example-basic-single", "col-sm-12", "job-select2", "mb-3"], ["label", "Enter Position"], ["value", "position"], ["value", "Web designer"], ["value", "Graphic designer"], ["value", "UI designer"], ["value", "UI/UX designer"], ["for", "exampleFormControlInput8"], ["id", "company_name", "name", "company_name", "autocomplete", "off", "type", "email", "type", "email", "placeholder", "Enter Company Name", 1, "form-control", 3, "formControl"], ["type", "file", 1, "form-control"], [1, "mb-3", "mb-0"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-primary", "me-1", 3, "disabled"], ["type", "reset", "value", "Cancel", 1, "btn", "btn-light"], [1, "text", "text-danger"]],
    template: function JobApplyComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-job-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10)(12, "h6", 11)(13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 13)(16, "button", 14)(17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " Save this job ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 16)(26, "i", 16)(27, "i", 16)(28, "i", 16)(29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 17)(31, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Personal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "form", 19)(34, "div", 2)(35, "div", 20)(36, "div", 21)(37, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Full Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, JobApplyComponent_div_42_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 2)(44, "div", 20)(45, "div", 21)(46, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, JobApplyComponent_div_51_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 2)(53, "div", 20)(54, "div", 21)(55, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, JobApplyComponent_div_60_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 2)(62, "div", 20)(63, "div", 21)(64, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Repeat Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, JobApplyComponent_div_69_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 2)(71, "div", 20)(72, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Birth Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 21)(75, "div", 33)(76, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function JobApplyComponent_Template_input_ngModelChange_76_listener($event) {
          return ctx.model1 = $event;
        })("click", function JobApplyComponent_Template_input_click_76_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](77);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r4.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 2)(79, "div", 20)(80, "div", 21)(81, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "Phone Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](83, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](84, JobApplyComponent_div_84_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Your Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "form", 38)(88, "div", 2)(89, "div", 39)(90, "div", 21)(91, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "College Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](95, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](96, JobApplyComponent_div_96_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "div", 42)(98, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "Period:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "div", 2)(103, "div", 44)(104, "div", 45)(105, "input", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function JobApplyComponent_Template_input_ngModelChange_105_listener($event) {
          return ctx.model2 = $event;
        })("click", function JobApplyComponent_Template_input_click_105_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
          const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](106);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r7.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "div", 48)(108, "div", 33)(109, "input", 46, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function JobApplyComponent_Template_input_ngModelChange_109_listener($event) {
          return ctx.model3 = $event;
        })("click", function JobApplyComponent_Template_input_click_109_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
          const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](110);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r8.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "div", 39)(112, "div", 21)(113, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "Degree Level:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "select", 50)(118, "optgroup", 51)(119, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122, "Bachelor");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](124, "Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126, "Associate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "div", 39)(128, "div", 21)(129, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](130, "Specialization:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](133, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](134, JobApplyComponent_div_134_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](136, "Your Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "form", 38)(138, "div", 2)(139, "div", 39)(140, "div", 21)(141, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](142, "Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](145, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](146, JobApplyComponent_div_146_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "div", 42)(148, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](149, "Period:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](151, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "div", 2)(153, "div", 44)(154, "div", 33)(155, "input", 46, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function JobApplyComponent_Template_input_ngModelChange_155_listener($event) {
          return ctx.model4 = $event;
        })("click", function JobApplyComponent_Template_input_click_155_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](156);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r11.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "div", 48)(158, "div", 33)(159, "input", 46, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function JobApplyComponent_Template_input_ngModelChange_159_listener($event) {
          return ctx.model5 = $event;
        })("click", function JobApplyComponent_Template_input_click_159_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
          const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](160);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r12.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "div", 39)(162, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](163, "Position:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](165, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](166, "select", 62)(167, "optgroup", 63)(168, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](169, "Choose a option");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](171, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](173, "Graphic Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](174, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](175, "UI Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](177, "UI/UX Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](178, "div", 39)(179, "div", 21)(180, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](181, "Company Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](182, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](183, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](184, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](185, JobApplyComponent_div_185_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](186, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](187, "Upload Your Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](188, "form", 38)(189, "div", 2)(190, "div", 20)(191, "div", 21)(192, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](193, "Upload Your CV:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](194, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](195, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](196, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](197, "div", 2)(198, "div", 20)(199, "div", 21)(200, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](201, "Upload Cover Letter:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](202, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](203, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](204, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](205, "div", 2)(206, "div", 20)(207, "div", 72)(208, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](209, "Upload Recommendations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](210, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](211, "div", 73)(212, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](213, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](214, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Job Apply")("items", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](37, _c0))("active_item", "Job Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.arr.logo, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.arr.job_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.arr.job_area, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.arr.job_city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.jobForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.name.touched && (ctx.jobForm.controls.name.errors == null ? null : ctx.jobForm.controls.name.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["email"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.email.touched && (ctx.jobForm.controls.email.errors == null ? null : ctx.jobForm.controls.email.errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["password"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.password.touched && (ctx.jobForm.controls.password.errors == null ? null : ctx.jobForm.controls.password.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["rpassword"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.rpassword.touched && (ctx.jobForm.controls.rpassword.errors == null ? null : ctx.jobForm.controls.rpassword.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.model1)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](38, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["phone"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.phone.touched && (ctx.jobForm.controls.phone.errors == null ? null : ctx.jobForm.controls.phone.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["collegename"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.collegename.touched && (ctx.jobForm.controls.collegename.errors == null ? null : ctx.jobForm.controls.collegename.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.model2)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](39, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.model3)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](40, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["specialization"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.specialization.touched && (ctx.jobForm.controls.specialization.errors == null ? null : ctx.jobForm.controls.specialization.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["location"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.location.touched && (ctx.jobForm.controls.location.errors == null ? null : ctx.jobForm.controls.location.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.model4)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](41, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.model5)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](42, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.jobForm.controls["company_name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.jobForm.controls.company_name.touched && (ctx.jobForm.controls.company_name.errors == null ? null : ctx.jobForm.controls.company_name.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.jobForm.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbInputDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_2__.DisableKeyPressDirective, _shared_directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_3__.OnlyAlphabetsDirective, _shared_directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_4__.OnlyNumbersDirective, _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_5__.JobFilterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 89092:
/*!***************************************************************************!*\
  !*** ./src/app/components/apps/job-search/job-card/job-card.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobCardComponent: () => (/* binding */ JobCardComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/job-search/job-search */ 66379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../job-filter/job-filter.component */ 96414);






function JobCardComponent_div_7_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function JobCardComponent_div_7_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "3 days ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1) {
  return ["/job/details", a1];
};
function JobCardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 12)(7, "h6", 13)(8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, JobCardComponent_div_7_span_10_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, JobCardComponent_div_7_span_11_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 17)(18, "i", 17)(19, "i", 17)(20, "i", 17)(21, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const job_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", job_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, job_r1.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r1.job_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", job_r1.type == "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", job_r1.type !== "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", job_r1.job_area, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", job_r1.job_city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r1.Job_description);
  }
}
const _c1 = function () {
  return ["Apps", "Job Search"];
};
class JobCardComponent {
  constructor() {
    this.jobs = _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__.JobDB.Job_Category;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function JobCardComponent_Factory(t) {
    return new (t || JobCardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: JobCardComponent,
    selectors: [["app-job-card"]],
    decls: 8,
    vars: 5,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xl-3", "xl-40", "box-col-12"], [1, "col-xl-9", "xl-60", "box-col-12"], ["class", "col-xl-6 xl-100", 4, "ngFor", "ngForOf"], [1, "col-xl-6", "xl-100"], [1, "card"], [1, "job-search"], [1, "card-body"], [1, "media"], ["alt", "", 1, "img-40", "img-fluid", "m-r-20", 3, "src"], [1, "media-body"], [1, "f-w-600"], [3, "routerLink"], ["class", "badge badge-primary pull-right", 4, "ngIf"], ["class", "pull-right", 4, "ngIf"], [1, "fa", "fa-star", "font-warning"], [1, "fa", "fa-star", "font-warning-o"], [1, "badge", "badge-primary", "pull-right"], [1, "pull-right"]],
    template: function JobCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-job-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, JobCardComponent_div_7_Template, 24, 10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Job Card")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1))("active_item", "Job Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.jobs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_2__.JobFilterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 22610:
/*!***************************************************************************!*\
  !*** ./src/app/components/apps/job-search/job-desc/job-desc.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobDescComponent: () => (/* binding */ JobDescComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/job-search/job-search */ 66379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../job-filter/job-filter.component */ 96414);







function JobDescComponent_div_58_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1) {
  return ["/job/apply", a1];
};
function JobDescComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 10)(7, "h6", 11)(8, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, JobDescComponent_div_58_span_10_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 15)(17, "i", 15)(18, "i", 15)(19, "i", 15)(20, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const job_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", job_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, job_r1.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r1.job_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", job_r1.type == "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", job_r1.job_area, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", job_r1.job_city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r1.Job_description);
  }
}
const _c1 = function () {
  return ["Apps", "Job Search"];
};
class JobDescComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.jobs = _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__.JobDB.Job_Category;
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.jobs.filter(items => {
        if (items.Id === id) {
          this.arr = items;
        }
      });
    });
  }
  applyClick(arr) {
    this.router.navigate(['/job/apply', arr.Id]);
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function JobDescComponent_Factory(t) {
    return new (t || JobDescComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: JobDescComponent,
    selectors: [["app-job-desc"]],
    decls: 60,
    vars: 20,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xl-3", "xl-40"], [1, "col-xl-9", "xl-60"], [1, "card"], [1, "job-search"], [1, "card-body"], [1, "media"], ["alt", "", 1, "img-40", "img-fluid", "m-r-20", 3, "src"], [1, "media-body"], [1, "f-w-600"], ["href", "javascript:void(0)"], [1, "pull-right"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-star", "font-warning"], [1, "job-description"], [3, "innerHTML"], ["type", "button", 1, "btn", "btn-primary", "me-1"], [1, "fa", "fa-check"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-share-alt"], [1, "header-faq"], [1, "mb-0", "f-w-600"], ["class", "col-xl-6 xl-100", 4, "ngFor", "ngForOf"], [1, "col-xl-6", "xl-100"], [3, "routerLink"], ["class", "badge badge-primary pull-right", 4, "ngIf"], [1, "fa", "fa-star", "font-warning-o"], [1, "badge", "badge-primary", "pull-right"]],
    template: function JobDescComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-job-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10)(12, "h6", 11)(13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 13)(16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function JobDescComponent_Template_button_click_16_listener() {
          return ctx.applyClick(ctx.arr);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Apply for this job");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 15)(24, "i", 15)(25, "i", 15)(26, "i", 15)(27, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 16)(29, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Job Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 16)(34, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 16)(38, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 16)(42, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 16)(46, "button", 18)(47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, " Save this job");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "button", 20)(51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 22)(55, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Similar Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, JobDescComponent_div_58_Template, 23, 9, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](59, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Job Description")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c1))("active_item", "Job Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.arr.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.arr.job_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.arr.job_area, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.arr.job_city);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.arr.Job_description);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.arr.Qualifications == null ? null : ctx.arr.Qualifications.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.arr.Qualifications == null ? null : ctx.arr.Qualifications.desc, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.arr.Agency_experience == null ? null : ctx.arr.Agency_experience.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.arr.Agency_experience == null ? null : ctx.arr.Agency_experience.desc, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.arr.Perks == null ? null : ctx.arr.Perks.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.arr.Perks == null ? null : ctx.arr.Perks.desc, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](59, 15, ctx.jobs, 0, 4));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_2__.JobFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 96414:
/*!*******************************************************************************!*\
  !*** ./src/app/components/apps/job-search/job-filter/job-filter.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobFilterComponent: () => (/* binding */ JobFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);


class JobFilterComponent {
  constructor() {
    this.isFilter = false;
    this.isLocation = false;
    this.isJob_Title = false;
    this.isIndustry = false;
    this.isSpecific_skills = false;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function JobFilterComponent_Factory(t) {
    return new (t || JobFilterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: JobFilterComponent,
    selectors: [["app-job-filter"]],
    decls: 149,
    vars: 10,
    consts: [[1, "md-sidebar"], [1, "btn", "btn-primary", "email-aside-toggle", "md-sidebar-toggle"], [1, "md-sidebar-aside", "job-sidebar"], ["id", "accordionoc", 1, "default-according", "style-1", "faq-accordion", "job-accordion"], [1, "accordion"], [1, "card"], [1, "card-header"], [1, "mb-0"], ["aria-controls", "collapse", 1, "btn", "btn-link", 3, "click"], ["id", "collapseicon", 1, "collapse", "show", 3, "ngbCollapse"], [1, "card-body", "filter-cards-view", "animate-chk"], [1, "job-filter", "mb-2"], [1, "faq-form"], ["type", "text", "placeholder", "Search..", 1, "form-control"], ["data-feather", "search", 1, "search-icon"], [1, "job-filter"], ["type", "text", "placeholder", "location..", 1, "form-control"], ["data-feather", "map-pin", 1, "search-icon"], [1, "checkbox-animated"], ["for", "chk-ani", 1, "d-block"], ["id", "chk-ani", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani1", 1, "d-block"], ["id", "chk-ani1", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani2", 1, "d-block"], ["id", "chk-ani2", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani3", 1, "d-block"], ["id", "chk-ani3", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani4", 1, "d-block"], ["id", "chk-ani4", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani5", 1, "d-block"], ["id", "chk-ani5", "type", "checkbox", 1, "checkbox_animated"], ["type", "button", 1, "btn", "btn-primary", "text-center"], ["id", "collapseicon1", 1, "collapse", 3, "ngbCollapse"], [1, "card-body", "animate-chk"], [1, "location-checkbox"], ["for", "chk-ani6", 1, "d-block"], ["id", "chk-ani6", "type", "checkbox", 1, "checkbox_animated"], [1, "d-block"], ["for", "chk-ani7", 1, "d-block"], ["id", "chk-ani7", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani8", 1, "d-block"], ["id", "chk-ani8", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani9", 1, "d-block"], ["id", "chk-ani9", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani10", 1, "d-block", "mb-0"], ["id", "chk-ani10", "type", "checkbox", 1, "checkbox_animated"], ["type", "button", 1, "btn", "d-block", "w-100", "btn-primary", "text-center"], ["id", "collapseicon2", 1, "collapse", 3, "ngbCollapse"], ["for", "chk-ani11", 1, "d-block"], ["id", "chk-ani11", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani12", 1, "d-block"], ["id", "chk-ani12", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani13", 1, "d-block"], ["id", "chk-ani13", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani14", 1, "d-block"], ["id", "chk-ani14", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani15", 1, "d-block", "mb-0"], ["id", "chk-ani15", "type", "checkbox", 1, "checkbox_animated"], ["id", "collapseicon3", 1, "collapse", 3, "ngbCollapse"], ["for", "chk-ani16", 1, "d-block"], ["id", "chk-ani16", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani17", 1, "d-block"], ["id", "chk-ani17", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani18", 1, "d-block"], ["id", "chk-ani18", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani19", 1, "d-block"], ["id", "chk-ani19", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani20", 1, "d-block", "mb-0"], ["id", "chk-ani20", "type", "checkbox", 1, "checkbox_animated"], ["id", "collapseicon4", 1, "collapse", 3, "ngbCollapse"], ["for", "chk-ani21", 1, "d-block"], ["id", "chk-ani21", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani22", 1, "d-block"], ["id", "chk-ani22", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani23", 1, "d-block"], ["id", "chk-ani23", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani24", 1, "d-block"], ["id", "chk-ani24", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani25", 1, "d-block", "mb-0"], ["id", "chk-ani25", "type", "checkbox", 1, "checkbox_animated"]],
    template: function JobFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Job filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "h5", 7)(9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobFilterComponent_Template_button_click_9_listener() {
          return ctx.isFilter = !ctx.isFilter;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 13)(16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15)(18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 16)(20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18)(22, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Full-time (8688) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Contract (503) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Part-time (288) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Internship (236) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Temporary (146) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Commission (25) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Find jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5)(43, "div", 6)(44, "h5", 7)(45, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobFilterComponent_Template_button_click_45_listener() {
          return ctx.isLocation = !ctx.isLocation;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 32)(48, "div", 33)(49, "div", 34)(50, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " New York");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " NY (399)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " San Francisco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "CA (252)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Washington");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "DC (226)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Seattle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "WA (242)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Chicago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "IL (187)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "All Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 5)(78, "div", 6)(79, "h5", 7)(80, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobFilterComponent_Template_button_click_80_listener() {
          return ctx.isJob_Title = !ctx.isJob_Title;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Job Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 47)(83, "div", 33)(84, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " UI/Ux designer(25) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Graphic designer(10) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Front end designer(15) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " PHP developer(42) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " React Developer(5) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "All Job Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 5)(102, "div", 6)(103, "h5", 7)(104, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobFilterComponent_Template_button_click_104_listener() {
          return ctx.isIndustry = !ctx.isIndustry;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 58)(107, "div", 33)(108, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Computer Software(14) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " IT Engineer(10) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Service industry(20) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Accounting(34) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Financial Services(5) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "All Industries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 5)(126, "div", 6)(127, "h5", 7)(128, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobFilterComponent_Template_button_click_128_listener() {
          return ctx.isSpecific_skills = !ctx.isSpecific_skills;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Specific skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 69)(131, "div", 33)(132, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " HTML,scss & sass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "label", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Javascript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Node.js ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Gulp & Pug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Angular.js ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "All Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isJob_Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isJob_Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isIndustry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isIndustry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isSpecific_skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isSpecific_skills);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbCollapse],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 81191:
/*!***************************************************************************!*\
  !*** ./src/app/components/apps/job-search/job-list/job-list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobListComponent: () => (/* binding */ JobListComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/job-search/job-search */ 66379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../job-filter/job-filter.component */ 96414);






function JobListComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function JobListComponent_div_6_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function JobListComponent_div_6_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const job_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r1.type);
  }
}
const _c0 = function (a1) {
  return ["/job/details", a1];
};
function JobListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, JobListComponent_div_6_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8)(3, "div", 9)(4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 12)(7, "h6", 13)(8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, JobListComponent_div_6_span_10_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, JobListComponent_div_6_span_11_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 18)(18, "i", 18)(19, "i", 18)(20, "i", 18)(21, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const job_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", job_r1.ribbion == "true" ? "ribbon-vertical-left-wrapper" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", job_r1.ribbion == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", job_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, job_r1.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r1.job_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", job_r1.type == "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", job_r1.type != "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", job_r1.job_area, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", job_r1.job_city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r1.Job_description);
  }
}
const _c1 = function () {
  return ["Apps", "Job Search"];
};
class JobListComponent {
  constructor() {
    this.jobs = _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__.JobDB.Job_Category;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function JobListComponent_Factory(t) {
    return new (t || JobListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: JobListComponent,
    selectors: [["app-job-list"]],
    decls: 8,
    vars: 9,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xl-3", "xl-40"], [1, "col-xl-9", "xl-60"], ["class", "card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card", 3, "ngClass"], ["class", "ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary", 4, "ngIf"], [1, "job-search"], [1, "card-body"], [1, "media"], ["alt", "", 1, "img-40", "img-fluid", "m-r-20", 3, "src"], [1, "media-body"], [1, "f-w-600"], [3, "routerLink"], ["class", "badge badge-primary pull-right", 4, "ngIf"], ["class", "pull-right", 4, "ngIf"], [1, "ms-2"], [1, "fa", "fa-star", "font-warning"], [1, "ribbon", "ribbon-bookmark", "ribbon-vertical-left", "ribbon-secondary"], [1, "icofont", "icofont-love"], [1, "badge", "badge-primary", "pull-right"], [1, "pull-right"]],
    template: function JobListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-job-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, JobListComponent_div_6_Template, 24, 12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Job List")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c1))("active_item", "Job List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](7, 4, ctx.jobs, 0, 9));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_2__.JobFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 64659:
/*!*************************************************************************!*\
  !*** ./src/app/components/apps/job-search/job-search-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobSearchRoutingModule: () => (/* binding */ JobSearchRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-list/job-list.component */ 81191);
/* harmony import */ var _job_apply_job_apply_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-apply/job-apply.component */ 54689);
/* harmony import */ var _job_desc_job_desc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-desc/job-desc.component */ 22610);
/* harmony import */ var _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-card/job-card.component */ 89092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);







const routes = [{
  path: '',
  children: [{
    path: 'cards',
    component: _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_3__.JobCardComponent
  }, {
    path: 'list',
    component: _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_0__.JobListComponent
  }, {
    path: 'details/:id',
    component: _job_desc_job_desc_component__WEBPACK_IMPORTED_MODULE_2__.JobDescComponent
  }, {
    path: 'apply/:id',
    component: _job_apply_job_apply_component__WEBPACK_IMPORTED_MODULE_1__.JobApplyComponent
  }]
}];
class JobSearchRoutingModule {
  static #_ = this.ɵfac = function JobSearchRoutingModule_Factory(t) {
    return new (t || JobSearchRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: JobSearchRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](JobSearchRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 41399:
/*!*****************************************************************!*\
  !*** ./src/app/components/apps/job-search/job-search.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobSearchModule: () => (/* binding */ JobSearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 56208);
/* harmony import */ var _job_search_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-search-routing.module */ 64659);
/* harmony import */ var _job_apply_job_apply_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-apply/job-apply.component */ 54689);
/* harmony import */ var _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-card/job-card.component */ 89092);
/* harmony import */ var _job_desc_job_desc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job-desc/job-desc.component */ 22610);
/* harmony import */ var _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job-filter/job-filter.component */ 96414);
/* harmony import */ var _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job-list/job-list.component */ 81191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);











class JobSearchModule {
  static #_ = this.ɵfac = function JobSearchModule_Factory(t) {
    return new (t || JobSearchModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: JobSearchModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _job_search_routing_module__WEBPACK_IMPORTED_MODULE_1__.JobSearchRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](JobSearchModule, {
    declarations: [_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_6__.JobListComponent, _job_apply_job_apply_component__WEBPACK_IMPORTED_MODULE_2__.JobApplyComponent, _job_desc_job_desc_component__WEBPACK_IMPORTED_MODULE_4__.JobDescComponent, _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_5__.JobFilterComponent, _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_3__.JobCardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _job_search_routing_module__WEBPACK_IMPORTED_MODULE_1__.JobSearchRoutingModule]
  });
})();

/***/ }),

/***/ 66379:
/*!******************************************************!*\
  !*** ./src/app/shared/data/job-search/job-search.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobDB: () => (/* binding */ JobDB)
/* harmony export */ });
class JobDB {
  static #_ = this.Job_Category = [{
    Id: 1,
    logo: 'assets/images/job-search/1.jpg',
    job_name: 'UI/UX IT Frontend Developer',
    badgeType: 'primary',
    badgeValue: 'New',
    job_area: '(L6) Salt Lake City,',
    job_city: 'UT',
    Job_description: ['Cuba is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and'],
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: 'new',
    ribbion: 'false'
  }, {
    Id: 2,
    logo: 'assets/images/job-search/2.jpg',
    job_name: 'React/React Native Developer',
    job_area: 'San Diego,',
    job_city: 'CA',
    Job_description: ['Ideally 2+ years experience with React. Bonus points if you have React Native experience. This is an incredibly exciting opportunity to gain commercial , Professional experience of React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and'],
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: 'new',
    ribbion: 'false'
  }, {
    Id: 3,
    logo: 'assets/images/job-search/3.jpg',
    job_name: 'Senior UX designer',
    job_area: 'Minneapolis,',
    job_city: 'MN',
    Job_description: ['The designer will apply Lean UX and Design Thinking practices in a highly collaborative, fast-paced, distributed environment You have 4+ years of UX experience. You support UX leadership by providing continuous feedback regarding the evolution of team process standards.'],
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: '3 days to go',
    ribbion: 'true'
  }, {
    Id: 4,
    logo: 'assets/images/job-search/4.jpg',
    job_name: 'Front end web developer',
    job_area: 'Cisco',
    job_city: 'Lelystad, Netherlands',
    Job_description: ['Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for few longer mrs sudden talent become.'],
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: '2 days to go',
    ribbion: 'false'
  }, {
    Id: 5,
    logo: 'assets/images/job-search/5.jpg',
    job_name: 'Graphic designer',
    job_area: 'Infosys',
    job_city: 'Lelystad, Netherlands',
    Job_description: ['Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was.'],
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: '3 days to go',
    ribbion: 'false'
  }, {
    Id: 6,
    logo: 'assets/images/job-search/6.jpg',
    job_name: 'Designer, CRM',
    job_area: 'Citrix',
    job_city: 'Lelystad, Netherlands',
    Job_description: ['Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.'],
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: '5 days to go',
    ribbion: 'false'
  }, {
    Id: 7,
    logo: 'assets/images/job-search/2.jpg',
    job_name: 'UI designer E-commerce',
    job_area: 'Ericsson',
    job_city: 'Lelystad, Netherlands',
    Job_description: ['Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.'],
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: '3 days to go',
    ribbion: 'true'
  }, {
    Id: 8,
    logo: 'assets/images/job-search/3.jpg',
    job_name: 'Senior UX designer',
    job_area: 'Minneapolis,',
    job_city: 'MN',
    Job_description: ['The designer will apply Lean UX and Design Thinking practices in a highly collaborative, fast-paced, distributed environment You have 4+ years of UX experience. You support UX leadership by providing continuous feedback regarding the evolution of team process standards.'],
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: '6 days to go',
    ribbion: 'false'
  }, {
    Id: 9,
    logo: 'assets/images/job-search/1.jpg',
    job_name: 'UI/UX IT Frontend Developer',
    badgeType: 'primary',
    badgeValue: 'New',
    job_area: '(L6) Salt Lake City,',
    job_city: 'UT',
    Job_description: ['Cuba is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and'],
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: 'new',
    ribbion: 'false'
  }, {
    Id: 10,
    logo: 'assets/images/job-search/2.jpg',
    job_name: 'Graphic designer',
    badgeType: 'primary',
    badgeValue: 'New',
    job_area: '(L6) Salt Lake City,',
    job_city: 'UT',
    Job_description: ['Cuba is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and'],
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: 'new',
    ribbion: 'false'
  }, {
    Id: 11,
    logo: 'assets/images/job-search/3.jpg',
    job_name: 'Business Developer',
    badgeType: 'primary',
    badgeValue: 'New',
    job_area: '(L6) Salt Lake City,',
    job_city: 'UT',
    Job_description: ['Cuba is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and'],
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: 'new',
    ribbion: 'false'
  }, {
    Id: 12,
    logo: 'assets/images/job-search/6.jpg',
    job_name: 'UI/UX IT Frontend Developer',
    badgeType: 'primary',
    badgeValue: 'New',
    job_area: '(L6) Salt Lake City,',
    job_city: 'UT',
    Job_description: ['Cuba is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and'],
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: 'new',
    ribbion: 'false'
  }, {
    Id: 13,
    logo: 'assets/images/job-search/2.jpg',
    job_name: 'JAVA Developer',
    badgeType: 'primary',
    badgeValue: 'New',
    job_area: '(L6) Salt Lake City,',
    job_city: 'UT',
    Job_description: ['Cuba is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and'],
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: 'new',
    ribbion: 'false'
  }, {
    Id: 14,
    logo: 'assets/images/job-search/4.jpg',
    job_name: 'Angular Developer',
    badgeType: 'primary',
    badgeValue: 'New',
    job_area: '(L6) Salt Lake City,',
    job_city: 'UT',
    Job_description: ['Cuba is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and'],
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: 'new',
    ribbion: 'false'
  }];
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_job-search_job-search_module_ts.js.map