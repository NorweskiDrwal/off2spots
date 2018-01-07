<template>
  <v-app>
    <div class="body" @click="explode = false">
      <div>
        <div class="main-bg bge circle pin" :class="{ explodeBg: explode }"></div>
        <v-progress-circular class="pin loader" indeterminate :size="171" :width="4" v-if="loading"></v-progress-circular>
        <div class="main-main circle pin" id="main-circle">
          <v-btn class="circle pin main-btn" flat dark @click="toSetup" @mouseover="explode = true"></v-btn>
        </div>    
      </div>

      <div id="logout" class="circle">
        <v-btn id="logout-btn" class="pin" fab flat title="Logout" @click="onLogout">
          <v-icon color="white" class="pin" medium>power_settings_new</v-icon>
        </v-btn>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'Profile',
  props: ['id'],
  data () {
    return {
      explode: false
    }
  },
  computed: {
    loading () { return this.$store.getters.loading },
    userData () { return this.$store.getters.loadedUserData(this.id) }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
    toSetup () {
      this.$router.push('/profile/setup')
    }
  }
}
</script>

<style lang="scss">
</style>