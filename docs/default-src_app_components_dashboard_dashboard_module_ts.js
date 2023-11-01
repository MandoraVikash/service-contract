"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["default-src_app_components_dashboard_dashboard_module_ts"],{

/***/ 4678:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/dashboard/crypto/crypto-left-content/average/average.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AverageComponent: () => (/* binding */ AverageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 49177);



class AverageComponent {
  constructor() {}
  static #_ = this.ɵfac = function AverageComponent_Factory(t) {
    return new (t || AverageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AverageComponent,
    selectors: [["app-average"]],
    inputs: {
      data: "data"
    },
    decls: 16,
    vars: 14,
    consts: [[1, "card", "widget-hover"], [1, "card-body", "radial-progress-card"], [1, "mb-0"], [1, "sale-details"], [1, "f-12", "f-light", "f-w-500"], [3, "icon"], [1, "f-light"], [1, "radial-chart-wrap"], ["id", "radial-chart"], [3, "series", "chart", "plotOptions", "colors", "stroke", "responsive"]],
    template: function AverageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-feather-icons", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7)(14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "apx-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.averageTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("font-", ctx.data.cardColor, " mb-0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.average);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "arrow-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx.data.parsonage, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.data.series)("chart", ctx.data.chart)("plotOptions", ctx.data.plotOptions)("colors", ctx.data.colors)("stroke", ctx.data.stroke)("responsive", ctx.data.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 13284:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/dashboard/crypto/crypto-left-content/crypto-left-content.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CryptoLeftContentComponent: () => (/* binding */ CryptoLeftContentComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/crypto */ 83634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _average_average_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./average/average.component */ 4678);
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transactions/transactions.component */ 31062);




class CryptoLeftContentComponent {
  constructor() {
    this.averageSales = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.averageSales;
    this.averageProfit = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.averageProfit;
    this.averageVisits = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.averageVisits;
  }
  static #_ = this.ɵfac = function CryptoLeftContentComponent_Factory(t) {
    return new (t || CryptoLeftContentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CryptoLeftContentComponent,
    selectors: [["app-crypto-left-content"]],
    decls: 21,
    vars: 3,
    consts: [[1, "row"], [1, "col-xl-12", "col-sm-6"], [1, "card", "crypto-main-card"], [1, "card-body"], [1, "deposit-wrap"], [1, "btn", "btn-white", "f-w-500"], ["src", "assets/images/dashboard-4/crypto.png", "alt", "crypto"], [3, "data"], [1, "col-sm-12"]],
    template: function CryptoLeftContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Cryptocurrency just got even better.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Lorem Ipsum is simply dummy text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Deposit Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "app-average", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "app-average", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "app-average", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "app-transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.averageSales);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.averageProfit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.averageVisits);
      }
    },
    dependencies: [_average_average_component__WEBPACK_IMPORTED_MODULE_1__.AverageComponent, _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_2__.TransactionsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 31062:
/*!********************************************************************************************************!*\
  !*** ./src/app/components/dashboard/crypto/crypto-left-content/transactions/transactions.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionsComponent: () => (/* binding */ TransactionsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/data/dashboard/crypto */ 83634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 49177);




function TransactionsComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 12)(3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-feather-icons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td")(11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td")(14, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "$236.89");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", item_r1.growth == "high" ? "font-success" : "font-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", item_r1.arrow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", item_r1.type, " ", item_r1.coin, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", item_r1.parsonage, " ", item_r1.coin, "");
  }
}
const _c0 = function (a0) {
  return {
    "active show": a0
  };
};
class TransactionsComponent {
  constructor() {
    this.openTab = "All";
    this.transactions = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.transactions;
    this.filterData = this.transactions;
  }
  tabbed(val) {
    this.openTab = val;
    this.filterData = val !== "All" ? this.transactions.filter(data => {
      return data.type == this.openTab ? true : false;
    }) : this.transactions;
  }
  static #_ = this.ɵfac = function TransactionsComponent_Factory(t) {
    return new (t || TransactionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TransactionsComponent,
    selectors: [["app-transactions"]],
    decls: 22,
    vars: 10,
    consts: [[1, "card", "tranaction-card"], [1, "card-header", "card-no-border"], [1, "header-top"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs", "custom-tab"], ["role", "presentation", 1, "nav-item"], ["type", "button", 1, "nav-link", 3, "ngClass", "click"], [1, "card-body", "pt-0"], ["id", "myTabContent", 1, "tab-content"], ["id", "all", "role", "tabpanel", "aria-labelledby", "all-tab", 1, "tab-pane", "fade", "show", "active"], [1, "table-responsive", "recent-table", "transaction-table"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "d-flex"], [1, "me-2", 3, "ngClass"], [3, "icon"], [1, "f-14", "mb-0"], [1, "f-light"], [1, "f-light", "f-w-500"]],
    template: function TransactionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 3)(6, "li", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransactionsComponent_Template_button_click_7_listener() {
          return ctx.tabbed("All");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 4)(10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransactionsComponent_Template_button_click_10_listener() {
          return ctx.tabbed("Buy");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 4)(13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransactionsComponent_Template_button_click_13_listener() {
          return ctx.tabbed("Sell");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6)(16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "table", 10)(20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, TransactionsComponent_tr_21_Template, 16, 7, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx.openTab == "All"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx.openTab == "Buy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.openTab == "Sell"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filterData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 18139:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/dashboard/crypto/crypto-middle-content/buy-coins/buy-coins.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuyCoinsComponent: () => (/* binding */ BuyCoinsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);


class BuyCoinsComponent {
  constructor() {
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function BuyCoinsComponent_Factory(t) {
    return new (t || BuyCoinsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BuyCoinsComponent,
    selectors: [["app-buy-coins"]],
    decls: 47,
    vars: 2,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "header-top", "gap-1"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "icon-more-alt"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "theme-form", "crypto-form"], [1, "mb-3"], ["for", "money", 1, "form-label", "f-light"], [1, "position-relative"], ["id", "money", "type", "number", "placeholder", "100", 1, "form-control"], [1, "form-select", "crypto-select", "warning"], ["for", "coin", 1, "form-label", "f-light"], ["id", "coin", "type", "number", "placeholder", "0.0043", 1, "form-control"], [1, "form-select", "crypto-select", "primary"], ["type", "button", 1, "btn", "btn-primary", "btn-hover-effect", "w-100"]],
    template: function BuyCoinsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Buy Coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyCoinsComponent_Template_button_click_6_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8)(16, "form", 9)(17, "div", 10)(18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Enter your Money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 14)(23, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "BTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "LTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "ETH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10)(32, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Enter Coins Converted to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 17)(37, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "BTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "LTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "ETH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Buy Coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 58956:
/*!******************************************************************************************!*\
  !*** ./src/app/components/dashboard/crypto/crypto-middle-content/coin/coin.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoinComponent: () => (/* binding */ CoinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ 57854);


class CoinComponent {
  static #_ = this.ɵfac = function CoinComponent_Factory(t) {
    return new (t || CoinComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CoinComponent,
    selectors: [["app-coin"]],
    inputs: {
      data: "data"
    },
    decls: 21,
    vars: 26,
    consts: [[1, "d-flex"], [1, "currency-icon-widget"], [1, "f-light"], [1, "card"], [1, "card-body", "d-flex"], [1, "currency-chart-wrap"], ["id", "currency-chart"], [3, "series", "chart", "grid", "colors", "stroke", "labels", "markers", "xaxis", "yaxis", "legend", "tooltip", "responsive"], [1, "mb-0"], ["data-feather", "trending-up", 1, "me-1"]],
    template: function CoinComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3)(11, "div", 4)(12, "div", 5)(13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "apx-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div")(16, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-widget ", ctx.data.colorClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("href", "assets/svg/icon-sprite.svg#", ctx.data.icon, "", null, "xlink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data.coinName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.data.series)("chart", ctx.data.chart)("grid", ctx.data.grid)("colors", ctx.data.colors)("stroke", ctx.data.stroke)("labels", ctx.data.labels)("markers", ctx.data.markers)("xaxis", ctx.data.xaxis)("yaxis", ctx.data.yaxis)("legend", ctx.data.legend)("tooltip", ctx.data.tooltip)("responsive", ctx.data.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("bg-light-", ctx.data.colorClass, " text-center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.data.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("f-12 f-w-500 font-", ctx.data.colorClass, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", ctx.data.parsonage, "%");
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7994:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/dashboard/crypto/crypto-middle-content/crypto-middle-content.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CryptoMiddleContentComponent: () => (/* binding */ CryptoMiddleContentComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/crypto */ 83634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _coin_coin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coin/coin.component */ 58956);
/* harmony import */ var _market_graph_market_graph_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./market-graph/market-graph.component */ 53606);
/* harmony import */ var _currencies_currencies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currencies/currencies.component */ 64937);
/* harmony import */ var _buy_coins_buy_coins_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buy-coins/buy-coins.component */ 18139);
/* harmony import */ var _sell_coins_sell_coins_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sell-coins/sell-coins.component */ 43505);







class CryptoMiddleContentComponent {
  constructor() {
    this.Bitcoin = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.Bitcoin;
    this.Ethereum = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.Ethereum;
    this.LeaveTravel = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.LeaveTravel;
  }
  static #_ = this.ɵfac = function CryptoMiddleContentComponent_Factory(t) {
    return new (t || CryptoMiddleContentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: CryptoMiddleContentComponent,
    selectors: [["app-crypto-middle-content"]],
    decls: 15,
    vars: 3,
    consts: [[1, "row"], [1, "col-sm-4"], [3, "data"], [1, "col-xl-12"], [1, "col-sm-6"]],
    template: function CryptoMiddleContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-coin", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-coin", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-coin", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-market-graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "app-currencies");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "app-buy-coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "app-sell-coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.Bitcoin);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.Ethereum);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.LeaveTravel);
      }
    },
    dependencies: [_coin_coin_component__WEBPACK_IMPORTED_MODULE_1__.CoinComponent, _market_graph_market_graph_component__WEBPACK_IMPORTED_MODULE_2__.MarketGraphComponent, _currencies_currencies_component__WEBPACK_IMPORTED_MODULE_3__.CurrenciesComponent, _buy_coins_buy_coins_component__WEBPACK_IMPORTED_MODULE_4__.BuyCoinsComponent, _sell_coins_sell_coins_component__WEBPACK_IMPORTED_MODULE_5__.SellCoinsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 64937:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/dashboard/crypto/crypto-middle-content/currencies/currencies.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrenciesComponent: () => (/* binding */ CurrenciesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 49177);



function CurrenciesComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 8)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "use");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "div", 10)(13, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-feather-icons", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td")(21, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Trade");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("currency-icon ", item_r1.colorClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattributeInterpolate1"]("href", "assets/svg/icon-sprite.svg#", item_r1.icon, "", null, "xlink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.currenciesName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", item_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r1.arrow === "trending-up" ? "font-success" : "font-secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", item_r1.arrow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r1.growth, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", item_r1.totalBalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.totalCoin);
  }
}
class CurrenciesComponent {
  constructor() {
    this.currencies = [{
      colorClass: "warning",
      icon: "beta",
      currenciesName: "Bitcoin",
      price: "13,098.09",
      growth: "5.90",
      arrow: "trending-up",
      totalBalance: "64,100.066",
      totalCoin: "1.09634721"
    }, {
      colorClass: "success",
      icon: "ltc",
      currenciesName: "Litecoin",
      price: "11,098.04",
      growth: "2.90",
      arrow: "trending-down",
      totalBalance: "87,897.098",
      totalCoin: "1.09675432"
    }, {
      colorClass: "primary",
      icon: "eth",
      currenciesName: "Eathereum",
      price: "45,198.09",
      growth: "0.12",
      arrow: "trending-up",
      totalBalance: "45,178.010",
      totalCoin: "1.41557127"
    }, {
      colorClass: "secondary",
      icon: "bin",
      currenciesName: "Bitcoin",
      price: "35,098.34",
      growth: "3.56",
      arrow: "trending-up",
      totalBalance: "64,100.066",
      totalCoin: "1.78142254"
    }, {
      colorClass: "dark-green",
      icon: "te",
      currenciesName: "Tether",
      price: "56,898.91",
      growth: "1.23",
      arrow: "trending-down",
      totalBalance: "61,574.218",
      totalCoin: "1.574215"
    }];
  }
  static #_ = this.ɵfac = function CurrenciesComponent_Factory(t) {
    return new (t || CurrenciesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CurrenciesComponent,
    selectors: [["app-currencies"]],
    decls: 24,
    vars: 1,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "card-body", "pt-0"], [1, "recent-table", "table-responsive", "currency-table"], [1, "table"], [1, "f-light"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "gap-2"], [1, "f-14", "mb-0", "f-w-400"], [1, "change-currency", 3, "ngClass"], [1, "me-1"], [3, "icon"], [1, "btn", "badge-light-primary"]],
    template: function CurrenciesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "My Currencies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "table", 5)(8, "thead")(9, "tr")(10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Coin Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "24h Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Total Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Total Coin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CurrenciesComponent_tr_23_Template, 23, 11, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currencies);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 53606:
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/dashboard/crypto/crypto-middle-content/market-graph/market-graph.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketGraphComponent: () => (/* binding */ MarketGraphComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/data/dashboard/crypto */ 83634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class MarketGraphComponent {
  constructor() {
    this.marketChart = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.marketChart;
  }
  static #_ = this.ɵfac = function MarketGraphComponent_Factory(t) {
    return new (t || MarketGraphComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MarketGraphComponent,
    selectors: [["app-market-graph"]],
    decls: 60,
    vars: 14,
    consts: [[1, "card", "market-card"], [1, "card-header", "card-no-border"], [1, "header-top"], ["id", "tabdesign", "role", "tablist", 1, "nav", "nav-tabs", "custom-tab"], ["role", "presentation", 1, "nav-item"], ["id", "hour-tab", "data-bs-toggle", "tab", "data-bs-target", "#hour", "type", "button", "role", "tab", "aria-selected", "false", 1, "nav-link"], ["id", "day-tab", "data-bs-toggle", "tab", "data-bs-target", "#day", "type", "button", "role", "tab", "aria-selected", "false", 1, "nav-link"], ["id", "week-tab", "data-bs-toggle", "tab", "data-bs-target", "#week", "type", "button", "role", "tab", "aria-selected", "true", 1, "nav-link", "active"], ["id", "month-tab", "data-bs-toggle", "tab", "data-bs-target", "#month", "type", "button", "role", "tab", "aria-selected", "false", 1, "nav-link"], ["id", "year-tab", "data-bs-toggle", "tab", "data-bs-target", "#year", "type", "button", "role", "tab", "aria-selected", "false", 1, "nav-link"], [1, "card-body", "pt-0"], [1, "row", "m-0", "overall-card"], [1, "col-xxl-8", "col-xl-7", "col-md-8", "col-sm-7", "p-0", "box-col-7", "col-ed-7"], [1, "market-chart-container"], ["id", "market-chart"], [3, "series", "chart", "stroke", "dataLabels", "colors", "grid", "plotOptions", "fill", "labels", "markers", "yaxis", "xaxis", "tooltip", "legend"], [1, "col-xxl-4", "col-xl-5", "col-md-4", "col-sm-5", "p-0", "box-col-5", "col-ed-5"], [1, "row", "g-sm-3", "g-2"], [1, "col-md-12"], [1, "light-card", "balance-card", "align-items-center"], [1, "f-w-400", "f-14", "mb-0"], [1, "ms-auto", "text-end"], [1, "badge", "badge-light-success", "rounded-pill"], [1, "badge", "badge-light-secondary", "rounded-pill"], ["type", "button", 1, "btn", "btn-outline-dark", "w-100"]],
    template: function MarketGraphComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Market Graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 3)(6, "li", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "1H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 4)(10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "1D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 4)(13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "1W");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 4)(16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "1M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 4)(19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "1Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "apx-chart", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16)(28, "div", 17)(29, "div", 18)(30, "div", 19)(31, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Coinmarketcap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 21)(34, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "+11.67%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 18)(37, "div", 19)(38, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Binance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 21)(41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "+10.67%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 18)(44, "div", 19)(45, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Coinbase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 21)(48, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "-11.67%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 18)(51, "div", 19)(52, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Yobit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 21)(55, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "+13.67%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 18)(58, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "See All Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.marketChart.series)("chart", ctx.marketChart.chart)("stroke", ctx.marketChart.stroke)("dataLabels", ctx.marketChart.dataLabels)("colors", ctx.marketChart.colors)("grid", ctx.marketChart.grid)("plotOptions", ctx.marketChart.plotOptions)("fill", ctx.marketChart.fill)("labels", ctx.marketChart.labels)("markers", ctx.marketChart.markers)("yaxis", ctx.marketChart.yaxis)("xaxis", ctx.marketChart.xaxis)("tooltip", ctx.marketChart.tooltip)("legend", ctx.marketChart.legend);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 43505:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/dashboard/crypto/crypto-middle-content/sell-coins/sell-coins.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SellCoinsComponent: () => (/* binding */ SellCoinsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);


class SellCoinsComponent {
  constructor() {
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function SellCoinsComponent_Factory(t) {
    return new (t || SellCoinsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SellCoinsComponent,
    selectors: [["app-sell-coins"]],
    decls: 47,
    vars: 2,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "header-top", "gap-1"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "icon-more-alt"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "theme-form", "crypto-form"], [1, "mb-3"], ["for", "crypto-coin", 1, "form-label", "f-light"], [1, "position-relative"], ["id", "crypto-coin", "type", "number", "placeholder", "100", 1, "form-control"], [1, "form-select", "crypto-select", "warning"], ["for", "bitcoin", 1, "form-label", "f-light"], ["id", "bitcoin", "type", "number", "placeholder", "0.0043", 1, "form-control"], [1, "form-select", "crypto-select", "primary"], ["type", "button", 1, "btn", "btn-primary", "btn-hover-effect", "w-100"]],
    template: function SellCoinsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sell Coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SellCoinsComponent_Template_button_click_6_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8)(16, "form", 9)(17, "div", 10)(18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Enter Crypto Coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 14)(23, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "BTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "LTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "ETH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10)(32, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Enter Money Converted to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 17)(37, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "LTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "BTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "ETH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sell Coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 28738:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/dashboard/crypto/crypto-right-content/activities/activities.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivitiesComponent: () => (/* binding */ ActivitiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);


function ActivitiesComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 15)(4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 18)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("To : ", item_r1.to, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("font-", item_r1.className, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.count2);
  }
}
class ActivitiesComponent {
  constructor() {
    this.show = false;
    this.activities = [{
      profile: "assets/images/dashboard/user/3.jpg",
      name: "Anna K.",
      to: "0x187...12bb",
      count: "+0.3BNB",
      count2: "29.09.22",
      className: "success"
    }, {
      profile: "assets/images/dashboard/user/12.jpg",
      name: "	Guy Hawkins",
      to: "0x187...12bb",
      count: "-0.3BNB",
      count2: "29.09.22",
      className: "danger"
    }, {
      profile: "assets/images/dashboard/user/10.jpg",
      name: "Jenny Wilson",
      to: "0x187...12bb",
      count: "+0.4ANB",
      count2: "29.09.22",
      className: "success"
    }, {
      profile: "assets/images/dashboard/user/11.jpg",
      name: "Jacob B.",
      to: "0x187...12bb",
      count: "-0.1ANA",
      count2: "29.09.22",
      className: "danger"
    }, {
      profile: "assets/images/dashboard/user/13.jpg",
      name: "Esther Howard",
      to: "0x187...12bb",
      count: "+0.5BNV",
      count2: "29.09.22",
      className: "success"
    }, {
      profile: "assets/images/dashboard/user/5.jpg",
      name: "Leslie Alexander",
      to: "0x187...12bb",
      count: "+0.3BNB",
      count2: "29.09.22",
      className: "success"
    }];
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function ActivitiesComponent_Factory(t) {
    return new (t || ActivitiesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ActivitiesComponent,
    selectors: [["app-activities"]],
    decls: 21,
    vars: 3,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "m-0"], [1, "card-header-right-icon"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "icon-more-alt"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0", "activity-card"], [1, "appointment-table", "customer-table", "table-responsive"], [1, "table", "table-bordernone"], [4, "ngFor", "ngForOf"], ["alt", "user", 1, "img-fluid", "img-40", "rounded-circle", "me-2", 3, "src"], [1, "img-content-box"], ["href", "user-profile.html", 1, "d-block", "f-w-500"], [1, "f-light"], [1, "text-end"], [1, "d-block", "f-light"]],
    template: function ActivitiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivitiesComponent_Template_button_click_7_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10)(17, "div", 11)(18, "table", 12)(19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ActivitiesComponent_tr_20_Template, 13, 8, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activities);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 30919:
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/dashboard/crypto/crypto-right-content/balance-profile/balance-profile.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BalanceProfileComponent: () => (/* binding */ BalanceProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 49177);


class BalanceProfileComponent {
  static #_ = this.ɵfac = function BalanceProfileComponent_Factory(t) {
    return new (t || BalanceProfileComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BalanceProfileComponent,
    selectors: [["app-balance-profile"]],
    decls: 37,
    vars: 2,
    consts: [[1, "card", "balance-box"], [1, "card-body"], [1, "balance-profile"], [1, "balance-img"], ["src", "assets/images/dashboard-4/user.png", "alt", "user vector"], ["href", "user-profile.html", 1, "edit-icon"], ["href", "assets/svg/icon-sprite.svg#pencil"], [1, "f-light", "d-block"], [1, "mt-1"], [1, "balance-item", "danger"], [1, "balance-icon-wrap"], [1, "balance-icon"], [3, "icon"], [1, "f-12", "f-light"], [1, "badge", "badge-light-danger", "rounded-pill"], [1, "balance-item", "success"], [1, "badge", "badge-light-success", "rounded-pill"]],
    template: function BalanceProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Your Balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "$768,987.90");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul")(13, "li")(14, "div", 9)(15, "div", 10)(16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-feather-icons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div")(19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Investment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "78.8K");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "-11.67%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li")(26, "div", 15)(27, "div", 10)(28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "app-feather-icons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div")(31, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Cash Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "19.7K");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "+10.67%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "arrow-down-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "arrow-up-right");
      }
    },
    dependencies: [_shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 66684:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/dashboard/crypto/crypto-right-content/crypto-right-content.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CryptoRightContentComponent: () => (/* binding */ CryptoRightContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _balance_profile_balance_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance-profile/balance-profile.component */ 30919);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 77848);
/* harmony import */ var _activities_activities_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activities/activities.component */ 28738);




class CryptoRightContentComponent {
  static #_ = this.ɵfac = function CryptoRightContentComponent_Factory(t) {
    return new (t || CryptoRightContentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CryptoRightContentComponent,
    selectors: [["app-crypto-right-content"]],
    decls: 7,
    vars: 0,
    consts: [[1, "row", "box-order"], [1, "col-xxl-12", "col-sm-6", "box-col-6"], [1, "col-xxl-12", "order-xxl-0", "order-1"]],
    template: function CryptoRightContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-balance-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_balance_profile_balance_profile_component__WEBPACK_IMPORTED_MODULE_0__.BalanceProfileComponent, _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__.PortfolioComponent, _activities_activities_component__WEBPACK_IMPORTED_MODULE_2__.ActivitiesComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 77848:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/dashboard/crypto/crypto-right-content/portfolio/portfolio.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortfolioComponent: () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/data/dashboard/crypto */ 83634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class PortfolioComponent {
  constructor() {
    this.portfolio = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.portfolio;
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function PortfolioComponent_Factory(t) {
    return new (t || PortfolioComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PortfolioComponent,
    selectors: [["app-portfolio"]],
    decls: 98,
    vars: 9,
    consts: [[1, "card", "portfolio-card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "m-0"], [1, "card-header-right-icon"], [1, "dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body"], [1, "row"], [1, "col-xxl-12", "col-xl-7", "col-sm-6", "box-col-6"], [1, "portfolio-chart-container"], ["id", "portfolio-chart"], [3, "series", "chart", "plotOptions", "colors", "labels", "fill", "responsive"], [1, "col-xxl-12", "col-xl-5", "col-sm-6", "box-col-6"], [1, "portfolio-table", "recent-table", "table-responsive"], [1, "table"], [1, "d-flex", "align-items-center", "gap-2"], [1, "currency-icon", "warning"], ["href", "assets/svg/icon-sprite.svg#beta"], [1, "f-14", "mb-1"], [1, "d-flex", "align-items-center", "gap-1"], [1, "status", "bg-success"], [1, "f-light"], [1, "text-end"], [1, "f-14", "f-w-400", "mb-1"], [1, "font-success"], [1, "currency-icon", "success"], ["href", "assets/svg/icon-sprite.svg#ltc"], [1, "status", "bg-danger"], [1, "font-danger"], [1, "currency-icon", "primary"], ["href", "assets/svg/icon-sprite.svg#eth"], [1, "currency-icon", "light-blue"], ["href", "assets/svg/icon-sprite.svg#dash"]],
    template: function PortfolioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "My Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PortfolioComponent_Template_button_click_7_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "BTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "ETH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "LTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "apx-chart", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15)(23, "div", 16)(24, "table", 17)(25, "tbody")(26, "tr")(27, "td")(28, "div", 18)(29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "use", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div")(33, "h6", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Bitcoin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "BTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td", 25)(40, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "BTC 0.00876543");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "$14,987.13");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "tr")(45, "td")(46, "div", 18)(47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "use", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div")(51, "h6", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Ethereum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "ETH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "td", 25)(58, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "ETC 1.60876543");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "$49,987.13");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "tr")(63, "td")(64, "div", 18)(65, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "use", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div")(69, "h6", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Litecoin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "LTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td", 25)(76, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "LTC 1.60876543");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "$35,571.25");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "tr")(81, "td")(82, "div", 18)(83, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "use", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div")(87, "h6", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Dash");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "DSH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "td", 25)(94, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "DSH 1.80741510");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "$17,047.30");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.portfolio.series)("chart", ctx.portfolio.chart)("plotOptions", ctx.portfolio.plotOptions)("colors", ctx.portfolio.colors)("labels", ctx.portfolio.labels)("fill", ctx.portfolio.fill)("responsive", ctx.portfolio.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 99301:
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/crypto/crypto.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CryptoComponent: () => (/* binding */ CryptoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _crypto_left_content_crypto_left_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crypto-left-content/crypto-left-content.component */ 13284);
/* harmony import */ var _crypto_middle_content_crypto_middle_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crypto-middle-content/crypto-middle-content.component */ 7994);
/* harmony import */ var _crypto_right_content_crypto_right_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crypto-right-content/crypto-right-content.component */ 66684);





const _c0 = function () {
  return ["Dashboard"];
};
class CryptoComponent {
  static #_ = this.ɵfac = function CryptoComponent_Factory(t) {
    return new (t || CryptoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CryptoComponent,
    selectors: [["app-crypto"]],
    decls: 9,
    vars: 4,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xxl-3", "col-xl-4", "box-col-4"], [1, "col-xxl-6", "col-xl-8", "box-col-8e"], [1, "col-xxl-3", "box-col-12"]],
    template: function CryptoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-crypto-left-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-crypto-middle-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-crypto-right-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Crypto")("items", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("active_item", "Crypto");
      }
    },
    dependencies: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _crypto_left_content_crypto_left_content_component__WEBPACK_IMPORTED_MODULE_1__.CryptoLeftContentComponent, _crypto_middle_content_crypto_middle_content_component__WEBPACK_IMPORTED_MODULE_2__.CryptoMiddleContentComponent, _crypto_right_content_crypto_right_content_component__WEBPACK_IMPORTED_MODULE_3__.CryptoRightContentComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 40509:
/*!******************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRoutingModule: () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default/default.component */ 19090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: "",
  children: [{
    path: "",
    component: _default_default_component__WEBPACK_IMPORTED_MODULE_0__.DefaultComponent
  }
  // {
  //   path: "ecommerce",
  //   component: EcommerceComponent,
  // },
  // {
  //   path: "online-course",
  //   component: OnlineCourseComponent,
  // },
  // {
  //   path: "crypto",
  //   component: CryptoComponent,
  // },
  // {
  //   path: "social",
  //   component: SocialComponent,
  // },
  ]
}];

class DashboardRoutingModule {
  static #_ = this.ɵfac = function DashboardRoutingModule_Factory(t) {
    return new (t || DashboardRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DashboardRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 51010:
/*!**********************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ng-chartist */ 83568);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ng2-charts */ 46673);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ng-apexcharts */ 57854);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 56208);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-routing.module */ 40509);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/google-maps */ 68684);
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default/default.component */ 19090);
/* harmony import */ var _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ecommerce/ecommerce.component */ 32719);
/* harmony import */ var _default_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default/welcome/welcome.component */ 38281);
/* harmony import */ var _default_status_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default/status/status.component */ 20278);
/* harmony import */ var _default_overall_balance_overall_balance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default/overall-balance/overall-balance.component */ 16790);
/* harmony import */ var _default_recent_orders_recent_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default/recent-orders/recent-orders.component */ 50085);
/* harmony import */ var _default_activity_activity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default/activity/activity.component */ 69480);
/* harmony import */ var _default_recent_sales_recent_sales_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./default/recent-sales/recent-sales.component */ 50835);
/* harmony import */ var _default_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./default/timeline/timeline.component */ 45294);
/* harmony import */ var _default_purchase_account_purchase_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./default/purchase-account/purchase-account.component */ 49653);
/* harmony import */ var _default_total_users_total_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./default/total-users/total-users.component */ 92548);
/* harmony import */ var _default_followers_growth_followers_growth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./default/followers-growth/followers-growth.component */ 51844);
/* harmony import */ var _default_paper_note_paper_note_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./default/paper-note/paper-note.component */ 21787);
/* harmony import */ var _default_orders_profit_orders_profit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./default/orders-profit/orders-profit.component */ 17441);
/* harmony import */ var _default_orders_profit_orders_orders_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./default/orders-profit/orders/orders.component */ 82039);
/* harmony import */ var _default_product_status_chart_box_product_status_chart_box_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./default/product-status-chart-box/product-status-chart-box.component */ 43479);
/* harmony import */ var _ecommerce_left_content_left_content_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ecommerce/left-content/left-content.component */ 62148);
/* harmony import */ var _ecommerce_right_top_categories_right_top_categories_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ecommerce/right-top-categories/right-top-categories.component */ 25522);
/* harmony import */ var _ecommerce_left_content_order_board_order_board_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ecommerce/left-content/order-board/order-board.component */ 89873);
/* harmony import */ var _ecommerce_left_content_valuable_customer_valuable_customer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ecommerce/left-content/valuable-customer/valuable-customer.component */ 87203);
/* harmony import */ var _ecommerce_left_content_monthly_order_monthly_order_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ecommerce/left-content/monthly-order/monthly-order.component */ 61720);
/* harmony import */ var _ecommerce_left_content_monthly_profits_monthly_profits_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ecommerce/left-content/monthly-profits/monthly-profits.component */ 40336);
/* harmony import */ var _ecommerce_left_content_order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ecommerce/left-content/order-overview/order-overview.component */ 53037);
/* harmony import */ var _ecommerce_left_content_discover_pro_discover_pro_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ecommerce/left-content/discover-pro/discover-pro.component */ 62248);
/* harmony import */ var _ecommerce_left_content_visitors_visitors_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ecommerce/left-content/visitors/visitors.component */ 26410);
/* harmony import */ var _default_orders_profit_profit_profit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./default/orders-profit/profit/profit.component */ 92424);
/* harmony import */ var _ecommerce_left_content_recent_orders_table_recent_orders_table_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ecommerce/left-content/recent-orders-table/recent-orders-table.component */ 27643);
/* harmony import */ var _ecommerce_left_content_recent_orders_table_product_table_product_table_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ecommerce/left-content/recent-orders-table/product-table/product-table.component */ 69646);
/* harmony import */ var _ecommerce_left_content_order_overview_right_chart_data_right_chart_data_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ecommerce/left-content/order-overview/right-chart-data/right-chart-data.component */ 292);
/* harmony import */ var _online_course_online_course_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./online-course/online-course.component */ 28013);
/* harmony import */ var _online_course_hello_name_hello_name_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./online-course/hello-name/hello-name.component */ 61738);
/* harmony import */ var _online_course_today_progress_today_progress_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./online-course/today-progress/today-progress.component */ 64604);
/* harmony import */ var _online_course_more_details_more_details_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./online-course/more-details/more-details.component */ 90841);
/* harmony import */ var _online_course_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./online-course/calendar/calendar.component */ 74586);
/* harmony import */ var _online_course_learning_overview_learning_overview_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./online-course/learning-overview/learning-overview.component */ 3388);
/* harmony import */ var _online_course_activity_hours_activity_hours_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./online-course/activity-hours/activity-hours.component */ 62595);
/* harmony import */ var _online_course_upcoming_events_upcoming_events_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./online-course/upcoming-events/upcoming-events.component */ 66033);
/* harmony import */ var _online_course_upcoming_schedule_upcoming_schedule_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./online-course/upcoming-schedule/upcoming-schedule.component */ 11406);
/* harmony import */ var _online_course_my_course_my_course_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./online-course/my-course/my-course.component */ 51736);
/* harmony import */ var _online_course_active_lessons_active_lessons_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./online-course/active-lessons/active-lessons.component */ 52437);
/* harmony import */ var _crypto_crypto_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./crypto/crypto.component */ 99301);
/* harmony import */ var _crypto_crypto_left_content_crypto_left_content_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./crypto/crypto-left-content/crypto-left-content.component */ 13284);
/* harmony import */ var _crypto_crypto_middle_content_crypto_middle_content_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./crypto/crypto-middle-content/crypto-middle-content.component */ 7994);
/* harmony import */ var _crypto_crypto_right_content_crypto_right_content_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./crypto/crypto-right-content/crypto-right-content.component */ 66684);
/* harmony import */ var _crypto_crypto_left_content_average_average_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./crypto/crypto-left-content/average/average.component */ 4678);
/* harmony import */ var _crypto_crypto_left_content_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./crypto/crypto-left-content/transactions/transactions.component */ 31062);
/* harmony import */ var _crypto_crypto_middle_content_coin_coin_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./crypto/crypto-middle-content/coin/coin.component */ 58956);
/* harmony import */ var _crypto_crypto_middle_content_market_graph_market_graph_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./crypto/crypto-middle-content/market-graph/market-graph.component */ 53606);
/* harmony import */ var _crypto_crypto_middle_content_currencies_currencies_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./crypto/crypto-middle-content/currencies/currencies.component */ 64937);
/* harmony import */ var _crypto_crypto_middle_content_buy_coins_buy_coins_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./crypto/crypto-middle-content/buy-coins/buy-coins.component */ 18139);
/* harmony import */ var _crypto_crypto_middle_content_sell_coins_sell_coins_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./crypto/crypto-middle-content/sell-coins/sell-coins.component */ 43505);
/* harmony import */ var _crypto_crypto_right_content_balance_profile_balance_profile_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./crypto/crypto-right-content/balance-profile/balance-profile.component */ 30919);
/* harmony import */ var _crypto_crypto_right_content_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./crypto/crypto-right-content/portfolio/portfolio.component */ 77848);
/* harmony import */ var _crypto_crypto_right_content_activities_activities_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./crypto/crypto-right-content/activities/activities.component */ 28738);
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./social/social.component */ 53512);
/* harmony import */ var _social_social_user_profile_social_user_profile_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./social/social-user-profile/social-user-profile.component */ 45406);
/* harmony import */ var _social_mobile_application_mobile_application_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./social/mobile-application/mobile-application.component */ 68111);
/* harmony import */ var _social_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./social/social-media/social-media.component */ 15211);
/* harmony import */ var _social_social_media_social_media_chart_social_media_chart_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./social/social-media/social-media-chart/social-media-chart.component */ 11221);
/* harmony import */ var _social_social_media_subscribers_subscribers_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./social/social-media/subscribers/subscribers.component */ 24446);
/* harmony import */ var _social_social_media_clicks_charts_clicks_charts_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./social/social-media/clicks-charts/clicks-charts.component */ 57169);
/* harmony import */ var _social_follower_gender_follower_gender_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./social/follower-gender/follower-gender.component */ 7204);
/* harmony import */ var _social_campaign_campaign_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./social/campaign/campaign.component */ 85525);
/* harmony import */ var _social_all_campaigns_all_campaigns_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./social/all-campaigns/all-campaigns.component */ 35697);
/* harmony import */ var _social_views_views_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./social/views/views.component */ 70897);
/* harmony import */ var _online_course_hello_name_courses_courses_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./online-course/hello-name/courses/courses.component */ 67540);
/* harmony import */ var _ecommerce_left_content_order_board_sale_status_sale_status_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./ecommerce/left-content/order-board/sale-status/sale-status.component */ 32235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/core */ 61699);














































































