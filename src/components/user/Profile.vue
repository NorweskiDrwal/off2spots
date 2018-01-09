<template>
  <v-app>

    <!-- menu hamburger button -->
      <div id="menu-hamburger" class="circle">
        <v-btn id="menu-hamburger-btn" class="pin" fab dark flat title="Open menu" @click="onOpenDrawer">
          <v-icon color="white" class="pin" medium>menu</v-icon>
        </v-btn>
      </div>
    <!-- end menu hamburger button -->

    <div class="body" @click="explode = false">
      <div draggable>
        <div class="main-bg bge circle pin" :class="{ explodeBg: explode }"></div>
        <v-progress-circular class="pin loader" indeterminate :size="171" :width="4" v-if="loading"></v-progress-circular>
        <div class="main-main circle pin" id="main-circle">
          <v-btn class="circle pin main-btn" flat dark @mouseover="explode = true"> {{ btnText }} </v-btn>
        </div>
      </div>

    <!-- profile -->
      <div id="control-panel">
      <!-- spots -->
        <div class="panel-item-axl pin" :class="{ explodePanel: explode }" id="spots-axl">
          <div class="panel-item circle" @mouseover="btnText = 'spots'" @mouseout="btnText = ''">
            <user-spots></user-spots>
          </div>
        </div>
      <!-- end spots -->

      <!-- people -->
        <div class="panel-item-axl pin" :class="{ explodePanel: explode }" id="people-axl">
          <div class="panel-item circle" @mouseover="btnText = 'people'" @mouseout="btnText = ''">
            <user-people></user-people>
          </div>
        </div>
      <!-- end people -->

      <!-- chat -->
        <div class="panel-item-axl pin" :class="{ explodePanel: explode }" id="chat-axl">
          <div class="panel-item circle" @mouseover="btnText = 'chat'" @mouseout="btnText = ''">
            <app-chat></app-chat>
          </div>
        </div>
      <!-- end chat -->

      <!-- badges -->
        <div class="panel-item-axl pin" :class="{ explodePanel: explode }" id="badges-axl">
          <div class="panel-item circle" @mouseover="btnText = 'badges'" @mouseout="btnText = ''">
            <user-badges></user-badges>
          </div>
        </div>
      <!-- end badges -->

      <!-- settings -->
        <div class="panel-item-axl pin" :class="{ explodePanel: explode }" id="settings-axl">
          <div class="panel-item circle" @mouseover="btnText = 'settings'" @mouseout="btnText = ''">
            <user-settings></user-settings>
          </div>
        </div>
      <!-- end settings -->

      <!-- challenges -->
        <div class="panel-item-axl pin" :class="{ explodePanel: explode }" id="challenge-axl">
          <div class="panel-item circle" @mouseover="btnText = 'challenge'" @mouseout="btnText = ''">
            <user-challenges></user-challenges>
          </div>
        </div>
      <!-- end challenges -->

      </div>
    <!-- end profile menu -->

    <!-- logout -->
      <div id="logout" class="circle">
        <v-btn id="logout-btn" class="pin" fab flat title="Logout" @click="onLogout">
          <v-icon color="white" class="pin" medium>power_settings_new</v-icon>
        </v-btn>
      </div>
    <!-- end logout -->

    </div>
  </v-app>
</template>

<script>
export default {
  name: 'Profile',
  props: ['id'],
  data () {
    return {
      btnText: '',
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
    },
    onOpenDrawer () {}
  }
}
</script>

<style lang="scss">
</style>
