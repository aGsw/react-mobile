function mapSet(...keyPath){
    let value = keyPath.pop()
    return{
        type : 'MAP_SET',
        keyPath,
        value
    }
}

function mapDelete(...keyPath){
    return {
        type: 'MAP_DELETE',
        keyPath
    }
    
}

let actions = {
    mapSet,
    mapDelete
}

export{actions as default,mapSet,mapDelete}