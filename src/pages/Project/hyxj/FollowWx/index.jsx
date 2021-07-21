import styles from './index.module.scss'
import copy from 'copy-to-clipboard';
import { Toast } from 'antd-mobile'
import { useState } from 'react';
import { RequestTimeout } from 'http-errors';
/**
 * 关注微信 / 下载图片 / APP 对接
 * @returns 
 */
const Index = () =>{
    const [show,setShow] = useState(false)
    /**
     * @function 下载二维码
     * 
     */
    const dowloadImg = ()=>{
        let Url = require('./images/wx_code.png').default 
		let triggerEvent = "touchstart"; //指定下载方式
	    let blob=new Blob([''], {type:'application/octet-stream'});
	    let url = URL.createObjectURL(blob);
	    let a = document.createElement('a'); //创建一个 a 标签
	    a.href = Url;  //把路径赋到a标签的href上
	    a.download = Url.replace(/(.*\/)*([^.]+.*)/ig,"$2").split("?")[0]; 
		let e = new MouseEvent('click', ( true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null));  // 创建事件
		//派遣后，它将不再执行任何操作。执行保存到本地
	    a.dispatchEvent(e); 
	    //释放一个已经存在的路径（有创建createObjectURL就要释放revokeObjectURL）
	    URL.revokeObjectURL(url);  
    }
    /**
     * @function 关注微信公众号
     * 
     */
    const openWx = ()=>{
        copy('哈银消费金融')&&Toast.info('复制成功')
        // document.location.href = 'weixin://'
        
    }
    const enlargeImg = ()=>{
        setShow(!show)
    }
    return(
        <div className={styles.container}>
            {/* 背景图 */}
            <div className={styles.content}>
                <img src={require('./images/follow_wx.png').default} alt="" />
                <div className={styles.mask}>
                    <div className={styles.enlarge} onClick={enlargeImg}></div>
                    <div className={styles.button1} onClick={dowloadImg}></div>
                    <div className={styles.button2} onClick={openWx}></div>
                </div>
            </div>
            {/* 放大二维码 */}
            {
                show?(
                    <div className={styles.imgContent} onClick={enlargeImg}>
                        <img src={require('./images/wx_code.png').default} alt="" />
                    </div>
                ):""}
        </div>
    )
}

export default Index