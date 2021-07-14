import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ( /* webpackChunkName: "home" */ '@/views/Home.vue'),
        redirect: '/login',
        children: [
            {
                path: 'menu1',
                name: 'menu1',
                component: () =>
                    import ( /* webpackChunkName: "menu1" */ '@/views/menu1/index.vue'),
                redirect: '/menu1/list',
                children: [{
                    path: 'list',
                    name: 'menu1List',
                    meta:{
                        model:'/menu1',
                    },
                    component: () =>
                        import ( /* webpackChunkName: "menu1List" */ '@/views/menu1/list.vue'),
                }]
            },
            {
                path: 'menu2',
                name: 'menu2',
                component: () =>
                    import ( /* webpackChunkName: "menu2" */ '@/views/menu2/index.vue'),
                redirect: '/menu2/list',
                children: [{
                    path: 'list',
                    name: 'menu2List',
                    meta:{
                        model:'/menu2',
                    },
                    component: () =>
                        import ( /* webpackChunkName: "menu1List" */ '@/views/menu2/list.vue'),
                }]
            },
            {
                path: 'menu3',
                name: 'menu3',
                component: () =>
                    import ( /* webpackChunkName: "menu2" */ '@/views/menu3/index.vue'),
                redirect: '/menu3/list',
                children: [{
                    path: 'list',
                    name: 'menu3List',
                    meta:{
                        model:'/menu3',
                    },
                    component: () =>
                        import ( /* webpackChunkName: "menu1List" */ '@/views/menu3/list.vue'),
                },
                {
                    path: 'add',
                    name: 'menu3dd',
                    meta:{
                        model:'/menu3',
                    },
                    component: () =>
                        import ( /* webpackChunkName: "meritExamineAdd" */ '@/views/menu3/add.vue'),
                }
            ]
            },
            {
                path: 'userInfo',
                name: 'userInfo',
                component: () =>
                    import ( /* webpackChunkName: "UserInfo" */ '@/views/user-info/UserInfo.vue'),
            },
        ]
    },
    {
        path: "/login",
        component: () =>
            import ( /* webpackChunkName: "login" */ '@/views/Login.vue'),
    },
    {
        path: "/nopower",
        component: () =>
            import ( /* webpackChunkName: "nopower" */ '@/views/NoPower.vue'),
    },
    {
        path: "*",
        component: () =>
            import ( /* webpackChunkName: "nopower" */ '@/views/NoFind.vue'),
    },

]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router