<script setup>
  import { storeToRefs } from 'pinia'
  import { useStudentsAccountStore } from "@/stores/studentsAccount.js"
  const store = useStudentsAccountStore()
  const { switchSubSelect, mutationStudentSignUp, mutationStudentUpdate } = store
  const { selectedStudent, branchSchools, showGradeSubSelect, titleText, submitButtonText } = storeToRefs(store)
  const emits = defineEmits(['hideModal'])

  async function mutationSignUp(){
    const hide = await mutationStudentSignUp()
    if(hide){
      emits('hideModal')
    }
  }

  async function mutationUpdate(){
    const hide = await mutationStudentUpdate()
    if(hide){
      emits('hideModal')
    }
  }

  function signUpOrUpdate() {
    if(selectedStudent.value.id) {
      mutationUpdate()
    } else {
      mutationSignUp()
    }
  }

</script>

<template>
  <div class="modal fade" id="studentModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ titleText }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="p-3">
          <form class="row g-3" @submit.prevent="signUpOrUpdate">
            <div class="d-flex justify-content-center justify-content-around flex-wrap">
              <div class="col-md-5 form-floating">
                <input type="text" class="form-control" id="inputName" placeholder="姓名" v-model="selectedStudent.name">
                <label for="inputName" class="form-label">姓名</label>
              </div>
              <div class="col-md-5 form-floating">
                <input type="email" class="form-control" id="inputEmail" placeholder="email" autocomplete="email" v-model="selectedStudent.email">
                <label for="inputEmail" class="form-label">email</label>
              </div>
              <div class="col-md-5 form-floating mt-4">
                <input type="date" class="form-control" id="inputDate" placeholder="生日" v-model="selectedStudent.profile.birthday">
                <label for="inputDate" class="form-label">生日</label>
              </div>
              <div class="col-md-5 form-floating mt-4">
                <input type="text" class="form-control" id="inputCellPhone" placeholder="手機" v-model="selectedStudent.profile.cellphone">
                <label for="inputCellPhone" class="form-label">手機</label>
              </div>
              <div class="col-md-5 form-floating mt-4">
                <input type="text" class="form-control" id="inputPhone" placeholder="市話" v-model="selectedStudent.profile.phone">
                <label for="inputPhone" class="form-label">市話</label>
              </div>
              <div class="col-md-5 form-floating mt-4">
                <input type="text" class="form-control" id="inputSchool" placeholder="學校" v-model="selectedStudent.profile.school">
                <label for="inputSchool" class="form-label">學校</label>
              </div>
              <div class="col-md-5 form-floating mt-4">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example" @change="switchSubSelect()" v-model="selectedStudent.profile.mainGrade">
                  <option value="elementary_school">國小</option>
                  <option value="junior_high_school">國中</option>
                  <option value="senior_high_school">高中</option>
                  <option value="vocational_high_school">高職</option>
                </select>
                <label for="floatingSelect">學級</label>
              </div>
              <div class="col-md-5 form-floating mt-4" :class="{ 'd-none': !showGradeSubSelect.elementary }">
                <select class="form-select" id="elementarySelect" aria-label="elementarySelect" v-model="selectedStudent.profile.subGrade">
                  <option value="first_grade">一年級</option>
                  <option value="second_grade">二年級</option>
                  <option value="third_grade">三年級</option>
                  <option value="fourth_grade">四年級</option>
                  <option value="fifth_grade">五年級</option>
                  <option value="sixth_grade">六年級</option>
                </select>
                <label for="elementarySelect ">年級</label>
              </div>
              <div class="col-md-5 form-floating mt-4" :class="{ 'd-none': !showGradeSubSelect.junior }">
                <select class="form-select" id="juniorHighSelect" aria-label="juniorHighSelect" v-model="selectedStudent.profile.subGrade">
                  <option value="seventh_grade">七年級</option>
                  <option value="eighth_Grade">八年級</option>
                  <option value="ninth_grade">九年級</option>
                </select>
                <label for="juniorHighSelect ">年級</label>
              </div>
              <div class="col-md-5 form-floating mt-4" :class="{ 'd-none': !showGradeSubSelect.senior }">
                <select class="form-select" id="seniorHighSchoolSelect" aria-label="seniorHighSchoolSelect" v-model="selectedStudent.profile.subGrade">
                  <option value="tenth_grade">高一</option>
                  <option value="eleventh_grade">高二</option>
                  <option value="twelfth_grade">高三</option>
                </select>
                <label for="seniorHighSchoolSelect ">年級</label>
              </div>
              <div class="col-md-3 form-floating mt-4">
                <select class="form-select" id="countySelect" aria-label="Floating label select example" v-model="selectedStudent.profile.county">
                  <option value="keelung_city">基隆市</option>
                  <option value="taipei_city">台北市</option>
                  <option value="new_taipei_city">新北市</option>
                  <option value="taoyuan_city">桃園縣</option>
                  <option value="hsinchu_city">新竹市</option>
                  <option value="hsinchu_county">新竹縣</option>
                  <option value="miaoli_county">苗栗縣</option>
                  <option value="taichung_city">台中市</option>
                  <option value="changhua_county">彰化縣</option>
                  <option value="nantou_county">南投縣</option>
                  <option value="yunlin_county">雲林縣</option>
                  <option value="chiayi_city">嘉義市</option>
                  <option value="chiayi_county">嘉義縣</option>
                  <option value="tainan_city">台南市</option>
                  <option value="kaohsiung_city">高雄市</option>
                  <option value="pingtung_county">屏東縣</option>
                  <option value="taitung_county">台東縣</option>
                  <option value="hualien_county">花蓮縣</option>
                  <option value="yilan_county">宜蘭縣</option>
                  <option value="penghu_county">澎湖縣</option>
                  <option value="kinmen_county">金門縣</option>
                  <option value="lienchiang_county">連江縣</option>
                </select>
                <label for="countySelect">縣市</label>
              </div>
              <div class="col-md-7 form-floating mt-4">
                <input type="text" class="form-control" id="inputaddress" placeholder="地址" v-model="selectedStudent.profile.address">
                <label for="inputaddress" class="form-label">地址</label>
              </div>
              <div class="col-md-11 mt-4">
                <template v-for="(branchSchool, index) in branchSchools" :key="index">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" :id="branchSchool.name" :value="branchSchool.name" :name="branchSchool.name" v-model="selectedStudent.branchSchools">
                    <label class="form-check-label" :for="branchSchool.name">{{ branchSchool.name }}</label>
                  </div>                        
                </template>
              </div>
              <div class="col-12 modal-footer mt-4">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                <button type="submit" class="btn btn-primary">{{ submitButtonText }}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
