"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_master_accounts_accounts_module_ts"],{

/***/ 84940:
/*!*************************************************************************!*\
  !*** ./src/app/components/master/accounts/account/account.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountComponent: () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);


class AccountComponent {
  static #_ = this.ɵfac = function AccountComponent_Factory(t) {
    return new (t || AccountComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AccountComponent,
    selectors: [["app-account"]],
    decls: 1,
    vars: 0,
    template: function AccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 66145:
/*!*************************************************************************!*\
  !*** ./src/app/components/master/accounts/account/add/add.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountAddComponent: () => (/* binding */ AccountAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _shared_components_basic_input_field_basic_input_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/basic-input-field/basic-input-field.component */ 63266);
/* harmony import */ var _shared_components_active_switch_active_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/active-switch/active-switch.component */ 39160);
/* harmony import */ var _shared_components_description_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/description/description.component */ 37784);
/* harmony import */ var _shared_components_number_input_field_number_input_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/number-input-field/number-input-field.component */ 56693);
/* harmony import */ var _shared_components_required_star_icon_required_star_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/required-star-icon/required-star-icon.component */ 61974);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);











function AccountAddComponent_small_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Account Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Account Group is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Mobile Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Phone Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " GST Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Pan Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Tax Zone is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Contact Person Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Contact Person Mobile is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Addresss Line 1 is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Addresss Line 2 is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Area is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " City is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " State is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Pincode is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AccountAddComponent_small_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Country is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class AccountAddComponent {
  constructor() {
    this.submitted = false;
    this.taxZone = [{
      name: 'MEPZ SEZ'
    }, {
      name: 'Cochin SEZ'
    }, {
      name: 'Noida SEZ'
    }, {
      name: 'Kandla SEZ'
    }, {
      name: 'Vishakhapatnam SEZ'
    }, {
      name: 'SEEPZ SEZ'
    }, {
      name: 'Falta SEZ'
    }];
    this.state = [{
      name: 'Rajasthan'
    }, {
      name: 'Gujrat'
    }, {
      name: 'Delhi'
    }, {
      name: 'Panjab'
    }, {
      name: 'Mumbai'
    }];
    this.area = [{
      name: 'Bali'
    }, {
      name: 'Desuri'
    }, {
      name: 'Jaitaran'
    }, {
      name: 'Marwar Junction'
    }, {
      name: 'Pali'
    }, {
      name: 'Rani'
    }, {
      name: 'Raipur'
    }, {
      name: 'Rohat'
    }, {
      name: 'Sojat'
    }, {
      name: 'Sumerpur'
    }];
    // , , , , , , , ,  and .
    this.city = [{
      name: 'Ajmer'
    }, {
      name: 'Ahemdabad'
    }, {
      name: 'Alwar'
    }, {
      name: 'Bharatpur'
    }, {
      name: 'Jaipur'
    }, {
      name: 'Jodhpur'
    }, {
      name: 'Pali'
    }, {
      name: 'Surat'
    }];
    this.country = [{
      name: 'India'
    }, {
      name: 'Australia'
    }, {
      name: 'Russia'
    }, {
      name: 'New Zealand'
    }, {
      name: 'England'
    }, {
      name: 'Sri Lanka'
    }];
    this.submitted = false;
    this.addAccountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      taxZone: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      area: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      city: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      state: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      country: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      basicInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
        accuntName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
        accountGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
        mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
        phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
        gstNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
        panNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
        description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
        contactPersonName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
        contactMobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
        address1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
        address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
        pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
        switch: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(true)
      })
    });
  }
  get a() {
    return this.addAccountForm.controls;
  }
  get f() {
    return this.addAccountForm.get('basicInfo')['controls'];
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.addAccountForm.value);
    if (this.addAccountForm.invalid) {
      return;
    }
  }
  static #_ = this.ɵfac = function AccountAddComponent_Factory(t) {
    return new (t || AccountAddComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AccountAddComponent,
    selectors: [["app-add"]],
    decls: 135,
    vars: 58,
    consts: [[3, "title"], [1, "buttons", "text-end"], ["form", "add-account", 1, "btn", "btn-success"], [1, "contianer-fluid"], ["id", "add-account", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body", "overflow-x-auto"], [1, "col-md-6"], [1, "form-group", "mb-3"], [1, "form-label"], ["formGroupName", "basicInfo", 3, "Placeholder", "formControlNameValue"], ["class", "text-danger", 4, "ngIf"], [1, "col-md-4"], ["formGroupName", "basicInfo", 3, "textType", "Placeholder", "formControlNameValue"], ["formGroupName", "basicInfo", 3, "maxLength", "minLength", "Placeholder", "formControlNameValue"], ["bindLabel", "name", "bindValue", "name", "placeholder", "Select Tax Zone", "formControlName", "taxZone", 1, "js-example-basic-single", 3, "items"], ["formGroupName", "basicInfo", 3, "formControlNameValue"], [1, "card-body"], ["bindLabel", "name", "bindValue", "name", "placeholder", "Select Area", "formControlName", "area", 1, "js-example-basic-single", 3, "items"], ["bindLabel", "name", "bindValue", "name", "placeholder", "Select City", "formControlName", "city", 1, "js-example-basic-single", 3, "items"], ["bindLabel", "name", "bindValue", "name", "placeholder", "Select State", "formControlName", "state", 1, "js-example-basic-single", 3, "items"], ["bindLabel", "name", "bindValue", "name", "placeholder", "Select Country", "formControlName", "country", 1, "js-example-basic-single", 3, "items"], [1, "col-12"], [1, "text-danger"]],
    template: function AccountAddComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-breadcrumb", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3)(5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AccountAddComponent_Template_form_ngSubmit_5_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 5)(11, "div", 9)(12, "div", 10)(13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Account Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "app-basic-input-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, AccountAddComponent_small_17_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 9)(19, "div", 10)(20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Account Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "app-basic-input-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, AccountAddComponent_small_24_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 14)(26, "div", 10)(27, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "app-basic-input-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, AccountAddComponent_small_30_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 14)(32, "div", 10)(33, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "app-number-input-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, AccountAddComponent_small_36_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 14)(38, "div", 10)(39, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "app-number-input-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, AccountAddComponent_small_42_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 14)(44, "div", 10)(45, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "GST Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "app-basic-input-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, AccountAddComponent_small_48_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 14)(50, "div", 10)(51, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Pan Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "app-basic-input-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, AccountAddComponent_small_54_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 14)(56, "div", 10)(57, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Tax Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "ng-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, AccountAddComponent_small_61_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 6)(63, "div", 10)(64, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "app-description", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, AccountAddComponent_small_67_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 7)(69, "div", 19)(70, "div", 5)(71, "div", 9)(72, "div", 10)(73, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "Contact Person Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](76, "app-basic-input-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, AccountAddComponent_small_77_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 9)(79, "div", 10)(80, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Contact Person Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](83, "app-number-input-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](84, AccountAddComponent_small_84_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 6)(86, "div", 10)(87, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, "Addresss Line 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](89, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](90, "app-basic-input-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](91, AccountAddComponent_small_91_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 6)(93, "div", 10)(94, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "Addresss Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](96, "app-basic-input-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](97, AccountAddComponent_small_97_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 9)(99, "div", 10)(100, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](102, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](103, "ng-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](104, AccountAddComponent_small_104_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "div", 9)(106, "div", 10)(107, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](109, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](110, "ng-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](111, AccountAddComponent_small_111_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "div", 14)(113, "div", 10)(114, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](116, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](117, "ng-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](118, AccountAddComponent_small_118_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "div", 14)(120, "div", 10)(121, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122, "Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](123, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](124, "app-basic-input-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](125, AccountAddComponent_small_125_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "div", 14)(127, "div", 10)(128, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](130, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](131, "ng-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](132, AccountAddComponent_small_132_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](134, "app-active-switch", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Add Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.addAccountForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("Placeholder", "Enter Account Name")("formControlNameValue", "accuntName");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.accuntName.errors == null ? null : ctx.f.accuntName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("Placeholder", "Enter Account Group")("formControlNameValue", "accountGroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.accountGroup.errors == null ? null : ctx.f.accountGroup.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("textType", "email")("Placeholder", "Enter Email")("formControlNameValue", "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.email.errors == null ? null : ctx.f.email.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxLength", 10)("minLength", 10)("Placeholder", "Enter Mobile Number")("formControlNameValue", "mobileNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.mobileNumber.errors == null ? null : ctx.f.mobileNumber.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxLength", 10)("minLength", 10)("Placeholder", "Enter Phone Number")("formControlNameValue", "phoneNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.phoneNumber.errors == null ? null : ctx.f.phoneNumber.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("Placeholder", "Enter GST Number")("formControlNameValue", "gstNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.gstNumber.errors == null ? null : ctx.f.gstNumber.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("Placeholder", "Enter Pan Number")("formControlNameValue", "panNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.panNumber.errors == null ? null : ctx.f.panNumber.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.taxZone);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.a.taxZone.errors == null ? null : ctx.a.taxZone.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlNameValue", "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.description.errors == null ? null : ctx.f.description.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("Placeholder", "Contact Person Name")("formControlNameValue", "contactPersonName");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.contactPersonName.errors == null ? null : ctx.f.contactPersonName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxLength", 10)("minLength", 10)("Placeholder", "Contact Person Mobile")("formControlNameValue", "contactMobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.contactMobile.errors == null ? null : ctx.f.contactMobile.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("Placeholder", "Addresss Line 1")("formControlNameValue", "address1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.address1.errors == null ? null : ctx.f.address1.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("Placeholder", "Addresss Line 2")("formControlNameValue", "address2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.address2.errors == null ? null : ctx.f.address2.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.area);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.a.area.errors == null ? null : ctx.a.area.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.a.city.errors == null ? null : ctx.a.city.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.a.state.errors == null ? null : ctx.a.state.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("Placeholder", "Enter Pincode")("formControlNameValue", "pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.pincode.errors == null ? null : ctx.f.pincode.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.a.country.errors == null ? null : ctx.a.country.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlNameValue", "switch");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _shared_components_basic_input_field_basic_input_field_component__WEBPACK_IMPORTED_MODULE_1__.BasicInputFieldComponent, _shared_components_active_switch_active_switch_component__WEBPACK_IMPORTED_MODULE_2__.ActiveSwitchComponent, _shared_components_description_description_component__WEBPACK_IMPORTED_MODULE_3__.DescriptionComponent, _shared_components_number_input_field_number_input_field_component__WEBPACK_IMPORTED_MODULE_4__.NumberInputFieldComponent, _shared_components_required_star_icon_required_star_icon_component__WEBPACK_IMPORTED_MODULE_5__.RequiredStarIconComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 84210:
/*!***************************************************************************!*\
  !*** ./src/app/components/master/accounts/account/list/list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountListComponent: () => (/* binding */ AccountListComponent)
/* harmony export */ });
/* harmony import */ var _shared_services_accounts_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/services/accounts/account.service */ 99034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 68588);







function AccountListComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 14)(8, "div", 15)(9, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 17)(11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td")(13, "div", 19)(14, "div", 20)(15, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](index_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.accountName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.accountGroup);
  }
}
class AccountListComponent {
  constructor(accountService) {
    this.accountService = accountService;
    this.tableList = [];
  }
  ngOnInit() {
    this.tableList = this.accountService.getAllAccounts();
  }
  static #_ = this.ɵfac = function AccountListComponent_Factory(t) {
    return new (t || AccountListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_accounts_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AccountListComponent,
    selectors: [["app-list"]],
    decls: 24,
    vars: 2,
    consts: [[3, "title"], [1, "buttons", "text-end"], ["routerLink", "add", 1, "btn", "btn-primary"], [1, "contianer-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body", "overflow-x-auto"], ["datatable", "", 1, "row-border", "hover", "mb-4"], ["width", "8%"], ["width", "10%"], ["width", "8%", 1, "text-center"], [4, "ngFor", "ngForOf"], [1, ""], [1, "align-middle"], [1, "media-body", "switch-sm", "d-flex", "align-items-center"], [1, "switch", "m-0"], ["type", "checkbox", "checked", ""], [1, "switch-state"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-evenly", "col-12"], ["routerLink", "edit"], [1, "icofont", "icofont-ui-edit"], ["routerLink", "view"], [1, "icofont", "icofont-eye"]],
    template: function AccountListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-breadcrumb", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Add Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "table", 8)(10, "thead")(11, "tr")(12, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Sr. No");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, AccountListComponent_tr_23_Template, 19, 3, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tableList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 60094:
/*!***********************************************************************!*\
  !*** ./src/app/components/master/accounts/accounts-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountsRoutingModule: () => (/* binding */ AccountsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warehouse/warehouse.component */ 42943);
/* harmony import */ var _warehouse_list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse/list/list.component */ 99304);
/* harmony import */ var _warehouse_add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warehouse/add/add.component */ 74831);
/* harmony import */ var _warehouse_edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warehouse/edit/edit.component */ 91095);
/* harmony import */ var _warehouse_view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warehouse/view/view.component */ 9449);
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/account.component */ 84940);
/* harmony import */ var _account_list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/list/list.component */ 84210);
/* harmony import */ var _account_add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account/add/add.component */ 66145);
/* harmony import */ var _engine_engine_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./engine/engine.component */ 91745);
/* harmony import */ var _engine_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./engine/list/list.component */ 6533);
/* harmony import */ var _engine_add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./engine/add/add.component */ 39481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);














