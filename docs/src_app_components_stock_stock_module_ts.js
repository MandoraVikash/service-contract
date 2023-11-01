"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_stock_stock_module_ts"],{

/***/ 70448:
/*!*****************************************************************!*\
  !*** ./src/app/components/stock/mrn-entry/add/add.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MrnEntryAddComponent: () => (/* binding */ MrnEntryAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var src_app_shared_services_accounts_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/accounts/account.service */ 99034);
/* harmony import */ var src_app_shared_services_accounts_warehouse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/accounts/warehouse.service */ 95579);
/* harmony import */ var src_app_shared_services_product_services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/product-services/item.service */ 67931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);












function MrnEntryAddComponent_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 27)(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ng-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "453");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td")(6, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MrnEntryAddComponent_tr_81_Template_input_input_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.calculateAmount(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MrnEntryAddComponent_tr_81_Template_input_input_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.calculateAmount(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r0.items);
  }
}
class MrnEntryAddComponent {
  constructor(accountService, warehouseService, itemSerivce) {
    this.accountService = accountService;
    this.warehouseService = warehouseService;
    this.itemSerivce = itemSerivce;
    this.items = [{
      name: 'Item A'
    }, {
      name: 'Item B'
    }, {
      name: 'Item C'
    }, {
      name: 'Item D'
    }, {
      name: 'Item E'
    }, {
      name: 'Item F'
    }, {
      name: 'Item G'
    }];
    this.warehouse = [];
    this.account = [];
    this.item = [];
    this.mrnEntry = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      itemsForm: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArray([this.createItem()])
    });
    console.log(this.controls);
  }
  createItem() {
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      'rate': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
      'quantity': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
      'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('')
    });
  }
  ngOnInit() {
    this.account = this.accountService.getAllAccounts();
    this.warehouse = this.warehouseService.getAllWarehouse();
    this.item = this.itemSerivce.getAllItems();
  }
  get controls() {
    return this.mrnEntry.get('itemsForm').controls;
  }
  addItem() {
    this.mrnEntry.get('itemsForm').push(this.createItem());
  }
  calculateAmount(index) {
    const item = this.mrnEntry.get('itemsForm').at(index);
    const rate = item.get('rate').value;
    const quantity = item.get('quantity').value;
    if (rate && quantity) {
      item.get('amount').setValue(rate * quantity);
    }
  }
  static #_ = this.ɵfac = function MrnEntryAddComponent_Factory(t) {
    return new (t || MrnEntryAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_accounts_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_accounts_warehouse_service__WEBPACK_IMPORTED_MODULE_1__.WarehouseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_product_services_item_service__WEBPACK_IMPORTED_MODULE_2__.ItemService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MrnEntryAddComponent,
    selectors: [["app-add"]],
    decls: 82,
    vars: 6,
    consts: [[3, "title", "active_item"], [1, "btn", "btn-success", "btn-sm", "buttons"], [1, "conatiner-fluid"], [1, "row"], [3, "formGroup"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "col-md-6"], [1, "form-group", "mb-3"], ["for", "role_name", 1, "form-label"], [1, "text-danger"], ["bindLabel", "warehouseName", "placeholder", "Select Warehouse", 1, "js-example-basic-single", 3, "items"], ["placeholder", "Select Account", "bindLabel", "accountName", "bindValue", "accountId", 1, "js-example-basic-single", 3, "items"], ["type", "text", "name", "", "id", "", "placeholder", "Challan No", 1, "form-control", "form-control-sm"], ["type", "date", "name", "", "id", "", "placeholder", "Challan Date", 1, "form-control", "form-control-sm"], ["name", "", "id", "", "rows", "5", 1, "form-control"], [1, "card-header"], [1, "col-md-11"], [1, "col-md-1"], [1, "btn", "btn-dark", 3, "click"], [1, "table"], [1, "text-center"], ["width", "10%"], ["width", "5%"], ["formArrayName", "itemsForm"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "formGroupName"], [1, "text-start"], ["bindLabel", "name", "bindValue", "name", "placeholder", "Select Item", 1, "js-example-basic-single", 3, "items"], ["type", "number", "formControlName", "rate", "name", "", "id", "", "placeholder", "Rate", 1, "form-control", "form-control-sm", 3, "input"], ["type", "number", "formControlName", "quantity", "name", "", "id", "", "placeholder", "Quantity", 1, "form-control", "form-control-sm", 3, "input"], ["type", "text", "formControlName", "amount", "name", "", "id", "", "placeholder", "Amount", "readonly", "", 1, "form-control", "form-control-sm"]],
    template: function MrnEntryAddComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-breadcrumb", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 3)(10, "div", 8)(11, "div", 9)(12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 8)(18, "div", 9)(19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 8)(25, "div", 9)(26, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Challan No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 8)(32, "div", 9)(33, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Challan Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 5)(39, "div", 9)(40, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Remark");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 5)(44, "div", 6)(45, "div", 17)(46, "div", 3)(47, "div", 18)(48, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "MRN Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 19)(51, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MrnEntryAddComponent_Template_button_click_51_listener() {
          return ctx.addItem();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 7)(54, "table", 21)(55, "thead", 22)(56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "HSN");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "tbody", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](81, MrnEntryAddComponent_tr_81_Template, 13, 2, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Add MRN Entry")("active_item", "Add  MRN Entry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.mrnEntry);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.warehouse);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.account);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.controls);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectComponent],
    styles: ["tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdG9jay9tcm4tZW50cnkvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFBUiIsInNvdXJjZXNDb250ZW50IjpbInRye1xuICAgIHRke1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 81159:
/*!*******************************************************************!*\
  !*** ./src/app/components/stock/mrn-entry/list/list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MrnEntryListComponent: () => (/* binding */ MrnEntryListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ 68588);





function MrnEntryListComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 11)(12, "div", 12)(13, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 14)(15, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td")(17, "div", 16)(18, "div", 17)(19, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.challan_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.challan_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.warehouse);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.account);
  }
}
const _c0 = function () {
  return ["Stock"];
};
class MrnEntryListComponent {
  constructor() {
    this.tableList = [{
      challan_no: '3453',
      challan_date: '12-04-2023',
      warehouse: 'Sumerpur',
      account: 'Shree Ji Automobile'
    }, {
      challan_no: '3433',
      challan_date: '22-05-2023',
      warehouse: 'Pali',
      account: 'Suraj Automobile'
    }, {
      challan_no: '3753',
      challan_date: '21-06-2023',
      warehouse: 'Jodhpur',
      account: 'Krishan Pvt ltd'
    }, {
      challan_no: '3973',
      challan_date: '14-08-2023',
      warehouse: 'Thane',
      account: 'Om Automobile'
    }, {
      challan_no: '4563',
      challan_date: '13-09-2023',
      warehouse: 'Delhi',
      account: 'Jigsaw Automobile'
    }];
  }
  static #_ = this.ɵfac = function MrnEntryListComponent_Factory(t) {
    return new (t || MrnEntryListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MrnEntryListComponent,
    selectors: [["app-list"]],
    decls: 27,
    vars: 5,
    consts: [[3, "title", "items", "active_item"], [1, "buttons", "text-end"], ["routerLink", "add"], [1, "btn", "btn-sm", "btn-primary"], [1, "card"], [1, "card-body"], ["datatable", "", 1, "row-border", "hover", "mb-4"], ["width", "8%"], ["width", "12%", 1, "text-center"], [1, ""], [4, "ngFor", "ngForOf"], [1, "align-middle"], [1, "media-body", "switch-sm", "d-flex", "align-items-center"], [1, "switch", "m-0"], ["type", "checkbox", "checked", ""], [1, "switch-state"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-evenly", "col-12", "col-xl-7"], ["href", "#"], [1, "icofont", "icofont-ui-edit"], [1, "icofont", "icofont-eye"], [1, "icofont", "icofont-ui-lock"]],
    template: function MrnEntryListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-breadcrumb", 0)(1, "div", 1)(2, "a", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Add MRN Entry");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "div", 4)(7, "div", 5)(8, "table", 6)(9, "thead")(10, "tr")(11, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Sr. No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Challan No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Challan Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, MrnEntryListComponent_tr_26_Template, 25, 5, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "MRN Entry")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("active_item", "MRN Entry");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tableList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 39821:
/*!*******************************************************************!*\
  !*** ./src/app/components/stock/mrn-entry/mrn-entry.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MrnEntryComponent: () => (/* binding */ MrnEntryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);


class MrnEntryComponent {
  static #_ = this.ɵfac = function MrnEntryComponent_Factory(t) {
    return new (t || MrnEntryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MrnEntryComponent,
    selectors: [["app-mrn-entry"]],
    decls: 1,
    vars: 0,
    template: function MrnEntryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 46693:
/*!******************************************************************!*\
  !*** ./src/app/components/stock/mrn-return/add/add.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MrnReturnAddComponent: () => (/* binding */ MrnReturnAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var src_app_shared_services_accounts_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/accounts/account.service */ 99034);
/* harmony import */ var src_app_shared_services_accounts_warehouse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/accounts/warehouse.service */ 95579);
/* harmony import */ var src_app_shared_services_product_services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/product-services/item.service */ 67931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);












