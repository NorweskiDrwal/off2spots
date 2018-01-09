<template>
  <div>
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
      userAuth: false
    }
  },
  methods: {
    switchToLog () {
      this.$router.push('/login')
    },
    switchToReg () {
      this.$router.push('/register')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
