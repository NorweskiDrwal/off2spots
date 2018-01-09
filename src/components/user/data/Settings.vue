<template>
  <v-container>
    <v-dialog width="350px" v-model="dialog" id="settings-dialog">
      <v-btn class="pin" id="settings-btn" fab flat dark slot="activator">
        <v-icon id="settings-icn">settings</v-icon>
      </v-btn>
      <v-card>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false
      }
    },
    computed: {},
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  #settings-btn {
    background: $blue !important;
    height: 50px;
    width: 50px;

    #settings-icn {
      color: $orange;
      font-size: 35px;
      transform: rotate(-225deg);
    }
  }

</style>
