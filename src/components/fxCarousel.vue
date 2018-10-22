<style scoped lang="less">
    .demo-carousel {
        text-align: center;
    }

    img {
        height: auto;
        width: 100%;
    }
</style>
<template>
    <Carousel v-model="value1" >
        <CarouselItem v-for="img in imgs" :key="img.id">
            <div class="demo-carousel">
                <img src="../images/carousel.jpg" alt="图片"/>
            </div>
        </CarouselItem>
    </Carousel>
</template>
<script>
export default {
    componentName: 'fx-carousel',
    props: {

    },
    data () {
        return {
            value1: 0,
            setting: {
                arrow: 'none'
            },
            imgs: [
                {id: 1, url: ""},
                {id: 2, url: ""},
                {id: 3, url: ""},
                {id: 4, url: ""}
            ]
        }
    }
}
</script>
