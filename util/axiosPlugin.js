import axios from 'axios'

const Axios = axios.create({
    baseURL: '',
    timeout: 5000
})

// // 添加请求拦截器
// Axios.interceptors.request.use( config => {

// })

// // 添加响应拦截器
// Axios.interceptors.response.use( res => {
    
// })

// 对axios重新封装成一个plugin，方便Vue.use(XXX)
export default {
    install: function (Vue, options){
        Object.defineProperty(Vue.prototype, '$http', {
            value: Axios
        })
    }
}