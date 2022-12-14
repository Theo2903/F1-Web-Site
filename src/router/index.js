import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  }, {
    path: '/drivers',
    name: 'drivers',
    component: () => import('../views/StandingView.vue')
  }, {
    path: '/teams',
    name: 'team',
    component: () => import('../views/TeamView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
