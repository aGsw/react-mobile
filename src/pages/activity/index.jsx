
import {Link} from 'react-router-dom'
const activitys = [
    {
        name :'新人礼活动',
        link:'/activity/newPeopleGift'
    }
]




const Activity = () =>{
    return (
        <div>
            <p>活动</p>
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