const routes = [{
  path: "warehouse",
  component: _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_0__.WarehouseComponent,
  children: [{
    path: "",
    component: _warehouse_list_list_component__WEBPACK_IMPORTED_MODULE_1__.WarehouseListComponent
  }, {
    path: "add",
    component: _warehouse_add_add_component__WEBPACK_IMPORTED_MODULE_2__.WarehouseAddComponent
  }, {
    path: "edit",
    component: _warehouse_edit_edit_component__WEBPACK_IMPORTED_MODULE_3__.WarehouseEditComponent
  }, {
    path: "view",
    component: _warehouse_view_view_component__WEBPACK_IMPORTED_MODULE_4__.WarehouseViewComponent
  }]
}, {
  path: "account",
  component: _account_account_component__WEBPACK_IMPORTED_MODULE_5__.AccountComponent,
  children: [{
    path: "",
    component: _account_list_list_component__WEBPACK_IMPORTED_MODULE_6__.AccountListComponent
  }, {
    path: "add",
    component: _account_add_add_component__WEBPACK_IMPORTED_MODULE_7__.AccountAddComponent
  }]
}, {
  path: "engine",
  component: _engine_engine_component__WEBPACK_IMPORTED_MODULE_8__.EngineComponent,
  children: [{
    path: "",
    component: _engine_list_list_component__WEBPACK_IMPORTED_MODULE_9__.EngineListComponent
  }, {
    path: "add",
    component: _engine_add_add_component__WEBPACK_IMPORTED_MODULE_10__.EngineAddComponent
  }]
}];
class AccountsRoutingModule {
  static #_ = this.ɵfac = function AccountsRoutingModule_Factory(t) {
    return new (t || AccountsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: AccountsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AccountsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 17899:
/*!***************************************************************!*\
  !*** ./src/app/components/master/accounts/accounts.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountsModule: () => (/* binding */ AccountsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account/account.component */ 84940);
/* harmony import */ var _account_list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account/list/list.component */ 84210);
/* harmony import */ var _account_add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account/add/add.component */ 66145);
/* harmony import */ var _engine_add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/add/add.component */ 39481);
/* harmony import */ var _engine_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine/list/list.component */ 6533);
/* harmony import */ var _engine_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./engine/edit/edit.component */ 47929);
/* harmony import */ var _engine_view_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./engine/view/view.component */ 29033);
/* harmony import */ var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accounts-routing.module */ 60094);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/shared.module */ 56208);
/* harmony import */ var _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./warehouse/warehouse.component */ 42943);
/* harmony import */ var _warehouse_add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./warehouse/add/add.component */ 74831);
/* harmony import */ var _warehouse_list_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./warehouse/list/list.component */ 99304);
/* harmony import */ var _warehouse_edit_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./warehouse/edit/edit.component */ 91095);
/* harmony import */ var _warehouse_view_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./warehouse/view/view.component */ 9449);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-datatables */ 68588);
/* harmony import */ var _engine_engine_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./engine/engine.component */ 91745);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 61699);




















