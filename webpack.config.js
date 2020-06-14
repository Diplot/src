const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/main.js",
    mode:"development",
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: '[name].bundle.js'
    },
    plugins: [new HtmlWebpackPlugin(
        {
            title: 'Custom template',
            // Load a custom template (lodash by default)
            template: 'index.html'
        }
    )],
};
