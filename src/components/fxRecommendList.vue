
<style lang="less" scoped>
thead {
    display: flex;
    justify-content: space-between;
    padding: 29px 16px 0 16px;
    > div {
        color: #2D2D2D;
        font-size: 17px;
    }
    > a {
        color: #8C8C8C;
        font-size: 13px;
    }
}

tbody {
    overflow: hidden;
    display: block;
    ul {
        display: flex;
        overflow-x: scroll;
        li {
            list-style: none;
        }
        li:last-child{
            padding-right: 16px;
        }
    }
}
</style>

<template>
    <div>
        <thead>
            <div>编辑推荐</div>
        </thead>
        <tbody>
            <ul>
                <li v-for="item in items" :key="item.id">
                    <fx-recom-det></fx-recom-det>
                </li>
            </ul>
        </tbody>
    </div>
</template>
<script>
import fxRecommendDetails from './fxRecommendDetails.vue';

export default {
    componentName: 'fx-recom-list',
    components: {
        'fx-recom-det': fxRecommendDetails
    },
    data() {
        return {
            items: [
                {id: 1, name: ""},
                {id: 2, name: ""},
                {id: 3, name: ""}
            ]
        }
    }
}
</script>
