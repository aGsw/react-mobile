import { reject } from 'lodash'
import { fetch } from 'whatwg-fetch'


const codeMessage = {
    200:"服务器成功返回请求的数据。",
    201:"新建或修改数据成功。",
    202:"一个请求已经进入后台排队（异步任务）。",
    204:"删除数据成功。",
    400:"发出的请求有错误,服务器没有进行新建或修改数据的操作。",
    401:"用户没有权限（令牌、用户名、密码错误）。",
    403:"用户得到授权,但是访问是被禁止的。",
    404:"发出的请求针对的是不存在的记录,服务器没有进行操作。",
    406:"请求的格式不可得。",
    410:"请求的资源被永久删除,且不会再得到的。",
    422:"当创建一个对象时,发生一个验证错误。",
    500:"服务器发生错误,请检查服务器。",
    502:"网关错误。",
    503:"服务不可用服务器暂时过载或维护。",
    504:"网关超时。"
}

/**
 * header头配置
 * @returns 
 */

function generateHeaders(){
    let headers = {
        version:1.0
    }
    return new Promise((resolve,reject)=>{
        resolve(headers)
    })
}

/**
 * 检查 http 响应状态     如果存在错误状态返回 对应提示
 * @param {*} response 
 */
function checkStatus(response){
    let status =  response.status
    if(status>=200 && status < 300){
        return response
    }
    // error
    const errorText = codeMessage[response.status] || response.statusText
    const error = new Error(errorText)
    error.name = status
    error.response = response
    throw error  
}


export default function request(url,options){
    options = {
        headers:{
            token:'1231313131'
        },
        method: 'POST',
    }

    return generateHeaders().then(headers =>{
        options.headers = {...headers,...options.headers}   

        return fetch(url,options).then(checkStatus).then((response) => {
            console.log('------',options)
            return response
        })
    })

   
}




// .then().then()    new error