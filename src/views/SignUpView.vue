<template>
  <!-- Section: Design Block -->
  <section class="text-center">
    <!-- Background image -->
    <div class="p-5 bg-image" style="
          background-image: url('https://w.wallhaven.cc/full/k7/wallhaven-k7yjd1.jpg');
          height: 300px;
          "></div>
    <!-- Background image -->

    <div class="card mx-4 mx-md-5 shadow-5-strong" style="
          margin-top: -100px;
          background: hsla(0, 0%, 100%, 0.8);
          backdrop-filter: blur(30px);
          ">
      <div class="card-body py-5 px-md-5">

        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <h2 class="fw-bold mb-5">註冊</h2>
            <form @submit.prevent="sign_up">
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="d-flex justify-content-center">
                <div class="mb-5 col-md-6">
                  <div class="form-outline">
                    <input type="text" id="signUpName" class="form-control" placeholder="名字" v-model="user.name" />
                  </div>
                </div>
              </div>

              <!-- Email input -->
              <div class="d-flex justify-content-center">
                <div class="form-outline mb-5 col-md-6">
                  <input type="email" id="signUpEmail" class="form-control" placeholder="信箱" v-model="user.email" />
                </div>
              </div>

              <!-- Password input -->
              <div class="d-flex justify-content-center">
                <div class="form-outline mb-5 col-md-6">
                  <input type="password" id="signUpPassword" class="form-control" placeholder="密碼" v-model="user.password" />
                </div>
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block mb-4">
                註冊
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
</template>

<script setup>
import { ref } from 'vue'
import axios from "axios";
import router from '../router';

const user = ref({
  name: '',
  email: '',
  password: '',
})

function sign_up() {
  const api = axios.create({
    baseURL: import.meta.env.VITE_VUE_API,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
    },
  });
  
  api.post("api/v1/users/sign_up", {user: user.value}).then((res) => {
    if(res.data.success){
      router.push('/login')
    }
    console.log(res.data.message)
  })
}

</script>

