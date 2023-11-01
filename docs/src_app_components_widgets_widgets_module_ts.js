"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_widgets_widgets_module_ts"],{

/***/ 44027:
/*!*************************************************************!*\
  !*** ./src/app/components/widgets/chart/chart.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartComponent: () => (/* binding */ ChartComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/widget/chart */ 94201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _common_top_chart_common_top_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-top-chart/common-top-chart.component */ 17128);
/* harmony import */ var _monthly_history_monthly_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monthly-history/monthly-history.component */ 4927);
/* harmony import */ var _uses_uses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uses/uses.component */ 20230);
/* harmony import */ var _monthly_sales_monthly_sales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./monthly-sales/monthly-sales.component */ 96355);
/* harmony import */ var _order_status2_order_status2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-status2/order-status2.component */ 83665);
/* harmony import */ var _finance_finance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finance/finance.component */ 68234);
/* harmony import */ var _stock_market_stock_market_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stock-market/stock-market.component */ 16664);
/* harmony import */ var _crypto_annotations_crypto_annotations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./crypto-annotations/crypto-annotations.component */ 19784);
/* harmony import */ var _cryptocurrency_prices_cryptocurrency_prices_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cryptocurrency-prices/cryptocurrency-prices.component */ 51620);
/* harmony import */ var _turn_over_turn_over_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./turn-over/turn-over.component */ 79602);
/* harmony import */ var _live_products_live_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./live-products/live-products.component */ 29763);
/* harmony import */ var _order_status_order_status_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order-status/order-status.component */ 91057);
/* harmony import */ var _skill_status_skill_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./skill-status/skill-status.component */ 78819);
















