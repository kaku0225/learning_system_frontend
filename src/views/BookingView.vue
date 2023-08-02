<script setup>
  import { ref, onMounted } from 'vue';
  import Modal from 'bootstrap/js/dist/modal'
  import ClassAModal from '../components/ClassAModal.vue'
  import ClassBModal from '../components/ClassBModal.vue'
  import ClassCModal from '../components/ClassCModal.vue'
  import ClassDModal from '../components/ClassDModal.vue'
  import ClassEModal from '../components/ClassEModal.vue'

  const sectional = ref('')
  const today = new Date();
  const currentDate = today.toLocaleDateString("en-CA")
  const dateValue = ref(`${currentDate}`);
  const radioDisabled = ref({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });
  const classTime = ref('')

  const classA = ref({ modal: null })
  const classB = ref({ modal: null })
  const classC = ref({ modal: null })
  const classD = ref({ modal: null })
  const classE = ref({ modal: null })

  function handleClick(radioId) {
    for (const key in radioDisabled.value) {
      radioDisabled.value[key] = key === radioId;
    }
  }

  function openClassA(){
    classA.value.modal.show()
  }

  function openClassB(){
    classB.value.modal.show()
  }

  function openClassC(){
    classC.value.modal.show()
  }

  function openClassD(){
    classD.value.modal.show()
  }

  function openClassE(){
    classE.value.modal.show()
  }



  onMounted(() => {
    classA.value.modal = new Modal('#classA', {})
    classB.value.modal = new Modal('#classB', {})
    classC.value.modal = new Modal('#classC', {})
    classD.value.modal = new Modal('#classD', {})
    classE.value.modal = new Modal('#classE', {})
  })
</script>

