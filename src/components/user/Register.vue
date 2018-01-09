<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm8 offset-sm2>
        <app-error style="color: red;" @dismissed="onClose" :text="error.message"></app-error>
      </v-flex>
    </v-layout>

    <div class="small-bg bg circle pin"></div>
    <div class="medium-bg bg circle pin"></div>
    <div class="big-bg bg circle pin"></div>
    <div class="reg-bg bg pin" id="register-btn"></div>
    <div class="log-bg bg pin" id="register-btn"></div>

    <div class="medium circle pin" id="medium-circle"></div>
    <div class="small circle pin register--active" id="small-circle"></div>
    <div class="big circle pin register--active" id="big-circle"></div>

    <div class="main-bg bg circle pin"></div>
    <app-loader v-if="loading"></app-loader>
    <div class="main circle pin" id="main-circle" style="cursor: pointer;" @click="onRegister" :disabled="loading" :loading="loading">
      <v-btn class="circle pin main-btn next-btn-text" flat light>next</v-btn>
    </div>

  <!-- -->
    <form class="form pin">
      <input class="field" id="email" name="email" type="email" label="Mail" v-model="email" placeholder="email" required />
      <input class="field" id="password" name="password" type="password" label="Password" v-model="password" placeholder="password" required />
    </form>
  <!-- -->

    <div class="log pin center" id="login-btn" style="cursor: pointer;" @click="switchToLog">
      <p class="sign-btn-text">SignIn</p>
    </div>
    <div class="reg pin center" id="register-btn" style="cursor: pointer;">
      <p class="sign-btn-text">SignUp</p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () { return this.$store.getters.user },
    error () { return this.$store.getters.error },
    loading () { return this.$store.getters.loading }
  },
  watch: {
    user (value) { if (value !== null && value !== undefined) { this.$router.push('/profile/setup') } }
  },
  methods: {
    switchToLog () { this.$router.push('/login') },
    onRegister () { this.$store.dispatch('registerUser', {email: this.email, password: this.password}) },
    onClose () { this.$store.dispatch('clearError') }
  }
}
</script>
