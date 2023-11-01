"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_charts_charts_module_ts"],{

/***/ 12638:
/*!**********************************************************************!*\
  !*** ./src/app/components/charts/apex-chart/apex-chart.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApexChartComponent: () => (/* binding */ ApexChartComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_chart_apex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/data/chart/apex */ 92934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 57854);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);




const _c0 = function () {
  return ["Chart"];
};
class ApexChartComponent {
  constructor() {
    this.splineArea1 = _shared_data_chart_apex__WEBPACK_IMPORTED_MODULE_0__.splineArea1;
    this.splineArea2 = _shared_data_chart_apex__WEBPACK_IMPORTED_MODULE_0__.splineArea2;
    this.column = _shared_data_chart_apex__WEBPACK_IMPORTED_MODULE_0__.column;
    this.pie = _shared_data_chart_apex__WEBPACK_IMPORTED_MODULE_0__.pie;
    this.bubble1 = _shared_data_chart_apex__WEBPACK_IMPORTED_MODULE_0__.bubble1;
    this.radial = _shared_data_chart_apex__WEBPACK_IMPORTED_MODULE_0__.radial;
    this.candelStick = _shared_data_chart_apex__WEBPACK_IMPORTED_MODULE_0__.candelStick;
    this.radar = _shared_data_chart_apex__WEBPACK_IMPORTED_MODULE_0__.radar;
    this.stepLine = _shared_data_chart_apex__WEBPACK_IMPORTED_MODULE_0__.stepLine;
    this.bar = _shared_data_chart_apex__WEBPACK_IMPORTED_MODULE_0__.bar;
    this.lineWithAnnotation = _shared_data_chart_apex__WEBPACK_IMPORTED_MODULE_0__.lineWithAnnotation;
    this.donut = _shared_data_chart_apex__WEBPACK_IMPORTED_MODULE_0__.donut;
    this.mixed = _shared_data_chart_apex__WEBPACK_IMPORTED_MODULE_0__.mixed;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ApexChartComponent_Factory(t) {
    return new (t || ApexChartComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ApexChartComponent,
    selectors: [["app-apex-chart"]],
    decls: 107,
    vars: 109,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6", "xl-100"], [1, "card"], [1, "card-header"], [1, "card-body"], ["id", "basic-apex"], [3, "series", "chart", "xaxis", "stroke", "dataLabels", "yaxis", "labels", "legend", "colors"], ["id", "area-spaline"], [3, "series", "chart", "xaxis", "stroke", "tooltip", "dataLabels", "colors"], ["id", "basic-bar"], [3, "series", "chart", "dataLabels", "plotOptions", "xaxis", "colors"], ["id", "column-chart"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "tooltip", "xaxis", "colors"], [1, "col-sm-12", "col-xl-6", "box-col-12", "xl-100"], ["id", "chart-bubble"], [3, "series", "chart", "xaxis", "fill", "dataLabels", "title", "yaxis", "tooltip", "theme", "colors"], ["id", "candlestick"], [3, "series", "chart", "xaxis", "yaxis", "title", "plotOptions"], ["id", "stepline"], [3, "series", "chart", "markers", "stroke", "dataLabels", "title", "colors"], ["id", "annotationchart"], [3, "series", "chart", "xaxis", "dataLabels", "grid", "stroke", "title", "labels", "annotations", "colors"], [1, "card-body", "apex-chart"], ["id", "piechart"], [3, "series", "chart", "labels", "responsive", "colors"], ["id", "donutchart"], [1, "col-sm-12", "xl-100"], ["id", "mixedchart"], [3, "series", "chart", "yaxis", "xaxis", "labels", "stroke", "plotOptions", "markers", "fill", "tooltip", "colors"], ["id", "radarchart"], [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "tooltip", "responsive", "plotOptions", "markers", "yaxis", "fill", "title"], ["id", "circlechart"], [3, "series", "chart", "plotOptions", "labels", "colors"]],
    template: function ApexChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Basic Area Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "apx-chart", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 3)(12, "div", 4)(13, "div", 5)(14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Area Spaline Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6)(17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "apx-chart", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 3)(20, "div", 4)(21, "div", 5)(22, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Bar chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 6)(25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "apx-chart", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 3)(28, "div", 4)(29, "div", 5)(30, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Column Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 6)(33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "apx-chart", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 15)(36, "div", 4)(37, "div", 5)(38, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " 3d Bubble Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 6)(41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "apx-chart", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 15)(44, "div", 4)(45, "div", 5)(46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Candlestick Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 6)(49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "apx-chart", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 3)(52, "div", 4)(53, "div", 5)(54, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Stepline Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 6)(57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "apx-chart", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 3)(60, "div", 4)(61, "div", 5)(62, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Column Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 6)(65, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "apx-chart", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 3)(68, "div", 4)(69, "div", 5)(70, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Pie Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 24)(73, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "apx-chart", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 3)(76, "div", 4)(77, "div", 5)(78, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Donut Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 24)(81, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "apx-chart", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 28)(84, "div", 4)(85, "div", 5)(86, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Mixed Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 6)(89, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "apx-chart", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 3)(92, "div", 4)(93, "div", 5)(94, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Radar Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 6)(97, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "apx-chart", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 3)(100, "div", 4)(101, "div", 5)(102, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Radial Bar Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 6)(105, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "apx-chart", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Apex Chart")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](108, _c0))("active_item", "Apex Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.splineArea2.series)("chart", ctx.splineArea2.chart)("xaxis", ctx.splineArea2.xaxis)("stroke", ctx.splineArea2.stroke)("dataLabels", ctx.splineArea2.dataLabels)("yaxis", ctx.splineArea2.yaxis)("labels", ctx.splineArea2.labels)("legend", ctx.splineArea2.legend)("colors", ctx.splineArea2.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.splineArea1.series)("chart", ctx.splineArea1.chart)("xaxis", ctx.splineArea1.xaxis)("stroke", ctx.splineArea1.stroke)("tooltip", ctx.splineArea1.tooltip)("dataLabels", ctx.splineArea1.dataLabels)("colors", ctx.splineArea1.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.bar.series)("chart", ctx.bar.chart)("dataLabels", ctx.bar.dataLabels)("plotOptions", ctx.bar.plotOptions)("xaxis", ctx.bar.xaxis)("colors", ctx.bar.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.column.series)("chart", ctx.column.chart)("dataLabels", ctx.column.dataLabels)("plotOptions", ctx.column.plotOptions)("yaxis", ctx.column.yaxis)("legend", ctx.column.legend)("fill", ctx.column.fill)("stroke", ctx.column.stroke)("tooltip", ctx.column.tooltip)("xaxis", ctx.column.xaxis)("colors", ctx.column.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.bubble1.series)("chart", ctx.bubble1.chart)("xaxis", ctx.bubble1.xaxis)("fill", ctx.bubble1.fill)("dataLabels", ctx.bubble1.dataLabels)("title", ctx.bubble1.title)("yaxis", ctx.bubble1.yaxis)("tooltip", ctx.bubble1.tooltip)("theme", ctx.bubble1.theme)("colors", ctx.bubble1.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.candelStick.series)("chart", ctx.candelStick.chart)("xaxis", ctx.candelStick.xaxis)("yaxis", ctx.candelStick.yaxis)("title", ctx.candelStick.title)("plotOptions", ctx.candelStick.plotOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.stepLine.series)("chart", ctx.stepLine.chart)("markers", ctx.stepLine.markers)("stroke", ctx.stepLine.stroke)("dataLabels", ctx.stepLine.dataLabels)("title", ctx.stepLine.title)("colors", ctx.stepLine.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.lineWithAnnotation.series)("chart", ctx.lineWithAnnotation.chart)("xaxis", ctx.lineWithAnnotation.xaxis)("dataLabels", ctx.lineWithAnnotation.dataLabels)("grid", ctx.lineWithAnnotation.grid)("stroke", ctx.lineWithAnnotation.stroke)("title", ctx.lineWithAnnotation.title)("labels", ctx.lineWithAnnotation.labels)("annotations", ctx.lineWithAnnotation.annotations)("colors", ctx.lineWithAnnotation.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.pie.pieseries)("chart", ctx.pie.chart)("labels", ctx.pie.labels)("responsive", ctx.pie.responsive)("colors", ctx.pie.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.donut.pieseries)("chart", ctx.donut.chart)("labels", ctx.donut.labels)("responsive", ctx.donut.responsive)("colors", ctx.donut.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.mixed.series)("chart", ctx.mixed.chart)("yaxis", ctx.mixed.yaxis)("xaxis", ctx.mixed.xaxis)("labels", ctx.mixed.labels)("stroke", ctx.mixed.stroke)("plotOptions", ctx.mixed.plotOptions)("markers", ctx.mixed.markers)("fill", ctx.mixed.fill)("tooltip", ctx.mixed.tooltip)("colors", ctx.mixed.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.radar.series)("chart", ctx.radar.chart)("xaxis", ctx.radar.xaxis)("stroke", ctx.radar.stroke)("colors", ctx.radar.colors)("dataLabels", ctx.radar.dataLabels)("tooltip", ctx.radar.tooltip)("responsive", ctx.radar.responsive)("plotOptions", ctx.radar.plotOptions)("markers", ctx.radar.markers)("yaxis", ctx.radar.yaxis)("fill", ctx.radar.fill)("title", ctx.radar.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.radial.pieseries)("chart", ctx.radial.chart)("plotOptions", ctx.radial.plotOptions)("labels", ctx.radial.labels)("colors", ctx.radial.colors);
      }
    },
    dependencies: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 79161:
/*!******************************************************************!*\
  !*** ./src/app/components/charts/chartist/chartist.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartistComponent: () => (/* binding */ ChartistComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/chart/chartist */ 65871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-chartist */ 83568);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);




