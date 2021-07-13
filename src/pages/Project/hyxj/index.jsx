import {Link} from 'react-router-dom'
const lists = [
    {
        name:'我的银行卡',
        link:'/project/hyxj/bankCard'
    }
]
const Hyxj = () =>{
    return(
        <div>
           {
               lists.map((item,index)=>{
                   return (
                       <Link key={index} to={item.link}>
                            <div>{item.name}</div>
                       </Link>
                       
                   )
               })
           }
        </div>
    )
}

export default Hyxj