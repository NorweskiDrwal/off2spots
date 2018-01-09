import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'

import Error from './components/shared/Error'
import Loader from './components/shared/Loader'

import Chat from './components/Chat'
import Challenges from './components/challenge/Challenges'

// user data imports
import Details from './components/user/data/Details'
import Location from './components/user/data/Location'
import Hobbies from './components/user/data/Hobbies'
import Spots from './components/user/data/Spots'
import People from './components/user/data/People'
import Badges from './components/user/data/Badges'
import Settings from './components/user/data/Settings'
import UserChallenges from './components/user/data/UserChallenges'
import Checks from './components/user/data/Checks'
import Ranks from './components/user/data/Ranks'

import '../styles/globals.scss'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.component('app-error', Error)
Vue.component('app-loader', Loader)

Vue.component('app-chat', Chat)
Vue.component('app-challenges', Challenges)

// user data components
Vue.component('user-details', Details)
Vue.component('user-location', Location)
Vue.component('user-hobbies', Hobbies)
Vue.component('user-spots', Spots)
Vue.component('user-people', People)
Vue.component('user-badges', Badges)
Vue.component('user-settings', Settings)
Vue.component('user-challenges', UserChallenges)
Vue.component('user-checks', Checks)
Vue.component('user-ranks', Ranks)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCHHkP23oRqJfSI9Eb0_hnPotVn1a3y75c',
      authDomain: 'off-2-spots.firebaseapp.com',
      databaseURL: 'https://off-2-spots.firebaseio.com',
      projectId: 'off-2-spots',
      storageBucket: 'off-2-spots.appspot.com',
      messagingSenderId: '246714110041'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoLogin', user)
      }
    })
  }
})