const _c0 = function () {
  return ["Chart"];
};
class ChartistComponent {
  constructor() {
    // Charts
    this.chart1 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart1;
    this.chart2 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart2;
    this.chart3 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart3;
    this.chart4 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart4;
    this.chart5 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart5;
    this.chart6 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart6;
    this.chart7 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart7;
    this.chart8 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart8;
    this.chart9 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart9;
    this.chart10 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart10;
    this.chart11 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart11;
    this.chart12 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart12;
  }
  static #_ = this.ɵfac = function ChartistComponent_Factory(t) {
    return new (t || ChartistComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ChartistComponent,
    selectors: [["app-chartist"]],
    decls: 87,
    vars: 16,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xl-6", "col-md-12", "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "configuration"], [1, "col-xl-6", "col-md-12", "col-sm-12", "xl-100", "box-col-12"]],
    template: function ChartistComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Advanced SMIL Animations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3)(11, "div", 4)(12, "div", 5)(13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "SVG Path animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3)(18, "div", 4)(19, "div", 5)(20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Animating a Donut with Svg.animate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 3)(25, "div", 4)(26, "div", 5)(27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Bi-polar Line chart with area only");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 3)(32, "div", 4)(33, "div", 5)(34, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Line chart with area");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 3)(39, "div", 4)(40, "div", 5)(41, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Bi-polar bar chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 3)(46, "div", 4)(47, "div", 5)(48, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Stacked bar chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 3)(53, "div", 4)(54, "div", 5)(55, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Horizontal bar chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 8)(60, "div", 4)(61, "div", 5)(62, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Extreme responsive configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 8)(67, "div", 4)(68, "div", 5)(69, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Simple line chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 3)(74, "div", 4)(75, "div", 5)(76, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Holes in data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 3)(81, "div", 4)(82, "div", 5)(83, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Filled holes in data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "x-chartist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Chartist")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c0))("active_item", "Chartist");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.chart1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.chart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.chart3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.chart4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.chart5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.chart6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.chart7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.chart8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.chart9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.chart10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.chart11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.chart12);
      }
    },
    dependencies: [ng_chartist__WEBPACK_IMPORTED_MODULE_3__.ChartistComponent, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 4311:
/*!****************************************************************!*\
  !*** ./src/app/components/charts/chartjs/chartjs.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartjsComponent: () => (/* binding */ ChartjsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/chart/chartjs */ 47829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ 46673);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);




const _c0 = function () {
  return ["Chart"];
};
class ChartjsComponent {
  constructor() {
    // barChart
    this.barChartOptions = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartOptions;
    this.barChartLabels = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartLabels;
    this.barChartType = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartType;
    this.barChartLegend = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartLegend;
    this.barChartData = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartData;
    this.barChartColors = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartColors;
    // lineGraph Chart
    this.lineGraphOptions = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineGraphOptions;
    this.lineGraphLabels = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineGraphLabels;
    this.lineGraphType = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineGraphType;
    this.lineGraphLegend = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineGraphLegend;
    this.lineGraphData = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineGraphData;
    this.lineGraphColors = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineGraphColors;
    // radarGraph Chart
    this.radarGraphOptions = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.radarGraphOptions;
    this.radarGraphLabels = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.radarGraphLabels;
    this.radarGraphType = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.radarGraphType;
    this.radarGraphLegend = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.radarGraphLegend;
    this.radarGraphData = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.radarGraphData;
    this.radarGraphColors = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.radarGraphColors;
    // lineChart
    this.lineChartData = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartData;
    this.lineChartLabels = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartLabels;
    this.lineChartOptions = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartOptions;
    this.lineChartColors = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartColors;
    this.lineChartLegend = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartLegend;
    this.lineChartType = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartType;
    // Doughnut
    this.doughnutChartLabels = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.doughnutChartLabels;
    this.doughnutChartData = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.doughnutChartData;
    this.doughnutChartType = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.doughnutChartType;
    this.doughnutChartColors = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.doughnutChartColors;
    this.doughnutChartOptions = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.doughnutChartOptions;
    // PolarArea
    // public polarAreaChartLabels = chartData.polarAreaChartLabels;
    // public polarAreaChartData = chartData.polarAreaChartData;
    // public polarAreaLegend = chartData.polarAreaLegend;
    // public ploarChartColors = chartData.ploarChartColors;
    // public polarAreaChartType = chartData.polarAreaChartType;
    // public polarChartOptions = chartData.polarChartOptions;
    this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    this.polarAreaChartData = ["300", "500", "100", "40", "120"];
    this.polarAreaLegend = true;
    this.polarAreaChartType = 'polarArea';
  }
  // events
  chartClicked({
    event,
    active
  }) {}
  chartHovered({
    event,
    active
  }) {}
  static #_ = this.ɵfac = function ChartjsComponent_Factory(t) {
    return new (t || ChartjsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ChartjsComponent,
    selectors: [["app-chartjs"]],
    decls: 31,
    vars: 24,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-xl-6", "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body", "chart-block"], ["baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "legend", "type", "chartHover", "chartClick"], [1, "col-xl-4", "col-md-12"], [1, "col-xl-8", "col-md-12"]],
    template: function ChartjsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Bar Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "canvas", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_9_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function ChartjsComponent_Template_canvas_chartClick_9_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3)(11, "div", 4)(12, "div", 5)(13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Line Graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6)(16, "canvas", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_16_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function ChartjsComponent_Template_canvas_chartClick_16_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8)(18, "div", 4)(19, "div", 5)(20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Radar Graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6)(23, "canvas", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_23_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function ChartjsComponent_Template_canvas_chartClick_23_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 9)(25, "div", 4)(26, "div", 5)(27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Line Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 6)(30, "canvas", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_30_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function ChartjsComponent_Template_canvas_chartClick_30_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Chartjs")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](23, _c0))("active_item", "Chartjs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("type", ctx.barChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.lineGraphData)("labels", ctx.lineGraphLabels)("options", ctx.lineGraphOptions)("legend", ctx.lineGraphLegend)("type", ctx.lineGraphType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.radarGraphData)("labels", ctx.radarGraphLabels)("options", ctx.radarGraphOptions)("legend", ctx.radarGraphLegend)("type", ctx.radarGraphType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("legend", ctx.lineChartLegend)("type", ctx.lineChartType);
      }
    },
    dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__.BaseChartDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8307:
/*!************************************************************!*\
  !*** ./src/app/components/charts/charts-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartsRoutingModule: () => (/* binding */ ChartsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _google_google_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google/google.component */ 43594);
/* harmony import */ var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartjs/chartjs.component */ 4311);
/* harmony import */ var _chartist_chartist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartist/chartist.component */ 79161);
/* harmony import */ var _apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apex-chart/apex-chart.component */ 12638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);







const routes = [{
  path: "",
  children: [{
    path: "google",
    component: _google_google_component__WEBPACK_IMPORTED_MODULE_0__.GoogleComponent
  }, {
    path: "chartjs",
    component: _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_1__.ChartjsComponent
  }, {
    path: "chartist",
    component: _chartist_chartist_component__WEBPACK_IMPORTED_MODULE_2__.ChartistComponent
  }, {
    path: "apex",
    component: _apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_3__.ApexChartComponent
  }]
}];
class ChartsRoutingModule {
  static #_ = this.ɵfac = function ChartsRoutingModule_Factory(t) {
    return new (t || ChartsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ChartsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ChartsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 79848:
/*!****************************************************!*\
  !*** ./src/app/components/charts/charts.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartModule: () => (/* binding */ ChartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-apexcharts */ 57854);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-chartist */ 83568);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ 46673);
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-google-charts */ 62741);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 56208);
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts-routing.module */ 8307);
/* harmony import */ var _apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apex-chart/apex-chart.component */ 12638);
/* harmony import */ var _chartist_chartist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartist/chartist.component */ 79161);
/* harmony import */ var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chartjs/chartjs.component */ 4311);
/* harmony import */ var _google_google_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./google/google.component */ 43594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);













