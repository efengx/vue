import resource from '../config/resource';
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = '2cd6f022-3983-4c21-ba4e-8c2a64abdc48';
axios.defaults.headers.post['Content-type'] = 'application/vnd.api+json';

export default {
    state: {
        categoryId: 1,
        // 一级分类
        categories: [],
        // 最新3折，取前10个
        discount30: []
    },
    mutations: {
        switch_categories(state, res) {
            state.categories = res
        },
        switch_discount30(state, res) {
            state.discount30 = res
            console.log(state.discount30)
        },
        switch_categoryId(state, id) {
            state.categoryId = id
        }
    },
    // 异步操作
    actions: {
        // 获取首页信息
        switch_home(context) {
            axios.get(resource.host + resource.categories)
                .then(res => {
                    context.commit('switch_categories', res.data.data)
                    context.dispatch('switch_discount30', res.data.data[0].id)
                })
                .catch(error => console.log(error))
        },
        // 获取分类信息
        switch_categories(context) {
            axios.get(resource.host + resource.categories)
                .then(res => context.commit('switch_categories', res.data.data))
                .catch(error => console.log(error))
        },
        // 获取最新3折以下
        switch_discount30(context, id) {
            if (id) {
                context.commit('switch_categoryId', id)
                axios.get(resource.host + resource.discount30.replace('$categoryId', id))
                    .then(res => context.commit('switch_discount30', res.data.data))
                    .catch(error => console.log(error))
            }
        }
    }
}
