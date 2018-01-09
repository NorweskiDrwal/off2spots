<template>
  <v-container>
    <v-dialog width="350px" v-model="dialog" id="challenge-dialog">
      <v-btn class="pin" id="challenge-btn" fab flat dark slot="activator">
        <v-icon id="challenge-icn">fa-handshake-o </v-icon>
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

  #challenge-btn {
    background: $blue !important;
    height: 50px;
    width: 50px;

    #challenge-icn {
      color: $orange;
      font-size: 30px;
      transform: rotate(-270deg);
    }
  }

</style>