class AccountsModule {
  static #_ = this.ɵfac = function AccountsModule_Factory(t) {
    return new (t || AccountsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
    type: AccountsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _accounts_routing_module__WEBPACK_IMPORTED_MODULE_7__.AccountsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, angular_datatables__WEBPACK_IMPORTED_MODULE_14__.DataTablesModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AccountsModule, {
    declarations: [_account_account_component__WEBPACK_IMPORTED_MODULE_0__.AccountComponent, _account_list_list_component__WEBPACK_IMPORTED_MODULE_1__.AccountListComponent, _account_add_add_component__WEBPACK_IMPORTED_MODULE_2__.AccountAddComponent, _engine_engine_component__WEBPACK_IMPORTED_MODULE_15__.EngineComponent, _engine_add_add_component__WEBPACK_IMPORTED_MODULE_3__.EngineAddComponent, _engine_list_list_component__WEBPACK_IMPORTED_MODULE_4__.EngineListComponent, _engine_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__.EngineEditComponent, _engine_view_view_component__WEBPACK_IMPORTED_MODULE_6__.EngineViewComponent, _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_9__.WarehouseComponent, _warehouse_add_add_component__WEBPACK_IMPORTED_MODULE_10__.WarehouseAddComponent, _warehouse_list_list_component__WEBPACK_IMPORTED_MODULE_11__.WarehouseListComponent, _warehouse_edit_edit_component__WEBPACK_IMPORTED_MODULE_12__.WarehouseEditComponent, _warehouse_view_view_component__WEBPACK_IMPORTED_MODULE_13__.WarehouseViewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _accounts_routing_module__WEBPACK_IMPORTED_MODULE_7__.AccountsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, angular_datatables__WEBPACK_IMPORTED_MODULE_14__.DataTablesModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectModule]
  });
})();

