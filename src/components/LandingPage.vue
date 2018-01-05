<template>
  <div>
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

    <div class="log pin center" id="login-btn" style="cursor: pointer;" @click="switchToLog">
      <p class="sign-btn-text">SignIn</p>
    </div>
    <div class="reg pin center" id="register-btn" style="cursor: pointer;" @click="switchToReg">
      <p class="sign-btn-text">SignUp</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data () {
    return {
    }
  },
  methods: {
    switchToLog () {
      this.$router.push('/login')
    },
    switchToReg () {
      this.$router.push('/register')
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
