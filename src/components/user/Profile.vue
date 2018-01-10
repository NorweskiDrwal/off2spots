<template>
  <v-app>

    <!-- menu hamburger button -->
      <div id="menu-hamburger" class="circle">
        <v-tooltip class="pin" right>
          <v-btn id="menu-hamburger-btn" class="pin" fab flat @click="drawer = !drawer, explode = false" slot="activator">
            <v-icon color="white" medium>menu</v-icon>
          </v-btn>
          <span class="tooltip">Open menu</span>
        </v-tooltip>
      </div>
    <!-- end menu hamburger button -->

    <v-navigation-drawer temporary v-model="drawer" light id="navigation-drawer" :stateless="componentChallengeState">
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" @click="updateComponentState">
          <v-list-tile-action style="text-align: center;">
            <v-icon class="drawer-item-icn">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="drawer-item-text"> {{ item.title }} </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <div class="body" @click="explode = false">
      <div>
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

      <!-- checks -->
        <div class="panel-item-axl pin" :class="{ explodePanel: explode }" id="checks-axl">
          <div class="panel-item circle" @mouseover="btnText = 'check-in'" @mouseout="btnText = ''">
            <user-checks></user-checks>
          </div>
        </div>
      <!-- end checks -->

      <!-- ranks -->
        <div class="panel-item-axl pin" :class="{ explodePanel: explode }" id="ranks-axl">
          <div class="panel-item circle" @mouseover="btnText = 'ranks'" @mouseout="btnText = ''">
            <user-ranks></user-ranks>
          </div>
        </div>
      <!-- end checks -->
      </div>
    <!-- end profile menu -->

    <!-- logout -->
      <div id="logout" class="circle">
        <v-tooltip class="pin" right>
          <v-btn id="logout-btn" class="pin" fab flat @click="onLogout" slot="activator">
            <v-icon color="white" medium>power_settings_new</v-icon>
          </v-btn>
          <span>Logout</span>
        </v-tooltip>
      </div>
    <!-- end logout -->

    <app-challenges v-model="componentChallengeState"></app-challenges>
    <app-spots v-model="componentSpotsState"></app-spots>



    </div>
  </v-app>
</template>

<script>
export default {
  name: 'Profile',
  props: ['id'],
  data () {
    return {
      thisOpen: true,
      btnText: '',
      explode: false,
      drawer: null,
      items: [
        { title: 'Spots', icon: 'bubble_chart' },
        { title: 'People', icon: 'fa-users' },
        { title: 'Chat', icon: 'fa-comments' },
        { title: 'Check-ins', icon: 'beenhere' },
        { title: 'Challenges', icon: 'fa-handshake-o' },
        { title: 'Trophies', icon: 'fa-shield' },
        { title: 'Rankings', icon: 'fa-cubes' },
        { title: 'Settings', icon: 'fa-cogs' }
      ]
    }
  },
  computed: {
    loading () { return this.$store.getters.loading },
    userData () { return this.$store.getters.loadedUserData(this.id) },
    componentChallengeState () { return this.$store.state.userComponentChallenge }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
    toSetup () {
      this.$router.push('/profile/setup')
    },
    updateComponentState () {
      console.log(this.items)
      this.$store.commit('updateUserComponentChallenge', true)
      this.$store.commit('updateUserSpotsChallenge', true)
    }
  }
}
</script>

<style lang="scss">
</style>
