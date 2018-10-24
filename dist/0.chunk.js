webpackJsonp([0],Array(54).concat([
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(69)

var Component = __webpack_require__(22)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(94),
  /* scopeId */
  "data-v-78fd8b1a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ofengx/Desktop/Data/fx-pro/upwork/allan/halfshop/src/views/home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78fd8b1a", Component.options)
  } else {
    hotAPI.reload("data-v-78fd8b1a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 55 */,
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    componentName: 'fx-carousel',
    props: {},
    data: function data() {
        return {
            value1: 0,
            setting: {
                arrow: 'none'
            },
            imgs: [{ id: 1, url: "" }, { id: 2, url: "" }, { id: 3, url: "" }, { id: 4, url: "" }]
        };
    }
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    componentName: 'fx-dis-det',
    props: ['attributes']
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fxDiscountDetails_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fxDiscountDetails_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__fxDiscountDetails_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    componentName: 'fx-dis-list',
    components: {
        'fx-dis-det': __WEBPACK_IMPORTED_MODULE_0__fxDiscountDetails_vue___default.a
    },
    computed: {
        discount30: {
            get: function get() {
                return this.$store.state.home.discount30;
            }
        }
    },
    created: function created() {
        // 获取最新3折
        this.$store.dispatch('switch_discount30');
    }
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    componentName: 'fx-main-ad'
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    componentName: 'fx-main-ad2'
});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    componentName: 'fx-recom-det'
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fxRecommendDetails_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fxRecommendDetails_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__fxRecommendDetails_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    componentName: 'fx-recom-list',
    components: {
        'fx-recom-det': __WEBPACK_IMPORTED_MODULE_0__fxRecommendDetails_vue___default.a
    },
    data: function data() {
        return {
            items: [{ id: 1, name: "" }, { id: 2, name: "" }, { id: 3, name: "" }]
        };
    }
});

/***/ }),
/* 63 */,
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_fxCarousel_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_fxCarousel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_fxCarousel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_fxDiscountList_vue__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_fxDiscountList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_fxDiscountList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_fxMainAd_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_fxMainAd_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_fxMainAd_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fxMainAd2_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fxMainAd2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_fxMainAd2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fxRecommendList_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fxRecommendList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_fxRecommendList_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'fx-carousel': __WEBPACK_IMPORTED_MODULE_0__components_fxCarousel_vue___default.a,
        'fx-dis-list': __WEBPACK_IMPORTED_MODULE_1__components_fxDiscountList_vue___default.a,
        'fx-main-ad': __WEBPACK_IMPORTED_MODULE_2__components_fxMainAd_vue___default.a,
        'fx-main-ad2': __WEBPACK_IMPORTED_MODULE_3__components_fxMainAd2_vue___default.a,
        'fx-recom-list': __WEBPACK_IMPORTED_MODULE_4__components_fxRecommendList_vue___default.a
    },
    created: function created() {
        // 初始化首页
        this.$store.dispatch('switch_home');
    },

    computed: {
        categoryId: {
            get: function get() {
                return this.$store.state.home.categoryId;
            }
        },
        categories: {
            get: function get() {
                return this.$store.state.home.categories;
            }
        },
        methods: {
            onSelect: function onSelect(id) {
                this.$store.dispatch('switch_discount30', id);
            }
        }
    }
});

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */,
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 69 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 70 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 71 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 72 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "81268f184cc3a1791007acf80d86d15b.jpg";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dbd52c540f9ea317663c4ba46eeea9f7.jpg";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "883d02c41e2ff22d988dd47591274c6c.jpg";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a8f760024f2c0b86ea306130104cab0.jpg";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aceb7681878d7b4e63e267ee7da6bd1e.jpg";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "83a4345d4e78dee3def51211810d4f26.jpg";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7a0525f1f04039c6d0cffab5c9a965ad.jpg";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8b440f005e883359d201f590878141aa.png";

/***/ }),
/* 82 */,
/* 83 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(70)

var Component = __webpack_require__(22)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(95),
  /* scopeId */
  "data-v-86aad1b0",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ofengx/Desktop/Data/fx-pro/upwork/allan/halfshop/src/components/fxCarousel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fxCarousel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-86aad1b0", Component.options)
  } else {
    hotAPI.reload("data-v-86aad1b0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(68)

var Component = __webpack_require__(22)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(93),
  /* scopeId */
  "data-v-65ab9aa9",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ofengx/Desktop/Data/fx-pro/upwork/allan/halfshop/src/components/fxDiscountDetails.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fxDiscountDetails.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65ab9aa9", Component.options)
  } else {
    hotAPI.reload("data-v-65ab9aa9", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(71)

var Component = __webpack_require__(22)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(96),
  /* scopeId */
  "data-v-8727f072",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ofengx/Desktop/Data/fx-pro/upwork/allan/halfshop/src/components/fxDiscountList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fxDiscountList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8727f072", Component.options)
  } else {
    hotAPI.reload("data-v-8727f072", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(65)

var Component = __webpack_require__(22)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(90),
  /* scopeId */
  "data-v-1bc93784",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ofengx/Desktop/Data/fx-pro/upwork/allan/halfshop/src/components/fxMainAd.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fxMainAd.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1bc93784", Component.options)
  } else {
    hotAPI.reload("data-v-1bc93784", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(67)

var Component = __webpack_require__(22)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(92),
  /* scopeId */
  "data-v-5d75625e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ofengx/Desktop/Data/fx-pro/upwork/allan/halfshop/src/components/fxMainAd2.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fxMainAd2.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d75625e", Component.options)
  } else {
    hotAPI.reload("data-v-5d75625e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(72)

var Component = __webpack_require__(22)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(97),
  /* scopeId */
  "data-v-8f1e7ea4",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ofengx/Desktop/Data/fx-pro/upwork/allan/halfshop/src/components/fxRecommendDetails.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fxRecommendDetails.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8f1e7ea4", Component.options)
  } else {
    hotAPI.reload("data-v-8f1e7ea4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(73)

var Component = __webpack_require__(22)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(98),
  /* scopeId */
  "data-v-a141b03c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ofengx/Desktop/Data/fx-pro/upwork/allan/halfshop/src/components/fxRecommendList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fxRecommendList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a141b03c", Component.options)
  } else {
    hotAPI.reload("data-v-a141b03c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tbody', [_c('div', [_c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(75)
    }
  })])]), _vm._v(" "), _c('div', [_c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(79)
    }
  })])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1bc93784", module.exports)
  }
}

