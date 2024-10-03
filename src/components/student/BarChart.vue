<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Cummulative' ],
        datasets: [ { data: [40, 20, 12, 40, 50],  backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>  