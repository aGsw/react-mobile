import {Link} from 'react-router-dom'
const lists = [
    {
        name:'我的银行卡',
        link:'/project/hyxj/bankCard'
    },
    {
        name:'借还指南',
        link:'/project/hyxj/loanReturnGuide'
    },
    {
        name:'我的额度',
        link:'/project/hyxj/quota'
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