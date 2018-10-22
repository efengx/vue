let pric = value => {
    let realVal = Number(value).toFixed(0)
    return '¥' + realVal
}
export {
    pric
}