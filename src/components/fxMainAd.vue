<style lang="less" scoped>
tbody {
    display: flex;
    margin: 11px 0;
    > div {
        width: 50%;
        overflow: hidden;
        div > img {
            width: 100%;
            display: flex;
        }
    }
    > div:first-child {
        padding-right: 4.5px;
    }
    > div:nth-child(2) {
        padding-left: 4.5px;
    }
}
</style>
<template>
    <tbody>
        <div>
            <div>
                <img src="../images/ad1.jpg"/>
            </div>
        </div>
        <div>
            <div>
                <img src="../images/ad2.jpg"/>
            </div>
        </div>
    </tbody>
</template>
<script>
export default {
    componentName: 'fx-main-ad'
}
</script>
