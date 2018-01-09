<template>
  <v-app>
    <div class="body" @click="explode = false">

    <!-- menu hamburger button -->
      <div id="menu-hamburger" class="circle">
        <v-btn id="menu-hamburger-btn" class="pin" fab dark flat title="Open menu">
          <v-icon color="white" class="pin" medium>menu</v-icon>
        </v-btn>
      </div>
    <!-- end menu hamburger button -->

    <!-- main -->
      <div class="main-bg bge circle pin" :class="{ explodeBg: explode }"></div>
      <v-progress-circular class="pin loader" indeterminate :size="171" :width="4" v-if="loading"></v-progress-circular>
      <div class="main-main circle pin" id="main-circle" :style="{ backgroundImage: 'linear-gradient(to bottom, rgba(153,119,146,0.6), rgba(153,119,146,0.6)), url(' + avatar + ')' }">
        <v-btn class="circle pin main-btn" flat dark @mouseover="explode = true"> {{ btnText }} </v-btn>
      </div>
    <!-- end main -->

    <!-- setup menu -->
      <div id="control-panel">
      <!-- avatar -->
        <div class="panel-item-axl pin" :class="{ explodePanel: explode }" id="avatar-axl">
          <div class="panel-item circle" @mouseover="btnText = 'avatar'" @mouseout="btnText = ''">
            <v-btn class="pin" id="avatar-btn" fab flat dark @click="onPickFile">
              <v-icon id="avatar-icn">face</v-icon>
            </v-btn>
            <input type="file" style="display:none" ref="fileInput" accept="image/*" @change="pickAvatar">
          </div>
        </div>
      <!-- end avatar -->
      <!-- hobbies -->
        <div class="panel-item-axl pin" :class="{ explodePanel: explode }" id="hobbies-axl">
          <div class="panel-item circle" @mouseover="btnText = 'hobbies'" @mouseout="btnText = ''">
            <user-hobbies></user-hobbies>
          </div>
        </div>
      <!--end hobbies -->
      <!-- location -->
        <div class="panel-item-axl pin" :class="{ explodePanel: explode }" id="location-axl">
          <div class="panel-item circle" @mouseover="btnText = 'location'" @mouseout="btnText = ''">
            <user-location></user-location>
          </div>
        </div>
      <!-- end location -->
      <!-- details -->
        <div class="panel-item-axl pin" :class="{ explodePanel: explode }" id="details-axl">
          <div class="panel-item circle" @mouseover="btnText = 'details'" @mouseout="btnText = ''">
            <user-details></user-details>
          </div>
        </div>
      <!-- end details -->
      </div>
    <!-- end setup menu -->

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

    </div>
  </v-app>
</template>

<script>
export default {
  name: 'ProfileSetup',
  data () {
    return {
      avatar: '',
      btnText: '',
      explode: false,
      image: null
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
    onPickFile () { this.$refs.fileInput.click() },
    pickAvatar (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.avatar = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }
  }
}
</script>

<style lang="scss">

  #avatar-btn {
    background: $blue !important;
    height: 50px;
    width: 50px;

    #avatar-icn {
      color: $orange;
      font-size: 45px;
      transform: rotate(-45deg);
    }
  }

</style>
