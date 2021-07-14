import styles from './index.module.scss'
import { Button } from 'antd-mobile'
const BankCard = ()=>{
    return (
        <div className={styles.container}>
            <img src={require('./images/无银行卡@2x.png').default} alt="" />
            <p>暂无绑定的银行卡</p>
            <Button type={'primary'}>去绑定</Button>
        </div>
    )
}

export default BankCard