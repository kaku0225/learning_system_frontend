<script setup>
import { ref, onMounted } from 'vue';
import Modal from 'bootstrap/js/dist/modal';
import AdministrationStaffNewModal from '../components/AdministrationStaffNewModal.vue'

import { storeToRefs } from 'pinia'
import { useAdministrationStaffsAccountStore } from "@/stores/administrationStaffsAccount.js"

const store = useAdministrationStaffsAccountStore()
const { fetchAdministrationStaffs, assignSelectedAdministrationStaff } = store
const { filteredAdministrationStaffs, filter } = storeToRefs(store)


const AdministrationStaffModal = ref({ modal: null })

function open(staff){
  if(staff) {
    assignSelectedAdministrationStaff(staff)
  } else {
    assignSelectedAdministrationStaff({id: '', email: '', name: '', profile: { gender: '', cellphone: '', school: '', major: '' }, branchSchools: [] })
  }
  AdministrationStaffModal.value.modal.show()
}

function hide(){
  AdministrationStaffModal.value.modal.hide()
}

onMounted(() => {
  fetchAdministrationStaffs()
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
          <button type="button" class="btn btn-primary" @click="open('')">新增行政人員</button>
        </div>
        <div>
          <div class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="Search Name" aria-label="Search" aria-describedby="search-addon" v-model="filter.name" />
            <span class="input-group-text border-0" id="search-addon">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </span>
          </div>
        </div>
      </div>
      <table class="table table-bordered" style="margin-top: 30px">
        <thead>
          <tr>
            <th scope="col">姓名</th>
            <th scope="col">身份</th>
          </tr>
        </thead>
        <tbody>
            <template v-for="(staff, index) in filteredAdministrationStaffs" :key="index">
              <tr>
                <td>
                  <a href="#" @click="open(staff)">
                    {{ staff.name }}
                  </a>
                </td>
                <td>行政人員</td>
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
  <AdministrationStaffNewModal @hideModal="hide"></AdministrationStaffNewModal>
</template>

<style scoped>
  .last_td {
    border-top: 1px solid #dee2e6;
    border-bottom: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
  }
</style>