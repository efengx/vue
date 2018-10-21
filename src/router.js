const routers = [
    {
        path: '/',
        meta: {
            title: '闯客'
        },
        component: (resolve) => require(['./views/home.vue'], resolve)
    }, {
        path: '/feed',
        component: (resolve) => require(['./views/feed.vue'], resolve)
    }, {
        path: '/searchBar',
        component: (resolve) => require(['./views/searchBar.vue'], resolve)
    }, {
        path: '/filterShop',
        component: (resolve) => require(['./views/filterShop.vue'], resolve)
    }, {
        path: '/filterBrand',
        component: (resolve) => require(['./views/filterBrand.vue'], resolve)
    }
];
export default routers;
