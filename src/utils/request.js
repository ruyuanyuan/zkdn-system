import axios from 'axios'
import Cookies from 'js-cookie'
import { Base64 } from 'js-base64'
import router from '@/router'


const server = axios.create({
        baseURL: '', // 请求url
        timeout: 30000, // 超时处理
        withCredentials: false // 是否跨域
    })
    // 添加一个请求拦截器
server.interceptors.request.use(function(config) {
    // console.log(config)
    config.headers['Content-Type'] = 'application/json'
    let access_token = Cookies.get('access_token');
    if (!access_token) {
        let baseToken = Base64.encode("yqstreet:1234");
        access_token = "basic " + baseToken;
        config.headers['Authorization'] = access_token
    } else {
        // 在请求发出之前进行一些操作，比如请求头携带内
        config.headers['Authorization'] = 'Bearer ' + access_token
    }

    return config
}, function(error) {
    // Do something with request error
    return error
})

server.interceptors.response.use(async(res) => {
    let config = res.config
    console.log(res.data.status)
    if (res.data.status == 401) {
        Cookies.remove('access_token')
        let refresh_token = Cookies.get('refresh_token');
        if (refresh_token) {
            return await server.post('/yqstreet/auth/refreshToken', { refresh_token: refresh_token }).then(async res => {
                if (res.status == 0) {
                    Cookies.set("access_token", res.body.access_token);
                    Cookies.set("refresh_token", res.body.refresh_token);
                    return await server.request(config)
                } else {
                    Cookies.remove("userInfo");
                    Cookies.remove("access_token");
                    Cookies.remove("refresh_token");
                    router.push('/login')
                }
            })
        } else {
            Cookies.remove("userInfo");
            Cookies.remove("access_token");
            Cookies.remove("refresh_token");
            router.push('/login')
        }
    } else {
        return res.data
    }

}, function(error) {
    switch (error && error.response && error.response.status) {
        case 400:
            error.message = '请求错误'
            break
        case 401:
            error.message = '未授权，请登录'
            break
        case 403:
            error.message = '拒绝访问'
            break
        case 404:
            error.message = '未找到访问地址'
            break
        case 408:
            error.message = '请求超时'
            break
        case 500:
            error.message = '服务器内部错误'
            break
        default:
    }
    // Do something with response error
    return error
})

export default server

export const downLoadFile = function (url, data = {}, type) {

    return new Promise(function (resolve, reject) {
      // 执行异步ajax请求
      let promise
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios({
        method: type,
        url: url,
        responseType: 'blob', // 服务器返回的数据类型
        data: data
      });
  
      promise.then(function (response) {
        // 成功了调用resolve()
        resolve(response.data)
      }).catch(function (error) {
        //失败了调用reject()
        reject(error)
      })
    })
  }