"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_master_master_module_ts"],{

/***/ 33807:
/*!************************************************************!*\
  !*** ./src/app/components/master/master-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MasterRoutingModule: () => (/* binding */ MasterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.component */ 67290);
/* harmony import */ var _user_list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/list/list.component */ 29823);
/* harmony import */ var _user_add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/add/add.component */ 58369);
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles/roles.component */ 19326);
/* harmony import */ var _roles_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roles/list/list.component */ 1187);
/* harmony import */ var _roles_add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roles/add/add.component */ 89489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);









const routes = [{
  path: "user",
  component: _user_user_component__WEBPACK_IMPORTED_MODULE_0__.UserComponent,
  children: [{
    path: "",
    component: _user_list_list_component__WEBPACK_IMPORTED_MODULE_1__.UserListComponent
  }, {
    path: "add",
    component: _user_add_add_component__WEBPACK_IMPORTED_MODULE_2__.UserAddComponent
  }]
}, {
  path: "roles",
  component: _roles_roles_component__WEBPACK_IMPORTED_MODULE_3__.RolesComponent,
  children: [{
    path: "",
    component: _roles_list_list_component__WEBPACK_IMPORTED_MODULE_4__.RolesListComponent
  }, {
    path: "add",
    component: _roles_add_add_component__WEBPACK_IMPORTED_MODULE_5__.RolesAddComponent
  }]
}];
class MasterRoutingModule {
  static #_ = this.ɵfac = function MasterRoutingModule_Factory(t) {
    return new (t || MasterRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: MasterRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MasterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 34716:
/*!****************************************************!*\
  !*** ./src/app/components/master/master.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MasterModule: () => (/* binding */ MasterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.component */ 67290);
/* harmony import */ var _master_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master-routing.module */ 33807);
/* harmony import */ var _user_add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/add/add.component */ 58369);
/* harmony import */ var _user_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/list/list.component */ 29823);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 56208);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ 68588);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roles/roles.component */ 19326);
/* harmony import */ var _roles_add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./roles/add/add.component */ 89489);
/* harmony import */ var _roles_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./roles/list/list.component */ 1187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);












class MasterModule {
  static #_ = this.ɵfac = function MasterModule_Factory(t) {
    return new (t || MasterModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: MasterModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _master_routing_module__WEBPACK_IMPORTED_MODULE_1__.MasterRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTablesModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](MasterModule, {
    declarations: [_user_user_component__WEBPACK_IMPORTED_MODULE_0__.UserComponent, _user_add_add_component__WEBPACK_IMPORTED_MODULE_2__.UserAddComponent, _user_list_list_component__WEBPACK_IMPORTED_MODULE_3__.UserListComponent, _roles_roles_component__WEBPACK_IMPORTED_MODULE_6__.RolesComponent, _roles_add_add_component__WEBPACK_IMPORTED_MODULE_7__.RolesAddComponent, _roles_list_list_component__WEBPACK_IMPORTED_MODULE_8__.RolesListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _master_routing_module__WEBPACK_IMPORTED_MODULE_1__.MasterRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTablesModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectModule]
  });
})();

/***/ }),

/***/ 89489:
/*!**************************************************************!*\
  !*** ./src/app/components/master/roles/add/add.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolesAddComponent: () => (/* binding */ RolesAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);






