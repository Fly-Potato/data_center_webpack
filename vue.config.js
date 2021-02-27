module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '/static/',
  outputDir: '../data_center/static/',
  pages: {
    bot_data: {
      entry: 'src/attest/main.js',
      template: 'public/index.html',
      filename: '../templates/bot_data/index.html',
      title: 'attest Page',
      chunks: ['chunk-vendors', 'chunk-common', 'bot_data']
    },
  }
}
