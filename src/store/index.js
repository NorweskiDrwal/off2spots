import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null,
    loadedUserData: [
      {
        id: '',
        avatar: '',
        nickname: '',
        firstName: '',
        lastName: '',
        age: '',
        city: '',
        distance: '',
        hobbies: ''
      }
    ],
    userComponentChallenge: '',
    userComponentSpots: ''
  },
  mutations: {
    setUser (state, payload) { state.user = payload },
    setLoading (state, payload) { state.loading = payload },
    setError (state, payload) { state.error = payload },
    clearError (state) { state.error = null },
    addUserDetails (state, payload) { state.loadedUserData.push(payload) },
    updateUserComponentChallenge (state, payload) { state.userComponentChallenge = payload },
    updateUserComponentSpots (state, payload) { state.userComponentSpots = payload }
  },
  actions: {
  // register user with firebase
    registerUser ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            nickname: '',
            firstName: '',
            lastName: '',
            age: '',
            city: '',
            distance: '',
            hobbies: []
          }
          commit('setUser', newUser)
        })
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
  // login user with firebase
    loginUser ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            nickname: '',
            firstName: '',
            lastName: '',
            age: '',
            city: '',
            distance: '',
            hobbies: []
          }
          commit('setUser', newUser)
        })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        })
    },
    autoLogin ({commit}, payload) {
      commit('setUser', {id: payload.uid})
    },
    addUserDetails ({commit}, payload) {
      const userDetails = {
        nickname: payload.nickname,
        firstName: payload.firstName,
        lastName: payload.lastName,
        age: payload.age
      }
      firebase.database().ref('users').push(userDetails)
        .then((data) => {
          console.log(data)
          commit('addUserDetails', userDetails)
        })
        .catch((error) => {
          console.log(error)
        })
      // reach out to firebase and store it
    },
    clearError ({commit}) { commit('clearError') },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    loading (state) { return state.loading },
    error (state) { return state.error },
    user (state) { return state.user }
  }
})