class ChartModule {
  static #_ = this.ɵfac = function ChartModule_Factory(t) {
    return new (t || ChartModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: ChartModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _charts_routing_module__WEBPACK_IMPORTED_MODULE_1__.ChartsRoutingModule, ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__.Ng2GoogleChartsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_9__.NgChartsModule, ng_chartist__WEBPACK_IMPORTED_MODULE_10__.ChartistModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ChartModule, {
    declarations: [_google_google_component__WEBPACK_IMPORTED_MODULE_5__.GoogleComponent, _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_4__.ChartjsComponent, _chartist_chartist_component__WEBPACK_IMPORTED_MODULE_3__.ChartistComponent, _apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_2__.ApexChartComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _charts_routing_module__WEBPACK_IMPORTED_MODULE_1__.ChartsRoutingModule, ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__.Ng2GoogleChartsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_9__.NgChartsModule, ng_chartist__WEBPACK_IMPORTED_MODULE_10__.ChartistModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 43594:
/*!**************************************************************!*\
  !*** ./src/app/components/charts/google/google.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleComponent: () => (/* binding */ GoogleComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/chart/google-chart */ 59413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-google-charts */ 62741);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 14414);




const _c0 = function () {
  return ["Chart"];
};
class GoogleComponent {
  constructor() {
    // Pie Chart
    this.pieChart1 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.pieChart1;
    this.pieChart2 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.pieChart2;
    this.pieChart3 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.pieChart3;
    this.pieChart4 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.pieChart4;
    // Area Chart
    this.areaChart1 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.areaChart1;
    this.areaChart2 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.areaChart2;
    // Column Chart
    this.columnChart1 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.columnChart1;
    this.columnChart2 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.columnChart2;
    // Bar Chart
    this.barChart1 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.barChart1;
    this.barChart2 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.barChart2;
    // Line Chart
    this.lineChart = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.lineChart;
    // Combo Chart
    this.comboChart = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.comboChart;
    this.geoChartData = {
      chartType: 'GeoChart',
      dataTable: [['City', 'Population'], ['Melbourne', 456789]],
      options: {
        'region': 'IT',
        'displayMode': 'markers',
        colors: ["#4466f2", "#1ea6ec", "#22af47", "#007bff", "#FF5370"]
      }
    };
  }
  static #_ = this.ɵfac = function GoogleComponent_Factory(t) {
    return new (t || GoogleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: GoogleComponent,
    selectors: [["app-google"]],
    decls: 107,
    vars: 15,
    consts: [[3, "title", "items", "active_item"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6", "box-col-12", "xl-100"], [1, "card"], [1, "card-header"], [1, "digits"], [1, "card-body", "chart-block", "p-0"], ["id", "pie-chart1", 1, "chart-overflow"], [3, "data"], ["id", "pie-chart2", 1, "chart-overflow"], ["id", "pie-chart3", 1, "chart-overflow"], ["id", "pie-chart4", 1, "chart-overflow"], ["id", "area-chart1", 1, "chart-overflow"], ["id", "area-chart2", 1, "chart-overflow"], [1, "card-body", "chart-block"], ["id", "column-chart1", 1, "chart-overflow"], ["id", "column-chart2", 1, "chart-overflow"], [1, "col-sm-12", "box-col-12", "xl-100"], ["id", "line-chart", 1, "chart-overflow"], ["id", "combo-chart", 1, "chart-overflow"], ["id", "bar-chart2"]],
    template: function GoogleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Pie Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "google-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3)(14, "div", 4)(15, "div", 5)(16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Pie Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 7)(21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "google-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 3)(24, "div", 4)(25, "div", 5)(26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Pie Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 7)(31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "google-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 3)(34, "div", 4)(35, "div", 5)(36, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Pie Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 7)(41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "google-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 3)(44, "div", 4)(45, "div", 5)(46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Area Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 7)(51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "google-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 3)(54, "div", 4)(55, "div", 5)(56, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Area Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 7)(61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "google-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 3)(64, "div", 4)(65, "div", 5)(66, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Column Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 15)(71, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "google-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 3)(74, "div", 4)(75, "div", 5)(76, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Column Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 15)(81, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "google-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 18)(84, "div", 4)(85, "div", 5)(86, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Line Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 15)(89, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "google-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 18)(92, "div", 4)(93, "div", 5)(94, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Combo Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 7)(97, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "google-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 3)(100, "div", 4)(101, "div", 5)(102, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "bar-chart2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 15)(105, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "google-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Google")("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c0))("active_item", "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.pieChart1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.pieChart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.pieChart3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.pieChart4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.areaChart1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.areaChart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.columnChart1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.columnChart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.lineChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.comboChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.barChart2);
      }
    },
    dependencies: [ng2_google_charts__WEBPACK_IMPORTED_MODULE_3__.GoogleChartComponent, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 92934:
/*!*******************************************!*\
  !*** ./src/app/shared/data/chart/apex.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bar: () => (/* binding */ bar),
/* harmony export */   bubble1: () => (/* binding */ bubble1),
/* harmony export */   candelStick: () => (/* binding */ candelStick),
/* harmony export */   column: () => (/* binding */ column),
/* harmony export */   donut: () => (/* binding */ donut),
/* harmony export */   lineWithAnnotation: () => (/* binding */ lineWithAnnotation),
/* harmony export */   mixed: () => (/* binding */ mixed),
/* harmony export */   pie: () => (/* binding */ pie),
/* harmony export */   radar: () => (/* binding */ radar),
/* harmony export */   radial: () => (/* binding */ radial),
/* harmony export */   splineArea1: () => (/* binding */ splineArea1),
/* harmony export */   splineArea2: () => (/* binding */ splineArea2),
/* harmony export */   stepLine: () => (/* binding */ stepLine)
/* harmony export */ });
let primary_color = localStorage.getItem('primary_color') || '#7366ff';
let secondary_color = localStorage.getItem('secondary_color') || '#f73164';
let splineArea1 = {
  series: [{
    name: "series1",
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: "series2",
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  colors: [primary_color, secondary_color],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth"
  },
  xaxis: {
    type: "datetime",
    categories: ["2022-09-19T00:00:00.000Z", "2022-09-19T01:30:00.000Z", "2022-09-19T02:30:00.000Z", "2022-09-19T03:30:00.000Z", "2022-09-19T04:30:00.000Z", "2022-09-19T05:30:00.000Z", "2022-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    }
  }
};
let splineArea2 = {
  series: [{
    name: "STOCK ABC",
    data: [8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9340.85]
  }],
  colors: [primary_color],
  chart: {
    type: "area",
    height: 350,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "straight"
  },
  labels: ["13 Nov 2022", "14 Nov 2022", "15 Nov 2022", "16 Nov 2022", "17 Nov 2022", "20 Nov 2022", "21 Nov 2022", "22 Nov 2022", "23 Nov 2022", "24 Nov 2022", "27 Nov 2022", "28 Nov 2022", "29 Nov 2022", "30 Nov 2022", "01 Dec 2022", "04 Dec 2022", "05 Dec 2022", "06 Dec 2022", "07 Dec 2022", "08 Dec 2022"],
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    opposite: true
  },
  legend: {
    horizontalAlign: "left"
  }
};
let column = {
  series: [{
    name: "Net Profit",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: "Revenue",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }],
  colors: [primary_color, secondary_color],
  chart: {
    type: "bar",
    height: 350,
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
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"]
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
  },
  yaxis: {
    title: {
      text: "$ (thousands)"
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      }
    }
  }
};
let pie = {
  pieseries: [44, 55, 13, 43, 22],
  chart: {
    width: 380,
    type: "pie",
    toolbar: {
      show: false
    }
  },
  colors: [primary_color, secondary_color, "#51bb25", "#a927f9", "#f8d62b"],
  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 250
      },
      legend: {
        position: "bottom"
      }
    }
  }]
};
let bubble1 = {
  series: [{
    name: "Product1",
    data: generateData(new Date("11 Feb 2022 GMT").getTime(), 20, {
      min: 10,
      max: 60
    })
  }, {
    name: "Product2",
    data: generateData(new Date("11 Feb 2022 GMT").getTime(), 20, {
      min: 10,
      max: 60
    })
  }, {
    name: "Product3",
    data: generateData(new Date("11 Feb 2022 GMT").getTime(), 20, {
      min: 10,
      max: 60
    })
  }, {
    name: "Product4",
    data: generateData(new Date("11 Feb 2022 GMT").getTime(), 20, {
      min: 10,
      max: 60
    })
  }],
  colors: [primary_color, secondary_color, "#51bb25", "#f8d62b"],
  chart: {
    height: 350,
    type: "bubble",
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: "gradient"
  },
  title: {
    text: "3D Bubble Chart"
  },
  xaxis: {
    tickAmount: 12,
    type: "datetime",
    labels: {
      rotate: 0
    }
  },
  yaxis: {
    max: 70
  },
  theme: {
    palette: "palette2"
  }
};
function generateData(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
    series.push([baseval, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}
let radial = {
  pieseries: [44, 55, 67, 83],
  chart: {
    height: 300,
    type: "radialBar",
    toolbar: {
      show: false
    }
  },
  colors: [primary_color, secondary_color, "#51bb25", "#a927f9"],
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: "22px"
        },
        value: {
          fontSize: "16px"
        },
        total: {
          show: true,
          label: "Total",
          formatter: function (w) {
            return "249";
          }
        }
      }
    }
  },
  labels: ["Apples", "Oranges", "Bananas", "Berries"]
};
let candelStick = {
  series: [{
    name: "candle",
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
        upward: primary_color,
        downward: secondary_color
      }
    }
  },
  chart: {
    type: "candlestick",
    height: 350,
    toolbar: {
      show: false
    }
  },
  title: {
    text: "CandleStick Chart",
    align: "left"
  },
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    tooltip: {
      enabled: true
    }
  }
};
let radar = {
  series: [{
    name: "Series 1",
    data: [20, 100, 40, 30, 50, 80, 33]
  }],
  colors: [secondary_color],
  chart: {
    height: 300,
    type: "radar",
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: true
  },
  plotOptions: {
    radar: {
      size: 140,
      polygons: {
        // strokeColor: "#e9e9e9",
        fill: {
          colors: ["#f8f8f8", "#fff"]
        }
      }
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      plotOptions: {
        radar: {
          size: 70
        }
      }
    }
  }],
  title: {
    text: "Radar with Polygon Fill"
  },
  markers: {
    size: 4,
    colors: ["#fff"],
    strokeColors: ["#FF4560"],
    strokeWidth: 2
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val;
      }
    }
  },
  xaxis: {
    categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  yaxis: {
    tickAmount: 7
  }
};
let stepLine = {
  series: [{
    name: "stepline-series",
    data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
  }],
  colors: [primary_color],
  chart: {
    type: "line",
    height: 350,
    toolbar: {
      show: false
    }
  },
  stroke: {
    curve: "stepline"
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: "Stepline Chart",
    align: "left"
  },
  markers: {
    hover: {
      sizeOffset: 4
    }
  }
};
let bar = {
  series: [{
    name: "basic",
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
  colors: [primary_color],
  chart: {
    type: "bar",
    height: 350,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ["India", "Canada", "UK", "Korea", "Italy", "France", "Japan", "US", "China", "Germany"]
  }
};
let lineWithAnnotation = {
  series: [{
    name: "series",
    data: [8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9340.85]
  }],
  colors: [primary_color],
  chart: {
    height: 350,
    type: "line",
    toolbar: {
      show: false
    }
  },
  annotations: {
    yaxis: [{
      y: 8200,
      borderColor: "#00E396",
      label: {
        borderColor: "#00E396",
        style: {
          color: "#fff",
          background: "#00E396"
        },
        text: "Support"
      }
    }, {
      y: 8600,
      y2: 9000,
      borderColor: "#000",
      fillColor: "#FEB019",
      opacity: 0.2,
      label: {
        borderColor: "#333",
        style: {
          fontSize: "10px",
          color: "#333",
          background: "#FEB019"
        },
        text: "Y-axis range"
      }
    }],
    xaxis: [{
      x: new Date("23 Nov 2022").getTime(),
      strokeDashArray: 0,
      borderColor: "#775DD0",
      label: {
        borderColor: "#775DD0",
        style: {
          color: "#fff",
          background: "#775DD0"
        },
        text: "Anno Test"
      }
    }, {
      x: new Date("26 Nov 2022").getTime(),
      x2: new Date("28 Nov 2022").getTime(),
      fillColor: "#B3F7CA",
      opacity: 0.4,
      label: {
        borderColor: "#B3F7CA",
        style: {
          fontSize: "10px",
          color: "#fff",
          background: "#00E396"
        },
        offsetY: -10,
        text: "X-axis range"
      }
    }],
    points: [{
      x: new Date("01 Dec 2022").getTime(),
      y: 8607.55,
      marker: {
        size: 8,
        fillColor: "#fff",
        strokeColor: "red",
        radius: 2,
        cssClass: "apexcharts-custom-class"
      },
      label: {
        borderColor: "#FF4560",
        offsetY: 0,
        style: {
          color: "#fff",
          background: "#FF4560"
        },
        text: "Point Annotation"
      }
    }]
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "straight"
  },
  grid: {
    padding: {
      right: 30,
      left: 20
    }
  },
  title: {
    text: "Line with Annotations",
    align: "left"
  },
  labels: ["13 Nov 2022", "14 Nov 2022", "15 Nov 2022", "16 Nov 2022", "17 Nov 2022", "20 Nov 2022", "21 Nov 2022", "22 Nov 2022", "23 Nov 2022", "24 Nov 2022", "27 Nov 2022", "28 Nov 2022", "29 Nov 2022", "30 Nov 2022", "01 Dec 2022", "04 Dec 2022", "05 Dec 2022", "06 Dec 2022", "07 Dec 2022", "08 Dec 2022"],
  xaxis: {
    type: "datetime"
  }
};
let donut = {
  pieseries: [44, 55, 13, 43, 22],
  chart: {
    type: "donut",
    toolbar: {
      show: false
    }
  },
  colors: ["#dc3545", "#f8d62b", primary_color, "#51bb25", "#a927f9"],
  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 250
      },
      legend: {
        position: "bottom"
      }
    }
  }]
};
let mixed = {
  series: [{
    name: "TEAM A",
    type: "column",
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: "TEAM B",
    type: "area",
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: "TEAM C",
    type: "line",
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }],
  colors: [secondary_color, "#51bb25", primary_color],
  chart: {
    height: 350,
    type: "line",
    stacked: false,
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: [0, 2, 5],
    curve: "smooth"
  },
  plotOptions: {
    bar: {
      columnWidth: "50%"
    }
  },
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ["01/01/2022", "02/01/2022", "03/01/2022", "04/01/2022", "05/01/2022", "06/01/2022", "07/01/2022", "08/01/2022", "09/01/2022", "10/01/2022", "11/01/2022"],
  markers: {
    size: 0
  },
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    title: {
      text: "Points"
    },
    min: 0
  },
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

