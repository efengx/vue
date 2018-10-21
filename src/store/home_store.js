import axios from 'axios'

export default {
    state: {
        show: false,
        categories: []
    },
    mutations: {
        switch_show(state) {
            state.show = state.show?false:true;
        },
        switch_categories(state, res) {
            state.categories = res;
            console.log(state.categories);
        }
    },
    // 异步操作
    actions: {
        switch_categories(context) {
            axios.defaults.headers.common['Authorization'] = '2cd6f022-3983-4c21-ba4e-8c2a64abdc48';
            axios.defaults.headers.post['Content-type'] = 'application/vnd.api+json';
            axios.get('https://lusterstyle.com/api/v1/categories')
            .then(res => context.commit('switch_categories', res.data.data))
            .catch(error => console.log(error));

            // setTimeout(() => {
            //     context.commit('switch_categories', [
            //         { id: 1, name: "时尚" },
            //         { id: 2, name: "美妆护肤" },
            //         { id: 3, name: "个人保健"},
            //         { id: 4, name: "母婴"},
            //         { id: 5, name: "旅游"},
            //         { id: 6, name: "户外运动"},
            //         { id: 7, name: "户外运动"},
            //         { id: 8, name: "户外运动"},
            //         { id: 9, name: "户外运动"},
            //         { id: 10, name: "户外运动"},
            //         { id: 11, name: "户外运动"}
            //     ]);
            // }, 1000)
        }
    }
}
