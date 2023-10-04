<script setup>
import { storeToRefs } from 'pinia'
import { useTeachersAccountStore } from "@/stores/teachersAccount.js"

const emits = defineEmits(['hideModal'])
const store = useTeachersAccountStore()
const { mutationTeacherSignUp, mutationTeacherUpdate } = store
const { selectedTeacher, selectedTeacherProfile, titleText, submitButtonText, branchSchools } = storeToRefs(store)

async function mutationSignUp(){
  const hide = await mutationTeacherSignUp()
  if(hide){
    emits('hideModal')
  }
}

async function mutationUpdate(){
  const hide = await mutationTeacherUpdate()
  if(hide){
    emits('hideModal')
  }
}

function signUpOrUpdate() {
  if(selectedTeacher.value.id) {
    mutationUpdate()
  } else {
    mutationSignUp()
  }
}
</script>

<template>
  <div class="modal fade" id="TeacherModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="male" v-model="selectedTeacherProfile.gender">
              <label class="form-check-label" for="male">男</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="female" v-model="selectedTeacherProfile.gender">
              <label class="form-check-label" for="female">女</label>
            </div>
          </div>
          <div class="col-md-6">
            <label for="inputName" class="form-label">姓名</label>
            <input type="text" class="form-control" id="inputName" v-model="selectedTeacher.name">
          </div>
          <div class="col-md-6">
            <label for="inputCellphone" class="form-label">手機</label>
            <input type="text" class="form-control" id="inputCellphone" v-model="selectedTeacherProfile.cellphone">
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label">電子信箱</label>
            <input type="email" class="form-control" id="email" v-model="selectedTeacher.email">
          </div>
          <div class="col-md-3">
            <label for="school" class="form-label">畢業學校</label>
            <input type="text" class="form-control" id="school" v-model="selectedTeacherProfile.school">
          </div>
          <div class="col-md-3">
            <label for="department" class="form-label">科系</label>
            <input type="text" class="form-control" id="department" v-model="selectedTeacherProfile.major">
          </div>
          <div class="col-md-12">
            <label class="form-label" for="inlineCheckbox1">專業科目</label>
            <table class="table table-borderless">
              <tbody>
                  <tr>
                    <th scope="row" class="text-center border" style="width:75px;">國小</th>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="elementary-school-chinese" value="elementarySchoolChinese" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="elementary-school-chinese">國文</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="elementary-school-english" value="elementarySchoolEnglish" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="elementary-school-english">英文</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="elementary-school-math" value="elementarySchoolMath" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="elementary-school-math">數學</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="elementary-school-science" value="elementarySchoolScience" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="elementary-school-science">自然</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="elementary-school-social-studies" value="elementarySchoolSocialStudies" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="elementary-school-social-studies">社會</label>
                      </div>
                    </td>
                    <td class="last_td" colspan="5"></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-center border" style="width:75px;">國中</th>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="junior-high-school-chinese" value="juniorHighSchoolChinese" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="junior-high-school-chinese">國文</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="junior-high-school-english" value="juniorHighSchoolEnglish" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="junior-high-school-english">英文</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="junior-high-school-math" value="juniorHighSchoolMath" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="junior-high-school-math">數學</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="junior-high-school-biology" value="juniorHighSchoolBiology" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="junior-high-school-biology">生物</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="junior-high-school-physics-and-chemistry" value="juniorHighSchoolPhysicsAndChemistry" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="junior-high-school-physics-and-chemistry">理化</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="junior-high-school-earth-science" value="juniorHighSchoolEarthScience" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="junior-high-school-earth-science">地球科學</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="junior-high-school-geography" value="juniorHighSchoolGeography" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="junior-high-school-geography">地理</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="junior-high-school-history" value="juniorHighSchoolHistory" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="junior-high-school-history">歷史</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="junior-high-school-civics" value="juniorHighSchoolCivics" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="junior-high-school-civics">公民</label>
                      </div>
                    </td>
                    <td class="last_td" colspan="1"></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-center border" style="width:75px;">高中</th>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="high-school-chinese" value="highSchoolChinese" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="high-school-chinese">國文</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="high-school-english" value="highSchoolEnglish" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="high-school-english">英文</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="high-school-math" value="highSchoolMath" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="high-school-math">數學</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="high-school-biology" value="highSchoolBiology" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="high-school-biology">生物</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="high-school-physics" value="highSchoolPhysics" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="high-school-physics">物理</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="high-school-chemistry" value="highSchoolChemistry" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="high-school-chemistry">化學</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="high-school-earth-science" value="highSchoolEarthScience" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="high-school-earth-science">地球科學</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="high-school-geography" value="highSchoolGeography" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="high-school-geography">地理</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="high-school-history" value="highSchoolHistory" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="high-school-history">歷史</label>
                      </div>
                    </td>
                    <td class="last_td">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="high-school-civics" value="highSchoolCivics" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="high-school-civics">公民</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-center border" style="width:75px;">高職</th>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="vocational-high-school-chinese" value="vocationalHighSchoolChinese" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="vocational-high-school-chinese">國文</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="vocational-high-school-english" value="vocationalHighSchoolEnglish" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="vocational-high-school-english">英文</label>
                      </div>
                    </td>
                    <td class="border-top border-bottom">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="vocational-high-school-math" value="vocationalHighSchoolMath" v-model="selectedTeacher.subjects">
                        <label class="form-check-label" for="vocational-high-school-math">數學</label>
                      </div>
                    </td>
                    <td class="last_td" colspan="7"></td>
                  </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-12">
            <template v-for="(branchSchool, index) in branchSchools" :key="index">              
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" :id="branchSchool.name" :value="branchSchool.name" v-model="selectedTeacher.branchSchools">
                <label class="form-check-label" :for="branchSchool.name">{{ branchSchool.name }}</label>
              </div>
            </template>
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
