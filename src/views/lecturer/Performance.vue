<template>
  <div>
   <SideBar />
   <NavBar />
   <v-row class="pa-5">
    <!-- Bar -->
    <v-col cols="12" sm="6">
      <h3>Performance Tracking</h3>
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
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import BarChart from '@/components/BarChart.vue';
import PieChart from '@/components/PieChart.vue';
export default {
  components: { SideBar, NavBar, BarChart, PieChart },
  data() {
    
  },
};
</script>
