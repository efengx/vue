
<style lang="less" scoped>
thead {
    display: flex;
    justify-content: space-between;
    padding: 25px 16px 0 16px;
}
thead > div {
    color: #2D2D2D;
    font-size: 17px;
}

thead > a {
    color: #8C8C8C;
    font-size: 13px;
}

tbody {
    overflow: hidden;
    display: block;
}
ul {
    display: flex;
    overflow-y: scroll;
}
ul li {
    list-style: none;
}
</style>

<template>
    <div>
        <thead>
            <div>最新3折以下</div>
            <a>查看全部</a>
        </thead>
        <tbody>
            <ul>
                <li v-for="item in items" :key="item.id">
                    <fx-dis-det></fx-dis-det>
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
    data () {
        return {
            items: [
                {id: 1},
                {id: 2},
                {id: 3}
            ]
        }
    }
}
</script>
