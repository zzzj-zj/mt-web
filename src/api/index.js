import axios from 'axios'
import './interceptor'
import config from './config'

let API = {}

Object.keys(config.URLS).forEach(option => {
  API[option] = (data = {}) => {
    const method = config.URLS[option].method.toLowerCase()

    return axios[method](config.BASEURL + config.URLS[option].url, {
      params: data
    })
  }
})

API.requestAll = args => axios.all(args)

export default API
