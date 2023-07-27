<template>
  <Pie :data="data" :options="options" />
</template>

<script setup>
import { ref } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = ref({
  labels: ['國文', '英文', '數學', '社會', '自然'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#FFFF37'],
      data: [40, 20, 80, 10, 30]
    }
  ]
})

const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>
