<template>
  <div>
    <SideBar />
    <v-container>
      <v-layout row class="pa-5">
       <v-flex xs12 class="text-center">
        <NavBar />
       </v-flex>
        <v-flex xs12>
            <h2>Performance Tracking</h2>
        </v-flex>
      </v-layout>

      <v-layout class="pa-4">
        <v-flex xs3>
          <h4 class="mt-8">week</h4>
        </v-flex>
        <v-flex xs3 class="ma-1">
          <h4>Start <v-icon small>mdi-information-outline</v-icon></h4>
        <v-text-field outlined dense type="number"></v-text-field>
        </v-flex>
        <v-flex xs3 class="ma-1">
          <h4>Stop <v-icon small>mdi-information-outline</v-icon></h4>
        <v-text-field outlined dense type="number"></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row class="pa-5">
        <v-flex xs12>
          <v-card class="pa-7">
            <v-layout row>
              
              <v-spacer></v-spacer>
              <v-flex xs10>
                <v-layout>
                  <h5>Course Code</h5>
                  <v-select outlined dense></v-select>
                </v-layout>
              </v-flex>
            </v-layout>


            <v-layout class="mt-5">
              <v-flex xs12>
                <h5>Barchart</h5>
                  <bar-chart class="mt-2" />
              </v-flex>
            </v-layout>

            <v-layout class="mt-5">
              <v-flex xs12>
                <h5>Piechart</h5>
                  <pie-chart />
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
        
    </v-container>
  </div>
</template>

<script>
import SideBar from '@/components/lecturer/mobile/SideBar.vue'
import NavBar from '@/components/lecturer/mobile/NavBar.vue'
import BarChart from '@/components/lecturer/BarChart.vue'
import PieChart from '@/components/lecturer/PieChart.vue'
export default {
  components : {
    SideBar,
    BarChart,
    PieChart,
    NavBar
  }
}
</script>
