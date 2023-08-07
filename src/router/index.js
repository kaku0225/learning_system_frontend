import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import HomeView from '../views/HomeView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'
import BookingView from '../views/BookingView.vue'
import BookingSearchView from '../views/BookingSearchView.vue'
import AssignmentReview from '../views/AssignmentReview.vue'
import LearningRecord from '../views/LearningRecord.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sign_up',
      name: 'sing_up',
      component: SignUpView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/reset_password',
      name: 'reset_password',
      component: ResetPasswordView
    },
    {
      path: '/booking',
      name: 'booking',
      component: BookingView
    },
    {
      path: '/booking_search',
      name: 'booking_search',
      component: BookingSearchView
    },
    {
      path: '/assignment_review',
      name: 'assignment_review',
      component: AssignmentReview
    },
    {
      path: '/learning_record',
      name: 'learning_record',
      component: LearningRecord
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
