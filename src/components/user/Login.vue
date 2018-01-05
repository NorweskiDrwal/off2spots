<template>
  <div>
    <div class="small-bg bg circle pin"></div>
    <div class="medium-bg bg circle pin"></div>
    <div class="big-bg bg circle pin"></div>
    <div class="reg-bg bg pin" id="register-btn"></div>
    <div class="log-bg bg pin" id="register-btn"></div>

    <div class="medium circle pin login--active" id="medium-circle"></div>
    <div class="small circle pin login--active" id="small-circle"></div>
    <div class="big circle pin" id="big-circle"></div>

    <div class="main-bg bg circle pin"></div>
    <v-progress-circular class="pin loader" indeterminate :size="171" :width="4" v-if="loading"></v-progress-circular>
    <div class="main circle pin center" id="main-circle" style="cursor: pointer;" @click="onLogin"><p class="next-btn-text">n e x t</p></div>

  <!-- -->
    <form class="form pin">
      <input class="field" type="email" label="Mail" v-model="email" placeholder="email" required />
      <input class="field" type="password" label="Password" v-model="password" placeholder="password" required />
    </form>
  <!-- -->

    <div class="log pin center" id="login-btn" style="cursor: pointer;">
      <p class="sign-btn-text">SignIn</p>
    </div>
    <div class="reg pin center" id="register-btn" style="cursor: pointer;" @click="switchToReg">
      <p class="sign-btn-text">SignUp</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    switchToReg () {
      this.$router.push('/register')
    },
    onLogin () {
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
