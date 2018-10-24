import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import axios from 'axios';
import vuex from 'vuex';
import stores from './stores';
import * as filters from './libs/filters';
import { basePath } from './config/basePath';

import 'iview/dist/styles/iview.css';
import './theme/index.less';

// 加载全局过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});
Vue.use(vuex);
Vue.use(VueRouter);
Vue.use(iView);
Vue.prototype.$ajax = axios;

// vuex store 配置
const store = new vuex.Store(stores);

// 路由配置
const RouterConfig = {
    // default hash model
    // mode: 'history',
    // base: basePath(),
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start(); 
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    store,      // 使用store
    router: router,
    render: h => h(App)
});
