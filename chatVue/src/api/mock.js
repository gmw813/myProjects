/*
 * @Descripttion:
 * @Author: GENGMENGWEI
 * @Date: 2021-05-24 11:01:46
 * @LastEditTime: 2021-05-24 15:01:52
 */
import Mock from "mockjs";
//配置请求延时
Mock.setup({
  timeout: 1000,
});
//匹配接口路径
Mock.mock(/^\/api*/,{
  resultCode:200,
  resultMsg:'mock'
})
