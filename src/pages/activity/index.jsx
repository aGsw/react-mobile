
import {Link} from 'react-router-dom'
import { queryUserInfo } from '../../services/api'
import { useEffect } from 'react'
const activitys = [
    {
        name :'新人礼活动',
        link:'/activity/newPeopleGift'
    },
    {
        name :'关注微信',
        link:'/activity/FollowWx'
    },
    {
        name :'联系人信息',
        link:'/activity/ContactInfo'
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
                            <div>
                            {item.name}
                            </div>
                        </Link>
                    )
                   
                })
            }
        </div>
    )
}

export default Activity