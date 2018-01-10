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
import Spots from './components/menu/Spots'

// user data imports
import UserDetails from './components/user/data/UserDetails'
import UserLocation from './components/user/data/UserLocation'
import UserHobbies from './components/user/data/UserHobbies'
import UserSpots from './components/user/data/UserSpots'
import UserPeople from './components/user/data/UserPeople'
import UserBadges from './components/user/data/UserBadges'
import UserSettings from './components/user/data/UserSettings'
import UserChallenges from './components/user/data/UserChallenges'
import UserChecks from './components/user/data/UserChecks'
import UserRanks from './components/user/data/UserRanks'

import '../styles/globals.scss'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.component('app-error', Error)
Vue.component('app-loader', Loader)

Vue.component('app-chat', Chat)
Vue.component('app-challenges', Challenges)
Vue.component('app-spots', Spots)

// user data components
Vue.component('user-details', UserDetails)
Vue.component('user-location', UserLocation)
Vue.component('user-hobbies', UserHobbies)
Vue.component('user-spots', UserSpots)
Vue.component('user-people', UserPeople)
Vue.component('user-badges', UserBadges)
Vue.component('user-settings', UserSettings)
Vue.component('user-challenges', UserChallenges)
Vue.component('user-checks', UserChecks)
Vue.component('user-ranks', UserRanks)

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
