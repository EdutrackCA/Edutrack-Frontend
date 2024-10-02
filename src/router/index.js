import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'SignupView',
  //   component: SignupView
  // },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },

  {
    path: '/',
    name: 'studentSignup',
    component: () => import('../views/SignupView.vue')
  },

  {
    path: '/student/dashboard',
    name: 'studentDashboard',
    component: () => import('../views/student/DashBoard.vue')
  },

  {
    path: '/lecturer/dashboard',
    name: 'lecturerDashboard',
    component: () => import('../views/lecturer/DashBoard.vue')
  },

  {
    path: '/student/performance',
    name: 'studentPerformance',
    component: () => import('../views/student/Performance.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
