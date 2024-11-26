import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [

  // student route
  
   {
    path: '/student/login',
    name: 'login',
    component: () => import('../views/student/Login.vue')
  },

  {
    path: '/mobile/student/login',
    name: 'mobLogin',
    component: () => import('../views/student/mobile/LogIn.vue')
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
    path: '/mobile/student/dashboard',
    name: 'mobStudentDashboard',
    component: () => import('../views/student/mobile/DashBoard.vue')
  },

  {
    path: '/student/my-courses',
    name: 'studentCourses',
    component: () => import('../views/student/Courses.vue')
  },

  {
    path: '/mobile/student/my-courses',
    name: 'mobStudentCourses',
    component: () => import('../views/student/mobile/mobCourses.vue')
  },

  {
    path: '/student/assignments',
    name: 'studentAssignments',
    component: () => import('../views/student/Assignments.vue')
  },

  {
    path: '/mobile/student/assignments',
    name: 'mobStudentAssignments',
    component: () => import('../views/student/mobile/mobAssignments.vue')
  },

  {
    path: '/student/performance',
    name: 'studentPerformance',
    component: () => import('../views/student/Performance.vue')
  },

  {
    path: '/mobile/student/performance',
    name: 'mobStudentPerformance',
    component: () => import('../views/student/mobile/mobPerf.vue')
  },

  // lecturer route

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

  {
    path: '/lecturer/performance',
    name: 'lecturerPerformance',
    component: () => import('../views/lecturer/Performance.vue')
  },

  


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