function MrnReturnAddComponent_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 27)(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ng-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "453");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td")(6, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MrnReturnAddComponent_tr_81_Template_input_input_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.calculateAmount(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MrnReturnAddComponent_tr_81_Template_input_input_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.calculateAmount(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r0.items);
  }
}
class MrnReturnAddComponent {
  constructor(accountService, warehouseService, itemSerivce) {
    this.accountService = accountService;
    this.warehouseService = warehouseService;
    this.itemSerivce = itemSerivce;
    this.items = [{
      name: 'Item A'
    }, {
      name: 'Item B'
    }, {
      name: 'Item C'
    }, {
      name: 'Item D'
    }, {
      name: 'Item E'
    }, {
      name: 'Item F'
    }, {
      name: 'Item G'
    }];
    this.warehouse = [];
    this.account = [];
    this.item = [];
    this.mrnReturn = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      itemsForm: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArray([this.createItem()])
    });
    console.log(this.controls);
  }
  createItem() {
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      'rate': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
      'quantity': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
      'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('')
    });
  }
  ngOnInit() {
    this.account = this.accountService.getAllAccounts();
    this.warehouse = this.warehouseService.getAllWarehouse();
    this.item = this.itemSerivce.getAllItems();
  }
  get controls() {
    return this.mrnReturn.get('itemsForm').controls;
  }
  addItem() {
    this.mrnReturn.get('itemsForm').push(this.createItem());
  }
  calculateAmount(index) {
    const item = this.mrnReturn.get('itemsForm').at(index);
    const rate = item.get('rate').value;
    const quantity = item.get('quantity').value;
    if (rate && quantity) {
      item.get('amount').setValue(rate * quantity);
    }
  }
  static #_ = this.ɵfac = function MrnReturnAddComponent_Factory(t) {
    return new (t || MrnReturnAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_accounts_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_accounts_warehouse_service__WEBPACK_IMPORTED_MODULE_1__.WarehouseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_product_services_item_service__WEBPACK_IMPORTED_MODULE_2__.ItemService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MrnReturnAddComponent,
    selectors: [["app-add"]],
    decls: 82,
    vars: 6,
    consts: [[3, "title", "active_item"], [1, "btn", "btn-success", "btn-sm", "buttons"], [1, "conatiner-fluid"], [1, "row"], [3, "formGroup"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "col-md-6"], [1, "form-group", "mb-3"], ["for", "role_name", 1, "form-label"], [1, "text-danger"], ["bindLabel", "warehouseName", "placeholder", "Select Warehouse", 1, "js-example-basic-single", 3, "items"], ["placeholder", "Select Account", "bindLabel", "accountName", "bindValue", "accountId", 1, "js-example-basic-single", 3, "items"], ["type", "text", "name", "", "id", "", "placeholder", "Challan No", 1, "form-control", "form-control-sm"], ["type", "date", "name", "", "id", "", "placeholder", "Challan Date", 1, "form-control", "form-control-sm"], ["name", "", "id", "", "rows", "5", 1, "form-control"], [1, "card-header"], [1, "col-md-11"], [1, "col-md-1"], [1, "btn", "btn-dark", 3, "click"], [1, "table"], [1, "text-center"], ["width", "10%"], ["width", "5%"], ["formArrayName", "itemsForm"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "formGroupName"], [1, "text-start"], ["bindLabel", "name", "placeholder", "Select Item", 1, "js-example-basic-single", 3, "items"], ["type", "number", "formControlName", "rate", "name", "", "id", "", "placeholder", "Rate", 1, "form-control", "form-control-sm", 3, "input"], ["type", "number", "formControlName", "quantity", "name", "", "id", "", "placeholder", "Quantity", 1, "form-control", "form-control-sm", 3, "input"], ["type", "text", "formControlName", "amount", "name", "", "id", "", "placeholder", "Amount", "readonly", "", 1, "form-control", "form-control-sm"]],
    template: function MrnReturnAddComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-breadcrumb", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 3)(10, "div", 8)(11, "div", 9)(12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 8)(18, "div", 9)(19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 8)(25, "div", 9)(26, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Challan No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 8)(32, "div", 9)(33, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Challan Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 5)(39, "div", 9)(40, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Remark");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 5)(44, "div", 6)(45, "div", 17)(46, "div", 3)(47, "div", 18)(48, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "MRN Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 19)(51, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MrnReturnAddComponent_Template_button_click_51_listener() {
          return ctx.addItem();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 7)(54, "table", 21)(55, "thead", 22)(56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "HSN");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "tbody", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](81, MrnReturnAddComponent_tr_81_Template, 13, 2, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Add MRN Return")("active_item", "Add  MRN Return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.mrnReturn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.warehouse);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.account);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.controls);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 35846:
