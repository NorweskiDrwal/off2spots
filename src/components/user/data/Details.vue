<template>
  <v-container>
    <v-dialog width="350px" v-model="dialog" id="details-dialog">
      <v-btn class="pin" id="details-btn" fab flat dark slot="activator">
        <v-icon id="details-icn">fingerprint</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field id="nickname" name="nickname" label="Nickname" v-model="nickname" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field id="firstName" name="firstName" label="First name" v-model="firstName"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field id="lastName" name="lastName" label="Last name" v-model="lastName"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field id="age" name="age" label="Age" v-model="age"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*required fields</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat :disabled="!nicknameAdded" @click.native="onAddUserDetails">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        nickname: '',
        firstName: '',
        lastName: '',
        age: ''
      }
    },
    computed: {
      nicknameAdded () { return this.nickname !== '' }
    },
    methods: {
      onAddUserDetails () {
        const details = {
          nickname: this.nickname,
          firstName: this.firstName,
          lastName: this.lastName,
          age: this.age
        }
        return this.$store.dispatch('addUserDetails', details)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  #details-btn {
    background: $blue !important;
    height: 50px;
    width: 50px;

    #details-icn {
      color: $orange;
      font-size: 45px;
      transform: rotate(-315deg);
    }
  }

</style>
