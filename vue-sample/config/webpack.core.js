'use strict';
const webpack = require("webpack");
const entries = require("webpack-entries");
const path = require('path');
/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
const webpackConfig = {
  entry: {
    main: './src/js/main.js'
  },
  output: {
    path: path.join(FRP_DEST,'assets/js'),
    publicPath: '/assets',
    filename: "[name].js",
    sourceMapFilename: 'maps/[name].map',
    jsonpFunction: 'fr'
  },
  resolve: {
    extensions: ['.vue', '.js'],
    modules: ['./src/js', 'node_modules']
  },
  module: {
    loaders: [
      {test: /\.(vue|js)?$/, exclude: /node_modules/, loader: 'eslint-loader', enforce: 'pre'},
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue?$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          postcss: 'vue-style-loader'
        }
      },
      {test: /\.html$/, loader: 'html-loader'},
      {test: /\.svg$/, use: 'raw-loader'},
      {test: /\.json$/, loader: 'json-loader'}
    ],
    exprContextCritical: false
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: path.join(__dirname,'/../.eslintrc'),
          failOnError: true
        }
      }
    })
  ]
};
module.exports = webpackConfig;
