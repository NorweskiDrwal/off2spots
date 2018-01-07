import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import ProfileSetup from '@/components/user/ProfileSetup'
import Profile from '@/components/user/Profile'

import Guard from './guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile/setup',
      name: 'ProfileSetup',
      component: ProfileSetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: Guard
    }
  ],
  mode: 'history'
})
