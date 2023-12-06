const path = require("path");

module.exports = {
    mode: 'production',
    entry: {
        global: './frontend/global.js',
        home: './frontend/home.js',
        cart: './frontend/cart.js',
        productsSearch: './frontend/productsSearch.js'
    },
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: '[name].js'
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map'
}