<template>
  <h2>新增訂位</h2>
  <hr>
  <div>
    <label for="school">選擇分校</label>
    <select class="form-select w-25" aria-label="school" v-model="classTime">
      <option value="schoolA">分校A</option>
      <option value="schoolB">分校B</option>
    </select>
  </div>
  <br>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" data-bs-toggle="collapse" data-bs-target="#collapse-b1" aria-expanded="false" aria-controls="collapse-b1" :disabled="radioDisabled['1']" @click="handleClick('1')">
    <label class="form-check-label" for="flexRadioDefault1" style="min-width: 300px">
      座位Ａ（一人一位，時間以學期為單位）
    </label>
    <a href="#" @click="openClassA">
      示意圖
    </a>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" data-bs-toggle="collapse" data-bs-target="#collapse-b2" aria-expanded="false" aria-controls="collapse-b2" :disabled="radioDisabled['2']" @click="handleClick('2')">
    <label class="form-check-label" for="flexRadioDefault2" style="min-width: 300px">
      座位Ｂ（一人一位，附電腦，預約制）
    </label>
    <a href="#" @click="openClassB">
      示意圖
    </a>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" data-bs-toggle="collapse" data-bs-target="#collapse-b3" aria-expanded="false" aria-controls="collapse-b3" :disabled="radioDisabled['3']" @click="handleClick('3')">
    <label class="form-check-label" for="flexRadioDefault3" style="min-width: 300px">
      座位Ｃ（一人一位，無電腦，預約制）
    </label>
    <a href="#" @click="openClassC">
      示意圖
    </a>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" data-bs-toggle="collapse" data-bs-target="#collapse-b4" aria-expanded="false" aria-controls="collapse-b4" :disabled="radioDisabled['4']" @click="handleClick('4')">
    <label class="form-check-label" for="flexRadioDefault4" style="min-width: 300px">
      座位Ｄ（一對一輔導，預約制）
    </label>
    <a href="#" @click="openClassD">
      示意圖
    </a>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" data-bs-toggle="collapse" data-bs-target="#collapse-b5" aria-expanded="false" aria-controls="collapse-b5" :disabled="radioDisabled['5']" @click="handleClick('5')">
    <label class="form-check-label" for="flexRadioDefault5" style="min-width: 300px">
      座位Ｅ（團班教室，四人上限，預約制）
    </label>
    <a href="#" @click="openClassE">
      示意圖
    </a>
  </div>

  <div id="myGroup">
    <!-- A -->
    <br>
    <div class="collapse p-3" id="collapse-b1"  data-bs-parent="#myGroup">
      <label for="start">選擇學期</label>
      <select class="form-select" aria-label="Default select example" v-model="sectional">
        <option value="A">A學期</option>
        <option value="B">B學期</option>
        <option value="C">C學期</option>
        <option value="D">D學期</option>
      </select>
      <br>
      <button type="button" class="btn btn-primary">送出</button>
    </div>

    <!-- B -->
    <div class="collapse" id="collapse-b2" data-bs-parent="#myGroup">
      <div class="w-100 p-3">
        <div>
          <label for="start">選擇日期</label>
          <input class="form-control w-100 p-3" type="date" id="start" name="trip-start" :min="currentDate" max="2024-12-31" v-model="dateValue">
        </div>
        <br>
        <div>
          <label for="start">選擇時間</label>
          <select class="form-select w-100 p-3" aria-label="Default select example" v-model="classTime">
            <option value="0900-1200">0900-1200</option>
            <option value="1300-1600">1300-1600</option>
            <option value="1800-2100">1800-2100</option>
          </select>
        </div>
      </div>
      <br>
      <div class="w-100 p-3">
        <span>訂便當<span class="text-danger">（時段1300及1800請提早到班用餐）</span></span>
      </div>
      <div class="d-flex w-100 p-3">
        <div class="form-check" style="margin-right: 5px">
          <input class="form-check-input" type="radio" name="bento" id="orderBento">
          <label class="form-check-label" for="orderBento">
            是
          </label>
        </div>
        <div class="form-check" style="margin-left: 5px">
          <input class="form-check-input" type="radio" name="bento" id="doNotOrderBento">
          <label class="form-check-label" for="doNotOrderBento">
            否
          </label>
        </div>
      </div>
      <br>
      <button type="button" class="btn btn-primary">送出</button>
    </div>

    <!-- C -->
    <div class="collapse" id="collapse-b3" data-bs-parent="#myGroup">
      <div class="w-100 p-3">
        <div>
          <label for="start">選擇日期</label>
          <input class="form-control w-100 p-3" type="date" id="start" name="trip-start" :min="currentDate" max="2024-12-31" v-model="dateValue">
        </div>
        <br>
        <div>
          <label for="start">選擇時間</label>
          <select class="form-select w-100 p-3" aria-label="Default select example" v-model="classTime">
            <option value="0900-1200">0900-1200</option>
            <option value="1300-1600">1300-1600</option>
            <option value="1800-2100">1800-2100</option>
          </select>
        </div>
      </div>
      <br>
      <div class="w-100 p-3">
        <span>訂便當<span class="text-danger">（時段1300及1800請提早到班用餐）</span></span>
      </div>
      <div class="d-flex w-100 p-3">
        <div class="form-check" style="margin-right: 5px">
          <input class="form-check-input" type="radio" name="bento" id="orderBento">
          <label class="form-check-label" for="orderBento">
            是
          </label>
        </div>
        <div class="form-check" style="margin-left: 5px">
          <input class="form-check-input" type="radio" name="bento" id="doNotOrderBento">
          <label class="form-check-label" for="doNotOrderBento">
            否
          </label>
        </div>
      </div>
      <br>
      <button type="button" class="btn btn-primary">送出</button>
    </div>

    <!-- D -->
    <div class="collapse w-100 p-3" id="collapse-b4" data-bs-parent="#myGroup">
      <div>
        <span>輔導科目</span>
      </div>
      <br>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
        <label class="form-check-label" for="inlineCheckbox1">國文</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
        <label class="form-check-label" for="inlineCheckbox2">英文</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
        <label class="form-check-label" for="inlineCheckbox3">數學</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4">
        <label class="form-check-label" for="inlineCheckbox4">地理</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5">
        <label class="form-check-label" for="inlineCheckbox5">歷史</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="option6">
        <label class="form-check-label" for="inlineCheckbox6">公民</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox7" value="option7">
        <label class="form-check-label" for="inlineCheckbox7">理化</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox8" value="option8">
        <label class="form-check-label" for="inlineCheckbox8">生物</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox9" value="option9">
        <label class="form-check-label" for="inlineCheckbox9">地球科學</label>
      </div>
      <div class="mt-4 mb-4">
        <span>訂便當<span class="text-danger">（時段1300及1800請提早到班用餐）</span></span>
      </div>
      <div class="d-flex">
        <div class="form-check" style="margin-right: 5px">
          <input class="form-check-input" type="radio" name="bento" id="orderBento">
          <label class="form-check-label" for="orderBento">
            是
          </label>
        </div>
        <div class="form-check" style="margin-left: 5px">
          <input class="form-check-input" type="radio" name="bento" id="doNotOrderBento">
          <label class="form-check-label" for="doNotOrderBento">
            否
          </label>
        </div>
      </div>
      <br>
      <button type="button" class="btn btn-primary">送出</button>
    </div>

    <!-- E -->
    <div class="collapse" id="collapse-b5" data-bs-parent="#myGroup">
      <div class="w-100 p-3">
        <div>
          <label for="start">選擇日期</label>
          <input class="form-control w-100 p-3" type="date" id="start" name="trip-start" :min="currentDate" max="2024-12-31" v-model="dateValue">
        </div>
        <br>
        <div>
          <label for="start">選擇時間</label>
          <select class="form-select w-100 p-3" aria-label="Default select example" v-model="classTime">
            <option value="0900-1200">0900-1200</option>
            <option value="1300-1600">1300-1600</option>
            <option value="1800-2100">1800-2100</option>
          </select>
        </div>

        <div class="input-group mb-3 mt-4 w-25">
          <input type="text" class="form-control" placeholder="請輸入一起上課的學號" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3 mt-4 w-25">
          <input type="text" class="form-control" placeholder="請輸入一起上課的學號" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3 mt-4 w-25">
          <input type="text" class="form-control" placeholder="請輸入一起上課的學號" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <br>
        <button type="button" class="btn btn-primary">送出</button>
      </div>
    </div>
  </div>
  <ClassAModal></ClassAModal>
  <ClassBModal></ClassBModal>
  <ClassCModal></ClassCModal>
  <ClassDModal></ClassDModal>
  <ClassEModal></ClassEModal>
</template>
