<style lang="less" scoped>
tbody {
    display: flex;
}

.left {
    display: flex;
    flex-direction: column;
    margin: 16px 8px 16px 16px;
    width: 50%;
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
    width: 50%;
    background-color: #efeff3;
    margin: 16px 16px 16px 8px;
}

img {
    width: 100%;
}
</style>
<template>
    <tbody>
        <div class="left">
            <div>
                <img src="../images/ad2-1.jpg"/>
            </div>
            <div>
                <img src="../images/ad2-2.jpg"/>
            </div>
        </div>
        <div class="right">
            <div>
                <img src="../images/ad2-3.jpg"/>
            </div>
        </div>
    </tbody>
</template>
<script>
export default {
    componentName: 'fx-main-ad2'
}
</script>
