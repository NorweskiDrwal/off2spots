<template>
  <div>
    <div class="main-bg bg circle pin"></div>
    <v-progress-circular class="pin loader" indeterminate :size="171" :width="4" v-if="loading"></v-progress-circular>
    <div class="main circle pin" id="main-circle"></div>    
  </div>
</template>

<script>
export default {
  name: 'SetupProfile',
  data () {
    return {}
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style lang="scss">
</style>