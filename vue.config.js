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
            @import "@/assets/scss/common/_common.scss";
            @import "@/assets/scss/common/_icons.scss";
            @import "@/assets/scss/common/_hover.scss";
            @import "@/assets/scss/common/_mixins.scss";
            @import "@/assets/scss/common/_palette.scss";
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
        minSize: 10000,
        maxSize: 250000
      }
    }
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

  lintOnSave: undefined
}
