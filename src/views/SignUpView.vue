<script setup>
  import { storeToRefs } from 'pinia'
  import { useSignUpStore } from "@/stores/signUp.js"
  const store = useSignUpStore()
  const { switchSubSelect, mutationSignUp } = store
  const { student, showGradeSubSelect } = storeToRefs(store)
</script>

<template>
  <!-- Section: Design Block -->
  <section class="bg-image min-vh-100"
    style="background-image: url('https://images.unsplash.com/photo-1529697216570-f48ef8f6b2dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlbGF4fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'); background-size: 100% 100%">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-7">
            <div class="bg-opacity-10 shadow-lg p-3 mb-5 bg-white rounded" style="border-radius: 15px;">
                <h2 class="text-uppercase text-center mb-5">報名</h2>
                <form class="row g-3" @submit.prevent="mutationSignUp">
                  <div class="d-flex justify-content-center justify-content-around flex-wrap">
                    <div class="col-md-5 form-floating">
                      <input type="text" class="form-control" id="inputName" placeholder="姓名" v-model="student.info.name">
                      <label for="inputName" class="form-label">姓名</label>
                    </div>
                    <div class="col-md-5 form-floating">
                      <input type="email" class="form-control" id="inputEmail" placeholder="email" autocomplete="email" v-model="student.info.email">
                      <label for="inputEmail" class="form-label">email</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4">
                      <input type="password" class="form-control" id="inputPassword" placeholder="密碼" autocomplete="current-password" v-model="student.info.password">
                      <label for="inputPassword" class="form-label">密碼</label>
                      <div id="emailHelp" class="form-text">大於等於8個字元、包含一個數字</div>
                      <div id="emailHelp" class="form-text">包含一個大寫英文、包含一個小寫英文</div>
                    </div>
                    <div class="col-md-5 form-floating mt-4">
                      <input type="password" class="form-control" id="inputPasswordConfirmation" placeholder="再次確認密碼" autocomplete="current-password" v-model="student.info.passwordConfirmation">
                      <label for="inputPasswordConfirmation" class="form-label">再次確認密碼</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4">
                      <input type="date" class="form-control" id="inputDate" placeholder="生日" v-model="student.profile.birthday">
                      <label for="inputDate" class="form-label">生日</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4">
                      <input type="text" class="form-control" id="inputCellPhone" placeholder="手機" v-model="student.profile.cellphone">
                      <label for="inputCellPhone" class="form-label">手機</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4">
                      <input type="text" class="form-control" id="inputPhone" placeholder="市話" v-model="student.profile.phone">
                      <label for="inputPhone" class="form-label">市話</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4">
                      <input type="text" class="form-control" id="inputSchool" placeholder="學校" v-model="student.profile.school">
                      <label for="inputSchool" class="form-label">學校</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4">
                      <select class="form-select" id="floatingSelect" aria-label="Floating label select example" @change="switchSubSelect(student.profile.mainGrade)" v-model="student.profile.mainGrade">
                        <option value="elementary_school">國小</option>
                        <option value="junior_high_school">國中</option>
                        <option value="senior_high_school">高中</option>
                        <option value="vocational_high_school">高職</option>
                      </select>
                      <label for="floatingSelect">學級</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4" :class="{ 'd-none': !showGradeSubSelect.elementary }">
                      <select class="form-select" id="elementarySelect" aria-label="elementarySelect" v-model="student.profile.subGrade">
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
                      <select class="form-select" id="juniorHighSelect" aria-label="juniorHighSelect" v-model="student.profile.subGrade">
                        <option value="seventh_grade">七年級</option>
                        <option value="eighth_Grade">八年級</option>
                        <option value="ninth_grade">九年級</option>
                      </select>
                      <label for="juniorHighSelect ">年級</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4" :class="{ 'd-none': !showGradeSubSelect.senior }">
                      <select class="form-select" id="seniorHighSchoolSelect" aria-label="seniorHighSchoolSelect" v-model="student.profile.subGrade">
                        <option value="tenth_grade">高一</option>
                        <option value="eleventh_grade">高二</option>
                        <option value="twelfth_grade">高三</option>
                      </select>
                      <label for="seniorHighSchoolSelect ">年級</label>
                    </div>
                    <div class="col-md-3 form-floating mt-4">
                      <select class="form-select" id="countySelect" aria-label="Floating label select example" v-model="student.profile.county">
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
                      <input type="text" class="form-control" id="inputaddress" placeholder="地址" v-model="student.profile.address">
                      <label for="inputaddress" class="form-label">地址</label>
                    </div>
                    <div class="col-md-11 mt-4">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="branchSchoolACheck" value="A" name="branchSchool_A" v-model="student.branchSchools">
                        <label class="form-check-label" for="branchSchoolACheck">分校A</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="branchSchoolBCheck" value="B" name="branchSchool_B" v-model="student.branchSchools">
                        <label class="form-check-label" for="branchSchoolBCheck">分校B</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="branchSchoolCCheck" value="C" name="branchSchool_C" v-model="student.branchSchools">
                        <label class="form-check-label" for="branchSchoolCCheck">分校C</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="branchSchoolDCheck" value="D" name="branchSchool_D" v-model="student.branchSchools">
                        <label class="form-check-label" for="branchSchoolDCheck">分校D</label>
                      </div>
                    </div>
                    <div class="col-11 mt-4">
                      <button type="submit" class="btn btn-primary">送出報名</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  </section>
  <!-- Section: Design Block -->
</template>
