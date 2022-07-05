import axios from 'axios'
const request = axios.create({
  baseURL: 'http://42.192.129.12:8000'
})

request.interceptors.request.use(config => {
  console.log(config)
  return config
})
export default request
