const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: '[contenthash].js',
        assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    mode: 'production',
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
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ] 
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.woff$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000, 
                        mimetype: "application/font-woff",
                        name: "[name].[ext]",
                        outputPath: './assets/fonts/',
                        publicPath: './assets/fonts/',
                        esModule: false
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            new TerserPlugin()
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[contenthash].css'
        }),
        new CleanWebpackPlugin()
    ]
}