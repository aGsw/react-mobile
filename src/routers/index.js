export default [
    {
        path: '/home',
        component: require('../pages/Home').default,
        exact:false
    },
    ...require('./project'),
    ...require('./activity')
]