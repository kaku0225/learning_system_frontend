<script setup>
import { ref, onMounted } from 'vue';
import Modal from 'bootstrap/js/dist/modal';
import TeacherNewModal from '../components/TeacherNewModal.vue'
import { storeToRefs } from 'pinia'
import { useTeachersAccountStore } from "@/stores/teachersAccount.js"

const store = useTeachersAccountStore()
const { fetchTeachers, assignSelectedTeacher, fetchBranchSchools } = store
const { filteredTeachers, filter } = storeToRefs(store)

const TeacherModal = ref({ modal: null })

function open(teacher) {
  fetchBranchSchools()
  if(teacher) {
    assignSelectedTeacher(teacher)
  } else {
    assignSelectedTeacher({id: '', email: '', name: '', profile: { gender: '', cellphone: '', school: '', major: '' }, branchSchools: [], subjects: [] })
  }
  TeacherModal.value.modal.show()
}

function hide() {
  TeacherModal.value.modal.hide()
}


onMounted(() => {
  fetchTeachers()
  TeacherModal.value.modal = new Modal('#TeacherModal', {})
})

</script>

<template>
  <h2>老師管理</h2>
  <hr>
  <div class="d-flex">
    <div>
      <div class="input-group rounded">
        <input type="search" class="form-control rounded" placeholder="Search Name" aria-label="Search" aria-describedby="search-addon" v-model="filter.name" />
        <span class="input-group-text border-0" id="search-addon">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </span>
      </div>
    </div>
  </div>
  <div class="mt-5">
    <div class="d-flex">
      <div>
        <label class="form-check-label" for="inlineCheckbox1">依科目篩選：</label>
      </div>
      <div>
        <table class="table table-borderless">
          <tbody>
              <tr>
                <th scope="row" class="text-center border" style="width:75px;">國小</th>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="elementarySchoolChinese" value="elementarySchoolChinese" v-model="filter.subjects">
                    <label class="form-check-label" for="elementarySchoolChinese">國文</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="elementarySchoolEnglish" value="elementarySchoolEnglish" v-model="filter.subjects">
                    <label class="form-check-label" for="elementarySchoolEnglish">英文</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="elementarySchoolMath" value="elementarySchoolMath" v-model="filter.subjects">
                    <label class="form-check-label" for="elementarySchoolMath">數學</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="elementarySchoolScience" value="elementarySchoolScience" v-model="filter.subjects">
                    <label class="form-check-label" for="elementarySchoolScience">自然</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="elementarySchoolSocialStudies" value="elementarySchoolSocialStudies" v-model="filter.subjects">
                    <label class="form-check-label" for="elementarySchoolSocialStudies">社會</label>
                  </div>
                </td>
                <td class="last_td" colspan="5"></td>
              </tr>
              <tr>
                <th scope="row" class="text-center border" style="width:75px;">國中</th>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="juniorHighSchoolChinese" value="juniorHighSchoolChinese" v-model="filter.subjects">
                    <label class="form-check-label" for="juniorHighSchoolChinese">國文</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="juniorHighSchoolEnglish" value="juniorHighSchoolEnglish" v-model="filter.subjects">
                    <label class="form-check-label" for="juniorHighSchoolEnglish">英文</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="juniorHighSchoolMath" value="juniorHighSchoolMath" v-model="filter.subjects">
                    <label class="form-check-label" for="juniorHighSchoolMath">數學</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="juniorHighSchoolBiology" value="juniorHighSchoolBiology" v-model="filter.subjects">
                    <label class="form-check-label" for="juniorHighSchoolBiology">生物</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="juniorHighSchoolPhysicsAndChemistry" value="juniorHighSchoolPhysicsAndChemistry" v-model="filter.subjects">
                    <label class="form-check-label" for="juniorHighSchoolPhysicsAndChemistry">理化</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="juniorHighSchoolEarthScience" value="juniorHighSchoolEarthScience" v-model="filter.subjects">
                    <label class="form-check-label" for="juniorHighSchoolEarthScience">地球科學</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="juniorHighSchoolGeography" value="juniorHighSchoolGeography" v-model="filter.subjects">
                    <label class="form-check-label" for="juniorHighSchoolGeography">地理</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="juniorHighSchoolHistory" value="juniorHighSchoolHistory" v-model="filter.subjects">
                    <label class="form-check-label" for="juniorHighSchoolHistory">歷史</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="juniorHighSchoolCivics" value="juniorHighSchoolCivics" v-model="filter.subjects">
                    <label class="form-check-label" for="juniorHighSchoolCivics">公民</label>
                  </div>
                </td>
                <td class="last_td" colspan="1"></td>
              </tr>
              <tr>
                <th scope="row" class="text-center border" style="width:75px;">高中</th>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="seniorHighSchoolChinese" value="seniorHighSchoolChinese" v-model="filter.subjects">
                    <label class="form-check-label" for="seniorHighSchoolChinese">國文</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="seniorHighSchoolEnglish" value="seniorHighSchoolEnglish" v-model="filter.subjects">
                    <label class="form-check-label" for="seniorHighSchoolEnglish">英文</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="seniorHighSchoolMath" value="seniorHighSchoolMath" v-model="filter.subjects">
                    <label class="form-check-label" for="seniorHighSchoolMath">數學</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="seniorHighSchoolBiology" value="seniorHighSchoolBiology" v-model="filter.subjects">
                    <label class="form-check-label" for="seniorHighSchoolBiology">生物</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="seniorHighSchoolPhysics" value="seniorHighSchoolPhysics" v-model="filter.subjects">
                    <label class="form-check-label" for="seniorHighSchoolPhysics">物理</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="seniorHighSchoolChemistry" value="seniorHighSchoolChemistry" v-model="filter.subjects">
                    <label class="form-check-label" for="seniorHighSchoolChemistry">化學</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="seniorHighSchoolEarthScience" value="seniorHighSchoolEarthScience" v-model="filter.subjects">
                    <label class="form-check-label" for="seniorHighSchoolEarthScience">地球科學</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="seniorHighSchoolGeography" value="seniorHighSchoolGeography" v-model="filter.subjects">
                    <label class="form-check-label" for="seniorHighSchoolGeography">地理</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="seniorHighSchoolHistory" value="seniorHighSchoolHistory" v-model="filter.subjects">
                    <label class="form-check-label" for="seniorHighSchoolHistory">歷史</label>
                  </div>
                </td>
                <td class="last_td">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="seniorHighSchoolCivics" value="seniorHighSchoolCivics" v-model="filter.subjects">
                    <label class="form-check-label" for="seniorHighSchoolCivics">公民</label>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" class="text-center border" style="width:75px;">高職</th>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="vocationalHighSchoolChinese" value="vocationalHighSchoolChinese" v-model="filter.subjects">
                    <label class="form-check-label" for="vocationalHighSchoolChinese">國文</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="vocationalHighSchoolEnglish" value="vocationalHighSchoolEnglish" v-model="filter.subjects">
                    <label class="form-check-label" for="vocationalHighSchoolEnglish">英文</label>
                  </div>
                </td>
                <td class="border-top border-bottom">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="vocationalHighSchoolMath" value="vocationalHighSchoolMath" v-model="filter.subjects">
                    <label class="form-check-label" for="vocationalHighSchoolMath">數學</label>
                  </div>
                </td>
                <td class="last_td" colspan="7"></td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <hr>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="class-home-work" role="tabpanel" aria-labelledby="class-home-work-tab">
      <br>
      <button type="button" class="btn btn-primary" @click="open('')">新增老師</button>
      <table class="table table-bordered" style="margin-top: 30px">
        <thead>
          <tr>
            <th scope="col">姓名</th>
            <th scope="col">身份</th>
            <th scope="col">專業科目</th>
          </tr>
        </thead>
        <tbody>
            <template v-for="(teacher, index) in filteredTeachers" :key="index">
              <tr>
                <td>
                  <a href="#" @click="open(teacher)">
                    {{ teacher.name }}
                  </a>
                </td>
                <td>老師</td>
                <td>{{ teacher.subjects.map(subject => $t(subject.name)).join('、') }}</td>
              </tr>
            </template>
        </tbody>
      </table>
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <span class="page-link">Previous</span>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active">
            <span class="page-link">
              2
            </span>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <TeacherNewModal @hideModal="hide"></TeacherNewModal>
</template>

<style scoped>
  .last_td {
    border-top: 1px solid #dee2e6;
    border-bottom: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
  }
</style>
