module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '/static/',
  outputDir: '../data_center/static/',
  pages: {
    bot_data: {
      entry: 'src/bot_data/main.js',
      template: 'public/index.html',
      filename: '../templates/bot_data/index.html',
      title: 'bot_data',
      chunks: ['chunk-vendors', 'chunk-common', 'bot_data']
    },
  }
}
