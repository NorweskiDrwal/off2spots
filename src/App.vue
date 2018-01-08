<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    userIsAuthenticated () { return this.$store.getters.user !== null && this.$store.getters.user !== undefined }
  }
</script>
