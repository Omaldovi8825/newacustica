const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('dotenv').config()

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: '[hash].js'
    },
    mode: process.env.ENV,
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
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
        })
    ]
}