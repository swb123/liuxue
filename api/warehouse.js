import request from '@/utils/request'
const group_name = 'warehouse'
const api_name = 'warehouse'
export default {
    getList() {
        return request({
          url: `/${group_name}/${api_name}`,
          method: 'get'
        })
    },
    getStatus(id) {
        return request({
          url: `/${group_name}/${api_name}/${id}`,
          method: 'get'
        })
    }
}