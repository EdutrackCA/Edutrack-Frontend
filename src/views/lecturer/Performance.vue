<template>
  <div>
   <SideBar />
   <NavBar />
   <v-row class="pa-5">
    <v-col cols="12" sm="6">
        <h2>Performance Tracking</h2>
      </v-col>
    <v-col cols="12" sm="6">
        <v-text-field
          solo
          dense
          type="text"
          placeholder="search for student here..."
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <!-- Bar -->
    <v-col cols="12" sm="6">
      <v-card class="pa-10 mt-5" outlined>
        <BarChart />
      </v-card>
    </v-col>
    <!-- Pie -->
    <v-col cols="12" sm="6">
      <h3>Performance Tracking</h3>
      <v-card class="pa-10 mt-5" outlined>
        <PieChart />
      </v-card>
    </v-col>
   </v-row>
  </div>
</template>

<script>
import NavBar from "@/components/student/NavBar.vue";
import SideBar from "@/components/student/SideBar.vue";
import BarChart from '@/components/student/BarChart.vue';
import PieChart from '@/components/student/PieChart.vue';
export default {
  components: { SideBar, NavBar, BarChart, PieChart },
  data() {
    
  },
};
</script>
