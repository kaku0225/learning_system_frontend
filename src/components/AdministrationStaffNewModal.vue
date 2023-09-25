<script setup>
  import { storeToRefs } from 'pinia'
  import { useAdministrationStaffsAccountStore } from "@/stores/administrationStaffsAccount.js"
  const emits = defineEmits(['hideModal'])

  const store = useAdministrationStaffsAccountStore()
  const { mutationAdministrationStaffSignUp, mutationAdministrationStaffUpdate } = store
  const { selectedAdministrationStaff, selectedAdministrationStaffProfile, submitButtonText, titleText } = storeToRefs(store)

  async function mutationSignUp(){
    const hide = await mutationAdministrationStaffSignUp()
    if(hide){
      emits('hideModal')
    }
  }

  async function mutationUpdate(){
    const hide = await mutationAdministrationStaffUpdate()
    if(hide){
      emits('hideModal')
    }
  }

  function signUpOrUpdate() {
    if(selectedAdministrationStaff.value.id) {
      mutationUpdate()
    } else {
      mutationSignUp()
    }
  }

</script>

<template>
  <div class="modal fade" id="AdministrationStaffModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ titleText }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="row g-3 p-3" @submit.prevent="signUpOrUpdate">
          <div class="col-md-12">
            <div class="form-check-inline">
              <label class="form-check-label" for="gender">性別</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="male" v-model="selectedAdministrationStaffProfile.gender">
              <label class="form-check-label" for="male">男</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="female" v-model="selectedAdministrationStaffProfile.gender">
              <label class="form-check-label" for="female">女</label>
            </div>
          </div>
          <div class="col-md-6">
            <label for="inputName" class="form-label">姓名</label>
            <input type="text" class="form-control" id="inputName" v-model="selectedAdministrationStaff.name">
          </div>
          <div class="col-md-6">
            <label for="inputCellphone" class="form-label">手機</label>
            <input type="text" class="form-control" id="inputCellphone" v-model="selectedAdministrationStaffProfile.cellphone">
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label">電子信箱</label>
            <input type="email" class="form-control" id="email" v-model="selectedAdministrationStaff.email">
          </div>
          <div class="col-md-3">
            <label for="school" class="form-label">畢業學校</label>
            <input type="text" class="form-control" id="school" v-model="selectedAdministrationStaffProfile.school">
          </div>
          <div class="col-md-3">
            <label for="department" class="form-label">科系</label>
            <input type="text" class="form-control" id="department" v-model="selectedAdministrationStaffProfile.major">
          </div>
          <div class="col-md-12">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="school1" value="school1" v-model="selectedAdministrationStaff.branchSchools">
              <label class="form-check-label" for="school1">分校1</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="school2" value="school2" v-model="selectedAdministrationStaff.branchSchools">
              <label class="form-check-label" for="school2">分校2</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="school3" value="school3" v-model="selectedAdministrationStaff.branchSchools">
              <label class="form-check-label" for="school3">分校3</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="school4" value="school4" v-model="selectedAdministrationStaff.branchSchools">
              <label class="form-check-label" for="school4">分校4</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="school5" value="school5" v-model="selectedAdministrationStaff.branchSchools">
              <label class="form-check-label" for="school5">分校5</label>
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

<style scoped>
  .last_td {
    border-top: 1px solid #dee2e6;
    border-bottom: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
  }
</style>
