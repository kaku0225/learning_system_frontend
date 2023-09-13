<script setup>
import { ref, onMounted } from 'vue';
import Modal from 'bootstrap/js/dist/modal';
import AdministrationStaffNewModal from '../components/AdministrationStaffNewModal.vue'


const AdministrationStaffModal = ref({ modal: null })

function open(){
  AdministrationStaffModal.value.modal.show()
}

onMounted(() => {
  AdministrationStaffModal.value.modal = new Modal('#AdministrationStaffModal', {})
})

</script>

<template>
  <h2>人員管理</h2>
  <hr>
  <form class="form-inline my-2 my-lg-0">
    <div class="d-flex">
      <div>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      </div>
      <div>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </div>
    </div>
    
    <div class="mt-5">
      <label class="form-check-label" for="inlineCheckbox1">依身份篩選：</label>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="guidanceCounselors" value="guidanceCounselors">
        <label class="form-check-label" for="guidanceCounselors">輔導老師</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="administrativeStaff" value="administrativeStaff">
        <label class="form-check-label" for="administrativeStaff">行政人員</label>
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
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="elementarySchoolChinese" value="option3">
                      <label class="form-check-label" for="elementarySchoolChinese">國文</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="elementarySchoolEnglish" value="option3">
                      <label class="form-check-label" for="elementarySchoolEnglish">英文</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="elementarySchoolMath" value="option3">
                      <label class="form-check-label" for="elementarySchoolMath">數學</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="elementarySchoolScience" value="option3">
                      <label class="form-check-label" for="elementarySchoolScience">自然</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="elementarySchoolSocialStudies" value="option3">
                      <label class="form-check-label" for="elementarySchoolSocialStudies">社會</label>
                    </div>
                  </td>
                  <td class="last_td" colspan="5"></td>
                </tr>
                <tr>
                  <th scope="row" class="text-center border" style="width:75px;">國中</th>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="juniorHighSchoolChinese" value="option3">
                      <label class="form-check-label" for="juniorHighSchoolChinese">國文</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="juniorHighSchoolEnglish" value="option3">
                      <label class="form-check-label" for="juniorHighSchoolEnglish">英文</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="juniorHighSchoolMath" value="option3">
                      <label class="form-check-label" for="juniorHighSchoolMath">數學</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="juniorHighSchoolBiology" value="option3">
                      <label class="form-check-label" for="juniorHighSchoolBiology">生物</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="juniorHighSchoolPhysicsAndChemistry" value="option3">
                      <label class="form-check-label" for="juniorHighSchoolPhysicsAndChemistry">理化</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="juniorHighSchoolEarthScience" value="option3">
                      <label class="form-check-label" for="juniorHighSchoolEarthScience">地球科學</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="juniorHighSchoolGeography" value="option3">
                      <label class="form-check-label" for="juniorHighSchoolGeography">地理</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="juniorHighSchoolHistory" value="option3">
                      <label class="form-check-label" for="juniorHighSchoolHistory">歷史</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="juniorHighSchoolCivics" value="option3">
                      <label class="form-check-label" for="juniorHighSchoolCivics">公民</label>
                    </div>
                  </td>
                  <td class="last_td" colspan="1"></td>
                </tr>
                <tr>
                  <th scope="row" class="text-center border" style="width:75px;">高中</th>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="highSchoolChinese" value="option3">
                      <label class="form-check-label" for="highSchoolChinese">國文</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="highSchoolEnglish" value="option3">
                      <label class="form-check-label" for="highSchoolEnglish">英文</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="highSchoolMath" value="option3">
                      <label class="form-check-label" for="highSchoolMath">數學</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="highSchoolBiology" value="option3">
                      <label class="form-check-label" for="highSchoolBiology">生物</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="highSchoolPhysics" value="option3">
                      <label class="form-check-label" for="highSchoolPhysics">物理</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="highSchoolChemistry" value="option3">
                      <label class="form-check-label" for="highSchoolChemistry">化學</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="highSchoolEarthScience" value="option3">
                      <label class="form-check-label" for="highSchoolEarthScience">地球科學</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="highSchoolGeography" value="option3">
                      <label class="form-check-label" for="highSchoolGeography">地理</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="highSchoolHistory" value="option3">
                      <label class="form-check-label" for="highSchoolHistory">歷史</label>
                    </div>
                  </td>
                  <td class="last_td">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="highSchoolCivics" value="option3">
                      <label class="form-check-label" for="highSchoolCivics">公民</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="text-center border" style="width:75px;">高職</th>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="vocationalHighSchoolChinese" value="option3">
                      <label class="form-check-label" for="vocationalHighSchoolChinese">國文</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="vocationalHighSchoolEnglish" value="option3">
                      <label class="form-check-label" for="vocationalHighSchoolEnglish">英文</label>
                    </div>
                  </td>
                  <td class="border-top border-bottom">
                    <div class="form-check-inline">
                      <input class="form-check-input" type="checkbox" id="vocationalHighSchoolMath" value="option3">
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
  </form>
  <hr>
  <div class="tab-content" id="myTabContent">
    <!-- class home work -->
    <div class="tab-pane fade show active" id="class-home-work" role="tabpanel" aria-labelledby="class-home-work-tab">
      <br>
      <button type="button" class="btn btn-primary" @click="open">新增人員</button>
      <table class="table table-bordered" style="margin-top: 30px">
        <thead>
          <tr>
            <th scope="col">姓名</th>
            <th scope="col">身份</th>
            <th scope="col">學級別</th>
            <th scope="col">專業科目</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>小明</td>
              <td>老師</td>
              <td>國小、國中</td>
              <td>國文、數學</td>
            </tr>
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
  <AdministrationStaffNewModal></AdministrationStaffNewModal>
</template>

<style scoped>
  .last_td {
    border-top: 1px solid #dee2e6;
    border-bottom: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
  }
</style>