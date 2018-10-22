<style lang="less" scoped>
tbody {
    display: flex;
}

tbody > div {
    width: 50%;
    overflow: hidden;
}
tbody > div:first-child {
    padding-right: 4.5px;
}
tbody > div:nth-child(2) {
    padding-left: 4.5px;
}
tbody > div > div > img {
    width: 100%;
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
