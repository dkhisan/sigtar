import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/main/Home'
import userRegister from '../components/user/Register'
import notFound from '../components/main/NotFound'
import mainTasks from '../components/task/Main'
import tasks from '../components/task/Tasks'
import task from '../components/task/Task'
import createTask from '../components/task/Create'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            title: 'Home',
            name: 'home',
            path: '/',
            component: home
        },
        {
            path: '/tasks',
            component: mainTasks,
            children: [
                {
                    title: 'Tasks',
                    name: 'tasks',
                    path: '',
                    component: tasks
                },
                {
                    name: 'task.create',
                    path: 'create',
                    component: createTask
                },
                {
                    name: 'task.show',
                    path: ':id',
                    component: task,
                    props: true
                }
            ]
        },
        {
            title: 'Cadastro de usuário',
            name: 'user.register',
            path: '/register',
            component: userRegister
        },
        {
            title: 'Not Found',
            name: 'notfound',
            path: '*',
            component: notFound
        }
    ]
})

export default router