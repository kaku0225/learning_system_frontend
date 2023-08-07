<script setup>
import Sidebar from '../components/SidebarsView.vue'
import Navbars from '../components/NavbarsView.vue'
</script>

<template>
  <div class="wrapper">
    <Sidebar />
    <div id="content">
      <Navbars />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>

<style scoped>

.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}

#content {
    width: 100%;
    padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
}
</style>
