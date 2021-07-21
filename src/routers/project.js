module.exports = [
    {
        path: '/project/hyxj',
        component: require('../pages/Project/hyxj').default,
        exact:true
    },
    {
        name:'我的银行卡',
        path: '/project/hyxj/bankCard',
        component: require('../pages/Project/hyxj/BankCard').default,
        exact:true
    },
    // 借还指南
    {
        namme:'借还指南',
        path: '/project/hyxj/loanReturnGuide',
        component: require('../pages/Project/hyxj/loanReturnGuide').default,
        exact:true
    },
    {
        name:'关注微信',
        path:'/project/hyxj/followWx',
        component: require('../pages/Project/hyxj/FollowWx').default,
        exact:true
    }

]