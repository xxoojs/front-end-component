var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    // devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],


    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        proxy: {
            '/api/*': {
               // target: 'http://10.1.1.133:4040',
               target: 'http://10.1.3.99:8083 ',
                // target: 'http://10.1.3.99:8082',
                // target: 'http://10.1.2.99:8080',
                // target:'http://112.124.98.224:8080/',
                // target: 'http://127.0.0.1:8080'
            }
        }

    }
});