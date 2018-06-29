const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // 入口
    entry: __dirname + '/src/index.js', 
    // 出口
    output: {
         // 出口地址
        path: __dirname + '/dist',      
        // 出口文件名
        filename: 'main.js'            
    },
    // 调试器
    devtool: 'eval-source-map',         
    // webpack的本地开发服务器
    devServer: {
        contentBase: "./dist",          // 默认为根目录提供本地服务器，可以手动设置
        port: 8080,                     // 端口
        historyApiFallback: true,       // 依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true                    // true，当源文件改变时会自动刷新页面
    },
    // 模块配置
    module: {
        
        // 预处理(loader)

        rules: [

            // babel模块，用于编译ES6和react 
            {
                test: /(\.jsx|\.js)$/,    // 匹配条件                
                exclude: [ path.resolve(__dirname, "node_modules") ],    // 匹配时忽略这个目录，提高打包速度
                include: [ path.resolve(__dirname, "src") ],             // 匹配时查找的范围                
                use: {
                    loader: "babel-loader",   // 使用的预处理
                    // 可以使用options给loader添加参数
                    // options: {
                    //     presets: ['env','react']
                    // },
                }
            },

            // 处理打包css文件
            {
                test: /\.css$/,
                // 注意这里对同一个文件使用多个loader的方法
                // 还要注意文件的执行顺序是从右往左的也就是说先执行loader: 'css-loader'，接着才是loader: 'style-loader'
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            } 
        ]
    },
    // 插件
    plugins:[
        // 自动生成html模板
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.temp.html'
        }),
        // 这个是webpack内置插件，用来自动生成版权信息
        new webpack.BannerPlugin('这个是版权信息这个是版权信息这个是版权信息'),
        // 热加载
        //new webpack.HotModuleReplacementPlugin()
    ]

}