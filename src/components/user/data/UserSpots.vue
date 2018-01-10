<template>
  <v-container>
    <v-dialog width="350px" v-model="dialog" id="spots-dialog">
      <v-btn class="pin" id="spots-btn" fab flat dark slot="activator">
        <v-icon id="spots-icn">bubble_chart</v-icon>
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

  #spots-btn {
    background: $blue !important;
    height: 50px;
    width: 50px;

    #spots-icn {
      color: $orange;
      font-size: 45px;
      transform: rotate(-45deg);
    }
  }

</style>
