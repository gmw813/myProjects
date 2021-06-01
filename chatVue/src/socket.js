/*
 * @Descripttion:
 * @Author: GENGMENGWEI
 * @Date: 2021-05-13 09:46:10
 * @LastEditTime: 2021-05-19 13:07:04
 */
import io from "socket.io-client";
let socket= {};
socket = io.connect("http://localhost:3000");
socket.on("connect", () => {
  console.log("已连接服务器");
})
export default socket;
