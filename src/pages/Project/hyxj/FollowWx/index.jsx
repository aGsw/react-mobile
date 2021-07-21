import styles from './index.module.scss'
import copy from 'copy-to-clipboard';
import { Toast } from 'antd-mobile'
/**
 * 关注微信 / 下载图片 / APP 对接
 * @returns 
 */
const WX = () =>{
    /**
     * @function 下载二维码
     * 
     */
    const saveImg = ()=>{
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
    return(
        <div className={styles.container}>
            {/* 背景图 */}
            <div>
                <img src={require('./images/follow_wx@3x.png').default} alt="" />
            </div>
            {/* 点击区域 */}
            <div className={styles.mask}>
                <div className={styles.button1} onClick={saveImg}></div>
                <div className={styles.button2}  onClick={openWx}></div>
            </div>
        </div>
    )
}

export default WX