class DashboardModule {
  static #_ = this.ɵfac = function DashboardModule_Factory(t) {
    return new (t || DashboardModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_69__["ɵɵdefineNgModule"]({
    type: DashboardModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_69__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_70__.CommonModule, ng_chartist__WEBPACK_IMPORTED_MODULE_71__.ChartistModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_72__.CarouselModule, ng2_charts__WEBPACK_IMPORTED_MODULE_73__.NgChartsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_74__.NgApexchartsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_75__.GoogleMapsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_76__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_77__.FormsModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_69__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_default_default_component__WEBPACK_IMPORTED_MODULE_2__.DefaultComponent, _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_3__.EcommerceComponent, _default_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__.WelcomeComponent, _default_status_status_component__WEBPACK_IMPORTED_MODULE_5__.StatusComponent, _default_overall_balance_overall_balance_component__WEBPACK_IMPORTED_MODULE_6__.OverallBalanceComponent, _default_recent_orders_recent_orders_component__WEBPACK_IMPORTED_MODULE_7__.RecentOrdersComponent, _default_activity_activity_component__WEBPACK_IMPORTED_MODULE_8__.ActivityComponent, _default_recent_sales_recent_sales_component__WEBPACK_IMPORTED_MODULE_9__.RecentSalesComponent, _default_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__.TimelineComponent, _default_purchase_account_purchase_account_component__WEBPACK_IMPORTED_MODULE_11__.PurchaseAccountComponent, _default_total_users_total_users_component__WEBPACK_IMPORTED_MODULE_12__.TotalUsersComponent, _default_followers_growth_followers_growth_component__WEBPACK_IMPORTED_MODULE_13__.FollowersGrowthComponent, _default_paper_note_paper_note_component__WEBPACK_IMPORTED_MODULE_14__.PaperNoteComponent, _default_orders_profit_orders_profit_component__WEBPACK_IMPORTED_MODULE_15__.OrdersProfitComponent, _default_orders_profit_profit_profit_component__WEBPACK_IMPORTED_MODULE_27__.ProfitComponent, _default_orders_profit_orders_orders_component__WEBPACK_IMPORTED_MODULE_16__.OrdersComponent, _default_product_status_chart_box_product_status_chart_box_component__WEBPACK_IMPORTED_MODULE_17__.ProductStatusChartBoxComponent, _ecommerce_left_content_left_content_component__WEBPACK_IMPORTED_MODULE_18__.LeftContentComponent, _ecommerce_right_top_categories_right_top_categories_component__WEBPACK_IMPORTED_MODULE_19__.RightTopCategoriesComponent, _ecommerce_left_content_order_board_order_board_component__WEBPACK_IMPORTED_MODULE_20__.OrderBoardComponent, _ecommerce_left_content_valuable_customer_valuable_customer_component__WEBPACK_IMPORTED_MODULE_21__.ValuableCustomerComponent, _ecommerce_left_content_monthly_order_monthly_order_component__WEBPACK_IMPORTED_MODULE_22__.MonthlyOrderComponent, _ecommerce_left_content_monthly_profits_monthly_profits_component__WEBPACK_IMPORTED_MODULE_23__.MonthlyProfitsComponent, _ecommerce_left_content_order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_24__.OrderOverviewComponent, _ecommerce_left_content_discover_pro_discover_pro_component__WEBPACK_IMPORTED_MODULE_25__.DiscoverProComponent, _ecommerce_left_content_visitors_visitors_component__WEBPACK_IMPORTED_MODULE_26__.VisitorsComponent, _ecommerce_left_content_recent_orders_table_recent_orders_table_component__WEBPACK_IMPORTED_MODULE_28__.RecentOrdersTableComponent, _ecommerce_left_content_recent_orders_table_product_table_product_table_component__WEBPACK_IMPORTED_MODULE_29__.ProductTableComponent, _ecommerce_left_content_order_overview_right_chart_data_right_chart_data_component__WEBPACK_IMPORTED_MODULE_30__.RightChartDataComponent, _online_course_online_course_component__WEBPACK_IMPORTED_MODULE_31__.OnlineCourseComponent, _online_course_hello_name_hello_name_component__WEBPACK_IMPORTED_MODULE_32__.HelloNameComponent, _online_course_today_progress_today_progress_component__WEBPACK_IMPORTED_MODULE_33__.TodayProgressComponent, _online_course_more_details_more_details_component__WEBPACK_IMPORTED_MODULE_34__.MoreDetailsComponent, _online_course_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_35__.CalendarComponent, _online_course_learning_overview_learning_overview_component__WEBPACK_IMPORTED_MODULE_36__.LearningOverviewComponent, _online_course_activity_hours_activity_hours_component__WEBPACK_IMPORTED_MODULE_37__.ActivityHoursComponent, _online_course_upcoming_events_upcoming_events_component__WEBPACK_IMPORTED_MODULE_38__.UpcomingEventsComponent, _online_course_upcoming_schedule_upcoming_schedule_component__WEBPACK_IMPORTED_MODULE_39__.UpcomingScheduleComponent, _online_course_my_course_my_course_component__WEBPACK_IMPORTED_MODULE_40__.MyCourseComponent, _online_course_active_lessons_active_lessons_component__WEBPACK_IMPORTED_MODULE_41__.ActiveLessonsComponent, _crypto_crypto_component__WEBPACK_IMPORTED_MODULE_42__.CryptoComponent, _crypto_crypto_left_content_crypto_left_content_component__WEBPACK_IMPORTED_MODULE_43__.CryptoLeftContentComponent, _crypto_crypto_middle_content_crypto_middle_content_component__WEBPACK_IMPORTED_MODULE_44__.CryptoMiddleContentComponent, _crypto_crypto_right_content_crypto_right_content_component__WEBPACK_IMPORTED_MODULE_45__.CryptoRightContentComponent, _crypto_crypto_left_content_average_average_component__WEBPACK_IMPORTED_MODULE_46__.AverageComponent, _crypto_crypto_left_content_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_47__.TransactionsComponent, _crypto_crypto_middle_content_coin_coin_component__WEBPACK_IMPORTED_MODULE_48__.CoinComponent, _crypto_crypto_middle_content_market_graph_market_graph_component__WEBPACK_IMPORTED_MODULE_49__.MarketGraphComponent, _crypto_crypto_middle_content_currencies_currencies_component__WEBPACK_IMPORTED_MODULE_50__.CurrenciesComponent, _crypto_crypto_middle_content_buy_coins_buy_coins_component__WEBPACK_IMPORTED_MODULE_51__.BuyCoinsComponent, _crypto_crypto_middle_content_sell_coins_sell_coins_component__WEBPACK_IMPORTED_MODULE_52__.SellCoinsComponent, _crypto_crypto_right_content_balance_profile_balance_profile_component__WEBPACK_IMPORTED_MODULE_53__.BalanceProfileComponent, _crypto_crypto_right_content_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_54__.PortfolioComponent, _crypto_crypto_right_content_activities_activities_component__WEBPACK_IMPORTED_MODULE_55__.ActivitiesComponent, _social_social_component__WEBPACK_IMPORTED_MODULE_56__.SocialComponent, _social_social_user_profile_social_user_profile_component__WEBPACK_IMPORTED_MODULE_57__.SocialUserProfileComponent, _social_mobile_application_mobile_application_component__WEBPACK_IMPORTED_MODULE_58__.MobileApplicationComponent, _social_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_59__.SocialMediaComponent, _social_social_media_social_media_chart_social_media_chart_component__WEBPACK_IMPORTED_MODULE_60__.SocialMediaChartComponent, _social_social_media_subscribers_subscribers_component__WEBPACK_IMPORTED_MODULE_61__.SubscribersComponent, _social_social_media_clicks_charts_clicks_charts_component__WEBPACK_IMPORTED_MODULE_62__.ClicksChartsComponent, _social_follower_gender_follower_gender_component__WEBPACK_IMPORTED_MODULE_63__.FollowerGenderComponent, _social_campaign_campaign_component__WEBPACK_IMPORTED_MODULE_64__.CampaignComponent, _social_all_campaigns_all_campaigns_component__WEBPACK_IMPORTED_MODULE_65__.AllCampaignsComponent, _social_views_views_component__WEBPACK_IMPORTED_MODULE_66__.ViewsComponent, _online_course_hello_name_courses_courses_component__WEBPACK_IMPORTED_MODULE_67__.CoursesComponent, _ecommerce_left_content_order_board_sale_status_sale_status_component__WEBPACK_IMPORTED_MODULE_68__.SaleStatusComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_70__.CommonModule, ng_chartist__WEBPACK_IMPORTED_MODULE_71__.ChartistModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_72__.CarouselModule, ng2_charts__WEBPACK_IMPORTED_MODULE_73__.NgChartsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_74__.NgApexchartsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_75__.GoogleMapsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_76__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_77__.FormsModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule],
    exports: [_crypto_crypto_middle_content_coin_coin_component__WEBPACK_IMPORTED_MODULE_48__.CoinComponent, _default_product_status_chart_box_product_status_chart_box_component__WEBPACK_IMPORTED_MODULE_17__.ProductStatusChartBoxComponent, _online_course_hello_name_courses_courses_component__WEBPACK_IMPORTED_MODULE_67__.CoursesComponent, _social_social_media_social_media_chart_social_media_chart_component__WEBPACK_IMPORTED_MODULE_60__.SocialMediaChartComponent, _default_orders_profit_orders_orders_component__WEBPACK_IMPORTED_MODULE_16__.OrdersComponent, _default_orders_profit_profit_profit_component__WEBPACK_IMPORTED_MODULE_27__.ProfitComponent, _ecommerce_left_content_order_board_sale_status_sale_status_component__WEBPACK_IMPORTED_MODULE_68__.SaleStatusComponent, _crypto_crypto_right_content_balance_profile_balance_profile_component__WEBPACK_IMPORTED_MODULE_53__.BalanceProfileComponent, _online_course_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_35__.CalendarComponent, _crypto_crypto_left_content_average_average_component__WEBPACK_IMPORTED_MODULE_46__.AverageComponent, _default_total_users_total_users_component__WEBPACK_IMPORTED_MODULE_12__.TotalUsersComponent]
  });
})();

/***/ }),

/***/ 69480:
/*!*****************************************************************************!*\
  !*** ./src/app/components/dashboard/default/activity/activity.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityComponent: () => (/* binding */ ActivityComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);


