const _ = require('lodash')


const help = [
    {
        type:'1',
        items:[
            {
                id:1,
            }
           
        ]
    },
    {
        type:'2',
        items:[
            {
                id:2,
            }   
        ]
    }
]


// 转换后结果 [{id:1,type:1},{id:2,type:2s}]
let result = []

_(help).forEach(helps => {
    _(helps.items).forEach(help=>{
       result.push(he)
    })
})

// console.log(result)