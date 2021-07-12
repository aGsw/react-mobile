import request from './request'




export  async function queryUserInfo(){
    return request('/api/v1/user/generalInfo')

}