webpackJsonp([0],Array(54).concat([function(t,e,n){n(69);var i=n(22)(n(64),n(94),"data-v-78fd8b1a",null);t.exports=i.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={componentName:"fx-carousel",props:{},data:function(){return{value1:0,setting:{arrow:"none"},imgs:[{id:1,url:""},{id:2,url:""},{id:3,url:""},{id:4,url:""}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={componentName:"fx-dis-det",props:["attributes"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(84),r=n.n(i);e.default={componentName:"fx-dis-list",components:{"fx-dis-det":r.a},computed:{discount30:{get:function(){return this.$store.state.home.discount30}}},created:function(){this.$store.dispatch("switch_discount30")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={componentName:"fx-main-ad"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={componentName:"fx-main-ad2"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={componentName:"fx-recom-det"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(88),r=n.n(i);e.default={componentName:"fx-recom-list",components:{"fx-recom-det":r.a},data:function(){return{items:[{id:1,name:""},{id:2,name:""},{id:3,name:""}]}}}},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(83),r=n.n(i),s=n(85),a=n.n(s),c=n(86),o=n.n(c),u=n(87),d=n.n(u),f=n(89),l=n.n(f);e.default={components:{"fx-carousel":r.a,"fx-dis-list":a.a,"fx-main-ad":o.a,"fx-main-ad2":d.a,"fx-recom-list":l.a},created:function(){this.$store.dispatch("switch_home")},computed:{categoryId:{get:function(){return this.$store.state.home.categoryId}},categories:{get:function(){return this.$store.state.home.categories}}},methods:{onSelect:function(t){this.$store.dispatch("switch_discount30",t)}}}},function(t,e){},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){t.exports=n.p+"81268f184cc3a1791007acf80d86d15b.jpg"},function(t,e,n){t.exports=n.p+"dbd52c540f9ea317663c4ba46eeea9f7.jpg"},function(t,e,n){t.exports=n.p+"883d02c41e2ff22d988dd47591274c6c.jpg"},function(t,e,n){t.exports=n.p+"1a8f760024f2c0b86ea306130104cab0.jpg"},function(t,e,n){t.exports=n.p+"aceb7681878d7b4e63e267ee7da6bd1e.jpg"},function(t,e,n){t.exports=n.p+"83a4345d4e78dee3def51211810d4f26.jpg"},function(t,e,n){t.exports=n.p+"7a0525f1f04039c6d0cffab5c9a965ad.jpg"},function(t,e,n){t.exports=n.p+"8b440f005e883359d201f590878141aa.png"},,function(t,e,n){n(70);var i=n(22)(n(56),n(95),"data-v-86aad1b0",null);t.exports=i.exports},function(t,e,n){n(68);var i=n(22)(n(57),n(93),"data-v-65ab9aa9",null);t.exports=i.exports},function(t,e,n){n(71);var i=n(22)(n(58),n(96),"data-v-8727f072",null);t.exports=i.exports},function(t,e,n){n(65);var i=n(22)(n(59),n(90),"data-v-1bc93784",null);t.exports=i.exports},function(t,e,n){n(67);var i=n(22)(n(60),n(92),"data-v-5d75625e",null);t.exports=i.exports},function(t,e,n){n(72);var i=n(22)(n(61),n(97),"data-v-8f1e7ea4",null);t.exports=i.exports},function(t,e,n){n(73);var i=n(22)(n(62),n(98),"data-v-a141b03c",null);t.exports=i.exports},function(t,e,n){t.exports={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tbody",[i("div",[i("div",[i("img",{attrs:{src:n(75)}})])]),t._v(" "),i("div",[i("div",[i("img",{attrs:{src:n(79)}})])])])}]}},,function(t,e,n){t.exports={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tbody",[i("div",{staticClass:"left"},[i("div",[i("img",{attrs:{src:n(76)}})]),t._v(" "),i("div",[i("img",{attrs:{src:n(77)}})])]),t._v(" "),i("div",{staticClass:"right"},[i("div",[i("img",{attrs:{src:n(78)}})])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"details"},[n("thead",[n("span",[t._v(t._s(t._f("rebate")(t.attributes.percentage)))]),t._v(" "),n("img",{attrs:{src:t.attributes.image}})]),t._v(" "),n("tbody",[n("div",[t._v(t._s(t.attributes.brand.name))]),t._v(" "),n("div",[t._v(t._s(t.attributes.product_name))])]),t._v(" "),n("tfoot",[n("span",{staticClass:"pric"},[t._v(t._s(t._f("pric")(t.attributes.price_discounted)))]),t._v(" "),n("s",[t._v(t._s(t._f("pric")(t.attributes.price_original)))])])])},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"scroll"},[t._m(0),t._v(" "),n("hr"),t._v(" "),n("nav",[n("ul",t._l(t.categories,function(e){return n("li",{key:e.id,class:{active:t.categoryId===e.id},on:{click:function(n){t.onSelect(e.id)}}},[t._v("\n                    "+t._s(e.attributes.name_cn)+"\n                ")])}))]),t._v(" "),n("section",[n("fx-carousel")],1),t._v(" "),n("section",[n("fx-dis-list")],1),t._v(" "),n("hr"),t._v(" "),n("section",[n("fx-main-ad")],1),t._v(" "),n("hr"),t._v(" "),n("section",[n("fx-recom-list")],1),t._v(" "),n("hr"),t._v(" "),n("section",[n("fx-main-ad2")],1),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"push"})]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("div",[i("span",[t._v("LOGO.")]),i("span",[t._v("闯客")])]),t._v(" "),i("span",[i("img",{attrs:{src:n(81)}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("hr",{staticClass:"fine"}),t._v(" "),n("ul",[n("li",{staticClass:"active"},[n("i")]),t._v(" "),n("li",[n("i")]),t._v(" "),n("li",[n("i")]),t._v(" "),n("li",[n("i")]),t._v(" "),n("li",[n("i")])])])}]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Carousel",{model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},t._l(t.imgs,function(t){return i("CarouselItem",{key:t.id},[i("div",{staticClass:"demo-carousel"},[i("img",{attrs:{src:n(80),alt:"图片"}})])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("thead",[n("div",[t._v("最新3折以下")]),t._v(" "),n("router-link",{attrs:{to:"feed"}},[t._v("查看全部")])],1),t._v(" "),n("tbody",[n("ul",t._l(t.discount30,function(t){return n("li",{key:t.id},[n("fx-dis-det",{attrs:{attributes:t.attributes}})],1)}))])])},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"details"},[i("thead",[i("img",{attrs:{src:n(74)}})]),t._v(" "),i("tbody",[i("div",[t._v("Adidas(10/13)")]),t._v(" "),i("div",[t._v("NMD Primeknit White 秋季运动鞋 推荐")]),t._v(" "),i("div",[t._v("Eugenia Burke")])]),t._v(" "),i("tfoot",[i("div",[t._v("Tag name")]),t._v(" "),i("div",[t._v("Carrie Brady")]),t._v(" "),i("div",[t._v("Rosie")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("tbody",[n("ul",t._l(t.items,function(t){return n("li",{key:t.id},[n("fx-recom-det")],1)}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("div",[t._v("编辑推荐")])])}]}}]));