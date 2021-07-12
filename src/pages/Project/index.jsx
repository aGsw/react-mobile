import { Link } from "react-router-dom"
const Project = ()=>{
    const projects = [
        {
            name:'哈银消金APP-H5重构',
            link:'project/hyxj'
        }
    ]




    return (
        <div>
            {
               projects.map((item,index)=>{
                   return(
                        <Link key={index} to={item.link}>
                            <h3>{item.name}</h3>
                        </Link>
                   )
               })
            }
        </div>
    )
}

export default Project