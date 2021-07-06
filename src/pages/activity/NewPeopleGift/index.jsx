import styles from './index.module.scss'
import { useState } from 'react'
/**
 * 新人礼活动
 * router  activity/NewPeopleGift
 * 
 * 区分  登录/未登录   APP/H5 环境  根据UA 头判断
 * 
 * @desc  第一步判断用户是否等=登录
 * 
 */
const defaultImg = require('./images/default.jpg').default // 默认图
const appDownLoadImg = require('./images/AppDownload.jpg').default
const openAppImg = require('./images/openApp.png').default
const openButtonImg = require('./images/openButton.png').default  // 拆 字按钮

const twentyMoneyImg = require('./images/twentMoney.jpg').default  // 20元新人免息券
const fiftyMoneyImg = require('./images/fiftyMoney.jpg').default  //  50元新人免息券
const usedImg = require('./images/used.jpg').default  //  已使用免息券
const useImg = require('./images/use.png').default  //  立即使用免息券
const moreImg = require('./images/more.png').default  //  更多福利

let UA = 'IOS'



//  app下载
const AppDowload = () =>{
    const dowloadAPP = ()=>{
        window.location.href = ""
    }
    return (
        <div className={styles.app}>
            <img src={appDownLoadImg} alt="" width="100%" />
            <img src={openAppImg} alt="" onClick={dowloadAPP}/>
        </div>
    )
}


// 新人礼活动 拆红包
const Gift = () =>{
    const [resultImg,setResultImg] = useState(defaultImg)
    /**
     * @function '拆' 字点击按钮
     * @desc 判断用户拦截  拦截器已做处理
     */
    const handleOpenButton = ()=>{
        let result = {
            money:20
        }

        switch(result.money){
            case 99999:
                setResultImg(usedImg)
                break;
            case 20:
                setResultImg(twentyMoneyImg)
                break;
            case 50:
                setResultImg(fiftyMoneyImg)
            break;
        }
    }
    /**
     * @function 立即使用优惠券
     * 
     */
    const handleUse = ()=>{
        console.log('立即去使用')
    }
    return (
        <div className={styles.content}>
            <img src={resultImg} alt="" width="100%" />
            
            {
                resultImg == defaultImg?<img className={styles.openImg} src={resultImg == defaultImg?openButtonImg:''} alt="" onClick={handleOpenButton} />:''
            }


            {
                [twentyMoneyImg,fiftyMoneyImg].includes(resultImg)?<img className={styles.useImg} src={useImg} alt="" onClick={handleUse} />:''
            }
            {
                [usedImg].includes(resultImg)?<img className={styles.useImg} src={moreImg} alt="" onClick={handleUse(1)} />:''
            }
            {
                resultImg != defaultImg ?<p>活动规则</p>:''
            }
            
        </div>
    )
}


// 主页面
const NewPeopleGift = () =>{
    return (
        <div className={styles.container}>
            {
                UA === 'IOS' ?<Gift/>:<AppDowload/> 
            }            
        </div>
    )
}

export default NewPeopleGift