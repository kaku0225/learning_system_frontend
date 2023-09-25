<script setup>
  import { storeToRefs } from 'pinia'
  import { useBranchSchoolManagementStore } from "@/stores/branchSchoolManagement.js"

  const emits = defineEmits(['hideModal'])
  const store = useBranchSchoolManagementStore()
  const { mutationBranchSchoolCreate, mutationBranchSchoolUpdate } = store
  const { selectedBranchSchool, titleText, submitButtonText } = storeToRefs(store)

  async function mutationCreate(){
    const hide = await mutationBranchSchoolCreate()
    if(hide){
      emits('hideModal')
    }
  }

  async function mutationUpdate(){
    const hide = await mutationBranchSchoolUpdate()
    if(hide){
      emits('hideModal')
    }
  }

  function signUpOrUpdate() {
    if(selectedBranchSchool.value.id) {
      mutationUpdate()
    } else {
      mutationCreate()
    }
  }
</script>

<template>
  <div class="modal fade" id="BranchSchoolModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ titleText }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="row g-3 p-3" @submit.prevent="signUpOrUpdate">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">分校名稱</label>
            <input type="text" class="form-control" id="inputEmail4" v-model="selectedBranchSchool.name">
          </div>
          <div class="col-md-6">
            <label for="inputName4" class="form-label">分校電話</label>
            <input type="text" class="form-control" id="inputName4" v-model="selectedBranchSchool.phone">
          </div>
          <div class="col-md-6">
            <label for="inputCellphone" class="form-label">分校地址</label>
            <input type="text" class="form-control" id="inputCellphone" v-model="selectedBranchSchool.address">
          </div>
          <div class="col-md-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="selectedBranchSchool.enabled">
              <label class="form-check-label" for="flexCheckDefault">
                啟用
              </label>
            </div>
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
