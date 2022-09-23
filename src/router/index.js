import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  }, {
    path: '/schedule',
    name: 'schedule',
    component: () => import('../views/ScheduleView.vue')
  }, {
    path: '/schedule/:round',
    name: 'scheduleInfo',
    component: () => import('../views/ScheduleInfoView.vue')
  }, {
    path: '/drivers',
    name: 'drivers',
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
