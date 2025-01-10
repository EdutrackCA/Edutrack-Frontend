<template>
  <v-container class="pa-10">
    <SideBar />
    <v-row>
      <v-col cols="12" sm="6">
        <h2>Performance Tracking</h2>
      </v-col>
      <v-col cols="12" sm="6">
            <v-text-field outlined dense type="text" placeholder="search for student here..." prepend-icon="mdi-magnify"></v-text-field>
          </v-col>
      
      <v-col cols="12" sm="12" class="mt-7">
        <h3>Week</h3>
      </v-col>
      <v-col cols="12" sm="2">
        <h4>Start <v-icon small>mdi-information-outline</v-icon></h4>
        <v-text-field outlined dense type="number"></v-text-field>
      </v-col>
      <v-col cols="12" sm="2">
        <h4>Stop <v-icon small>mdi-information-outline</v-icon></h4>
        <v-text-field outlined dense type="number"></v-text-field>
      </v-col>
    </v-row>
    <v-row>

    </v-row>

    <!-- Virtualization -->
    <v-row class="pa-10">
      <v-card width="100vw">
        <v-row class="px-5 pt-10">
          <v-col cols="12" sm="2" class="mt-2">
            <span>Course Code</span>
          </v-col>
          <v-col cols="12" sm="2">
            <v-text-field outlined dense type="text"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="2" class="mt-2">
            <span>Week</span>
          </v-col>
          <v-col cols="12" sm="2">
            <v-text-field outlined dense type="number"></v-text-field>
          </v-col>
        </v-row>
        <v-row class="pa-5 pt-0">
          <v-col cols="12" sm="6">
            <h4 class="text-right blue--text text--darken-4">Bar chart</h4>
            <v-card class="pa-10" outlined>
              <BarChart />
            </v-card>
          </v-col>
          <!-- Pie -->
          <v-col cols="12" sm="6">
            <h4 class="blue--text text--darken-4">Pie chart</h4>
            <v-card class="pa-10" outlined>
              <PieChart />
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-row>

    <!-- Course Overall Performance -->
    <v-row class="pa-10 pt-0">
      <v-col cols="12" sm="12" class="text-left">
        <h3>Course Overall performance</h3>
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
  </v-container>
</template>

<script>
import SideBar from "@/components/lecturer/SideBar.vue";
import BarChart from "@/components/student/BarChart.vue";
import PieChart from "@/components/student/PieChart.vue";
export default {
  components: { SideBar, BarChart, PieChart },
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
