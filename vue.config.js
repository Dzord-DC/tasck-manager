const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //publicPath: '/tasck-manager/'
  publicPath: '/' + process.env.CI_PROJECT_NAME + '/',
})
