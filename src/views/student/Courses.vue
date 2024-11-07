<template>
  <v-container class="pa-10">
    <SideBar />
    <div class="courses-section">
      <v-row class="text-center">
        <NavBar />
        <v-col cols="12" sm="6" class="text-left">
          <h3>My Courses</h3>
        </v-col>
        <v-col cols="12" sm="5" class="text-right">
          <h5 class="font-weight-regular">Sort by A-Z</h5>
        </v-col>
        <v-col cols="12" sm="1" class="text-right">
          <v-btn small v-show="grid" @click="(grid = false), (list = true)"
            ><v-icon>mdi-format-list-bulleted</v-icon></v-btn
          >
          <v-btn small v-show="list" @click="(grid = true), (list = false)"
            ><v-icon>mdi-apps</v-icon></v-btn
          >
        </v-col>

        <!-- My Courses -->
        <v-col
          cols="12"
          sm="4"
          v-for="(item, index) in items"
          :key="index"
          v-show="grid"
        >
          <v-card class="ma-2 blue darken-2 clickable-card" flat dark link>
            <v-card-title>ICT 504</v-card-title>
            <v-card-text class="text-left"
              >Introduction To Neural Network</v-card-text
            >
            <v-row class="mt-10">
              <v-col cols="12" sm="6">
                <v-card-text class="text-left">Engr. Charles</v-card-text>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-center">
                  <v-progress-circular
                    :value="progressValue"
                    :size="60"
                    :width="8"
                    color="white"
                  >
                    {{ progressValue }}%
                  </v-progress-circular>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" v-show="list">
          <v-row class="text-left pa-3">
            <v-col cols="12" sm="3"> Name </v-col>

            <v-col cols="12" sm="3"> Title </v-col>

            <v-col cols="12" sm="3"> Lecturer's Name </v-col>

            <v-col cols="12" sm="3"> Performance Progress </v-col>
          </v-row>

          <v-card
            class="blue darken-2 pa-5 mt-5"
            flat
            dark
            link
            v-for="(item, index) in items"
            :key="index"
          >
            <v-row class="text-left">
              <v-col cols="12" sm="3">
                <h4>ICT 504</h4>
              </v-col>

              <v-col cols="12" sm="3">
                <h4>Introduction To Neural Network</h4>
              </v-col>

              <v-col cols="12" sm="3">
                <h4>Engr. Charles</h4>
              </v-col>

              <v-col cols="12" sm="3">
                <h5>{{ progressValue }}%</h5>
                <div class="text-center">
                  <v-progress-linear
                    :value="progressValue"
                    :size="60"
                    :width="8"
                    color="white"
                  >
                  </v-progress-linear>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import NavBar from "../../components/student/NavBar.vue";
import SideBar from "../../components/student/SideBar.vue";
export default {
  components: { SideBar, NavBar },
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

<style scoped>
.clickable-card {
  cursor: pointer;
  transition: transform 0.3s;
}

.clickable-card:hover {
  transform: scale(1.05);
}

.scrollable-card {
  height: 300px; /* Fixed height for the card */
  overflow: auto; /* Hide overflow outside of this height */
}

.scrollable-content {
  max-height: 100%; /* Ensures content takes up available height */
  overflow-y: auto; /* Enables vertical scrolling */
}

.extra-small-chip {
  font-size: 8px; /* Adjust font size */
  height: 15px; /* Set a smaller height */
  padding: 0 6px; /* Reduce padding */
  border-radius: 12px; /* Adjust border-radius for a rounded look */
  color: red;
}
</style>
