'use strict';
const webpack = require("webpack");
const merge = require("webpack-merge");
const core = require("./webpack.core");
/**
 * webpack config for production
 * url: https://webpack.github.io/docs/configuration.html
 */
const webpackConfig = merge(core,{
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            exclude: /spec\.js$/i,
            compress: {
                warnings: false
            }
        }),
        // new webpack.optimize.CommonsChunkPlugin('app','app.js'),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
});
module.exports = webpackConfig;
