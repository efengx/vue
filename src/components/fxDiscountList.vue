
<style lang="less" scoped>
thead {
    display: flex;
    justify-content: space-between;
    padding: 25px 16px 0 16px;
    > div {
        color: #2D2D2D;
        font-size: 17px;
    }
    > a {
        color: #8C8C8C;
        font-size: 13px;
        line-height: 25px;
    }
}
tbody {
    overflow: hidden;
    display: block;
    ul {
        display: flex;
        overflow-x: scroll;
        min-height: 280px;
        li {
            list-style: none;
        }
    }
}
</style>

<template>
    <div>
        <thead>
            <div>最新3折以下</div>
            <router-link to="feed">查看全部</router-link>
        </thead>
        <tbody>
            <ul>
                <li v-for="product in discount30" :key="product.id">
                    <fx-dis-det :attributes="product.attributes"></fx-dis-det>
                </li>
            </ul>
        </tbody>
    </div>
</template>
<script>
import fxDiscountDetails from './fxDiscountDetails.vue';

export default {
    componentName: 'fx-dis-list',
    components: {
        'fx-dis-det': fxDiscountDetails
    },
    computed: {
        discount30: {
            get() {
                return this.$store.state.home.discount30
            }
        }
    },
    created () {
        // 获取最新3折
        this.$store.dispatch('switch_discount30');
    }
}
</script>
