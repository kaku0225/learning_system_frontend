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
                      <input type="text" class="form-control" id="inputName" placeholder="姓名" v-model="student.name">
                      <label for="inputName" class="form-label">姓名</label>
                    </div>
                    <div class="col-md-5 form-floating">
                      <input type="email" class="form-control" id="inputEmail" placeholder="email" v-model="student.email">
                      <label for="inputEmail" class="form-label">email</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4">
                      <input type="password" class="form-control" id="inputPassword" placeholder="密碼" v-model="student.password">
                      <label for="inputPassword" class="form-label">密碼</label>
                      <div id="emailHelp" class="form-text">大於等於8個字元、包含一個數字</div>
                      <div id="emailHelp" class="form-text">包含一個大寫英文、包含一個小寫英文</div>
                    </div>
                    <div class="col-md-5 form-floating mt-4">
                      <input type="password" class="form-control" id="inputPasswordConfirmation" placeholder="再次確認密碼" v-model="student.passwordConfirmation">
                      <label for="inputPasswordConfirmation" class="form-label">再次確認密碼</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4">
                      <input type="date" class="form-control" id="inputDate" placeholder="生日" v-model="student.birthday">
                      <label for="inputDate" class="form-label">生日</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4">
                      <input type="text" class="form-control" id="inputCellPhone" placeholder="手機" v-model="student.cellphone">
                      <label for="inputCellPhone" class="form-label">手機</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4">
                      <input type="text" class="form-control" id="inputPhone" placeholder="市話" v-model="student.phone">
                      <label for="inputPhone" class="form-label">市話</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4">
                      <input type="text" class="form-control" id="inputSchool" placeholder="學校" v-model="student.school">
                      <label for="inputSchool" class="form-label">學校</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4">
                      <select class="form-select" id="floatingSelect" aria-label="Floating label select example" @change="switchSubSelect(student.mainGrade)" v-model="student.mainGrade">
                        <option value="elementary_school">國小</option>
                        <option value="junior_high_school">國中</option>
                        <option value="senior_high_school">高中</option>
                        <option value="vocational_high_school">高職</option>
                      </select>
                      <label for="floatingSelect">學級</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4" :class="{ 'd-none': hideGradeSubSelect.elementary }">
                      <select class="form-select" id="elementarySelect" aria-label="elementarySelect" v-model="student.subGrade">
                        <option value="first_grade">一年級</option>
                        <option value="second_grade">二年級</option>
                        <option value="third_grade">三年級</option>
                        <option value="fourth_grade">四年級</option>
                        <option value="fifth_grade">五年級</option>
                        <option value="sixth_grade">六年級</option>
                      </select>
                      <label for="elementarySelect ">年級</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4" :class="{ 'd-none': hideGradeSubSelect.junior }">
                      <select class="form-select" id="juniorHighSelect" aria-label="juniorHighSelect" v-model="student.subGrade">
                        <option value="seventh_grade">七年級</option>
                        <option value="eighth_Grade">八年級</option>
                        <option value="ninth_grade">九年級</option>
                      </select>
                      <label for="juniorHighSelect ">年級</label>
                    </div>
                    <div class="col-md-5 form-floating mt-4" :class="{ 'd-none': hideGradeSubSelect.senior }">
                      <select class="form-select" id="seniorHighSchoolSelect" aria-label="seniorHighSchoolSelect" v-model="student.subGrade">
                        <option value="tenth_grade">高一</option>
                        <option value="eleventh_grade">高二</option>
                        <option value="twelfth_grade">高三</option>
                      </select>
                      <label for="seniorHighSchoolSelect ">年級</label>
                    </div>
                    <div class="col-md-3 form-floating mt-4">
                      <select class="form-select" id="countySelect" aria-label="Floating label select example" v-model="student.county">
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
                      <input type="text" class="form-control" id="inputaddress" placeholder="地址" v-model="student.address">
                      <label for="inputaddress" class="form-label">地址</label>
                    </div>
                    <div class="col-md-11 mt-4">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="branchSchoolACheck" value="A" name="branchSchool" v-model="student.branchSchool">
                        <label class="form-check-label" for="branchSchoolACheck">分校A</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="branchSchoolBCheck" value="B" name="branchSchool" v-model="student.branchSchool">
                        <label class="form-check-label" for="branchSchoolBCheck">分校B</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="branchSchoolCCheck" value="C" name="branchSchool" v-model="student.branchSchool">
                        <label class="form-check-label" for="branchSchoolCCheck">分校C</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="branchSchoolDCheck" value="D" name="branchSchool" v-model="student.branchSchool">
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

<script setup>
import { ref } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import gql from 'graphql-tag'
import router from '../router';

const student = ref({
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  birthday: '',
  cellphone: '',
  phone: '',
  school: '',
  mainGrade: 'elementary_school',
  subGrade: 'first_grade',
  county: 'keelung_city',
  address: '',
  branchSchool: ''
})

const hideGradeSubSelect = ref({
  elementary: false,
  junior: true,
  senior: true
})

const { mutate: signUp } = useMutation(gql`
  mutation signUp ($name: String!, $email: String!, $password: String!, $passwordConfirmation: String!, $birthday: String!, $cellphone: String!, $phone: String!, $school: String!, $mainGrade: String!, $subGrade: String!, $county: String!, $address: String!, $branchSchool: String!) {
    signUp (input: {name: $name, email: $email, password: $password, passwordConfirmation: $passwordConfirmation, birthday: $birthday, cellphone: $cellphone, phone: $phone, school: $school, mainGrade: $mainGrade, subGrade: $subGrade, county: $county, address: $address, branchSchool: $branchSchool }) {
      student { id }
      success
      message
    }
  }
`, () => ({
  variables: {
    name: student.value.name,
    email: student.value.email,
    password: student.value.password,
    passwordConfirmation: student.value.passwordConfirmation,
    birthday: student.value.birthday,
    cellphone: student.value.cellphone,
    phone: student.value.phone,
    school: student.value.school,
    mainGrade: student.value.mainGrade,
    subGrade: student.value.subGrade,
    county: student.value.county,
    address: student.value.address,
    branchSchool: student.value.branchSchool
  },
}))

function switchSubSelect(value) {
  if(value === 'senior_high_school' || value === 'vocational_high_school') {
    value = 'senior_high_school'
  }

  hideGradeSubSelect.value = {
    elementary: value !== 'elementary_school',
    junior: value !== 'junior_high_school',
    senior: value !== 'senior_high_school'
  };

  student.value.subGrade = '';
}

function mutationSignUp(){
  signUp().then(result => {
    if(result.data.signUp.success) {
      console.log('111')
      router.push('/login')
    } else {
      console.log('222')
      toast.error(result.data.signUp.message, { autoClose: 3000 })
    }
  });
}

</script>

