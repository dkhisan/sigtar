import Vue from 'vue'
import Router from 'vue-router'

/*
 * rotas de livre acesso
 */
const UserRegister = () => import('../views/UserRegister')
const UserLogin = () => import('../views/UserLogin')
const NotFound = () => import('../views/NotFound')

/*
 * rotas protegidas (auth)
 */
const Home = () => import('../views/Home')
const Main = () => import('../task/Main')
const TaskView = () => import('../views/Task')
const TasksView = () => import('../views/Tasks')
const TaskCreateView = () => import('../views/TaskCreate')

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            title: 'Home',
            path: '/',
            meta: { auth: true },
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            redirect: '/'
        },
        {
            title: 'Login',
            name: 'login',
            path: '/login',
            beforeEnter: authRedirect,
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
            beforeEnter: authRedirect,
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
        if (!_auth.isAuthenticated()) {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    }

    next()
})

function authRedirect(to, from, next) {
    if (_auth.isAuthenticated()) {
        next('/home')
    }

    next()
}

export default router