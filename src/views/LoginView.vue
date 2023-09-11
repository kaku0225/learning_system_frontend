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
              <form @submit.prevent="mutationLogin">
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
  <SendResetMailModal ref="resetModal" @sendResetEmail="mutationSendResetPasswordEmail"></SendResetMailModal>
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
import { useMutation } from '@vue/apollo-composable'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import gql from 'graphql-tag'
import router from '../router'
import Modal from 'bootstrap/js/dist/modal'
import SendResetMailModal from '../components/SendResetMailModal.vue'

const user = ref({
  email: '',
  password: ''
})

const resetModal = ref({ modal: null })

const { mutate: login } = useMutation(gql`
  mutation login ($email: String!, $password: String!) {
    login (input: {email: $email, password: $password }) {
      user { jti type }
      success
      expiredTime
      message
    }
  }
`, () => ({
  variables: {
    email: user.value.email,
    password: user.value.password
  },
}))

const { mutate: sendResetPasswordEmail } = useMutation(gql`
  mutation sendResetPasswordEmail ($email: String!) {
    sendResetPasswordEmail (input: { email: $email}) {
      user { id }
      success
      message
    }
  }`)

function mutationLogin(){
  login().then(result => {
    if(result.data.login.success) {
      const jti = result.data.login.user.jti
      const expired_time = result.data.login.expiredTime
      document.cookie = `token=${jti}; expires=${new Date(expired_time)}; path=/`;
      if(result.data.login.user.type === 'Student') {
        router.push('/')
      } else {
        router.push('/admin_interface')
      }
    } else {
      toast.error(result.data.login.message, { autoClose: 3000 })
    }
  });
}

function mutationSendResetPasswordEmail(email) {
  close()
  sendResetPasswordEmail({ email: email }).then(result => {
    if(!result.data.sendResetPasswordEmail.success) {
      toast.error(result.data.sendResetPasswordEmail.message, { autoClose: 3000 })
    }
  })
}

function open(){
  resetModal.value.modal.show()
}

function close(){
  resetModal.value.modal.hide()
}

onMounted(() => {
  resetModal.value.modal = new Modal('#resetModal', {})
})
</script>
