// const hh = [{
//     name:1
// },{
//     name:2
// },{
//     name:3
// },{
//     name:4
// },{
//     name:5
// },{
//     name:6
// }]



// function isThradePassword(value){
//     let valueMinus = value.replace(/\d/g,function($0,pos){
//         return parseInt($0) - pos
//     })
//     let valueAdd = value.replace(/\d/g,function($0,pos){
//         return parseInt($0) + pos
//     })
//     if(
//         /^(\d)\1+$/.test(value)||
//         /^(\d)\1+$/.test(valueMinus)||
//         /^(\d)\1+$/.test(valueAdd)
//     ){
//         return false
//     }else{
//         return true
//     }
// }




// var reg = /^[0-9]*$/


// console.log(reg.test('12313A13'))


// 1?console.log('对'):console.log('错')
function test(str){
    return (str+'').substring(0,3)+'****'+(str+'').substring(7,str.length)
}

console.log(test(17310241134))