/*!********************************************************************!*\
  !*** ./src/app/components/stock/mrn-return/list/list.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MrnReturnListComponent: () => (/* binding */ MrnReturnListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ 68588);





function MrnReturnListComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 11)(12, "div", 12)(13, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 14)(15, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td")(17, "div", 16)(18, "div", 17)(19, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.challan_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.challan_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.warehouse);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.account);
  }
}
const _c0 = function () {
  return ["Stock"];
};
class MrnReturnListComponent {
  constructor() {
    this.tableList = [{
      challan_no: '3453',
      challan_date: '12-04-2023',
      warehouse: 'Sumerpur',
      account: 'Shree Ji Automobile'
    }, {
      challan_no: '3433',
      challan_date: '22-05-2023',
      warehouse: 'Pali',
      account: 'Suraj Automobile'
    }, {
      challan_no: '3753',
      challan_date: '21-06-2023',
      warehouse: 'Jodhpur',
      account: 'Krishan Pvt ltd'
    }, {
      challan_no: '3973',
      challan_date: '14-08-2023',
      warehouse: 'Thane',
      account: 'Om Automobile'
    }, {
      challan_no: '4563',
      challan_date: '13-09-2023',
      warehouse: 'Delhi',
      account: 'Jigsaw Automobile'
    }];
  }
  static #_ = this.ɵfac = function MrnReturnListComponent_Factory(t) {
    return new (t || MrnReturnListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MrnReturnListComponent,
    selectors: [["app-list"]],
    decls: 27,
    vars: 5,
    consts: [[3, "title", "items", "active_item"], [1, "buttons", "text-end"], ["routerLink", "add"], [1, "btn", "btn-sm", "btn-primary"], [1, "card"], [1, "card-body"], ["datatable", "", 1, "row-border", "hover", "mb-4"], ["width", "8%"], ["width", "12%", 1, "text-center"], [1, ""], [4, "ngFor", "ngForOf"], [1, "align-middle"], [1, "media-body", "switch-sm", "d-flex", "align-items-center"], [1, "switch", "m-0"], ["type", "checkbox", "checked", ""], [1, "switch-state"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-evenly", "col-12", "col-xl-7"], ["href", "#"], [1, "icofont", "icofont-ui-edit"], [1, "icofont", "icofont-eye"], [1, "icofont", "icofont-ui-lock"]],
    template: function MrnReturnListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-breadcrumb", 0)(1, "div", 1)(2, "a", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Add MRN Return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "div", 4)(7, "div", 5)(8, "table", 6)(9, "thead")(10, "tr")(11, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Sr. No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Challan No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Challan Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, MrnReturnListComponent_tr_26_Template, 25, 5, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "MRN Return ")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("active_item", "MRN Return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tableList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 84310:
/*!*********************************************************************!*\
  !*** ./src/app/components/stock/mrn-return/mrn-return.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MrnReturnComponent: () => (/* binding */ MrnReturnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);


class MrnReturnComponent {
  static #_ = this.ɵfac = function MrnReturnComponent_Factory(t) {
    return new (t || MrnReturnComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MrnReturnComponent,
    selectors: [["app-mrn-return"]],
    decls: 1,
    vars: 0,
    template: function MrnReturnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 32887:
/*!**********************************************************!*\
  !*** ./src/app/components/stock/stock-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockRoutingModule: () => (/* binding */ StockRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _mrn_entry_mrn_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mrn-entry/mrn-entry.component */ 39821);
/* harmony import */ var _mrn_entry_list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mrn-entry/list/list.component */ 81159);
/* harmony import */ var _mrn_entry_add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrn-entry/add/add.component */ 70448);
/* harmony import */ var _mrn_return_mrn_return_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mrn-return/mrn-return.component */ 84310);
/* harmony import */ var _mrn_return_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mrn-return/list/list.component */ 35846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);