const _c0 = function () {
  return ["Widgets"];
};
class ChartComponent {
  constructor() {
    this.optionslinechart = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.optionslinechart;
    this.chart2 = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.chart2;
    this.chart3 = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.chart3;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ChartComponent_Factory(t) {
    return new (t || ChartComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: ChartComponent,
    selectors: [["app-chart"]],
    decls: 36,
    vars: 7,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xl-4", "col-md-12", "box-col-12"], [3, "data"], [1, "col-md-12", "box-col-12"], [1, "col-xl-6", "col-lg-12", "box-col-6", "xl-50"], [1, "xl-50", "col-xl-7", "col-lg-12"], [1, "xl-50", "col-xl-5", "col-lg-12"], [1, "xl-50", "col-xl-6", "col-lg-12"], [1, "col-sm-12", "box-col-12"], [1, "col-xl-5", "col-lg-12", "box-col-12"], [1, "col-xl-7", "col-lg-12", "box-col-6"], [1, "xl-50", "col-xl-5", "col-lg-12", "box-col-6"], [1, "xl-50", "col-xl-7", "col-lg-12", "box-col-12"]],
    template: function ChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "app-common-top-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "app-common-top-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "app-common-top-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 2)(10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "app-monthly-history");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "app-skill-status");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "app-order-status");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 2)(17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "app-live-products");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](20, "app-turn-over");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](22, "app-cryptocurrency-prices");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](24, "app-crypto-annotations");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "div", 2)(26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](27, "app-stock-market");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](29, "app-finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](31, "app-order-status2");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](33, "app-monthly-sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](35, "app-uses");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("title", "Chart")("items", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](6, _c0))("active_item", "Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("data", ctx.optionslinechart);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("data", ctx.chart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("data", ctx.chart3);
      }
    },
    dependencies: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _common_top_chart_common_top_chart_component__WEBPACK_IMPORTED_MODULE_2__.CommonTopChartComponent, _monthly_history_monthly_history_component__WEBPACK_IMPORTED_MODULE_3__.MonthlyHistoryComponent, _uses_uses_component__WEBPACK_IMPORTED_MODULE_4__.UsesComponent, _monthly_sales_monthly_sales_component__WEBPACK_IMPORTED_MODULE_5__.MonthlySalesComponent, _order_status2_order_status2_component__WEBPACK_IMPORTED_MODULE_6__.OrderStatus2Component, _finance_finance_component__WEBPACK_IMPORTED_MODULE_7__.FinanceComponent, _stock_market_stock_market_component__WEBPACK_IMPORTED_MODULE_8__.StockMarketComponent, _crypto_annotations_crypto_annotations_component__WEBPACK_IMPORTED_MODULE_9__.CryptoAnnotationsComponent, _cryptocurrency_prices_cryptocurrency_prices_component__WEBPACK_IMPORTED_MODULE_10__.CryptocurrencyPricesComponent, _turn_over_turn_over_component__WEBPACK_IMPORTED_MODULE_11__.TurnOverComponent, _live_products_live_products_component__WEBPACK_IMPORTED_MODULE_12__.LiveProductsComponent, _order_status_order_status_component__WEBPACK_IMPORTED_MODULE_13__.OrderStatusComponent, _skill_status_skill_status_component__WEBPACK_IMPORTED_MODULE_14__.SkillStatusComponent],
    styles: [".color[_ngcontent-%COMP%] {\n  background-color: #00e396 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy93aWRnZXRzL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csb0NBQUE7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvcntcbiAgIGJhY2tncm91bmQtY29sb3I6IzAwZTM5NiAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 17128:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/widgets/chart/common-top-chart/common-top-chart.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonTopChartComponent: () => (/* binding */ CommonTopChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ 57854);


class CommonTopChartComponent {
  static #_ = this.ɵfac = function CommonTopChartComponent_Factory(t) {
    return new (t || CommonTopChartComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CommonTopChartComponent,
    selectors: [["app-common-top-chart"]],
    inputs: {
      data: "data"
    },
    decls: 16,
    vars: 18,
    consts: [[1, "card", "o-hidden"], [1, "chart-widget-top"], [1, "row", "card-body", "pb-0", "m-0"], [1, "col-xl-9", "col-lg-8", "col-9", "p-0"], [1, "mb-2"], [1, "col-xl-3", "col-lg-4", "col-3", "text-end", "p-0"], ["id", "chart-widget1"], [3, "chart", "dataLabels", "stroke", "xaxis", "yaxis", "grid", "fill", "colors", "series", "tooltip", "responsive"]],
    template: function CommonTopChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5)(11, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div")(14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "apx-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.subTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("txt-", ctx.data.colorClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.growth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chart", ctx.data.chart)("dataLabels", ctx.data.dataLabels)("stroke", ctx.data.stroke)("xaxis", ctx.data.xaxis)("yaxis", ctx.data.yaxis)("grid", ctx.data.grid)("fill", ctx.data.fill)("colors", ctx.data.colors)("series", ctx.data.series)("tooltip", ctx.data.tooltip)("responsive", ctx.data.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 19784:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/widgets/chart/crypto-annotations/crypto-annotations.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CryptoAnnotationsComponent: () => (/* binding */ CryptoAnnotationsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/widget/chart */ 94201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class CryptoAnnotationsComponent {
  constructor() {
    this.cryptoAnnotations = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.cryptoAnnotations;
  }
  static #_ = this.ɵfac = function CryptoAnnotationsComponent_Factory(t) {
    return new (t || CryptoAnnotationsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CryptoAnnotationsComponent,
    selectors: [["app-crypto-annotations"]],
    decls: 10,
    vars: 11,
    consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "chart-container"], [1, "row"], [1, "col-12"], ["id", "crypto-annotation"], [3, "series", "chart", "annotations", "dataLabels", "stroke", "grid", "title", "colors", "labels", "xaxis", "responsive"]],
    template: function CryptoAnnotationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Crypto Annotations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "apx-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.cryptoAnnotations.series)("chart", ctx.cryptoAnnotations.chart)("annotations", ctx.cryptoAnnotations.annotations)("dataLabels", ctx.cryptoAnnotations.dataLabels)("stroke", ctx.cryptoAnnotations.stroke)("grid", ctx.cryptoAnnotations.grid)("title", ctx.cryptoAnnotations.title)("colors", ctx.cryptoAnnotations.colors)("labels", ctx.cryptoAnnotations.labels)("xaxis", ctx.cryptoAnnotations.xaxis)("responsive", ctx.cryptoAnnotations.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 51620:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/widgets/chart/cryptocurrency-prices/cryptocurrency-prices.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CryptocurrencyPricesComponent: () => (/* binding */ CryptocurrencyPricesComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/widget/chart */ 94201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class CryptocurrencyPricesComponent {
  constructor() {
    this.cryptocurrencyPrices = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.cryptocurrencyPrices;
  }
  static #_ = this.ɵfac = function CryptocurrencyPricesComponent_Factory(t) {
    return new (t || CryptocurrencyPricesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CryptocurrencyPricesComponent,
    selectors: [["app-cryptocurrency-prices"]],
    decls: 10,
    vars: 10,
    consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "chart-container", "crypto-chart"], [1, "row"], [1, "col-12"], ["id", "chart-crypto"], [3, "chart", "dataLabels", "stroke", "xaxis", "grid", "fill", "colors", "series", "tooltip", "responsive"]],
    template: function CryptocurrencyPricesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Cryptocurrency Prices");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "apx-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chart", ctx.cryptocurrencyPrices.chart)("dataLabels", ctx.cryptocurrencyPrices.dataLabels)("stroke", ctx.cryptocurrencyPrices.stroke)("xaxis", ctx.cryptocurrencyPrices.xaxis)("grid", ctx.cryptocurrencyPrices.grid)("fill", ctx.cryptocurrencyPrices.fill)("colors", ctx.cryptocurrencyPrices.colors)("series", ctx.cryptocurrencyPrices.series)("tooltip", ctx.cryptocurrencyPrices.tooltip)("responsive", ctx.cryptocurrencyPrices.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 68234:
/*!***********************************************************************!*\
  !*** ./src/app/components/widgets/chart/finance/finance.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinanceComponent: () => (/* binding */ FinanceComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/widget/chart */ 94201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class FinanceComponent {
  constructor() {
    this.finance = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.finance;
  }
  static #_ = this.ɵfac = function FinanceComponent_Factory(t) {
    return new (t || FinanceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FinanceComponent,
    selectors: [["app-finance"]],
    decls: 8,
    vars: 11,
    consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "chart-container", "column-container"], ["id", "columnchart"], [3, "chart", "dataLabels", "stroke", "series", "title", "subtitle", "fill", "xaxis", "yaxis", "legend", "responsive"]],
    template: function FinanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "apx-chart", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chart", ctx.finance.chart)("dataLabels", ctx.finance.dataLabels)("stroke", ctx.finance.stroke)("series", ctx.finance.series)("title", ctx.finance.title)("subtitle", ctx.finance.subtitle)("fill", ctx.finance.fill)("xaxis", ctx.finance.xaxis)("yaxis", ctx.finance.yaxis)("legend", ctx.finance.legend)("responsive", ctx.finance.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 29763:
/*!***********************************************************************************!*\
  !*** ./src/app/components/widgets/chart/live-products/live-products.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiveProductsComponent: () => (/* binding */ LiveProductsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/widget/chart */ 94201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class LiveProductsComponent {
  constructor() {
    this.liveProducts = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.liveProducts;
  }
  static #_ = this.ɵfac = function LiveProductsComponent_Factory(t) {
    return new (t || LiveProductsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LiveProductsComponent,
    selectors: [["app-live-products"]],
    decls: 11,
    vars: 12,
    consts: [[1, "small-chart-widget", "chart-widgets-small"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "chart-container"], [1, "row"], [1, "col-12"], ["id", "chart-widget6"], [3, "chart", "stroke", "series", "fill", "dataLabels", "grid", "colors", "labels", "markers", "xaxis", "yaxis", "tooltip"]],
    template: function LiveProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Live Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "apx-chart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chart", ctx.liveProducts.chart)("stroke", ctx.liveProducts.stroke)("series", ctx.liveProducts.series)("fill", ctx.liveProducts.fill)("dataLabels", ctx.liveProducts.dataLabels)("grid", ctx.liveProducts.grid)("colors", ctx.liveProducts.colors)("labels", ctx.liveProducts.labels)("markers", ctx.liveProducts.markers)("xaxis", ctx.liveProducts.xaxis)("yaxis", ctx.liveProducts.yaxis)("tooltip", ctx.liveProducts.tooltip);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4927:
/*!***************************************************************************************!*\
  !*** ./src/app/components/widgets/chart/monthly-history/monthly-history.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthlyHistoryComponent: () => (/* binding */ MonthlyHistoryComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/widget/chart */ 94201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class MonthlyHistoryComponent {
  constructor() {
    this.monthlyHistory = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.monthlyHistory;
  }
  static #_ = this.ɵfac = function MonthlyHistoryComponent_Factory(t) {
    return new (t || MonthlyHistoryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MonthlyHistoryComponent,
    selectors: [["app-monthly-history"]],
    decls: 10,
    vars: 11,
    consts: [[1, "card", "o-hidden"], [1, "card-header"], [1, "bar-chart-widget"], [1, "bottom-content", "card-body"], [1, "row"], [1, "col-12"], ["id", "chart-widget4"], [3, "series", "chart", "plotOptions", "dataLabels", "stroke", "xaxis", "yaxis", "colors", "fill", "tooltip", "responsive"]],
    template: function MonthlyHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Monthly History");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "apx-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.monthlyHistory.series)("chart", ctx.monthlyHistory.chart)("plotOptions", ctx.monthlyHistory.plotOptions)("dataLabels", ctx.monthlyHistory.dataLabels)("stroke", ctx.monthlyHistory.stroke)("xaxis", ctx.monthlyHistory.xaxis)("yaxis", ctx.monthlyHistory.yaxis)("colors", ctx.monthlyHistory.colors)("fill", ctx.monthlyHistory.fill)("tooltip", ctx.monthlyHistory.tooltip)("responsive", ctx.monthlyHistory.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 96355:
/*!***********************************************************************************!*\
  !*** ./src/app/components/widgets/chart/monthly-sales/monthly-sales.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthlySalesComponent: () => (/* binding */ MonthlySalesComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/widget/chart */ 94201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class MonthlySalesComponent {
  constructor() {
    this.monthlySales = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.monthlySales;
  }
  static #_ = this.ɵfac = function MonthlySalesComponent_Factory(t) {
    return new (t || MonthlySalesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MonthlySalesComponent,
    selectors: [["app-monthly-sales"]],
    decls: 11,
    vars: 8,
    consts: [[1, "small-chart-widget", "chart-widgets-small"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "chart-container"], [1, "row"], [1, "col-12"], ["id", "chart-widget8"], [3, "fill", "colors", "chart", "series", "title", "stroke", "markers", "labels"]],
    template: function MonthlySalesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Monthly Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "apx-chart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fill", ctx.monthlySales.fill)("colors", ctx.monthlySales.colors)("chart", ctx.monthlySales.chart)("series", ctx.monthlySales.series)("title", ctx.monthlySales.title)("stroke", ctx.monthlySales.stroke)("markers", ctx.monthlySales.markers)("labels", ctx.monthlySales.labels);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 91057:
/*!*********************************************************************************!*\
  !*** ./src/app/components/widgets/chart/order-status/order-status.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderStatusComponent: () => (/* binding */ OrderStatusComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/widget/chart */ 94201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class OrderStatusComponent {
  constructor() {
    this.progress = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.progress;
    this.progress1 = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.progress1;
    this.progress2 = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.progress2;
    this.progress3 = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.progress3;
    this.progress4 = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.progress4;
  }
  static #_ = this.ɵfac = function OrderStatusComponent_Factory(t) {
    return new (t || OrderStatusComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OrderStatusComponent,
    selectors: [["app-order-status"]],
    decls: 28,
    vars: 60,
    consts: [[1, "card"], [1, "card-header"], [1, "header-top"], [1, "card-header-right-icon"], [1, "dropdown"], ["id", "dropdownMenuButton", "type", "button", "data-bs-toggle", "dropdown", 1, "btn", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body"], [1, "chart-container", "progress-chart"], ["id", "progress1"], [3, "chart", "plotOptions", "colors", "stroke", "fill", "series", "title", "subtitle", "tooltip", "xaxis", "yaxis", "responsive"], ["id", "progress2"], ["id", "progress3"], ["id", "progress4"], ["id", "progress5"]],
    template: function OrderStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Order Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8)(17, "div", 9)(18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "apx-chart", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "apx-chart", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "apx-chart", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "apx-chart", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "apx-chart", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chart", ctx.progress.chart)("plotOptions", ctx.progress.plotOptions)("colors", ctx.progress.colors)("stroke", ctx.progress.stroke)("fill", ctx.progress.fill)("series", ctx.progress.series)("title", ctx.progress.title)("subtitle", ctx.progress.subtitle)("tooltip", ctx.progress.tooltip)("xaxis", ctx.progress.xaxis)("yaxis", ctx.progress.yaxis)("responsive", ctx.progress.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chart", ctx.progress1.chart)("plotOptions", ctx.progress1.plotOptions)("colors", ctx.progress1.colors)("stroke", ctx.progress1.stroke)("fill", ctx.progress1.fill)("series", ctx.progress1.series)("title", ctx.progress1.title)("subtitle", ctx.progress1.subtitle)("tooltip", ctx.progress1.tooltip)("xaxis", ctx.progress1.xaxis)("yaxis", ctx.progress1.yaxis)("responsive", ctx.progress1.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chart", ctx.progress2.chart)("plotOptions", ctx.progress2.plotOptions)("colors", ctx.progress2.colors)("stroke", ctx.progress2.stroke)("fill", ctx.progress2.fill)("series", ctx.progress2.series)("title", ctx.progress2.title)("subtitle", ctx.progress2.subtitle)("tooltip", ctx.progress2.tooltip)("xaxis", ctx.progress2.xaxis)("yaxis", ctx.progress2.yaxis)("responsive", ctx.progress2.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chart", ctx.progress3.chart)("plotOptions", ctx.progress3.plotOptions)("colors", ctx.progress3.colors)("stroke", ctx.progress3.stroke)("fill", ctx.progress3.fill)("series", ctx.progress3.series)("title", ctx.progress3.title)("subtitle", ctx.progress3.subtitle)("tooltip", ctx.progress3.tooltip)("xaxis", ctx.progress3.xaxis)("yaxis", ctx.progress3.yaxis)("responsive", ctx.progress3.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chart", ctx.progress4.chart)("plotOptions", ctx.progress4.plotOptions)("colors", ctx.progress4.colors)("stroke", ctx.progress4.stroke)("fill", ctx.progress4.fill)("series", ctx.progress4.series)("title", ctx.progress4.title)("subtitle", ctx.progress4.subtitle)("tooltip", ctx.progress4.tooltip)("xaxis", ctx.progress4.xaxis)("yaxis", ctx.progress4.yaxis)("responsive", ctx.progress4.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 83665:
/*!***********************************************************************************!*\
  !*** ./src/app/components/widgets/chart/order-status2/order-status2.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderStatus2Component: () => (/* binding */ OrderStatus2Component)
/* harmony export */ });
/* harmony import */ var _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/widget/chart */ 94201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class OrderStatus2Component {
  constructor() {
    this.orderStatus2 = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.orderStatus2;
  }
  static #_ = this.ɵfac = function OrderStatus2Component_Factory(t) {
    return new (t || OrderStatus2Component)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OrderStatus2Component,
    selectors: [["app-order-status2"]],
    decls: 8,
    vars: 13,
    consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "chart-container"], ["id", "linechart"], [3, "chart", "dataLabels", "stroke", "grid", "fill", "colors", "markers", "series", "xaxis", "yaxis", "title", "legend", "responsive"]],
    template: function OrderStatus2Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Order Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "apx-chart", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chart", ctx.orderStatus2.chart)("dataLabels", ctx.orderStatus2.dataLabels)("stroke", ctx.orderStatus2.stroke)("grid", ctx.orderStatus2.grid)("fill", ctx.orderStatus2.fill)("colors", ctx.orderStatus2.colors)("markers", ctx.orderStatus2.markers)("series", ctx.orderStatus2.series)("xaxis", ctx.orderStatus2.xaxis)("yaxis", ctx.orderStatus2.yaxis)("title", ctx.orderStatus2.title)("legend", ctx.orderStatus2.legend)("responsive", ctx.orderStatus2.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78819:
/*!*********************************************************************************!*\
  !*** ./src/app/components/widgets/chart/skill-status/skill-status.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillStatusComponent: () => (/* binding */ SkillStatusComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/widget/chart */ 94201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class SkillStatusComponent {
  constructor() {
    this.skillStatus = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.skillStatus;
  }
  static #_ = this.ɵfac = function SkillStatusComponent_Factory(t) {
    return new (t || SkillStatusComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SkillStatusComponent,
    selectors: [["app-skill-status"]],
    decls: 8,
    vars: 7,
    consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "chart-container", "skill-chart"], ["id", "circlechart"], [3, "chart", "plotOptions", "series", "labels", "legend", "colors", "responsive"]],
    template: function SkillStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Skill Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "apx-chart", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chart", ctx.skillStatus.chart)("plotOptions", ctx.skillStatus.plotOptions)("series", ctx.skillStatus.series)("labels", ctx.skillStatus.labels)("legend", ctx.skillStatus.legend)("colors", ctx.skillStatus.colors)("responsive", ctx.skillStatus.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 16664:
/*!*********************************************************************************!*\
  !*** ./src/app/components/widgets/chart/stock-market/stock-market.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockMarketComponent: () => (/* binding */ StockMarketComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/widget/chart */ 94201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class StockMarketComponent {
  constructor() {
    this.stockMarket = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.stockMarket;
  }
  static #_ = this.ɵfac = function StockMarketComponent_Factory(t) {
    return new (t || StockMarketComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: StockMarketComponent,
    selectors: [["app-stock-market"]],
    decls: 8,
    vars: 10,
    consts: [[1, "donut-chart-widget"], [1, "card"], [1, "card-header"], [1, "card-body"], ["id", "chart-widget13"], [3, "series", "plotOptions", "legend", "fill", "chart", "stroke", "tooltip", "xaxis", "grid", "responsive"]],
    template: function StockMarketComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Stock Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "apx-chart", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.stockMarket.series)("plotOptions", ctx.stockMarket.plotOptions)("legend", ctx.stockMarket.legend)("fill", ctx.stockMarket.fill)("chart", ctx.stockMarket.chart)("stroke", ctx.stockMarket.stroke)("tooltip", ctx.stockMarket.tooltip)("xaxis", ctx.stockMarket.xaxis)("grid", ctx.stockMarket.grid)("responsive", ctx.stockMarket.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 79602:
/*!***************************************************************************!*\
  !*** ./src/app/components/widgets/chart/turn-over/turn-over.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TurnOverComponent: () => (/* binding */ TurnOverComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/widget/chart */ 94201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class TurnOverComponent {
  constructor() {
    this.turnOver = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.turnOver;
  }
  static #_ = this.ɵfac = function TurnOverComponent_Factory(t) {
    return new (t || TurnOverComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TurnOverComponent,
    selectors: [["app-turn-over"]],
    decls: 10,
    vars: 9,
    consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "chart-container"], [1, "row"], [1, "col-12"], ["id", "chart-widget7"], [3, "chart", "dataLabels", "stroke", "xaxis", "grid", "fill", "colors", "series", "tooltip"]],
    template: function TurnOverComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Turn over");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "apx-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chart", ctx.turnOver.chart)("dataLabels", ctx.turnOver.dataLabels)("stroke", ctx.turnOver.stroke)("xaxis", ctx.turnOver.xaxis)("grid", ctx.turnOver.grid)("fill", ctx.turnOver.fill)("colors", ctx.turnOver.colors)("series", ctx.turnOver.series)("tooltip", ctx.turnOver.tooltip);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 20230:
/*!*****************************************************************!*\
  !*** ./src/app/components/widgets/chart/uses/uses.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsesComponent: () => (/* binding */ UsesComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/widget/chart */ 94201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class UsesComponent {
  constructor() {
    this.uses = _shared_data_widget_chart__WEBPACK_IMPORTED_MODULE_0__.uses;
  }
  static #_ = this.ɵfac = function UsesComponent_Factory(t) {
    return new (t || UsesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UsesComponent,
    selectors: [["app-uses"]],
    decls: 11,
    vars: 8,
    consts: [[1, "small-chart-widget", "chart-widgets-small"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "chart-container"], [1, "row"], [1, "col-12"], ["id", "chart-widget9"], [3, "chart", "dataLabels", "series", "fill", "colors", "title", "xaxis", "yaxis"]],
    template: function UsesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Uses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "apx-chart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chart", ctx.uses.chart)("dataLabels", ctx.uses.dataLabels)("series", ctx.uses.series)("fill", ctx.uses.fill)("colors", ctx.uses.colors)("title", ctx.uses.title)("xaxis", ctx.uses.xaxis)("yaxis", ctx.uses.yaxis);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 21260:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/widgets/general/followers-growth/followers-growth.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FollowersGrowthComponent: () => (/* binding */ FollowersGrowthComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_widget_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/widget/general */ 56026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class FollowersGrowthComponent {
  constructor() {
    this.followersGrowth = _shared_data_widget_general__WEBPACK_IMPORTED_MODULE_0__.followersGrowth;
  }
  static #_ = this.ɵfac = function FollowersGrowthComponent_Factory(t) {
    return new (t || FollowersGrowthComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FollowersGrowthComponent,
    selectors: [["app-followers-growth"]],
    decls: 19,
    vars: 9,
    consts: [[1, "card", "growth-wrap"], [1, "card-header", "card-no-border", "pb-0"], [1, "header-top"], [1, "dropdown", "icon-dropdown"], ["id", "growthdropdown", "type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "dropdown-toggle"], [1, "icon-more-alt"], ["aria-labelledby", "growthdropdown", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body"], [1, "growth-wrapper"], ["id", "growthchart"], [3, "series", "chart", "grid", "colors", "stroke", "xaxis", "fill", "yaxis", "responsive"]],
    template: function FollowersGrowthComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Followers Growth");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.followersGrowth.series)("chart", ctx.followersGrowth.chart)("grid", ctx.followersGrowth.grid)("colors", ctx.followersGrowth.colors)("stroke", ctx.followersGrowth.stroke)("xaxis", ctx.followersGrowth.xaxis)("fill", ctx.followersGrowth.fill)("yaxis", ctx.followersGrowth.yaxis)("responsive", ctx.followersGrowth.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50743:
/*!*****************************************************************!*\
  !*** ./src/app/components/widgets/general/general.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralComponent: () => (/* binding */ GeneralComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/dashboard/crypto */ 83634);
/* harmony import */ var _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/data/dashboard/default */ 37248);
/* harmony import */ var _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/data/dashboard/online-course */ 62665);
/* harmony import */ var _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/data/dashboard/social */ 38108);
/* harmony import */ var _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/data/dashboard/ecommerce */ 47777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _dashboard_default_product_status_chart_box_product_status_chart_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dashboard/default/product-status-chart-box/product-status-chart-box.component */ 43479);
/* harmony import */ var _dashboard_online_course_hello_name_courses_courses_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dashboard/online-course/hello-name/courses/courses.component */ 67540);
/* harmony import */ var _dashboard_social_social_media_social_media_chart_social_media_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dashboard/social/social-media/social-media-chart/social-media-chart.component */ 11221);
/* harmony import */ var _dashboard_default_orders_profit_orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dashboard/default/orders-profit/orders/orders.component */ 82039);
/* harmony import */ var _dashboard_default_orders_profit_profit_profit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dashboard/default/orders-profit/profit/profit.component */ 92424);
/* harmony import */ var _dashboard_ecommerce_left_content_order_board_sale_status_sale_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../dashboard/ecommerce/left-content/order-board/sale-status/sale-status.component */ 32235);
/* harmony import */ var _dashboard_crypto_crypto_right_content_balance_profile_balance_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../dashboard/crypto/crypto-right-content/balance-profile/balance-profile.component */ 30919);
/* harmony import */ var _followers_growth_followers_growth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./followers-growth/followers-growth.component */ 21260);
/* harmony import */ var _visitors_visitors_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./visitors/visitors.component */ 75021);
/* harmony import */ var _widgest_coins_widgest_coins_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widgest-coins/widgest-coins.component */ 12095);
/* harmony import */ var _total_userswidgets_total_userswidgets_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./total-userswidgets/total-userswidgets.component */ 29587);





