/***/ }),

/***/ 65871:
/*!***********************************************!*\
  !*** ./src/app/shared/data/chart/chartist.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chart1: () => (/* binding */ chart1),
/* harmony export */   chart10: () => (/* binding */ chart10),
/* harmony export */   chart11: () => (/* binding */ chart11),
/* harmony export */   chart12: () => (/* binding */ chart12),
/* harmony export */   chart2: () => (/* binding */ chart2),
/* harmony export */   chart3: () => (/* binding */ chart3),
/* harmony export */   chart4: () => (/* binding */ chart4),
/* harmony export */   chart5: () => (/* binding */ chart5),
/* harmony export */   chart6: () => (/* binding */ chart6),
/* harmony export */   chart7: () => (/* binding */ chart7),
/* harmony export */   chart8: () => (/* binding */ chart8),
/* harmony export */   chart9: () => (/* binding */ chart9)
/* harmony export */ });
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartist */ 65061);

var seq = 0;
var delays = 80;
var durations = 500;
let primary_color = localStorage.getItem('primary_color') || '#7366ff';
let secondary_color = localStorage.getItem('secondary_color') || '#f73164';
// Chart 1 Advanced SMIL Animations
var chart1 = {
  type: 'Line',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    series: [[12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6], [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5], [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4], [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]]
  },
  options: {
    low: 0,
    showArea: false,
    fullWidth: true,
    height: 450,
    colors: [primary_color, secondary_color]
  },
  events: {
    draw: data => {
      seq++;
      if (data.type === 'line') {
        data.element.animate({
          opacity: {
            begin: seq * delays + 1000,
            dur: durations,
            from: 0,
            to: 1
          }
        });
      } else if (data.type === 'label' && data.axis === 'x') {
        data.element.animate({
          y: {
            begin: seq * delays,
            dur: durations,
            from: data.y + 100,
            to: data.y,
            easing: 'easeOutQuart'
          }
        });
      } else if (data.type === 'label' && data.axis === 'y') {
        data.element.animate({
          x: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 100,
            to: data.x,
            easing: 'easeOutQuart'
          }
        });
      } else if (data.type === 'point') {
        data.element.animate({
          x1: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart'
          },
          x2: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart'
          },
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'easeOutQuart'
          }
        });
      } else if (data.type === 'grid') {
        var pos1Animation = {
          begin: seq * delays,
          dur: durations,
          from: data[data.axis.units.pos + '1'] - 30,
          to: data[data.axis.units.pos + '1'],
          easing: 'easeOutQuart'
        };
        var pos2Animation = {
          begin: seq * delays,
          dur: durations,
          from: data[data.axis.units.pos + '2'] - 100,
          to: data[data.axis.units.pos + '2'],
          easing: 'easeOutQuart'
        };
        var animations = {};
        animations[data.axis.units.pos + '1'] = pos1Animation;
        animations[data.axis.units.pos + '2'] = pos2Animation;
        animations['opacity'] = {
          begin: seq * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: 'easeOutQuart'
        };
        data.element.animate(animations);
      }
    }
  }
};
// Chart 2 SVG Path animation
var chart2 = {
  type: 'Line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    series: [[1, 5, 2, 5, 4, 3], [2, 3, 4, 8, 1, 2], [5, 4, 3, 2, 1, 0.5]]
  },
  options: {
    low: 0,
    showArea: true,
    showPoint: false,
    fullWidth: true,
    height: 450,
    colors: [primary_color, secondary_color]
  },
  events: {
    draw: data => {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 2000 * data.index,
            dur: 2000,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: chartist__WEBPACK_IMPORTED_MODULE_0__.Svg.Easing.easeOutQuint
          }
        });
      }
    }
  }
};
// Chart 3 Animating a Donut with Svg.animate
var chart3 = {
  type: 'Pie',
  data: {
    series: [10, 20, 50, 20, 5, 50, 15],
    labels: [1, 2, 3, 4, 5, 6, 7]
  },
  options: {
    donut: true,
    showLabel: false,
    height: 450,
    colors: [primary_color, secondary_color]
  },
  events: {
    draw: data => {
      if (data.type === 'slice') {
        var pathLength = data.element._node.getTotalLength();
        data.element.attr({
          'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
        });
        var animationDefinition = {
          'stroke-dashoffset': {
            id: 'anim' + data.index,
            dur: 1000,
            from: -pathLength + 'px',
            to: '0px',
            easing: chartist__WEBPACK_IMPORTED_MODULE_0__.Svg.Easing.easeOutQuint,
            fill: 'freeze'
          }
        };
        data.element.attr({
          'stroke-dashoffset': -pathLength + 'px'
        });
        data.element.animate(animationDefinition, false);
      }
    }
  }
};
// Chart 4 Bi-polar Line chart with area only
var chart4 = {
  type: 'Line',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [[1, 2, 3, 1, -2, 0, 1, 0], [-2, -1, -2, -1, -2.5, -1, -2, -1], [0, 0, 0, 1, 2, 2.5, 2, 1], [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]]
  },
  options: {
    high: 3,
    low: -3,
    showArea: true,
    showLine: false,
    showPoint: false,
    fullWidth: true,
    axisX: {
      showLabel: false,
      showGrid: false
    },
    height: 450,
    colors: [primary_color, secondary_color]
  }
};
// Chart 5 Line chart with area
var chart5 = {
  type: 'Line',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [[5, 9, 7, 8, 5, 3, 5, 4]]
  },
  options: {
    low: 0,
    showArea: true,
    height: 450,
    colors: [primary_color, secondary_color]
  }
};
// Chart 6 Bi-polar bar chart
var chart6 = {
  type: 'Bar',
  data: {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]]
  },
  options: {
    high: 10,
    low: -10,
    axisX: {
      labelInterpolationFnc: function (value, index) {
        return index % 2 === 0 ? value : null;
      }
    },
    height: 450,
    colors: [primary_color, secondary_color]
  }
};
// Chart 7 Stacked bar chart
var chart7 = {
  type: 'Bar',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q13', 'Q14'],
    series: [[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300]]
  },
  options: {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function (value) {
        return value / 1000 + 'k';
      }
    },
    height: 450,
    colors: [primary_color, secondary_color]
  }
};
// Chart 8 Horizontal bar chart
var chart8 = {
  type: 'Bar',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    series: [[5, 4, 3, 7, 5, 10, 3], [3, 2, 9, 5, 4, 6, 4]]
  },
  options: {
    seriesBarDistance: 10,
    reverseData: true,
    horizontalBars: true,
    axisY: {
      offset: 70
    },
    height: 450,
    colors: [primary_color, secondary_color]
  }
};
// Chart 9 Extreme responsive configuration
var chart9 = {
  type: 'Bar',
  data: {
    labels: ['2010-11', '2011-12', '2012-13', '2013-13', '2014-15', '2015-16', '2021-22', '2022-23'],
    series: [[0.9, 0.4, 1.5, 4.9, 3, 3.8, 3.8, 1.9], [6.4, 5.7, 7, 4.95, 3, 3.8, 3.8, 1.9], [4.3, 2.3, 3.6, 4.5, 5, 2.8, 3.3, 4.3], [3.8, 4.1, 2.8, 1.8, 2.2, 1.9, 6.7, 2.9]]
  },
  options: {
    height: 450,
    seriesBarDistance: 15,
    horizontalBars: false,
    stackBars: false,
    axisY: {
      offset: 20
    },
    colors: [primary_color, secondary_color]
  },
  responsiveOptions: [['screen and (min-width: 641px) and (max-width: 1024px) and (max-width: 768px)', {
    showPoint: false,
    axisX: {
      labelInterpolationFnc: function (value) {
        return 'Week ' + value;
      }
    }
  }], ['screen and (max-width: 640px)', {
    showPoint: false,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }], ['screen and (max-width: 340px)', {
    // Default mobile configuration
    stackBars: true,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value.split(/\s+/).map(function (word) {
          return word[0];
        }).join('');
      }
    },
    axisY: {
      offset: 20
    }
  }]]
};
// Chart 10 Simple line chart
var chart10 = {
  type: 'Line',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]]
  },
  options: {
    height: 450,
    fullWidth: true,
    chartPadding: {
      right: 40
    },
    colors: [primary_color, secondary_color]
  }
};
//Chart11: Holes in data
var chart11 = {
  type: 'Line',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    series: [[5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9], [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null], [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null]
    //	[{x:3, y: 3},{x: 4, y: 3}, {x: 5, y: undefined}, {x: 6, y: 4}, {x: 7, y: null}, {x: 8, y: 4}, {x: 9, y: 4}]
    ]
  },

  options: {
    height: 450,
    fullWidth: true,
    chartPadding: {
      right: 10
    },
    low: 0,
    colors: [primary_color, secondary_color]
  }
};
// // Chart 12 Filled holes in data
var chart12 = {
  type: 'Line',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    series: [[5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9], [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null], [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null]
    //	[{x:3, y: 3},{x: 4, y: 3}, {x: 5, y: undefined}, {x: 6, y: 4}, {x: 7, y: null}, {x: 8, y: 4}, {x: 9, y: 4}]
    ]
  },

  options: {
    height: 450,
    fullWidth: true,
    chartPadding: {
      right: 10
    },
    lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.cardinal({
      fillHoles: true
    }),
    low: 0,
    colors: [primary_color, secondary_color]
  }
};

