import browserEnv from "./browserEnv";
import Promise from 'bluebird'
import _ from 'lodash'


function setupWebViewJavascriptBridge(callback){
    if(window.WebViewJavascriptBridge){
        return callback(window.WebViewJavascriptBridge)
    }
    if(window.WVJBCallbacks){
        return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    var WVJBIFrame = document.createElement('iframe')
    WVJBIFrame.style.display = 'none'
    WVJBIFrame.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIFrame)
    setTimeout(function(){
        document.documentElement.removeChild(WVJBIFrame)
    })
}
let readyNum = 0
function ready() {
    if(browserEnv.inInApp){
        window.hrbbAppBridge = window.WebViewJavascriptBridge
        if(!window.hrbbAppBridge){
            setupWebViewJavascriptBridge(()=>{
                console.log('hrbbAppBridge inited')
            })
        }
    }else if(browserEnv.isInAndroid()){
        window.hrbbAppBridge = window.hrbbApp
    }
    if(window.hrbbAppBridge){
        return Promise.resolve(window.hrbbAppBridge)
    }else if(readyNum>10){
        return Promise.reject()
    }
    readyNum++
    return Promise.delay(200).then(()=>ready())
}


let isAvailable = function (fnName) {
    if(browserEnv.isInAndroid()){
        return !!(window.hrbbAppBridge && window.hrbbAppBridge[fnName])
    }else  if(browserEnv.isInIOSApp){
        return !! window.hrbbAppBridge
    }
}

// replace:true // 是否替换当前页面
// transformType 1是push 2是present

export function toPageRouter(path,replace = false,transformType = 1){
    let params = {
        path,
        replace,
        transformType
    }
    ready().then(()=>{
        if(isAvailable('toPageRouter')){
            if(browserEnv.isInAndroid()){
                window.hrbbAppBridge.toPageRouter(params)
            }else if(browserEnv.isInIOSApp()){
                window.hrbbAppBridge.callHandler(
                    'toPageRouter',
                    params,
                    noopCallback
                )
            }
        }
    })
}

