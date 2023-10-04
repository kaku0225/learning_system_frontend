<script setup>
import Multiselect from 'vue-multiselect'
import 'vue3-toastify/dist/index.css'
import { storeToRefs } from 'pinia'
import { useClassAdvisersAccountStore } from "@/stores/classAdvisersAccount.js"
import { toast } from 'vue3-toastify'

const emits = defineEmits(['hideModal'])
const store = useClassAdvisersAccountStore()
const { classAdviserSignUp, classAdviserUpdate, reAssignClassAdvisers } = store
const { selectedClassAdviser, selectedClassAdviserProfile, submitButtonText, titleText, branchSchools } = storeToRefs(store)

function addTag(newTag){
  const tag = {
    name: newTag,
    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
  }
  branchSchools.value.push(tag)
  selectedClassAdviser.value.push(tag)
}

function mutationSignUp(){
    classAdviserSignUp().then(result => {
      if(result.data.classAdviserSignUp.success) {
        reAssignClassAdvisers(result.data.classAdviserSignUp.classAdvisers)
        emits('hideModal')
      } else {
        toast.error(result.data.classAdviserSignUp.message, { autoClose: 3000 })
      }
    });
  }
  
  function mutationUpdate(){
    classAdviserUpdate().then(result => {
      if(result.data.classAdviserUpdate.success) {
        reAssignClassAdvisers(result.data.classAdviserUpdate.classAdvisers)
        emits('hideModal')
      } else {
        toast.error(result.data.classAdviserUpdate.message, { autoClose: 3000 })
      }
    });
  }
  
  function signUpOrUpdate(){
    if(selectedClassAdviser.value.id){
      mutationUpdate()
    } else {
      mutationSignUp()
    }
  }

</script>

<template>
  <div class="modal fade" id="ClassAdviserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ titleText }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="row g-3 p-3" @submit.prevent="signUpOrUpdate">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" v-model="selectedClassAdviser.email">
          </div>
          <div class="col-md-6">
            <label for="inputName4" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputName4" v-model="selectedClassAdviser.name">
          </div>
          <div class="col-md-6">
            <label for="inputCellphone" class="form-label">手機</label>
            <input type="text" class="form-control" id="inputCellphone" v-model="selectedClassAdviserProfile.cellphone">
          </div>
          <div class="col-md-6">
            <label class="typo__label form-label">負責分校</label>
            <multiselect v-model="selectedClassAdviser.branchSchools" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="branchSchools" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
          </div>
          <div class="col-12 modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
            <button type="submit" class="btn btn-primary">{{ submitButtonText }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scope></style>
