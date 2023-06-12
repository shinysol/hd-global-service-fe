import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import StorageExplorer from '../views/storage/StorageExplorer.vue'
import SharedStorage from '../views/storage/Shared.vue'
import RecyclesStorage from '../views/storage/Recycles.vue'
import MyStorage from '../views/storage/My.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/storage',
        name: 'StorageExplorer',
        component: StorageExplorer
    },
    {
        path: '/storage/my',
        name: 'MyStorage',
        component: MyStorage
    },
    {
        path: '/storage/shared',
        name: 'SharedStorage',
        component: SharedStorage
    },
    {
        path: '/storage/recycles',
        name: 'RecyclesStorage',
        component: RecyclesStorage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router