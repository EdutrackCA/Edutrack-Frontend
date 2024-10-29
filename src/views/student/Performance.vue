<template>
  <v-container class="pa-10">
    <SideBar />
    <NavBar />
    <v-row>
      <v-col cols="12" sm="6">
        <h2>Performance Tracking</h2>
      </v-col>
      
      <v-col cols="12" sm="1" class="mt-7">
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
    </v-row>
  </v-container>
</template>

<script>
import NavBar from "@/components/student/NavBar.vue";
import SideBar from "@/components/student/SideBar.vue";
import BarChart from "@/components/student/BarChart.vue";
import PieChart from "@/components/student/PieChart.vue";
export default {
  components: { SideBar, NavBar, BarChart, PieChart },
  data() {
    return {
      value: 65,
    };
  },
};
</script>
