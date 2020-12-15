const path = require('path');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const smp = new SpeedMeasurePlugin();

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://127.0.0.1:3000',
        ws: true,
        changeOrigin: true
      },
    }
  },
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      }
    }
  },
  configureWebpack: smp.wrap({
    plugins: []
  }),
  plugins: [
    new DllReferencePlugin({
      manifest: require('./dist/dll/vue-manifest.json'),
    }),
    new DllReferencePlugin({
      manifest: require('./dist/dll/ui-manifest.json'),
    }),
  ],
  chainWebpack: (config) => {
    //命名
    config.resolve.alias
      .set('@', resolve('src'))
    //打包文件带hash
    config.output.filename('[name].[fullhash].js').end()

    //为了补删除换行而加的配置
    config.module.rule('vue').use('vue-loader').loader('vue-loader').tap((options) => {
      // modify the options...
      options.compilerOptions.preserveWhitespace = true
      return options
    })
  }
}
