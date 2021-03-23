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
    login: {
      entry: 'src/login/main.js',
      template: 'public/index.html',
      filename: '../templates/login/index.html',
      title: 'login',
      chunks: ['chunk-vendors', 'chunk-common', 'login']
    },
    register: {
      entry: 'src/register/main.js',
      template: 'public/index.html',
      filename: '../templates/register.html',
      title: 'register',
      chunks: ['chunk-vendors', 'chunk-common', 'register']
    },
  }
}
