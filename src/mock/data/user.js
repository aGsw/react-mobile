const getUserInfo = (schema, request) =>{
    return {
        reason:{
            errorCode: 0,
            message: 'string'
        },
        requestId: 'string',
        result:{
            bankCardCount:4
        },
        status:1,
    }
}


export default {
    'POST /v1/user/generalInfo' : getUserInfo
}
