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

      <!-- Course Management -->
      <v-row class="pa-5">
        <v-col cols="12" class="">
          <h3>Course Management</h3>
        </v-col>
        <course-management />
         
      </v-row>

      <!-- Assignment Overview -->
      <v-row class="pa-5">
        <v-col cols="12" class="">
          <h3>Assignment Overview</h3>
        </v-col>
        <assignment-overview />
      </v-row>

      <!-- performance tracking -->
      <v-row class="pa-5">
        <v-col cols="12" class="">
          <h3>Performance  Tracking</h3>
        </v-col>
        <Performance />
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Performance from './Performance.vue';
import AssignmentOverview from './AssignmentOverview.vue';
import CourseManagement from './CourseManagement.vue';
import NavBar from "./NavBar.vue";
import Schedule from './Schedule.vue';
import SideBar from "./SideBar.vue";
// import Upload from "./Upload.vue";
export default {
  components: { SideBar, NavBar, Schedule, AssignmentOverview, CourseManagement, Performance  },
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

