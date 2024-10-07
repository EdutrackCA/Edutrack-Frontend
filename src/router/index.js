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
    path: '/student/login',
    name: 'login',
    component: () => import('../views/student/Login.vue')
  },

  {
    path: '/',
    name: 'SignupView',
    component: () => import('../views/SignupView.vue')
  },

  {
    path: '/student/course-form',
    name: 'uploadCourse',
    component: () => import('../views/student/UploadCourse.vue')
  },
  {
    path: '/student/terms-and-condition',
    name: 'termsCondition',
    component: () => import('../views/student/TermsCondition.vue')
  },

  {
    path: '/student/dashboard',
    name: 'studentDashboard',
    component: () => import('../views/student/DashBoard.vue')
  },

  {
    path: '/student/performance',
    name: 'studentPerformance',
    component: () => import('../views/student/Performance.vue')
  },

  {
    path: '/lecturer/terms-and-condition',
    name: 'termsCondition',
    component: () => import('../views/lecturer/TermsCondition.vue')
  },

  {
    path: '/lecturer/login',
    name: 'login',
    component: () => import('../views/lecturer/Login.vue')
  },

  {
    path: '/lecturer/dashboard',
    name: 'lecturerDashboard',
    component: () => import('../views/lecturer/DashBoard.vue')
  },

  


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
