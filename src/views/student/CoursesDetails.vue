<template>
  <v-container class="px-10">
    <!-- Sidebar -->
    <div class="courses-section">
      <v-row>
        <SideBar />
        <!-- Main Content -->
        <v-col cols="12">
          <v-row class="">
            <NavBar />
            <v-col cols="12">
              <v-breadcrumbs>
                <v-breadcrumbs-item>My Courses</v-breadcrumbs-item>
                <v-breadcrumbs-item>{{course.title}}</v-breadcrumbs-item>
              </v-breadcrumbs>
            </v-col>
          </v-row>
          <v-row>
            t5<v-col cols="12" sm="12">
              <v-card class="pa-5 darken-2 clickable-card blue--text" outlined light flat>
                <v-row>
                  <v-col cols="6">
                    <h3>{{course.description}}</h3>
                    <div class="font-weight-regular">
                      3.0/50 &nbsp; | &nbsp; 3 Units
                    </div>
                    <div>{{course.lecturer}}</div>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <div class="text-center">
                      <v-progress-circular
                        :value="course.progress"
                        :size="60"
                        :width="8"
                        color="blue"
                      >
                        {{ course.progress }}%
                      </v-progress-circular>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>

          <!-- Course Material Section -->
          <h4 class="font-weight-medium mt-5">Courses Material</h4>
          <v-row>
            <v-col cols="3"  v-for="(material, index) in materials" 
            :key="index"
            >
              <v-card class="blue darken-2 white--text clickable-card" flat dark>
                <v-card-title class="font-weight-bold"
                  >{{material.title}}</v-card-title
                >
                <v-card-subtitle>{{material.lecturer}}</v-card-subtitle>
                <v-card-actions>
                  <v-btn icon>
                    <v-icon>mdi-download</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <!-- Record Table Section -->
          <h4 class="font-weight-medium mt-5">Record Table</h4>
          <v-card class="pa-5" outlined>
            <v-simple-table dense>
            <thead>
              <tr>
                <th>Week</th>
                <th>Attendance</th>
                <th>Assignment</th>
                <th>Class Test</th>
                <th>Major Test</th>
                <th>Mini Project</th>
                <th>Course Project</th>
                <th>Week's Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="n in 3" :key="n">
                <td>{{ n }}</td>
                <td>SS</td>
                <td>LS</td>
                <td>SS</td>
                <td>LS</td>
                <td>SS</td>
                <td>LS</td>
                <td>SS</td>
              </tr>
            </tbody>
          </v-simple-table>
          </v-card>
          
          <!-- Assignment section -->
          <v-row class="mt-5">
            <v-col cols="12" sm="12" class="text-left">
          <h4>Assignments</h4>
        </v-col>

        <!-- List of Assignments -->

        <v-col cols="12" sm="12">
          <v-row class="text-left pa-3">
            <v-col cols="12" sm="4"> Course Title </v-col>

            <v-col cols="12" sm="2" class="text-center"> Course Code </v-col>

            <v-col cols="12" sm="2" class="text-center"> Assigned date </v-col>

            <v-col cols="12" sm="2" class="text-center">
              Submission date
            </v-col>

            <v-col cols="12" sm="1"> </v-col>
          </v-row>

          <v-card
            class="blue darken-2 pa-5 mt-3"
            flat
            dark
            link
            v-for="(item, index) in items"
            :key="index"
          >
            <v-row class="text-left">
              <v-col cols="12" sm="4">
                <h5 class="font-weight-regular">
                  Introduction To Neural Network
                </h5>
              </v-col>

              <v-col cols="12" sm="2">
                <h5 class="font-weight-regular text-center">ICT 504</h5>
              </v-col>

              <v-col cols="12" sm="2">
                <h5 class="font-weight-regular text-center">05 - 11 - 2024</h5>
              </v-col>

              <v-col cols="12" sm="2">
                <h5 class="font-weight-regular text-center">05 - 11 - 2024</h5>
              </v-col>

              <v-col cols="12" sm="2" class="text-right">
                <v-btn small light class="text--blue rounded-0" elevation="0"
                  >Upload</v-btn
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>
          </v-row>

        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import NavBar from "../../components/student/NavBar.vue";
import SideBar from "../../components/student/SideBar.vue";
export default {
    props: {
    course: {
      type: Object,
      required: true,
    },
  },
 
  components: { SideBar, NavBar },
  data() {
    return {
      materials: [
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
          progress:50,
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
