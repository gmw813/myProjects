/*
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-03-04 15:37:09
 * @LastEditTime: 2021-03-04 15:38:36
 */
import Axios from 'axios'
import qs from 'qs'

export default {
  post(url, data) {
    return new Promise((resolve, reject) => {
      Axios.post(url, qs.stringify(data.data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      }).then((res) => {
        if (res.status == 200) {
          resolve(res.data);
        }
      }).catch((error) => {
        reject(error);
      })
    })
  },
  get(url, param) {
    return new Promise((resolve, reject) => {
      Axios.get(url, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      }).then((res) => {
        if (res.status == 200) {
          resolve(res.data);
        }
      }).catch((error) => {
        reject(error);
      })
    })
  },

}