const _c0 = function () {
  return ["Widgets"];
};
class GeneralComponent {
  constructor(calendar) {
    this.calendar = calendar;
    this.purchase = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_1__.purchase;
    this.salesReturn = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_1__.salesReturn;
    this.sales = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_1__.sales;
    this.purchaseRate = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_1__.purchaseRate;
    this.completed = _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_2__.completed;
    this.progress = _shared_data_dashboard_online_course__WEBPACK_IMPORTED_MODULE_2__.progress;
    this.facebook = _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_3__.facebook;
    this.instagram = _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_3__.instagram;
    this.twitter = _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_3__.twitter;
    this.youtube = _shared_data_dashboard_social__WEBPACK_IMPORTED_MODULE_3__.youtube;
    this.newOrders = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_4__.newOrders;
    this.newCustomers = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_4__.newCustomers;
    this.averageSale = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_4__.averageSale;
    this.grossProfit = _shared_data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_4__.grossProfit;
    this.averageSales = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.averageSales;
    this.averageProfit = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.averageProfit;
    this.model = calendar.getToday();
  }
  selectToday() {
    this.model = this.calendar.getToday();
  }
  static #_ = this.ɵfac = function GeneralComponent_Factory(t) {
    return new (t || GeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbCalendar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: GeneralComponent,
    selectors: [["app-general"]],
    decls: 60,
    vars: 19,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-6", "col-xl-3", "col-lg-6", "box-col-6"], [3, "data"], [1, "col-xxl-3", "col-xl-4", "col-md-6", "box-col-6"], [1, "col-sm-12"], [1, "col-xxl-4", "col-xl-5", "col-md-6", "box-col-6"], [1, "col-xl-12"], [1, "col-xxl-5", "col-xl-3", "col-md-12", "box-col-12"], [1, "col-xl-3", "col-sm-6"], [1, "col-xxl-5", "col-xl-8", "box-col-12"], [1, "row", "g-sm-3", "height-equal-2", "widget-charts"], [1, "col-sm-6"], [1, "card", "small-widget", "mb-sm-0"], [1, "col-xxl-3", "col-xl-4", "col-sm-6", "box-col-6"], [1, "col-xl-4", "d-xxl-block", "d-xl-none", "col-sm-6", "box-col-6"], [1, "card", "height-equal-2"], [1, "card-body"], [1, "default-datepicker", "custom-datepicker"], ["data-language", "en", 1, "datepicker-here"], [3, "ngModel", "ngModelChange"]],
    template: function GeneralComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "app-widgest-coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "app-product-status-chart-box", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](7, "app-product-status-chart-box", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "app-product-status-chart-box", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](11, "app-product-status-chart-box", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "div", 5)(13, "div", 2)(14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](15, "app-courses", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](17, "app-courses", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 7)(19, "div", 2)(20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](21, "app-total-userswidgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](23, "app-followers-growth");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](25, "app-visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](27, "app-social-media-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](29, "app-social-media-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](31, "app-social-media-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](33, "app-social-media-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "div", 11)(35, "div", 12)(36, "div", 13)(37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](38, "app-sale-status", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](39, "div", 13)(40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](41, "app-sale-status", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](42, "div", 13)(43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](44, "app-sale-status", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](45, "div", 13)(46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](47, "app-sale-status", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](49, "app-orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](51, "app-profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](53, "app-balance-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](54, "div", 16)(55, "div", 17)(56, "div", 18)(57, "div", 19)(58, "div", 20)(59, "ngb-datepicker", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function GeneralComponent_Template_ngb_datepicker_ngModelChange_59_listener($event) {
          return ctx.model = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("title", "General")("items", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](18, _c0))("active_item", "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx.purchase);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx.salesReturn);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx.sales);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx.purchaseRate);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx.progress);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx.facebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx.instagram);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx.twitter);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx.youtube);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx.newOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx.newCustomers);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx.averageSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx.grossProfit);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx.model);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbComponent, _dashboard_default_product_status_chart_box_product_status_chart_box_component__WEBPACK_IMPORTED_MODULE_6__.ProductStatusChartBoxComponent, _dashboard_online_course_hello_name_courses_courses_component__WEBPACK_IMPORTED_MODULE_7__.CoursesComponent, _dashboard_social_social_media_social_media_chart_social_media_chart_component__WEBPACK_IMPORTED_MODULE_8__.SocialMediaChartComponent, _dashboard_default_orders_profit_orders_orders_component__WEBPACK_IMPORTED_MODULE_9__.OrdersComponent, _dashboard_default_orders_profit_profit_profit_component__WEBPACK_IMPORTED_MODULE_10__.ProfitComponent, _dashboard_ecommerce_left_content_order_board_sale_status_sale_status_component__WEBPACK_IMPORTED_MODULE_11__.SaleStatusComponent, _dashboard_crypto_crypto_right_content_balance_profile_balance_profile_component__WEBPACK_IMPORTED_MODULE_12__.BalanceProfileComponent, _followers_growth_followers_growth_component__WEBPACK_IMPORTED_MODULE_13__.FollowersGrowthComponent, _visitors_visitors_component__WEBPACK_IMPORTED_MODULE_14__.VisitorsComponent, _widgest_coins_widgest_coins_component__WEBPACK_IMPORTED_MODULE_15__.WidgestCoinsComponent, _total_userswidgets_total_userswidgets_component__WEBPACK_IMPORTED_MODULE_16__.TotalUserswidgetsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 29587:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/widgets/general/total-userswidgets/total-userswidgets.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TotalUserswidgetsComponent: () => (/* binding */ TotalUserswidgetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/feather-icons/feather-icons.component */ 49177);


class TotalUserswidgetsComponent {
  constructor() {
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function TotalUserswidgetsComponent_Factory(t) {
    return new (t || TotalUserswidgetsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TotalUserswidgetsComponent,
    selectors: [["app-total-userswidgets"]],
    decls: 39,
    vars: 3,
    consts: [[1, "card"], [1, "card-header", "card-no-border", "pb-0"], [1, "header-top"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [3, "icon"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "py-lg-3"], [1, "user-list"], [1, "user-icon", "primary"], [1, "user-box"], ["data-feather", "user-plus", 1, "font-primary"], [1, "mb-1"], [1, "font-primary", "d-flex", "align-items-center"], [1, "icon-arrow-up", "icon-rotate", "me-1"], [1, "f-w-500"], [1, "user-icon", "success"], ["data-feather", "user-minus", 1, "font-success"], [1, "font-danger", "d-flex", "align-items-center"], [1, "icon-arrow-down", "icon-rotate", "me-1"]],
    template: function TotalUserswidgetsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Total Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TotalUserswidgetsComponent_Template_button_click_6_listener() {
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

/***/ 75021:
/*!***************************************************************************!*\
  !*** ./src/app/components/widgets/general/visitors/visitors.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisitorsComponent: () => (/* binding */ VisitorsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_widget_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/widget/general */ 56026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 57854);



class VisitorsComponent {
  constructor() {
    this.visitors = _shared_data_widget_general__WEBPACK_IMPORTED_MODULE_0__.visitors;
    this.show = false;
  }
  toggle() {
    this.show = !this.show;
  }
  static #_ = this.ɵfac = function VisitorsComponent_Factory(t) {
    return new (t || VisitorsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: VisitorsComponent,
    selectors: [["app-visitors"]],
    decls: 24,
    vars: 14,
    consts: [[1, "card", "visitor-card"], [1, "card-header", "card-no-border", "pb-0"], [1, "header-top"], [1, "m-0"], [1, "f-14", "font-primary", "f-w-500", "ms-1"], [1, "svg-fill", "me-1"], ["href", "assets/svg/icon-sprite.svg#user-visitor"], [1, "card-header-right-icon"], [1, "dropdown", "icon-dropdown"], ["type", "button", 1, "btn", "dropdown-toggle", 3, "click"], [1, "icon-more-alt"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "#", 1, "dropdown-item"], [1, "card-body", "pt-3"], [1, "visitors-container"], ["id", "visitor-chart"], [3, "series", "chart", "plotOptions", "dataLabels", "stroke", "grid", "colors", "xaxis", "yaxis", "fill", "legend", "responsive"]],
    template: function VisitorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "(+2.8)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitorsComponent_Template_button_click_11_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11)(14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13)(21, "div", 14)(22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "apx-chart", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.visitors.series)("chart", ctx.visitors.chart)("plotOptions", ctx.visitors.plotOptions)("dataLabels", ctx.visitors.dataLabels)("stroke", ctx.visitors.stroke)("grid", ctx.visitors.grid)("colors", ctx.visitors.colors)("xaxis", ctx.visitors.xaxis)("yaxis", ctx.visitors.yaxis)("fill", ctx.visitors.fill)("legend", ctx.visitors.legend)("responsive", ctx.visitors.responsive);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 12095:
/*!*************************************************************************************!*\
  !*** ./src/app/components/widgets/general/widgest-coins/widgest-coins.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidgestCoinsComponent: () => (/* binding */ WidgestCoinsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/data/dashboard/crypto */ 83634);
/* harmony import */ var _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/data/dashboard/default */ 37248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _dashboard_crypto_crypto_middle_content_coin_coin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dashboard/crypto/crypto-middle-content/coin/coin.component */ 58956);
/* harmony import */ var _dashboard_crypto_crypto_left_content_average_average_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dashboard/crypto/crypto-left-content/average/average.component */ 4678);





class WidgestCoinsComponent {
  constructor() {
    this.Bitcoin = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.Bitcoin;
    this.Ethereum = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.Ethereum;
    this.LeaveTravel = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.LeaveTravel;
    this.salesReturn = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_1__.salesReturn;
    this.averageProfit = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.averageProfit;
    this.averageSales = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.averageSales;
  }
  static #_ = this.ɵfac = function WidgestCoinsComponent_Factory(t) {
    return new (t || WidgestCoinsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: WidgestCoinsComponent,
    selectors: [["app-widgest-coins"]],
    decls: 11,
    vars: 5,
    consts: [[1, "row"], [1, "col-sm-4", "col-xxl-2"], [3, "data"], [1, "col-xxl-3", "col-sm-6"]],
    template: function WidgestCoinsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-coin", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-coin", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-coin", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-average", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-average", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.Bitcoin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.Ethereum);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.LeaveTravel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.averageProfit);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.averageSales);
      }
    },
    dependencies: [_dashboard_crypto_crypto_middle_content_coin_coin_component__WEBPACK_IMPORTED_MODULE_2__.CoinComponent, _dashboard_crypto_crypto_left_content_average_average_component__WEBPACK_IMPORTED_MODULE_3__.AverageComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 63378:
/*!**************************************************************!*\
  !*** ./src/app/components/widgets/widgets-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidgetsRoutingModule: () => (/* binding */ WidgetsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general/general.component */ 50743);
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/chart.component */ 44027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);





const routes = [{
  path: '',
  children: [{
    path: 'general',
    component: _general_general_component__WEBPACK_IMPORTED_MODULE_0__.GeneralComponent
  }, {
    path: 'chart',
    component: _chart_chart_component__WEBPACK_IMPORTED_MODULE_1__.ChartComponent
  }]
}];
class WidgetsRoutingModule {
  static #_ = this.ɵfac = function WidgetsRoutingModule_Factory(t) {
    return new (t || WidgetsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: WidgetsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WidgetsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 60666:
/*!******************************************************!*\
  !*** ./src/app/components/widgets/widgets.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidgetsModule: () => (/* binding */ WidgetsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _widgets_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets-routing.module */ 63378);
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/chart.component */ 44027);
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general/general.component */ 50743);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-chartist */ 83568);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2-charts */ 46673);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 56208);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-apexcharts */ 57854);
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.module */ 51010);
/* harmony import */ var _general_followers_growth_followers_growth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general/followers-growth/followers-growth.component */ 21260);
/* harmony import */ var _general_visitors_visitors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general/visitors/visitors.component */ 75021);
/* harmony import */ var _chart_common_top_chart_common_top_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chart/common-top-chart/common-top-chart.component */ 17128);
/* harmony import */ var _chart_monthly_history_monthly_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chart/monthly-history/monthly-history.component */ 4927);
/* harmony import */ var _chart_uses_uses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chart/uses/uses.component */ 20230);
/* harmony import */ var _chart_monthly_sales_monthly_sales_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chart/monthly-sales/monthly-sales.component */ 96355);
/* harmony import */ var _chart_order_status2_order_status2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chart/order-status2/order-status2.component */ 83665);
/* harmony import */ var _chart_finance_finance_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chart/finance/finance.component */ 68234);
/* harmony import */ var _chart_stock_market_stock_market_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chart/stock-market/stock-market.component */ 16664);
/* harmony import */ var _chart_crypto_annotations_crypto_annotations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chart/crypto-annotations/crypto-annotations.component */ 19784);
/* harmony import */ var _chart_cryptocurrency_prices_cryptocurrency_prices_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chart/cryptocurrency-prices/cryptocurrency-prices.component */ 51620);
/* harmony import */ var _chart_turn_over_turn_over_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chart/turn-over/turn-over.component */ 79602);
/* harmony import */ var _chart_live_products_live_products_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chart/live-products/live-products.component */ 29763);
/* harmony import */ var _chart_order_status_order_status_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./chart/order-status/order-status.component */ 91057);
/* harmony import */ var _chart_skill_status_skill_status_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chart/skill-status/skill-status.component */ 78819);
/* harmony import */ var _general_widgest_coins_widgest_coins_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./general/widgest-coins/widgest-coins.component */ 12095);
/* harmony import */ var _general_total_userswidgets_total_userswidgets_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./general/total-userswidgets/total-userswidgets.component */ 29587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 61699);






























