const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    mode: 'development',
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
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.woff$/,
                use: 'file-loader'
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        open: true,
        port: 3000,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
}