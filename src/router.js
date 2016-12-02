export default {
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            redirect: '/home'    //重定向
        },
        {
            path: '/home',
            component: require('./views/home.vue')
        },
        {
            path: '/list',
            component: require('./views/list.vue')
        },
        {
            path: '/details/:id',
            name: 'details',
            component: require('./views/details.vue')
        },
        {
            path: '/celebrity/:id',
            name: 'celebrity',
            component: require('./views/celebrity.vue')
        }
    ]
}
