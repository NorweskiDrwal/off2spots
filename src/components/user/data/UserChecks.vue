<template>
  <v-container>
    <v-dialog width="350px" v-model="dialog" id="checks-dialog">
      <v-btn class="pin" id="checks-btn" fab flat dark slot="activator">
        <v-icon id="checks-icn">beenhere</v-icon>
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

  #checks-btn {
    background: $blue !important;
    height: 50px;
    width: 50px;

    #checks-icn {
      color: $orange;
      font-size: 35px;
      transform: rotate(-315deg);
    }
  }

</style>
