<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import { useMutation } from '@vue/apollo-composable'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import gql from 'graphql-tag'
import router from '../router';

const password = ref('')
const passwordConfirmation = ref('')
const passowrdConfirmationInput = ref('')
const passowrdConfirmationText = ref('')
const isButtonDisabled = ref(true)
const route = useRoute()

const { mutate: resetPassword } = useMutation(gql`
  mutation resetPassword ($token: String!, $password: String!, $passwordConfirmation: String!) {
    resetPassword (input: {token: $token, password: $password, passwordConfirmation: $passwordConfirmation }) {
      user { id }
      success
      message
    }
  }
`, () => ({
  variables: {
    token: route.query.token,
    password: password.value,
    passwordConfirmation: passwordConfirmation.value
  },
}))

watch([password, passwordConfirmation], (newValue) => {
  let passwordValue = newValue[0]
  let passwordConfirmationValue = newValue[1]

  if(passwordValue !== passwordConfirmationValue) {
    passowrdConfirmationInput.value = 'border border-danger'
    passowrdConfirmationText.value = 'text-danger'
    isButtonDisabled.value = true
  } else if (passwordValue === '' && passwordConfirmationValue === '') {
    passowrdConfirmationInput.value = ''
    passowrdConfirmationText.value = ''
  }else {
    passowrdConfirmationInput.value = ''
    passowrdConfirmationText.value = 'text-success'
    isButtonDisabled.value = false
  }
})

function reset() {
  resetPassword().then((result) => {
    if(result.data.resetPassword.success) {
      router.push('/login')
    } else {
      toast.error(result.data.resetPassword.message, { autoClose: 3000 })
    }
  })
}
</script>

<template>
  <section class="vh-100 bg-image"
    style="background-image: url('https://images.unsplash.com/photo-1549247796-5d8f09e9034b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80'); background-size: 100% 100%">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-5">
            <div class="card bg-opacity-10 shadow-lg p-3 mb-5 bg-white rounded" style="border-radius: 15px;">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">密碼重置</h2>
                <form @submit.prevent="reset">
                  <div class="d-flex justify-content-center">
                    <div class="form-floating mb-4 col-md-8">
                      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
                      <label for="floatingInput">密碼</label>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <div class="form-floating mb-5 col-md-8">
                      <input type="password" class="form-control" id="floatingPasswordConfirmation" placeholder="PasswordConfirmation" v-model="passwordConfirmation" :class="passowrdConfirmationInput">
                      <label for="floatingPassword">再次輸入密碼</label>
                      <div class="col-auto">
                        <span id="textExample2" class="form-text" style="color:#000" :class="passowrdConfirmationText">必須與密碼一致</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-primary btn-block btn-lg gradient-custom-4" :disabled="isButtonDisabled">重置</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
