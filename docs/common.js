"use strict";
(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["common"],{

/***/ 67931:
/*!******************************************************************!*\
  !*** ./src/app/shared/services/product-services/item.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemService: () => (/* binding */ ItemService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class ItemService {
  getAllItems() {
    return this.item.slice();
  }
  constructor() {
    this.item = [{
      code: "20",
      name: "Item A",
      type: 'Goods',
      category: "Category A",
      group: "Group A",
      unit: "1",
      city: "Pali",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }, {
      code: "38",
      name: "Item B",
      type: 'Service',
      category: "Category B",
      group: "Group B",
      unit: "2",
      city: "Pali",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }, {
      code: "19",
      name: "Item A",
      type: 'Goods',
      category: "Category A",
      group: "Group A",
      unit: "1",
      city: "Pali",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }, {
      code: "48",
      name: "Item C",
      type: 'Goods',
      category: "Category C",
      group: "Group C",
      unit: "3",
      city: "Pali",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }, {
      code: "45",
      name: "Item A",
      type: 'Goods',
      category: "Category A",
      group: "Group A",
      unit: "1",
      city: "Pali",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }, {
      code: "68",
      name: "Item C",
      type: 'Goods',
      category: "Category C",
      group: "Group C",
      unit: "3",
      city: "Pali",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }];
  }
  static #_ = this.ɵfac = function ItemService_Factory(t) {
    return new (t || ItemService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ItemService,
    factory: ItemService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=common.js.map