/***/ }),

/***/ 47829:
/*!**********************************************!*\
  !*** ./src/app/shared/data/chart/chartjs.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   barChartColors: () => (/* binding */ barChartColors),
/* harmony export */   barChartData: () => (/* binding */ barChartData),
/* harmony export */   barChartLabels: () => (/* binding */ barChartLabels),
/* harmony export */   barChartLegend: () => (/* binding */ barChartLegend),
/* harmony export */   barChartOptions: () => (/* binding */ barChartOptions),
/* harmony export */   barChartType: () => (/* binding */ barChartType),
/* harmony export */   doughnutChartColors: () => (/* binding */ doughnutChartColors),
/* harmony export */   doughnutChartData: () => (/* binding */ doughnutChartData),
/* harmony export */   doughnutChartLabels: () => (/* binding */ doughnutChartLabels),
/* harmony export */   doughnutChartOptions: () => (/* binding */ doughnutChartOptions),
/* harmony export */   doughnutChartType: () => (/* binding */ doughnutChartType),
/* harmony export */   lineChartColors: () => (/* binding */ lineChartColors),
/* harmony export */   lineChartData: () => (/* binding */ lineChartData),
/* harmony export */   lineChartLabels: () => (/* binding */ lineChartLabels),
/* harmony export */   lineChartLegend: () => (/* binding */ lineChartLegend),
/* harmony export */   lineChartOptions: () => (/* binding */ lineChartOptions),
/* harmony export */   lineChartType: () => (/* binding */ lineChartType),
/* harmony export */   lineGraphColors: () => (/* binding */ lineGraphColors),
/* harmony export */   lineGraphData: () => (/* binding */ lineGraphData),
/* harmony export */   lineGraphLabels: () => (/* binding */ lineGraphLabels),
/* harmony export */   lineGraphLegend: () => (/* binding */ lineGraphLegend),
/* harmony export */   lineGraphOptions: () => (/* binding */ lineGraphOptions),
/* harmony export */   lineGraphType: () => (/* binding */ lineGraphType),
/* harmony export */   ploarChartColors: () => (/* binding */ ploarChartColors),
/* harmony export */   polarAreaChartData: () => (/* binding */ polarAreaChartData),
/* harmony export */   polarAreaChartLabels: () => (/* binding */ polarAreaChartLabels),
/* harmony export */   polarAreaChartType: () => (/* binding */ polarAreaChartType),
/* harmony export */   polarAreaLegend: () => (/* binding */ polarAreaLegend),
/* harmony export */   polarChartOptions: () => (/* binding */ polarChartOptions),
/* harmony export */   radarGraphColors: () => (/* binding */ radarGraphColors),
/* harmony export */   radarGraphData: () => (/* binding */ radarGraphData),
/* harmony export */   radarGraphLabels: () => (/* binding */ radarGraphLabels),
/* harmony export */   radarGraphLegend: () => (/* binding */ radarGraphLegend),
/* harmony export */   radarGraphOptions: () => (/* binding */ radarGraphOptions),
/* harmony export */   radarGraphType: () => (/* binding */ radarGraphType)
/* harmony export */ });
let primary_color = localStorage.getItem('primary_color') || '#7366ff';
let secondary_color = localStorage.getItem('secondary_color') || '#f73164';
// barChart
var barChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};
var barChartLabels = ["January", "February", "March", "April", "May", "June", "July"];
var barChartType = 'bar';
var barChartLegend = false;
var barChartData = [{
  data: [35, 59, 80, 81, 56, 55, 40],
  label: 'Series A'
}, {
  data: [28, 48, 40, 19, 86, 27, 90],
  label: 'Series B'
}];
var barChartColors = [{
  backgroundColor: "rgba(145, 46, 252, 0.6)",
  borderColor: '#7366ff',
  borderWidth: 1
}, {
  backgroundColor: "rgba(247, 49, 100, 0.6)",
  borderColor: '#f73164',
  borderWidth: 1
}];
// LineGraph Chart
var lineGraphOptions = {
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(0,0,0,.05)",
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};
var lineGraphLabels = ["January", "February", "March", "April", "May", "June", "July"];
var lineGraphType = 'line';
var lineGraphLegend = false;
var lineGraphData = [{
  data: [28, 48, 40, 19, 86, 27, 90],
  label: 'Series A'
}, {
  data: [10, 59, 80, 81, 56, 55, 40],
  label: 'Series B'
}];
var lineGraphColors = [{
  backgroundColor: "rgba(247, 49, 100, 0.3)",
  borderColor: '#f73164',
  borderWidth: 2
}, {
  backgroundColor: "rgba(145, 46, 252, 0.3)",
  borderColor: '#7366ff',
  borderWidth: 2
}];
// RadarGraph Chart
var radarGraphOptions = {
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(0,0,0,.2)",
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 3,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};
var radarGraphLabels = ["Ford", "Chevy", "Toyota", "Honda", "Mazda"];
var radarGraphType = 'radar';
var radarGraphLegend = false;
var radarGraphData = [{
  data: [12, 3, 5, 18, 7]
}];
var radarGraphColors = [{
  backgroundColor: "rgba(145, 46, 252, 0.3)",
  borderColor: '#7366ff',
  borderWidth: 2
}];
//line chart
var lineChartData = [{
  data: [10, 20, 40, 30, 0, 20, 10, 30, 10]
}, {
  data: [20, 40, 10, 20, 40, 30, 40, 10, 20]
}, {
  data: [60, 10, 40, 30, 80, 30, 20, 90, 0]
}];
var lineChartLabels = ["", "10", "20", "30", "40", "50", "60", "70", "80"];
var lineChartOptions = {
  responsive: true,
  scaleShowVerticalLines: false,
  maintainAspectRatio: false
};
var lineChartColors = [{
  backgroundColor: "rgba(81, 187, 37, 0.3)",
  borderColor: '#51bb25',
  borderWidth: 2,
  lineTension: 0
}, {
  backgroundColor: "rgba(247, 49, 100, 0.3)",
  borderColor: '#f73164',
  borderWidth: 2,
  lineTension: 0
}, {
  backgroundColor: "rgba(145, 46, 252, 0.3)",
  borderColor: '#7366ff',
  borderWidth: 2,
  lineTension: 0
}];
var lineChartLegend = false;
var lineChartType = 'line';
// Doughnut
var doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
var doughnutChartData = [500, 100, 300];
var doughnutChartColors = [{
  backgroundColor: [primary_color, secondary_color, "#51bb25"]
}];
var doughnutChartType = 'doughnut';
var doughnutChartOptions = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false
};
// PolarArea
var polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
var polarAreaChartData = [300, 500, 100, 40, 120];
var polarAreaLegend = false;
var ploarChartColors = [{
  backgroundColor: [primary_color, secondary_color, "#51bb25", "#a927f9", "#f8d62b"]
}];
var polarAreaChartType = 'polarArea';
var polarChartOptions = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false
};

/***/ }),

/***/ 59413:
/*!***************************************************!*\
  !*** ./src/app/shared/data/chart/google-chart.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areaChart1: () => (/* binding */ areaChart1),