function ActivityComponent_li_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12)(3, "p", 13)(4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("activity-dot-", item_r1.primaryDotColor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.dace);
  }
}
class ActivityComponent {
  constructor() {
    this.show = false;
    this.activity = [{
      date: "8th March, 2022",
      title: "Updated Product",
      dace: "Quisque a consequat ante sit amet magna...",
      time: "1 day ago",
      primaryDotColor: "primary"
    }, {
      date: "15th Oct, 2022",
      title: "Tello just like your product",
      dace: "Quisque a consequat ante sit amet magna...",
      time: "Today",
      primaryDotColor: "warning"
    }, {
      date: "20th Sep, 2022",
      title: "Tello just like your product",
      dace: "Quisque a consequat ante sit amet magna...",
      time: "12:00 PM",
      primaryDotColor: "secondary"
    }];
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function ActivityComponent_Factory(t) {
    return new (t || ActivityComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ActivityComponent,
    selectors: [["app-activity"]],
    decls: 19,
    vars: 3,
    consts: [[1, "card", "height-equal"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "m-0"], [1, "card-header-right-icon"], [1, "dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], ["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "d-flex"], [1, "w-100", "ms-3"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "date-content", "light-background"], [1, "dot-notification"], [1, "f-light"]],
    template: function ActivityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityComponent_Template_button_click_7_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Yesterday ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ActivityComponent_li_18_Template, 13, 7, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activity);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 19090:
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/default/default.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultComponent: () => (/* binding */ DefaultComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/dashboard/default */ 37248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ 38281);






const _c0 = function () {
  return ["Dashboard"];
};
class DefaultComponent {
  constructor(calendar) {
    this.purchase = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.purchase;
    this.salesReturn = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.salesReturn;
    this.sales = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.sales;
    this.purchaseRate = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.purchaseRate;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function DefaultComponent_Factory(t) {
    return new (t || DefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCalendar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DefaultComponent,
    selectors: [["app-default"]],
    decls: 5,
    vars: 4,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row", "widget-grid"], [1, "col-xxl-4", "col-sm-6", "box-col-6"]],
    template: function DefaultComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Service Contract System")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0))("active_item", "Default");
      }
    },
    dependencies: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__.WelcomeComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 51844:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/dashboard/default/followers-growth/followers-growth.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FollowersGrowthComponent: () => (/* binding */ FollowersGrowthComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/default */ 37248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 57854);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 49177);




class FollowersGrowthComponent {
  constructor() {
    this.followersGrowth = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.followersGrowth;
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function FollowersGrowthComponent_Factory(t) {
    return new (t || FollowersGrowthComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FollowersGrowthComponent,
    selectors: [["app-followers-growth"]],
    decls: 19,
    vars: 11,
    consts: [[1, "card", "growth-wrap"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [3, "icon"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "growth-wrapper"], ["id", "growthchart"], [3, "series", "chart", "grid", "colors", "plotOptions", "stroke", "xaxis", "yaxis"]],
    template: function FollowersGrowthComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Followers Growth");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FollowersGrowthComponent_Template_button_click_6_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-feather-icons", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "apx-chart", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.followersGrowth.series)("chart", ctx.followersGrowth.chart)("grid", ctx.followersGrowth.grid)("colors", ctx.followersGrowth.colors)("plotOptions", ctx.followersGrowth.plotOptions)("stroke", ctx.followersGrowth.stroke)("xaxis", ctx.followersGrowth.xaxis)("yaxis", ctx.followersGrowth.yaxis);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 17441:
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/default/orders-profit/orders-profit.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdersProfitComponent: () => (/* binding */ OrdersProfitComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/default */ 37248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 57854);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders/orders.component */ 82039);




class OrdersProfitComponent {
  constructor() {
    this.profit = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.profit;
  }
  static #_ = this.ɵfac = function OrdersProfitComponent_Factory(t) {
    return new (t || OrdersProfitComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: OrdersProfitComponent,
    selectors: [["app-orders-profit"]],
    decls: 14,
    vars: 10,
    consts: [[1, "row"], [1, "col-xxl-12", "col-xl-6", "box-col-12"], [1, "card", "widget-1", "widget-with-chart"], [1, "card-body"], [1, "mb-1"], [1, "f-light"], [1, "order-chart"], ["id", "orderchart"], [3, "series", "chart", "colors", "stroke", "grid", "xaxis", "yaxis", "responsive", "dataLabels", "tooltip"]],
    template: function OrdersProfitComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div")(7, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "6,90k");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6)(12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "apx-chart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.profit.series)("chart", ctx.profit.chart)("colors", ctx.profit.colors)("stroke", ctx.profit.stroke)("grid", ctx.profit.grid)("xaxis", ctx.profit.xaxis)("yaxis", ctx.profit.yaxis)("responsive", ctx.profit.responsive)("dataLabels", ctx.profit.dataLabels)("tooltip", ctx.profit.tooltip);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _orders_orders_component__WEBPACK_IMPORTED_MODULE_1__.OrdersComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 82039:
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/default/orders-profit/orders/orders.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdersComponent: () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/data/dashboard/default */ 37248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class OrdersComponent {
  constructor() {
    this.orders = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.orders;
  }
  static #_ = this.ɵfac = function OrdersComponent_Factory(t) {
    return new (t || OrdersComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OrdersComponent,
    selectors: [["app-orders"]],
    decls: 10,
    vars: 12,
    consts: [[1, "card", "widget-1", "widget-with-chart"], [1, "card-body"], [1, "mb-1"], [1, "f-light"], [1, "order-chart"], ["id", "orderchart"], [3, "series", "chart", "colors", "dataLabels", "stroke", "legend", "grid", "yaxis", "tooltip", "xaxis", "responsive", "plotOptions"]],
    template: function OrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "78.9k");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "apx-chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.orders.series)("chart", ctx.orders.chart)("colors", ctx.orders.colors)("dataLabels", ctx.orders.dataLabels)("stroke", ctx.orders.stroke)("legend", ctx.orders.legend)("grid", ctx.orders.grid)("yaxis", ctx.orders.yaxis)("tooltip", ctx.orders.tooltip)("xaxis", ctx.orders.xaxis)("responsive", ctx.orders.responsive)("plotOptions", ctx.orders.plotOptions);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 92424:
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/default/orders-profit/profit/profit.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfitComponent: () => (/* binding */ ProfitComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/data/dashboard/default */ 37248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class ProfitComponent {
  constructor() {
    this.profit = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.profit;
  }
  static #_ = this.ɵfac = function ProfitComponent_Factory(t) {
    return new (t || ProfitComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProfitComponent,
    selectors: [["app-profit"]],
    decls: 10,
    vars: 10,
    consts: [[1, "card", "widget-1", "widget-with-chart"], [1, "card-body"], [1, "mb-1"], [1, "f-light"], [1, "order-chart"], ["id", "orderchart"], [3, "series", "chart", "colors", "stroke", "grid", "xaxis", "yaxis", "responsive", "dataLabels", "tooltip"]],
    template: function ProfitComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "6,90k");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "apx-chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.profit.series)("chart", ctx.profit.chart)("colors", ctx.profit.colors)("stroke", ctx.profit.stroke)("grid", ctx.profit.grid)("xaxis", ctx.profit.xaxis)("yaxis", ctx.profit.yaxis)("responsive", ctx.profit.responsive)("dataLabels", ctx.profit.dataLabels)("tooltip", ctx.profit.tooltip);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 16790:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/dashboard/default/overall-balance/overall-balance.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverallBalanceComponent: () => (/* binding */ OverallBalanceComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/default */ 37248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 57854);




function OverallBalanceComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19)(2, "div", 20)(3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "use");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 25)(12, "div", 26)(13, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OverallBalanceComponent_ng_container_25_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.toggle(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 29)(16, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Tomorrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Yesterday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattributeInterpolate1"]("href", "assets/svg/icon-sprite.svg#", item_r1.icon, "", null, "xlink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", item_r1.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("font-", item_r1.colorClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.growth);
  }
}
class OverallBalanceComponent {
  constructor() {
    this.overallBalance = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.overallBalance;
    this.balance = [{
      icon: "income",
      title: "Income",
      price: "$22,678",
      growth: "+$456",
      colorClass: "success"
    }, {
      icon: "expense",
      title: "Expense",
      price: "$12,057",
      growth: "+$256",
      colorClass: "danger"
    }, {
      icon: "doller-return",
      title: "Cashback",
      price: "8,475",
      growth: "",
      colorClass: "success"
    }];
  }
  ngOnInit() {}
  toggle(item) {
    item.show = !item.show;
  }
  static #_ = this.ɵfac = function OverallBalanceComponent_Factory(t) {
    return new (t || OverallBalanceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OverallBalanceComponent,
    selectors: [["app-overall-balance"]],
    decls: 26,
    vars: 15,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "card-body", "pt-0"], [1, "row", "m-0", "overall-card"], [1, "col-xl-9", "col-md-12", "col-sm-7", "p-0"], [1, "chart-right"], [1, "row"], [1, "col-xl-12"], [1, "card-body", "p-0"], [1, "balance-data"], [1, "circle", "bg-warning"], [1, "f-light", "ms-1"], [1, "circle", "bg-primary"], [1, "current-sale-container"], ["id", "chart-currently"], [3, "series", "chart", "plotOptions", "grid", "dataLabels", "stroke", "fill", "legend", "colors", "xaxis", "yaxis", "labels", "states", "responsive"], [1, "col-xl-3", "col-md-12", "col-sm-5", "p-0"], [1, "row", "g-sm-4", "g-2"], [4, "ngFor", "ngForOf"], [1, "col-xl-12", "col-md-4"], [1, "light-card", "balance-card", "widget-hover"], [1, "svg-box"], [1, "svg-fill"], [1, "f-light"], [1, "mt-1", "mb-0"], [1, "ms-auto", "text-end"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "icon-more-alt"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"]],
    template: function OverallBalanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Overall balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "ul", 9)(12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Expense");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13)(21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "apx-chart", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16)(24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, OverallBalanceComponent_ng_container_25_Template, 24, 9, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.overallBalance.series)("chart", ctx.overallBalance.chart)("plotOptions", ctx.overallBalance.plotOptions)("grid", ctx.overallBalance.grid)("dataLabels", ctx.overallBalance.dataLabels)("stroke", ctx.overallBalance.stroke)("fill", ctx.overallBalance.fill)("legend", ctx.overallBalance.legend)("colors", ctx.overallBalance.colors)("xaxis", ctx.overallBalance.xaxis)("yaxis", ctx.overallBalance.yaxis)("labels", ctx.overallBalance.labels)("states", ctx.overallBalance.states)("responsive", ctx.overallBalance.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.balance);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 21787:
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/default/paper-note/paper-note.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaperNoteComponent: () => (/* binding */ PaperNoteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class PaperNoteComponent {
  static #_ = this.ɵfac = function PaperNoteComponent_Factory(t) {
    return new (t || PaperNoteComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PaperNoteComponent,
    selectors: [["app-paper-note"]],
    decls: 58,
    vars: 0,
    consts: [[1, "card", "papernote-wrap"], [1, "card-header", "card-no-border"], [1, "header-top"], ["href", "#", 1, "f-light", "d-flex", "align-items-center"], [1, "f-w-700", "icon-arrow-top-right"], [1, "card-body", "pt-0"], ["src", "assets/images/dashboard/papernote.jpg", "alt", "multicolor background", 1, "banner-img", "img-fluid"], [1, "note-content", "mt-sm-4", "mt-2"], [1, "note-labels"], [1, "badge", "badge-light-primary"], [1, "badge", "badge-light-success"], [1, "badge", "badge-light-warning"], [1, "badge", "badge-light-info"], [1, "badge", "badge-light-secondary"], [1, "badge", "badge-light-light"], [1, "last-label"], [1, "mt-sm-4", "mt-2", "user-details"], [1, "customers"], [1, "d-inline-block"], ["src", "assets/images/dashboard/user/1.jpg", "alt", "user", 1, "img-40", "rounded-circle"], ["src", "assets/images/dashboard/user/6.jpg", "alt", "user", 1, "img-40", "rounded-circle"], ["src", "assets/images/dashboard/user/7.jpg", "alt", "user", 1, "img-40", "rounded-circle"], ["src", "assets/images/dashboard/user/3.jpg", "alt", "user", 1, "img-40", "rounded-circle"], ["src", "assets/images/dashboard/user/8.jpg", "alt", "user", 1, "img-40", "rounded-circle"], [1, "light-card"], [1, "f-w-500"], [1, "d-flex", "align-items-center"], [1, "mb-0", "font-primary", "f-18", "me-1"], [1, "f-light", "f-w-500"]],
    template: function PaperNoteComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PaperNote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "ul")(15, "li")(16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SAAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li")(19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "E-Commerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li")(22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Crypto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li")(25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li")(28, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "NFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li")(31, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "+9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15)(34, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Inprogress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16)(37, "div", 17)(38, "ul")(39, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 18)(50, "div", 24)(51, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "+5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26)(54, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "$239,098");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "(Budget)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 43479:
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/dashboard/default/product-status-chart-box/product-status-chart-box.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductStatusChartBoxComponent: () => (/* binding */ ProductStatusChartBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class ProductStatusChartBoxComponent {
  constructor() {}
  static #_ = this.ɵfac = function ProductStatusChartBoxComponent_Factory(t) {
    return new (t || ProductStatusChartBoxComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProductStatusChartBoxComponent,
    selectors: [["app-product-status-chart-box"]],
    inputs: {
      data: "data"
    },
    decls: 18,
    vars: 10,
    consts: [[1, "card", "widget-1"], [1, "card-body"], [1, "widget-content"], [1, "bg-round"], [1, "svg-fill"], [1, "half-circle", "svg-fill"], ["href", "assets/svg/icon-sprite.svg#halfcircle"], [1, "f-light"], [1, "icon-arrow-up", "icon-rotate", "me-1"]],
    template: function ProductStatusChartBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div")(10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("widget-round ", ctx.data.font, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("href", "assets/svg/icon-sprite.svg#", ctx.data.icon, "", null, "xlink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.counter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("font-", ctx.data.font, " f-w-500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data.pr, "%");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 49653:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/dashboard/default/purchase-account/purchase-account.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PurchaseAccountComponent: () => (/* binding */ PurchaseAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class PurchaseAccountComponent {
  static #_ = this.ɵfac = function PurchaseAccountComponent_Factory(t) {
    return new (t || PurchaseAccountComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PurchaseAccountComponent,
    selectors: [["app-purchase-account"]],
    decls: 10,
    vars: 0,
    consts: [[1, "card", "purchase-card"], ["src", "assets/images/dashboard/purchase.png", "alt", "vector mens with leptop", 1, "img-fluid"], [1, "card-body", "pt-3"], [1, "mb-3"], ["href", "#"], ["href", "https://1.envato.market/3GVzd", "target", "_blank", 1, "purchase-btn", "btn", "btn-primary", "btn-hover-effect", "f-w-500"]],
    template: function PurchaseAccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Buy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pro Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "to Explore Primium Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Purchase Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50085:
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/default/recent-orders/recent-orders.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentOrdersComponent: () => (/* binding */ RecentOrdersComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/default */ 37248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 57854);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 49177);




class RecentOrdersComponent {
  constructor() {
    this.recentOrders = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.recentOrders;
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function RecentOrdersComponent_Factory(t) {
    return new (t || RecentOrdersComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RecentOrdersComponent,
    selectors: [["app-recent-orders"]],
    decls: 42,
    vars: 10,
    consts: [[1, "card", "height-equal"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "card-header-right-icon"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [3, "icon"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "row", "recent-wrapper"], [1, "col-xl-6"], [1, "recent-chart"], ["id", "recentchart"], [3, "series", "chart", "plotOptions", "fill", "stroke", "labels", "responsive"], [1, "order-content"], [1, "recent-circle", "bg-primary"], [1, "f-light", "f-w-500"], [1, "mt-1", "mb-0"], [1, "f-light", "f-14", "f-w-400", "ms-1"], [1, "recent-circle", "bg-info"]],
    template: function RecentOrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Recent Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecentOrdersComponent_Template_button_click_7_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-feather-icons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9)(17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "apx-chart", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 11)(23, "ul", 15)(24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div")(27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Cancelled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "2,302");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "(Last 6 Month) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div")(36, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "9,302");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "(Last 6 Month) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.recentOrders.series)("chart", ctx.recentOrders.chart)("plotOptions", ctx.recentOrders.plotOptions)("fill", ctx.recentOrders.fill)("stroke", ctx.recentOrders.stroke)("labels", ctx.recentOrders.labels)("responsive", ctx.recentOrders.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50835:
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/default/recent-sales/recent-sales.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentSalesComponent: () => (/* binding */ RecentSalesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);


function RecentSalesComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 15)(4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 18)(9, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", item_r1.sales, "");
  }
}
class RecentSalesComponent {
  constructor() {
    this.show = false;
    this.recentSalesList = [{
      profile: "assets/images/dashboard/user/1.jpg",
      name: "Jane Cooper",
      time: "10 minutes ago",
      sales: "200.00"
    }, {
      profile: "assets/images/dashboard/user/2.jpg",
      name: "Brooklyn Simmons",
      time: "19 minutes ago",
      sales: "970.00"
    }, {
      profile: "assets/images/dashboard/user/3.jpg",
      name: "Leslie Alexander",
      time: "2 hours ago",
      sales: "300.00"
    }, {
      profile: "assets/images/dashboard/user/4.jpg",
      name: "Travis Wright",
      time: "8 hours ago",
      sales: "450.00"
    }, {
      profile: "assets/images/dashboard/user/5.jpg",
      name: "Mark Green",
      time: "1 day ago",
      sales: "768.00"
    }];
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function RecentSalesComponent_Factory(t) {
    return new (t || RecentSalesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RecentSalesComponent,
    selectors: [["app-recent-sales"]],
    decls: 22,
    vars: 3,
    consts: [[1, "appointment"], [1, "card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "m-0"], [1, "card-header-right-icon"], [1, "dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "appointment-table", "table-responsive"], [1, "table", "table-bordernone"], [4, "ngFor", "ngForOf"], ["alt", "user", 1, "img-fluid", "img-40", "rounded-circle", 3, "src"], [1, "img-content-box"], ["href", "user-profile.html", 1, "d-block", "f-w-500"], [1, "f-light"], [1, "text-end"], [1, "m-0", "font-success"]],
    template: function RecentSalesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Recent Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecentSalesComponent_Template_button_click_8_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10)(18, "div", 11)(19, "table", 12)(20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RecentSalesComponent_tr_21_Template, 11, 4, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recentSalesList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 20278:
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard/default/status/status.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusComponent: () => (/* binding */ StatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class StatusComponent {
  static #_ = this.ɵfac = function StatusComponent_Factory(t) {
    return new (t || StatusComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StatusComponent,
    selectors: [["app-status"]],
    decls: 2,
    vars: 0,
    template: function StatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "status works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 45294:
/*!*****************************************************************************!*\
  !*** ./src/app/components/dashboard/default/timeline/timeline.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimelineComponent: () => (/* binding */ TimelineComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/default */ 37248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class TimelineComponent {
  constructor() {
    this.timeLine = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.timeLine;
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function TimelineComponent_Factory(t) {
    return new (t || TimelineComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TimelineComponent,
    selectors: [["app-timeline"]],
    decls: 20,
    vars: 10,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "m-0"], [1, "card-header-right-icon"], [1, "dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "schedule-container"], ["id", "schedulechart"], [3, "series", "chart", "plotOptions", "dataLabels", "xaxis", "yaxis", "grid", "responsive"]],
    template: function TimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimelineComponent_Template_button_click_7_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "div", 10)(18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "apx-chart", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.timeLine.series)("chart", ctx.timeLine.chart)("plotOptions", ctx.timeLine.plotOptions)("dataLabels", ctx.timeLine.dataLabels)("xaxis", ctx.timeLine.xaxis)("yaxis", ctx.timeLine.yaxis)("grid", ctx.timeLine.grid)("responsive", ctx.timeLine.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 92548:
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/default/total-users/total-users.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TotalUsersComponent: () => (/* binding */ TotalUsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 49177);


class TotalUsersComponent {
  constructor() {
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function TotalUsersComponent_Factory(t) {
    return new (t || TotalUsersComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TotalUsersComponent,
    selectors: [["app-total-users"]],
    decls: 39,
    vars: 3,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [3, "icon"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "user-list"], [1, "user-icon", "primary"], [1, "user-box"], ["data-feather", "user-plus", 1, "font-primary"], [1, "mb-1"], [1, "font-primary", "d-flex", "align-items-center"], [1, "icon-arrow-up", "icon-rotate", "me-1"], [1, "f-w-500"], [1, "user-icon", "success"], ["data-feather", "user-minus", 1, "font-success"], [1, "font-danger", "d-flex", "align-items-center"], [1, "icon-arrow-down", "icon-rotate", "me-1"]],
    template: function TotalUsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Total Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TotalUsersComponent_Template_button_click_6_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-feather-icons", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8)(16, "ul", 9)(17, "li")(18, "div", 10)(19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div")(22, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "178,098");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "+30.89");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li")(29, "div", 17)(30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div")(33, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "178,098");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "-08.89");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.show);
      }
    },
    dependencies: [_shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 38281:
/*!***************************************************************************!*\
  !*** ./src/app/components/dashboard/default/welcome/welcome.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomeComponent: () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class WelcomeComponent {
  static #_ = this.ɵfac = function WelcomeComponent_Factory(t) {
    return new (t || WelcomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WelcomeComponent,
    selectors: [["app-welcome"]],
    decls: 31,
    vars: 0,
    consts: [[1, "card", "profile-box"], [1, "card-body"], [1, "media"], [1, "media-body"], [1, "greeting-user"], [1, "f-w-600"], [1, "whatsnew-btn"], [1, "btn", "btn-outline-white"], [1, "clockbox"], ["id", "clock", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 600 600"], ["id", "face"], ["cx", "300", "cy", "300", "r", "253.9", 1, "circle"], ["d", "M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6", 1, "hour-marks"], ["cx", "300", "cy", "300", "r", "16.2", 1, "mid-circle"], ["id", "hour"], ["d", "M300.5 298V142", 1, "hour-hand"], ["cx", "300", "cy", "300", "r", "253.9", 1, "sizing-box"], ["id", "minute"], ["d", "M300.5 298V67", 1, "minute-hand"], ["id", "second"], ["d", "M300.5 350V55", 1, "second-hand"], ["id", "txt", 1, "badge", "f-10", "p-0"], [1, "cartoon"], ["src", "assets/images/dashboard/cartoon.svg", "alt", "vector women with leptop", 1, "img-fluid"]],
    template: function WelcomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome to SCS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Here whats happing in your account today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Whats New !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div")(13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 9)(15, "g", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "circle", 11)(17, "path", 12)(18, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 15)(21, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 18)(24, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 20)(27, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 32719:
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/ecommerce/ecommerce.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EcommerceComponent: () => (/* binding */ EcommerceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _left_content_left_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./left-content/left-content.component */ 62148);
/* harmony import */ var _right_top_categories_right_top_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./right-top-categories/right-top-categories.component */ 25522);




const _c0 = function () {
  return ["Dashboard"];
};
class EcommerceComponent {
  static #_ = this.ɵfac = function EcommerceComponent_Factory(t) {
    return new (t || EcommerceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: EcommerceComponent,
    selectors: [["app-ecommerce"]],
    decls: 7,
    vars: 4,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row", "size-column"], [1, "col-xxl-10", "col-md-12", "box-col-8", "grid-ed-12"], [1, "col-xxl-2", "col-xl-3", "col-md-4", "grid-ed-none", "box-col-4e", "d-xxl-block", "d-none"]],
    template: function EcommerceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-left-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-right-top-categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "E-Commerce Dashboard")("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0))("active_item", "E-Commerce");
      }
    },
    dependencies: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _left_content_left_content_component__WEBPACK_IMPORTED_MODULE_1__.LeftContentComponent, _right_top_categories_right_top_categories_component__WEBPACK_IMPORTED_MODULE_2__.RightTopCategoriesComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 62248:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/dashboard/ecommerce/left-content/discover-pro/discover-pro.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiscoverProComponent: () => (/* binding */ DiscoverProComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class DiscoverProComponent {
  static #_ = this.ɵfac = function DiscoverProComponent_Factory(t) {
    return new (t || DiscoverProComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DiscoverProComponent,
    selectors: [["app-discover-pro"]],
    decls: 9,
    vars: 0,
    consts: [[1, "card", "purchase-card", "discover"], ["src", "assets/images/dashboard-2/discover.png", "alt", "vector discover", 1, "img-fluid"], [1, "card-body", "pt-3"], [1, "mb-1"], [1, "f-light"], ["href", "https://1.envato.market/3GVzd", "target", "_blank", 1, "purchase-btn", "btn", "btn-hover-effect", "btn-primary", "f-w-500"]],
    template: function DiscoverProComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Discover Pro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Amet minim mollit non deserunt ullamco est sit aliqua dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Update Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 62148:
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/ecommerce/left-content/left-content.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeftContentComponent: () => (/* binding */ LeftContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _order_board_order_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-board/order-board.component */ 89873);
/* harmony import */ var _valuable_customer_valuable_customer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valuable-customer/valuable-customer.component */ 87203);
/* harmony import */ var _monthly_order_monthly_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monthly-order/monthly-order.component */ 61720);
/* harmony import */ var _monthly_profits_monthly_profits_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monthly-profits/monthly-profits.component */ 40336);
/* harmony import */ var _order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-overview/order-overview.component */ 53037);
/* harmony import */ var _discover_pro_discover_pro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover-pro/discover-pro.component */ 62248);
/* harmony import */ var _visitors_visitors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitors/visitors.component */ 26410);
/* harmony import */ var _recent_orders_table_recent_orders_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recent-orders-table/recent-orders-table.component */ 27643);









class LeftContentComponent {
  static #_ = this.ɵfac = function LeftContentComponent_Factory(t) {
    return new (t || LeftContentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: LeftContentComponent,
    selectors: [["app-left-content"]],
    decls: 17,
    vars: 0,
    consts: [[1, "row"], [1, "col-xxl-5", "col-md-7", "box-col-7"], [1, "col-xxl-3", "col-md-5", "col-sm-6", "box-col-5"], [1, "col-xxl-4", "col-sm-6", "box-col-6"], [1, "col-xxl-3", "col-md-6", "box-col-6"], [1, "col-xxl-9", "box-col-12"], [1, "col-xxl-3", "col-xl-4", "col-sm-6", "box-col-6", "wow", "zoomIn"], [1, "col-xxl-4", "col-xl-4", "col-sm-6", "box-col-6"], [1, "col-xxl-5", "col-xl-4", "box-col-12"]],
    template: function LeftContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-order-board");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-valuable-customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-monthly-order");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-monthly-profits");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "app-order-overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "app-discover-pro");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "app-visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "app-recent-orders-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_order_board_order_board_component__WEBPACK_IMPORTED_MODULE_0__.OrderBoardComponent, _valuable_customer_valuable_customer_component__WEBPACK_IMPORTED_MODULE_1__.ValuableCustomerComponent, _monthly_order_monthly_order_component__WEBPACK_IMPORTED_MODULE_2__.MonthlyOrderComponent, _monthly_profits_monthly_profits_component__WEBPACK_IMPORTED_MODULE_3__.MonthlyProfitsComponent, _order_overview_order_overview_component__WEBPACK_IMPORTED_MODULE_4__.OrderOverviewComponent, _discover_pro_discover_pro_component__WEBPACK_IMPORTED_MODULE_5__.DiscoverProComponent, _visitors_visitors_component__WEBPACK_IMPORTED_MODULE_6__.VisitorsComponent, _recent_orders_table_recent_orders_table_component__WEBPACK_IMPORTED_MODULE_7__.RecentOrdersTableComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 61720:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/dashboard/ecommerce/left-content/monthly-order/monthly-order.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthlyOrderComponent: () => (/* binding */ MonthlyOrderComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/data/dashboard/ecommerce */ 47777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 57854);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 49177);




class MonthlyOrderComponent {
  constructor() {
    this.monthlyOrderChart = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__.monthlyOrderChart;
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function MonthlyOrderComponent_Factory(t) {
    return new (t || MonthlyOrderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MonthlyOrderComponent,
    selectors: [["app-monthly-order"]],
    decls: 25,
    vars: 15,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "m-0"], [1, "card-header-right-icon"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [3, "icon"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "light-card", "balance-card", "d-inline-block"], [1, "mb-0"], [1, "f-light", "f-14"], [1, "order-wrapper"], ["id", "order-goal"], [3, "series", "chart", "colors", "fill", "dataLabels", "stroke", "grid", "xaxis", "yaxis", "legend", "tooltip", "responsive"]],
    template: function MonthlyOrderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Order this month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MonthlyOrderComponent_Template_button_click_7_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10)(17, "div", 11)(18, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "$12,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "(15,080 To Goal)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14)(23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "apx-chart", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.monthlyOrderChart.series)("chart", ctx.monthlyOrderChart.chart)("colors", ctx.monthlyOrderChart.colors)("fill", ctx.monthlyOrderChart.fill)("dataLabels", ctx.monthlyOrderChart.dataLabels)("stroke", ctx.monthlyOrderChart.stroke)("grid", ctx.monthlyOrderChart.grid)("xaxis", ctx.monthlyOrderChart.xaxis)("yaxis", ctx.monthlyOrderChart.yaxis)("legend", ctx.monthlyOrderChart.legend)("tooltip", ctx.monthlyOrderChart.tooltip)("responsive", ctx.monthlyOrderChart.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 40336:
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/dashboard/ecommerce/left-content/monthly-profits/monthly-profits.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthlyProfitsComponent: () => (/* binding */ MonthlyProfitsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/data/dashboard/ecommerce */ 47777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class MonthlyProfitsComponent {
  constructor() {
    this.monthlyProfits = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__.monthlyProfits;
  }
  static #_ = this.ɵfac = function MonthlyProfitsComponent_Factory(t) {
    return new (t || MonthlyProfitsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MonthlyProfitsComponent,
    selectors: [["app-monthly-profits"]],
    decls: 10,
    vars: 10,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "f-light", "f-w-500", "f-14"], [1, "card-body", "pt-0"], [1, "monthly-profit"], ["id", "profitmonthly"], [3, "labels", "series", "chart", "dataLabels", "legend", "stroke", "plotOptions", "states", "colors", "responsive"]],
    template: function MonthlyProfitsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Monthly Profits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "(Total profit growth of 30%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "apx-chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("labels", ctx.monthlyProfits.labels)("series", ctx.monthlyProfits.series)("chart", ctx.monthlyProfits.chart)("dataLabels", ctx.monthlyProfits.dataLabels)("legend", ctx.monthlyProfits.legend)("stroke", ctx.monthlyProfits.stroke)("plotOptions", ctx.monthlyProfits.plotOptions)("states", ctx.monthlyProfits.states)("colors", ctx.monthlyProfits.colors)("responsive", ctx.monthlyProfits.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 89873:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/dashboard/ecommerce/left-content/order-board/order-board.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderBoardComponent: () => (/* binding */ OrderBoardComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/data/dashboard/ecommerce */ 47777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _sale_status_sale_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale-status/sale-status.component */ 32235);



class OrderBoardComponent {
  constructor() {
    this.newOrders = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__.newOrders;
    this.newCustomers = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__.newCustomers;
    this.averageSale = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__.averageSale;
    this.grossProfit = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__.grossProfit;
  }
  static #_ = this.ɵfac = function OrderBoardComponent_Factory(t) {
    return new (t || OrderBoardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: OrderBoardComponent,
    selectors: [["app-order-board"]],
    decls: 29,
    vars: 4,
    consts: [[1, "row"], [1, "col-sm-12"], [1, "card", "o-hidden"], [1, "card-body", "balance-widget"], [1, "f-w-500", "f-light"], [1, "mb-3", "mt-1", "f-w-500", "mb-0", "f-22"], [1, "counter"], [1, "f-light", "f-14", "f-w-400", "ms-1"], ["href", "#", 1, "purchase-btn", "btn", "btn-primary", "btn-hover-effect", "f-w-500"], [1, "mobile-right-img"], ["src", "assets/images/dashboard-2/widget-img.png", "alt", "", 1, "left-mobile-img"], ["src", "assets/images/dashboard-2/mobile.gif", "alt", "mobile with coin", 1, "mobile-img"], [1, "col-6"], [1, "card", "small-widget"], [3, "data"]],
    template: function OrderBoardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Total Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "245,154.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "this month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Tap Up Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 10)(16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12)(18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "app-sale-status", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12)(21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "app-sale-status", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12)(24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "app-sale-status", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12)(27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "app-sale-status", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.newOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.newCustomers);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.averageSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.grossProfit);
      }
    },
    dependencies: [_sale_status_sale_status_component__WEBPACK_IMPORTED_MODULE_1__.SaleStatusComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 32235:
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/dashboard/ecommerce/left-content/order-board/sale-status/sale-status.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaleStatusComponent: () => (/* binding */ SaleStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class SaleStatusComponent {
  static #_ = this.ɵfac = function SaleStatusComponent_Factory(t) {
    return new (t || SaleStatusComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SaleStatusComponent,
    selectors: [["app-sale-status"]],
    inputs: {
      data: "data"
    },
    decls: 13,
    vars: 13,
    consts: [[1, "f-light"], [1, "d-flex", "align-items-end", "gap-1"], [1, "bg-gradient"], [1, "stroke-icon", "svg-fill"]],
    template: function SaleStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card-body ", ctx.data.colorClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("font-", ctx.data.colorClass, " f-12 f-w-500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icon-arrow-", ctx.data.arrow, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data.orderGrowth, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("href", "assets/svg/icon-sprite.svg#", ctx.data.icon, "", null, "xlink");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 53037:
/*!********************************************************************************************************!*\
  !*** ./src/app/components/dashboard/ecommerce/left-content/order-overview/order-overview.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderOverviewComponent: () => (/* binding */ OrderOverviewComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/data/dashboard/ecommerce */ 47777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 57854);
/* harmony import */ var _right_chart_data_right_chart_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right-chart-data/right-chart-data.component */ 292);




class OrderOverviewComponent {
  constructor() {
    this.orderOverview = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__.orderOverview;
    this.orderBar = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__.orderBar;
  }
  static #_ = this.ɵfac = function OrderOverviewComponent_Factory(t) {
    return new (t || OrderOverviewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: OrderOverviewComponent,
    selectors: [["app-order-overview"]],
    decls: 32,
    vars: 28,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "card-body", "pt-0"], [1, "row", "m-0", "overall-card", "overview-card"], [1, "col-xl-9", "col-md-8", "col-sm-7", "p-0", "box-col-7"], [1, "chart-right"], [1, "row"], [1, "col-xl-12"], [1, "card-body", "p-0"], [1, "balance-data"], [1, "circle", "bg-secondary"], [1, "f-light", "ms-1"], [1, "circle", "bg-primary"], [1, "circle", "bg-success"], [1, "current-sale-container", "order-container"], ["id", "orderoverview", 1, "overview-wrapper"], [3, "series", "chart", "stroke", "grid", "plotOptions", "colors", "fill", "labels", "markers", "xaxis", "tooltip", "yaxis", "responsive"], [1, "back-bar-container"], ["id", "order-bar"], [3, "series", "chart", "plotOptions", "colors", "grid", "stroke", "dataLabels", "labels", "markers", "xaxis", "tooltip", "yaxis", "fill", "states", "responsive"], [1, "col-xl-3", "col-md-4", "col-sm-5", "p-0", "box-col-5"]],
    template: function OrderOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Order Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "ul", 9)(12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Refunds");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14)(25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "apx-chart", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17)(28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "apx-chart", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "app-right-chart-data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.orderOverview.series)("chart", ctx.orderOverview.chart)("stroke", ctx.orderOverview.stroke)("grid", ctx.orderOverview.grid)("plotOptions", ctx.orderOverview.plotOptions)("colors", ctx.orderOverview.colors)("fill", ctx.orderOverview.fill)("labels", ctx.orderOverview.labels)("markers", ctx.orderOverview.markers)("xaxis", ctx.orderOverview.xaxis)("tooltip", ctx.orderOverview.tooltip)("yaxis", ctx.orderOverview.yaxis)("responsive", ctx.orderOverview.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.orderBar.series)("chart", ctx.orderBar.chart)("plotOptions", ctx.orderBar.plotOptions)("colors", ctx.orderBar.colors)("grid", ctx.orderBar.grid)("stroke", ctx.orderBar.stroke)("dataLabels", ctx.orderBar.dataLabels)("labels", ctx.orderBar.labels)("markers", ctx.orderBar.markers)("xaxis", ctx.orderBar.xaxis)("tooltip", ctx.orderBar.tooltip)("yaxis", ctx.orderBar.yaxis)("fill", ctx.orderBar.fill)("states", ctx.orderBar.fill)("responsive", ctx.orderBar.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _right_chart_data_right_chart_data_component__WEBPACK_IMPORTED_MODULE_1__.RightChartDataComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 292:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/dashboard/ecommerce/left-content/order-overview/right-chart-data/right-chart-data.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RightChartDataComponent: () => (/* binding */ RightChartDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);


function RightChartDataComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "use");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightChartDataComponent_ng_container_1_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toggle(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12)(16, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tomorrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Yesterday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("href", "assets/svg/icon-sprite.svg#", item_r1.icon, "", null, "xlink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", item_r1.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("font-", item_r1.colorClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.growth);
  }
}
class RightChartDataComponent {
  constructor() {
    this.balance = [{
      icon: "income",
      title: "Income",
      price: "$22,678",
      growth: "+$456",
      colorClass: "success"
    }, {
      icon: "expense",
      title: "Expense",
      price: "$12,057",
      growth: "+$256",
      colorClass: "danger"
    }, {
      icon: "doller-return",
      title: "Cashback",
      price: "8,475",
      growth: "",
      colorClass: "success"
    }];
  }
  ngOnInit() {}
  toggle(item) {
    item.show = !item.show;
  }
  static #_ = this.ɵfac = function RightChartDataComponent_Factory(t) {
    return new (t || RightChartDataComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RightChartDataComponent,
    selectors: [["app-right-chart-data"]],
    decls: 2,
    vars: 1,
    consts: [[1, "row", "g-sm-3", "g-2"], [4, "ngFor", "ngForOf"], [1, "col-xl-12", "col-md-4"], [1, "light-card", "balance-card", "widget-hover"], [1, "svg-box"], [1, "svg-fill"], [1, "f-light"], [1, "mt-1", "mb-0"], [1, "ms-auto", "text-end"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "icon-more-alt"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"]],
    template: function RightChartDataComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RightChartDataComponent_ng_container_1_Template, 24, 9, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.balance);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 69646:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/dashboard/ecommerce/left-content/recent-orders-table/product-table/product-table.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductTableComponent: () => (/* binding */ ProductTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class ProductTableComponent {
  static #_ = this.ɵfac = function ProductTableComponent_Factory(t) {
    return new (t || ProductTableComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProductTableComponent,
    selectors: [["app-product-table"]],
    decls: 59,
    vars: 0,
    consts: [[1, "recent-table", "table-responsive"], [1, "table"], [1, "f-light"], [1, "product-content"], [1, "order-image"], ["src", "assets/images/dashboard-2/order/sub-product/4.png", "alt", "t-shirt"], [1, "f-14", "mb-0"], ["href", "order-history.html"], [1, "f-light", "f-12"], [1, "f-w-500"], [1, "recent-status", "font-success"], [1, "me-1"], ["href", "assets/svg/icon-sprite.svg#24-hour"], ["src", "assets/images/dashboard-2/order/sub-product/3.png", "alt", "t-shirt"], [1, "recent-status", "font-danger"]],
    template: function ProductTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr")(4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Total Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody")(15, "tr")(16, "td")(17, "div", 3)(18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div")(21, "h6", 6)(22, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "T-shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Id : #CFDE-2163");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "X1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "$56.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 9)(31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "use", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Verified ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "$100.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr")(38, "td")(39, "div", 3)(40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div")(43, "h6", 6)(44, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Pink T-shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Id : #CFDE-2780");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "X2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "$156.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 9)(53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "use", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Rejected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "$870.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 27643:
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/dashboard/ecommerce/left-content/recent-orders-table/recent-orders-table.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentOrdersTableComponent: () => (/* binding */ RecentOrdersTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 49177);
/* harmony import */ var _product_table_product_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-table/product-table.component */ 69646);




const _c0 = function (a0) {
  return {
    "active show": a0
  };
};
const _c1 = function (a0) {
  return {
    "show active": a0
  };
};
class RecentOrdersTableComponent {
  constructor() {
    this.openTab = "shirt";
    this.show = false;
    this.tableData = [{
      tag: "shirt",
      image: "assets/images/dashboard-2/order/1.png"
    }, {
      tag: "television",
      image: "assets/images/dashboard-2/order/2.png"
    }, {
      tag: "headphone",
      image: "assets/images/dashboard-2/order/3.png"
    }, {
      tag: "chair",
      image: "assets/images/dashboard-2/order/4.png"
    }, {
      tag: "lamp",
      image: "assets/images/dashboard-2/order/5.png"
    }];
  }
  tabbed(value) {
    this.openTab = value;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function RecentOrdersTableComponent_Factory(t) {
    return new (t || RecentOrdersTableComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RecentOrdersTableComponent,
    selectors: [["app-recent-orders-table"]],
    decls: 45,
    vars: 33,
    consts: [[1, "card", "recent-order"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "m-0"], [1, "card-header-right-icon"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [3, "icon"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "recent-sliders"], ["id", "v-pills-tab", "role", "tablist", 1, "nav", "nav-pills"], ["type", "button", 1, "frame-box", 3, "ngClass", "click"], [1, "frame-image"], ["src", "assets/images/dashboard-2/order/1.png", "alt", "vector shirt"], ["src", "assets/images/dashboard-2/order/2.png", "alt", "vector television"], ["src", "assets/images/dashboard-2/order/3.png", "alt", "vector headphone"], ["src", "assets/images/dashboard-2/order/4.png", "alt", "vector chair"], ["src", "assets/images/dashboard-2/order/5.png", "alt", "vector lamp"], ["id", "v-pills-tabContent", 1, "tab-content"], [1, "tab-pane", "fade", "active", 3, "ngClass"], [1, "tab-pane", "fade", 3, "ngClass"]],
    template: function RecentOrdersTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Recent Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecentOrdersTableComponent_Template_button_click_7_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecentOrdersTableComponent_Template_button_click_19_listener() {
          return ctx.tabbed("shirt");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecentOrdersTableComponent_Template_button_click_22_listener() {
          return ctx.tabbed("television");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecentOrdersTableComponent_Template_button_click_25_listener() {
          return ctx.tabbed("headphone");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecentOrdersTableComponent_Template_button_click_28_listener() {
          return ctx.tabbed("chair");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecentOrdersTableComponent_Template_button_click_31_listener() {
          return ctx.tabbed("lamp");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 20)(35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "app-product-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "app-product-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "app-product-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "app-product-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "app-product-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ctx.openTab == "shirt"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c0, ctx.openTab == "television"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c0, ctx.openTab == "headphone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c0, ctx.openTab == "chair"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](21, _c0, ctx.openTab == "lamp"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c1, ctx.openTab == "shirt"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c1, ctx.openTab == "television"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](27, _c1, ctx.openTab == "headphone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](29, _c1, ctx.openTab == "chair"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](31, _c1, ctx.openTab == "lamp"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent, _product_table_product_table_component__WEBPACK_IMPORTED_MODULE_1__.ProductTableComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 87203:
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/dashboard/ecommerce/left-content/valuable-customer/valuable-customer.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValuableCustomerComponent: () => (/* binding */ ValuableCustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 49177);


class ValuableCustomerComponent {
  constructor() {
    this.show = false;
  }
  toggle() {
    this.show = this.show;
  }
  static #_ = this.ɵfac = function ValuableCustomerComponent_Factory(t) {
    return new (t || ValuableCustomerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ValuableCustomerComponent,
    selectors: [["app-valuable-customer"]],
    decls: 61,
    vars: 3,
    consts: [[1, "appointment"], [1, "card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "m-0"], [1, "card-header-right-icon"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [3, "icon"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "appointment-table", "customer-table", "table-responsive"], [1, "table", "table-bordernone"], ["src", "assets/images/dashboard/user/1.jpg", "alt", "user", 1, "img-fluid", "img-40", "rounded-circle", "me-2"], [1, "img-content-box"], ["href", "user-profile.html", 1, "f-w-500"], [1, "f-light"], ["src", "assets/images/dashboard/user/2.jpg", "alt", "user", 1, "img-fluid", "img-40", "rounded-circle", "me-2"], ["src", "assets/images/dashboard/user/9.jpg", "alt", "user", 1, "img-fluid", "img-40", "rounded-circle", "me-2"], ["src", "assets/images/dashboard/user/5.jpg", "alt", "user", 1, "img-fluid", "img-40", "rounded-circle", "me-2"], ["src", "assets/images/dashboard/user/3.jpg", "alt", "user", 1, "img-fluid", "img-40", "rounded-circle", "me-2"]],
    template: function ValuableCustomerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Valuable Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValuableCustomerComponent_Template_button_click_8_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-feather-icons", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9)(11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11)(18, "div", 12)(19, "table", 13)(20, "tbody")(21, "tr")(22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td", 15)(25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Jane Cooper");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "alma.lawson@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tr")(30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td", 15)(33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Cameron Willia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "tim.jennings@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "tr")(38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td", 15)(41, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Floyd Miles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "kenzi.lawson@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "tr")(46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td", 15)(49, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Dianne Russell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "curtis.weaver@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "tr")(54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "td", 15)(57, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Guy Hawkins");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "curtis.weaver@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.show);
      }
    },
    dependencies: [_shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 26410:
/*!********************************************************************************************!*\
  !*** ./src/app/components/dashboard/ecommerce/left-content/visitors/visitors.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisitorsComponent: () => (/* binding */ VisitorsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/data/dashboard/ecommerce */ 47777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 57854);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/feather-icons/feather-icons.component */ 49177);




class VisitorsComponent {
  constructor() {
    this.visitors = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_0__.visitors;
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function VisitorsComponent_Factory(t) {
    return new (t || VisitorsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: VisitorsComponent,
    selectors: [["app-visitors"]],
    decls: 24,
    vars: 14,
    consts: [[1, "card", "visitor-card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "m-0"], [1, "f-14", "font-primary", "f-w-500", "ms-1"], [1, "svg-fill", "me-1"], ["href", "assets/svg/icon-sprite.svg#user-visitor"], [1, "card-header-right-icon"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [3, "icon"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "visitors-container"], ["id", "visitor-chart"], [3, "series", "chart", "plotOptions", "dataLabels", "stroke", "grid", "colors", "xaxis", "fill", "legend", "responsive"]],
    template: function VisitorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "(+2.8)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitorsComponent_Template_button_click_11_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11)(14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "div", 14)(22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "apx-chart", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.visitors.series)("chart", ctx.visitors.chart)("plotOptions", ctx.visitors.plotOptions)("dataLabels", ctx.visitors.dataLabels)("stroke", ctx.visitors.stroke)("grid", ctx.visitors.grid)("colors", ctx.visitors.colors)("xaxis", ctx.visitors.xaxis)("fill", ctx.visitors.fill)("legend", ctx.visitors.legend)("responsive", ctx.visitors.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 25522:
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/dashboard/ecommerce/right-top-categories/right-top-categories.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RightTopCategoriesComponent: () => (/* binding */ RightTopCategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);


function RightTopCategoriesComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div")(4, "h6", 9)(5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", item_r2.items, ")");
  }
}
function RightTopCategoriesComponent_li_11_div_11_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const img_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r6.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function RightTopCategoriesComponent_li_11_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RightTopCategoriesComponent_li_11_div_11_li_2_Template, 3, 1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.images);
  }
}
function RightTopCategoriesComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12)(3, "p", 13)(4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RightTopCategoriesComponent_li_11_div_11_Template, 3, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("activity-dot-", item_r3.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.dace);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.images.length);
  }
}
class RightTopCategoriesComponent {
  constructor() {
    this.categories = [{
      image: "assets/images/dashboard-2/category/1.png",
      name: "Food & Drinks",
      items: "12,200"
    }, {
      image: "assets/images/dashboard-2/category/2.png",
      name: "Furniture",
      items: "7,510"
    }, {
      image: "assets/images/dashboard-2/category/3.png",
      name: "Grocery",
      items: "15,475"
    }, {
      image: "assets/images/dashboard-2/category/4.png",
      name: "Electronics",
      items: "27,840"
    }, {
      image: "assets/images/dashboard-2/category/5.png",
      name: "Toys & Games",
      items: "8,788"
    }, {
      image: "assets/images/dashboard-2/category/6.png",
      name: "Desktop",
      items: "10,673"
    }, {
      image: "assets/images/dashboard-2/category/7.png",
      name: "Food & Drinks",
      items: "12,200"
    }];
    this.recentActivity = [{
      date: "8th March, 2022 ",
      color: "primary",
      title: "Added Bew Items",
      dace: "Quisque a consequat ante sit amet magna...",
      images: [{
        img: "assets/images/dashboard-2/product/1.png"
      }, {
        img: "assets/images/dashboard-2/product/2.png"
      }, {
        img: "assets/images/dashboard-2/product/3.png"
      }]
    }, {
      date: "2nd Sep, Today",
      color: "warning",
      title: "Anamika Comments this Poducts",
      dace: "Quisque a consequat ante sit amet magna...",
      images: []
    }, {
      date: "3nd Sep, 2022",
      color: "secondary",
      title: "AdJacksion Purchase ",
      dace: "Quisque a consequat ante sit amet magna...",
      images: []
    }, {
      date: "2nd Sep, Today",
      color: "success",
      title: "Anamika Comments this Poducts",
      dace: "Quisque a consequat ante sit amet magna...",
      images: []
    }];
  }
  static #_ = this.ɵfac = function RightTopCategoriesComponent_Factory(t) {
    return new (t || RightTopCategoriesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RightTopCategoriesComponent,
    selectors: [["app-right-top-categories"]],
    decls: 12,
    vars: 2,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "card-body", "pt-0"], [1, "categories-list"], ["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "recent-activity", "notification"], [1, "d-flex"], [1, "bg-light"], ["alt", "vector burger", 3, "src"], [1, "mb-0"], ["href", "product.html"], [1, "f-light", "f-12", "f-w-500"], [1, "w-100", "ms-3"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "date-content", "light-background"], [1, "dot-notification"], [1, "f-light"], ["class", "recent-images", 4, "ngIf"], [1, "recent-images"], [4, "ngFor", "ngForOf"], [1, "recent-img-wrap"], ["alt", "chair", 3, "src"]],
    template: function RightTopCategoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Top Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RightTopCategoriesComponent_li_6_Template, 9, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Recent Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RightTopCategoriesComponent_li_11_Template, 12, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recentActivity);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 52437:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dashboard/online-course/active-lessons/active-lessons.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveLessonsComponent: () => (/* binding */ ActiveLessonsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/online-course */ 62665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 57854);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 49177);




class ActiveLessonsComponent {
  constructor() {
    this.chart1 = _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_0__.chart1;
    this.chart2 = _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_0__.chart2;
    this.chart3 = _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_0__.chart3;
    this.activeLessons = [{
      icon: "assets/images/dashboard-3/lessons/1.png",
      lessons: "UI/UX",
      title: "Web design",
      chart: "chart1"
    }, {
      icon: "assets/images/dashboard-3/lessons/2.png",
      lessons: "Vue 3",
      title: "JS Framework",
      chart: "chart2"
    }, {
      icon: "assets/images/dashboard-3/lessons/3.png",
      lessons: "Bootstrap 5",
      title: "Framework",
      chart: "chart3"
    }];
  }
  static #_ = this.ɵfac = function ActiveLessonsComponent_Factory(t) {
    return new (t || ActiveLessonsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ActiveLessonsComponent,
    selectors: [["app-active-lessons"]],
    decls: 41,
    vars: 28,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "m-0"], [1, "card-header-right-icon"], ["href", "#", 1, "link-only"], [3, "icon"], [1, "card-body", "pt-0"], [1, "lessons-lists"], ["src", "assets/images/dashboard-3/lessons/1.png", "alt", "ux icon"], [1, "f-14", "f-w-400", "mb-0"], [1, "f-light"], [1, "lesson-wrap", "ms-auto"], ["id", "lessonChart1"], [3, "series", "chart", "legend", "stroke", "dataLabels", "tooltip", "plotOptions", "colors", "states"], ["src", "assets/images/dashboard-3/lessons/2.png", "alt", "vue icon"], ["id", "lessonChart2"], ["src", "assets/images/dashboard-3/lessons/3.png", "alt", "bootstrap icon"], ["id", "lessonChart3"]],
    template: function ActiveLessonsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Active Lessons");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-feather-icons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "ul", 8)(11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div")(14, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "UI/UX");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Web design");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12)(19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "apx-chart", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div")(24, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Vue 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "JS Framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12)(29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "apx-chart", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div")(34, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Bootstrap 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 12)(39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "apx-chart", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.chart1.series)("chart", ctx.chart1.chart)("legend", ctx.chart1.legend)("stroke", ctx.chart1.stroke)("dataLabels", ctx.chart1.dataLabels)("tooltip", ctx.chart1.tooltip)("plotOptions", ctx.chart1.plotOptions)("colors", ctx.chart1.colors)("states", ctx.chart1.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.chart2.series)("chart", ctx.chart2.chart)("legend", ctx.chart2.legend)("stroke", ctx.chart2.stroke)("dataLabels", ctx.chart2.dataLabels)("tooltip", ctx.chart2.tooltip)("plotOptions", ctx.chart2.plotOptions)("colors", ctx.chart2.colors)("states", ctx.chart2.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.chart3.series)("chart", ctx.chart3.chart)("legend", ctx.chart3.legend)("stroke", ctx.chart3.stroke)("dataLabels", ctx.chart3.dataLabels)("tooltip", ctx.chart3.tooltip)("plotOptions", ctx.chart3.plotOptions)("colors", ctx.chart3.colors)("states", ctx.chart3.states);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 62595:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dashboard/online-course/activity-hours/activity-hours.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityHoursComponent: () => (/* binding */ ActivityHoursComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/online-course */ 62665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class ActivityHoursComponent {
  constructor() {
    this.activityChart = _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_0__.activityChart;
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function ActivityHoursComponent_Factory(t) {
    return new (t || ActivityHoursComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ActivityHoursComponent,
    selectors: [["app-activity-hours"]],
    decls: 54,
    vars: 12,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "dropdown", "icon-dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "dropdown-toggle", 3, "click"], [1, "icon-more-alt"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "row", "m-0", "overall-card"], [1, "col-xl-8"], [1, "chart-right"], [1, "row"], [1, "col-xl-12"], [1, "card-body", "p-0"], [1, "activity-wrap"], ["id", "activity-chart"], [3, "series", "chart", "plotOptions", "dataLabels", "xaxis", "yaxis", "grid", "colors", "fill", "responsive"], [1, "col-xl-4", "p-0"], [1, "row", "g-sm-3", "g-2", "mt-0"], [1, "col-xl-12", "col-md-6", "col-sm-4"], [1, "light-card", "balance-card"], [1, "f-light"], [1, "mt-1", "mb-0"], [1, "badge", "badge-light-success", "rounded-pill", "ms-1"]],
    template: function ActivityHoursComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Activity Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ActivityHoursComponent_Template_button_click_6_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Yesterday ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "apx-chart", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18)(26, "div", 19)(27, "div", 20)(28, "div", 21)(29, "div")(30, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Time Spent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "140%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 20)(37, "div", 21)(38, "div")(39, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Lessons taken");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "45");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "86%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 20)(46, "div", 21)(47, "div")(48, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Exams passed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "120%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.activityChart.series)("chart", ctx.activityChart.chart)("plotOptions", ctx.activityChart.plotOptions)("dataLabels", ctx.activityChart.dataLabels)("xaxis", ctx.activityChart.xaxis)("yaxis", ctx.activityChart.yaxis)("grid", ctx.activityChart.grid)("colors", ctx.activityChart.colors)("fill", ctx.activityChart.fill)("responsive", ctx.activityChart.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 74586:
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/online-course/calendar/calendar.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarComponent: () => (/* binding */ CalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);




class CalendarComponent {
  constructor(calendar) {
    this.calendar = calendar;
    this.model = calendar.getToday();
  }
  selectToday() {
    this.model = this.calendar.getToday();
  }
  static #_ = this.ɵfac = function CalendarComponent_Factory(t) {
    return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbCalendar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CalendarComponent,
    selectors: [["app-calendar"]],
    decls: 5,
    vars: 1,
    consts: [[1, "card"], [1, "card-body"], [1, "default-datepicker", "custom-datepicker"], ["data-language", "en", 1, "datepicker-here"], [3, "ngModel", "ngModelChange"]],
    template: function CalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ngb-datepicker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalendarComponent_Template_ngb_datepicker_ngModelChange_4_listener($event) {
          return ctx.model = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 67540:
/*!********************************************************************************************!*\
  !*** ./src/app/components/dashboard/online-course/hello-name/courses/courses.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoursesComponent: () => (/* binding */ CoursesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class CoursesComponent {
  static #_ = this.ɵfac = function CoursesComponent_Factory(t) {
    return new (t || CoursesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CoursesComponent,
    selectors: [["app-courses"]],
    inputs: {
      data: "data"
    },
    decls: 25,
    vars: 6,
    consts: [[1, "card", "course-box"], [1, "card-body"], [1, "course-widget"], [1, "fill-icon"], [1, "mb-0"], [1, "f-light"], ["href", "learning-list-view.html", 1, "btn", "btn-light", "f-light"], [1, "ms-2"], [1, "fill-icon", "f-light"], ["href", "assets/svg/icon-sprite.svg#arrowright"], [1, "square-group"], [1, "square-1", "warning"], [1, "square-1", "primary"], [1, "square-2", "warning1"], [1, "square-3", "danger"], [1, "square-4", "light"], [1, "square-5", "warning"], [1, "square-6", "success"], [1, "square-7", "success"]],
    template: function CoursesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "use", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "li", 11)(18, "li", 12)(19, "li", 13)(20, "li", 14)(21, "li", 15)(22, "li", 16)(23, "li", 17)(24, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("course-icon ", ctx.data.colorClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("href", "assets/svg/icon-sprite.svg#", ctx.data.icon, "", null, "xlink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data.courses, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.type);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 61738:
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/online-course/hello-name/hello-name.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelloNameComponent: () => (/* binding */ HelloNameComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/online-course */ 62665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses/courses.component */ 67540);



class HelloNameComponent {
  constructor() {
    this.completed = _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_0__.completed;
    this.progress = _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_0__.progress;
  }
  static #_ = this.ɵfac = function HelloNameComponent_Factory(t) {
    return new (t || HelloNameComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HelloNameComponent,
    selectors: [["app-hello-name"]],
    decls: 15,
    vars: 2,
    consts: [[1, "row"], [1, "col-sm-12"], [1, "card", "o-hidden", "welcome-card"], [1, "card-body"], [1, "mb-3", "mt-1", "f-w-500", "mb-0", "f-22"], ["src", "assets/images/dashboard-3/hand.svg", "alt", "hand vector"], ["src", "assets/images/dashboard-3/widget.svg", "alt", "search image", 1, "welcome-img"], [1, "col-sm-6"], [3, "data"]],
    template: function HelloNameComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Hello Jashmin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Learn something new every day with world's best courses.Free online courses available.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-courses", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "app-courses", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.progress);
      }
    },
    dependencies: [_courses_courses_component__WEBPACK_IMPORTED_MODULE_1__.CoursesComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3388:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/dashboard/online-course/learning-overview/learning-overview.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LearningOverviewComponent: () => (/* binding */ LearningOverviewComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/online-course */ 62665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class LearningOverviewComponent {
  constructor() {
    this.learningChart = _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_0__.learningChart;
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function LearningOverviewComponent_Factory(t) {
    return new (t || LearningOverviewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LearningOverviewComponent,
    selectors: [["app-learning-overview"]],
    decls: 22,
    vars: 13,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "m-0"], [1, "f-14", "f-w-500", "ms-1", "f-light"], [1, "card-header-right-icon"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "icon-more-alt"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "learning-wrap"], ["id", "learning-chart"], [3, "series", "chart", "grid", "stroke", "markers", "tooltip", "xaxis", "fill", "yaxis", "legend", "responsive"]],
    template: function LearningOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Learning Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "(75% activity growth)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningOverviewComponent_Template_button_click_9_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11)(19, "div", 12)(20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "apx-chart", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.learningChart.series)("chart", ctx.learningChart.chart)("grid", ctx.learningChart.grid)("stroke", ctx.learningChart.stroke)("markers", ctx.learningChart.markers)("tooltip", ctx.learningChart.tooltip)("xaxis", ctx.learningChart.xaxis)("fill", ctx.learningChart.fill)("yaxis", ctx.learningChart.markers)("legend", ctx.learningChart.legend)("responsive", ctx.learningChart.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 90841:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/dashboard/online-course/more-details/more-details.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoreDetailsComponent: () => (/* binding */ MoreDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class MoreDetailsComponent {
  static #_ = this.ɵfac = function MoreDetailsComponent_Factory(t) {
    return new (t || MoreDetailsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MoreDetailsComponent,
    selectors: [["app-more-details"]],
    decls: 23,
    vars: 0,
    consts: [[1, "card", "get-card", "overflow-hidden"], [1, "card-header", "card-no-border"], [1, "f-14", "f-w-500", "f-light"], ["href", "#", 1, "btn", "btn-primary", "btn-hover-effect"], [1, "ms-1"], [1, "fill-icon"], ["href", "assets/svg/icon-sprite.svg#arrowright"], [1, "card-body", "pt-0"], [1, "get-image", "text-center"], ["src", "assets/images/dashboard-3/better.png", "alt", "leptop with men vector", 1, "img-fluid"], [1, "square-group"], [1, "square-1", "warning"], [1, "square-1", "primary"], [1, "square-2", "warning1"], [1, "square-3", "danger"], [1, "square-4", "light"], [1, "square-5", "warning"], [1, "square-6", "success"], [1, "square-7", "success"]],
    template: function MoreDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Do You Want to Get");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Better Results?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "More details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "li", 11)(16, "li", 12)(17, "li", 13)(18, "li", 14)(19, "li", 15)(20, "li", 16)(21, "li", 17)(22, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 51736:
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/online-course/my-course/my-course.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyCourseComponent: () => (/* binding */ MyCourseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);


function MyCourseComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12)(2, "div", 13)(3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.courseImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.arrow, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r1.courseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.courseName);
  }
}
class MyCourseComponent {
  constructor() {
    this.show = false;
    this.course = [{
      courseImage: "assets/images/dashboard-3/course/1.svg",
      arrow: "assets/images/dashboard-3/course/back-arrow/1.png",
      courseName: "Management"
    }, {
      courseImage: "assets/images/dashboard-3/course/2.svg",
      arrow: "assets/images/dashboard-3/course/back-arrow/2.png",
      courseName: "Web Devlopment"
    }, {
      courseImage: "assets/images/dashboard-3/course/3.svg",
      arrow: "assets/images/dashboard-3/course/back-arrow/1.png",
      courseName: "Business Analytics"
    }, {
      courseImage: "assets/images/dashboard-3/course/4.svg",
      arrow: "assets/images/dashboard-3/course/back-arrow/3.png",
      courseName: "Marketing"
    }];
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function MyCourseComponent_Factory(t) {
    return new (t || MyCourseComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MyCourseComponent,
    selectors: [["app-my-course"]],
    decls: 19,
    vars: 3,
    consts: [[1, "card", "course-card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "m-0"], [1, "card-header-right-icon"], [1, "dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "course-main-card"], [4, "ngFor", "ngForOf"], [1, "course-wrapper"], [1, "course-icon-box"], [1, "icon-wrap"], ["alt", "clock vector", 3, "src"], [1, "arrow-bg", 3, "src", "alt"], [1, "f-14"]],
    template: function MyCourseComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyCourseComponent_Template_button_click_7_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Most Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MyCourseComponent_ng_container_18_Template, 8, 4, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.course);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 28013:
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/online-course/online-course.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnlineCourseComponent: () => (/* binding */ OnlineCourseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _hello_name_hello_name_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello-name/hello-name.component */ 61738);
/* harmony import */ var _today_progress_today_progress_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today-progress/today-progress.component */ 64604);
/* harmony import */ var _more_details_more_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./more-details/more-details.component */ 90841);
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar/calendar.component */ 74586);
/* harmony import */ var _learning_overview_learning_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./learning-overview/learning-overview.component */ 3388);
/* harmony import */ var _activity_hours_activity_hours_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity-hours/activity-hours.component */ 62595);
/* harmony import */ var _upcoming_events_upcoming_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upcoming-events/upcoming-events.component */ 66033);
/* harmony import */ var _upcoming_schedule_upcoming_schedule_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upcoming-schedule/upcoming-schedule.component */ 11406);
/* harmony import */ var _my_course_my_course_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-course/my-course.component */ 51736);
/* harmony import */ var _active_lessons_active_lessons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./active-lessons/active-lessons.component */ 52437);












const _c0 = function () {
  return ["Dashboard"];
};
class OnlineCourseComponent {
  constructor() {}
  static #_ = this.ɵfac = function OnlineCourseComponent_Factory(t) {
    return new (t || OnlineCourseComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: OnlineCourseComponent,
    selectors: [["app-online-course"]],
    decls: 23,
    vars: 4,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xxl-5", "col-ed-6", "col-xl-8", "box-col-7"], [1, "col-xxl-2", "col-ed-3", "col-xl-4", "col-sm-6", "box-col-5"], [1, "col-xl-2", "col-ed-3", "d-xxl-block", "d-sm-none", "box-col-none"], [1, "col-xxl-3", "col-ed-5", "col-xl-5", "col-sm-6", "box-col-5"], [1, "col-xxl-5", "col-ed-7", "col-xl-7", "box-col-7"], [1, "col-xxl-4", "col-ed-7", "col-xl-7", "col-md-6", "box-col-7"], [1, "col-xxl-3", "col-ed-5", "col-xl-5", "col-md-6", "box-col-5"], [1, "col-xxl-5", "col-ed-12", "box-col-12"], [1, "col-xxl-4", "col-ed-6", "col-md-7", "box-col-7"], [1, "col-xxl-3", "col-ed-6", "col-md-5", "col-sm-6", "box-col-5"]],
    template: function OnlineCourseComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-hello-name");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "app-today-progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "app-more-details");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "app-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "app-learning-overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "app-activity-hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "app-upcoming-events");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "app-my-course");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "app-upcoming-schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "app-active-lessons");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Online Course")("items", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](3, _c0))("active_item", "Online Course");
      }
    },
    dependencies: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _hello_name_hello_name_component__WEBPACK_IMPORTED_MODULE_1__.HelloNameComponent, _today_progress_today_progress_component__WEBPACK_IMPORTED_MODULE_2__.TodayProgressComponent, _more_details_more_details_component__WEBPACK_IMPORTED_MODULE_3__.MoreDetailsComponent, _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__.CalendarComponent, _learning_overview_learning_overview_component__WEBPACK_IMPORTED_MODULE_5__.LearningOverviewComponent, _activity_hours_activity_hours_component__WEBPACK_IMPORTED_MODULE_6__.ActivityHoursComponent, _upcoming_events_upcoming_events_component__WEBPACK_IMPORTED_MODULE_7__.UpcomingEventsComponent, _upcoming_schedule_upcoming_schedule_component__WEBPACK_IMPORTED_MODULE_8__.UpcomingScheduleComponent, _my_course_my_course_component__WEBPACK_IMPORTED_MODULE_9__.MyCourseComponent, _active_lessons_active_lessons_component__WEBPACK_IMPORTED_MODULE_10__.ActiveLessonsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 64604:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dashboard/online-course/today-progress/today-progress.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodayProgressComponent: () => (/* binding */ TodayProgressComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/online-course */ 62665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class TodayProgressComponent {
  constructor() {
    this.todayProgress = _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_0__.todayProgress;
  }
  static #_ = this.ɵfac = function TodayProgressComponent_Factory(t) {
    return new (t || TodayProgressComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TodayProgressComponent,
    selectors: [["app-today-progress"]],
    decls: 10,
    vars: 8,
    consts: [[1, "card", "get-card"], [1, "card-header", "card-no-border"], [1, "f-14", "f-w-500", "f-light"], [1, "card-body", "pt-0"], [1, "progress-chart-wrap"], ["id", "progresschart"], [3, "series", "chart", "plotOptions", "colors", "labels", "stroke", "responsive", "legend"]],
    template: function TodayProgressComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Today Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Your Daily Goal Almost Done!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "apx-chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.todayProgress.series)("chart", ctx.todayProgress.chart)("plotOptions", ctx.todayProgress.plotOptions)("colors", ctx.todayProgress.colors)("labels", ctx.todayProgress.labels)("stroke", ctx.todayProgress.stroke)("responsive", ctx.todayProgress.responsive)("legend", ctx.todayProgress.legend);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 66033:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/dashboard/online-course/upcoming-events/upcoming-events.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpcomingEventsComponent: () => (/* binding */ UpcomingEventsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/online-course */ 62665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class UpcomingEventsComponent {
  constructor() {
    this.upcomingChart = _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_0__.upcomingChart;
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function UpcomingEventsComponent_Factory(t) {
    return new (t || UpcomingEventsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UpcomingEventsComponent,
    selectors: [["app-upcoming-events"]],
    decls: 19,
    vars: 12,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "icon-more-alt"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "upcoming-event-wrap"], ["id", "upcomingchart"], [3, "series", "chart", "plotOptions", "dataLabels", "xaxis", "yaxis", "grid", "stroke", "states", "responsive"]],
    template: function UpcomingEventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Upcoming Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpcomingEventsComponent_Template_button_click_6_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Yesterday ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "apx-chart", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.upcomingChart.series)("chart", ctx.upcomingChart.chart)("plotOptions", ctx.upcomingChart.plotOptions)("dataLabels", ctx.upcomingChart.dataLabels)("xaxis", ctx.upcomingChart.xaxis)("yaxis", ctx.upcomingChart.yaxis)("grid", ctx.upcomingChart.grid)("stroke", ctx.upcomingChart.stroke)("states", ctx.upcomingChart.states)("responsive", ctx.upcomingChart.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 11406:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/dashboard/online-course/upcoming-schedule/upcoming-schedule.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpcomingScheduleComponent: () => (/* binding */ UpcomingScheduleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);


function UpcomingScheduleComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div")(4, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul")(7, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "use", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "use", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1.colorClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.courseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.time, "");
  }
}
class UpcomingScheduleComponent {
  constructor() {
    this.upcomingSchedule = [{
      image: "assets/images/dashboard/user/4.jpg",
      title: "Web Design",
      date: "January 3, 2022",
      time: "09.00 - 12.00 AM",
      colorClass: "primary"
    }, {
      image: "assets/images/dashboard/user/2.jpg",
      title: "UI/UX Design",
      date: "Febuary 10, 2022",
      time: "11.00 - 1.00 PM",
      colorClass: "warning"
    }];
  }
  static #_ = this.ɵfac = function UpcomingScheduleComponent_Factory(t) {
    return new (t || UpcomingScheduleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UpcomingScheduleComponent,
    selectors: [["app-upcoming-schedule"]],
    decls: 11,
    vars: 1,
    consts: [[1, "card", "schedule-card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "m-0"], [1, "card-header-right-icon"], ["href", "#", 1, "btn", "badge-light-primary"], [1, "card-body", "pt-0"], [1, "schedule-list"], [4, "ngFor", "ngForOf"], ["alt", "profile", 3, "src"], [1, "mb-1"], [1, "f-light"], [1, "fill-icon", "f-light"], ["href", "assets/svg/icon-sprite.svg#bag"], [1, "fill-icon", "f-success"], ["href", "assets/svg/icon-sprite.svg#clock"]],
    template: function UpcomingScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Upcoming Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "+ Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UpcomingScheduleComponent_ng_container_10_Template, 17, 7, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.upcomingSchedule);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 35697:
/*!**************************************************************************************!*\
  !*** ./src/app/components/dashboard/social/all-campaigns/all-campaigns.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllCampaignsComponent: () => (/* binding */ AllCampaignsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 49177);



function AllCampaignsComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div")(3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td")(10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-feather-icons", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td")(16, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td")(19, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("border-icon ", item_r1.colorClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fa fa-", item_r1.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", item_r1.growthArrow)("ngClass", item_r1.growthArrow == "trending-up" ? "font-success" : "font-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.growth, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", item_r1.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r1.badge == "Active" ? "badge-light-primary" : "badge-light-light disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.badge);
  }
}
class AllCampaignsComponent {
  constructor() {
    this.show = false;
    this.campaigns = [{
      colorClass: "facebook",
      icon: "facebook",
      name: "Jane Cooper",
      country: "UK",
      growth: "45.6",
      growthArrow: "trending-up",
      amount: "9,786",
      badge: "Active"
    }, {
      colorClass: "instagram",
      icon: "instagram",
      name: "Floyd Miles",
      country: "DE",
      growth: "12.3",
      growthArrow: "trending-down",
      amount: "19,7098",
      badge: "Active"
    }, {
      colorClass: "pinterest",
      icon: "pinterest",
      name: "Guy Hawkins",
      country: "ES",
      growth: "65.6",
      growthArrow: "trending-up",
      amount: "90,986",
      badge: "Active"
    }, {
      colorClass: "twitter",
      icon: "twitter",
      name: "Travis Wright",
      country: "ES",
      growth: "35.6",
      growthArrow: "trending-down",
      amount: "23,654",
      badge: "Inactive"
    }, {
      colorClass: "you-tube",
      icon: "youtube-play",
      name: "Mark Green",
      country: "UK",
      growth: "45.6",
      growthArrow: "trending-up",
      amount: "12,796",
      badge: "Inactive"
    }];
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function AllCampaignsComponent_Factory(t) {
    return new (t || AllCampaignsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AllCampaignsComponent,
    selectors: [["app-all-campaigns"]],
    decls: 37,
    vars: 3,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "m-0"], [1, "card-header-right-icon"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "icon-more-alt"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0", "campaign-table"], [1, "recent-table", "table-responsive", "currency-table"], [1, "table"], [1, "f-light"], [4, "ngFor", "ngForOf"], [1, "social-circle"], [1, "change-currency"], [1, "me-1", 3, "icon", "ngClass"], [1, "btn", 3, "ngClass"], [1, "plus-btn"]],
    template: function AllCampaignsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "All Campaigns");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AllCampaignsComponent_Template_button_click_7_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10)(17, "div", 11)(18, "table", 12)(19, "thead")(20, "tr")(21, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "AD Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "GEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Profitability");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Max Participation Avai.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, AllCampaignsComponent_tr_36_Template, 21, 14, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.campaigns);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 85525:
/*!****************************************************************************!*\
  !*** ./src/app/components/dashboard/social/campaign/campaign.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CampaignComponent: () => (/* binding */ CampaignComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class CampaignComponent {
  static #_ = this.ɵfac = function CampaignComponent_Factory(t) {
    return new (t || CampaignComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CampaignComponent,
    selectors: [["app-campaign"]],
    decls: 36,
    vars: 0,
    consts: [[1, "card", "follower-wrap"], [1, "card-header", "card-no-border"], [1, "mb-1"], [1, "d-inline-block", "badge", "badge-light-success", "rounded-pill"], [1, "card-body", "pt-0", "papernote-wrap"], [1, "campaign-list"], [1, "campaign-box"], [1, "f-light"], [1, "customers"], [1, "d-inline-block"], ["src", "assets/images/dashboard/user/1.jpg", "alt", "user", 1, "img-40", "rounded-circle"], ["src", "assets/images/dashboard/user/6.jpg", "alt", "user", 1, "img-40", "rounded-circle"], ["src", "assets/images/dashboard/user/7.jpg", "alt", "user", 1, "img-40", "rounded-circle"], ["src", "assets/images/dashboard/user/3.jpg", "alt", "user", 1, "img-40", "rounded-circle"], ["src", "assets/images/dashboard/user/8.jpg", "alt", "user", 1, "img-40", "rounded-circle"], [1, "light-card"], [1, "f-w-500"]],
    template: function CampaignComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Facebook Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "ul", 5)(8, "li")(9, "div", 6)(10, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "1,897");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Followers today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li")(15, "div", 6)(16, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "50,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Followers goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8)(21, "ul")(22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 9)(33, "div", 15)(34, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "+5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7204:
/*!******************************************************************************************!*\
  !*** ./src/app/components/dashboard/social/follower-gender/follower-gender.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FollowerGenderComponent: () => (/* binding */ FollowerGenderComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/social */ 38108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class FollowerGenderComponent {
  constructor() {
    this.followerGender = _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_0__.followerGender;
  }
  static #_ = this.ɵfac = function FollowerGenderComponent_Factory(t) {
    return new (t || FollowerGenderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FollowerGenderComponent,
    selectors: [["app-follower-gender"]],
    decls: 19,
    vars: 8,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "header-top", "gap-1"], [1, "dropdown", "icon-dropdown"], ["id", "followerdropdown", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "dropdown-toggle"], [1, "icon-more-alt"], ["aria-labelledby", "followerdropdown", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "follower-chart"], ["id", "followerchart"], [3, "series", "chart", "plotOptions", "colors", "labels", "stroke", "legend", "responsive"]],
    template: function FollowerGenderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Follower Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "apx-chart", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.followerGender.series)("chart", ctx.followerGender.chart)("plotOptions", ctx.followerGender.plotOptions)("colors", ctx.followerGender.colors)("labels", ctx.followerGender.labels)("stroke", ctx.followerGender.stroke)("legend", ctx.followerGender.legend)("responsive", ctx.followerGender.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 68111:
/*!************************************************************************************************!*\
  !*** ./src/app/components/dashboard/social/mobile-application/mobile-application.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileApplicationComponent: () => (/* binding */ MobileApplicationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class MobileApplicationComponent {
  static #_ = this.ɵfac = function MobileApplicationComponent_Factory(t) {
    return new (t || MobileApplicationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MobileApplicationComponent,
    selectors: [["app-mobile-application"]],
    decls: 11,
    vars: 0,
    consts: [[1, "card", "mobile-app-card"], [1, "card-header", "card-no-border", "pb-0"], [1, "mb-3"], [1, "f-16", "f-light"], ["type", "button", 1, "purchase-btn", "btn", "btn-primary", "btn-hover-effect", "f-w-500"], [1, "card-body", "p-0", "text-end"], ["src", "assets/images/dashboard-5/wave.png", "alt", "", 1, "wavy"], ["src", "assets/images/dashboard-5/mobile-img.png", "alt", ""]],
    template: function MobileApplicationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Have you Tried Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mobile Application?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Try Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6)(10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 57169:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/dashboard/social/social-media/clicks-charts/clicks-charts.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClicksChartsComponent: () => (/* binding */ ClicksChartsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ 57854);


class ClicksChartsComponent {
  constructor() {
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function ClicksChartsComponent_Factory(t) {
    return new (t || ClicksChartsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ClicksChartsComponent,
    selectors: [["app-clicks-charts"]],
    inputs: {
      data: "data"
    },
    decls: 23,
    vars: 20,
    consts: [[1, "card", "click-widgets", "widget-hover"], [1, "card-body"], [1, "dropdown", "icon-dropdown", "text-end"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "icon-more-alt"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "d-flex", "justify-content-around"], [1, "click-chart"], ["id", "photo-click"], [3, "series", "chart", "dataLabels", "stroke", "grid", "tooltip", "colors", "annotations", "fill", "xaxis", "yaxis", "responsive"], [1, "mb-0"], [1, "f-light", "d-block", "my-1"]],
    template: function ClicksChartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClicksChartsComponent_Template_button_click_3_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "apx-chart", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div")(17, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.data.series)("chart", ctx.data.chart)("dataLabels", ctx.data.dataLabels)("stroke", ctx.data.stroke)("grid", ctx.data.grid)("tooltip", ctx.data.tooltip)("colors", ctx.data.colors)("annotations", ctx.data.annotations)("fill", ctx.data.fill)("xaxis", ctx.data.xaxis)("yaxis", ctx.data.yaxis)("responsive", ctx.data.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("%", ctx.data.clickParsonage, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.clicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("font-", ctx.data.colorClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.growth);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 11221:
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/dashboard/social/social-media/social-media-chart/social-media-chart.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialMediaChartComponent: () => (/* binding */ SocialMediaChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ 57854);


class SocialMediaChartComponent {
  static #_ = this.ɵfac = function SocialMediaChartComponent_Factory(t) {
    return new (t || SocialMediaChartComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SocialMediaChartComponent,
    selectors: [["app-social-media-chart"]],
    inputs: {
      data: "data"
    },
    decls: 19,
    vars: 11,
    consts: [[1, "card", "social-widget", "widget-hover"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "gap-2"], [1, "social-icons"], [3, "src", "alt"], [1, "font-success", "f-12", "d-xxl-block", "d-xl-none"], [1, "social-content"], [1, "mb-1"], [1, "f-light"], [1, "social-chart"], ["id", "radial-facebook"], [3, "series", "chart", "plotOptions", "colors", "stroke", "responsive"]],
    template: function SocialMediaChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "div")(12, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10)(17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "apx-chart", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.data.socialMediaName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.socialMediaName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.growth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.followers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.data.series)("chart", ctx.data.chart)("plotOptions", ctx.data.plotOptions)("colors", ctx.data.colors)("stroke", ctx.data.stroke)("responsive", ctx.data.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 15211:
/*!************************************************************************************!*\
  !*** ./src/app/components/dashboard/social/social-media/social-media.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialMediaComponent: () => (/* binding */ SocialMediaComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/social */ 38108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _social_media_chart_social_media_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-media-chart/social-media-chart.component */ 11221);
/* harmony import */ var _subscribers_subscribers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribers/subscribers.component */ 24446);
/* harmony import */ var _clicks_charts_clicks_charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clicks-charts/clicks-charts.component */ 57169);





class SocialMediaComponent {
  constructor() {
    this.facebook = _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_0__.facebook;
    this.instagram = _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_0__.instagram;
    this.twitter = _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_0__.twitter;
    this.photoClicks = _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_0__.photoClicks;
    this.likeClicks = _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_0__.likeClicks;
  }
  static #_ = this.ɵfac = function SocialMediaComponent_Factory(t) {
    return new (t || SocialMediaComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SocialMediaComponent,
    selectors: [["app-social-media"]],
    decls: 15,
    vars: 5,
    consts: [[1, "row"], [1, "col-md-4", "col-sm-6"], [3, "data"], [1, "col-md-4"], [1, "col-md-8"], [1, "col-md-12", "col-sm-6"]],
    template: function SocialMediaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-social-media-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-social-media-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-social-media-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-subscribers");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3)(10, "div", 0)(11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-clicks-charts", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "app-clicks-charts", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.facebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.instagram);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.twitter);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.photoClicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.likeClicks);
      }
    },
    dependencies: [_social_media_chart_social_media_chart_component__WEBPACK_IMPORTED_MODULE_1__.SocialMediaChartComponent, _subscribers_subscribers_component__WEBPACK_IMPORTED_MODULE_2__.SubscribersComponent, _clicks_charts_clicks_charts_component__WEBPACK_IMPORTED_MODULE_3__.ClicksChartsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 24446:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dashboard/social/social-media/subscribers/subscribers.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscribersComponent: () => (/* binding */ SubscribersComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/data/dashboard/social */ 38108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class SubscribersComponent {
  constructor() {
    this.subscriberChart = _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_0__.subscriberChart;
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function SubscribersComponent_Factory(t) {
    return new (t || SubscribersComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SubscribersComponent,
    selectors: [["app-subscribers"]],
    decls: 22,
    vars: 14,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "m-0"], [1, "f-14", "f-w-500", "ms-1", "f-light"], [1, "card-header-right-icon"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "icon-more-alt"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "subscriber-chart-container"], ["id", "subscriber-chart"], [3, "series", "chart", "grid", "colors", "stroke", "markers", "tooltip", "xaxis", "fill", "yaxis", "legend", "responsive"]],
    template: function SubscribersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Instagram Subscribers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "(75% activity growth)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubscribersComponent_Template_button_click_9_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11)(19, "div", 12)(20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "apx-chart", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.subscriberChart.series)("chart", ctx.subscriberChart.chart)("grid", ctx.subscriberChart.grid)("colors", ctx.subscriberChart.colors)("stroke", ctx.subscriberChart.stroke)("markers", ctx.subscriberChart.markers)("tooltip", ctx.subscriberChart.tooltip)("xaxis", ctx.subscriberChart.xaxis)("fill", ctx.subscriberChart.fill)("yaxis", ctx.subscriberChart.yaxis)("legend", ctx.subscriberChart.legend)("responsive", ctx.subscriberChart.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 45406:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/dashboard/social/social-user-profile/social-user-profile.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialUserProfileComponent: () => (/* binding */ SocialUserProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class SocialUserProfileComponent {
  static #_ = this.ɵfac = function SocialUserProfileComponent_Factory(t) {
    return new (t || SocialUserProfileComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SocialUserProfileComponent,
    selectors: [["app-social-user-profile"]],
    decls: 30,
    vars: 0,
    consts: [[1, "card", "social-profile"], [1, "card-body"], [1, "social-img-wrap"], [1, "social-img"], ["src", "assets/images/dashboard-5/profile.png", "alt", "profile"], [1, "edit-icon"], ["href", "assets/svg/icon-sprite.svg#profile-check"], [1, "social-details"], [1, "mb-1"], ["href", "social-app.html"], [1, "f-light"], [1, "social-follow"], [1, "mb-0"]],
    template: function SocialUserProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "h5", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Brooklyn Simmons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "@brookly.simmons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 11)(15, "li")(16, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "1,908");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li")(21, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "34.0k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "897");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 53512:
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/social/social.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialComponent: () => (/* binding */ SocialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _social_user_profile_social_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-user-profile/social-user-profile.component */ 45406);
/* harmony import */ var _mobile_application_mobile_application_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-application/mobile-application.component */ 68111);
/* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-media/social-media.component */ 15211);
/* harmony import */ var _follower_gender_follower_gender_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./follower-gender/follower-gender.component */ 7204);
/* harmony import */ var _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./campaign/campaign.component */ 85525);
/* harmony import */ var _all_campaigns_all_campaigns_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-campaigns/all-campaigns.component */ 35697);
/* harmony import */ var _views_views_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/views.component */ 70897);









const _c0 = function () {
  return ["Dashboard"];
};
class SocialComponent {
  static #_ = this.ɵfac = function SocialComponent_Factory(t) {
    return new (t || SocialComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: SocialComponent,
    selectors: [["app-social"]],
    decls: 21,
    vars: 4,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xxl-3", "col-ed-4", "col-xl-4", "box-col-4"], [1, "col-xl-12", "col-md-6"], [1, "col-xxl-6", "col-ed-8", "col-xl-8", "box-col-8e"], [1, "col-xl-3", "col-ed-none", "d-xxl-block", "d-lg-none", "box-col-none"], [1, "col-lg-12", "col-sm-6"], [1, "col-xl-7"], [1, "col-xl-5"]],
    template: function SocialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 2)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-social-user-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-mobile-application");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "app-social-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6)(12, "div", 2)(13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "app-follower-gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "app-campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "app-all-campaigns");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "app-views");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Social")("items", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c0))("active_item", "Social");
      }
    },
    dependencies: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _social_user_profile_social_user_profile_component__WEBPACK_IMPORTED_MODULE_1__.SocialUserProfileComponent, _mobile_application_mobile_application_component__WEBPACK_IMPORTED_MODULE_2__.MobileApplicationComponent, _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_3__.SocialMediaComponent, _follower_gender_follower_gender_component__WEBPACK_IMPORTED_MODULE_4__.FollowerGenderComponent, _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_5__.CampaignComponent, _all_campaigns_all_campaigns_component__WEBPACK_IMPORTED_MODULE_6__.AllCampaignsComponent, _views_views_component__WEBPACK_IMPORTED_MODULE_7__.ViewsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 70897:
/*!**********************************************************************!*\
  !*** ./src/app/components/dashboard/social/views/views.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewsComponent: () => (/* binding */ ViewsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/social */ 38108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class ViewsComponent {
  constructor() {
    this.views = _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_0__.views;
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function ViewsComponent_Factory(t) {
    return new (t || ViewsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ViewsComponent,
    selectors: [["app-views"]],
    decls: 20,
    vars: 14,
    consts: [[1, "card"], [1, "card-header", "card-no-border"], [1, "header-top"], [1, "m-0"], [1, "card-header-right-icon"], [1, "dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-0"], [1, "view-container"], ["id", "view"], [3, "series", "chart", "dataLabels", "stroke", "grid", "tooltip", "colors", "fill", "annotations", "xaxis", "yaxis", "responsive"]],
    template: function ViewsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewsComponent_Template_button_click_7_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "div", 10)(18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "apx-chart", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.views.series)("chart", ctx.views.chart)("dataLabels", ctx.views.dataLabels)("stroke", ctx.views.stroke)("grid", ctx.views.grid)("tooltip", ctx.views.tooltip)("colors", ctx.views.colors)("fill", ctx.views.fill)("annotations", ctx.views.annotations)("xaxis", ctx.views.xaxis)("yaxis", ctx.views.yaxis)("responsive", ctx.views.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 83634:
/*!*************************************************!*\
  !*** ./src/app/shared/data/dashboard/crypto.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bitcoin: () => (/* binding */ Bitcoin),
/* harmony export */   Ethereum: () => (/* binding */ Ethereum),
/* harmony export */   LeaveTravel: () => (/* binding */ LeaveTravel),
/* harmony export */   averageProfit: () => (/* binding */ averageProfit),
/* harmony export */   averageSales: () => (/* binding */ averageSales),
/* harmony export */   averageVisits: () => (/* binding */ averageVisits),
/* harmony export */   marketChart: () => (/* binding */ marketChart),
/* harmony export */   portfolio: () => (/* binding */ portfolio),
/* harmony export */   transactions: () => (/* binding */ transactions)
/* harmony export */ });
let primary_color = localStorage.getItem("primary_color") || "#7366ff";
let secondary_color = localStorage.getItem("secondary_color") || "#f73164";
let averageSales = {
  series: [70],
  chart: {
    height: 150,
    type: "radialBar",
    dropShadow: {
      enabled: true,
      top: 3,
      left: 0,
      blur: 10,
      color: ["var(--theme-deafult)"],
      opacity: 0.35
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "60%"
      },
      track: {
        strokeWidth: "45%",
        opacity: 1,
        margin: 5
      },
      dataLabels: {
        showOn: "always",
        value: {
          color: "var(--chart-text-color)",
          fontSize: "18px",
          show: true,
          offsetY: -8
        }
      }
    }
  },
  colors: ["var(--theme-deafult)"],
  stroke: {
    lineCap: "round"
  },
  responsive: [{
    breakpoint: 1500,
    options: {
      chart: {
        height: 130
      }
    }
  }],
  averageTitle: "Average Sales Per Day",
  average: "45,908",
  parsonage: "5.7",
  desc: "The point of using Lorem Ipsum",
  cardColor: "primary"
};
let averageProfit = {
  series: [80],
  chart: {
    height: 150,
    type: "radialBar",
    dropShadow: {
      enabled: true,
      top: 3,
      left: 0,
      blur: 10,
      color: ["var(--theme-secondary)"],
      opacity: 0.35
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "60%"
      },
      track: {
        strokeWidth: "45%",
        opacity: 1,
        margin: 5
      },
      dataLabels: {
        showOn: "always",
        value: {
          color: "var(--chart-text-color)",
          fontSize: "18px",
          show: true,
          offsetY: -8
        }
      }
    }
  },
  colors: ["var(--theme-secondary)"],
  stroke: {
    lineCap: "round"
  },
  responsive: [{
    breakpoint: 1500,
    options: {
      chart: {
        height: 130
      }
    }
  }],
  averageTitle: "Average Profit Per Day",
  average: "89.6",
  parsonage: "2.7",
  desc: "The point of using Lorem Ipsum",
  cardColor: "secondary"
};
let averageVisits = {
  series: [48],
  chart: {
    height: 150,
    type: "radialBar",
    dropShadow: {
      enabled: true,
      top: 3,
      left: 0,
      blur: 10,
      color: ["#54BA4A"],
      opacity: 0.35
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "60%"
      },
      track: {
        strokeWidth: "45%",
        opacity: 1,
        margin: 5
      },
      dataLabels: {
        showOn: "always",
        value: {
          color: "var(--chart-text-color)",
          fontSize: "18px",
          show: true,
          offsetY: -8
        }
      }
    }
  },
  colors: ["#54BA4A"],
  stroke: {
    lineCap: "round"
  },
  responsive: [{
    breakpoint: 1500,
    options: {
      chart: {
        height: 130
      }
    }
  }],
  averageTitle: "Average Visits Per Day",
  average: "70k",
  parsonage: "1.5",
  desc: "The point of using Lorem Ipsum",
  cardColor: "success"
};
let transactions = [{
  type: "Buy",
  coin: "BTC",
  date: "14 Mar, 2022",
  parsonage: "0.018",
  price: "236.89",
  growth: "high",
  arrow: "trending-up"
}, {
  type: "Sell",
  coin: "ETH",
  date: "28 Mar, 2022",
  parsonage: "0.018",
  price: "236.89",
  growth: "low",
  arrow: "trending-down"
}, {
  type: "Buy",
  coin: "BTC",
  date: "16 Apr, 2022",
  parsonage: "0.012",
  price: "236.89",
  growth: "high",
  arrow: "trending-up"
}, {
  type: "Sell",
  coin: "ETH",
  date: "25 Mar, 2022",
  parsonage: "0.089",
  price: "116.89",
  growth: "low",
  arrow: "trending-down"
}, {
  type: "Buy",
  coin: "BTC",
  date: "14 Mar, 2022",
  parsonage: "0.018",
  price: "236.89",
  growth: "high",
  arrow: "trending-up"
}, {
  type: "Buy",
  coin: "LTC",
  date: "25 Mar, 2022",
  parsonage: "0.089",
  price: "116.89",
  growth: "low",
  arrow: "trending-down"
}, {
  type: "Buy",
  coin: "BTC",
  date: "14 Mar, 2022",
  parsonage: "0.018",
  price: "236.89",
  growth: "high",
  arrow: "trending-up"
}, {
  type: "Sell",
  coin: "ETH",
  date: "14 Mar, 2022",
  parsonage: "0.018",
  price: "236.89",
  growth: "low",
  arrow: "trending-down"
}];
let Bitcoin = {
  series: [{
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }],
  chart: {
    width: 120,
    height: 120,
    type: "line",
    toolbar: {
      show: false
    },
    offsetY: 10,
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 6,
      left: 0,
      blur: 6,
      color: "#FFA941",
      opacity: 0.3
    }
  },
  grid: {
    show: false
  },
  colors: ["#FFA941"],
  stroke: {
    width: 2,
    curve: "smooth"
  },
  labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov"],
  markers: {
    size: 0
  },
  xaxis: {
    // type: 'datetime',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    }
  },
  legend: {
    show: false
  },
  tooltip: {
    marker: {
      show: false
    },
    x: {
      show: false
    },
    y: {
      show: false,
      labels: {
        show: false
      }
    }
  },
  responsive: [{
    breakpoint: 1790,
    options: {
      chart: {
        width: 100,
        height: 100
      }
    }
  }, {
    breakpoint: 1661,
    options: {
      chart: {
        width: "100%",
        height: 100
      }
    }
  }],
  icon: "beta",
  coinName: "Bitcoin",
  tag: "BTC",
  colorClass: "warning",
  price: "2,143",
  parsonage: "50"
};
let Ethereum = {
  series: [{
    data: [30, 25, 30, 25, 64, 40, 59, 52, 64]
  }],
  chart: {
    width: 120,
    height: 120,
    type: "line",
    toolbar: {
      show: false
    },
    offsetY: 10,
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 6,
      left: 0,
      blur: 6,
      color: "var(--theme-deafult)",
      opacity: 0.3
    }
  },
  grid: {
    show: false
  },
  colors: ["var(--theme-deafult)"],
  stroke: {
    width: 2,
    curve: "smooth"
  },
  labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep"],
  markers: {
    size: 0
  },
  xaxis: {
    // type: 'datetime',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    }
  },
  legend: {
    show: false
  },
  tooltip: {
    marker: {
      show: false
    },
    x: {
      show: false
    },
    y: {
      show: false,
      labels: {
        show: false
      }
    }
  },
  responsive: [{
    breakpoint: 1790,
    options: {
      chart: {
        width: 100,
        height: 100
      }
    }
  }, {
    breakpoint: 1661,
    options: {
      chart: {
        width: "100%",
        height: 100
      }
    }
  }],
  icon: "eth",
  coinName: "Ethereum",
  tag: "ETC",
  colorClass: "primary",
  price: "7,450",
  parsonage: "35"
};
let LeaveTravel = {
  series: [{
    data: [30, 25, 36, 30, 64, 50, 45, 62, 60, 64]
  }],
  chart: {
    width: 120,
    height: 120,
    type: "line",
    toolbar: {
      show: false
    },
    offsetY: 10,
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 6,
      left: 0,
      blur: 6,
      color: "#54BA4A",
      opacity: 0.3
    }
  },
  grid: {
    show: false
  },
  colors: ["#54BA4A"],
  stroke: {
    width: 2,
    curve: "smooth"
  },
  labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct"],
  markers: {
    size: 0
  },
  xaxis: {
    // type: 'datetime',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    }
  },
  legend: {
    show: false
  },
  tooltip: {
    marker: {
      show: false
    },
    x: {
      show: false
    },
    y: {
      show: false,
      labels: {
        show: false
      }
    }
  },
  responsive: [{
    breakpoint: 1790,
    options: {
      chart: {
        width: 100,
        height: 100
      }
    }
  }, {
    breakpoint: 1661,
    options: {
      chart: {
        width: "100%",
        height: 100
      }
    }
  }],
  icon: "ltc",
  coinName: "Leave Travel",
  tag: "LTC",
  colorClass: "success",
  price: "2,198",
  parsonage: "73"
};
let marketChart = {
  series: [{
    name: "TEAM A",
    type: "column",
    data: [4, 8, 4.5, 8, 13, 8.5, 12, 5, 7, 12]
  }, {
    name: "TEAM C",
    type: "line",
    data: [2, 3, 2, 6, 8, 12, 9, 7, 9, 7]
  }],
  chart: {
    height: 300,
    type: "line",
    stacked: false,
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: [1],
      top: 0,
      left: 0,
      blur: 15,
      color: "var(--theme-deafult)",
      opacity: 0.3
    }
  },
  stroke: {
    width: [0, 3],
    curve: "smooth"
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  colors: ["rgba(170, 175, 203, 0.2)", "var(--theme-deafult)"],
  grid: {
    borderColor: "var(--chart-border)"
  },
  plotOptions: {
    bar: {
      columnWidth: "20%"
    }
  },
  fill: {
    type: ["solid", "gradient"],
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: ["var(--theme-deafult)", "#d867ac"],
      opacityFrom: 0.8,
      opacityTo: 0.8,
      colorStops: [{
        offset: 0,
        color: "#d867ac",
        opacity: 1
      }, {
        offset: 30,
        color: "#d867ac",
        opacity: 1
      }, {
        offset: 50,
        color: "var(--theme-deafult)",
        opacity: 1
      }, {
        offset: 80,
        color: "var(--theme-deafult)",
        opacity: 1
      }, {
        offset: 100,
        color: "var(--theme-deafult)",
        opacity: 1
      }]
    }
  },
  labels: ["Sep 10", "Sep 15", "Sep 20", "Sep 25", "Sep 30", "Oct 05", "Oct 10", "Oct 15", "Oct 20", "Oct 25"],
  markers: {
    size: 0
  },
  yaxis: {
    min: 0,
    max: 20,
    tickAmount: 5,
    labels: {
      formatter: function (val) {
        return val + "k";
      },
      style: {
        fontSize: "12px",
        fontFamily: "Rubik, sans-serif",
        colors: "var(--chart-text-color)"
      }
    }
  },
  xaxis: {
    tooltip: {
      enabled: false
    },
    labels: {
      style: {
        fontSize: "10px",
        fontFamily: "Rubik, sans-serif",
        colors: "var(--chart-text-color)"
      }
    }
  },
  tooltip: {
    shared: true,
    intersect: false
  },
  legend: {
    show: false
  }
};
let portfolio = {
  series: [44, 55, 67],
  chart: {
    height: 280,
    type: "radialBar"
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        show: false
      },
      track: {
        background: "var(--chart-progress-light)",
        opacity: 0.3
      },
      hollow: {
        margin: 10,
        size: "40%",
        image: "assets/images/dashboard-4/portfolio-bg.png",
        imageWidth: 230,
        imageHeight: 230,
        imageClipped: false
      }
    }
  },
  colors: ["#54BA4A", "#FFA539", "#7366FF"],
  labels: ["USD", "BTC", "ETH"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.25,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 80, 100]
    }
  },
  responsive: [{
    breakpoint: 1500,
    options: {
      chart: {
        height: 260
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 10,
            size: "40%",
            image: "assets/images/dashboard-4/portfolio-bg.png",
            imageWidth: 190,
            imageHeight: 190,
            imageClipped: false
          }
        }
      }
    }
  }, {
    breakpoint: 1400,
    options: {
      chart: {
        height: 320
      },
      plotOptions: {
        radialBar: {
          hollow: {
            imageWidth: 260,
            imageHeight: 260
          }
        }
      }
    }
  }, {
    breakpoint: 650,
    options: {
      chart: {
        height: 280
      },
      plotOptions: {
        radialBar: {
          hollow: {
            imageWidth: 220,
            imageHeight: 220
          }
        }
      }
    }
  }]
};

/***/ }),

/***/ 37248:
/*!**************************************************!*\
  !*** ./src/app/shared/data/dashboard/default.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   followersGrowth: () => (/* binding */ followersGrowth),
/* harmony export */   orders: () => (/* binding */ orders),
/* harmony export */   overallBalance: () => (/* binding */ overallBalance),
/* harmony export */   profit: () => (/* binding */ profit),
/* harmony export */   purchase: () => (/* binding */ purchase),
/* harmony export */   purchaseRate: () => (/* binding */ purchaseRate),
/* harmony export */   recentOrders: () => (/* binding */ recentOrders),
/* harmony export */   sales: () => (/* binding */ sales),
/* harmony export */   salesReturn: () => (/* binding */ salesReturn),
/* harmony export */   timeLine: () => (/* binding */ timeLine)
/* harmony export */ });
let primary_color = localStorage.getItem("primary_color") || "#7366ff";
let secondary_color = localStorage.getItem("secondary_color") || "#f73164";
// Overall Balance
let overallBalance = {
  series: [{
    name: "Earning",
    data: [200, 200, 350, 400, 200, 250, 250, 350, 350, 500, 500, 700, 850, 700, 400, 400, 250, 250, 400, 350, 400]
  }, {
    name: "Expense",
    data: [400, 600, 700, 400, 700, 800, 800, 850, 850, 900, 900, 700, 600, 500, 800, 800, 800, 800, 400, 700, 800]
  }],
  chart: {
    type: "bar",
    height: 300,
    stacked: true,
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      top: 8,
      left: 0,
      blur: 10,
      color: "primary_color",
      opacity: 0.1
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "10px",
      borderRadius: 0
    }
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2,
    dashArray: 0,
    lineCap: "butt",
    colors: "#fff"
  },
  fill: {
    opacity: 1
  },
  legend: {
    show: false
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1
      }
    }
  },
  colors: [primary_color, "#AAAFCB"],
  yaxis: {
    tickAmount: 3,
    labels: {
      show: true,
      style: {
        fontFamily: "Rubik, sans-serif"
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  xaxis: {
    categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
    labels: {
      style: {
        fontFamily: "Rubik, sans-serif"
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  responsive: [{
    breakpoint: 1661,
    options: {
      chart: {
        height: 290
      }
    }
  }, {
    breakpoint: 767,
    options: {
      plotOptions: {
        bar: {
          columnWidth: "35px"
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    }
  }, {
    breakpoint: 481,
    options: {
      chart: {
        height: 200
      }
    }
  }, {
    breakpoint: 420,
    options: {
      chart: {
        height: 170
      },
      plotOptions: {
        bar: {
          columnWidth: "40px"
        }
      }
    }
  }]
};
// Recent Orders
let recentOrders = {
  series: [100],
  chart: {
    height: 290,
    type: "radialBar",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "60%",
        background: "var(--recent-chart-bg)",
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: "front",
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.05
        }
      },
      track: {
        background: "#F4F4F4",
        strokeWidth: "67%",
        margin: 0,
        dropShadow: {
          enabled: true,
          top: 0,
          left: 0,
          blur: 10,
          color: "#ddd",
          opacity: 1
        }
      },
      dataLabels: {
        show: true,
        name: {
          offsetY: 30,
          show: true,
          color: "#888",
          fontSize: "17px",
          fontWeight: "500",
          fontFamily: "Rubik, sans-serif"
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          offsetY: -8,
          color: "#111",
          fontSize: "36px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      opacityFrom: 1,
      opacityTo: 1,
      colorStops: [{
        offset: 0,
        color: "#7366FF",
        opacity: 1
      }, {
        offset: 20,
        color: "#3EA4F1",
        opacity: 1
      }, {
        offset: 100,
        color: "#FFFFFF",
        opacity: 1
      }]
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Total Profit"],
  responsive: [{
    breakpoint: 1840,
    options: {
      chart: {
        height: 260
      }
    }
  }, {
    breakpoint: 1700,
    options: {
      chart: {
        height: 250
      }
    }
  }, {
    breakpoint: 1660,
    options: {
      chart: {
        height: 230,
        dataLabels: {
          name: {
            fontSize: "15px"
          }
        }
      }
    }
  }, {
    breakpoint: 1561,
    options: {
      chart: {
        height: 275
      }
    }
  }, {
    breakpoint: 1400,
    options: {
      chart: {
        height: 360
      }
    }
  }, {
    breakpoint: 1361,
    options: {
      chart: {
        height: 300
      }
    }
  }, {
    breakpoint: 1200,
    options: {
      chart: {
        height: 230
      }
    }
  }, {
    breakpoint: 1007,
    options: {
      chart: {
        height: 240
      }
    }
  }, {
    breakpoint: 600,
    options: {
      chart: {
        height: 230
      }
    }
  }]
};
//Time Line
let timeLine = {
  series: [{
    data: [{
      x: "Analysis",
      y: [new Date("2022-01-01").getTime(), new Date("2022-02-30").getTime()],
      fillColor: "var(--theme-deafult)"
    }, {
      x: "Design",
      y: [new Date("2022-02-20").getTime(), new Date("2022-04-08").getTime()],
      fillColor: "#54BA4A"
    }, {
      x: "Coding",
      y: [new Date("2022-01-25").getTime(), new Date("2022-03-20").getTime()],
      fillColor: "#FFAA05"
    }, {
      x: "Testing",
      y: [new Date("2022-01-01").getTime(), new Date("2022-03-12").getTime()],
      fillColor: "#46A7FB"
    }]
  }],
  chart: {
    height: 355,
    type: "rangeBar",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      barHeight: "40%",
      dataLabels: {
        hideOverflowingLabels: false
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opts) {
      var label = opts.w.globals.labels[opts.dataPointIndex];
      // var a = moment(val[0]);
      // var b = moment(val[1]);
      // var diff = b.diff(a, "days");
      return label;
    },
    textAnchor: "end",
    offsetX: 0,
    offsetY: 0,
    background: {
      enabled: true,
      foreColor: "#52526C",
      padding: 15,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "var(--white)",
      opacity: 0.9
    }
  },
  xaxis: {
    type: "datetime",
    position: "top"
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  grid: {
    row: {
      colors: ["var(--light-background)", "var(--white)"],
      opacity: 1
    }
  },
  responsive: [{
    breakpoint: 576,
    options: {
      yaxis: {
        labels: {
          show: false
        }
      },
      grid: {
        padding: {
          left: -10
        }
      }
    }
  }]
};
let followersGrowth = {
  series: [{
    name: "Growth",
    data: [10, 5, 15, 0, 15, 12, 29, 29, 29, 12, 15, 5]
  }],
  chart: {
    height: 200,
    type: "line",
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 5,
      left: 0,
      blur: 4,
      color: "#7366ff",
      opacity: 0.22
    }
  },
  grid: {
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  colors: ["#5527FF"],
  stroke: {
    width: 3,
    curve: "smooth"
  },
  xaxis: {
    type: "category",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    tickAmount: 10,
    labels: {
      style: {
        fontFamily: "Rubik, sans-serif"
      }
    },
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#5527FF"],
      shadeIntensity: 1,
      type: "horizontal",
      opacityFrom: 1,
      opacityTo: 1,
      colorStops: [{
        offset: 0,
        color: "#5527FF",
        opacity: 1
      }, {
        offset: 100,
        color: "#E069AE",
        opacity: 1
      }]
      // stops: [0, 100, 100, 100]
    }
  },

  yaxis: {
    min: -10,
    max: 40,
    labels: {
      show: false
    }
  }
};
let profit = {
  series: [{
    name: "Desktops",
    data: [210, 180, 650, 200, 600, 100, 800, 300, 500]
  }],
  chart: {
    width: 200,
    height: 125,
    type: "line",
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 5,
      left: 0,
      blur: 3,
      color: "#16C7F9",
      opacity: 0.3
    },
    zoom: {
      enabled: false
    }
  },
  colors: ["#16C7F9"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2,
    curve: "smooth"
  },
  grid: {
    show: false
  },
  tooltip: {
    x: {
      show: false
    },
    y: {
      show: false
    },
    z: {
      show: false
    },
    marker: {
      show: false
    }
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  responsive: [{
    breakpoint: 1780,
    options: {
      chart: {
        width: 180
      }
    }
  }, {
    breakpoint: 1680,
    options: {
      chart: {
        width: 160
      }
    }
  }, {
    breakpoint: 1601,
    options: {
      chart: {
        height: 110
      }
    }
  }, {
    breakpoint: 1560,
    options: {
      chart: {
        width: 140
      }
    }
  }, {
    breakpoint: 1460,
    options: {
      chart: {
        width: 120
      }
    }
  }, {
    breakpoint: 1400,
    options: {
      chart: {
        width: 290
      }
    }
  }, {
    breakpoint: 1110,
    options: {
      chart: {
        width: 200
      }
    }
  }, {
    breakpoint: 700,
    options: {
      chart: {
        width: 150
      }
    }
  }, {
    breakpoint: 576,
    options: {
      chart: {
        width: 220
      }
    }
  }, {
    breakpoint: 420,
    options: {
      chart: {
        width: 150
      }
    }
  }]
};
let orders = {
  series: [{
    name: "Daily",
    data: [2.15, 3, 1.5, 2, 2.4, 3, 2.4, 2.8, 1.5, 1.7, 3, 2.5, 3, 2, 2.15, 3, 1.1]
  }, {
    name: "Weekly",
    data: [-2.15, -3, -1.5, -2, -2.4, -3, -2.4, -2.8, -1.5, -1.7, -3, -2.5, -3, -2, -2.15, -3, -1.1]
  }, {
    name: "Monthly",
    data: [-2.25, -2.35, -2.45, -2.55, -2.65, -2.75, -2.85, -2.95, -3.0, -3.1, -3.2, -3.25, -3.1, -3.0, -2.95, -2.85, -2.75]
  }, {
    name: "Yearly",
    data: [2.25, 2.35, 2.45, 2.55, 2.65, 2.75, 2.85, 2.95, 3.0, 3.1, 3.2, 3.25, 3.1, 3.0, 2.95, 2.85, 2.75]
  }],
  chart: {
    type: "bar",
    width: 180,
    height: 120,
    stacked: true,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      vertical: true,
      columnWidth: "40%",
      barHeight: "80%",
      startingShape: "rounded",
      endingShape: "rounded"
    }
  },
  colors: [primary_color, primary_color, "#F2F3F7", "#F2F3F7"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 0
  },
  legend: {
    show: false
  },
  grid: {
    xaxis: {
      offsetX: -2,
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  yaxis: {
    min: -5,
    max: 5,
    show: false,
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  tooltip: {
    shared: false,
    x: {
      show: false
    },
    y: {
      show: false
    },
    z: {
      show: false
    }
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    offsetX: 0,
    offsetY: 0,
    labels: {
      offsetX: 0,
      offsetY: 0,
      show: false
    },
    axisBorder: {
      offsetX: 0,
      offsetY: 0,
      show: false
    },
    axisTicks: {
      offsetX: 0,
      offsetY: 0,
      show: false
    }
  },
  responsive: [{
    breakpoint: 1760,
    options: {
      chart: {
        width: 160
      }
    }
  }, {
    breakpoint: 1601,
    options: {
      chart: {
        height: 110
      }
    }
  }, {
    breakpoint: 1560,
    options: {
      chart: {
        width: 140
      }
    }
  }, {
    breakpoint: 1460,
    options: {
      chart: {
        width: 120
      }
    }
  }, {
    breakpoint: 1400,
    options: {
      chart: {
        width: 290
      }
    }
  }, {
    breakpoint: 1110,
    options: {
      chart: {
        width: 200
      }
    }
  }, {
    breakpoint: 700,
    options: {
      chart: {
        width: 150
      }
    }
  }, {
    breakpoint: 576,
    options: {
      chart: {
        width: 220
      }
    }
  }, {
    breakpoint: 420,
    options: {
      chart: {
        width: 150
      }
    }
  }]
};
let purchase = {
  icon: "cart",
  counter: "10,000",
  name: "Purchase",
  font: "secondary",
  pr: "-20"
};
let salesReturn = {
  icon: "return-box",
  counter: "10,000",
  name: "Sales return",
  font: "warning",
  pr: "+50"
};
let sales = {
  icon: "tag",
  counter: "4,200",
  name: "Sales",
  font: "primary",
  pr: "+70"
};
let purchaseRate = {
  icon: "rate",
  counter: "5700",
  name: "Purchase",
  font: "success",
  pr: "+70"
};

/***/ }),

/***/ 47777:
/*!****************************************************!*\
  !*** ./src/app/shared/data/dashboard/ecommerce.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   averageSale: () => (/* binding */ averageSale),
/* harmony export */   grossProfit: () => (/* binding */ grossProfit),
/* harmony export */   monthlyOrderChart: () => (/* binding */ monthlyOrderChart),
/* harmony export */   monthlyProfits: () => (/* binding */ monthlyProfits),
/* harmony export */   newCustomers: () => (/* binding */ newCustomers),
/* harmony export */   newOrders: () => (/* binding */ newOrders),
/* harmony export */   orderBar: () => (/* binding */ orderBar),
/* harmony export */   orderOverview: () => (/* binding */ orderOverview),
/* harmony export */   visitors: () => (/* binding */ visitors)
/* harmony export */ });
let primary = localStorage.getItem("primary_color") || "#7366ff";
let secondary = localStorage.getItem("secondary_color") || "#f73164";
let monthlyOrderChart = {
  series: [{
    name: "Sales",
    data: [23, 23, 20, 20, 32, 32, 40, 32, 32, 25, 30, 30]
  }, {
    name: "sales",
    data: [22, 22, 19, 19, 31, 31, 39, 31, 31, 24, 29, 29]
  }, {
    name: "sales",
    data: [21, 21, 18, 18, 30, 30, 38, 30, 30, 23, 28, 28]
  }, {
    name: "sales",
    data: [20, 20, 17, 17, 29, 29, 37, 29, 29, 22, 27, 27]
  }, {
    name: "sales",
    data: [19, 19, 16, 16, 28, 28, 36, 28, 28, 21, 26, 26]
  }, {
    name: "sales",
    data: [18, 18, 15, 15, 27, 27, 35, 27, 27, 20, 25, 25]
  }, {
    name: "sales",
    data: [17, 17, 14, 14, 26, 26, 34, 26, 26, 19, 24, 24]
  }, {
    name: "sales",
    data: [16, 16, 13, 13, 25, 25, 33, 25, 25, 18, 23, 23]
  }, {
    name: "sales",
    data: [16, 16, 13, 13, 25, 25, 33, 25, 25, 18, 23, 23]
  }, {
    name: "sales",
    data: [15, 15, 12, 12, 24, 24, 32, 24, 24, 17, 22, 22]
  }, {
    name: "sales",
    data: [14, 14, 11, 11, 23, 23, 31, 23, 23, 16, 21, 21]
  }, {
    name: "sales",
    data: [13, 13, 10, 10, 22, 22, 30, 22, 22, 15, 20, 20]
  }],
  chart: {
    height: 235,
    type: "line",
    toolbar: {
      show: false
    }
  },
  colors: ["#7064F5", "#7064F5", "#7064F5", "#7064F5", "#7064F5", "#7064F5", "#7064F5", "#7064F5", "#7064F5", "#7064F5", "#7064F5", "#7064F5"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 1,
      gradientToColors: ["#FF8BA7", "#FF8BA7", "#FF8BA7", "#FF8BA7", "#FF8BA7", "#FF8BA7", "#FF8BA7", "#FF8BA7", "#FF8BA7", "#FF8BA7", "#FF8BA7", "#FF8BA7"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      // stops: [0, 50, 100],
      colorStops: [{
        offset: 0,
        color: "#e183b7",
        opacity: 1
      }, {
        offset: 20,
        color: "#ff8ba7",
        opacity: 1
      }, {
        offset: 30,
        color: "#b377d0",
        opacity: 1
      }, {
        offset: 65,
        color: "#7064f5",
        opacity: 1
      }, {
        offset: 70,
        color: "#b778cf",
        opacity: 1
      }, {
        offset: 80,
        color: "#eb86b2",
        opacity: 1
      }, {
        offset: 100,
        color: "#a873d7",
        opacity: 1
      }]
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth",
    width: 2
  },
  grid: {
    borderColor: "#e7e7e7",
    yaxis: {
      lines: {
        show: false
      }
    },
    column: {
      colors: ["transparent", "var(--light-background)"],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ["01", "03", "05", "07", "09", "10", "11", "12", "15", "16", "18"],
    tickAmount: 6,
    tickPlacement: "between",
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    min: 5,
    max: 40,
    axisBorder: {
      show: true,
      color: "var(--chart-border)",
      offsetX: 12,
      offsetY: 5
    }
  },
  legend: {
    show: false
  },
  tooltip: {
    shared: false
  },
  responsive: [{
    breakpoint: 1400,
    options: {
      chart: {
        height: 230
      }
    }
  }]
};
// Monthly Profits
let monthlyProfits = {
  labels: ["Shoes", "Grocery", "other"],
  series: [30, 55, 35],
  chart: {
    type: "donut",
    height: 300
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    position: "bottom",
    fontSize: "14px",
    fontFamily: "Rubik, sans-serif",
    fontWeight: 500,
    labels: {
      colors: ["var(--chart-text-color)"]
    },
    markers: {
      width: 6,
      height: 6
    },
    itemMargin: {
      horizontal: 7,
      vertical: 0
    }
  },
  stroke: {
    width: 10,
    colors: ["var(--light2)"]
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "83%",
        labels: {
          show: true,
          name: {
            offsetY: 4
          },
          total: {
            show: true,
            fontSize: "20px",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 500,
            label: "$ 34,098",
            formatter: () => "Total Profit"
          }
        }
      }
    }
  },
  states: {
    normal: {
      filter: {
        type: "none"
      }
    },
    hover: {
      filter: {
        type: "none"
      }
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none"
      }
    }
  },
  colors: ["#54BA4A", "var(--theme-deafult)", "#FFA941"],
  responsive: [{
    breakpoint: 1630,
    options: {
      chart: {
        height: 360
      }
    }
  }, {
    breakpoint: 1584,
    options: {
      chart: {
        height: 400
      }
    }
  }, {
    breakpoint: 1473,
    options: {
      chart: {
        height: 250
      }
    }
  }, {
    breakpoint: 1425,
    options: {
      chart: {
        height: 270
      }
    }
  }, {
    breakpoint: 1400,
    options: {
      chart: {
        height: 320
      }
    }
  }, {
    breakpoint: 480,
    options: {
      chart: {
        height: 250
      }
    }
  }]
};
// Order Overview
let orderOverview = {
  series: [{
    name: "Earning",
    type: "area",
    data: [44, 55, 35, 50, 67, 50, 55, 45, 32, 38, 45]
  }, {
    name: "Order",
    type: "area",
    data: [35, 30, 23, 40, 50, 35, 40, 52, 67, 50, 55]
  }, {
    name: "Refunds",
    type: "area",
    data: [25, 20, 15, 25, 32, 20, 30, 35, 23, 30, 20]
  }],
  chart: {
    height: 300,
    type: "line",
    stacked: false,
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 0,
      blur: 4,
      color: "#000",
      opacity: 0.08
    }
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth"
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: true
      }
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  plotOptions: {
    bar: {
      columnWidth: "50%"
    }
  },
  colors: ["#7064F5", "#54BA4A", "#FF3364"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 100]
    }
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
  markers: {
    discrete: [{
      seriesIndex: 0,
      dataPointIndex: 2,
      fillColor: "#7064F5",
      strokeColor: "var(--white)",
      size: 5,
      sizeOffset: 3
    }, {
      seriesIndex: 1,
      dataPointIndex: 2,
      fillColor: "#54BA4A",
      strokeColor: "var(--white)",
      size: 5
    }, {
      seriesIndex: 2,
      dataPointIndex: 2,
      fillColor: "#FF3364",
      strokeColor: "var(--white)",
      size: 5
    }, {
      seriesIndex: 0,
      dataPointIndex: 5,
      fillColor: "#7064F5",
      strokeColor: "var(--white)",
      size: 5,
      sizeOffset: 3
    }, {
      seriesIndex: 1,
      dataPointIndex: 5,
      fillColor: "#54BA4A",
      strokeColor: "var(--white)",
      size: 5
    }, {
      seriesIndex: 2,
      dataPointIndex: 5,
      fillColor: "#FF3364",
      strokeColor: "var(--white)",
      size: 5
    }, {
      seriesIndex: 0,
      dataPointIndex: 9,
      fillColor: "#7064F5",
      strokeColor: "var(--white)",
      size: 5,
      sizeOffset: 3
    }, {
      seriesIndex: 1,
      dataPointIndex: 9,
      fillColor: "#54BA4A",
      strokeColor: "var(--white)",
      size: 5
    }, {
      seriesIndex: 2,
      dataPointIndex: 9,
      fillColor: "#FF3364",
      strokeColor: "var(--white)",
      size: 5
    }],
    hover: {
      size: 5,
      sizeOffset: 0
    }
  },
  xaxis: {
    type: "category",
    tickAmount: 4,
    tickPlacement: "between",
    tooltip: {
      enabled: false
    },
    axisBorder: {
      color: "var(--chart-border)"
    },
    axisTicks: {
      show: false
    }
  },
  legend: {
    show: false
  },
  yaxis: {
    min: 0,
    tickAmount: 6,
    tickPlacement: "between"
  },
  tooltip: {
    shared: false,
    intersect: false
  },
  responsive: [{
    breakpoint: 1200,
    options: {
      chart: {
        height: 250
      }
    }
  }]
};
// Visitors
let visitors = {
  series: [{
    name: "Active",
    data: [18, 10, 65, 18, 28, 10]
  }, {
    name: "Bounce",
    data: [25, 50, 30, 30, 25, 45]
  }],
  chart: {
    type: "bar",
    height: 270,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%"
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 6,
    colors: ["transparent"]
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  colors: ["#FFA941", "var(--theme-deafult)"],
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    tickAmount: 4,
    tickPlacement: "between",
    labels: {
      style: {
        fontFamily: "Rubik, sans-serif"
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    min: 0,
    max: 100,
    tickAmount: 5,
    tickPlacement: "between",
    labels: {
      style: {
        fontFamily: "Rubik, sans-serif"
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Rubik, sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    labels: {
      colors: "var(--chart-text-color)"
    },
    markers: {
      width: 6,
      height: 6,
      radius: 12
    },
    itemMargin: {
      horizontal: 10
    }
  },
  responsive: [{
    breakpoint: 1366,
    options: {
      plotOptions: {
        bar: {
          columnWidth: "80%"
        }
      },
      grid: {
        padding: {
          right: 0
        }
      }
    }
  }, {
    breakpoint: 1200,
    options: {
      plotOptions: {
        bar: {
          columnWidth: "50%"
        }
      },
      grid: {
        padding: {
          right: 0
        }
      }
    }
  }, {
    breakpoint: 576,
    options: {
      plotOptions: {
        bar: {
          columnWidth: "60%"
        }
      },
      grid: {
        padding: {
          right: 5
        }
      }
    }
  }]
};
// Order Bar
let orderBar = {
  series: [{
    name: "Revenue",
    data: [30, 40, 18, 25, 18, 10, 20, 35, 22, 40, 30, 38, 20, 35, 11, 28, 40, 11, 28, 40, 11, 28, 40, 11, 28, 40, 11]
  }],
  chart: {
    type: "bar",
    height: 180,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%"
    }
  },
  colors: ["var(--light-bg)"],
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"]
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  fill: {
    opacity: 0.7
  },
  tooltip: {
    enabled: false
  },
  states: {
    normal: {
      filter: {
        type: "none"
      }
    },
    hover: {
      filter: {
        type: "none"
      }
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none"
      }
    }
  },
  responsive: [{
    breakpoint: 405,
    options: {
      chart: {
        height: 150
      }
    }
  }]
};
let newOrders = {
  title: "New Orders",
  colorClass: "primary",
  icon: "new-order",
  arrow: "up",
  orderGrowth: "+50",
  orders: "$2,435"
};
let newCustomers = {
  title: "New Customers",
  colorClass: "warning",
  icon: "customers",
  arrow: "up",
  orderGrowth: "+20",
  orders: "389k"
};
let averageSale = {
  title: "Average Sale",
  colorClass: "secondary",
  icon: "sale",
  arrow: "down",
  orderGrowth: "-10",
  orders: "$2,435"
};
let grossProfit = {
  title: "Gross Profit",
  colorClass: "success",
  icon: "profit",
  arrow: "up",
  orderGrowth: "+80",
  orders: "$3,908"
};

/***/ }),

/***/ 62665:
/*!********************************************************!*\
  !*** ./src/app/shared/data/dashboard/online-course.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activityChart: () => (/* binding */ activityChart),
/* harmony export */   chart1: () => (/* binding */ chart1),
/* harmony export */   chart2: () => (/* binding */ chart2),
/* harmony export */   chart3: () => (/* binding */ chart3),
/* harmony export */   completed: () => (/* binding */ completed),
/* harmony export */   learningChart: () => (/* binding */ learningChart),
/* harmony export */   progress: () => (/* binding */ progress),
/* harmony export */   todayProgress: () => (/* binding */ todayProgress),
/* harmony export */   upcomingChart: () => (/* binding */ upcomingChart)
/* harmony export */ });
let primary_color = localStorage.getItem("primary_color") || "#7366ff";
let secondary_color = localStorage.getItem("secondary_color") || "#f73164";
let todayProgress = {
  series: [38, 60],
  chart: {
    width: 240,
    height: 360,
    type: "radialBar",
    offsetX: -28
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          offsetY: 20,
          color: "var(--chart-text-color)",
          fontFamily: "Rubik, sans-serif",
          fontWeight: 500
        },
        value: {
          fontSize: "22px",
          offsetY: -16,
          fontFamily: "Rubik, sans-serif",
          fontWeight: 500
        },
        total: {
          show: true,
          label: "Task Done!",
          fontSize: "12px",
          formatter: function () {
            return "89%";
          }
        }
      },
      hollow: {
        margin: 5,
        size: "70%",
        image: "assets/images/dashboard-3/round.png",
        imageWidth: 115,
        imageHeight: 115,
        imageClipped: false
      },
      track: {
        background: "transparent"
      }
    }
  },
  colors: ["var(--theme-deafult)", "#FFA941"],
  labels: ["Progress", "Done"],
  stroke: {
    lineCap: "round"
  },
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "center",
    offsetY: -15,
    fontSize: "14px",
    fontFamily: "Rubik, sans-serif",
    fontWeight: 500,
    labels: {
      colors: "var(--chart-text-color)"
    },
    markers: {
      width: 6,
      height: 6
    }
  },
  responsive: [{
    breakpoint: 1830,
    options: {
      chart: {
        offsetX: -40
      }
    }
  }, {
    breakpoint: 1750,
    options: {
      chart: {
        offsetX: -50
      }
    }
  }, {
    breakpoint: 1661,
    options: {
      chart: {
        offsetX: -10
      }
    }
  }, {
    breakpoint: 1530,
    options: {
      chart: {
        offsetX: -25
      }
    }
  }, {
    breakpoint: 1400,
    options: {
      chart: {
        offsetX: 10
      }
    }
  }, {
    breakpoint: 1300,
    options: {
      chart: {
        offsetX: -10
      }
    }
  }, {
    breakpoint: 1200,
    options: {
      chart: {
        width: 255
      }
    }
  }, {
    breakpoint: 992,
    options: {
      chart: {
        width: 245
      }
    }
  }, {
    breakpoint: 600,
    options: {
      chart: {
        width: 225
      }
    }
  }]
};
let learningChart = {
  series: [{
    name: "growth",
    type: "line",
    data: [25, 30, 43, 25, 38, 25, 33, 25]
  }, {
    name: "growth",
    type: "line",
    data: [25, 30, 41, 25, 36, 25, 31, 25]
  }, {
    name: "growth",
    type: "line",
    data: [25, 29, 37, 25, 34, 25, 29, 25]
  }, {
    name: "growth",
    type: "line",
    data: [25, 28, 34, 25, 32, 25, 28, 25]
  }, {
    name: "growth",
    type: "line",
    data: [25, 27, 30, 25, 28, 25, 27, 25]
  }, {
    name: "growth",
    type: "line",
    data: [25, 26, 24, 25, 24, 25, 24, 25]
  }, {
    name: "growth",
    type: "line",
    data: [25, 26, 20, 25, 21, 25, 23, 25]
  }, {
    name: "growth",
    type: "line",
    data: [25, 24, 16, 25, 18, 25, 22, 25]
  }, {
    name: "growth",
    type: "line",
    data: [25, 23, 12, 25, 15, 25, 21, 25]
  }, {
    name: "growth",
    type: "line",
    data: [25, 23, 10, 25, 13, 25, 19, 25]
  }, {
    name: "growth",
    type: "area",
    data: [25, 28, 37, 25, 33, 25, 27, 25]
  }],
  chart: {
    height: 315,
    type: "line",
    toolbar: {
      show: false
    }
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  colors: ["var(--theme-deafult)", "#F47DEA", "#FFA941", "#FFC200", "#54BA4A", "#3DA831", "#57B9F6", "#FF3377", "#773ACE", "#945CFF", "#7366ff"],
  stroke: {
    width: 1.5,
    curve: "smooth"
  },
  markers: {
    discrete: [{
      seriesIndex: 0,
      dataPointIndex: 0,
      fillColor: "#7064F5",
      strokeColor: "var(--white)",
      size: 6
    }, {
      seriesIndex: 1,
      dataPointIndex: 5,
      fillColor: "#7064F5",
      strokeColor: "var(--white)",
      size: 6
    }, {
      seriesIndex: 2,
      dataPointIndex: 3,
      fillColor: "#7064F5",
      strokeColor: "var(--white)",
      size: 6
    }]
  },
  tooltip: {
    shared: false,
    intersect: false
  },
  xaxis: {
    type: "category",
    categories: ["Sep 5", "Sep 8", "Sep 12", "Sep 16", "Sep 18", "Sep 17", "Sep 23", "Sep 26"],
    tickAmount: 12,
    labels: {
      style: {
        colors: "var(--chart-text-color)",
        fontSize: "12px",
        fontFamily: "Rubik, sans-serif",
        fontWeight: 400
      }
    },
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  fill: {
    type: ["solid", "solid", "solid", "solid", "solid", "solid", "solid", "solid", "solid", "solid", "gradient"],
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 80, 100]
    }
  },
  yaxis: {
    min: 0,
    max: 50,
    tickAmount: 5,
    labels: {
      style: {
        colors: "var(--chart-text-color)",
        fontSize: "12px",
        fontFamily: "Rubik, sans-serif",
        fontWeight: 400
      }
    }
  },
  legend: {
    show: false
  },
  responsive: [{
    breakpoint: 1661,
    options: {
      chart: {
        height: 265
      }
    }
  }]
};
let activityChart = {
  series: [{
    name: "Activity",
    data: [2, 4, 2.5, 1.5, 5.5, 1.5, 4]
  }],
  chart: {
    height: 300,
    type: "bar",
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      // enabledOnSeries: undefined,
      top: 10,
      left: 0,
      blur: 5,
      color: "#7064F5",
      opacity: 0.35
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 6,
      columnWidth: "30%"
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ["S", "M", "T", "W", "T", "F", "S"],
    labels: {
      style: {
        fontSize: "12px",
        fontFamily: "Rubik, sans-serif",
        colors: "var(--chart-text-color)"
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      formatter: function (val) {
        return val + " " + "Hr";
      },
      style: {
        fontSize: "12px",
        fontFamily: "Rubik, sans-serif",
        colors: "var(--chart-text-color)"
      }
    }
  },
  grid: {
    borderColor: "var(--chart-dashed-border)",
    strokeDashArray: 5
  },
  colors: ["#7064F5", "#8D83FF"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      gradientToColors: ["#7064F5", "#8D83FF"],
      opacityFrom: 0.98,
      opacityTo: 0.85,
      stops: [0, 100]
    }
  },
  responsive: [{
    breakpoint: 1200,
    options: {
      chart: {
        height: 200
      }
    }
  }]
};
let upcomingChart = {
  series: [{
    data: [{
      x: "Team Meetup",
      y: [new Date("2022-01-20").getTime(), new Date("2022-03-8").getTime()],
      strokeColor: "var(--theme-deafult)",
      fillColor: "var(--white)"
    }, {
      x: "Theme Development",
      y: [new Date("2022-01-8").getTime(), new Date("2022-02-30").getTime()],
      strokeColor: "#54BA4A",
      fillColor: "var(--white)"
    }, {
      x: "UI/UX Design",
      y: [new Date("2022-02-01").getTime(), new Date("2022-03-10").getTime()],
      strokeColor: "#FFAA05",
      fillColor: "var(--white)"
    }, {
      x: "Logo Creater",
      y: [new Date("2022-02-10").getTime(), new Date("2022-03-15").getTime()],
      strokeColor: "#FF3364",
      fillColor: "var(--white)"
    }]
  }],
  chart: {
    height: 305,
    type: "rangeBar",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      barHeight: "50%",
      dataLabels: {
        hideOverflowingLabels: false
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opts) {
      var label = opts.w.globals.labels[opts.dataPointIndex];
      return label;
    },
    textAnchor: "middle",
    offsetX: 0,
    offsetY: 0,
    background: {
      enabled: true,
      foreColor: "var(--chart-text-color)",
      padding: 10,
      borderRadius: 12,
      borderWidth: 1,
      opacity: 0.9
    }
  },
  xaxis: {
    type: "datetime",
    position: "top",
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false,
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  grid: {
    row: {
      colors: ["var(--light-background)", "var(--white)"],
      opacity: 1
    }
  },
  stroke: {
    width: 2
  },
  states: {
    normal: {
      filter: {
        type: "none"
      }
    },
    hover: {
      filter: {
        type: "none"
      }
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none"
      }
    }
  },
  responsive: [{
    breakpoint: 1661,
    options: {
      chart: {
        height: 295
      }
    }
  }, {
    breakpoint: 1200,
    options: {
      chart: {
        height: 370
      }
    }
  }, {
    breakpoint: 575,
    options: {
      chart: {
        height: 300
      }
    }
  }]
};
let chart1 = {
  series: [20, 5, 5, 5, 5, 5, 5],
  chart: {
    type: "donut",
    height: 80
  },
  colors: ["var(--theme-deafult)", "var(--chart-progress-light)", "var(--chart-progress-light)", "var(--chart-progress-light)", "var(--chart-progress-light)", "var(--chart-progress-light)", "var(--chart-progress-light)"],
  legend: {
    show: false
  },
  stroke: {
    width: 1,
    colors: "var(--white)"
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          value: {
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            color: "var(--chart-text-color)",
            offsetY: -12,
            formatter: function (val) {
              return val;
            }
          },
          total: {
            show: true,
            showAlways: false,
            label: "Total",
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif"
          }
        }
      }
    }
  },
  states: {
    normal: {
      filter: {
        type: "none"
      }
    },
    hover: {
      filter: {
        type: "none"
      }
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none"
      }
    }
  }
};
let chart2 = {
  series: [50, 10, 10, 10],
  chart: {
    type: "donut",
    height: 80
  },
  colors: ["var(--theme-deafult)", "var(--chart-progress-light)", "var(--chart-progress-light)", "var(--chart-progress-light)"],
  legend: {
    show: false
  },
  stroke: {
    width: 1,
    colors: "var(--white)"
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          value: {
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            color: "var(--chart-text-color)",
            offsetY: -12,
            formatter: function (val) {
              return val;
            }
          },
          total: {
            show: true,
            showAlways: false,
            label: "Total",
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif"
          }
        }
      }
    }
  },
  states: {
    normal: {
      filter: {
        type: "none"
      }
    },
    hover: {
      filter: {
        type: "none"
      }
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none"
      }
    }
  }
};
let chart3 = {
  series: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  chart: {
    type: "donut",
    height: 80
  },
  colors: ["var(--theme-deafult)", "var(--chart-progress-light)", "var(--chart-progress-light)", "var(--chart-progress-light)", "var(--chart-progress-light)", "var(--chart-progress-light)", "var(--chart-progress-light)", "var(--chart-progress-light)", "var(--chart-progress-light)", "var(--chart-progress-light)"],
  legend: {
    show: false
  },
  stroke: {
    width: 1,
    colors: "var(--white)"
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          value: {
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            color: "var(--chart-text-color)",
            offsetY: -12,
            formatter: function (val) {
              return val;
            }
          },
          total: {
            show: true,
            showAlways: false,
            label: "Total",
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif"
          }
        }
      }
    }
  },
  states: {
    normal: {
      filter: {
        type: "none"
      }
    },
    hover: {
      filter: {
        type: "none"
      }
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none"
      }
    }
  }
};
let completed = {
  courses: "100",
  type: "Completed Courses",
  icon: "course-1",
  colorClass: ""
};
let progress = {
  courses: "50",
  type: "In Progress Courses",
  icon: "course-2",
  colorClass: "warning"
};

/***/ }),

/***/ 38108:
/*!*************************************************!*\
  !*** ./src/app/shared/data/dashboard/social.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   facebook: () => (/* binding */ facebook),
/* harmony export */   followerGender: () => (/* binding */ followerGender),
/* harmony export */   instagram: () => (/* binding */ instagram),
/* harmony export */   likeClicks: () => (/* binding */ likeClicks),
/* harmony export */   photoClicks: () => (/* binding */ photoClicks),
/* harmony export */   subscriberChart: () => (/* binding */ subscriberChart),
/* harmony export */   twitter: () => (/* binding */ twitter),
/* harmony export */   views: () => (/* binding */ views),
/* harmony export */   youtube: () => (/* binding */ youtube)
/* harmony export */ });
let primary_color = localStorage.getItem("primary_color") || "#7366ff";
let secondary_color = localStorage.getItem("secondary_color") || "#f73164";
let facebook = {
  series: [78],
  chart: {
    height: 130,
    type: "radialBar",
    dropShadow: {
      enabled: true,
      top: 3,
      left: 0,
      blur: 10,
      color: "var(--theme-deafult)",
      opacity: 0.35
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "60%"
      },
      track: {
        strokeWidth: "60%",
        opacity: 1,
        margin: 5
      },
      dataLabels: {
        showOn: "always",
        value: {
          color: "var(--body-font-color)",
          fontSize: "14px",
          show: true,
          offsetY: -10
        }
      }
    }
  },
  colors: ["var(--theme-deafult)"],
  stroke: {
    lineCap: "round"
  },
  responsive: [{
    breakpoint: 1500,
    options: {
      chart: {
        height: 130
      }
    }
  }],
  socialMediaName: "Facebook",
  followers: "12,098",
  growth: "+22.9%",
  icon: "assets/images/dashboard-5/social/1.png"
};
let instagram = {
  series: [70],
  chart: {
    height: 130,
    type: "radialBar",
    dropShadow: {
      enabled: true,
      top: 3,
      left: 0,
      blur: 10,
      color: "#FFA941",
      opacity: 0.35
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "60%"
      },
      track: {
        strokeWidth: "60%",
        opacity: 1,
        margin: 5
      },
      dataLabels: {
        showOn: "always",
        value: {
          color: "var(--body-font-color)",
          fontSize: "14px",
          show: true,
          offsetY: -10
        }
      }
    }
  },
  colors: ["#FFA941"],
  stroke: {
    lineCap: "round"
  },
  responsive: [{
    breakpoint: 1500,
    options: {
      chart: {
        height: 130
      }
    }
  }],
  socialMediaName: "Instagram",
  followers: "15,080",
  growth: "+27.4%",
  icon: "assets/images/dashboard-5/social/2.png"
};
let twitter = {
  series: [50],
  chart: {
    height: 130,
    type: "radialBar",
    dropShadow: {
      enabled: true,
      top: 3,
      left: 0,
      blur: 10,
      color: "#57B9F6",
      opacity: 0.35
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "60%"
      },
      track: {
        strokeWidth: "60%",
        opacity: 1,
        margin: 5
      },
      dataLabels: {
        showOn: "always",
        value: {
          color: "var(--body-font-color)",
          fontSize: "14px",
          show: true,
          offsetY: -10
        }
      }
    }
  },
  colors: ["#57B9F6"],
  stroke: {
    lineCap: "round"
  },
  responsive: [{
    breakpoint: 1500,
    options: {
      chart: {
        height: 130
      }
    }
  }],
  socialMediaName: "Twitter",
  followers: "12,564",
  growth: "+14.09%",
  icon: "assets/images/dashboard-5/social/3.png"
};
let youtube = {
  series: [80],
  chart: {
    height: 130,
    type: "radialBar",
    dropShadow: {
      enabled: true,
      top: 3,
      left: 0,
      blur: 10,
      color: "#FF3364",
      opacity: 0.35
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "60%"
      },
      track: {
        strokeWidth: "60%",
        opacity: 1,
        margin: 5
      },
      dataLabels: {
        showOn: "always",
        value: {
          color: "var(--body-font-color)",
          fontSize: "14px",
          show: true,
          offsetY: -10
        }
      }
    }
  },
  colors: ["#FF3364"],
  stroke: {
    lineCap: "round"
  },
  responsive: [{
    breakpoint: 1500,
    options: {
      chart: {
        height: 130
      }
    }
  }],
  socialMediaName: "Youtube",
  followers: "68,954",
  growth: "+22.9%",
  icon: "assets/images/dashboard-5/social/4.png"
};
let subscriberChart = {
  series: [{
    name: "growth",
    type: "line",
    data: [12, 10, 25, 12, 30, 10, 55, 45, 60]
  }, {
    name: "growth",
    type: "line",
    data: [10, 15, 20, 18, 38, 25, 55, 35, 60]
  }],
  chart: {
    height: 265,
    type: "line",
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      top: 8,
      left: 0,
      blur: 2,
      color: ["#FFA941", "primary_color"],
      opacity: 0.1
    }
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  colors: ["#FFA941", "#7366FF"],
  stroke: {
    width: 2,
    curve: "smooth",
    opacity: 1
  },
  markers: {
    discrete: [{
      seriesIndex: 1,
      dataPointIndex: 4,
      fillColor: "#7064F5",
      strokeColor: "var(--white)",
      size: 6
    }]
  },
  tooltip: {
    shared: false,
    intersect: false,
    marker: {
      width: 5,
      height: 5
    }
  },
  xaxis: {
    type: "category",
    categories: ["Sep 5", "Sep 8", "Sep 12", "Sep 16", "Sep 18", "Sep 17", "Sep 23", "Sep 26", "Sep 30"],
    tickAmount: 12,
    crosshairs: {
      show: false
    },
    labels: {
      style: {
        colors: "var(--chart-text-color)",
        fontSize: "12px",
        fontFamily: "Rubik, sans-serif",
        fontWeight: 400
      }
    },
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  fill: {
    opacity: 1,
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 1,
      opacityFrom: 0.95,
      opacityTo: 1,
      stops: [0, 90, 100]
    }
  },
  yaxis: {
    min: 10,
    max: 60,
    tickAmount: 5,
    labels: {
      style: {
        colors: "var(--chart-text-color)",
        fontSize: "12px",
        fontFamily: "Rubik, sans-serif",
        fontWeight: 400
      }
    }
  },
  legend: {
    show: false
  },
  responsive: [{
    breakpoint: 1694,
    options: {
      chart: {
        height: 240
      }
    }
  }, {
    breakpoint: 1661,
    options: {
      chart: {
        height: 265
      }
    }
  }, {
    breakpoint: 1412,
    options: {
      chart: {
        height: 240
      }
    }
  }, {
    breakpoint: 1200,
    options: {
      chart: {
        height: 260
      }
    }
  }, {
    breakpoint: 1040,
    options: {
      chart: {
        height: 240
      }
    }
  }, {
    breakpoint: 992,
    options: {
      chart: {
        height: 255
      }
    }
  }]
};
let photoClicks = {
  series: [{
    name: "photo",
    data: [10, 12, 41, 36, 60, 58]
  }],
  chart: {
    width: 125,
    height: 150,
    type: "line",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      top: 8,
      left: 0,
      blur: 3,
      color: "#54BA4A",
      opacity: 0.2
    }
  },
  markers: {
    hover: {
      size: 3
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth",
    width: 2
  },
  grid: {
    show: false
  },
  tooltip: {
    x: {
      show: false
    },
    z: {
      show: false
    }
  },
  annotations: {
    points: [{
      x: 90,
      y: 58,
      marker: {
        size: 4,
        fillColor: "#54BA4A",
        strokeColor: "var(--white)",
        radius: 2
      }
    }]
  },
  colors: ["#54BA4A"],
  fill: {
    opacity: 1,
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.95,
      opacityTo: 1,
      // stops: [0,100]
      colorStops: [{
        offset: 0,
        color: "#54BA4A",
        opacity: 0.1
      }, {
        offset: 30,
        color: "#54BA4A",
        opacity: 0.8
      }, {
        offset: 80,
        color: "#54BA4A",
        opacity: 1
      }, {
        offset: 100,
        color: "#54BA4A",
        opacity: 0.1
      }]
    }
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  responsive: [{
    breakpoint: 1694,
    options: {
      chart: {
        width: 100
      },
      annotations: {
        points: [{
          x: 75,
          y: 58,
          marker: {
            size: 4,
            fillColor: "#54BA4A",
            strokeColor: "var(--white)",
            radius: 2
          }
        }]
      }
    }
  }, {
    breakpoint: 1661,
    options: {
      chart: {
        width: 120
      },
      annotations: {
        points: [{
          x: 90,
          y: 58,
          marker: {
            size: 4,
            fillColor: "#54BA4A",
            strokeColor: "var(--white)",
            radius: 2
          }
        }]
      }
    }
  }, {
    breakpoint: 1378,
    options: {
      chart: {
        width: 100
      },
      annotations: {
        points: [{
          x: 75,
          y: 58,
          marker: {
            size: 4,
            fillColor: "#54BA4A",
            strokeColor: "var(--white)",
            radius: 2
          }
        }]
      }
    }
  }, {
    breakpoint: 1288,
    options: {
      chart: {
        width: 80
      },
      annotations: {
        points: [{
          x: 50,
          y: 58,
          marker: {
            size: 4,
            fillColor: "#54BA4A",
            strokeColor: "var(--white)",
            radius: 2
          }
        }]
      }
    }
  }, {
    breakpoint: 1200,
    options: {
      chart: {
        width: 110
      },
      annotations: {
        points: [{
          x: 85,
          y: 58,
          marker: {
            size: 4,
            fillColor: "#54BA4A",
            strokeColor: "var(--white)",
            radius: 2
          }
        }]
      }
    }
  }],
  clickParsonage: "76",
  growth: "+72.9%",
  colorClass: "success",
  clicks: "Photo Clicks"
};
let likeClicks = {
  series: [{
    name: "photo",
    data: [10, 12, 41, 36, 60, 58]
  }],
  chart: {
    width: 125,
    height: 150,
    type: "line",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      top: 8,
      left: 0,
      blur: 3,
      color: "var(--theme-secondary)",
      opacity: 0.2
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth",
    width: 2
  },
  grid: {
    show: false
  },
  tooltip: {
    x: {
      show: false
    },
    z: {
      show: false
    }
  },
  colors: ["var(--theme-secondary)"],
  annotations: {
    points: [{
      x: 90,
      y: 58,
      marker: {
        size: 4,
        fillColor: "var(--theme-secondary)",
        strokeColor: "var(--white)",
        radius: 2
      }
    }]
  },
  fill: {
    opacity: 1,
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.95,
      opacityTo: 1,
      // stops: [0,100]
      colorStops: [{
        offset: 0,
        color: "var(--theme-secondary)",
        opacity: 0.1
      }, {
        offset: 30,
        color: "var(--theme-secondary)",
        opacity: 0.8
      }, {
        offset: 80,
        color: "var(--theme-secondary)",
        opacity: 1
      }, {
        offset: 100,
        color: "var(--theme-secondary)",
        opacity: 0.1
      }]
    }
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  responsive: [{
    breakpoint: 1694,
    options: {
      chart: {
        width: 100
      },
      annotations: {
        points: [{
          x: 75,
          y: 58,
          marker: {
            size: 4,
            fillColor: "var(--theme-secondary)",
            strokeColor: "var(--white)",
            radius: 2
          }
        }]
      }
    }
  }, {
    breakpoint: 1661,
    options: {
      chart: {
        width: 120
      },
      annotations: {
        points: [{
          x: 90,
          y: 58,
          marker: {
            size: 4,
            fillColor: "var(--theme-secondary)",
            strokeColor: "var(--white)",
            radius: 2
          }
        }]
      }
    }
  }, {
    breakpoint: 1378,
    options: {
      chart: {
        width: 100
      },
      annotations: {
        points: [{
          x: 75,
          y: 58,
          marker: {
            size: 4,
            fillColor: "var(--theme-secondary)",
            strokeColor: "var(--white)",
            radius: 2
          }
        }]
      }
    }
  }, {
    breakpoint: 1288,
    options: {
      chart: {
        width: 80
      },
      annotations: {
        points: [{
          x: 50,
          y: 58,
          marker: {
            size: 4,
            fillColor: "var(--theme-secondary)",
            strokeColor: "var(--white)",
            radius: 2
          }
        }]
      }
    }
  }, {
    breakpoint: 1200,
    options: {
      chart: {
        width: 110
      },
      annotations: {
        points: [{
          x: 85,
          y: 58,
          marker: {
            size: 4,
            fillColor: "var(--theme-secondary)",
            strokeColor: "var(--white)",
            radius: 2
          }
        }]
      }
    }
  }],
  clicks: "Like Clicks",
  clickParsonage: "89",
  growth: "+79.9%",
  colorClass: "secondary"
};
let followerGender = {
  series: [70, 60],
  chart: {
    width: 325,
    height: 325,
    type: "radialBar",
    dropShadow: {
      enabled: true,
      top: 5,
      left: 8,
      blur: 8,
      color: "var(--theme-deafult)",
      opacity: 0.2
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 5,
        size: "70%",
        image: "assets/images/dashboard-5/follower.png",
        imageWidth: 50,
        imageHeight: 50,
        imageClipped: false
      },
      track: {
        background: "transparent"
      }
    }
  },
  colors: ["var(--theme-deafult)", "#FFA941"],
  labels: ["Male", "Female"],
  stroke: {
    lineCap: "round"
  },
  legend: {
    show: true,
    position: "right",
    horizontalAlign: "center",
    offsetY: -15,
    fontSize: "14px",
    fontFamily: "Rubik, sans-serif",
    fontWeight: 500,
    labels: {
      colors: "var(--chart-text-color)"
    },
    markers: {
      width: 6,
      height: 6
    }
  },
  responsive: [{
    breakpoint: 718,
    options: {
      chart: {
        width: "100%",
        height: 230
      },
      legend: {
        show: false
      }
    }
  }]
};
let views = {
  series: [{
    name: "view",
    data: [20, 45, 30, 50]
  }],
  chart: {
    height: 305,
    type: "line",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      top: 8,
      left: 0,
      blur: 3,
      color: "var(--theme-deafult)",
      opacity: 0.2
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth",
    width: 3
  },
  grid: {
    row: {
      colors: ["var(--view-grid-bg)", "transparent"],
      opacity: 0.5
    },
    column: {
      colors: ["var(--view-grid-bg)", "transparent"]
    },
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  tooltip: {
    x: {
      show: false
    },
    z: {
      show: false
    }
  },
  colors: ["var(--theme-deafult)"],
  fill: {
    opacity: 1,
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.95,
      opacityTo: 1,
      // stops: [0,100]
      colorStops: [{
        offset: 0,
        color: "var(--theme-deafult)",
        opacity: 0.05
      }, {
        offset: 30,
        color: "var(--theme-deafult)",
        opacity: 1
      }, {
        offset: 80,
        color: "var(--theme-deafult)",
        opacity: 1
      }, {
        offset: 100,
        color: "var(--theme-deafult)",
        opacity: 0.1
      }]
    }
  },
  annotations: {
    points: [{
      x: "Feb",
      y: 44,
      marker: {
        size: 15,
        fillColor: "#7366FF",
        strokeColor: "var(--view-border-marker)",
        strokeWidth: 20,
        radius: 2,
        cssClass: "apexcharts-custom-class"
      }
    }]
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr"],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  responsive: [{
    breakpoint: 768,
    options: {
      chart: {
        height: 200
      }
    }
  }, {
    breakpoint: 481,
    options: {
      annotations: {
        points: [{
          x: "Feb",
          y: 44,
          marker: {
            size: 10,
            fillColor: "primary_color",
            strokeColor: "#cfcdfc",
            strokeWidth: 7,
            radius: 2,
            cssClass: "apexcharts-custom-class"
          }
        }]
      }
    }
  }]
};

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_dashboard_dashboard_module_ts.js.map