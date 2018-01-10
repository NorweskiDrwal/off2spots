<template>
  <v-container>
    <v-dialog width="350px" v-model="dialog" id="people-dialog">
      <v-btn class="pin" id="people-btn" fab flat dark slot="activator">
        <v-icon id="people-icn">fa-users</v-icon>
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

  #people-btn {
    background: $blue !important;
    height: 50px;
    width: 50px;

    #people-icn {
      color: $orange;
      font-size: 30px;
      transform: rotate(-90deg);
    }
  }

</style>
