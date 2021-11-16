"use strict";
exports.id = 417;
exports.ids = [417];
exports.modules = {

/***/ 8417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wJ": () => (/* binding */ addOrRemoveFilter),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports addFilter, removeFilter, filters */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-param-reassign */

const INITIAL_STATE = {
  appliedFilters: []
};
const productFilterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'productFilter',
  initialState: INITIAL_STATE,
  reducers: {
    addFilter: (state, action) => {
      state.appliedFilters.push(action.payload);
    },
    removeFilter: (state, action) => {
      const newFilters = state.appliedFilters.map(filter => {
        if (filter === action.payload) return filter;
        return null;
      });
      state.appliedFilters = newFilters;
    },
    addOrRemoveFilter: (state, action) => {
      // To check if the filter is already selected.
      const filterSelected = state.appliedFilters.includes(action.payload); // if selected filter is already selected then remove it. Else add it

      if (filterSelected) {
        const newFilters = state.appliedFilters.filter(filter => {
          if (filter !== action.payload) return true;
          return false;
        });
        state.appliedFilters = newFilters;
      } else {
        state.appliedFilters.push(action.payload);
      }
    }
  }
});
const {
  addFilter,
  removeFilter,
  addOrRemoveFilter
} = productFilterSlice.actions;
const filters = state => state.productFilter.appliedFilters;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productFilterSlice.reducer);

/***/ })

};
;