/* harmony export */   areaChart2: () => (/* binding */ areaChart2),
/* harmony export */   barChart1: () => (/* binding */ barChart1),
/* harmony export */   barChart2: () => (/* binding */ barChart2),
/* harmony export */   columnChart1: () => (/* binding */ columnChart1),
/* harmony export */   columnChart2: () => (/* binding */ columnChart2),
/* harmony export */   comboChart: () => (/* binding */ comboChart),
/* harmony export */   lineChart: () => (/* binding */ lineChart),
/* harmony export */   pieChart1: () => (/* binding */ pieChart1),
/* harmony export */   pieChart2: () => (/* binding */ pieChart2),
/* harmony export */   pieChart3: () => (/* binding */ pieChart3),
/* harmony export */   pieChart4: () => (/* binding */ pieChart4)
/* harmony export */ });
let primary_color = localStorage.getItem('primary_color') || '#7366ff';
let secondary_color = localStorage.getItem('secondary_color') || '#f73164';
// Pie Chart 1
var pieChart1 = {
  chartType: 'PieChart',
  dataTable: [['Task', 'Hours per Day'], ['Work', 5], ['Eat', 10], ['Commute', 15], ['Watch TV', 20], ['Sleep', 25]],
  options: {
    title: 'My Daily Activities',
    width: '100%',
    height: 400,
    colors: ["#f8d62b", "#51bb25", "#a927f9", secondary_color, primary_color],
    backgroundColor: 'transparent'
  }
};
// Pie Chart 2
var pieChart2 = {
  chartType: 'PieChart',
  dataTable: [['Task', 'Hours per Day'], ['Work', 5], ['Eat', 10], ['Commute', 15], ['Watch TV', 20], ['Sleep', 25]],
  options: {
    title: 'My Daily Activities',
    is3D: true,
    width: '100%',
    height: 400,
    colors: ["#f8d62b", "#51bb25", "#a927f9", secondary_color, primary_color],
    backgroundColor: 'transparent'
  }
};
// Pie Chart 3
var pieChart3 = {
  chartType: 'PieChart',
  dataTable: [['Task', 'Hours per Day'], ['Work', 2], ['Eat', 2], ['Commute', 11], ['Watch TV', 2], ['Sleep', 7]],
  options: {
    title: 'My Daily Activities',
    pieHole: 0.4,
    width: '100%',
    height: 400,
    colors: ["#f8d62b", "#51bb25", "#a927f9", secondary_color, primary_color],
    backgroundColor: 'transparent'
  }
};
// Pie Chart 4
var pieChart4 = {
  chartType: 'PieChart',
  dataTable: [['Language', 'Speakers (in millions)'], ['Assamese', 13], ['Bengali', 83], ['Bodo', 1.4], ['Dogri', 2.3], ['Gujarati', 46], ['Hindi', 300], ['Kannada', 38], ['Kashmiri', 5.5], ['Konkani', 5], ['Maithili', 20], ['Malayalam', 33], ['Manipuri', 1.5], ['Marathi', 72], ['Nepali', 2.9], ['Oriya', 33], ['Punjabi', 29], ['Sanskrit', 0.01], ['Santhali', 6.5], ['Sindhi', 2.5], ['Tamil', 61], ['Telugu', 74], ['Urdu', 52]],
  options: {
    title: 'Indian Language Use',
    legend: 'none',
    width: '100%',
    height: 400,
    pieSliceText: 'label',
    slices: {
      4: {
        offset: 0.2
      },
      12: {
        offset: 0.3
      },
      14: {
        offset: 0.4
      },
      15: {
        offset: 0.5
      }
    },
    // colors: ["#ab8ce4", "#26c6da"]
    colors: ["#f8d62b", primary_color, secondary_color, "#51bb25", "#a927f9", "#dc3545", primary_color, secondary_color, "#51bb25", "#f8d62b", "#a927f9", "#dc3545", primary_color, secondary_color, "#51bb25", "#f8d62b", "#a927f9", "#dc3545", "#fd7b6c", "#51bb25", "#f8d62b", "#a927f9"],
    backgroundColor: 'transparent'
  }
};
// Area Chart 1
var areaChart1 = {
  chartType: 'AreaChart',
  dataTable: [['Year', 'Sales', 'Expenses'], ['2019', 1000, 400], ['2020', 1170, 460], ['2021', 660, 1120], ['2022', 1030, 540]],
  options: {
    title: 'Company Performance',
    hAxis: {
      title: 'Year',
      titleTextStyle: {
        color: '#333'
      }
    },
    vAxis: {
      minValue: 0
    },
    width: '100%',
    height: 400,
    colors: [primary_color, secondary_color],
    backgroundColor: 'transparent'
  }
};
// Area Chart 2
var areaChart2 = {
  chartType: 'AreaChart',
  dataTable: [['Year', 'Cars', 'Trucks', 'Drones', 'Segways'], ['2019', 100, 400, 2000, 400], ['2020', 500, 700, 530, 800], ['2021', 2000, 1000, 620, 120], ['2022', 120, 201, 2501, 540]],
  options: {
    title: 'Company Performance',
    hAxis: {
      title: 'Year',
      titleTextStyle: {
        color: '#333'
      }
    },
    vAxis: {
      minValue: 0
    },
    width: '100%',
    height: 400,
    colors: [primary_color, secondary_color, "#51bb25", "#f8d62b"],
    backgroundColor: 'transparent'
  }
};
// Column Chart 1
var columnChart1 = {
  chartType: 'ColumnChart',
  dataTable: [["Year", "Sales", "Expenses", "Profit"], ["2020", 1e3, 400, 250], ["2021", 1170, 460, 300], ["2022", 660, 1120, 400], ["2022", 1030, 540, 450]],
  options: {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2020-2022"
    },
    bars: "vertical",
    vAxis: {
      format: "decimal"
    },
    height: 400,
    width: '100%',
    colors: [primary_color, secondary_color, "#51bb25"],
    backgroundColor: 'transparent'
  }
};
// Column-BarChart Chart 2
var columnChart2 = {
  chartType: 'BarChart',
  dataTable: [["Year", "Sales", "Expenses", "Profit"], ["2020", 1e3, 400, 250], ["2021", 1170, 460, 300], ["2022", 660, 1120, 400], ["2022", 1030, 540, 450]],
  options: {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2020-2022"
    },
    bars: "horizontal",
    vAxis: {
      format: "decimal"
    },
    height: 400,
    width: '100%',
    colors: [primary_color, secondary_color, "#51bb25"],
    backgroundColor: 'transparent'
  }
};
// ColumnChart-BarChart Chart 1
var barChart1 = {
  chartType: 'ColumnChart',
  dataTable: [["Element", "Density", {
    role: "style"
  }], ["Copper", 10, primary_color], ["Silver", 12, secondary_color], ["Gold", 14, "#51bb25"], ["Platinum", 16, "color: #f8d62b"]],
  options: {
    title: "Density of Precious Metals, in g/cm^3",
    width: '100%',
    height: 400,
    bar: {
      groupWidth: "95%"
    },
    legend: {
      position: "none"
    },
    backgroundColor: 'transparent'
  }
};
// BarChart Chart 2
var barChart2 = {
  chartType: 'BarChart',
  dataTable: [["Element", "Density", {
    role: "style"
  }], ["Copper", 10, primary_color], ["Silver", 12, secondary_color], ["Gold", 14, "#51bb25"], ["Platinum", 16, "color: #a927f9"]],
  options: {
    title: "Density of Precious Metals, in g/cm^3",
    width: '100%',
    height: 400,
    bar: {
      groupWidth: "95%"
    },
    legend: {
      position: "none"
    },
    backgroundColor: 'transparent'
  }
};
// Line Chart 
var lineChart = {
  chartType: 'LineChart',
  dataTable: [['Month', 'Guardians of the Galaxy', 'The Avengers', 'Transformers: Age of Extinction'], [1, 37.8, 80.8, 41.8], [2, 30.9, 10.5, 32.4], [3, 40.4, 57, 25.7], [4, 11.7, 18.8, 10.5], [5, 20, 17.6, 10.4], [6, 8.8, 13.6, 7.7], [7, 7.6, 12.3, 9.6], [8, 12.3, 29.2, 10.6], [9, 16.9, 42.9, 14.8], [10, 12.8, 30.9, 11.6], [11, 5.3, 7.9, 4.7], [12, 6.6, 8.4, 5.2]],
  options: {
    chart: {
      title: 'Box Office Earnings in First Two Weeks of Opening',
      subtitle: 'in millions of dollars (USD)'
    },
    colors: [primary_color, secondary_color, "#51bb25"],
    height: 500,
    width: '100%',
    backgroundColor: 'transparent'
  }
};
// Combo Chart
var comboChart = {
  chartType: 'ComboChart',
  dataTable: [['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'], ['2017/18', 165, 938, 522, 998, 450, 614.6], ['2018/19', 135, 1120, 599, 1268, 288, 682], ['2019/20', 157, 1167, 587, 807, 397, 623], ['2020/21', 139, 1110, 615, 968, 215, 609.4], ['2021/22', 136, 691, 629, 1026, 366, 569.6]],
  options: {
    title: 'Monthly Coffee Production by Country',
    vAxis: {
      title: 'Cups'
    },
    hAxis: {
      title: 'Month'
    },
    seriesType: 'bars',
    series: {
      5: {
        type: 'line'
      }
    },
    height: 500,
    fullWidth: true,
    colors: [primary_color, secondary_color, "#51bb25", "#a927f9", "#f8d62b"],
    backgroundColor: 'transparent'
  }
};

/***/ }),

/***/ 62741:
/*!**********************************************************************!*\
  !*** ./node_modules/ng2-google-charts/fesm2015/ng2-google-charts.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartHTMLTooltip: () => (/* binding */ ChartHTMLTooltip),
