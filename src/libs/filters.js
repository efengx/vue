let pric = value => {
    let realVal = Number(value).toFixed(2)
    return '¥' + realVal
}
let rebate = value => {
    let realVal = (100 - value)/10
    return realVal + '折'
}
export {
    pric,
    rebate
}