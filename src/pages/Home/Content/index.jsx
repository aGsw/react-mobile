import ReactCodeInput from 'react-code-input'
import styles from './index.module.scss'
import { Tabs } from 'antd-mobile';
const tabs2 = [
    { title: '产品特点', sub: '1' },
    { title: '额度申请', sub: '2' },
    { title: '借款问题', sub: '3' },
    { title: '还款问题', sub: '4' },
    { title: '手机问题', sub: '5' },
    { title: '密码及安全', sub: '6' },
    { title: '收费问题', sub: '7' },
    { title: '其他问题', sub: '8' },

  ];

const Index = () =>{
    return (
        <div className={styles.container}>
            < ReactCodeInput  type = {'password'} fields = { 6 }  inputMode={'numeric'}   / > 
            <div className={styles.tabs}>
                <Tabs tabs={tabs2} initialPage={5} tabBarTextStyle={{with:'100px'}}/>
            </div>
        </div>
    )
}
export default Index