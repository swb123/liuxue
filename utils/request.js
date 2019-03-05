import axios from 'axios'
import {getUser} from '@/utils/auth'
// 创建axios实例
const service = axios.create({
    baseURL: 'https://www.easy-mock.com/mock/5c7bbada5aff8d30f9ea7c26', // api的base_url
    timeout: 30000, // 请求超时时间
    headers: { 'Authorization':  "Bearer "+getUser().token }
  })
export default service