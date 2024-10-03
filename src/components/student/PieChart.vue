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
        labels: ["Assignment", "Attendance", "Mini test", "Major test", "Mini project", "Major project"],
        datasets: [{ data: [40, 20, 12, 40, 50, 44],
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
