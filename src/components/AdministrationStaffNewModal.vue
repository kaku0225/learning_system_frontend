<script setup>
  import { ref } from 'vue'

  const radioDisabled = ref({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });

  function handleClick(radioId) {
    for (const key in radioDisabled.value) {
      radioDisabled.value[key] = key === radioId;
    }
  }
</script>

<template>
  <div class="modal fade" id="AdministrationStaffModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增員工</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="row g-3 p-3">
          <div class="col-md-6">
            <div class="form-check-inline">
              <label class="form-check-label" for="identity">身份</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" data-bs-toggle="collapse" data-bs-target="#collapse-b1" aria-expanded="false" aria-controls="collapse-b1" :disabled="radioDisabled['1']" @click="handleClick('1')">
              <label class="form-check-label" for="flexRadioDefault1">行政人員</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" data-bs-toggle="collapse" data-bs-target="#collapse-b2" aria-expanded="false" aria-controls="collapse-b2" :disabled="radioDisabled['2']" @click="handleClick('2')">
              <label class="form-check-label" for="flexRadioDefault2">輔導老師</label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-check-inline">
              <label class="form-check-label" for="gender">性別</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="male">
              <label class="form-check-label" for="male">男</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="female">
              <label class="form-check-label" for="female">女</label>
            </div>
          </div>
          <div class="col-md-6">
            <label for="inputName" class="form-label">姓名</label>
            <input type="text" class="form-control" id="inputName">
          </div>
          <div class="col-md-6">
            <label for="inputCellphone" class="form-label">手機</label>
            <input type="text" class="form-control" id="inputCellphone">
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label">電子信箱</label>
            <input type="email" class="form-control" id="email">
          </div>
          <div class="col-md-3">
            <label for="school" class="form-label">畢業學校</label>
            <input type="text" class="form-control" id="school">
          </div>
          <div class="col-md-3">
            <label for="department" class="form-label">科系</label>
            <input type="text" class="form-control" id="department">
          </div>
          <div class="col-md-12">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="school1" value="option1">
              <label class="form-check-label" for="school1">分校1</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="school2" value="option2">
              <label class="form-check-label" for="school2">分校2</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="school3" value="option3">
              <label class="form-check-label" for="school3">分校3</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="school4" value="option4">
              <label class="form-check-label" for="school4">分校4</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="school5" value="option5">
              <label class="form-check-label" for="school5">分校5</label>
            </div>
          </div>
          <div class="col-md-12">
            <div id="myGroup">
              <!-- A -->
              <div class="collapse" id="collapse-b1"  data-bs-parent="#myGroup">
                <label class="form-label" for="inlineCheckbox1">專業科目</label>              
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

              <!-- B -->
              <div class="collapse" id="collapse-b2" data-bs-parent="#myGroup">
              </div>
            </div>
          </div>
          <div class="col-12 modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
            <button type="submit" class="btn btn-primary">新增</button>
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
