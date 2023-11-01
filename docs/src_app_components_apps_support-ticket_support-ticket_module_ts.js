"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_apps_support-ticket_support-ticket_module_ts"],{

/***/ 85724:
/*!*********************************************************************************!*\
  !*** ./src/app/components/apps/support-ticket/support-ticket-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportTicketRoutingModule: () => (/* binding */ SupportTicketRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _support_ticket_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support-ticket.component */ 24095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _support_ticket_component__WEBPACK_IMPORTED_MODULE_0__.SupportTicketComponent
  }]
}];
class SupportTicketRoutingModule {
  static #_ = this.ɵfac = function SupportTicketRoutingModule_Factory(t) {
    return new (t || SupportTicketRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SupportTicketRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SupportTicketRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 24095:
/*!****************************************************************************!*\
  !*** ./src/app/components/apps/support-ticket/support-ticket.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportTicketComponent: () => (/* binding */ SupportTicketComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_directives_NgbdSortableHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/directives/NgbdSortableHeader */ 34469);
/* harmony import */ var src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/table.service */ 13357);
/* harmony import */ var _shared_data_tables_support_ticket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/data/tables/support-ticket */ 52109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);



// import { TableService } from 'src/app/shared/services/table.service';







const _c0 = function (a0) {
  return {
    "width": a0
  };
};
function SupportTicketComponent_tr_184_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 41)(2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 44)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td")(14, "div", 18)(15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.salary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.office);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", item_r1.skill)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, item_r1.progress));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.extn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.email);
  }
}
const _c1 = function () {
  return ["Apps"];
};
class SupportTicketComponent {
  constructor(service) {
    this.service = service;
    this.settings = {
      columns: {
        img: {
          title: 'Image',
          type: 'html'
        },
        position: {
          title: 'Position'
        },
        salary: {
          title: 'Salary'
        },
        office: {
          title: 'Office'
        },
        skill: {
          title: 'Skill',
          type: 'html'
        },
        extn: {
          title: 'Extn'
        },
        email: {
          title: 'Email'
        }
      }
    };
    this.selected = [];
    this.tableItem$ = service.tableItem$;
    this.total$ = service.total$;
    this.service.setUserData(_shared_data_tables_support_ticket__WEBPACK_IMPORTED_MODULE_2__.SUPPORTDB);
  }
  onSort({
    column,
    direction
  }) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
  onSelect(selected) {
    this.service.deleteSingleData(selected);
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function SupportTicketComponent_Factory(t) {
    return new (t || SupportTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_1__.TableService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SupportTicketComponent,
    selectors: [["app-support-ticket"]],
    viewQuery: function SupportTicketComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](src_app_shared_directives_NgbdSortableHeader__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.headers = _t);
      }
    },
    decls: 189,
    vars: 12,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "col-xl-4", "col-sm-6", "box-col-6"], [1, "card", "ecommerce-widget"], [1, "card-body", "support-ticket-font"], [1, "col-5"], [1, "counter"], [1, "col-7"], [1, "text-md-end"], [1, "product-stts", "txt-success", "ms-2"], [1, "icon-angle-up", "f-12", "ms-1"], [1, "product-stts", "txt-danger", "ms-2"], [1, "icon-angle-down", "f-12", "ms-1"], [1, "progress-showcase"], [1, "progress", "sm-progress-bar"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-secondary", 2, "width", "70%"], [1, "progress-showcase", "mt-4"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "70%"], [1, "table-responsive"], [1, "custom-datatable", "product-list-custom"], [1, "custom-datatable"], [1, "table"], ["scope", "col", "sortable", "img", 3, "sort"], ["scope", "col", "sortable", "position", 3, "sort"], ["scope", "col", "sortable", "salary", 3, "sort"], ["scope", "col", "sortable", "office", 3, "sort"], ["scope", "col", "sortable", "skill", 3, "sort"], ["scope", "col", "sortable", "extn", 3, "sort"], ["scope", "col", "sortable", "email", 3, "sort"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-2"], [3, "collectionSize", "page", "pageSize", "pageChange"], ["scope", "row"], [1, "media"], [1, "rounded-circle", "img-30", "me-3", 3, "src"], [1, "media-body", "align-self-center"], ["role", "progressbar", 3, "ngClass", "ngStyle"]],
    template: function SupportTicketComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Support Ticket List");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "List of ticket opend by customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6)(11, "div", 2)(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "div", 2)(16, "div", 10)(17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "2563");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "div", 13)(23, "ul")(24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 18)(35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 7)(38, "div", 8)(39, "div", 9)(40, "div", 2)(41, "div", 10)(42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "8943");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 12)(47, "div", 13)(48, "ul")(49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 18)(60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 7)(63, "div", 8)(64, "div", 9)(65, "div", 2)(66, "div", 10)(67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Running");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "2500");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 12)(72, "div", 13)(73, "ul")(74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 22)(85, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](86, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 7)(88, "div", 8)(89, "div", 9)(90, "div", 2)(91, "div", 10)(92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "Smooth");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "2060");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 12)(97, "div", 13)(98, "ul")(99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](108, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 22)(110, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](111, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 7)(113, "div", 8)(114, "div", 9)(115, "div", 2)(116, "div", 10)(117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120, "5600");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "div", 12)(122, "div", 13)(123, "ul")(124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](128, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](133, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "div", 22)(135, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](136, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "div", 7)(138, "div", 8)(139, "div", 9)(140, "div", 2)(141, "div", 10)(142, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](145, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "div", 12)(147, "div", 13)(148, "ul")(149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](150, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](153, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](155, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](157, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](158, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "div", 18)(160, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](161, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "div", 27)(163, "div", 28)(164, "div", 27)(165, "div", 29)(166, "table", 30)(167, "thead")(168, "tr")(169, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function SupportTicketComponent_Template_th_sort_169_listener($event) {
          return ctx.onSort($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](170, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function SupportTicketComponent_Template_th_sort_171_listener($event) {
          return ctx.onSort($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function SupportTicketComponent_Template_th_sort_173_listener($event) {
          return ctx.onSort($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174, "Salary");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function SupportTicketComponent_Template_th_sort_175_listener($event) {
          return ctx.onSort($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](176, "Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function SupportTicketComponent_Template_th_sort_177_listener($event) {
          return ctx.onSort($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178, "Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function SupportTicketComponent_Template_th_sort_179_listener($event) {
          return ctx.onSort($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](180, "Extend");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function SupportTicketComponent_Template_th_sort_181_listener($event) {
          return ctx.onSort($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](182, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](184, SupportTicketComponent_tr_184_Template, 21, 11, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](185, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "div", 39)(187, "ngb-pagination", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function SupportTicketComponent_Template_ngb_pagination_pageChange_187_listener($event) {
          return ctx.service.page = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](188, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Support Ticket")("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c1))("active_item", "Support Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](184);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](185, 7, ctx.tableItem$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](188, 9, ctx.total$))("page", ctx.service.page)("pageSize", ctx.service.pageSize);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPagination, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, src_app_shared_directives_NgbdSortableHeader__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 59046:
/*!*************************************************************************!*\
  !*** ./src/app/components/apps/support-ticket/support-ticket.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportTicketModule: () => (/* binding */ SupportTicketModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 56208);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _support_ticket_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support-ticket-routing.module */ 85724);
/* harmony import */ var _support_ticket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support-ticket.component */ 24095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);







class SupportTicketModule {
  static #_ = this.ɵfac = function SupportTicketModule_Factory(t) {
    return new (t || SupportTicketModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: SupportTicketModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _support_ticket_routing_module__WEBPACK_IMPORTED_MODULE_1__.SupportTicketRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SupportTicketModule, {
    declarations: [_support_ticket_component__WEBPACK_IMPORTED_MODULE_2__.SupportTicketComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _support_ticket_routing_module__WEBPACK_IMPORTED_MODULE_1__.SupportTicketRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule]
  });
})();

/***/ }),

/***/ 52109:
/*!******************************************************!*\
  !*** ./src/app/shared/data/tables/support-ticket.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SUPPORTDB: () => (/* binding */ SUPPORTDB)
/* harmony export */ });
const SUPPORTDB = [{
  img: "assets/images/user/1.jpg",
  name: "Tiger",
  position: "System Architect",
  salary: "$320,800",
  office: "Edinburgh",
  skill: "progress-bar custom-progress-width bg-danger w-70",
  progress: "70%",
  extn: 5421,
  email: "t.nixon@datatables.net"
}, {
  img: "assets/images/user/2.png",
  name: "Tiger",
  position: "System Architect",
  salary: "$320,800",
  office: "Edinburgh",
  skill: "progress-bar custom-progress-width bg-secondary w-20",
  progress: "20%",
  extn: 5421,
  email: "t.nixon@datatables.net"
}, {
  img: "assets/images/user/3.jpg",
  name: "Garrett Winters",
  position: "Accountant",
  salary: "$170,750",
  office: "Tokyo",
  skill: "progress-bar custom-progress-width bg-success w-50",
  progress: "50%",
  extn: 8422,
  email: "g.winters@datatables.net"
}, {
  img: "assets/images/user/4.jpg",
  name: "Garrett Winters",
  position: "Accountant",
  salary: "$170,750",
  office: "Tokyo",
  skill: "progress-bar custom-progress-width bg-primary w-45",
  progress: "45%",
  extn: 8422,
  email: "g.winters@datatables.net"
}, {
  img: "assets/images/user/5.jpg",
  name: "Garrett Winters",
  position: "Accountant",
  salary: "$170,750",
  office: "Tokyo",
  skill: "progress-bar custom-progress-width bg-danger w-57",
  progress: "57%",
  extn: 8422,
  email: "g.winters@datatables.net"
}, {
  img: "assets/images/user/6.jpg",
  name: "Ashton Cox",
  position: "Junior Technical Author",
  salary: "$86,000",
  office: "San Francisco",
  skill: "progress-bar custom-progress-width bg-success w-100",
  progress: "100%",
  extn: 1562,
  email: "a.cox@datatables.net"
}, {
  img: "assets/images/user/7.jpg",
  name: "Cedric Kelly",
  position: "Senior Javascript Developer",
  salary: "$433,060",
  office: "San Francisco",
  skill: "progress-bar custom-progress-width bg-secondary w-35",
  progress: "35%",
  extn: 6224,
  email: "c.kelly@datatables.net"
}, {
  img: "assets/images/user/8.jpg",
  name: "Cedric Kelly",
  position: "Senior Javascript Developer",
  salary: "$433,060",
  office: "San Francisco",
  skill: "progress-bar custom-progress-width bg-secondary w-76",
  progress: "76%",
  extn: 6224,
  email: "c.kelly@datatables.net"
}, {
  img: "assets/images/user/9.jpg",
  name: "Airi Satou",
  position: "Accountant",
  salary: "$162,700",
  office: "Tokyo",
  skill: "progress-bar custom-progress-width bg-success w-20",
  progress: "20%",
  extn: 5407,
  email: "a.satou@datatables.net"
}, {
  img: 'assets/images/user/10.jpg',
  name: "Airi Satou",
  position: "Integration Specialist",
  salary: "$372,000",
  office: "New York",
  skill: "progress-bar custom-progress-width bg-info w-30",
  progress: "30%",
  extn: 4804,
  email: "b.williamson@datatables.net"
}, {
  img: "assets/images/user/1.jpg",
  name: "Herrod Chandler",
  position: "Sales Assistant",
  salary: "$137,500",
  office: "San Francisco",
  skill: "progress-bar custom-progress-width bg-warning w-60",
  progress: "60%",
  extn: 9608,
  email: "h.chandler@datatables.net"
}, {
  img: 'assets/images/user/5.jpg',
  name: "Rhona Davidson",
  position: "Integration Specialist",
  salary: "$327,900",
  office: "Tokyo",
  skill: "progress-bar custom-progress-width bg-secondary w-50",
  progress: "50%",
  extn: 6200,
  email: "r.davidson@datatables.net"
}, {
  img: "assets/images/user/1.jpg",
  name: "Colleen Hurst",
  position: "Javascript Developer",
  salary: "$205,500",
  office: "San Francisco",
  skill: "progress-bar custom-progress-width bg-success w-25",
  progress: "25%",
  extn: 2360,
  email: "c.hurst@datatables.net"
}, {
  img: "assets/images/user/2.png",
  name: "Sonya Frost",
  position: "Software Engineer",
  salary: "$103,600",
  office: "Edinburgh",
  skill: "progress-bar custom-progress-width bg-primary w-40",
  progress: "40%",
  extn: 1667,
  email: "s.frost@datatables.net"
}, {
  img: "assets/images/user/3.jpg",
  name: "Jena Gaines",
  position: "Office Manager",
  salary: "$90,560",
  office: "London",
  skill: "progress-bar custom-progress-width bg-warning w-57",
  progress: "57%",
  extn: 3814,
  email: "j.gaines@datatables.net"
}, {
  img: "assets/images/user/4.jpg",
  name: "Quinn Flynn",
  position: "Support Lead",
  salary: "$342,000",
  office: "Edinburgh",
  skill: "progress-bar custom-progress-width bg-danger w-50",
  progress: "50%",
  extn: 9497,
  email: "q.flynn@datatables.net"
}, {
  img: "assets/images/user/5.jpg",
  name: "Charde Marshall",
  position: "Regional Director",
  salary: "$470,600",
  office: "San Francisco",
  skill: "progress-bar custom-progress-width bg-info w-27",
  progress: "27%",
  extn: 6741,
  email: "c.marshall@datatables.net"
}, {
  img: "assets/images/user/6.jpg",
  name: "Haley Kennedy",
  position: "Senior Marketing Designer",
  salary: "$313,500",
  office: "London",
  skill: "progress-bar custom-progress-width bg-success w-35",
  progress: "35%",
  extn: 3597,
  email: "h.kennedy@datatables.net"
}, {
  img: "assets/images/user/7.jpg",
  name: "Tatyana Fitzpatrick",
  position: "Regional Director",
  salary: "$385,750",
  office: "London",
  skill: "progress-bar custom-progress-width bg-warning w-80",
  progress: "80%",
  extn: 1965,
  email: "t.fitzpatrick@datatables.net"
}, {
  img: "assets/images/user/8.jpg",
  name: "Michael Silva",
  position: "Marketing Designer",
  salary: "$198,500",
  office: "London",
  skill: "progress-bar custom-progress-width bg-primary w-74",
  progress: "74%",
  extn: 1581,
  email: "m.silva@datatables.net"
}, {
  img: "assets/images/user/9.jpg",
  name: "Michael Silva",
  position: "Paul Byrd",
  salary: "Chief Financial Officer (CFO)",
  office: "$725,000",
  skill: "progress-bar custom-progress-width bg-ress-bar w-30 bg-success",
  progress: "30%",
  extn: 3059,
  email: "p.byrd@datatables.net"
}, {
  img: "assets/images/user/10.jpg",
  name: "Gloria Little",
  position: "Systems Administrator",
  salary: "$237,500",
  office: "New York",
  skill: "progress-bar custom-progress-width bg-success w-50",
  progress: "50%",
  extn: 1721,
  email: "g.little@datatables.net"
}, {
  img: "assets/images/user/2.png",
  name: "Bradley Greer",
  position: "Software Engineer",
  salary: "$132,000",
  office: "London",
  skill: "progress-bar custom-progress-width bg-primary w-30",
  progress: "30%",
  extn: 2558,
  email: "b.greer@datatables.net"
}, {
  img: "assets/images/user/5.jpg",
  name: "Michael Silva",
  position: "Dai Rios",
  salary: "Personnel Lead",
  office: "$217,500",
  skill: "progress-bar custom-progress-width  bg-warning w-40",
  progress: "40%",
  extn: 2290,
  email: "d.rios@datatables.net"
}, {
  img: "assets/images/user/1.jpg",
  name: "Jenette Caldwell",
  position: "Development Lead",
  salary: "$345,000",
  office: "New York",
  skill: "progress-bar custom-progress-width bg-primary w-30",
  progress: "80%",
  extn: 1937,
  email: "j.caldwell@datatables.net"
}, {
  img: "assets/images/user/2.png",
  name: "Yuri Berry",
  position: "Chief Marketing Officer (CMO)",
  salary: "$675,000",
  office: "New York",
  skill: "progress-bar custom-progress-width bg-danger w-20",
  progress: "30%",
  extn: 6154,
  email: "y.berry@datatables.net"
}, {
  img: "assets/images/user/3.jpg",
  name: "C",
  position: "Pre-Sales Support",
  salary: "$106,450",
  office: "New York",
  skill: "progress-bar custom-progress-width bg-success w-10",
  progress: "70%",
  extn: 8330,
  email: "c.vance@datatables.net"
}];

/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_support-ticket_support-ticket_module_ts.js.map