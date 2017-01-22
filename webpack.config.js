var ExtractTextPlugin = require("extract-text-webpack-plugin");

let extractCSS = new ExtractTextPlugin('stylesheets/styles.css');

module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            }
        ],
        loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: { presets: ['es2015']} },
    {test: /\.scss$/i, loader: extractCSS.extract(['css','sass'])}
  ]
    },
    plugins: [
        extractCSS
    ],
    watch: true
};