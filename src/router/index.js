import { createRouter, createWebHistory } from 'vue-router'

import WithNavLayout from '../layouts/WithNav.vue'
import WithoutNavLayout from '../layouts/WithoutNav.vue'
import AdminInterface from '../layouts/AdminInterface.vue'

import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import HomeView from '../views/HomeView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'
import BookingView from '../views/BookingView.vue'
import BookingSearchView from '../views/BookingSearchView.vue'
import AssignmentReview from '../views/AssignmentReview.vue'
import LearningRecord from '../views/LearningRecord.vue'

import AdminHomeView from '../views/AdminHomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: WithNavLayout },
      component: HomeView
    },
    {
      path: '/sign_up',
      name: 'sing_up',
      meta: { layout: WithoutNavLayout },
      component: SignUpView
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: WithoutNavLayout },
      component: LoginView
    },
    {
      path: '/reset_password',
      name: 'reset_password',
      meta: { layout: WithoutNavLayout },
      component: ResetPasswordView
    },
    {
      path: '/booking',
      name: 'booking',
      meta: { layout: WithNavLayout },
      component: BookingView
    },
    {
      path: '/booking_search',
      name: 'booking_search',
      meta: { layout: WithNavLayout },
      component: BookingSearchView
    },
    {
      path: '/assignment_review',
      name: 'assignment_review',
      meta: { layout: WithNavLayout },
      component: AssignmentReview
    },
    {
      path: '/learning_record',
      name: 'learning_record',
      meta: { layout: WithNavLayout },
      component: LearningRecord
    },
    {
      path: '/back_interface',
      name: 'back_interface',
      meta: { layout: AdminInterface },
      component: AdminHomeView
    }
    // {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
