module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://www.zhihu.com"
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ?
        '/personal-blog-system-open/' : '/',

}