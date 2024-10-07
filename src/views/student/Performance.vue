<template>
  <div>
    <SideBar />
    <NavBar />
    <v-row class="pa-5">
      <v-col cols="12" sm="12">
        <h2>Performance Tracking</h2>
      </v-col>
      <v-col cols="12" sm="1" class="mt-7">
        <h3>Week</h3>
      </v-col>
      <v-col cols="12" sm="2">
        <h4>Start <v-icon small>mdi-information-outline</v-icon></h4>
        <v-text-field outlined dense type="date"></v-text-field>
      </v-col>
      <v-col cols="12" sm="2">
        <h4>Stop <v-icon small>mdi-information-outline</v-icon></h4>
        <v-text-field outlined dense type="date"></v-text-field>
      </v-col>
    </v-row>

    <!-- Virtualization -->
    <v-row class="pa-5">
      <v-card width="80vw">
        <v-row class="pa-5">
          <v-col cols="12" sm="6">
            <v-card class="pa-10" outlined>
              <BarChart />
            </v-card>
          </v-col>
          <!-- Pie -->
          <v-col cols="12" sm="6">
            <v-card class="pa-10" outlined>
              <PieChart />
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import NavBar from "@/components/student/NavBar.vue";
import SideBar from "@/components/student/SideBar.vue";
import BarChart from "@/components/student/BarChart.vue";
import PieChart from "@/components/student/PieChart.vue";
export default {
  components: { SideBar, NavBar, BarChart, PieChart },
  data() {},
};
</script>
