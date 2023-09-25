<script setup>
  import { ref, onMounted } from 'vue';
  import Modal from 'bootstrap/js/dist/modal'
  import BranchSchoolNewModal from '../components/BranchSchoolNewModal.vue'
  import { storeToRefs } from 'pinia'
  import { useBranchSchoolManagementStore } from "@/stores/branchSchoolManagement.js"

  const store = useBranchSchoolManagementStore()
  const { fetchBranchSchools, assignSelectedBranchSchool } = store
  const { branchSchools } = storeToRefs(store)

  const BranchSchoolModal = ref({ modal: null})

  function open(branchSchool) {
    if(branchSchool) {
      assignSelectedBranchSchool(branchSchool)
    } else {
      assignSelectedBranchSchool({id: '', name: '', phone: '', address: '', enabled: false })
    }
    BranchSchoolModal.value.modal.show()
  }

  function hide() {
    BranchSchoolModal.value.modal.hide()
  }

  onMounted(() => {
    fetchBranchSchools()
    BranchSchoolModal.value.modal = new Modal('#BranchSchoolModal', {})
  })
</script>

<template>
  <h2>分校管理</h2>
  <hr>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="class-home-work" role="tabpanel" aria-labelledby="class-home-work-tab">
      <br>
      <button type="button" class="btn btn-primary" @click="open('')">新增分校</button>
      <table class="table table-bordered" style="margin-top: 30px">
        <thead>
          <tr>
            <th scope="col">分校名稱</th>
            <th scope="col">分校電話</th>
            <th scope="col">分校地址</th>
            <th scope="col">班主任</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(brnachSchool, index) in branchSchools" :key="index">
            <tr>
              <td>
                <a href="#" @click="open(brnachSchool)">
                  {{ brnachSchool.name }}
                </a>
              </td>
              <td>{{ brnachSchool.phone }}</td>
              <td>{{ brnachSchool.address }}</td>
              <td>{{ brnachSchool.users.filter(user => user.type === 'ClassAdviser').map(user => user.name).join('、') }}</td>
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
  <BranchSchoolNewModal @hideModal="hide"></BranchSchoolNewModal>
</template>