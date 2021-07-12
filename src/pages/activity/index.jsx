
import {Link} from 'react-router-dom'
import { queryUserInfo } from '../../services/api'
import { useEffect } from 'react'
const activitys = [
    {
        name :'新人礼活动',
        link:'/activity/newPeopleGift'
    }
]




const Activity = () =>{

    useEffect(async ()=>{
        let res = await queryUserInfo()
        console.log(res)
    })
    return (
        <div>
            {
                activitys.map((item,index)=>{
                    return(
                        <Link key={index} to={item.link}>
                            {item.name}
                        </Link>
                    )
                   
                })
            }
        </div>
    )
}

export default Activity