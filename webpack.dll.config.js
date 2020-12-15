const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    vue: ['vuex', 'vue-router', 'axios'],
    ui: ['element-ui'],
    // vue: ['vuex', 'vue-loader'],
    // css: ['sass-loader', 'node-sass']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve('dist/dll'),
    library: '[name]_dll_[fullhash]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
}
