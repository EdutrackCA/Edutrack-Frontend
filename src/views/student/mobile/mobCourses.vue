<template>
  <div>
    <SideBar />
    <v-container>
      <v-layout row class="pa-5">
        <v-flex xs12 class="text-center">
          <NavBar />
        </v-flex>
        <v-flex xs6>
          <h3 class="text-left">My Courses</h3>
        </v-flex>
        <v-flex xs4>
          <h5 class="font-weight-regular text-right mt-2">Sort by A-Z</h5>
        </v-flex>
        <v-flex xs2 class="text-right">
          <v-btn
            class="pa-2"
            height="30px"
            x-small
            v-show="grid"
            @click="(grid = false), (list = true)"
            ><v-icon>mdi-format-list-bulleted</v-icon></v-btn
          >
          <v-btn
            class="pa-2"
            height="30px"
            x-small
            v-show="list"
            @click="(grid = true), (list = false)"
            ><v-icon>mdi-apps</v-icon></v-btn
          >
        </v-flex>
      </v-layout>

      <!-- Display Cards in GridView -->
      <v-layout row class="pa-1">
        <v-flex
          xs6
          class=""
          v-for="(item, index) in items"
          :key="index"
          v-show="grid"
        >
          <v-card class="blue darken-2 ma-1" flat dark link>
            <v-card-title>ICT 504</v-card-title>
            <v-card-text class="text-left"
              >Introduction To Neural Network</v-card-text
            >
            <v-layout class="">
              <v-flex xs6>
                <v-card-text class="text-left">Engr. Charles</v-card-text>
              </v-flex>
              <v-flex xs6>
                <div class="text-center">
                  <v-progress-circular
                    :value="progressValue"
                    :size="55"
                    :width="6"
                    color="white"
                  >
                    {{ progressValue }}%
                  </v-progress-circular>
                </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>

<!-- Display Cards in ListView -->
<v-layout class="text-left pa-3"  v-show="list">
            <v-flex xs2><h6 class="">Name</h6></v-flex>

            <v-flex xs4><h6 class="">Title</h6></v-flex>

              <v-flex xs3><h6 class="text-center">Lecturer's Name</h6></v-flex>

              <v-flex xs3><h6 class="text-center">Performance Progress</h6></v-flex>
</v-layout>

      <v-layout row class="pa-1">
        <v-flex
          xs12
          class=""
          v-for="(item, index) in items"
          :key="index"
          v-show="list"
        >

          <v-card class="blue darken-2 ma-1 pa-2" flat dark link>
            <v-layout class="">
              <v-flex xs2>
                <h6 class="font-weight-regular">ICT 504</h6>
              </v-flex>

              <v-flex xs4>
                <h6 class="font-weight-regular">Introduction To Neural Network</h6>
              </v-flex>

              <v-flex xs3>
                <h6 class="font-weight-regular text-center">Engr. Charles</h6>
              </v-flex>

              <v-flex xs3>
                <h6>{{ progressValue }}%</h6>
                <div class="text-center">
                  <v-progress-linear
                    :value="progressValue"
                    :size="60"
                    :width="8"
                    color="white"
                  >
                  </v-progress-linear>
                </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
import SideBar from "@/components/student/mobile/SideBar.vue";
import NavBar from "@/components/student/mobile/NavBar.vue";
export default {
  components: {
    SideBar,
    NavBar,
  },
  data() {
    return {
      progressValue: 65,
      grid: true,
      list: false,
      items: [
        {
          title: "Card 1",
          description: "This is the description for card 1.",
          image: "https://via.placeholder.com/300x140",
        },
        {
          title: "Card 2",
          description: "This is the description for card 2.",
          image: "https://via.placeholder.com/300x140",
        },
        {
          title: "Card 3",
          description: "This is the description for card 3.",
          image: "https://via.placeholder.com/300x140",
        },
        {
          title: "Card 4",
          description: "This is the description for card 4.",
          image: "https://via.placeholder.com/300x140",
        },
        {
          title: "Card 5",
          description: "This is the description for card 4.",
          image: "https://via.placeholder.com/300x140",
        },
        {
          title: "Card 6",
          description: "This is the description for card 4.",
          image: "https://via.placeholder.com/300x140",
        },
        {
          title: "Card 7",
          description: "This is the description for card 4.",
          image: "https://via.placeholder.com/300x140",
        },
        {
          title: "Card 8",
          description: "This is the description for card 4.",
          image: "https://via.placeholder.com/300x140",
        },
        {
          title: "Card 9",
          description: "This is the description for card 4.",
          image: "https://via.placeholder.com/300x140",
        },
      ],
    };
  },
};
</script>
