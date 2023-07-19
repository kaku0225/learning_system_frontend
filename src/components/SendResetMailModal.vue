<script setup>
import { ref } from 'vue'

const resetEmail = ref('')

const emits = defineEmits(['sendResetEmail'])

function sendResetEmail(){
  emits('sendResetEmail', resetEmail.value)
  resetEmail.value = ''
}

</script>

<template>
  <div class="modal top fade" id="resetModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true" data-mdb-backdrop="true" data-mdb-keyboard="true" ref="resetModal">
    <div class="modal-dialog" style="width: 400px;">
      <div class="modal-content text-center">
        <div class="modal-header h5 text-white bg-primary justify-content-center">
            重置密碼信件寄送
        </div>
        <div class="modal-body px-5">
          <p class="py-2">
            請輸入您的信箱，稍後您將會收到重置密碼信件
          </p>
          <div class="form-outline">
            <input type="email" id="resetEmail" class="form-control my-3" placeholder="email" v-model="resetEmail" />
          </div>
          <a href="#" class="btn btn-primary w-100" @click="sendResetEmail">寄送</a>
        </div>
      </div>
    </div>
  </div>
</template>
