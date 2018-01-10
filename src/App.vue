<template>
  <div>

    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        userAuth: false
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }
</script>
