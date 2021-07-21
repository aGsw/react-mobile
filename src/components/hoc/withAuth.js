import { connect } from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { queryUserInfo } from 'services/api'
import action from 'services/redux/actions'
import  immutable from 'immutable'


/**
 * @function 验证是否登录       基于属性代理的方式实现hoc
 * @param {*} Component 
 * @returns 
 */



const mapStateToProps = (state) =>{
    let userInfo = state.map.get('userInfo')
    return {
        userInfo:userInfo&& userInfo.toJS()
    }
}
/**
 * 获取userInfo
 * @param {*} dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch) => {
    return{
        async getUserInfo(){
            let userInfo = await queryUserInfo()
            dispatch(action.mapSet('userInfo',immutable.fromJS(userInfo)))
        }
    }
}

const withAuth = (Component) => {
    function RequireLogin(props){
        let {userInfo,getUserInfo} = props
        let history = useHistory()
        useEffect(()=>{
            if(userInfo && !userInfo.login){
                // 需要登录的逻辑
                console.log('需要登录的逻辑')
            }else{
                if(!userInfo){
                    getUserInfo()
                }
            }
        },userInfo)
        return <>{userInfo && <Component {...props}/>} </>
    }
    return connect(mapStateToProps,mapDispatchToProps)(RequireLogin)
}

export default withAuth