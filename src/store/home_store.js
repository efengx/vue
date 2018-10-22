import resource from '../config/resource';
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = '2cd6f022-3983-4c21-ba4e-8c2a64abdc48';
axios.defaults.headers.post['Content-type'] = 'application/vnd.api+json';

export default {
    state: {
        // 一级分类
        categories: [],
        // 最新3折，取前10个
        discount30: []
    },
    mutations: {
        switch_categories(state, res) {
            state.categories = res;
            console.log(state.categories);
        },
        switch_discount30(state, res) {
            state.discount30 = res;
            console.log(state.discount30);
        }

    },
    // 异步操作
    actions: {
        switch_categories(context) {
            axios.get(resource.host + resource.categories)
                .then(res => context.commit('switch_categories', res.data.data))
                .catch(error => console.log(error));
        },
        switch_discount30(context) {
            axios.get(resource.host + resource.discount30)
                .then(res => context.commit('switch_discount30', res.data.data))
                .catch(error => console.log(error));
        }
    }
}
