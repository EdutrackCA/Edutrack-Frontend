<template>
  <v-container>
    <SideBar />
    <div class="courses-section">
      <v-row class="text-center">
        <NavBar />
        <v-col cols="12" sm="12" class="text-left">
          <h3>My Courses</h3>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="pa-5 blue darken-2" dark>
            <v-card-title>ICT 504</v-card-title>
            <v-card-text class="text-left"
              >Introduction To Neural Network</v-card-text
            >
            <v-row class="mt-10">
              <v-col cols="12" sm="6">
                <v-card-text class="text-left">Prof.A.B.Medel</v-card-text>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-center">
                  <v-progress-circular
                    :model-value="value"
                    :rotate="360"
                    :size="100"
                    :width="15"
                    color="white"
                  >
                    {{ value }} %
                  </v-progress-circular>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4">
          <v-card class="pa-5 blue darken-2" dark>
            <v-card-title>ICT 504</v-card-title>
            <v-card-text class="text-left"
              >Introduction To Neural Network</v-card-text
            >
            <v-row class="mt-10">
              <v-col cols="12" sm="6">
                <v-card-text class="text-left">Prof.A.B.Medel</v-card-text>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-center">
                  <v-progress-circular
                    :model-value="value"
                    :rotate="360"
                    :size="100"
                    :width="15"
                    color="white"
                  >
                    {{ value }} %
                  </v-progress-circular>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4">
          <v-card class="pa-5 blue darken-2" dark>
            <v-card-title>ICT 504</v-card-title>
            <v-card-text class="text-left"
              >Introduction To Neural Network</v-card-text
            >
            <v-row class="mt-10">
              <v-col cols="12" sm="6">
                <v-card-text class="text-left">Prof.A.B.Medel</v-card-text>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-center">
                  <v-progress-circular
                    :model-value="value"
                    :rotate="value"
                    :size="100"
                    :width="15"
                    color="white"
                  >
                    {{ value }} %
                  </v-progress-circular>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="pa-5">
        <!-- recent activities -->
        <v-col cols="12" sm="4">
          <h3>Recent Activities</h3>
          <v-card outlined class="pa-5 mt-5" style="border: 2px solid blue">
            <v-row>
              <v-col cols="12" sm="12">
                <v-card class="pa-5 py-3 blue lighten-1 mt-2" dark link flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <h3>Submitted ICT 502 Assignment</h3>
                    </v-col>
                  </v-row>
                </v-card>

                <v-card class="pa-5 py-3 blue lighten-1 mt-2" dark link flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <h3>Submitted ICT 502 Assignment</h3>
                    </v-col>
                  </v-row>
                </v-card>

                <v-card class="pa-5 py-3 blue lighten-1 mt-2" dark link flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <h3>Submitted ICT 502 Assignment</h3>
                    </v-col>
                  </v-row>
                </v-card>

                <v-card class="pa-5 py-3 blue lighten-1 mt-2" dark link flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <h3>Submitted ICT 502 Assignment</h3>
                    </v-col>
                  </v-row>
                </v-card>
                <v-card class="pa-5 py-3 blue lighten-1 mt-2" dark link flat>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <h3>Submitted ICT 502 Assignment</h3>
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
          <v-card outlined class="pa-5 mt-5" style="border: 2px solid blue">
            <v-row>
              <v-col cols="12" sm="12">
                <v-card class="pa-5 py-3 blue lighten-1 mt-2" dark link flat>
                  <v-row class="pa-2">
                    <v-col cols="12" sm="2">
                      <v-card class="text-center blue darken-4">
                        <h3>ICT 504</h3>
                      </v-card>
                    </v-col>

                    <v-col cols="12" sm="7">
                      <v-row no-gutters>
                        <v-col cols="12" sm="12">
                          <h3>Introduction to Neural Network</h3>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <h5 class="green--text darken-4">Date Assigned</h5>
                          <h6>31-03-2024</h6>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <h5 class="red--text darken-4">Submission date</h5>
                          <h6>02-04-2024</h6>
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col cols="12" sm="2">
                      <v-chip>not submitted</v-chip>
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
      value: 65,
    };
  },
};
</script>
