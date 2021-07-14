import styles from './index.module.scss'
import { Button } from 'antd-mobile'

const imgSrc = require('./images/无银行卡@2x.png').default

const BankCard = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img src={imgSrc} alt="" />
            </div>
            <p>暂无绑定的银行卡</p>
            <Button type={'primary'}>去绑定</Button> 
        </div>
       
    )
}

export default BankCard