<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'

const { toggleMenu } = useMenuStore();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button type="button" id="sidebarCollapse" class="btn btn-info" @click="toggleMenu">
        <i class="fas fa-align-left"></i>
        <span>Toggle Sidebar</span>
      </button>
      <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-align-justify"></i>
      </button>
      <div id="navbarSupportedContent">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Page</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Page</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Page</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Page</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

.navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

</style>
