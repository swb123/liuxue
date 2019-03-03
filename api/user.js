import request from '@/utils/request'
const group_name = 'user'
const api_name = 'user'
export default {
    sendsms(mobile){
        return request({
            url:`/${group_name}/${api_name}/sendsms/${mobile}`,
<<<<<<< HEAD
            method: 'post'
=======
            method: 'put'
>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a
        })
    },
    register(user,code){
        return request({
            url:`/${group_name}/${api_name}/register/${code}`,
            method: 'post'
        })
    },
    login(mobile,password){
        return request({
            url:`/${group_name}/${api_name}/login`,
            method: 'post',
            data: {
                mobile,
                password
            }
        })
    },
    info(){
       return request({
           url: `/${group_name}/${api_name}/info`,
           method: 'get'
       }) 
    },
    saveinfo(user){
        return request({
            url: `/${group_name}/${api_name}/saveinfo`,
            method: 'put',
            data: user
        })
<<<<<<< HEAD
    },
    assess(user){
        return request({
            url: `/${group_name}/${api_name}/assess`,
            method: 'get',
            data: user
        })
=======
>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a
    }
}