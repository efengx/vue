<style lang="less" scoped>
.details {
    padding: 16px;
}

thead {
    width: 138px;
    height: 138px;
    background-color: #efeff3;
    display: block;
}

tbody {
    font-size: 12px;
    color: #2D2D2D;
}

tfoot {
    font-size: 15px;
}

.tag {
    font-size: 10px;
    padding: 0 4px;
    background-color: #000;
    color: #fff;
    border-radius: 4px;
}
.pric {
    color: #FF5A00;
    margin: 0px 5px;
}
s {
    color: #8c8c8c;
}
</style>
<template>
    <div class="details">
        <thead>
            img
        </thead>
        <tbody>
            <div>Apple Watch</div>
            <div>智能运动手表 Hermes</div>
        </tbody>
        <tfoot>
            <span class="tag">3折</span>
            <span class="pric">¥850</span>
            <s>¥1250</s>
        </tfoot>
    </div>
</template>
<script>
export default {
    componentName: 'fx-dis-det'     
}
</script>
