<script setup>
  import { storeToRefs } from 'pinia'
  import { useResetPasswordStore } from "@/stores/resetPassword.js"

  const store = useResetPasswordStore()
  const { reset } = store
  const { password, passwordConfirmation, passwordDifferentInputAttribute, passwordDifferentTextAttribute, buttonDisabled } = storeToRefs(store)
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
                <h2 class="text-uppercase text-center mb-4">密碼重置</h2>
                <div id="emailHelp" class="form-text text-center">密碼大於等於8個字元、包含一個數字</div>
                <div id="emailHelp" class="form-text text-center">包含一個大寫英文、包含一個小寫英文</div>
                <form @submit.prevent="reset">
                  <div class="d-flex justify-content-center">
                    <div class="form-floating mb-4 col-md-8">
                      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
                      <label for="floatingInput">密碼</label>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <div class="form-floating mb-5 col-md-8">
                      <input type="password" class="form-control" id="floatingPasswordConfirmation" placeholder="PasswordConfirmation" v-model="passwordConfirmation" :class="passwordDifferentInputAttribute">
                      <label for="floatingPassword">再次輸入密碼</label>
                      <div class="col-auto">
                        <span id="textExample2" class="form-text" style="color:#000" :class="passwordDifferentTextAttribute">必須與密碼一致</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-primary btn-block btn-lg gradient-custom-4" :disabled="buttonDisabled">重置</button>
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
