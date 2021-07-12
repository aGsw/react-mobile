import { createServer } from "miragejs"
import api from './api'
import _ from 'lodash'


export default () => {
    createServer({
        routes(){
            this.namespace = 'api'
            _.each(api,(apiModule) => {
                _.each(apiModule,(fn, key)=>{
                    let [method,path,skipMirage] = key.split(' ')
                    let requestMethod = this.get
                    if(method === 'POST'){
                        requestMethod = this.post
                    }
                    requestMethod(path,fn,{timing:1000})
                    if(skipMirage){
                        this.passthrough(path)
                    }
                })
            })
        }
    })
}



console.log("mock createServer start")