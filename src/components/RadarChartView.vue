<script setup>
import { ref } from 'vue'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const data = ref({
  labels: ['戰後台灣經濟', '殖民統治體制的建立', '國際勢力的競逐', '鄭式政權來台', '開港後的社會變遷', '史前的台灣'],
  datasets: [
    {
      label: '歷史',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [20, 25, 40, 50, 70, 90]
    },
  ]
})

const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<template>
  <Radar :data="data" :options="options" />
</template>
