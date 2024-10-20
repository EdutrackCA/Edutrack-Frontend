<template>
  <v-container class="pa-3 pt-8 pa-0" fluid>
    <SideBar />
    <v-layout class="text-center">
      <NavBar />
      <v-flex xs12>
        <h3 class="text-left">My Courses</h3>
      </v-flex>
    </v-layout>

    <!-- My Course Section -->
    <v-layout class="mt-5">
      <v-flex xs12>
        <v-slide-group>
          <v-slide-item v-for="(item, index) in items" :key="index">
            <v-card
              class="pa-3 ma-2 blue darken-2 clickable-card"
              flat
              dark
              link
            >
              <v-card-title>ICT 504</v-card-title>
              <v-card-text class="text-left">
                Introduction To Neural Network
              </v-card-text>
              <v-layout>
                <v-flex xs12>
                  <v-card-text class="text-left">Prof.A.B.Medel</v-card-text>
                  <div class="text-right">
                    <v-progress-circular
                      :value="progressValue"
                      :size="60"
                      :width="8"
                      color="white"
                    >
                      {{ progressValue }}%
                    </v-progress-circular>
                  </div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-flex>
    </v-layout>

    <div class="courses-section">
      <v-layout class="pt-5">
        <!-- recent activities -->
        <v-flex xs12>
          <h3>Recent Activities</h3>
          <v-card outlined class="pa-5 mt-5 scrollable-card" style="border: 1px solid blue">
            <v-layout>
              <v-flex xs12>
                <v-card
                  class="pa-5 py-3 blue lighten-1 mt-2 scrollable-content"
                  dark
                  link
                  flat
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <v-layout>
                    <v-flex xs12>
                      <h3>Submitted ICT 502 Assignment</h3>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout> 
        <!-- Assignments -->
        <v-flex xs12 class="mt-5">
          <h3>Assignments</h3>
          <v-card outlined class="pa-3 mt-5 scrollable-card" style="border: 1px solid blue">
            <v-layout v-for="(item, index) in items" :key="index">
              <v-flex xs12>
                <v-card class="py-3 blue lighten-1 mt-2 scrollable-content" dark link flat>
                  <v-layout class="pa-2">
                    <v-flex xs2>
                      <v-card class="text-center blue darken-4 pa-2" flat>
                        <h5>ICT 504</h5>
                      </v-card>
                    </v-flex>

                    <v-flex xs9 class="ma-3 ml-4">
                      <v-layout row>
                        <v-flex xs12>
                          <h4>Introduction to Neural Network</h4>
                        </v-flex>
                        <v-flex xs4>
                          <h6 class="black--text darken-5 font-weight-light">Date Assigned</h6>
                          <h6>31-03-2024</h6>
                        </v-flex>
                        <v-flex xs5>
                          <h6 class="black--text darken-4 font-weight-light">Submission date</h6>
                          <h6>02-04-2024</h6>
                        </v-flex>

                        <v-flex xs3>
                      <v-chip light class="extra-small-chip">not submitted</v-chip>
                    </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
import NavBar from "./NavBar.vue";
import SideBar from "./SideBar.vue";
export default {
  components: { SideBar, NavBar },
  data() {
    return {
      progressValue: 65,
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
