<script setup>
import { ref, onMounted } from 'vue'
import Popover from 'bootstrap/js/dist/popover'


const popover_teacher = ref({ popover: null })


const months = ref(['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'])

const message = ref('國文-老師A<br>數學-老師B')

// console.log(['aaa', 'bbb', 'ccc'].join('<br>'))

onMounted(() => {
  popover_teacher.value.popover = new Popover(document.querySelector('[data-bs-toggle="popover_teacher"]'), {
    html: true
  });
})


</script>

<template>
  <h2>訂位紀錄</h2>
  <hr>
  <form>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">以訂位時間篩選：</label>
      <div class="col-3">
        <select class="form-select" aria-label="school">
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
      <div class="col-3">
        <select class="form-select" aria-label="school">
          <template v-for="(month, index) in months" :key="index">
            <option :value="index + 1">{{ month }}</option>
          </template>
        </select>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">以預約時間篩選：</label>
      <div class="col-3">
        <select class="form-select" aria-label="school">
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
      <div class="col-3">
        <select class="form-select" aria-label="school">
          <template v-for="(month, index) in months" :key="index">
            <option :value="index + 1">{{ month }}</option>
          </template>
        </select>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">座位類型：</label>
      <div class="col-3">
        <select class="form-select" aria-label="school">
          <option value="unlimited">不限</option>
          <option value="long_term">長期</option>
          <option value="short_term">短期</option>
        </select>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">狀態：</label>
      <div class="col-3">
        <select class="form-select" aria-label="school">
          <option value="unlimited">不限</option>
          <option value="success">訂位成功</option>
          <option value="cancel">取消</option>
          <option value="pending">待繳費</option>
          <option value="expired">逾期未繳費</option>
        </select>
      </div>
    </div>
    <button id="search-button" type="button" class="btn btn-primary rounded-circle">
      <i class="bi bi-search"></i>
    </button>
  </form>
  <!-- <button type="button" class="btn btn-primary" data-bs-toggle="popover" data-bs-content="This is a popover">Click me</button> -->
  <br>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">訂位時間</th>
        <th scope="col">座位名稱</th>
        <th scope="col">座位說明</th>
        <th scope="col">類型</th>
        <th scope="col">輔導老師</th>
        <th scope="col">便當</th>
        <th scope="col">預約起始時間</th>
        <th scope="col">預約結束時間</th>
        <th scope="col">狀態</th>
        <th scope="col"><i class="bi bi-x-circle"></i></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2020/03/15 13:42</td>
        <td>座位A</td>
        <td>一人一位，時間以學期為單位</td>
        <td>長期</td>
        <td>
          <span>無</span>
        </td>
        <td>Ｘ</td>
        <td>2020/06/30 00:00</td>
        <td>2021/02/01 00:00</td>
        <td>待繳費</td>
        <td>取消</td>
      </tr>
      <tr>
        <td>2020/01/15 10:33</td>
        <td>座位C</td>
        <td>一人一位，無電腦，預約制</td>
        <td>短期</td>
        <td>
          <span data-bs-toggle="popover_teacher" tabindex="0" data-bs-trigger="hover focus" :data-bs-content="message">有</span>
        </td>
        <td>Ｏ</td>
        <td>2020/04/23 09:00</td>
        <td>2020/04/23 12:00</td>
        <td>訂位成功</td>
        <td></td>
      </tr>
      <tr>
        <td>2020/01/15 08:11</td>
        <td>座位D</td>
        <td>一對一輔導，預約制</td>
        <td>短期</td>
        <td>
          <span>
            無
          </span>
        </td>
        <td>Ｏ</td>
        <td>2020/04/23 00:00</td>
        <td>2020/04/23 12:00</td>
        <td>已取消</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>
