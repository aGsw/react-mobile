const ua = window.navigator.userAgent


let browserEnv = {
    inInApp:function(){
        return /hrbbApp/i.test(ua)
    },
    isInAndroid:function(){
        return /hrbbAppAndroid/i.test(ua)
    },
    isInIOSApp:function(){
        return /hrbbAppIos/i.test(ua)
    }
}


export default browserEnv