const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: "[name].bandle.js"
    },

    plugins: [new HtmlWebpackPlugin(
        {
            filename: "../index.html",
            template: 'index.html',
        },
    )],

};
