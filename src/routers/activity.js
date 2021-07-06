module.exports = [
    // 活动
    {
        path :'/activity',
        component: require('../pages/activity').default,
        exact:true 
    },
    // 新人礼活动
    {
        path :'/activity/newPeopleGift',
        component: require('../pages/activity/NewPeopleGift').default,
        exact:true
    }
]