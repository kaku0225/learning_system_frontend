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
  <h2>行政人員管理</h2>
  <hr>
  <div class="tab-content" id="myTabContent">
    <!-- class home work -->
    <div class="tab-pane fade show active" id="class-home-work" role="tabpanel" aria-labelledby="class-home-work-tab">
      <br>
      <div class="d-flex justify-content-between">
        <div>
          <button type="button" class="btn btn-primary" @click="open">新增行政人員</button>
        </div>
        <div>
          <form class="form-inline my-2 my-lg-0">
            <div class="d-flex">
              <div>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              </div>
              <div>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <table class="table table-bordered" style="margin-top: 30px">
        <thead>
          <tr>
            <th scope="col">姓名</th>
            <th scope="col">行政人員</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>小明</td>
              <td>行政人員</td>
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