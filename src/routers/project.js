module.exports = [
    {
        path: '/project/hyxj',
        component: require('../pages/Project/hyxj').default,
        exact:true
    },
    {
        path: '/project/hyxj/bankCard',
        component: require('../pages/Project/hyxj/BankCard').default,
        exact:true
    },
    // 借还指南
    {
        path: '/project/hyxj/loanReturnGuide',
        component: require('../pages/Project/hyxj/loanReturnGuide').default,
        exact:true
    }
]