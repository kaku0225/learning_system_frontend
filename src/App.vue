<script setup>
import Sidebar from './components/SidebarsView.vue'
import Navbars from './components/NavbarsView.vue'
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

let showSidebar = ref(false);
const router = useRouter();

watchEffect(() => {
  const currentPath = window.location.href;
  console.log(currentPath)
  showSidebar.value = !currentPath.includes('login') && !currentPath.includes('sign_up') && !currentPath.includes('reset_password')
});

router.beforeEach((to, from, next) => {
  showSidebar.value = !to.path.includes('login') && !to.path.includes('sign_up') && !to.path.includes('reset_password');
  next();
});

</script>

<template>
  <div class="wrapper" v-if="showSidebar">
    <Sidebar />
    <div id="content">
      <Navbars />
      <RouterView />
    </div>
  </div>
  <div v-else>
    <RouterView />
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