<style lang="less" scoped>
    .wrapper {
        height: 100%;
        overflow: hidden;
    }

    .scroll {
        height: 100%;
        overflow-x: scroll;
    }

    hr {
        margin-top: 9px;
        background-color: rgba(0, 0, 0, 0.1);
        border: 0;
        height: 1px;
    }

    header {
        display: flex;
        justify-content: space-between;
        line-height: 50px;
        padding: 0px 12px;
    }

    header > div > span:first-child {
        font-family: ALoveofThunder;
        font-size: 26px;
        color: #2D2D2D;
        letter-spacing: 0;
        font-weight: 900;
    }

    header > div > span:nth-child(2) {
        font-size: 17px;
        color: #000000;
        letter-spacing: 0;
    }

    nav {
        overflow: hidden;
    }

    nav ul {
        display: flex;
        overflow-y: scroll;
        height: 46px;
    }

    nav ul li.active {
        color: #5767FF;
    }

    // ul::-webkit-scrollbar { 
    //     width: 0 !important 
    // }

    nav ul li {
        list-style: none;
        white-space: nowrap;

        padding: 12px;
        font-size: 15px;
        color: #8C8C8C;
        font-family: PingFangSC-Regular;
        letter-spacing: -0.36px;
        line-height: 22px;
    }

    footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        background-color: #fff;
    }

    footer, .push {
        height: 50px;
        line-height: 50px;
    }

    footer ul {
        display: flex;
    }

    footer ul li {
        flex-grow: 1;
        text-align: center;
        list-style: none;
    }
</style>
<template>
    <div class="wrapper">
        <div class="scroll">
            <header>
                <div><span>LOGO.</span><span>闯客</span></div>
                <span>
                    <Icon type="ios-search" size="25" />
                </span>
            </header>
            <nav>
                <ul>
                    <li 
                        :key="item.id"
                        v-for="item in items" 
                        v-bind:class="{active: (showItemIndex == item.id)}">
                        {{item.attributes.name_cn}}
                    </li>
                </ul>
            </nav>
            <section>
                <fx-carousel></fx-carousel>
            </section>
            <section>
                <fx-dis-list></fx-dis-list>
            </section>
            <section>
                <fx-main-ad></fx-main-ad>
            </section>
            <hr>
            <section>
                <fx-main-ad2></fx-main-ad2>
            </section>
            <div class="push"></div>
        </div>
        <footer>
            <ul>
                <li><Icon type="md-compass" size="25" /></li>
                <li><Icon type="ios-contact" size="25" /></li>
            </ul>
        </footer>
    </div>
</template>
<script>
import fxCarousel from '../components/fxCarousel.vue';
import fxDiscountList from '../components/fxDiscountList.vue';
import fxMainAd from '../components/fxMainAd.vue';
import fxMainAd2 from '../components/fxMainAd2.vue';

export default {
    components: {
        'fx-carousel': fxCarousel,
        'fx-dis-list': fxDiscountList,
        'fx-main-ad': fxMainAd,
        'fx-main-ad2': fxMainAd2
    },
    created () {
        // 获取导航栏
        this.$store.dispatch('switch_categories');
    },
    computed: {
        items: {
            get() {
                return this.$store.state.home.categories
            }
        }
    },
    data () {
        return {
            showItemIndex: 1
        }
    }
}
</script>