class WidgetsModule {
  static #_ = this.ɵfac = function WidgetsModule_Factory(t) {
    return new (t || WidgetsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
    type: WidgetsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _widgets_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_25__.CarouselModule, ng_chartist__WEBPACK_IMPORTED_MODULE_26__.ChartistModule, ng2_charts__WEBPACK_IMPORTED_MODULE_27__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_29__.NgApexchartsModule, _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__.DashboardModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](WidgetsModule, {
    declarations: [_chart_chart_component__WEBPACK_IMPORTED_MODULE_1__.ChartComponent, _general_general_component__WEBPACK_IMPORTED_MODULE_2__.GeneralComponent, _general_followers_growth_followers_growth_component__WEBPACK_IMPORTED_MODULE_5__.FollowersGrowthComponent, _general_visitors_visitors_component__WEBPACK_IMPORTED_MODULE_6__.VisitorsComponent, _chart_common_top_chart_common_top_chart_component__WEBPACK_IMPORTED_MODULE_7__.CommonTopChartComponent, _chart_monthly_history_monthly_history_component__WEBPACK_IMPORTED_MODULE_8__.MonthlyHistoryComponent, _chart_uses_uses_component__WEBPACK_IMPORTED_MODULE_9__.UsesComponent, _chart_monthly_sales_monthly_sales_component__WEBPACK_IMPORTED_MODULE_10__.MonthlySalesComponent, _chart_order_status2_order_status2_component__WEBPACK_IMPORTED_MODULE_11__.OrderStatus2Component, _chart_finance_finance_component__WEBPACK_IMPORTED_MODULE_12__.FinanceComponent, _chart_stock_market_stock_market_component__WEBPACK_IMPORTED_MODULE_13__.StockMarketComponent, _chart_crypto_annotations_crypto_annotations_component__WEBPACK_IMPORTED_MODULE_14__.CryptoAnnotationsComponent, _chart_cryptocurrency_prices_cryptocurrency_prices_component__WEBPACK_IMPORTED_MODULE_15__.CryptocurrencyPricesComponent, _chart_turn_over_turn_over_component__WEBPACK_IMPORTED_MODULE_16__.TurnOverComponent, _chart_live_products_live_products_component__WEBPACK_IMPORTED_MODULE_17__.LiveProductsComponent, _chart_order_status_order_status_component__WEBPACK_IMPORTED_MODULE_18__.OrderStatusComponent, _chart_skill_status_skill_status_component__WEBPACK_IMPORTED_MODULE_19__.SkillStatusComponent, _general_widgest_coins_widgest_coins_component__WEBPACK_IMPORTED_MODULE_20__.WidgestCoinsComponent, _general_total_userswidgets_total_userswidgets_component__WEBPACK_IMPORTED_MODULE_21__.TotalUserswidgetsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _widgets_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_25__.CarouselModule, ng_chartist__WEBPACK_IMPORTED_MODULE_26__.ChartistModule, ng2_charts__WEBPACK_IMPORTED_MODULE_27__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_29__.NgApexchartsModule, _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__.DashboardModule]
  });
})();

