<template>
  <!-- Section: Design Block -->
  <section class="text-center text-lg-start">

    <!-- Jumbotron -->
    <div class="container py-4">
      <div class="row g-0 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card cascading-right" style="
              background: hsla(0, 0%, 100%, 0.55);
              backdrop-filter: blur(30px);
              ">
            <div class="card-body p-5 shadow-5 text-center">
              <h2 class="fw-bold mb-5">系統登入</h2>
              <form @submit.prevent="login">
                <!-- Email input -->
                <div class="d-flex justify-content-center">
                  <div class="form-outline mb-4 col-md-8">
                    <input type="email" id="loginEmail" class="form-control" placeholder="Email" v-model="user.email"/>
                  </div>
                </div>

                <!-- Password input -->
                <div class="d-flex justify-content-center">
                  <div class="form-outline mb-4 col-md-8">
                    <input type="password" id="loginPassword" class="form-control" placeholder="Password" v-model="user.password"/>
                  </div>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Login
                </button>

                <!-- Register buttons -->
                <div class="text-center">
                  <p>or login with:</p>
                  
                  <button type="button" class="btn btn-outline-primary rounded-circle btn-floating mx-1">
                    <font-awesome-icon icon="fa-brands fa-facebook" />
                  </button>

                  <button type="button" class="btn btn-outline-danger rounded-circle btn-floating mx-1">
                    <font-awesome-icon icon="fa-brands fa-google" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
            alt="" />
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
  </section>
  <!-- Section: Design Block -->
</template>

<style>
.cascading-right {
  margin-right: -50px;
}

@media (max-width: 991.98px) {
  .cascading-right {
    margin-right: 0;
  }
}
</style>

<script setup>
import { ref } from 'vue'
import axios from "axios";
const user = ref({
  email: '',
  password: ''
})

function login() {
  const api = axios.create({
    baseURL: import.meta.env.VITE_VUE_API,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
    },
  });
  
  api.post("api/v1/users/login", {user: user.value}).then((res) => {
    console.log(res)
    const { token, expired } = res.data
    document.cookie = `token=${token}; expires=${new Date(expired)}`;
  })
}
</script>
