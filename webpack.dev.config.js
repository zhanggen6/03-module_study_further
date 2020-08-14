
//导入nodejs的path模板，用于指导路径。
const path=require('path');
module.exports = {
    entry: {'main': './src/main.js'},
    output: {
        'path':path.resolve('./dist'),//相对路径转绝对路径
        'filename': 'bundle.js'
    },
    watch: true,
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
        ]
    }
};