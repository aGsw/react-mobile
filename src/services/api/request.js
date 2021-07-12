import { fetch } from 'whatwg-fetch'


export default function request(url,options){
    options = {
        method: 'POST',
    }
    return fetch(url,options).then((response) => {
        return response
    })
}