/***/ }),

/***/ 39481:
/*!************************************************************************!*\
  !*** ./src/app/components/master/accounts/engine/add/add.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EngineAddComponent: () => (/* binding */ EngineAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _shared_components_basic_input_field_basic_input_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/basic-input-field/basic-input-field.component */ 63266);
/* harmony import */ var _shared_components_active_switch_active_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/active-switch/active-switch.component */ 39160);
/* harmony import */ var _shared_components_required_star_icon_required_star_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/required-star-icon/required-star-icon.component */ 61974);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);









function EngineAddComponent_small_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Chassis number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function EngineAddComponent_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Make is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function EngineAddComponent_small_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Model is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function EngineAddComponent_small_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Capacity is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class EngineAddComponent {
  constructor() {
    this.submitted = false;
    this.make = [{
      makeId: 1,
      makeName: "Honda",
      isActive: true
    }, {
      makeId: 2,
      makeName: "Hero",
      isActive: true
    }, {
      makeId: 3,
      makeName: "Mahindra",
      isActive: true
    }, {
      makeId: 4,
      makeName: "Ashok LeyLand",
      isActive: true
    }];
    this.months = [{
      monthNo: '01',
      monthName: 'Jan'
    }, {
      monthNo: '02',
      monthName: 'Feb'
    }, {
      monthNo: '03',
      monthName: 'Mar'
    }, {
      monthNo: '04',
      monthName: 'Apr'
    }, {
      monthNo: '05',
      monthName: 'May'
    }, {
      monthNo: '06',
      monthName: 'Jun'
    }, {
      monthNo: '07',
      monthName: 'Jul'
    }, {
      monthNo: '08',
      monthName: 'Aug'
    }, {
      monthNo: '09',
      monthName: 'Sep'
    }, {
      monthNo: '10',
      monthName: 'Oct'
    }, {
      monthNo: '11',
      monthName: 'Nov'
    }, {
      monthNo: '12',
      monthName: 'Dec'
    }];
    this.year = [{
      name: '2012'
    }, {
      name: '2013'
    }, {
      name: '2014'
    }, {
      name: '2015'
    }, {
      name: '2016'
    }, {
      name: '2017'
    }, {
      name: '2018'
    }, {
      name: '2019'
    }, {
      name: '2020'
    }, {
      name: '2021'
    }, {
      name: '2022'
    }, {
      name: '2023'
    }];
    this.tableList = [{
      id: 1,
      chassisNo: "5545215652",
      model: "HrR2345",
      capacity: "50KVA",
      make: "Hero",
      brand: "Hero",
      WareHouse: "Ahemdabad"
    }, {
      id: 2,
      chassisNo: "3422235235",
      model: "AsLyL29",
      capacity: "55KVA",
      make: "Ak",
      brand: "Ashok Leyland",
      WareHouse: "Rajasthan"
    }, {
      id: 3,
      chassisNo: "2341256344",
      model: "HOD282",
      capacity: "60KVA",
      make: "Honda",
      brand: "Honda",
      WareHouse: "Delhi"
    }, {
      id: 4,
      chassisNo: "6564534544",
      model: "MHNDR55",
      capacity: "65KVA",
      make: "Mahindra",
      brand: "Mahindra",
      WareHouse: "Hariyana"
    }];
    this.submitted = false;
    this.addEngine = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      make: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      modelNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      capacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      year: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
      month: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
      basicInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
        chassisNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
        switch: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(true)
      })
    });
  }
  get a() {
    return this.addEngine.controls;
  }
  get f() {
    return this.addEngine.get('basicInfo')['controls'];
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.addEngine.value);
    if (this.addEngine.invalid) {
      return;
    }
  }
  static #_ = this.ɵfac = function EngineAddComponent_Factory(t) {
    return new (t || EngineAddComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: EngineAddComponent,
    selectors: [["app-add"]],
    decls: 43,
    vars: 14,
    consts: [[3, "title"], [1, "buttons", "text-end"], ["form", "add-engine", 1, "btn", "btn-sm", "btn-success"], [1, "card"], [1, "card-body"], ["id", "add-engine", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-12", "col-md-6", "mb-3"], ["for", "engine-number", 1, "form-label"], ["formGroupName", "basicInfo", 3, "Placeholder", "formControlNameValue"], ["class", "text-danger", 4, "ngIf"], ["for", "make", 1, "form-label"], ["placeholder", "Select make name", "bindLabel", "makeName", "bindValue", "makeId", "formControlName", "make", 1, "js-example-basic-single", 3, "items"], ["for", "model-number", 1, "form-label"], ["bindLabel", "model", "bindValue", "model", "placeholder", "Select model name", "formControlName", "modelNumber", 1, "js-example-basic-single", 3, "items"], ["for", "brand", 1, "form-label"], ["bindLabel", "capacity", "bindValue", "capacity", "placeholder", "Select capacity name", "formControlName", "capacity", 1, "js-example-basic-single", 3, "items"], [1, "col-6", "col-md-3", "mb-3"], ["bindLabel", "name", "bindValue", "name", "placeholder", "Select year", "formControlName", "year", 1, "js-example-basic-single", 3, "items"], ["bindLabel", "monthName", "bindValue", "monthNo", "placeholder", "Select month", "formControlName", "month", 1, "js-example-basic-single", 3, "items"], [1, "col-12"], ["formGroupName", "basicInfo", 3, "formControlNameValue"], [1, "text-danger"]],
    template: function EngineAddComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-breadcrumb", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div")(7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function EngineAddComponent_Template_form_ngSubmit_7_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Chassis Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "app-basic-input-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, EngineAddComponent_small_14_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7)(16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Make");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, EngineAddComponent_small_20_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 7)(22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "ng-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, EngineAddComponent_small_26_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 7)(28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "ng-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, EngineAddComponent_small_32_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 17)(34, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Manufacturing Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "ng-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 17)(38, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Manufacturing Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "ng-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "app-active-switch", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Add Engine");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.addEngine);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Placeholder", "Enter chassis number")("formControlNameValue", "chassisNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.chassisNumber.errors == null ? null : ctx.f.chassisNumber.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.make);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.a.make.errors == null ? null : ctx.a.make.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.tableList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.a.modelNumber.errors == null ? null : ctx.a.modelNumber.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.tableList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.a.capacity.errors == null ? null : ctx.a.capacity.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.months);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlNameValue", "switch");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _shared_components_basic_input_field_basic_input_field_component__WEBPACK_IMPORTED_MODULE_1__.BasicInputFieldComponent, _shared_components_active_switch_active_switch_component__WEBPACK_IMPORTED_MODULE_2__.ActiveSwitchComponent, _shared_components_required_star_icon_required_star_icon_component__WEBPACK_IMPORTED_MODULE_3__.RequiredStarIconComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 47929:
/*!**************************************************************************!*\
  !*** ./src/app/components/master/accounts/engine/edit/edit.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EngineEditComponent: () => (/* binding */ EngineEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class EngineEditComponent {
  static #_ = this.ɵfac = function EngineEditComponent_Factory(t) {
    return new (t || EngineEditComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EngineEditComponent,
    selectors: [["app-edit"]],
    decls: 2,
    vars: 0,
    template: function EngineEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 91745:
/*!***********************************************************************!*\
  !*** ./src/app/components/master/accounts/engine/engine.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EngineComponent: () => (/* binding */ EngineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);


class EngineComponent {
  static #_ = this.ɵfac = function EngineComponent_Factory(t) {
    return new (t || EngineComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EngineComponent,
    selectors: [["app-engine"]],
    decls: 1,
    vars: 0,
    template: function EngineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6533:
/*!**************************************************************************!*\
  !*** ./src/app/components/master/accounts/engine/list/list.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EngineListComponent: () => (/* binding */ EngineListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ 68588);





const _c0 = function () {
  return ["/master/engine/edit"];
};
const _c1 = function () {
  return ["/master/engine/view"];
};
function EngineListComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 12)(12, "div", 13)(13, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 15)(15, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td")(17, "div", 17)(18, "div", 18)(19, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](index_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.chassisNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.make);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c1));
  }
}
class EngineListComponent {
  constructor() {
    this.tableList = [{
      id: 1,
      chassisNo: "5545215652",
      model: "HrR2345",
      capacity: "50KVA",
      make: "Hero",
      brand: "Hero",
      WareHouse: "Ahemdabad"
    }, {
      id: 2,
      chassisNo: "3422235235",
      model: "AsLyL29",
      capacity: "55KVA",
      make: "Ak",
      brand: "Ashok Leyland",
      WareHouse: "Rajasthan"
    }, {
      id: 3,
      chassisNo: "2341256344",
      model: "HOD282",
      capacity: "60KVA",
      make: "Honda",
      brand: "Honda",
      WareHouse: "Delhi"
    }, {
      id: 4,
      chassisNo: "6564534544",
      model: "MHNDR55",
      capacity: "65KVA",
      make: "Mahindra",
      brand: "Mahindra",
      WareHouse: "Hariyana"
    }];
  }
  static #_ = this.ɵfac = function EngineListComponent_Factory(t) {
    return new (t || EngineListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: EngineListComponent,
    selectors: [["app-list"]],
    decls: 27,
    vars: 2,
    consts: [[3, "title"], [1, "buttons", "text-end"], ["routerLink", "add"], [1, "btn", "btn-sm", "btn-primary"], [1, "card"], [1, "card-body", "overflow-x-auto"], ["datatable", "", 1, "row-border", "hover", "mb-4"], ["width", "8%"], ["width", "10%"], ["width", "8%", 1, "text-center"], [1, ""], [4, "ngFor", "ngForOf"], [1, "align-middle"], [1, "media-body", "switch-sm", "d-flex", "align-items-center"], [1, "switch", "m-0"], ["type", "checkbox", "checked", ""], [1, "switch-state"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-evenly", "col-12"], [3, "routerLink"], [1, "icofont", "icofont-ui-edit"], [1, "icofont", "icofont-eye"]],
    template: function EngineListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-breadcrumb", 0)(1, "div", 1)(2, "a", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Add Engine");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "div", 4)(7, "div", 5)(8, "table", 6)(9, "thead")(10, "tr")(11, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Sr. No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Chassis No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Make");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "tbody", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, EngineListComponent_tr_26_Template, 23, 9, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Engine");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tableList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 29033:
/*!**************************************************************************!*\
  !*** ./src/app/components/master/accounts/engine/view/view.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EngineViewComponent: () => (/* binding */ EngineViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class EngineViewComponent {
  static #_ = this.ɵfac = function EngineViewComponent_Factory(t) {
    return new (t || EngineViewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EngineViewComponent,
    selectors: [["app-view"]],
    decls: 2,
    vars: 0,
    template: function EngineViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 74831:
/*!***************************************************************************!*\
  !*** ./src/app/components/master/accounts/warehouse/add/add.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarehouseAddComponent: () => (/* binding */ WarehouseAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _shared_components_basic_input_field_basic_input_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/basic-input-field/basic-input-field.component */ 63266);
/* harmony import */ var _shared_components_active_switch_active_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/active-switch/active-switch.component */ 39160);
/* harmony import */ var _shared_components_description_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/description/description.component */ 37784);
/* harmony import */ var _shared_components_required_star_icon_required_star_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/required-star-icon/required-star-icon.component */ 61974);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);










