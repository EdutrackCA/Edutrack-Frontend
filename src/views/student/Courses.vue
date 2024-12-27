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
          v-for="course in courses"
          :key="course.id"
          v-show="grid"
        >
          <v-card
            class="ma-2 blue darken-2 clickable-card"
            flat
            dark
            link
             :to="{ name: 'studentCoursesDetails', params: { course: course }, route: {} }"
          >
            <v-card-title>{{ course.title }}</v-card-title>
            <v-card-text class="text-left">{{
              course.description
            }}</v-card-text>
            <v-row class="mt-10">
              <v-col cols="12" sm="6">
                <v-card-text class="text-left">{{
                  course.lecturer
                }}</v-card-text>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-center">
                  <v-progress-circular
                    :value="course.progress"
                    :size="60"
                    :width="8"
                    color="white"
                  >
                    {{ course.progress }}%
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
            :to="`/student/my-courses/${course.id}`"
            v-for="(course, index) in courses"
            :key="index"
          >
            <v-row class="text-left">
              <v-col cols="12" sm="3">
                <h4>{{ course.title }}</h4>
              </v-col>

              <v-col cols="12" sm="3">
                <h4>{{ course.description }}</h4>
              </v-col>

              <v-col cols="12" sm="3">
                <h4>Engr. Charles</h4>
              </v-col>

              <v-col cols="12" sm="3">
                <h5>{{ course.progress }}%</h5>
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
      grid: true,
      list: false,
      courses: [
        {
          id: 1,
          title: "ICT 504",
          description: "Introduction to Neural Network",
          lecturer: "Engr. Charles",
          progress: 25,
        },
        {
          id: 2,
          title: "ICT 505",
          description: "Machine Learning Basics",
          lecturer: "Engr. Charles",
          progress: 50,
        },
        {
          id: 3,
          title: "ICT 506",
          description: "Deep Learning Fundamentals",
          lecturer: "Engr. Charles",
          progress: 65,
        },
        {
          id: 4,
          title: "ICT 504",
          description: "Introduction to Neural Network",
          lecturer: "Engr. Charles",
          progress: 100,
        },
        {
          id: 5,
          title: "ICT 506",
          description: "Deep Learning Fundamentals",
          lecturer: "Engr. Charles",
          progress: 70,
        },
        {
          id: 6,
          title: "ICT 504",
          description: "Introduction to Neural Network",
          lecturer: "Engr. Charles",
          progress: 90,
        },
        {
          id: 7,
          title: "ICT 505",
          description: "Machine Learning Basics",
          lecturer: "Engr. Charles",
          progress: 20,
        },
        {
          id: 8,
          title: "ICT 504",
          description: "Introduction to Neural Network",
          lecturer: "Engr. Charles",
          progress: 13,
        },
        {
          id: 9,
          title: "ICT 505",
          description: "Machine Learning Basics",
          lecturer: "Engr. Charles",
          progress: 65,
        },
      ],
    };
  },
};
</script>

<style>
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
