// const path = require('path')

const config = {
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
}

if (process.env.NODE_ENV === 'production') {
  config.configureWebpack = {
    externals: {
      quill: {
        root: 'Quill',
        commonjs: 'quill',
        commonjs2: 'quill',
        amd: 'quill',
      },
    },
  }
}
module.exports = config
