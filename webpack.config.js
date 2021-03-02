const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
require('dotenv').config()

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: '[fullhash].js'
    },
    mode: process.env.ENV,
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module:{
        rules: [
            {
                test: /\.(png|jpg|jpeg)$/,
                use: 'file-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    // {
                    //     loader: MiniCssExtractPlugin.loader
                    // },
                    'css-loader'
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        port: process.env.PORT,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[fullhash].css'
        })
    ]
}