/***/ }),
/* 91 */,
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tbody', [_c('div', {
    staticClass: "left"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(76)
    }
  })]), _vm._v(" "), _c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(77)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(78)
    }
  })])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5d75625e", module.exports)
  }
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "details"
  }, [_c('thead', [_c('img', {
    attrs: {
      "src": _vm.attributes.image
    }
  })]), _vm._v(" "), _c('tbody', [_c('div', [_vm._v(_vm._s(_vm.attributes.brand_id))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.attributes.product_name))])]), _vm._v(" "), _c('tfoot', [_c('span', {
    staticClass: "tag"
  }, [_vm._v("3折")]), _vm._v(" "), _c('span', {
    staticClass: "pric"
  }, [_vm._v(_vm._s(_vm._f("pric")(_vm.attributes.price_discounted)))]), _vm._v(" "), _c('s', [_vm._v(_vm._s(_vm._f("pric")(_vm.attributes.price_original)))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-65ab9aa9", module.exports)
  }
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "scroll"
  }, [_vm._m(0), _vm._v(" "), _c('hr'), _vm._v(" "), _c('nav', [_c('ul', _vm._l((_vm.categories), function(category) {
    return _c('li', {
      key: category.id,
      class: {
        active: (category.id === _vm.categoryId)
      },
      on: {
        "click": function($event) {
          _vm.onSelect(_vm.catagory.id)
        }
      }
    }, [_vm._v("\n                    " + _vm._s(category.attributes.name_cn) + "\n                ")])
  }))]), _vm._v(" "), _c('section', [_c('fx-carousel')], 1), _vm._v(" "), _c('section', [_c('fx-dis-list')], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('section', [_c('fx-main-ad')], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('section', [_c('fx-recom-list')], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('section', [_c('fx-main-ad2')], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "push"
  })]), _vm._v(" "), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', [_c('div', [_c('span', [_vm._v("LOGO.")]), _c('span', [_vm._v("闯客")])]), _vm._v(" "), _c('span', [_c('img', {
    attrs: {
      "src": __webpack_require__(81)
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', [_c('hr', {
    staticClass: "fine"
  }), _vm._v(" "), _c('ul', [_c('li', [_c('i')]), _vm._v(" "), _c('li', [_c('i')]), _vm._v(" "), _c('li', [_c('i')]), _vm._v(" "), _c('li', [_c('i')])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-78fd8b1a", module.exports)
  }
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Carousel', {
    model: {
      value: (_vm.value1),
      callback: function($$v) {
        _vm.value1 = $$v
      },
      expression: "value1"
    }
  }, _vm._l((_vm.imgs), function(img) {
    return _c('CarouselItem', {
      key: img.id
    }, [_c('div', {
      staticClass: "demo-carousel"
    }, [_c('img', {
      attrs: {
        "src": __webpack_require__(80),
        "alt": "图片"
      }
    })])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-86aad1b0", module.exports)
  }
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('thead', [_c('div', [_vm._v("最新3折以下")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "feed"
    }
  }, [_vm._v("查看全部")])], 1), _vm._v(" "), _c('tbody', [_c('ul', _vm._l((_vm.discount30), function(product) {
    return _c('li', {
      key: product.id
    }, [_c('fx-dis-det', {
      attrs: {
        "attributes": product.attributes
      }
    })], 1)
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8727f072", module.exports)
  }
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "details"
  }, [_c('thead', [_c('img', {
    attrs: {
      "src": __webpack_require__(74)
    }
  })]), _vm._v(" "), _c('tbody', [_c('div', [_vm._v("Adidas(10/13)")]), _vm._v(" "), _c('div', [_vm._v("NMD Primeknit White 秋季运动鞋 推荐")]), _vm._v(" "), _c('div', [_vm._v("Eugenia Burke")])]), _vm._v(" "), _c('tfoot', [_c('div', [_vm._v("Tag name")]), _vm._v(" "), _c('div', [_vm._v("Carrie Brady")]), _vm._v(" "), _c('div', [_vm._v("Rosie")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8f1e7ea4", module.exports)
  }
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('tbody', [_c('ul', _vm._l((_vm.items), function(item) {
    return _c('li', {
      key: item.id
    }, [_c('fx-recom-det')], 1)
  }))])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('div', [_vm._v("编辑推荐")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a141b03c", module.exports)
  }
}

/***/ })
]));
//# sourceMappingURL=0.chunk.js.map