import Vue from 'vue'
import Router from 'vue-router'

/*
 * rotas de livre acesso (auth)
 */
const Home = () => import('../components/main/Home')
const UserRegister = () => import('../views/UserRegister')
const UserLogin = () => import('../views/UserLogin')
const NotFound = () => import('../components/main/NotFound')

/*
 * rotas protegidas
 */
const Main = () => import('../task/Main')
const TaskView = () => import('../views/Task')
const TasksView = () => import('../views/Tasks')
const TaskCreateView = () => import('../views/TaskCreate')

Vue.use(Router)

// TODO: integração OAuth
const router = new Router({
    mode: 'history',
    routes: [
        {
            title: 'Home',
            name: 'home',
            path: '/',
            meta: { auth: false },
            component: Home
        },
        {
            title: 'Login',
            name: 'login',
            path: '/login',
            component: UserLogin
        },
        {
            title: 'Tarefas',
            path: '/tasks',
            meta: { auth: true },
            component: Main,
            children: [
            {
                name: 'tasks.index',
                path: '',
                component: TasksView
            },
            {
                name: 'tasks.create',
                path: 'create',
                component: TaskCreateView
            },
            {
                name: 'task.show',
                path: ':id',
                props: true,
                component: TaskView
            },
        ]},
        {
            title: 'Cadastro de usuário',
            name: 'users.register',
            path: '/register',
            meta: { auth: false },
            component: UserRegister
        },
        {
            title: 'Não encontrado',
            name: 'notfound',
            path: '*',
            meta: { auth: false },
            component: NotFound
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (!auth.isAuthenticated()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })

            return
        }
    }

    next()
})

export default router