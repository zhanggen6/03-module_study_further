//导入nodejs的path模板，用于指导路径。
const path = require('path');
//使用npm下载的插件都可以在node中使用require导入
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {'main': './src/main.js'},
    output: {
        'path': path.resolve('./dist'),//相对路径转绝对路径
        'filename': 'bundle.js'
    },
    watch: true,
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.vue$/, use: ['vue-loader']},
        ]
    },
    //添加插件
    plugins: [
        new HtmlWebpackPlugin({
            //插件执行运行元素索引参照物
            template: './src/index.html'
        })
    ]
};