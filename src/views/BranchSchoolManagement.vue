<script setup>
import { ref, onMounted } from 'vue';
import Modal from 'bootstrap/js/dist/modal'
import BranchSchoolNewModal from '../components/BranchSchoolNewModal.vue'


const BranchSchoolModal = ref({ modal: null})

function open() {
  BranchSchoolModal.value.modal.show()
}

onMounted(() => {
  BranchSchoolModal.value.modal = new Modal('#BranchSchoolModal', {})
})


</script>

<template>
  <h2>分校管理</h2>
  <hr>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="class-home-work" role="tabpanel" aria-labelledby="class-home-work-tab">
      <br>
      <button type="button" class="btn btn-primary" @click="open">新增分校</button>
      <table class="table table-bordered" style="margin-top: 30px">
        <thead>
          <tr>
            <th scope="col">分校名稱</th>
            <th scope="col">分校電話</th>
            <th scope="col">分校地址</th>
            <th scope="col">班主任</th>
            <th scope="col">班主任</th>
            <th scope="col">班主任</th>
          </tr>
        </thead>
        <tbody>          
          <tr>
            <td>台南分校</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
  <BranchSchoolNewModal ref="BranchSchoolModal"></BranchSchoolNewModal>
</template>