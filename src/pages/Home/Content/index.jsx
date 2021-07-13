import ReactCodeInput from 'react-code-input'
import styles from './index.module.scss'
import { Tabs } from 'antd-mobile';
import { useState } from 'react';


import { createBrowserHistory } from 'history';
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

const Index = (pwdValue) =>{
    const history = createBrowserHistory({basename:'mobile'})
    const [value,setValue] = useState(1)
    const getValue = (val)=>{
        setValue(val)
    }
    const replace = ()=>{
        history.replace('/home/project')
    }
    return (
        <div className={styles.container}>
            {/* < ReactCodeInput  type = {'password'} fields = { 6 }  inputMode={'numeric'}  onChange={getValue} / > 
            <p>输入的值:{value}</p>
            <div className={styles.tabs}>
                <Tabs tabs={tabs2} initialPage={5} tabBarTextStyle={{with:'100px'}}/>
                <ul>
                    <li onClick={replace}>1s</li>
                </ul>
            </div> */}
        </div>
    )
}
export default Index