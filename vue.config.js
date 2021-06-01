/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-03-04 13:37:04
 * @LastEditTime: 2021-05-11 14:22:25
 */
const createTime = new Date().getTime()
const env = process.env.VUE_APP_ENV
const MiniCssExtractPlugin = require('mini-css-extract-plugin') ;
module.exports = {

  // 部署应用包时的基本URL,默认为"",vuecli3.3之前参数为:baseUrl
  publicPath: process.env.BASE_URL,
  // 打包后构建文件的目录，默认dist
  outputDir: "dist",
  // 默认true,会对代码进行压缩。否则生产环境会看到源码
  productionSourceMap: false,
  // 去掉文件名中的 hash
  filenameHashing: false,

  //图片压缩配置
  // chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //       .use('url-loader')
  //         .loader('url-loader')
  //         .tap(options => Object.assign(options, { 
  //                                                   //修改图片限制大小
  //                                                   limit: 10240 ,
  //                                                   //修改图片打包文件名
  //                                                   fallback:{
  //                                                     loader:'file-loader',
  //                                                     options:{
  //                                                       name:`img/[name]_${createTime}.[ext]`
  //                                                     }
  //                                                   }
  //                                                 }
  //                                       )
  //             )
  // },

  configureWebpack:{
      //修改打包后的js文件名
      output:{// 输出重构  打包编译后的 文件名称  【模块名称.时间戳.js】
        filename:`js/[name]_${createTime}.js`
        //chunkFilename:`js/[name].${createTime}.js`
      },
      //修改打包后的css文件名
      plugins:[
        new MiniCssExtractPlugin({
          filename:`css/[name]_${createTime}.css`,
          // chunkFilename:`css/[name]_${createTime}.css`
        })
      ]
  },

  // 后端未做cors处理，跨域代理配置
  devServer: {
    open: true, // 是否自动打开浏览器页面
    //host: "0.0.0.0", // 指定使用一个 host。默认是 localhost
    //port: 8800, // 端口地址
    proxy: {
      // 接口是api开头的才用代理
      "/api": {
        target: "http://10.18.23.135:8082/todos/info2", //目标地址
        changeOrigin: true, //是否改变源地址
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }


}