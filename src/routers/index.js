export default [
    {
        path: '/home',
        component: require('../pages/Home').default,
        exact:true
    },
    ...require('./activity')
]