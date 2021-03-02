module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        views: '@/views',
        api: '@/api',
        store: '@/store',
        components: '@/components'
      }
    }
  },
  // ...
  css: {
    loaderOptions: {
      sass: {
        // 根据自己样式文件的位置调整 全局引入定义的scss变量 可以在任何vue文件中使用
        additionalData: `@import "@/assets/css/variables.scss";`
      }
    }
  }
}
