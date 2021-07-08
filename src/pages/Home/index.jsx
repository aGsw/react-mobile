import styles from './index.module.scss'
import Project  from '../Project'
import Active from '../activity'
import User from '../user'
import Index from './Content'
import {
    useRouteMatch,
    Link,
    Route,
    Switch,
    useHistory,
  } from 'react-router-dom'
const Home = () =>{
    const {path} = useRouteMatch()
    const history = useHistory()
    const  tabs = [
        {
            name:'首页',
            icon:'<svg t="1625624688041" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2411" width="200" height="200"><path d="M979.792 404.577L574.183 83.943c-34.919-27.694-89.619-27.694-124.538 0L44.208 404.577c-13.933 11.009-16.169 31.135-5.332 44.896s30.619 16.169 44.552 5.332l12.557-10.321v387.548c0 54.873 57.969 95.984 108.713 95.984H844.59c50.228 0 83.255-38.531 83.255-95.984V445.86l11.697 8.945c5.848 4.644 13.073 6.881 20.126 6.881 9.461 0 18.922-4.128 25.286-12.213 11.009-13.761 8.773-33.887-5.16-44.896z m-499.873 459.45V686.508c0-8.773 15.997-13.245 31.995-13.245s31.995 4.472 31.995 13.245v177.347l-63.989 0.172z m384.108-31.995c0 21.158-5.848 31.995-19.266 31.995H608.586c0-0.516-0.688-0.86-0.688-1.376V686.509c0-37.155-29.93-77.234-95.984-77.234s-95.984 40.079-95.984 77.234v176.142c0 0.516 0.86 0.86 0.86 1.376H204.869c-20.126 0-44.724-17.373-44.724-31.995V393.74l328.719-259.569c11.869-9.289 33.199-9.289 44.896 0l330.095 261.117v436.744z" p-id="2412" fill="#ffffff"></path></svg>',
            subPath:'/',
            isActivate:false,
            content: Index
        },
        {
            name:'框架',
            icon:'<svg t="1625624740317" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3470" width="200" height="200"><path d="M247.04 85.333333h529.92a128 128 0 0 1 127.232 113.877334l66.346667 597.333333A128 128 0 0 1 843.306667 938.666667H180.693333a128 128 0 0 1-127.232-142.122667l66.346667-597.333333A128 128 0 0 1 247.04 85.333333z m0 42.666667a85.333333 85.333333 0 0 0-84.821333 75.946667l-66.346667 597.333333A85.333333 85.333333 0 0 0 180.693333 896h662.613334a85.333333 85.333333 0 0 0 84.821333-94.72l-66.346667-597.333333A85.333333 85.333333 0 0 0 776.96 128H247.04z" p-id="3471" fill="#ffffff"></path><path d="M277.333333 341.333333a234.666667 234.666667 0 0 0 469.333334 0 21.333333 21.333333 0 1 0-42.666667 0 192 192 0 1 1-384 0 21.333333 21.333333 0 0 0-42.666667 0z" p-id="3472" fill="#ffffff"></path></svg>',
            subPath:'/test',
            isActivate:false,
            content: Project,
        },
        {
            name:'项目',
            icon:'<svg t="1625624812350" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4373" width="200" height="200"><path d="M896 896A128 128 0 0 1 768 1024H128A128 128 0 0 1 0 896V256a128 128 0 0 1 128-128A128 128 0 0 1 256 0h640A128 128 0 0 1 1024 128V768a128 128 0 0 1-128 128z m-832 0a64 64 0 0 0 64 64H768a64 64 0 0 0 64-64V448h-768V896z m0-640v128h768V256A64 64 0 0 0 768 192H128A64 64 0 0 0 64 256z m896-128a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64H768a128 128 0 0 1 128 128v576A64 64 0 0 0 960 768V128zM160 256h384a32 32 0 0 1 0 64h-384a32 32 0 0 1 0-64z m576 0a32 32 0 1 1 0 64 32 32 0 0 1 0-64z" p-id="4374" fill="#ffffff"></path></svg>',
            subPath:'/project',
            isActivate:false,
            content: Project
        },
        {
            name:'活动',
            icon:'<svg t="1625624910830" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5254" width="200" height="200"><path d="M944.632 260.143l-78.787 514.583c0 32.084-26.01 58.094-58.094 58.094H174v13.203c0 32.084 26.01 58.094 58.094 58.094h665.438c32.084 0 58.094-26.009 58.094-58.094V294.131a57.797 57.797 0 0 0-10.994-33.988z" p-id="5255" fill="#ffffff"></path><path d="M785.179 806.168H131.331c-37.068 0-67.223-29.278-67.223-65.267v-0.799l0.126-0.788 82.909-522.923c0.462-35.604 30.439-64.432 67.218-64.432h62.206v115.767c0 11.879 9.664 21.545 21.545 21.545H329.8c11.879 0 21.545-9.666 21.545-21.545V151.958h79.699v115.767c0 11.88 9.664 21.545 21.545 21.545h31.688c11.881 0 21.546-9.666 21.546-21.545V151.958h79.697v115.767c0 11.88 9.666 21.545 21.546 21.545h31.687c11.881 0 21.546-9.666 21.546-21.545V151.958h78.377v115.767c0 11.88 9.666 21.545 21.546 21.545h31.686c11.881 0 21.546-9.666 21.546-21.545V151.958h54.754c37.067 0 67.223 29.278 67.223 65.266v0.799l-0.125 0.789-82.908 522.922c-0.462 35.606-30.439 64.434-67.219 64.434zM84.398 741.659c0.423 24.455 21.314 44.225 46.934 44.225H785.18c25.882 0 46.939-20.18 46.939-44.984v-0.799l0.125-0.789 82.896-522.846c-0.422-24.455-21.313-44.224-46.932-44.224h-34.47v95.483c0 23.064-18.765 41.829-41.83 41.829h-31.686c-23.065 0-41.83-18.765-41.83-41.829v-95.483h-37.809v95.483c0 23.064-18.765 41.829-41.83 41.829h-31.687c-23.065 0-41.83-18.765-41.83-41.829v-95.483h-39.13v95.483c0 23.064-18.765 41.829-41.83 41.829h-31.688c-23.065 0-41.829-18.765-41.829-41.829v-95.483h-39.132v95.483c0 23.064-18.764 41.829-41.829 41.829H298.11c-23.064 0-41.829-18.765-41.829-41.829v-95.483H214.36c-25.882 0-46.939 20.177-46.939 44.982v0.799l-0.125 0.789-82.898 522.847z" p-id="5256" fill="#ffffff"></path><path d="M297.003 115.89h34.495v133.351h-34.495V115.89zM452.674 115.89h34.493v133.351h-34.493V115.89zM606.714 115.89h34.493v133.351h-34.493V115.89zM761.899 115.89h34.493v133.351h-34.493V115.89zM373.37 408.368l-129.341 1.038-11.301 74.342 113.027-0.908-4.414 29.04-113.028 0.908-15.892 104.545-37.287 0.299 36.199-238.128 166.628-1.337-4.591 30.201zM535.365 613.58l-34.956 0.28 4.414-29.04c-15.729 21.772-36.463 33.158-62.217 34.146-42.731 0.342-60.675-21.938-53.846-66.859l16.422-108.029 34.957-0.281-15.892 104.545c-4.591 30.201 6.695 45.194 33.895 44.976 28.319-2.548 45.997-19.313 53.037-50.314l15.187-99.897 34.957-0.281-25.958 170.754zM735.61 613.134l-34.957 0.28 15.54-102.221c4.708-30.964-6.218-45.958-32.732-44.983-27.438 1.779-45.38 17.767-53.848 48l-15.187 99.897-34.958 0.28 26.136-171.917 34.958-0.281-4.591 30.202c17.276-21.783 38.851-33.557 64.723-35.325 42.064-1.099 59.106 21.968 51.161 69.199L735.61 613.134zM406.376 358.827h73.058v21.125h-73.058v-21.125zM265.542 626.341H338.6v21.124h-73.058v-21.124zM552.931 358.827h73.058v21.125h-73.058v-21.125zM706.088 358.827h73.058v21.125h-73.058v-21.125z" p-id="5257" fill="#ffffff"></path></svg>',
            subPath:'/activity',
            isActivate:false,
            content: Active,

        },
        {
            name:'我的',
            icon:'<svg t="1625624950311" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6138" width="200" height="200"><path d="M506.293585 578.717349a289.354455 289.354455 0 1 1 289.303315-289.354456A289.610159 289.610159 0 0 1 506.293585 578.717349z m0-520.357297a231.053982 231.053982 0 1 0 231.002841 231.002841A231.309686 231.309686 0 0 0 506.293585 58.360052z" p-id="6139" fill="#ffffff"></path><path d="M942.524321 1024a29.150237 29.150237 0 0 1-29.150237-29.150237 407.13164 407.13164 0 0 0-813.138182-29.150236H792.681876a29.150237 29.150237 0 0 1 0 58.300473H69.960568a29.150237 29.150237 0 0 1-29.150237-29.150237 465.380972 465.380972 0 0 1 930.761945 0 29.150237 29.150237 0 0 1-29.047955 29.150237z" p-id="6140" fill="#ffffff"></path><path d="M329.857942 291.203961a20.456306 20.456306 0 0 1-20.456306-20.71201 177.5096 177.5096 0 0 1 177.100473-177.305037 20.456306 20.456306 0 0 1 0 41.37288A136.085579 136.085579 0 0 0 350.518812 270.491951a20.456306 20.456306 0 0 1-20.66087 20.71201z" fill="#ffffff" p-id="6141"></path></svg>',
            subPath:'/user',
            isActivate:false,
            content: User,
        }
    ]
    return(
        <div className={styles.container}>
            <div className={styles.tobBar}>
            </div>
            {/* 主体内容 */}
            <div className={styles.content}>
                <Switch>
                    {
                       tabs.map((item,index) => {
                           return (
                               <Route
                                    key = {index}
                                    path= {`${path}${item.subPath}`}
                                    exact
                                    component={item.content}
                               >

                               </Route>
                           )
                       }) 
                    }
                </Switch>
            </div>
            {/* tarBar */}
            <div className={styles.tarBar}>
                {
                  tabs.map((item,index)=>{
                      return(
                          <div key={index} className={styles.item}>
                              <div dangerouslySetInnerHTML={{__html: item.icon}}/>
                              <div onClick={()=>{
                                  history.replace(`${path}${item.subPath}`)
                              }}>{item.name}</div>
                          </div>
                      )
                  })  
                }
            </div>
           
        </div>
    )
}

export default Home