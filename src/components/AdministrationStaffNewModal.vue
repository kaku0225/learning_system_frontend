<script setup>
</script>

<template>
  <div class="modal fade" id="AdministrationStaffModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增行政人員</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="row g-3 p-3">
          <div class="col-md-12">
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
