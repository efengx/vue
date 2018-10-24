<style lang="less" scoped>
.details {
    padding: 20px 0 24px 16px;
    thead {
        width: 288px;
        background-color: #efeff3;
        display: block;
        overflow: hidden;
        margin-bottom: 11px;
        > img {
            width: 288px;
            display: block;
        }
    }
    tbody {
        color: #2D2D2D;
        > div:first-child {
            font-size: 12px;
            font-family: PingFangSC-Regular;
            letter-spacing: 0;
            line-height: 19px;
        }
        > div:nth-child(2){
            font-family: PingFangSC-Medium;
            font-size: 15px;
            text-align: left;
            line-height: 19px;
        }
        >div:nth-child(3){
            opacity: .6;
            font-family: PingFangSC-Regular;
            font-size: 10px;
            color: #111111;
            letter-spacing: 0;
            line-height: 19px;
        }
    }
    tfoot {
        font-family: PingFangSC-Medium;
        font-size: 10px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 18px;
        display: flex;
        > div {
            background: #5767FF;
            border-radius: 4px;
            padding: 3px 8px;
            margin-right: 8px;
        }
    }
}
</style>
<template>
    <div class="details">
        <thead>
            <img src="../images/ad1-1.jpg"/>
        </thead>
        <tbody>
            <div>Adidas(10/13)</div>
            <div>NMD Primeknit White 秋季运动鞋 推荐</div>
            <div>Eugenia Burke</div>
        </tbody>
        <tfoot>
            <div>Tag name</div>
            <div>Carrie Brady</div>
            <div>Rosie</div>
        </tfoot>
    </div>
</template>
<script>
export default {
    componentName: 'fx-recom-det',
}
</script>
