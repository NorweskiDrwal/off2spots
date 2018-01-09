<template>
  <div>

    <p v-if="userAuth">You are not authenticated. Please log in</p>

    <div class="small-bg bg circle pin"></div>
    <div class="medium-bg bg circle pin"></div>
    <div class="big-bg bg circle pin"></div>
    <div class="main-bg bg circle pin"></div>
    <div class="reg-bg bg pin" id="register-btn"></div>
    <div class="log-bg bg pin" id="register-btn"></div>

    <app-loader v-if="loading"></app-loader>

    <div class="main circle pin" id="main-circle"></div>
    <div class="medium circle pin" id="medium-circle"></div>
    <div class="small circle pin" id="small-circle"></div>
    <div class="big circle pin" id="big-circle"></div>

    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        userAuth: false
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }
</script>
