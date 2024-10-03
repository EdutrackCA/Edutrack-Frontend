<template>
  <v-container>
    <SideBar />
    <div class="courses-section">
      <v-row class="text-center">
        <NavBar />
        <v-col cols="12" sm="12" class="text-left">
          <v-row>
            <v-col cols="12" sm="6">
              <h3 class="mt-5">Announcement</h3>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="3" class="text-right mt-5">
              <!-- <Upload /> -->
              <v-btn>
                Upload Document
                <v-icon v-show="open" @click="open=false, close=true">mdi-chevron-down</v-icon>
                <v-icon v-show="close" @click="open=true, close=false">mdi-chevron-up</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card class="pa-5 blue darken-2" dark>
            <v-card-title>Announcement 1</v-card-title>
            <v-card-text class="text-left">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident esse quod, magnam voluptas quibusdam molestias earum
                enim cumque, laborum eaque rem. Soluta nisi facilis rerum ex,
                laudantium accusantium quaerat perspiciatis?
              </h4>
            </v-card-text>
            <v-row class="mt-10">
              <v-col cols="12" sm="6">
                <v-card-text class="text-left">Today . 08:30am</v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card class="pa-5 blue darken-2" dark>
            <v-card-title>Announcement 2</v-card-title>
            <v-card-text class="text-left">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident esse quod, magnam voluptas quibusdam molestias earum
                enim cumque, laborum eaque rem. Soluta nisi facilis rerum ex,
                laudantium accusantium quaerat perspiciatis?
              </h4>
            </v-card-text>
            <v-row class="mt-10">
              <v-col cols="12" sm="6">
                <v-card-text class="text-left">02 Aug 24 . 20:30am</v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

<!-- Schedule -->
      <v-row class="pa-5">
        <v-col cols="12" class="">
          <h3>Weekly Schedule</h3>
        </v-col>
      <Schedule />
      </v-row>
    </div>
  </v-container>
</template>

<script>
import NavBar from "./NavBar.vue";
import Schedule from './Schedule.vue';
import SideBar from "./SideBar.vue";
// import Upload from "./Upload.vue";
export default {
  components: { SideBar, NavBar, Schedule  },
  data() {
       return {
      value: 65,
      open:true,
      close:false
    };
  },
};
</script>
