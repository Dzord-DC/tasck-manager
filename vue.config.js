const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //publicPath: '/tasck-manager/'
  publicPath: process.env.NODE_ENV === 'tasck-manager'
    ? '/' + process.env.CI_PROJECT_NAME + '/'
    : '/'
})
