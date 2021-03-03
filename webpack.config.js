const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

require('dotenv').config()

const isProduction = process.env.ENV === 'production'
console.log(`is production: ${isProduction}`)

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
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
                use: isProduction ? [
                    {
                        loader: MiniCssExtractPlugin.loader
                    }, 
                    'css-loader'
                ] :
                [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.jpg/,
                use: 'file-loader'
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
        isProduction ? new MiniCssExtractPlugin({
            filename: 'app.css'
        }) : () => {},
        // new CompressionWebpackPlugin({
        //     test: /\.js$|.css$/,
        //     filename: '[path][base].gz'
        // })
    ]
}