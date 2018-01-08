import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import Error from './components/shared/Error'
import Loader from './components/shared/Loader'
import Details from './components/user/data/Details'
import Location from './components/user/data/Location'
import Hobbies from './components/user/data/Hobbies'

import '../styles/globals.scss'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.component('app-error', Error)
Vue.component('app-loader', Loader)
Vue.component('user-details', Details)
Vue.component('user-location', Location)
Vue.component('user-hobbies', Hobbies)

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
  }
})
