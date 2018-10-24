<style lang="less" scoped>
.details {
    padding: 0 16px 16px 16px;
    thead {
        width: 138px;
        display: block;
        overflow: hidden;
        >span {
            height: 16px;
            position: relative;
            bottom: -40px;
            background-color: #000;
            padding: 1px 6px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;

            font-family: PingFangSC-Regular;
            font-size: 10px;
            color: #FFFFFF;
            letter-spacing: 0;
        }
        > img {
            width: 138px;
            display: block;
            margin-top: 8px;
        }
    }
    tbody {
        font-size: 12px;
        color: #2D2D2D;
    }
    tfoot {
        font-size: 15px;
        >.pric {
            color: #FF5A00;
            margin: 0 5px 0 0;
        }
        >s {
            color: #8c8c8c;
        }
    }
}
</style>
<template>
    <div class="details">
        <thead>
            <span>{{attributes.percentage | rebate}}</span>
            <img :src="attributes.image"/>
        </thead>
        <tbody>
            <div>{{attributes.brand.name}}</div>
            <div>{{attributes.product_name}}</div>
        </tbody>
        <tfoot>
            <span class="pric">{{attributes.price_discounted | pric}}</span>
            <s>{{attributes.price_original | pric }}</s>
        </tfoot>
    </div>
</template>
<script>
export default {
    componentName: 'fx-dis-det',
    props: ['attributes']
}
</script>
