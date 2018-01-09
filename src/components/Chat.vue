<template>
  <v-container>
    <v-dialog width="350px" v-model="dialog" id="chat-dialog">
      <v-btn class="pin" id="chat-btn" fab flat dark slot="activator">
        <v-icon id="chat-icn">fa-comments</v-icon>
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

  #chat-btn {
    background: $blue !important;
    height: 50px;
    width: 50px;

    #chat-icn {
      color: $orange;
      font-size: 35px;
      transform: rotate(-135deg);
    }
  }

</style>
