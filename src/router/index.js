import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    // component: HomeView
    component: () => import('../views/HomeView.vue')
  }, {
    path: '/drivers',
    name: 'drivers',
    component: () => import('../views/DriverView.vue')
  }, {
    path: '/schedule',
    name: 'schedule',
    component: () => import('../views/ScheduleView.vue')
  }, {
    path: '/standing',
    name: 'standing',
    component: () => import('../views/StandingView.vue')
  }, {
    path: '/team',
    name: 'team',
    component: () => import('../views/TeamView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
