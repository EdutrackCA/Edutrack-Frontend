<template>
  <Pie 
    :options="chartOptions"
    :data="chartData" />
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "PieChart",
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Cummulative"],
        datasets: [{ data: [40, 20, 12, 40, 50],
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16']
         }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
