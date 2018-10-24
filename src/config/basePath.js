let basePath = () => {
    let path = location.pathname
    return path.substring(0, path.lastIndexOf('/') + 1)
}
export {
    basePath
}