
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                import: [resolve('src/assets/theme.custom')]  // 根据你项目的实际情况配置路径
            }
        }
    }
}
