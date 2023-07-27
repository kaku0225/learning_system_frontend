<template>
  <!-- Section: Design Block -->
  <section class="text-center">
    <!-- Background image -->
    <div class="p-5 bg-image" style="
          background-image: url('https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
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
            <form @submit.prevent="mutationSignUp">
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
import { useMutation } from '@vue/apollo-composable'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import gql from 'graphql-tag'
import router from '../router';

const user = ref({
  name: '',
  email: '',
  password: '',
})

const { mutate: signUp } = useMutation(gql`
  mutation signUp ($name: String!, $email: String!, $password: String!) {
    signUp (input: {name: $name, email: $email, password: $password }) {
      user { id }
      success
      message
    }
  }
`, () => ({
  variables: {
    name: user.value.name,
    email: user.value.email,
    password: user.value.password
  },
}))

function mutationSignUp(){
  signUp().then(result => {
    if(result.data.signUp.success) {
      router.push('/login')
    } else {
      toast.error(result.data.signUp.message, { autoClose: 3000 })
    }
  });
}

</script>

