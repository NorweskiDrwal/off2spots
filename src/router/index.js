import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import SetupProfile from '@/components/user/SetupProfile'

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
      path: '/register/setup',
      name: 'SetupProfile',
      component: SetupProfile
    }
  ],
  mode: 'history'
})
