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

                <div class="d-flex flex-row-reverse col-md-10 mb-4">
                  <div>
                    <router-link to="/sign_up">註冊</router-link>
                  </div>
                  <div class="mx-3">
                    <a href="#" @click="open">忘記密碼</a>
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
  </section>
  <SendResetMailModal ref="resetModal" @sendResetEmail="sendResetPasswordEmail"></SendResetMailModal>
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

a {
  text-decoration: none;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import router from '../router';
import axios from "axios";
import Modal from 'bootstrap/js/dist/modal'

import SendResetMailModal from '../components/SendResetMailModal.vue'

const user = ref({
  email: '',
  password: ''
})

const resetModal = ref({ modal: null })

const api = axios.create({
  baseURL: import.meta.env.VITE_VUE_API,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
});

function login() {
  const loginMutation = `mutation ($email: String!, $password: String!) { login(email: $email, password: $password) { jti expiredTime } }`;
  const variables = { email: user.value.email, password: user.value.password }
  const requestContent = {  query: loginMutation, variables: variables };
  api.post("graphql", requestContent).then((res) => {
    console.log(res)
    if(res.data.errors) {
      console.log('error')
    } else {
      console.log('success')
      console.log(res.data.data.login)
      const { jti, expired_time } = res.data.data.login
      document.cookie = `token=${jti}; expires=${new Date(expired_time)}`;
      router.push('/')
    }
  })
}

function open(){
  resetModal.value.modal.show()
}

function close(){
  resetModal.value.modal.hide()
}

function sendResetPasswordEmail(email){
  // console.log(email)
  const sendResetPasswordEmailMutation = `mutation ($email: String!) { sendResetPasswordEmail(email: $email) { email } }`;
  const variables = { email: email }
  const requestContent = { query: sendResetPasswordEmailMutation, variables: variables }
  
  console.log('email:', email)
  close()
  api.post("graphql", requestContent).then((res) => {
    console.log(res)
    if(res.data.errors) {
      console.log('error')
    } else {
      console.log('success')
    }
  })
}

onMounted(() => {
  resetModal.value.modal = new Modal('#resetModal', {})
})

</script>