function WarehouseAddComponent_small_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Warehouse name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function WarehouseAddComponent_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function WarehouseAddComponent_small_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Area is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function WarehouseAddComponent_small_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " City is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function WarehouseAddComponent_small_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " State is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class WarehouseAddComponent {
  constructor() {
    this.state = [{
      name: 'Rajasthan'
    }, {
      name: 'Gujrat'
    }, {
      name: 'Delhi'
    }, {
      name: 'Panjab'
    }, {
      name: 'Mumbai'
    }];
    this.area = [{
      name: 'Bali'
    }, {
      name: 'Desuri'
    }, {
      name: 'Jaitaran'
    }, {
      name: 'Marwar Junction'
    }, {
      name: 'Pali'
    }, {
      name: 'Rani'
    }, {
      name: 'Raipur'
    }, {
      name: 'Rohat'
    }, {
      name: 'Sojat'
    }, {
      name: 'Sumerpur'
    }];
    // , , , , , , , ,  and .
    this.city = [{
      name: 'Ajmer'
    }, {
      name: 'Ahemdabad'
    }, {
      name: 'Alwar'
    }, {
      name: 'Bharatpur'
    }, {
      name: 'Jaipur'
    }, {
      name: 'Jodhpur'
    }, {
      name: 'Pali'
    }, {
      name: 'Surat'
    }];
    this.submitted = false;
    this.addWarehouse = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      area: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      city: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      state: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      basicInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
        address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
        description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
        switch: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(true)
      })
    });
  }
  get a() {
    return this.addWarehouse.controls;
  }
  get f() {
    return this.addWarehouse.get('basicInfo')['controls'];
  }
  onSubmit() {
    this.submitted = true;
    console.warn(this.addWarehouse.value);
    if (this.addWarehouse.invalid) {
      return;
    }
  }
  static #_ = this.ɵfac = function WarehouseAddComponent_Factory(t) {
    return new (t || WarehouseAddComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: WarehouseAddComponent,
    selectors: [["app-add"]],
    decls: 45,
    vars: 16,
    consts: [[3, "title"], [1, "buttons", "text-end"], ["form", "add-warehouse", 1, "btn", "btn-sm", "btn-success"], [1, "card"], [1, "card-body"], ["id", "add-warehouse", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-12", "mb-3"], ["for", "firm-name", 1, "form-label"], ["formGroupName", "basicInfo", 3, "Placeholder", "formControlNameValue"], ["class", "text-danger", 4, "ngIf"], [1, "col-12", "col-md-6", "mb-3"], ["for", "address", 1, "form-label"], ["for", "city", 1, "form-label"], ["bindLabel", "name", "bindValue", "name", "placeholder", "Select Area name", "formControlName", "area", 1, "js-example-basic-single", 3, "items"], ["bindLabel", "name", "bindValue", "name", "placeholder", "Select City name", "formControlName", "city", 1, "js-example-basic-single", 3, "items"], ["for", "state", 1, "form-label"], ["bindLabel", "name", "bindValue", "name", "placeholder", "Select State name", "formControlName", "state", 1, "js-example-basic-single", 3, "items"], ["for", "description", 1, "form-label"], ["formGroupName", "basicInfo", 3, "formControlNameValue"], [1, "col-12"], [1, "text-danger"]],
    template: function WarehouseAddComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-breadcrumb", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div")(7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function WarehouseAddComponent_Template_form_ngSubmit_7_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Warehouse Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-basic-input-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, WarehouseAddComponent_small_14_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 11)(16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "app-basic-input-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, WarehouseAddComponent_small_20_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 11)(22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "ng-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, WarehouseAddComponent_small_26_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 11)(28, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "ng-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, WarehouseAddComponent_small_32_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 11)(34, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "app-required-star-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "ng-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, WarehouseAddComponent_small_38_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 7)(40, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "app-description", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "app-active-switch", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Add Warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.addWarehouse);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("Placeholder", "Enter warehouse name")("formControlNameValue", "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.title.errors == null ? null : ctx.f.title.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("Placeholder", "Enter address")("formControlNameValue", "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.f.address.errors == null ? null : ctx.f.address.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.area);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.a.area.errors == null ? null : ctx.a.area.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.a.city.errors == null ? null : ctx.a.city.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.a.state.errors == null ? null : ctx.a.state.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlNameValue", "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlNameValue", "switch");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _shared_components_basic_input_field_basic_input_field_component__WEBPACK_IMPORTED_MODULE_1__.BasicInputFieldComponent, _shared_components_active_switch_active_switch_component__WEBPACK_IMPORTED_MODULE_2__.ActiveSwitchComponent, _shared_components_description_description_component__WEBPACK_IMPORTED_MODULE_3__.DescriptionComponent, _shared_components_required_star_icon_required_star_icon_component__WEBPACK_IMPORTED_MODULE_4__.RequiredStarIconComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 91095:
/*!*****************************************************************************!*\
  !*** ./src/app/components/master/accounts/warehouse/edit/edit.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarehouseEditComponent: () => (/* binding */ WarehouseEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class WarehouseEditComponent {
  static #_ = this.ɵfac = function WarehouseEditComponent_Factory(t) {
    return new (t || WarehouseEditComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WarehouseEditComponent,
    selectors: [["app-edit"]],
    decls: 2,
    vars: 0,
    template: function WarehouseEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 99304:
/*!*****************************************************************************!*\
  !*** ./src/app/components/master/accounts/warehouse/list/list.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarehouseListComponent: () => (/* binding */ WarehouseListComponent)
/* harmony export */ });
/* harmony import */ var _shared_services_accounts_warehouse_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/services/accounts/warehouse.service */ 95579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 68588);







function WarehouseListComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 11)(10, "div", 12)(11, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 14)(13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td")(15, "div", 16)(16, "div", 17)(17, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.warehouseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.city.cityName + " - " + item_r1.state.stateName);
  }
}
class WarehouseListComponent {
  constructor(warehouseService) {
    this.warehouseService = warehouseService;
    this.tableList = [];
  }
  ngOnInit() {
    this.tableList = this.warehouseService.getAllWarehouse();
  }
  static #_ = this.ɵfac = function WarehouseListComponent_Factory(t) {
    return new (t || WarehouseListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_accounts_warehouse_service__WEBPACK_IMPORTED_MODULE_0__.WarehouseService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: WarehouseListComponent,
    selectors: [["app-list"]],
    decls: 25,
    vars: 2,
    consts: [[3, "title"], [1, "buttons", "text-end"], ["routerLink", "add"], [1, "btn", "btn-sm", "btn-primary"], [1, "card"], [1, "card-body", "overflow-x-auto"], ["datatable", "", 1, "row-border", "hover", "mb-4"], ["width", "6%"], ["width", "6%", 1, "text-center"], [1, ""], [4, "ngFor", "ngForOf"], [1, "align-middle"], [1, "media-body", "switch-sm", "d-flex", "align-items-center"], [1, "switch", "m-0"], ["type", "checkbox", "checked", ""], [1, "switch-state"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-evenly", "col-12"], ["routerLink", "edit"], [1, "icofont", "icofont-ui-edit"], ["routerLink", "view"], [1, "icofont", "icofont-eye"]],
    template: function WarehouseListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-breadcrumb", 0)(1, "div", 1)(2, "a", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Add Warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "div", 4)(7, "div", 5)(8, "table", 6)(9, "thead")(10, "tr")(11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Sr. No");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "City - State");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, WarehouseListComponent_tr_24_Template, 21, 4, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tableList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9449:
/*!*****************************************************************************!*\
  !*** ./src/app/components/master/accounts/warehouse/view/view.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarehouseViewComponent: () => (/* binding */ WarehouseViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class WarehouseViewComponent {
  static #_ = this.ɵfac = function WarehouseViewComponent_Factory(t) {
    return new (t || WarehouseViewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WarehouseViewComponent,
    selectors: [["app-view"]],
    decls: 2,
    vars: 0,
    template: function WarehouseViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 42943:
/*!*****************************************************************************!*\
  !*** ./src/app/components/master/accounts/warehouse/warehouse.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarehouseComponent: () => (/* binding */ WarehouseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);


class WarehouseComponent {
  static #_ = this.ɵfac = function WarehouseComponent_Factory(t) {
    return new (t || WarehouseComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WarehouseComponent,
    selectors: [["app-warehouse-master"]],
    decls: 1,
    vars: 0,
    template: function WarehouseComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_master_accounts_accounts_module_ts.js.map