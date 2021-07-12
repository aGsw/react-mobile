module.exports = [
    {
        path: '/activity/newPeopleGift',
        component: require('../pages/activity/NewPeopleGift').default,
        exact:true
    },
    // 关注微信
    {
        path: '/activity/FollowWx',
        component: require('../pages/activity/FollowWx').default,
        exact:true
    },
    // 联系人信息
    {
        path: '/activity/ContactInfo',
        component: require('../pages/activity/ContactInfo').default,
        exact:true
    }
]