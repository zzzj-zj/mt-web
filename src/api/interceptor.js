import axios from 'axios'

const appkey = 'zzjjj_1577530972428'

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.params = {
    ...config.params,
    appkey
  }

  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
