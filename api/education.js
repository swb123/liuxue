import request from '@/utils/request'
const group_name = 'education'
const api_name = 'school'
const api_major = 'major'
export default {
  getList() {
    return request({
      url: `/${group_name}/${api_name}`,
      method: 'get'
    })
  },
  getmajorList() {
    return request({
      url: `/${group_name}/${api_major}`,
      method: 'get'
    })
  },
  search(page, size, searchMap) {
    return request({
      url: `/${group_name}/${api_name}/search/${page}/${size}`,
      method: 'post',
      data: searchMap
    })
  },
  searchColl(searchMap) {
    return request({
      url: `/${group_name}/${api_name}/search`,
      method: 'post',
      data: searchMap
    })
  },
  searchmajorColl(searchMap) {
    return request({
      url: `/${group_name}/${api_major}/search`,
      method: 'post',
      data: searchMap
    })
  },
  save(pojo) {
    return request({
      url: `/${group_name}/${api_name}`,
      method: 'post',
      data: pojo
    })
  },
  findById(id) {
    return request({
      url: `/${group_name}/${api_name}/${id}`,
      method: 'get'
    })
  },
  findmajorById(id) {
    return request({
      url: `/${group_name}/${api_major}/${id}`,
      method: 'get'
    })
  },
  update(id, pojo) {
    if (id === null || id === '') {
      return this.save(pojo)
    }
    return request({
      url: `/${group_name}/${api_name}/${id}`,
      method: 'put',
      data: pojo
    })
  },
  deleteById(id) {
    return request({
      url: `/${group_name}/${api_name}/${id}`,
      method: 'delete'
    })
  },
  hotlist(){
    return request({
      url: `/${group_name}/${api_name}/search/hotlist`,
      method: 'get'
    })
  }
}
