import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/main/Home'
import notfound from '../components/main/NotFound'
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
            title: 'Tasks',
            name: 'tasks',
            path: '/tasks',
            component: tasks
        },
        {
            title: 'Tasks',
            name: 'create-task',
            path: '/tasks/create',
            component: createTask
        },
        {
            name: 'task',
            path: '/tasks/:id',
            component: task,
            props: true
        },
        {
            title: 'Not Found',
            name: 'notfound',
            path: '*',
            component: notfound
        }
    ]
})

export default router