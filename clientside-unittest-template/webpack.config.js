var webpack = require("webpack");
var path = require("path");

var nodeModulesPath = path.join(__dirname, 'node_modules');
var bowerComponentsPath = path.join(__dirname, 'bower_components');

module.exports = {
    resolve: {
        output: {
            filename: "[name].js",
            sourceMapFilename: 'map/[file].map'
        },
        extensions: ['.js',''],
        root: [
            '/',
            nodeModulesPath,
            bowerComponentsPath
        ],
        modulesDirectories: [
            'bower_components',
            'node_modules'
        ]
    },
    module: {
        loaders: [
            { test: /\.js/, exclude: /node_modules|bower_components|test/, loaders: ['babel-loader']},
            { test: /Spec\.js$/, loader: 'webpack-espower-loader' }
        ],
        preLoaders: [
            { test: /Spec\.js$/, loader: 'babel-loader' }
        ]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ]
};