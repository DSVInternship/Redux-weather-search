var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/js/index.js'
  ],
  devtool: debug ? "inline-sourcemap" : null,
  output: {
    path: __dirname + '/src',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      excluse: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1'],
        plugins: ['transform-decorators-legacy', 'react-html-attrs','transform-object-assign']
      }
    }]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
}
