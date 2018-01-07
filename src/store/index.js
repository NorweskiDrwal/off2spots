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
    ]
  },
  getters: {
    loading (state) { return state.loading },
    error (state) { return state.error },
    user (state) { return state.user }
  },
  mutations: {
    setUser (state, payload) { state.user = payload },
    setLoading (state, payload) { state.loading = payload },
    setError (state, payload) { state.error = payload },
    clearError (state) { state.error = null },
    setLoadedDetails (state, payload) { state.loadedUserData = payload },
    updateUser (state, payload) {
      const userData = state.loadedUserData.find(userData => {
        return userData.id === payload.id
      })
      if (payload.avatar) { userData.avatar = payload.avatar }
      if (payload.nickname) { userData.nickname = payload.nickname }
      if (payload.firstName) { userData.firstName = payload.firstName }
      if (payload.lastName) { userData.lastName = payload.lastName }
    }
  },
  actions: {
    registerUser ({commit, getters}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid
            }
            commit('setUser', newUser)
            const placeholder = 'gs://off-2-spots.appspot.com/user.png'
            const userData = {
              avatar: placeholder,
              nickname: 'Unknown',
              firstName: 'Unknown',
              lastName: 'Unknown',
              age: 'Unknown',
              city: 'Unknown',
              distance: 'Unknown',
              hobbies: 'Unknown'
            }
            firebase.database().ref('/users/' + user.uid).push(userData)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    loginUser ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              fbKeys: {}
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    fetchUserData ({commit, getters}) {
      commit('setLoading', true)
      firebase.database().ref('/users/' + getters.user.uid).once('value')
        .then(data => {
          const dataPairs = data.val()
          let swappedPairs = {}
          for (let key in dataPairs) {
            swappedPairs[dataPairs[key]] = key
          }
          const updatedUser = {
            id: getters.user.id,
            fbKeys: swappedPairs
          }
          commit('setLoading', false)
          commit('setUser', updatedUser)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    autoLogin ({commit}, payload) { commit('setUser', {id: payload.uid, fbKeys: {}}) },
    clearError ({commit}) { commit('clearError') },
    logout ({commit}) {
      commit('setLoading', true)
      firebase.auth().signOut()
      commit('setUser', null)
      commit('setLoading', false)
    }
  }
})
