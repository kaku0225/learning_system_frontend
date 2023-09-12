import { createRouter, createWebHistory } from 'vue-router'

// import { useQuery } from '@vue/apollo-composable';
import { useApolloClient } from '@vue/apollo-composable';
import gql from 'graphql-tag'

import WithNavLayout from '../layouts/WithNav.vue'
import WithoutNavLayout from '../layouts/WithoutNav.vue'
import AdminInterface from '../layouts/AdminInterface.vue'
import ClassAdviserInterface from '../layouts/ClassAdviserInterface.vue'

import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import HomeView from '../views/HomeView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'
import BookingView from '../views/BookingView.vue'
import BookingSearchView from '../views/BookingSearchView.vue'
import AssignmentReview from '../views/AssignmentReview.vue'
import LearningRecord from '../views/LearningRecord.vue'

import AdminHomeView from '../views/AdminHomeView.vue'
import AccountManagement from '../views/AccountManagement.vue'
import BranchSchoolManagement from '../views/BranchSchoolManagement.vue'

import ClassAdviserHoneView from '../views/ClassAdviserHomeView.vue'

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
      path: '/admin_interface',
      name: 'admin_interface',
      meta: { layout: AdminInterface },
      component: AdminHomeView,
    },
    {
      path: '/admin_interface/account_management',
      name: 'account_management',
      meta: { layout: AdminInterface },
      component: AccountManagement
    },
    {
      path: '/admin_interface/branch_school_management',
      name: 'BranchSchoolManagement',
      meta: { layout: AdminInterface },
      component: BranchSchoolManagement
    },
    {
      path: '/class_adviser_interface',
      name: 'class_adviser_interface',
      meta: { layout: ClassAdviserInterface },
      component: ClassAdviserHoneView
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



router.beforeEach(async (to) => {
  if(to.path === '/sign_up' || to.path === '/reset_password') {
    return
  }
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
  const { resolveClient } = useApolloClient();
  const client = resolveClient()

  const response = await client.query({
    query: gql`
      query CheckAuthentication($token: String!, $path: String!) {
        checkAuthentication(token: $token, path: $path){
          success
          path
        }
      }
    `,
    variables: {
      token,
      path: to.path,
    },
  });

  if (response.data.checkAuthentication.success) {
    return true
  } else {
    router.push(response.data.checkAuthentication.path);
  }
});

export default router
