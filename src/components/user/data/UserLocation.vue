<template>
  <v-container>
    <v-dialog width="350px" v-model="dialog">
      <v-btn class="pin" id="location-btn" fab flat dark slot="activator">
        <v-icon id="location-icn">location_on</v-icon>
      </v-btn>
      <v-card>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card-title>Edit Meetup Date</v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12>
              <template>
                <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
                <v-btn class="blue--text darken-1" flat @click.native="">Save</v-btn>
              </template>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    props: ['location'],
    data () {
      return {
        dialog: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  #location-btn {
    background: $blue !important;
    height: 50px;
    width: 50px;
    
    #location-icn {
      color: $orange;
      font-size: 45px;
      transform: rotate(-225deg);
    }  
  }

</style>
