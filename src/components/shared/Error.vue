<template>
  <v-alert id="error-msg" color="white--text" dismissible @input="onClose" :value="true">
    {{ text }}
  </v-alert>
</template>

<script>
  export default {
    props: ['text'],
    methods: {
      onClose () {
        this.$emit('dismissed')
      }
    }
  }
</script>