/* harmony export */   GoogleChartComponent: () => (/* binding */ GoogleChartComponent),
/* harmony export */   GoogleChartEditor: () => (/* binding */ GoogleChartEditor),
/* harmony export */   GoogleChartType: () => (/* binding */ GoogleChartType),
/* harmony export */   GoogleChartsControlComponent: () => (/* binding */ GoogleChartsControlComponent),
/* harmony export */   GoogleChartsDashboardComponent: () => (/* binding */ GoogleChartsDashboardComponent),
/* harmony export */   GoogleChartsLoaderService: () => (/* binding */ GoogleChartsLoaderService),
/* harmony export */   Ng2GoogleChartsModule: () => (/* binding */ Ng2GoogleChartsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class GoogleChartsDataTable {
  constructor(opt) {
    this.opt = opt;
    this.dataTableChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    if (opt) {
      this._setDataTable(opt.dataTable, opt.firstRowIsData);
    }
  }
  send() {
    if (this.query === undefined) {
      return;
    }
    this.query.send(queryResponse => {
      this.setDataTable(queryResponse.getDataTable());
      if (this.opt.queryCallback) {
        this.opt.queryCallback(queryResponse);
      }
    });
  }
  init(opt) {
    if (opt) {
      this.opt = opt;
    }
    if (this.tid !== undefined) {
      // doesn't work, see https://github.com/google/google-visualization-issues/issues/2381
      // this.query.abort();
      window.clearInterval(this.tid);
      this.tid = undefined;
    }
    if (this.opt.dataSourceUrl) {
      this.query = new google.visualization.Query(this.opt.dataSourceUrl);
      if (this.opt.query) {
        this.query.setQuery(this.opt.query);
      }
      if (this.opt.timeout !== undefined) {
        this.query.setTimeout(this.opt.timeout);
      }
      if (this.opt.refreshInterval) {
        // this.query.setRefreshInterval(this.opt.refreshInterval);
        this.tid = window.setInterval(() => {
          this.send();
        }, this.opt.refreshInterval * 1000);
      }
      this.send();
    } else {
      this.setDataTable(this.opt.dataTable);
    }
  }
  /**
   * @returns Underlying google.visualization.DataTable
   */
  getDataTable() {
    return this.dataTable;
  }
  setDataTable(dt, firstRowIsData) {
    if (firstRowIsData === undefined) {
      firstRowIsData = this.opt.firstRowIsData;
    }
    this._setDataTable(dt, firstRowIsData);
    this.dataTableChanged.emit(this.dataTable);
  }
  _setDataTable(dt, firstRowIsData) {
    if (Array.isArray(dt)) {
      dt = google.visualization.arrayToDataTable(dt, firstRowIsData);
    }
    this.dataTable = dt;
    this.reformat();
  }
  /**
   * Applies formatters to data columns, if defined
   */
  reformat() {
    const dt = this.dataTable;
    if (dt === undefined) {
      return;
    }
    if (this.opt.formatters === undefined) {
      return;
    }
    for (const formatterConfig of this.opt.formatters) {
      let formatter;
      if (formatterConfig.type === 'PatternFormat') {
        const fmtOptions = formatterConfig.options;
        formatter = new google.visualization.PatternFormat(fmtOptions.pattern);
        formatter.format(dt, formatterConfig.columns, fmtOptions.dstColumnIndex);
        continue;
      }
      const formatterConstructor = google.visualization[formatterConfig.type];
      const formatterOptions = formatterConfig.options;
      formatter = new formatterConstructor(formatterOptions);
      if (formatterConfig.type === 'ColorFormat' && formatterOptions) {
        const fmtOptions = formatterOptions;
        if (fmtOptions.ranges) {
          for (const range of fmtOptions.ranges) {
            if (typeof range.fromBgColor !== 'undefined' && typeof range.toBgColor !== 'undefined') {
              formatter.addGradientRange(range.from, range.to, range.color, range.fromBgColor, range.toBgColor);
            } else {
              formatter.addRange(range.from, range.to, range.color, range.bgcolor);
            }
          }
        }
      }
      for (const col of formatterConfig.columns) {
        formatter.format(dt, col);
      }
    }
  }
}
GoogleChartsDataTable.ɵfac = function GoogleChartsDataTable_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
};
GoogleChartsDataTable.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: GoogleChartsDataTable,
  outputs: {
    dataTableChanged: "dataTableChanged"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartsDataTable, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: undefined
    }];
  }, {
    dataTableChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class ChartHTMLTooltip {
  constructor(el) {
    this.el = el;
  }
  setPosition(x, y) {
    this.el.nativeElement.style.left = x + ChartHTMLTooltip.PIXELS;
    this.el.nativeElement.style.top = y + ChartHTMLTooltip.PIXELS;
  }
  getDOMElement() {
    return this.el;
  }
}
ChartHTMLTooltip.PIXELS = 'px';
class GoogleChartsLoaderService {
  constructor(localeId, googleChartsSettings) {
    this.googleChartsSettings = googleChartsSettings;
    this.loadedPackages = [];
    this.loaded = false;
    const defaultSettings = {
      googleChartsVersion: '50',
      language: localeId
    };
    this.googleChartsSettings = Object.assign(Object.assign({}, defaultSettings), this.googleChartsSettings);
    this.googleScriptLoadingNotifier = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.googleChartLoadingNotifier = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.googleScriptIsLoading = false;
    this.googleChartIsLoading = false;
    this.loadGoogleChartsScriptPromise = new Promise((resolve, reject) => {
      if (typeof google !== 'undefined' && google.charts) {
        resolve();
      } else if (!this.googleScriptIsLoading) {
        this.googleScriptIsLoading = true;
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          this.googleScriptIsLoading = false;
          this.googleScriptLoadingNotifier.emit(true);
          resolve();
        };
        script.onerror = () => {
          this.googleScriptIsLoading = false;
          this.googleScriptLoadingNotifier.emit(false);
          reject();
        };
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        this.googleScriptLoadingNotifier.subscribe(loaded => {
          if (loaded) {
            resolve();
          } else {
            reject();
          }
        });
      }
    });
  }
  load(settings) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      yield this.loadGoogleChartsScriptPromise;
      yield new Promise(resolve => {
        if (this.googleChartIsLoading) {
          this.googleChartLoadingNotifier.subscribe(() => {
            this.doLoad(resolve, settings);
          });
          return;
        }
        this.doLoad(resolve, settings);
      });
    });
  }
  doLoad(resolve, settings) {
    settings = Object.assign(Object.assign({}, this.googleChartsSettings), settings);
    if (!settings.packages && this.loaded) {
      resolve();
      return;
    }
    if (settings.packages) {
      let pkgs = settings.packages.filter(p => this.loadedPackages.indexOf(p) < 0);
      if (pkgs.length == 0 && this.loaded) {
        resolve();
        return;
      }
      settings.packages = pkgs;
    }
    const _settings = settings;
    _settings.callback = () => {
      this.googleChartIsLoading = false;
      if (_settings.packages !== undefined) {
        this.loadedPackages = this.loadedPackages.concat(_settings.packages);
      }
      this.loaded = true;
      this.googleChartLoadingNotifier.emit();
      resolve();
    };
    this.googleChartIsLoading = true;
    google.charts.load(settings.googleChartsVersion, _settings);
  }
}
GoogleChartsLoaderService.ɵfac = function GoogleChartsLoaderService_Factory(t) {
  return new (t || GoogleChartsLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('googleChartsSettings', 8));
};
GoogleChartsLoaderService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: GoogleChartsLoaderService,
  factory: GoogleChartsLoaderService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartsLoaderService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: ['googleChartsSettings']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, null);
})();
var GoogleChartType;
(function (GoogleChartType) {
  GoogleChartType["AnnotationChart"] = "AnnotationChart";
  GoogleChartType["AreaChart"] = "AreaChart";
  GoogleChartType["BarChart"] = "BarChart";
  GoogleChartType["BubbleChart"] = "BubbleChart";
  GoogleChartType["Calendar"] = "Calendar";
  GoogleChartType["CandlestickChart"] = "CandlestickChart";
  GoogleChartType["ColumnChart"] = "ColumnChart";
  GoogleChartType["ComboChart"] = "ComboChart";
  GoogleChartType["Gantt"] = "Gantt";
  GoogleChartType["Gauge"] = "Gauge";
  GoogleChartType["GeoChart"] = "GeoChart";
  GoogleChartType["Histogram"] = "Histogram";
  GoogleChartType["LineChart"] = "LineChart";
  GoogleChartType["Map"] = "Map";
  GoogleChartType["OrgChart"] = "OrgChart";
  GoogleChartType["PieChart"] = "PieChart";
  GoogleChartType["Sankey"] = "Sankey";
  GoogleChartType["ScatterChart"] = "ScatterChart";
  GoogleChartType["SteppedAreaChart"] = "SteppedAreaChart";
  GoogleChartType["Table"] = "Table";
  GoogleChartType["Timeline"] = "Timeline";
  GoogleChartType["TreeMap"] = "TreeMap";
  GoogleChartType["VegaChart"] = "VegaChart";
  GoogleChartType["WordTree"] = "WordTree";
})(GoogleChartType || (GoogleChartType = {}));
class GoogleChartComponent {
  constructor(el, loaderService) {
    this.el = el;
    this.loaderService = loaderService;
    this.selectListener = () => {
      const event = {
        message: 'select',
        row: null,
        column: null,
        selectedRowValues: [],
        selectedRowFormattedValues: [],
        columnLabel: ''
      };
      const s = this.wrapper.visualization.getSelection();
      const gs = s[s.length - 1];
      if (!gs) {
        event.message = 'deselect';
        return event;
      }
      const selection = gs;
      if (gs.row != null) {
        event.row = selection.row;
        const selectedRowValues = [];
        const selectedRowFormattedValues = [];
        const dataTable = this.wrapper.getDataTable();
        const numberOfColumns = dataTable.getNumberOfColumns();
        for (let i = 0; i < numberOfColumns; i++) {
          selectedRowValues.push(dataTable.getValue(selection.row, i));
          selectedRowFormattedValues.push(dataTable.getFormattedValue(selection.row, i));
        }
        event.selectedRowValues = selectedRowValues;
        event.selectedRowFormattedValues = selectedRowFormattedValues;
      }
      if (selection.column != null) {
        event.column = selection.column;
        event.columnLabel = this.getColumnLabelAtPosition(selection);
      }
      if (gs.name) {
        event.columnLabel = gs.name;
      }
      return event;
    };
    this.chartSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.chartSelectOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.chartReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.chartReadyOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.chartError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.chartErrorOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.mouseOverOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.mouseOutOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.regionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.regionClickOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    this.HTMLel = this.el.nativeElement.querySelector('div');
    if (Object.isExtensible(this.data)) {
      this.data.component = this;
    }
    this.options = this.data.options;
    this.init().then(() => {
      this.draw();
    });
  }
  init() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      yield this.loaderService.load();
      this.recreateWrapper();
    });
  }
  recreateWrapper() {
    if (this.wrapper === undefined || this.wrapper.getChartType() !== this.data.chartType) {
      this.dataTable = new GoogleChartsDataTable(this.data);
      this.dataTable.dataTableChanged.subscribe(dt => {
        this._draw();
      });
      // see dataTable in https://developers.google.com/chart/interactive/docs/reference#google.visualization.drawchart
      let temp = this.data;
      if (this.data.firstRowIsData) {
        temp = Object.assign(temp, this.data);
        temp.dataTable = this.dataTable.getDataTable();
      }
      this.wrapper = new google.visualization.ChartWrapper(temp);
      this.registerChartWrapperEvents();
      /* Calling draw even without data is the only way to pass the HTMl element
         when using the chart in a dashboard. Don't do this in all other cases:
         it breaks formatters with remote data source, hence the conditional. */
      if (temp.dataTable === undefined && temp.dataSourceUrl === undefined) {
        try {
          this.wrapper.draw(this.HTMLel);
        } catch (err) {}
      }
    }
  }
  _draw() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      const dt = this.dataTable.getDataTable();
      if (dt === undefined) {
        return;
      }
      this.convertOptions();
      this.recreateWrapper();
      this.wrapper.setOptions(this.options);
      this.wrapper.setDataTable(dt);
      this.wrapper.draw(this.HTMLel);
    });
  }
  getDataTable() {
    return this.dataTable;
  }
  draw(value) {
    if (value === undefined) {
      value = this.data;
    }
    this.options = value.options;
    this.dataTable.init(value);
  }
  getSelectorBySeriesType(seriesType) {
    const selectors = {
      bars: 'bar#%s#%r',
      haxis: 'hAxis#0#label',
      line: 'point#%s#%r',
      legend: 'legendentry#%s',
      area: 'point#%s#%r'
    };
    const selector = selectors[seriesType];
    return selector;
  }
  /**
   * Given a column number, counts how many
   * columns have rol=="data". Those are mapped
   * one-to-one to the series array. When rol is not defined
   * a column of type number means a series column.
   * @param column to inspect
   */
  getSeriesByColumn(column) {
    let series = 0;
    const dataTable = this.wrapper.getDataTable();
    for (let i = column - 1; i >= 0; i--) {
      const role = dataTable.getColumnRole(i);
      const type = dataTable.getColumnType(i);
      if (role === 'data' || type === 'number') {
        series++;
      }
    }
    return series;
  }
  getBoundingBoxForItem(item) {
    let boundingBox = {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
    if (this.cli) {
      const column = item.column;
      const series = this.getSeriesByColumn(column);
      const row = item.row;
      let seriesType = this.options.seriesType;
      if (this.options.series && this.options.series[series] && this.options.series[series].type) {
        seriesType = this.options.series[series].type;
      }
      if (seriesType) {
        let selector = this.getSelectorBySeriesType(seriesType);
        if (selector) {
          selector = selector.replace('%s', series + '').replace('%c', column + '').replace('%r', row + '');
          const box = this.cli.getBoundingBox(selector);
          if (box) {
            boundingBox = box;
          }
        }
      }
    }
    return boundingBox;
  }
  getValueAtPosition(position) {
    if (position.row == null) {
      return null;
    }
    const dataTable = this.wrapper.getDataTable();
    const value = dataTable.getValue(position.row, position.column);
    return value;
  }
  getColumnTypeAtPosition(position) {
    const dataTable = this.wrapper.getDataTable();
    const type = dataTable.getColumnType(position.column) || '';
    return type;
  }
  getColumnLabelAtPosition(position) {
    const dataTable = this.wrapper.getDataTable();
    const type = dataTable.getColumnLabel(position.column) || '';
    return type;
  }
  getHTMLTooltip() {
    const tooltipER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef(this.el.nativeElement.querySelector('.google-visualization-tooltip'));
    return new ChartHTMLTooltip(tooltipER);
  }
  parseMouseEvent(item) {
    const chartType = this.wrapper.getChartType();
    let eventColumn = item.column;
    if (eventColumn == null) {
      switch (chartType) {
        case 'Timeline':
          eventColumn = this.wrapper.getDataTable().getNumberOfColumns() === 3 ? 0 : 1;
          break;
        default:
          eventColumn = 0;
      }
    }
    const eventRow = item.row;
    const myItem = {
      row: eventRow,
      column: eventColumn
    };
    const event = {
      position: item,
      boundingBox: this.getBoundingBoxForItem(myItem),
      value: this.getValueAtPosition(myItem),
      columnType: this.getColumnTypeAtPosition(myItem),
      columnLabel: this.getColumnLabelAtPosition(myItem)
    };
    return event;
  }
  registerChartEvents() {
    const chart = this.wrapper.getChart();
    this.cli = chart.getChartLayoutInterface ? chart.getChartLayoutInterface() : null;
    if (this.mouseOver.observers.length > 0) {
      google.visualization.events.addListener(chart, 'onmouseover', item => {
        const event = this.parseMouseEvent(item);
        event.tooltip = this.getHTMLTooltip();
        this.mouseOver.emit(event);
      });
    }
    if (this.mouseOverOneTime.observers.length > 0) {
      google.visualization.events.addOneTimeListener(chart, 'onmouseover', item => {
        const event = this.parseMouseEvent(item);
        event.tooltip = this.getHTMLTooltip();
        this.mouseOverOneTime.emit(event);
      });
    }
    if (this.mouseOut.observers.length > 0) {
      google.visualization.events.addListener(chart, 'onmouseout', item => {
        const event = this.parseMouseEvent(item);
        this.mouseOut.emit(event);
      });
    }
    if (this.mouseOutOneTime.observers.length > 0) {
      google.visualization.events.addOneTimeListener(chart, 'onmouseout', item => {
        const event = this.parseMouseEvent(item);
        this.mouseOutOneTime.emit(event);
      });
    }
    if (this.data.chartType === 'GeoChart') {
      if (this.regionClick.observers.length > 0) {
        google.visualization.events.addListener(chart, 'regionClick', item => {
          this.regionClick.emit(item);
        });
      }
      if (this.regionClickOneTime.observers.length > 0) {
        google.visualization.events.addOneTimeListener(chart, 'regionClick', item => {
          this.regionClick.emit(item);
        });
      }
    }
  }
  registerChartWrapperEvents() {
    google.visualization.events.addListener(this.wrapper, 'ready', () => {
      this.chartReady.emit({
        message: 'Chart ready'
      });
    });
    google.visualization.events.addOneTimeListener(this.wrapper, 'ready', () => {
      this.chartReadyOneTime.emit({
        message: 'Chart ready (one time)'
      });
      this.registerChartEvents();
    });
    google.visualization.events.addListener(this.wrapper, 'error', error => {
      this.chartError.emit(error);
    });
    google.visualization.events.addOneTimeListener(this.wrapper, 'error', error => {
      this.chartErrorOneTime.emit(error);
    });
    this.addListener(this.wrapper, 'select', this.selectListener, this.chartSelect);
    this.addOneTimeListener(this.wrapper, 'select', this.selectListener, this.chartSelectOneTime);
  }
  addListener(source, eventType, listenerFn, evEmitter) {
    google.visualization.events.addListener(source, eventType, () => {
      evEmitter.emit(listenerFn());
    });
  }
  addOneTimeListener(source, eventType, listenerFn, evEmitter) {
    google.visualization.events.addOneTimeListener(source, eventType, () => {
      evEmitter.emit(listenerFn());
    });
  }
  convertOptions() {
    try {
      this.options = google.charts[this.data.chartType].convertOptions(this.options);
    } catch (error) {
      return;
    }
  }
}
GoogleChartComponent.ɵfac = function GoogleChartComponent_Factory(t) {
  return new (t || GoogleChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleChartsLoaderService));
};
GoogleChartComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GoogleChartComponent,
  selectors: [["google-chart"]],
  inputs: {
    data: "data"
  },
  outputs: {
    chartReady: "chartReady",
    chartReadyOneTime: "chartReadyOneTime",
    chartError: "chartError",
    chartErrorOneTime: "chartErrorOneTime",
    chartSelect: "chartSelect",
    chartSelectOneTime: "chartSelectOneTime",
    mouseOver: "mouseOver",
    mouseOverOneTime: "mouseOverOneTime",
    mouseOut: "mouseOut",
    mouseOutOneTime: "mouseOutOneTime",
    regionClick: "regionClick",
    regionClickOneTime: "regionClickOneTime"
  },
  decls: 1,
  vars: 0,
  template: function GoogleChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'google-chart',
      template: '<div></div>'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: GoogleChartsLoaderService
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    chartReady: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    chartReadyOneTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    chartError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    chartErrorOneTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    chartSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    chartSelectOneTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseOverOneTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseOutOneTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    regionClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    regionClickOneTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class GoogleChartsDashboardComponent {
  constructor(el, loaderService) {
    this.el = el;
    this.loaderService = loaderService;
    this.el = el;
    this.loaderService = loaderService;
  }
  ngOnInit() {
    this.data.component = this;
    this.init().then(() => {
      if (!this.dataTable) {
        this.dataTable = new GoogleChartsDataTable(this.data);
        this.dataTable.dataTableChanged.subscribe(dt => {
          this._draw();
        });
      }
      this.draw();
    });
  }
  init() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      yield this.loaderService.load({
        packages: ['controls']
      });
      this.dashboard = new google.visualization.Dashboard(this.el.nativeElement.querySelector('div'));
      for (const b of this.data.bind) {
        let controls = b[0];
        let charts = b[1];
        if (!(controls instanceof Array)) {
          controls = [controls];
        }
        if (!(charts instanceof Array)) {
          charts = [charts];
        }
        for (const c of controls) {
          yield c.component.ensureInit();
        }
        for (const c of charts) {
          if (!c.component) {
            continue;
          }
          yield c.component.init();
          const data = c.component.data;
          if (data.dataTable !== undefined || data.dataSourceUrl !== undefined) {
            throw Error('dataTable and dataSourceUrl cannot be specified when ' + 'chart is drawn in a Dashboard');
          }
        }
        this.dashboard.bind(controls.map(x => x.component.wrapper), charts.map(x => x.component.wrapper));
      }
    });
  }
  draw(value) {
    this.dataTable.init(value);
  }
  _draw() {
    this.dashboard.draw(this.dataTable.getDataTable());
  }
}
GoogleChartsDashboardComponent.ɵfac = function GoogleChartsDashboardComponent_Factory(t) {
  return new (t || GoogleChartsDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleChartsLoaderService));
};
GoogleChartsDashboardComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GoogleChartsDashboardComponent,
  selectors: [["google-charts-dashboard"]],
  inputs: {
    data: "data"
  },
  decls: 1,
  vars: 0,
  template: function GoogleChartsDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartsDashboardComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'google-charts-dashboard',
      template: '<div></div>'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: GoogleChartsLoaderService
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class GoogleChartsControlComponent {
  constructor(el, loaderService) {
    this.el = el;
    this.loaderService = loaderService;
    this.el = el;
    this.loaderService = loaderService;
  }
  ngOnInit() {
    this.data.component = this;
  }
  ensureInit() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      if (this.wrapper) {
        return;
      }
      yield this.loaderService.load({
        packages: ['controls']
      });
      let opt;
      opt = Object.create(this.data);
      opt.containerId = this.el.nativeElement.querySelector('div');
      this.wrapper = new google.visualization.ControlWrapper(opt);
    });
  }
}
GoogleChartsControlComponent.ɵfac = function GoogleChartsControlComponent_Factory(t) {
  return new (t || GoogleChartsControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleChartsLoaderService));
};
GoogleChartsControlComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GoogleChartsControlComponent,
  selectors: [["google-charts-control"]],
  inputs: {
    data: "data"
  },
  decls: 1,
  vars: 0,
  template: function GoogleChartsControlComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartsControlComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'google-charts-control',
      template: '<div></div>'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: GoogleChartsLoaderService
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class Ng2GoogleChartsModule {}
Ng2GoogleChartsModule.ɵfac = function Ng2GoogleChartsModule_Factory(t) {
  return new (t || Ng2GoogleChartsModule)();
};
Ng2GoogleChartsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: Ng2GoogleChartsModule
});
Ng2GoogleChartsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [GoogleChartsLoaderService]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2GoogleChartsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent],
      providers: [GoogleChartsLoaderService],
      exports: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent]
    }]
  }], null, null);
})();
function isComponent(chart) {
  return chart.wrapper !== undefined;
}
class GoogleChartEditor {
  constructor(loaderService) {
    this.loaderService = loaderService;
  }
  createEditor() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      if (this.chartEditor !== undefined) {
        return;
      }
      yield this.loaderService.load({
        packages: ['charteditor']
      });
      this.chartEditor = new google.visualization.ChartEditor();
      google.visualization.events.addListener(this.chartEditor, 'ok', () => {
        const wrapper = this.chartEditor.getChartWrapper();
        this.comp.wrapper = wrapper;
        this.comp.data.chartType = wrapper.getChartType();
        if (this.comp.data.options !== undefined || Object.isExtensible(this.comp.data)) {
          this.comp.data.options = wrapper.getOptions();
        }
        this.comp.wrapper.draw();
      });
    });
  }
  openDialog(chart, options) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      yield this.createEditor();
      return new Promise((resolve, reject) => {
        this.comp = isComponent(chart) ? chart : chart.component;
        google.visualization.events.addListener(this.chartEditor, 'ok', () => {
          resolve(this.comp.wrapper);
        });
        google.visualization.events.addListener(this.chartEditor, 'cancel', () => {
          reject();
        });
        this.chartEditor.openDialog(this.comp.wrapper, options);
      });
    });
  }
}
GoogleChartEditor.ɵfac = function GoogleChartEditor_Factory(t) {
  return new (t || GoogleChartEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](GoogleChartsLoaderService));
};
GoogleChartEditor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: GoogleChartEditor,
  factory: GoogleChartEditor.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartEditor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: GoogleChartsLoaderService
    }];
  }, null);
})();

/*
 * Public API Surface of ng2-google-charts
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_components_charts_charts_module_ts.js.map