const _c0 = ["categories"];
const _c1 = ["subcategories"];
function RolesAddComponent_li_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22)(1, "div", 23)(2, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RolesAddComponent_li_34_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onCategoryChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 26)(6, "li")(7, "div", 23)(8, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RolesAddComponent_li_34_Template_input_change_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onCategoryChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 26)(12, "li")(13, "div", 23)(14, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RolesAddComponent_li_34_Template_input_change_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.onCategoryChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "div", 23)(19, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RolesAddComponent_li_34_Template_input_change_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.onCategoryChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li")(23, "div", 23)(24, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RolesAddComponent_li_34_Template_input_change_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.onCategoryChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "User", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "User", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "Add", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "Add", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "Edit", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "Edit", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "Roles", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "Roles", i_r2, "");
  }
}
class RolesAddComponent {
  constructor() {
    this.submitted = false;
    this.data = [{
      name: 'Master',
      children: [{
        name: 'Master',
        children: [{
          name: 'User',
          children: [{
            name: 'Add',
            children: []
          }, {
            name: 'Edit',
            children: []
          }]
        }, {
          name: 'Roles',
          children: []
        }]
      }]
    }, {
      name: 'Stock'
    }];
    this.submitted = false;
    this.addRoles = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
  }
  selectAllChildren(element) {
    element.parentElement.classList.remove('partial');
    if (element.parentElement.nextElementSibling != null) {
      const children = Array.from(element.parentElement.nextElementSibling.children);
      children.forEach(el => {
        const checkBox = el.firstChild.firstChild;
        checkBox.checked = element.checked;
        this.selectAllChildren(checkBox);
      });
    } else {
      console.log("no children present");
    }
  }
  selectAllParent(element) {
    console.log("Element:", element);
    if (!element.parentElement.classList.contains('filter-level')) {
      const parent = element.parentElement.parentElement.parentElement.previousElementSibling;
      // parent.classList.add('partial')
      if (parent) {
        console.log(parent.firstChild);
        this.selectAllParent(parent.firstChild);
      }
    } else {
      console.log("no parent");
    }
  }
  onCategoryChange(event) {
    const element = event.target;
    //  Check all its Children
    this.selectAllChildren(element);
    this.selectAllParent(element);
    // Check is all its siblings check or not 
    const siblings = Array.from(element.parentElement.parentElement.parentElement.children);
    let flag = true;
    let allUnchecked = true;
    siblings.forEach(el => {
      const checkBox = el.children[0].children[0];
      if (checkBox.checked == false) {
        flag = false;
      } else {
        allUnchecked = false;
      }
    });
    if (!element.parentElement.parentElement.classList.contains('first-level')) {
      const parent = element.parentElement.parentElement.parentElement.previousElementSibling.children[0];
      flag ? (parent.parentElement.classList.remove('partial'), parent.checked = true) : (parent.parentElement.classList.add('partial'), parent.checked = false);
      if (allUnchecked) {
        const parent = element.parentElement.parentElement.parentElement.previousElementSibling.children[0];
        parent.parentElement.classList.remove('partial');
      }
    }
  }
  // -----------------------------------------------------
  // const subCategory = Array.from(element.parentElement.parentElement.nextElementSibling.children);
  // console.log(subCategory)
  // const subCategory = Array.from(element.nextElementSibling.querySelectorAll('.subcategory'));
  // subCategory.forEach((el: HTMLInputElement) => {
  //   // console.log(el)
  //  el.children[0]['checked'] = element.checked;
  // });
  // }
  // const category = element.parentElement.parentElement.previousElementSibling.children[0] as HTMLInputElement;
  // category['checked'] = false;
  // onSubCategoryChange(event: Event) {
  //   const element = event.target as HTMLInputElement;
  //   const category = element.parentElement.parentElement.previousElementSibling.children[0] as HTMLInputElement;
  //   category['checked'] = false;
  // }
  onSubmit() {
    this.submitted = true;
    console.log(this.addRoles.value);
    if (this.addRoles.invalid) {
      return;
    }
  }
  static #_ = this.ɵfac = function RolesAddComponent_Factory(t) {
    return new (t || RolesAddComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RolesAddComponent,
    selectors: [["app-add"]],
    viewQuery: function RolesAddComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.categories = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.subcategories = _t.first);
      }
    },
    decls: 35,
    vars: 4,
    consts: [[3, "title", "active_item"], [1, "buttons", "text-end"], ["form", "add-roles", 1, "btn", "btn-success"], [1, "conatiner-fluid"], [1, "row"], ["id", "add-roles", 3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "col-md-6"], [1, "form-group", "mb-3"], ["for", "role_name", 1, "form-label"], ["type", "text", "name", "", "id", "role_name", "placeholder", "Role Name", 1, "form-control"], ["for", "", 1, "form-label"], [1, "media", "mt-2"], [1, "media-body", "icon-state"], [1, "switch"], ["type", "checkbox", "checked", ""], [1, "switch-state"], [1, "card-header"], [1, "list-unstyled"], ["class", "first-level", 4, "ngFor", "ngForOf"], [1, "first-level"], [1, "form-check", "form-check-inline", "checkbox"], ["type", "checkbox", "value", "option1", 1, "form-check-input", "category", 3, "id", "name", "change"], [1, "form-check-label", "mb-0", 3, "for"], [1, "list-unstyled", "ps-4"], ["type", "checkbox", "name", "User", "value", "option1", 1, "form-check-input", "category", 3, "id", "change"], ["type", "checkbox", "name", "Roles", "value", "option1", 1, "form-check-input", "category", 3, "id", "change"]],
    template: function RolesAddComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-breadcrumb", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RolesAddComponent_Template_form_ngSubmit_6_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 4)(11, "div", 9)(12, "div", 10)(13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Role Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "div", 10)(18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14)(21, "div", 15)(22, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 17)(24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6)(26, "div", 7)(27, "div", 19)(28, "div", 4)(29, "div", 6)(30, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8)(33, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, RolesAddComponent_li_34_Template, 27, 12, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Add Roles")("active_item", "Add Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
    styles: [".checkbox.partial[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\n  background-color: #777;\n  content: \"-\";\n  align-items: center;\n  color: #fff;\n  justify-content: center;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYXN0ZXIvcm9sZXMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrYm94LnBhcnRpYWwgbGFiZWw6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgICBjb250ZW50OiBcIi1cIjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1187:
/*!****************************************************************!*\
  !*** ./src/app/components/master/roles/list/list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolesListComponent: () => (/* binding */ RolesListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ 68588);





function RolesListComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 11)(6, "div", 12)(7, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 14)(9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td", 8)(11, "div", 16)(12, "div", 17)(13, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.role);
  }
}
class RolesListComponent {
  constructor() {
    this.tableList = [{
      role: 'Admin'
    }, {
      role: 'Sub Admin'
    }, {
      role: 'Staff'
    }];
  }
  static #_ = this.ɵfac = function RolesListComponent_Factory(t) {
    return new (t || RolesListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RolesListComponent,
    selectors: [["app-list"]],
    decls: 21,
    vars: 3,
    consts: [[3, "title", "active_item"], ["routerLink", "add", 1, "btn", "btn-primary", "buttons"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], ["datatable", ""], [1, "text-center"], ["width", "20%", 1, "text-center"], [4, "ngFor", "ngForOf"], [1, "align-middle", "text-center"], [1, "media-body", "switch-sm", "d-flex", "align-items-center", "justify-content-center"], [1, "switch", "m-0"], ["type", "checkbox", "checked", ""], [1, "switch-state"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-evenly", "col-12", "col-xl-7"], ["href", "#"], [1, "icofont", "icofont-ui-edit"], [1, "icofont", "icofont-eye"], [1, "icofont", "icofont-ui-lock"]],
    template: function RolesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-breadcrumb", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "table", 7)(9, "thead")(10, "tr", 8)(11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Sr No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Role Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, RolesListComponent_tr_20_Template, 19, 2, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Roles")("active_item", "Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tableList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 19326:
/*!************************************************************!*\
  !*** ./src/app/components/master/roles/roles.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolesComponent: () => (/* binding */ RolesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);


class RolesComponent {
  static #_ = this.ɵfac = function RolesComponent_Factory(t) {
    return new (t || RolesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RolesComponent,
    selectors: [["app-roles"]],
    decls: 1,
    vars: 0,
    template: function RolesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 58369:
/*!*************************************************************!*\
  !*** ./src/app/components/master/user/add/add.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAddComponent: () => (/* binding */ UserAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);





class UserAddComponent {
  constructor() {
    this.defaultBindingsList = [{
      name: 'Admin'
    }, {
      name: 'Sub Admin'
    }, {
      name: 'Staff'
    }];
    this.image = '';
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
    this.addUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      basicInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
        firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
        lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
        mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(10)]),
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]),
        address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
        switch: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(true, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required)
      })
    });
  }
  get f() {
    return this.addUser.get('basicInfo')['controls'];
  }
  onSubmit() {
    this.submitted = true;
    console.warn(this.addUser.value);
    if (this.addUser.invalid) {
      return;
    }
  }
  onFileAdded(e) {
    const file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = e => {
      this.image = `${e.target.result}`;
    };
  }
  static #_ = this.ɵfac = function UserAddComponent_Factory(t) {
    return new (t || UserAddComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: UserAddComponent,
    selectors: [["app-add"]],
    decls: 91,
    vars: 5,
    consts: [[3, "title", "active_item"], [1, "btn", "btn-success", "buttons"], [1, "conatiner-fluid"], [1, "row"], [1, "col-md-3"], [1, "card"], [1, "card-body"], [1, "col-md-12", "text-center"], ["for", "image", 1, ""], ["alt", "", 1, "img-fluid", "image", 3, "src"], ["type", "file", "id", "image", "formControlName", "source", 2, "display", "none", 3, "change"], [1, "text-primary"], [1, "col-md-9"], [1, "col-md-6"], [1, "form-group", "mb-3"], ["for", "first_name", 1, "form-label"], [1, "text-danger"], ["type", "text", "name", "first_name", "id", "first_name", 1, "form-control"], ["type", "password", "name", "first_name", "id", "first_name", 1, "form-control"], ["for", "option_set", 1, "form-label"], ["bindLabel", "name", "bindValue", "name", "placeholder", "Role", 1, "js-example-basic-single", 3, "items"], ["bindLabel", "name", "bindValue", "name", "placeholder", "Country", 1, "js-example-basic-single", 3, "items"], [1, "col-md-12"], ["name", "", "id", "", "rows", "5", 1, "form-control"], ["for", "", 1, "form-label"], [1, "media", "mt-2"], [1, "media-body", "icon-state"], [1, "switch"], ["type", "checkbox"], [1, "switch-state"]],
    template: function UserAddComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-breadcrumb", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 3)(9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UserAddComponent_Template_input_change_12_listener($event) {
          return ctx.onFileAdded($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p")(14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Note: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Add a profile image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12)(18, "div", 5)(19, "div", 6)(20, "div", 3)(21, "div", 13)(22, "div", 14)(23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "First Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "sup", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 13)(29, "div", 14)(30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Last Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "sup", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 13)(36, "div", 14)(37, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "sup", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 13)(43, "div", 14)(44, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Phone No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "sup", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 13)(50, "div", 14)(51, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "sup", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 13)(57, "div", 14)(58, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "sup", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 13)(64, "div", 14)(65, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "sup", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "ng-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 13)(71, "div", 14)(72, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "sup", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "ng-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 22)(78, "div", 14)(79, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 13)(83, "div", 14)(84, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 25)(87, "div", 26)(88, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "input", 28)(90, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Add User")("active_item", "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.image ? ctx.image : "/assets/images/avtar/16.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.defaultBindingsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.country);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__.NgSelectComponent],
    styles: [".image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  aspect-ratio: 1/1;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYXN0ZXIvdXNlci9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 29823:
/*!***************************************************************!*\
  !*** ./src/app/components/master/user/list/list.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserListComponent: () => (/* binding */ UserListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ 68588);





function UserListComponent_tr_22_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 12)(8, "div", 13)(9, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 15)(11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td")(13, "div", 17)(14, "div", 18)(15, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.phone);
  }
}
const _c0 = function () {
  return ["Master"];
};
class UserListComponent {
  constructor() {
    this.tableList = [{
      id: 1,
      name: "Ram",
      phone: 9532324453,
      email: "ram123@test.com",
      userType: "Staff"
    }, {
      id: 2,
      name: "Jay",
      phone: 8354324453,
      email: "Jay123@test.com",
      userType: "Staff"
    }, {
      id: 3,
      name: "Shyam",
      phone: 9524324453,
      email: "Shyam123@test.com",
      userType: "Staff"
    }, {
      id: 4,
      name: "Hari",
      phone: 7358424453,
      email: "Hari123@test.com",
      userType: "Staff"
    }, {
      id: 5,
      name: "Ram",
      phone: 9532324453,
      email: "ram123@test.com",
      userType: "Staff"
    }, {
      id: 6,
      name: "Jay",
      phone: 8354324453,
      email: "Jay123@test.com",
      userType: "Staff"
    }, {
      id: 7,
      name: "Shyam",
      phone: 9524324453,
      email: "Shyam123@test.com",
      userType: "Staff"
    }, {
      id: 8,
      name: "Hari",
      phone: 7358424453,
      email: "Hari123@test.com",
      userType: "Staff"
    }];
  }
  static #_ = this.ɵfac = function UserListComponent_Factory(t) {
    return new (t || UserListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: UserListComponent,
    selectors: [["app-list"]],
    decls: 23,
    vars: 5,
    consts: [[3, "title", "items", "active_item"], [1, "buttons", "text-end"], ["routerLink", "add"], [1, "btn", "btn-sm", "btn-primary"], [1, "card"], [1, "card-body", "table-responsive"], ["datatable", "", 1, "row-border", "hover", "mb-4"], ["width", "8%"], ["width", "15%"], ["width", "12%", 1, "text-center"], [1, ""], [4, "ngFor", "ngForOf"], [1, "align-middle"], [1, "media-body", "switch-sm", "d-flex", "align-items-center"], [1, "switch", "m-0"], ["type", "checkbox", "checked", ""], [1, "switch-state"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-evenly", "col-12", "col-xl-7"], ["href", "#"], [1, "icofont", "icofont-ui-edit"], [1, "icofont", "icofont-eye"], [1, "icofont", "icofont-ui-lock"]],
    template: function UserListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-breadcrumb", 0)(1, "div", 1)(2, "a", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "div", 4)(7, "div", 5)(8, "table", 6)(9, "thead")(10, "tr")(11, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Sr. No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Mobile No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tbody", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, UserListComponent_tr_22_Template, 21, 3, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "User")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("active_item", "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tableList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 67290:
/*!**********************************************************!*\
  !*** ./src/app/components/master/user/user.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserComponent: () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);


class UserComponent {
  static #_ = this.ɵfac = function UserComponent_Factory(t) {
    return new (t || UserComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UserComponent,
    selectors: [["app-user"]],
    decls: 1,
    vars: 0,
    template: function UserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 68588:
/*!**************************************************!*\
  !*** ./node_modules/angular-datatables/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTableDirective: () => (/* reexport safe */ _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective),
/* harmony export */   DataTablesModule: () => (/* reexport safe */ _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__.DataTablesModule)
/* harmony export */ });
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ 90208);
/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ 8115);
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
/**
 * @module
 * @description
 * Entry point from which you should import all public library APIs.
 */



