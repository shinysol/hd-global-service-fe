import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import LoginVue from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import StorageExplorer from '../views/storage/StorageExplorer.vue'
import SharedStorage from '../views/storage/Shared.vue'
import RecyclesStorage from '../views/storage/Recycles.vue'
import MyStorage from '../views/storage/My.vue'
import { getUserInfo } from '../states/localStorage/userLoginStore'
import LogoutVue from '../views/Logout.vue'
console.log(getUserInfo().userId);
const routes: Array<RouteRecordRaw> =
    [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginVue,
        },
        {
            path: '/logout',
            name: 'Logout',
            component: LogoutVue,
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup,
        },
        {
            path: '/storage',
            name: 'StorageExplorer',
            component: StorageExplorer,
            meta: { requiresAuth: true }
        },
        {
            path: '/storage/my',
            name: 'MyStorage',
            component: MyStorage,
            meta: { requiresAuth: true }
        },
        {
            path: '/storage/shared',
            name: 'SharedStorage',
            component: SharedStorage,
            meta: { requiresAuth: true }
        },
        {
            path: '/storage/recycles',
            name: 'RecyclesStorage',
            component: RecyclesStorage,
            meta: { requiresAuth: true }
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/'
        }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, _, next) => {
    const userId = getUserInfo().userId;

    if (to.meta.requiresAuth && !userId) {
        next('/login');
    } else if (to.path === '/login' && userId) {
        next('/');
    } else {
        next();
    }
})
export default router