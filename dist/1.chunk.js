webpackJsonp([1],{

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(63)

var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(82),
  /* scopeId */
  "data-v-55e8989c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/xiaoqing/Projects/halfshop/src/views/feed.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] feed.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55e8989c", Component.options)
  } else {
    hotAPI.reload("data-v-55e8989c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 60:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {},
  data: function data() {
    return {
      selectType: '',
      list: [1, 2, 3, 4, 5, 6, 7],
      category: [{
        id: 1,
        title: '时尚',
        selected: false
      }, {
        id: 2,
        title: '服装',
        selected: false
      }, {
        id: 3,
        title: '美妆',
        selected: false
      }, {
        id: 4,
        title: '健康',
        selected: false
      }],
      disabledGroup: []
    };
  },

  methods: {
    onSelect: function onSelect(selectType) {
      if (this.selectType !== selectType) {
        this.selectType = selectType;
      } else {
        this.selectType = '';
      }
    },
    onChangeCollapse: function onChangeCollapse(val) {
      this.category = this.category.map(function (item) {
        if (item.id === val && item.selected) {
          item.selected = false;
        } else if (item.id === val) {
          item.selected = true;
        }
        return item;
      });
    },
    change: function change(e) {
      console.log(e);
    }
  }
});

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8daf6115f4151a86af563b8ab5d4bcae.png";

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "feed-container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "select-tabs-wapper"
  }, [_c('div', {
    staticClass: "select-tabs"
  }, [_c('div', {
    staticClass: "select-tab-item",
    class: {
      active: _vm.selectType === 'category'
    },
    on: {
      "click": function($event) {
        _vm.onSelect('category')
      }
    }
  }, [_vm._v("分类")]), _vm._v(" "), _c('div', {
    staticClass: "select-tab-item",
    class: {
      active: _vm.selectType === 'sort'
    },
    on: {
      "click": function($event) {
        _vm.onSelect('sort')
      }
    }
  }, [_vm._v("排序")]), _vm._v(" "), _c('div', {
    staticClass: "select-tab-item",
    class: {
      active: _vm.selectType === 'filter'
    },
    on: {
      "click": function($event) {
        _vm.onSelect('filter')
      }
    }
  }, [_vm._v("筛选")])])]), _vm._v(" "), (_vm.selectType === '') ? _c('div', {
    staticClass: "feed-list"
  }, _vm._l((_vm.list), function(item, key) {
    return _c('div', {
      key: key,
      staticClass: "feed-item"
    }, [_vm._m(1, true), _vm._v(" "), _c('p', {
      staticClass: "feed-item-brand"
    }, [_vm._v("Marc Jacobs")]), _vm._v(" "), _c('h4', {
      staticClass: "feed-item-title"
    }, [_vm._v("高跟限量版 Ninja high top sneackers ")]), _vm._v(" "), _vm._m(2, true)])
  })) : _vm._e(), _vm._v(" "), (_vm.selectType === 'category') ? _c('div', {
    staticClass: "feed-category"
  }, [_c('Collapse', {
    attrs: {
      "simple": ""
    }
  }, _vm._l((_vm.category), function(item, key) {
    return _c('Panel', {
      key: key,
      attrs: {
        "hide-arrow": "",
        "name": String(key)
      }
    }, [_c('div', {
      staticClass: "collapse-title-container",
      on: {
        "click": function($event) {
          _vm.onChangeCollapse(item.id)
        }
      }
    }, [_c('span', {
      staticClass: "collapse-title",
      class: {
        active: item.selected
      }
    }, [_vm._v(_vm._s(item.title))]), _c('span', {
      staticClass: "collapse-icon",
      class: {
        active: item.selected
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "collapse-content",
      attrs: {
        "slot": "content"
      },
      slot: "content"
    }, [_c('CheckboxGroup', {
      attrs: {
        "size": "large"
      },
      on: {
        "on-change": _vm.change
      },
      model: {
        value: (_vm.disabledGroup),
        callback: function($$v) {
          _vm.disabledGroup = $$v
        },
        expression: "disabledGroup"
      }
    }, [_c('p', [_c('Checkbox', {
      attrs: {
        "label": "衣服"
      }
    })], 1), _vm._v(" "), _c('p', [_c('Checkbox', {
      attrs: {
        "label": "上衣"
      }
    })], 1), _vm._v(" "), _c('p', [_c('Checkbox', {
      attrs: {
        "label": "牛仔"
      }
    })], 1)])], 1)])
  })), _vm._v(" "), _c('div', {
    staticClass: "category-button"
  }, [_c('Button', {
    attrs: {
      "type": "primary",
      "long": ""
    }
  }, [_vm._v("确认")]), _vm._v(" "), _c('p', {
    staticClass: "clear-types"
  }, [_vm._v("清空类别")])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.selectType === 'sort') ? _c('div', {
    staticClass: "feed-sort"
  }) : _vm._e(), _vm._v(" "), (_vm.selectType === 'filter') ? _c('div', {
    staticClass: "feed-filter"
  }) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "feed-header"
  }, [_c('div', {
    staticClass: "feed-count"
  }, [_c('h2', [_vm._v("最新3折以下")]), _vm._v(" "), _c('p', [_vm._v("100+ 单品")])]), _vm._v(" "), _c('div', {
    staticClass: "top-search"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("搜索")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "feed-item-image"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(75),
      "alt": ""
    }
  }), _vm._v(" "), _c('i')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "feed-item-discount"
  }, [_vm._v("3折")]), _vm._v(" "), _c('span', {
    staticClass: "feed-item-actually-price"
  }, [_vm._v("¥239")]), _vm._v(" "), _c('span', {
    staticClass: "feed-item-original-price"
  }, [_vm._v("¥1290")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-55e8989c", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=1.chunk.js.map