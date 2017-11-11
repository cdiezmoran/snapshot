var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

var minify = process.argv.indexOf('--minify') != -1;

var filename = [packageData.name, packageData.version, 'js'];
var plugins = [];

if (minify) {
    filename.splice(filename.length - 1, 0, 'min');
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
    entry: path.resolve(__dirname, packageData.main),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: filename.join('.'),
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
          test: /.(png|jpg)$/,
          loader: 'url-loader?limit=8192'
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    },
    plugins: plugins,
    stats: {
      warnings: false
    }
};
