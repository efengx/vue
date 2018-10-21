webpackJsonp([0],Array(51).concat([
/* 51 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(60)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(71),
  /* scopeId */
  "data-v-19f4574e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ofengx/Desktop/Data/fx-pro/upwork/allan/iview-project/src/views/home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19f4574e", Component.options)
  } else {
    hotAPI.reload("data-v-19f4574e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 52 */,
/* 53 */
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
/* 54 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    componentName: 'fx-dis-det'
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fxDiscountDetails_vue__ = __webpack_require__(66);
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
    data: function data() {
        return {
            items: [{ id: 1 }, { id: 2 }, { id: 3 }]
        };
    }
});

/***/ }),
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
    componentName: 'fx-main-ad'
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

/* harmony default export */ __webpack_exports__["default"] = ({
    componentName: 'fx-main-ad2'
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_fxCarousel_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_fxCarousel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_fxCarousel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_fxDiscountList_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_fxDiscountList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_fxDiscountList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_fxMainAd_vue__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_fxMainAd_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_fxMainAd_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fxMainAd2_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fxMainAd2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_fxMainAd2_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        'fx-main-ad2': __WEBPACK_IMPORTED_MODULE_3__components_fxMainAd2_vue___default.a
    },
    created: function created() {
        // 获取导航栏
        this.$store.dispatch('switch_categories');
    },

    computed: {
        items: {
            get: function get() {
                return this.$store.state.home.categories;
            }
        }
    },
    data: function data() {
        return {
            showItemIndex: 1
        };
    }
});

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(59)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(70),
  /* scopeId */
  "data-v-19331926",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ofengx/Desktop/Data/fx-pro/upwork/allan/iview-project/src/components/fxCarousel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fxCarousel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19331926", Component.options)
  } else {
    hotAPI.reload("data-v-19331926", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(64)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(75),
  /* scopeId */
  "data-v-8e5d5278",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ofengx/Desktop/Data/fx-pro/upwork/allan/iview-project/src/components/fxDiscountDetails.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fxDiscountDetails.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8e5d5278", Component.options)
  } else {
    hotAPI.reload("data-v-8e5d5278", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(62)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(73),
  /* scopeId */
  "data-v-3da6398c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ofengx/Desktop/Data/fx-pro/upwork/allan/iview-project/src/components/fxDiscountList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fxDiscountList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3da6398c", Component.options)
  } else {
    hotAPI.reload("data-v-3da6398c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(63)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  "data-v-59e96109",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ofengx/Desktop/Data/fx-pro/upwork/allan/iview-project/src/components/fxMainAd.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fxMainAd.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59e96109", Component.options)
  } else {
    hotAPI.reload("data-v-59e96109", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(61)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(72),
  /* scopeId */
  "data-v-394b2d0e",
  /* cssModules */
  null
)
Component.options.__file = "/Users/ofengx/Desktop/Data/fx-pro/upwork/allan/iview-project/src/components/fxMainAd2.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fxMainAd2.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-394b2d0e", Component.options)
  } else {
    hotAPI.reload("data-v-394b2d0e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 70 */
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
        "src": img.url,
        "alt": "图片"
      }
    })])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-19331926", module.exports)
  }
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "scroll"
  }, [_c('header', [_vm._m(0), _vm._v(" "), _c('span', [_c('Icon', {
    attrs: {
      "type": "ios-search",
      "size": "25"
    }
  })], 1)]), _vm._v(" "), _c('nav', [_c('ul', _vm._l((_vm.items), function(item) {
    return _c('li', {
      key: item.id,
      class: {
        active: (_vm.showItemIndex == item.id)
      }
    }, [_vm._v("\n                    " + _vm._s(item.attributes.name_cn) + "\n                ")])
  }))]), _vm._v(" "), _c('section', [_c('fx-carousel')], 1), _vm._v(" "), _c('section', [_c('fx-dis-list')], 1), _vm._v(" "), _c('section', [_c('fx-main-ad')], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('section', [_c('fx-main-ad2')], 1), _vm._v(" "), _c('div', {
    staticClass: "push"
  })]), _vm._v(" "), _c('footer', [_c('ul', [_c('li', [_c('Icon', {
    attrs: {
      "type": "md-compass",
      "size": "25"
    }
  })], 1), _vm._v(" "), _c('li', [_c('Icon', {
    attrs: {
      "type": "ios-contact",
      "size": "25"
    }
  })], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('span', [_vm._v("LOGO.")]), _c('span', [_vm._v("闯客")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-19f4574e", module.exports)
  }
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tbody', [_c('div', {
    staticClass: "left"
  }, [_c('div', [_vm._v("1")]), _vm._v(" "), _c('div', [_vm._v("2")])]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_vm._v("3")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-394b2d0e", module.exports)
  }
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('tbody', [_c('ul', _vm._l((_vm.items), function(item) {
    return _c('li', {
      key: item.id
    }, [_c('fx-dis-det')], 1)
  }))])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('div', [_vm._v("最新3折以下")]), _vm._v(" "), _c('a', [_vm._v("查看全部")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3da6398c", module.exports)
  }
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tbody', [_c('div'), _vm._v(" "), _c('div')])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-59e96109", module.exports)
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "details"
  }, [_c('thead', [_vm._v("\n        img\n    ")]), _vm._v(" "), _c('tbody', [_c('div', [_vm._v("Apple Watch")]), _vm._v(" "), _c('div', [_vm._v("智能运动手表 Hermes")])]), _vm._v(" "), _c('tfoot', [_c('span', {
    staticClass: "tag"
  }, [_vm._v("3折")]), _vm._v(" "), _c('span', {
    staticClass: "pric"
  }, [_vm._v("¥850")]), _vm._v(" "), _c('s', [_vm._v("¥1250")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8e5d5278", module.exports)
  }
}

/***/ })
]));
//# sourceMappingURL=0.chunk.js.map