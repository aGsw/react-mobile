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
    }
]