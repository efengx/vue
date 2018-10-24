<style lang="less" scoped>
    .wrapper {
        height: 100%;
        overflow: hidden;
        .scroll {
            height: 100%;
            overflow-x: scroll;
            header {
                display: flex;
                justify-content: space-between;
                line-height: 50px;
                height: 50px;
                padding-left: 12px;
                > div {
                    > span:first-child {
                        font-family: ALoveofThunder;
                        font-size: 26px;
                        color: #2D2D2D;
                        letter-spacing: 0;
                        font-weight: 900;
                    }
                    > span:nth-child(2) {
                        font-size: 17px;
                        color: #000000;
                        letter-spacing: 0;
                    }
                }
                img {
                    width: 25px;
                    display: block;
                    margin: 13px 12px;
                }
            }

            nav {
                overflow: hidden;
                ul {
                    display: flex;
                    overflow-y: scroll;
                    height: 46px;
                    li {
                        list-style: none;
                        white-space: nowrap;

                        padding: 12px;
                        font-size: 15px;
                        color: #8C8C8C;
                        font-family: PingFangSC-Regular;
                        letter-spacing: -0.36px;
                        line-height: 22px;
                    }
                    li.active {
                        color: #5767FF;
                    }
                }
            }
        }
        hr {
            background-color: rgba(0, 0, 0, 0.1);
            border: 0;
            height: 1px;
        }
        footer {
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            background-color: #fff;
            ul {
                display: flex;
                height: 49px;
                > li {
                    flex-grow: 1;
                    text-align: center;
                    list-style: none;
                    
                }
                > li > i {
                    display:block;
                    width: 40px;
                    height: 40px;
                    margin: 0 auto;
                    margin-top: 5px;
                }
                >li:first-child > i {
                    background: url('../images/icon/home@3x.png') no-repeat;
                    background-size: 40px 40px;
                }
                >li:nth-child(2) > i {
                    background: url('../images/icon/category@3x.png') no-repeat;
                    background-size: 40px 40px;
                }
                >li:nth-child(3) > i {
                    background: url('../images/icon/shop@3x.png') no-repeat;
                    background-size: 40px 40px;
                }
                >li:nth-child(4) > i {
                    background: url('../images/icon/order@3x.png') no-repeat;
                    background-size: 40px 40px;
                }
                >li:nth-child(5) > i {
                    background: url('../images/icon/my@3x.png') no-repeat;
                    background-size: 40px 40px;
                }
                // 活动
                >li.active:first-child > i {
                    background: url('../images/icon/home_active@3x.png') no-repeat;
                    background-size: 40px 40px;
                }
                >li.active:nth-child(2) > i {
                    background: url('../images/icon/category_active@3x.png') no-repeat;
                    background-size: 40px 40px;
                }
                >li.active:nth-child(3) > i {
                    background: url('../images/icon/shop_active@3x.png') no-repeat;
                    background-size: 40px 40px;
                }
                >li.active:nth-child(4) > i {
                    background: url('../images/icon/order_active@3x.png') no-repeat;
                    background-size: 40px 40px;
                }
                >li.active:nth-child(5) > i {
                    background: url('../images/icon/my_active@3x.png') no-repeat;
                    background-size: 40px 40px;
                }
            }
        }

        hr.fine {
            height: .5px;
        }
        footer, .push {
            height: 50px;
            line-height: 50px;
        }

        .push {
            height: 58px;
        }
    }
</style>
<template>
    <div class="wrapper">
        <div class="scroll">
            <header>
                <div><span>LOGO.</span><span>闯客</span></div>
                <span>
                    <img src="../images/search-icon@3x.png"/>
                </span>
            </header>
            <hr>
            <nav>
                <ul>
                    <li 
                        @click="onSelect(category.id)"
                        :key="category.id"
                        v-for="category in categories" 
                        :class="{active: (categoryId === category.id)}">
                        {{category.attributes.name_cn}}
                    </li>
                </ul>
            </nav>
            <section>
                <fx-carousel></fx-carousel>
            </section>
            <section>
                <fx-dis-list></fx-dis-list>
            </section>
            <hr>
            <section>
                <fx-main-ad></fx-main-ad>
            </section>
            <hr>
            <section>
                <fx-recom-list></fx-recom-list>
            </section>
            <hr>
            <section>
                <fx-main-ad2></fx-main-ad2>
            </section>
            <hr>
            <div class="push"></div>
        </div>
        
        <footer>
            <hr class="fine">
            <ul>
                <li class="active"><i></i></li>
                <li><i></i></li>
                <li><i></i></li>
                <li><i></i></li>
                <li><i></i></li>
            </ul>
        </footer>
    </div>
</template>
<script>
import fxCarousel from '../components/fxCarousel.vue';
import fxDiscountList from '../components/fxDiscountList.vue';
import fxMainAd from '../components/fxMainAd.vue';
import fxMainAd2 from '../components/fxMainAd2.vue';
import fxRecommendList from '../components/fxRecommendList.vue';

export default {
    components: {
        'fx-carousel': fxCarousel,
        'fx-dis-list': fxDiscountList,
        'fx-main-ad': fxMainAd,
        'fx-main-ad2': fxMainAd2,
        'fx-recom-list': fxRecommendList
    },
    created () {
        // 初始化首页
        this.$store.dispatch('switch_home');
    },
    computed: {
        categoryId: {
            get() {
                return this.$store.state.home.categoryId
            }
        },
        categories: {
            get() {
                return this.$store.state.home.categories
            }
        },
    },
    methods: {
        onSelect(id) {
            this.$store.dispatch('switch_discount30', id);
        }
    }
}
</script>
