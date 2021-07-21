const getUserInfo = (schema, request) =>{
    return {
        reason:{
            errorCode: 0,
            message: 'string'
        },
        requestId: 'string',
        result:{
            bankCardCount:4,
            userName:'郭世伟',
            moblie:'17310241134',
            login:true
        },
        status:1,
    }
}

const test = (schema,request) =>{
    return {
        name:'xxxxx'
    }
}
export default {
    'POST /v1/user/generalInfo' : getUserInfo,
    'POST /v1/user/Test' : test
}
