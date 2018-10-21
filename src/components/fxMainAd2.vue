<style lang="less" scoped>
tbody {
    display: flex;
}

.left {
    display: flex;
    flex-direction: column;
    margin: 16px;
}

.left > div {
    width: 172px;
    height: 104px;
    background-color: #efeff3;
}

.left > div:first-child {
    margin-bottom: 16px;
}

.right {
    width: 158px;
    height: 221px;
    background-color: #efeff3;
    margin-top: 16px;
}
</style>
<template>
    <tbody>
        <div class="left">
            <div>1</div>
            <div>2</div>
        </div>
        <div class="right">3</div>
    </tbody>
</template>
<script>
export default {
    componentName: 'fx-main-ad2'
}
</script>
