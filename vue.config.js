const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  runtimeCompiler: true,
  filenameHashing: false,

  // Css into bundle
  css: {
    extract: {
      filename: 'css/app.css',
      chunkFilename: 'css/[name].css'
    },
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/scss/main.scss";
          `
      }
    }
  },

  configureWebpack: {
    output: {
      filename: 'js/build.js',
      chunkFilename: 'js/[name].js'
    },
    optimization: {
      splitChunks: {
        maxSize: 250000
      }
    },
    plugins: [new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })]
  },

  chainWebpack: config => {
    config.module.rule('svg')
      .use('file-loader')
      .loader('url-loader')
      .tap(options => {
        options.limit = 300000
        return options
      })
    config.module.rule('eslint')
      .use('eslint-loader')
      .options({ fix: true })
  },

  lintOnSave: true
}