/***/ }),

/***/ 94201:
/*!*********************************************!*\
  !*** ./src/app/shared/data/widget/chart.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chart2: () => (/* binding */ chart2),
/* harmony export */   chart3: () => (/* binding */ chart3),
/* harmony export */   cryptoAnnotations: () => (/* binding */ cryptoAnnotations),
/* harmony export */   cryptocurrencyPrices: () => (/* binding */ cryptocurrencyPrices),
/* harmony export */   finance: () => (/* binding */ finance),
/* harmony export */   liveProducts: () => (/* binding */ liveProducts),
/* harmony export */   monthlyHistory: () => (/* binding */ monthlyHistory),
/* harmony export */   monthlySales: () => (/* binding */ monthlySales),
/* harmony export */   optionslinechart: () => (/* binding */ optionslinechart),
/* harmony export */   orderStatus2: () => (/* binding */ orderStatus2),
/* harmony export */   progress: () => (/* binding */ progress),
/* harmony export */   progress1: () => (/* binding */ progress1),
/* harmony export */   progress2: () => (/* binding */ progress2),
/* harmony export */   progress3: () => (/* binding */ progress3),
/* harmony export */   progress4: () => (/* binding */ progress4),
/* harmony export */   skillStatus: () => (/* binding */ skillStatus),
/* harmony export */   stockMarket: () => (/* binding */ stockMarket),
/* harmony export */   turnOver: () => (/* binding */ turnOver),
/* harmony export */   uses: () => (/* binding */ uses)
/* harmony export */ });
let trigoStrength = 3;
let primary_color = localStorage.getItem("primary_color") || "#7366ff";
let secondary_color = localStorage.getItem("secondary_color") || "#f73164";
var iteration = 11;
function getRandom() {
  var i = iteration;
  return (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2);
}
let optionslinechart = {
  chart: {
    toolbar: {
      show: false
    },
    height: 200,
    type: "area"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 3,
    curve: "smooth"
  },
  xaxis: {
    show: false,
    type: "datetime",
    categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00", "2018-09-19T09:30:00", "2018-09-19T10:30:00"],
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    }
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  grid: {
    show: false,
    padding: {
      left: -10,
      top: -25,
      right: -60,
      bottom: -40
    }
  },
  fill: {
    opacity: 0.2
  },
  colors: [primary_color],
  series: [{
    data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0]
  }],
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  },
  responsive: [{
    breakpoint: 576,
    options: {
      chart: {
        height: 100
      }
    }
  }],
  title: "Total Sale",
  count: "$3654.00",
  subTitle: "Compare to last month",
  growth: "+65%",
  colorClass: "success"
};
let chart2 = {
  chart: {
    toolbar: {
      show: false
    },
    height: 200,
    type: "area"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 3,
    curve: "smooth"
  },
  xaxis: {
    show: false,
    type: "datetime",
    categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00", "2018-09-19T09:30:00", "2018-09-19T10:30:00"],
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    }
  },
  yaxis: {
    show: false
  },
  grid: {
    show: false,
    padding: {
      left: -10,
      top: -25,
      right: -60,
      bottom: -40
    }
  },
  fill: {
    opacity: 0.2
  },
  colors: [secondary_color],
  series: [{
    name: "series1",
    data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0]
  }],
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  },
  responsive: [{
    breakpoint: 576,
    options: {
      chart: {
        height: 100
      }
    }
  }],
  title: "Total Project",
  count: "12569",
  subTitle: "Compare to last month",
  growth: "+65%",
  colorClass: "success"
};
let chart3 = {
  chart: {
    toolbar: {
      show: false
    },
    height: 200,
    type: "area"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 3,
    curve: "smooth"
  },
  xaxis: {
    show: false,
    type: "datetime",
    categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00", "2018-09-19T09:30:00", "2018-09-19T10:30:00"],
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    }
  },
  yaxis: {
    show: false
  },
  grid: {
    show: false,
    padding: {
      left: -10,
      top: -25,
      right: -60,
      bottom: -40
    }
  },
  fill: {
    opacity: 0.2
  },
  colors: ["#51bb25"],
  series: [{
    data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0]
  }],
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  },
  responsive: [{
    breakpoint: 576,
    options: {
      chart: {
        height: 100
      }
    }
  }],
  title: "Total Product",
  count: "93M",
  subTitle: "Compare to last month",
  growth: "+65%",
  colorClass: "success"
};
let monthlyHistory = {
  series: [{
    name: "Profit",
    data: [100, 50, 25, 50, 30, 50, 70]
  }, {
    name: "Revenue",
    data: [70, 20, 55, 45, 35, 110, 85]
  }, {
    name: "Cash Flow",
    data: [85, 55, 100, 35, 90, 60, 80]
  }],
  chart: {
    type: "bar",
    height: 380,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "30%",
      endingShape: "rounded"
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 1,
    colors: ["transparent"],
    curve: "smooth",
    lineCap: "butt"
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    floating: false,
    axisTicks: {
      show: false
    },
    axisBorder: {
      color: "#C4C4C4"
    }
  },
  yaxis: {
    title: {
      text: "Dollars in thounand",
      style: {
        fontSize: "14px",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 500
      }
    }
  },
  colors: [secondary_color, "#51bb25", primary_color],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.9,
      stops: [0, 100]
    }
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      }
    }
  },
  responsive: [{
    breakpoint: 576,
    options: {
      chart: {
        height: 200
      }
    }
  }]
};
let skillStatus = {
  chart: {
    type: "radialBar",
    height: 375,
    offsetY: -30,
    offsetX: 20
  },
  plotOptions: {
    radialBar: {
      size: undefined,
      inverseOrder: false,
      hollow: {
        margin: 10,
        size: "30%",
        background: "transparent"
      },
      track: {
        show: true,
        background: "#f2f2f2",
        strokeWidth: "10%",
        opacity: 1,
        margin: 3
      }
    }
  },
  series: [90, 63, 50],
  labels: ["Skill 01", "Skill 02", "Skill 03"],
  legend: {
    show: true,
    fontSize: "16px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 500,
    labels: {
      colors: "#2C323F"
    },
    markers: {
      width: 86,
      height: 18,
      radius: 3
    }
  },
  colors: [secondary_color, primary_color, "#51bb25"],
  responsive: [{
    breakpoint: 767,
    options: {
      title: {
        style: {
          fontSize: "16px"
        }
      }
    }
  }]
};
let progress = {
  chart: {
    height: 70,
    type: "bar",
    stacked: true,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "15%",
      colors: {
        backgroundBarColors: [primary_color],
        backgroundBarOpacity: 0.2
      }
    }
  },
  colors: [primary_color],
  stroke: {
    width: 0
  },
  fill: {
    colors: [primary_color],
    type: "gradient",
    gradient: {
      gradientToColors: [primary_color]
    }
  },
  series: [{
    name: "Process 1",
    data: [44]
  }],
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: "Packed",
    style: {
      fontSize: "18px",
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500
    }
  },
  subtitle: {
    floating: true,
    align: "right",
    offsetY: 0,
    text: "44%",
    style: {
      fontSize: "14px"
    }
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    categories: ["Packed"]
  },
  yaxis: {
    max: 100
  },
  responsive: [{
    breakpoint: 767,
    options: {
      title: {
        style: {
          fontSize: "16px"
        }
      }
    }
  }]
};
let progress1 = {
  chart: {
    height: 70,
    type: "bar",
    stacked: true,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "15%",
      colors: {
        backgroundBarColors: [secondary_color],
        backgroundBarOpacity: 0.2,
        backgroundBarRadius: 10
      }
    }
  },
  colors: [secondary_color],
  stroke: {
    width: 0
  },
  series: [{
    name: "Dispatched",
    data: [40]
  }],
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: "Dispatched",
    style: {
      fontSize: "18px",
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500
    }
  },
  subtitle: {
    floating: true,
    align: "right",
    offsetY: 0,
    text: "44%",
    style: {
      fontSize: "14px"
    }
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    categories: ["Process 2"]
  },
  yaxis: {
    max: 100
  },
  fill: {
    colors: [secondary_color],
    type: "gradient",
    gradient: {
      inverseColors: false,
      gradientToColors: [secondary_color]
    }
  },
  responsive: [{
    breakpoint: 767,
    options: {
      title: {
        style: {
          fontSize: "16px"
        }
      }
    }
  }]
};
let progress2 = {
  chart: {
    height: 70,
    type: "bar",
    stacked: true,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "15%",
      colors: {
        backgroundBarColors: ["#a927f9"],
        backgroundBarOpacity: 0.2,
        backgroundBarRadius: 10
      }
    }
  },
  colors: ["#a927f9"],
  stroke: {
    width: 0
  },
  series: [{
    name: "Reach Station",
    data: [50]
  }],
  fill: {
    colors: ["#a927f9"],
    type: "gradient",
    gradient: {
      gradientToColors: ["#a927f9"]
    }
  },
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: "Reach Station",
    style: {
      fontSize: "18px",
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500
    }
  },
  subtitle: {
    floating: true,
    align: "right",
    offsetY: 0,
    text: "50%",
    style: {
      fontSize: "14px"
    }
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    categories: ["Reach Station"]
  },
  yaxis: {
    max: 100
  },
  responsive: [{
    breakpoint: 767,
    options: {
      title: {
        style: {
          fontSize: "16px"
        }
      }
    }
  }]
};
let progress3 = {
  chart: {
    height: 70,
    type: "bar",
    stacked: true,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "15%",
      colors: {
        backgroundBarColors: ["#F8D62B"],
        backgroundBarOpacity: 0.2,
        backgroundBarRadius: 10
      }
    }
  },
  colors: ["#F8D62B"],
  stroke: {
    width: 0
  },
  series: [{
    name: "Out for delivery",
    data: [60]
  }],
  fill: {
    colors: ["#F8D62B"],
    type: "gradient",
    gradient: {
      gradientToColors: ["#F8D62B"]
    }
  },
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: "Out for delivery",
    style: {
      fontSize: "18px",
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500
    }
  },
  subtitle: {
    floating: true,
    align: "right",
    offsetY: 0,
    text: "60%",
    style: {
      fontSize: "14px"
    }
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    categories: ["Out for delivery"]
  },
  yaxis: {
    max: 100
  },
  responsive: [{
    breakpoint: 767,
    options: {
      title: {
        style: {
          fontSize: "16px"
        }
      }
    }
  }]
};
let progress4 = {
  chart: {
    height: 70,
    type: "bar",
    stacked: true,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "15%",
      colors: {
        backgroundBarColors: ["#51BB25"],
        backgroundBarOpacity: 0.2,
        backgroundBarRadius: 10
      }
    }
  },
  colors: ["#51BB25"],
  stroke: {
    width: 0
  },
  series: [{
    name: "Delivered",
    data: [74]
  }],
  fill: {
    colors: ["#51BB25"],
    type: "gradient",
    gradient: {
      gradientToColors: ["#51BB25"]
    }
  },
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: "Delivered",
    style: {
      fontSize: "18px",
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500
    }
  },
  subtitle: {
    floating: true,
    align: "right",
    offsetY: 0,
    text: "74%",
    style: {
      fontSize: "14px"
    }
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    categories: ["Delivered"]
  },
  yaxis: {
    max: 100
  },
  responsive: [{
    breakpoint: 767,
    options: {
      title: {
        style: {
          fontSize: "16px"
        }
      }
    }
  }]
};
let liveProducts = {
  chart: {
    height: 320,
    type: "area",
    toolbar: {
      show: false
    }
  },
  stroke: {
    curve: "smooth",
    width: 0
  },
  series: [{
    name: "TEAM A",
    data: [50, 120, 90, 100, 70, 95, 40, 55, 30, 0]
  }, {
    name: "TEAM B",
    data: [35, 60, 40, 90, 70, 110, 90, 120, 60, 0]
  }],
  fill: {
    colors: [primary_color, secondary_color],
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 0.9,
      opacityTo: 0.8,
      stops: [0, 100]
    }
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    borderColor: "rgba(196,196,196, 0.3)",
    padding: {
      top: 0,
      right: -120,
      bottom: 10
    }
  },
  colors: [primary_color, secondary_color],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  markers: {
    size: 0
  },
  xaxis: {
    axisTicks: {
      show: false
    },
    axisBorder: {
      color: "rgba(196,196,196, 0.3)"
    }
  },
  yaxis: [{
    title: {
      text: "Dollars in thounand"
    }
  }],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      }
    }
  }
};
let turnOver = {
  chart: {
    toolbar: {
      show: false
    },
    height: 300,
    type: "area"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 3,
    curve: "smooth"
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  grid: {
    borderColor: "rgba(196,196,196, 0.3)",
    padding: {
      top: -20,
      right: -55,
      bottom: 0
    }
  },
  fill: {
    opacity: 0.2
  },
  colors: [primary_color],
  series: [{
    data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0]
  }],
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  }
};
let cryptocurrencyPrices = {
  chart: {
    toolbar: {
      show: false
    },
    height: 400,
    type: "area"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 3,
    curve: "smooth"
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Jan", "Feb", "Mar", "Apr", "May"],
    tickAmount: 5,
    tickPlacement: "between",
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
  grid: {
    borderColor: "rgba(196,196,196, 0.3)",
    padding: {
      top: -20,
      right: -16,
      bottom: 0
    }
  },
  fill: {
    opacity: 0.2
  },
  colors: [primary_color],
  series: [{
    data: [20, 120, 15, 100, 120, 60, 150, 70, 100, 80, 105, 20, 70, 60, 10, 12, 10, 130, 60, 80, 40, 140, 110, 150, 30, 75, 20, 45, 15, 130, 10, 30, 15, 110, 65, 130, 0]
  }],
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  },
  responsive: [{
    breakpoint: 576,
    options: {
      chart: {
        height: 200
      }
    }
  }]
};
let cryptoAnnotations = {
  series: [{
    data: [8107, 8300, 8260, 8400, 8350, 8500, 8350]
  }],
  chart: {
    height: 400,
    type: "line",
    toolbar: {
      show: false
    }
  },
  annotations: {
    yaxis: [{
      y: 8200,
      y2: 8400,
      borderColor: "#f8d62b",
      fillColor: "#f8d62b",
      opacity: 0.1,
      label: {
        borderColor: "#f8d62b",
        offsetX: -30,
        style: {
          fontSize: "10px",
          color: "#fff",
          background: "#f8d62b"
        },
        text: "Y-axis range"
      }
    }],
    xaxis: [{
      x: new Date("15 Nov 2017").getTime(),
      strokeDashArray: 0,
      borderColor: primary_color,
      label: {
        borderColor: primary_color,
        offsetY: 20,
        style: {
          color: "#fff",
          background: primary_color
        },
        text: "Anno Test"
      }
    }, {
      x: new Date("17 Nov 2017").getTime(),
      x2: new Date("18 Nov 2017").getTime(),
      fillColor: "#51bb25",
      opacity: 0.1,
      label: {
        borderColor: "##51bb25",
        style: {
          fontSize: "10px",
          color: "#fff",
          background: "#51bb25"
        },
        offsetY: 20,
        text: "X-axis range"
      }
    }]
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 3,
    curve: "smooth"
  },
  grid: {
    padding: {
      right: 30,
      left: 20
    }
  },
  title: {
    text: "Line with Annotations",
    align: "left",
    style: {
      fontSize: "18px",
      fontFamily: "Rubik, sans-serif",
      fontWeight: 500
    }
  },
  colors: [secondary_color],
  labels: ["13 Nov 2017", "14 Nov 2017", "15 Nov 2017", "16 Nov 2017", "17 Nov 2017", "20 Nov 2017", "21 Nov 2017"],
  xaxis: {
    type: "datetime"
  },
  responsive: [{
    breakpoint: 576,
    options: {
      title: {
        style: {
          fontSize: "16px"
        }
      }
    }
  }]
};
let stockMarket = {
  series: [{
    name: "line",
    type: "line",
    data: [{
      x: new Date(1538778600000),
      y: 6550
    }, {
      x: new Date(1538782200000),
      y: 6560
    }, {
      x: new Date(1538814600000),
      y: 6640
    }, {
      x: new Date(1538884800000),
      y: 6560
    }]
  }, {
    name: "candle",
    type: "candlestick",
    data: [{
      x: new Date(1538778600000),
      y: [6629.81, 6650.5, 6623.04, 6633.33]
    }, {
      x: new Date(1538780400000),
      y: [6632.01, 6643.59, 6620, 6630.11]
    }, {
      x: new Date(1538782200000),
      y: [6630.71, 6648.95, 6623.34, 6635.65]
    }, {
      x: new Date(1538784000000),
      y: [6635.65, 6651, 6629.67, 6638.24]
    }, {
      x: new Date(1538785800000),
      y: [6638.24, 6640, 6620, 6624.47]
    }, {
      x: new Date(1538787600000),
      y: [6624.53, 6636.03, 6621.68, 6624.31]
    }, {
      x: new Date(1538789400000),
      y: [6624.61, 6632.2, 6617, 6626.02]
    }, {
      x: new Date(1538791200000),
      y: [6627, 6627.62, 6584.22, 6603.02]
    }, {
      x: new Date(1538793000000),
      y: [6605, 6608.03, 6598.95, 6604.01]
    }, {
      x: new Date(1538794800000),
      y: [6604.5, 6614.4, 6602.26, 6608.02]
    }, {
      x: new Date(1538796600000),
      y: [6608.02, 6610.68, 6601.99, 6608.91]
    }, {
      x: new Date(1538798400000),
      y: [6608.91, 6618.99, 6608.01, 6612]
    }, {
      x: new Date(1538800200000),
      y: [6612, 6615.13, 6605.09, 6612]
    }, {
      x: new Date(1538802000000),
      y: [6612, 6624.12, 6608.43, 6622.95]
    }, {
      x: new Date(1538803800000),
      y: [6623.91, 6623.91, 6615, 6615.67]
    }, {
      x: new Date(1538805600000),
      y: [6618.69, 6618.74, 6610, 6610.4]
    }, {
      x: new Date(1538807400000),
      y: [6611, 6622.78, 6610.4, 6614.9]
    }, {
      x: new Date(1538809200000),
      y: [6614.9, 6626.2, 6613.33, 6623.45]
    }, {
      x: new Date(1538811000000),
      y: [6623.48, 6627, 6618.38, 6620.35]
    }, {
      x: new Date(1538812800000),
      y: [6619.43, 6620.35, 6610.05, 6615.53]
    }, {
      x: new Date(1538814600000),
      y: [6615.53, 6617.93, 6610, 6615.19]
    }, {
      x: new Date(1538816400000),
      y: [6615.19, 6621.6, 6608.2, 6620]
    }, {
      x: new Date(1538818200000),
      y: [6619.54, 6625.17, 6614.15, 6620]
    }, {
      x: new Date(1538820000000),
      y: [6620.33, 6634.15, 6617.24, 6624.61]
    }, {
      x: new Date(1538821800000),
      y: [6625.95, 6626, 6611.66, 6617.58]
    }, {
      x: new Date(1538823600000),
      y: [6619, 6625.97, 6595.27, 6598.86]
    }, {
      x: new Date(1538825400000),
      y: [6598.86, 6598.88, 6570, 6587.16]
    }, {
      x: new Date(1538827200000),
      y: [6588.86, 6600, 6580, 6593.4]
    }, {
      x: new Date(1538829000000),
      y: [6593.99, 6598.89, 6585, 6587.81]
    }, {
      x: new Date(1538830800000),
      y: [6587.81, 6592.73, 6567.14, 6578]
    }, {
      x: new Date(1538832600000),
      y: [6578.35, 6581.72, 6567.39, 6579]
    }, {
      x: new Date(1538834400000),
      y: [6579.38, 6580.92, 6566.77, 6575.96]
    }, {
      x: new Date(1538836200000),
      y: [6575.96, 6589, 6571.77, 6588.92]
    }, {
      x: new Date(1538838000000),
      y: [6588.92, 6594, 6577.55, 6589.22]
    }, {
      x: new Date(1538839800000),
      y: [6589.3, 6598.89, 6589.1, 6596.08]
    }, {
      x: new Date(1538841600000),
      y: [6597.5, 6600, 6588.39, 6596.25]
    }, {
      x: new Date(1538843400000),
      y: [6598.03, 6600, 6588.73, 6595.97]
    }, {
      x: new Date(1538845200000),
      y: [6595.97, 6602.01, 6588.17, 6602]
    }, {
      x: new Date(1538847000000),
      y: [6602, 6607, 6596.51, 6599.95]
    }, {
      x: new Date(1538848800000),
      y: [6600.63, 6601.21, 6590.39, 6591.02]
    }, {
      x: new Date(1538850600000),
      y: [6591.02, 6603.08, 6591, 6591]
    }, {
      x: new Date(1538852400000),
      y: [6591, 6601.32, 6585, 6592]
    }, {
      x: new Date(1538854200000),
      y: [6593.13, 6596.01, 6590, 6593.34]
    }, {
      x: new Date(1538856000000),
      y: [6593.34, 6604.76, 6582.63, 6593.86]
    }, {
      x: new Date(1538857800000),
      y: [6593.86, 6604.28, 6586.57, 6600.01]
    }, {
      x: new Date(1538859600000),
      y: [6601.81, 6603.21, 6592.78, 6596.25]
    }, {
      x: new Date(1538861400000),
      y: [6596.25, 6604.2, 6590, 6602.99]
    }, {
      x: new Date(1538863200000),
      y: [6602.99, 6606, 6584.99, 6587.81]
    }, {
      x: new Date(1538865000000),
      y: [6587.81, 6595, 6583.27, 6591.96]
    }, {
      x: new Date(1538866800000),
      y: [6591.97, 6596.07, 6585, 6588.39]
    }, {
      x: new Date(1538868600000),
      y: [6587.6, 6598.21, 6587.6, 6594.27]
    }, {
      x: new Date(1538870400000),
      y: [6596.44, 6601, 6590, 6596.55]
    }, {
      x: new Date(1538872200000),
      y: [6598.91, 6605, 6596.61, 6600.02]
    }, {
      x: new Date(1538874000000),
      y: [6600.55, 6605, 6589.14, 6593.01]
    }, {
      x: new Date(1538875800000),
      y: [6593.15, 6605, 6592, 6603.06]
    }, {
      x: new Date(1538877600000),
      y: [6603.07, 6604.5, 6599.09, 6603.89]
    }, {
      x: new Date(1538879400000),
      y: [6604.44, 6604.44, 6600, 6603.5]
    }, {
      x: new Date(1538881200000),
      y: [6603.5, 6603.99, 6597.5, 6603.86]
    }, {
      x: new Date(1538883000000),
      y: [6603.85, 6605, 6600, 6604.07]
    }, {
      x: new Date(1538884800000),
      y: [6604.98, 6606, 6604.07, 6606]
    }]
  }],
  plotOptions: {
    candlestick: {
      colors: {
        upward: "#FF474A",
        downward: "#6540D1"
      }
    }
  },
  legend: {
    show: false
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.2,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  chart: {
    height: 450,
    type: "line",
    toolbar: {
      show: false
    }
  },
  stroke: {
    curve: "smooth",
    width: [1, 1]
  },
  tooltip: {
    shared: true,
    custom: [function ({
      seriesIndex,
      dataPointIndex,
      w
    }) {
      return w.globals.series[seriesIndex][dataPointIndex];
    }, function ({
      seriesIndex,
      dataPointIndex,
      w
    }) {
      var o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
      var h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
      var l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
      var c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
      return "";
    }]
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  grid: {
    strokeDashArray: 3,
    position: "back",
    row: {
      opacity: 0.5
    },
    column: {
      opacity: 0.5
    }
  },
  responsive: [{
    breakpoint: 576,
    options: {
      chart: {
        height: 250
      }
    }
  }]
};
let finance = {
  chart: {
    height: 350,
    type: "line",
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 0
  },
  series: [{
    name: "Load Average",
    type: "column",
    data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
      min: 10,
      max: 110
    })
  }, {
    name: "Social Media",
    type: "line",
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
  title: {
    text: "Average",
    align: "left",
    style: {
      fontSize: "12px"
    }
  },
  subtitle: {
    text: "17%",
    floating: true,
    align: "right",
    offsetY: 0,
    style: {
      fontSize: "20px",
      fontWeight: 500
    }
  },
  fill: {
    colors: [primary_color],
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.8,
      stops: [0, 100]
    }
  },
  xaxis: {
    type: "datetime",
    range: 2700000
  },
  yaxis: {
    decimalsInFloat: 1
  },
  legend: {
    show: true
  },
  responsive: [{
    breakpoint: 1366,
    options: {
      subtitle: {
        style: {
          fontSize: "18px"
        }
      }
    }
  }, {
    breakpoint: 992,
    options: {
      subtitle: {
        style: {
          fontSize: "16px"
        }
      }
    }
  }]
};
let orderStatus2 = {
  chart: {
    height: 350,
    type: "line",
    stacked: true,
    animations: {
      enabled: true,
      easing: "linear",
      dynamicAnimation: {
        speed: 1000
      }
    },
    events: {
      animationEnd: function (chartCtx) {
        const newData1 = chartCtx.w.config.series[0].data.slice();
        newData1.shift();
        const newData2 = chartCtx.w.config.series[1].data.slice();
        newData2.shift();
        window.setTimeout(function () {
          chartCtx.updateOptions({
            series: [{
              data: newData1
            }, {
              data: newData2
            }]
            //   subtitle: {
            //     text: parseInt(getRandom() * Math.random()).toString(),
            //   },
          }, false, false);
        }, 300);
      }
    },
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "straight",
    width: 5
  },
  grid: {
    padding: {
      left: 0,
      right: 0
    }
  },
  fill: {
    opacity: 0.9
  },
  colors: [primary_color, secondary_color],
  markers: {
    size: 0,
    hover: {
      size: 0
    }
  },
  series: [{
    name: "Running",
    data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
      min: 30,
      max: 110
    })
  }, {
    name: "Waiting",
    data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
      min: 30,
      max: 110
    })
  }],
  xaxis: {
    type: "datetime",
    range: 2700000
  },
  yaxis: {
    decimalsInFloat: 1
  },
  title: {
    text: "Processes",
    align: "left",
    style: {
      fontSize: "12px"
    }
  },
  legend: {
    show: true,
    floating: true,
    horizontalAlign: "right",
    onItemClick: {
      toggleDataSeries: false
    },
    position: "top",
    offsetY: -33,
    offsetX: 60
  },
  responsive: [{
    breakpoint: 1366,
    options: {
      title: {
        style: {
          fontSize: "18px"
        }
      }
    }
  }, {
    breakpoint: 992,
    options: {
      title: {
        style: {
          fontSize: "16px"
        }
      }
    }
  }]
};
let monthlySales = {
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "Reflected",
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.8,
      stops: [0, 100]
    }
  },
  colors: [primary_color, secondary_color],
  chart: {
    height: 300,
    type: "radar",
    dropShadow: {
      enabled: true,
      blur: 1,
      left: 1,
      top: 1
    }
  },
  series: [{
    name: "Series 1",
    data: [80, 50, 30, 40, 100, 20]
  }, {
    name: "Series 2",
    data: [20, 30, 40, 80, 20, 80]
  }],
  title: {
    text: "Radar Chart - Multi Series"
  },
  stroke: {
    width: 0
  },
  markers: {
    size: 0
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
};
let uses = {
  chart: {
    toolbar: {
      show: false
    },
    height: 320,
    type: "bubble"
  },
  dataLabels: {
    enabled: false
  },
  series: [{
    name: "Bubble1",
    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
      min: 10,
      max: 60
    })
  }, {
    name: "Bubble2",
    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
      min: 10,
      max: 60
    })
  }, {
    name: "Bubble3",
    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
      min: 10,
      max: 60
    })
  }, {
    name: "Bubble4",
    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
      min: 10,
      max: 60
    })
  }],
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.7,
      stops: [0, 100]
    }
  },
  colors: [primary_color, secondary_color, "#51bb25", "#544fff"],
  title: {
    text: "Simple Bubble Chart"
  },
  xaxis: {
    tickAmount: 12,
    type: "category"
  },
  yaxis: {
    max: 70
  }
};
function generateData(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}
function generateMinuteWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y = (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2);
    series.push([x, y]);
    baseval += 300000;
    i++;
  }
  return series;
}