const routes = [{
  path: "mrn-entry",
  component: _mrn_entry_mrn_entry_component__WEBPACK_IMPORTED_MODULE_0__.MrnEntryComponent,
  children: [{
    path: "",
    component: _mrn_entry_list_list_component__WEBPACK_IMPORTED_MODULE_1__.MrnEntryListComponent
  }, {
    path: "add",
    component: _mrn_entry_add_add_component__WEBPACK_IMPORTED_MODULE_2__.MrnEntryAddComponent
  }]
}, {
  path: "mrn-return",
  component: _mrn_return_mrn_return_component__WEBPACK_IMPORTED_MODULE_3__.MrnReturnComponent,
  children: [{
    path: "",
    component: _mrn_return_list_list_component__WEBPACK_IMPORTED_MODULE_4__.MrnReturnListComponent
  }, {
    path: "add",
    component: _mrn_entry_add_add_component__WEBPACK_IMPORTED_MODULE_2__.MrnEntryAddComponent
  }]
}];
class StockRoutingModule {
  static #_ = this.ɵfac = function StockRoutingModule_Factory(t) {
    return new (t || StockRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: StockRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](StockRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 99963:
/*!**************************************************!*\
  !*** ./src/app/components/stock/stock.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockModule: () => (/* binding */ StockModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _mrn_entry_mrn_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mrn-entry/mrn-entry.component */ 39821);
/* harmony import */ var _mrn_entry_list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mrn-entry/list/list.component */ 81159);
/* harmony import */ var _mrn_entry_add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mrn-entry/add/add.component */ 70448);
/* harmony import */ var _mrn_return_mrn_return_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mrn-return/mrn-return.component */ 84310);
/* harmony import */ var _mrn_return_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mrn-return/list/list.component */ 35846);
/* harmony import */ var _mrn_return_add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mrn-return/add/add.component */ 46693);
/* harmony import */ var _stock_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-routing.module */ 32887);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ 56208);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ 68588);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);













class StockModule {
  static #_ = this.ɵfac = function StockModule_Factory(t) {
    return new (t || StockModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: StockModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _stock_routing_module__WEBPACK_IMPORTED_MODULE_6__.StockRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, angular_datatables__WEBPACK_IMPORTED_MODULE_8__.DataTablesModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](StockModule, {
    declarations: [_mrn_entry_mrn_entry_component__WEBPACK_IMPORTED_MODULE_0__.MrnEntryComponent, _mrn_entry_list_list_component__WEBPACK_IMPORTED_MODULE_1__.MrnEntryListComponent, _mrn_entry_add_add_component__WEBPACK_IMPORTED_MODULE_2__.MrnEntryAddComponent, _mrn_return_mrn_return_component__WEBPACK_IMPORTED_MODULE_3__.MrnReturnComponent, _mrn_return_list_list_component__WEBPACK_IMPORTED_MODULE_4__.MrnReturnListComponent, _mrn_return_add_add_component__WEBPACK_IMPORTED_MODULE_5__.MrnReturnAddComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _stock_routing_module__WEBPACK_IMPORTED_MODULE_6__.StockRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, angular_datatables__WEBPACK_IMPORTED_MODULE_8__.DataTablesModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_stock_stock_module_ts.js.map