/***/ }),

/***/ 90208:
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTableDirective: () => (/* binding */ DataTableDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */



var DataTableDirective = /** @class */function () {
  function DataTableDirective(el, vcr, renderer) {
    this.el = el;
    this.vcr = vcr;
    this.renderer = renderer;
    /**
     * The DataTable option you pass to configure your table.
     */
    this.dtOptions = {};
  }
  DataTableDirective.prototype.ngOnInit = function () {
    var _this = this;
    if (this.dtTrigger) {
      this.dtTrigger.subscribe(function (options) {
        _this.displayTable(options);
      });
    } else {
      this.displayTable(null);
    }
  };
  DataTableDirective.prototype.ngOnDestroy = function () {
    if (this.dtTrigger) {
      this.dtTrigger.unsubscribe();
    }
    if (this.dt) {
      this.dt.destroy(true);
    }
  };
  DataTableDirective.prototype.displayTable = function (dtOptions) {
    var _this = this;
    // assign new options if provided
    if (dtOptions) {
      this.dtOptions = dtOptions;
    }
    this.dtInstance = new Promise(function (resolve, reject) {
      Promise.resolve(_this.dtOptions).then(function (resolvedDTOptions) {
        // validate object
        var isTableEmpty = Object.keys(resolvedDTOptions).length === 0 && $('tbody tr', _this.el.nativeElement).length === 0;
        if (isTableEmpty) {
          reject('Both the table and dtOptions cannot be empty');
          return;
        }
        // Using setTimeout as a "hack" to be "part" of NgZone
        setTimeout(function () {
          // Assign DT properties here
          var options = {
            rowCallback: function (row, data, index) {
              if (resolvedDTOptions.columns) {
                var columns = resolvedDTOptions.columns;
                _this.applyNgPipeTransform(row, columns);
                _this.applyNgRefTemplate(row, columns, data);
              }
              // run user specified row callback if provided.
              if (resolvedDTOptions.rowCallback) {
                resolvedDTOptions.rowCallback(row, data, index);
              }
            }
          };
          // merge user's config with ours
          options = Object.assign({}, resolvedDTOptions, options);
          _this.dt = $(_this.el.nativeElement).DataTable(options);
          resolve(_this.dt);
        });
      });
    });
  };
  DataTableDirective.prototype.applyNgPipeTransform = function (row, columns) {
    // Filter columns with pipe declared
    var colsWithPipe = columns.filter(function (x) {
      return x.ngPipeInstance && !x.ngTemplateRef;
    });
    colsWithPipe.forEach(function (el) {
      var pipe = el.ngPipeInstance;
      var pipeArgs = el.ngPipeArgs || [];
      // find index of column using `data` attr
      var i = columns.filter(function (c) {
        return c.visible !== false;
      }).findIndex(function (e) {
        return e.data === el.data;
      });
      // get <td> element which holds data using index
      var rowFromCol = row.childNodes.item(i);
      // Transform data with Pipe and PipeArgs
      var rowVal = $(rowFromCol).text();
      var rowValAfter = pipe.transform.apply(pipe, __spreadArray([rowVal], pipeArgs, false));
      // Apply transformed string to <td>
      $(rowFromCol).text(rowValAfter);
    });
  };
  DataTableDirective.prototype.applyNgRefTemplate = function (row, columns, data) {
    var _this = this;
    // Filter columns using `ngTemplateRef`
    var colsWithTemplate = columns.filter(function (x) {
      return x.ngTemplateRef && !x.ngPipeInstance;
    });
    colsWithTemplate.forEach(function (el) {
      var _a;
      var ref = (_a = el.ngTemplateRef, _a.ref),
        context = _a.context;
      // get <td> element which holds data using index
      var i = columns.filter(function (c) {
        return c.visible !== false;
      }).findIndex(function (e) {
        return e.data === el.data;
      });
      var cellFromIndex = row.childNodes.item(i);
      // reset cell before applying transform
      $(cellFromIndex).html('');
      // render onto DOM
      // finalize context to be sent to user
      var _context = Object.assign({}, context, context === null || context === void 0 ? void 0 : context.userData, {
        adtData: data
      });
      var instance = _this.vcr.createEmbeddedView(ref, _context);
      _this.renderer.appendChild(cellFromIndex, instance.rootNodes[0]);
    });
  };
  DataTableDirective.ɵfac = function DataTableDirective_Factory(t) {
    return new (t || DataTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  DataTableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: DataTableDirective,
    selectors: [["", "datatable", ""]],
    inputs: {
      dtOptions: "dtOptions",
      dtTrigger: "dtTrigger"
    }
  });
  return DataTableDirective;
}();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[datatable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    dtOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dtTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/***/ }),

/***/ 8115:
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTablesModule: () => (/* binding */ DataTablesModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-datatables.directive */ 90208);
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */




var DataTablesModule = /** @class */function () {
  function DataTablesModule() {}
  DataTablesModule.forRoot = function () {
    return {
      ngModule: DataTablesModule
    };
  };
  DataTablesModule.ɵfac = function DataTablesModule_Factory(t) {
    return new (t || DataTablesModule)();
  };
  DataTablesModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DataTablesModule
  });
  DataTablesModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
  return DataTablesModule;
}();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTablesModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective],
      exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective]
    }]
  }], null, null);
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_master_master_module_ts.js.map