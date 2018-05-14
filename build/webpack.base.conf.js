const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const entries = getEntries('src/**/*.js')

const config = {
    entry: entries,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [
                    process.env.NODE_ENV !== 'production'
                    ? 'vue-style-loader'
                    : MiniCssExtractPlugin.loader,
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        }
    },
    plugins: [        
        new CleanWebpackPlugin(['../dist'], {
            root: __dirname,
            allowExternal: true
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    output: {
        filename: '[name]/[name].js',
        path: path.resolve(__dirname, '../dist')
    }
}

// 获取指定路径的地址
function getEntries(globPath) {
    let files = glob.sync(globPath)
    let entries = {}
    files.forEach( filePath => {
        // 取倒数第二层做包名
        let split = filePath.split('/')
        let name = split[split.length - 2]

        entries[name] = `./${filePath}`
    })
    return entries
}

Object.keys(entries).forEach( name => {
    let plugin = new HtmlWebpackPlugin({
        filename: `${name}/index.html`,
        template: `./src/${name}/index.html`,
        inject: true,
        chunks: [name],
        title: name
    })

    config.plugins.push(plugin)
})

module.exports = config