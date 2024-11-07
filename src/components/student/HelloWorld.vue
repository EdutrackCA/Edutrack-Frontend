<template>
  <v-container class="pa-10">
    <SideBar />
    <div class="courses-section">
      <v-row class="text-center">
        <NavBar />
        <v-col cols="12" sm="12" class="text-left">
          <h3>My Courses</h3>
        </v-col>
        <v-col cols="12" sm="12">
          <v-slide-group>
          <v-slide-item v-for="(item, index) in items" :key="index">
            <v-card
              class="ma-2 blue darken-2 clickable-card"
              flat
              dark
              link
            >
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
          </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>

      <v-row class="pa-5">
        <!-- recent activities -->
        <v-col cols="12" sm="4">
          <h3>Recent Activities</h3>
          <v-card outlined class="pa-5 mt-5 scrollable-card" style="border: 1px solid blue">
            <v-row>
              <v-col cols="12" sm="12">
                <v-card class="pa-5 mt-2 py-3 blue lighten-1" dark link flat v-for="(item, index) in items" :key="index">
                  <v-row>
                    <v-col cols="12" sm="12">
                      <h5>Submitted ICT 502 Assignment</h5>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <!-- Assignments -->
        <v-col cols="12" sm="8">
          <h3>Assignments</h3>
          <v-card outlined class="pa-5 mt-5 scrollable-card" style="border: 1px solid blue">
            <v-row>
              <v-col cols="12" sm="12">
                <v-card class="pa-2 py-3 blue lighten-1 mt-2" dark link flat v-for="(item, index) in items" :key="index">
                  <v-row class="pa-2">
                    <v-col cols="12" sm="2">
                      <v-card class="text-center blue darken-4 pa-2" flat>
                        <h3>ICT 504</h3>
                      </v-card>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-row no-gutters>
                        <v-col cols="12" sm="12">
                          <h3>Introduction to Neural Network</h3>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <h5 class="black--text darken-4">Date Assigned</h5>
                          <h6 class="font-weight-regular">31-03-2024</h6>
                        </v-col>
                        <v-col cols="12" sm="5" class="text-right">
                          <h5 class="red--text darken-4">Submission date</h5>
                          <h6 class="font-weight-regular">02-04-2024</h6>
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col cols="12" sm="4" class="text-right pt-7">
                      <v-chip color="white" small><span class="red--text">not submitted</span></v-chip>
                    </v-col>

                  </v-row>
                </v-card>

              </v-col>
            </v-row>
            
          </v-card>
        </v-col>
      </v-row>
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