/***/ }),

/***/ 56026:
/*!***********************************************!*\
  !*** ./src/app/shared/data/widget/general.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   averageProfit: () => (/* binding */ averageProfit),
/* harmony export */   averageSales: () => (/* binding */ averageSales),
/* harmony export */   followersGrowth: () => (/* binding */ followersGrowth),
/* harmony export */   visitors: () => (/* binding */ visitors)
/* harmony export */ });
let followersGrowth = {
  series: [{
    name: "Growth",
    data: [10, 5, 15, 0, 15, 12, 29, 29, 29, 12, 15, 5]
  }],
  chart: {
    height: 135,
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
  },
  responsive: [{
    breakpoint: 992,
    options: {
      chart: {
        height: 150
      }
    }
  }, {
    breakpoint: 768,
    options: {
      chart: {
        height: 180
      }
    }
  }]
};
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
let averageSales = {
  series: [70],
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
  title: "Average Sales Per Day",
  sales: "45,908",
  growth: "+5.7",
  desc: "The point of using Lorem Ipsum"
};
let averageProfit = {
  series: [60],
  chart: {
    height: 130,
    type: "radialBar",
    dropShadow: {
      enabled: true,
      top: 3,
      left: 0,
      blur: 10,
      color: "var(--theme-secondary)",
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
  title: "Average Profit Per Day",
  sales: "89.6%",
  growth: "+2.7",
  desc: "The point of using Lorem Ipsum"
};

/***/ })

}]);
//# sourceMappingURL=src_app_components_widgets_widgets_module_ts.js.map