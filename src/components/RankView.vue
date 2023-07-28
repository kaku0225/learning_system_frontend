<script setup>
  import PieChart from './PieChartView.vue'
  import TimeRank from './TimeRankView.vue'
</script>

<template>
  <div class="card p-3 mb-5 w-100 elevated">
    <div class="row g-0">
      <div class="col-md-4">
        <PieChart></PieChart>
      </div>
      <div class="col-md-8">
        <TimeRank></TimeRank>
      </div>
    </div>
  </div>
</template>


<style scoped>
.elevated {
  font-family: 'Source Code Pro', monospace;
  font-weight: 700;
  font-size: 30px;
  color: rgba(220, 200, 200);
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2),
               0 12px 20px rgba(0, 0, 0, 0.2),
               0 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  border: none;
  background: #fff;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.12),
              0 12px 12px rgba(0, 0, 0, 0.08),
              0 24px 24px rgba(0, 0, 0, 0.08),
              0 40px 24px -15px rgba(0, 0, 0, 0.2),
              0 50px 24px -30px rgba(0, 0, 0, 0.1),
              0 60px 24px -35px rgba(0, 0, 0, 0.1),
              0 20px 24px rgba(0, 0, 0, 0.06) inset,
              0 -2px 1px rgba(255, 255, 255);
}
</style>