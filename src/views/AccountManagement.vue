<script setup>
  import { ref, onMounted } from 'vue';
  import Modal from 'bootstrap/js/dist/modal'
  import ClassAdviserNewModal from '../components/ClassAdviserNewModal.vue'
  import { storeToRefs } from 'pinia'
  import { useClassAdvisersAccountStore } from "@/stores/classAdvisersAccount.js"

  const store = useClassAdvisersAccountStore()
  const { fetchClassAdvisers, assignSelectedClassAdviser, fetchBranchSchools } = store
  const { classAdvisers } = storeToRefs(store)

  const ClassAdviserModal = ref({ modal: null })

  function open(classAdviser) {
    fetchBranchSchools()
    if(classAdviser) {
      assignSelectedClassAdviser(classAdviser)
    } else {
      assignSelectedClassAdviser({id: '', email: '', name: '', profile: { cellphone: '' }, branchSchools: [] })
    }
    ClassAdviserModal.value.modal.show()
  }

  function hide() {
    ClassAdviserModal.value.modal.hide()
  }

  onMounted(() => {
    ClassAdviserModal.value.modal = new Modal('#ClassAdviserModal', {})
    fetchClassAdvisers()
  })
</script>

<template>
  <h2>帳號管理</h2>
  <hr>
  <div class="tab-content" id="myTabContent">
    <!-- class home work -->
    <div class="tab-pane fade show active" id="class-home-work" role="tabpanel" aria-labelledby="class-home-work-tab">
      <br>
      <button type="button" class="btn btn-primary" @click="open('')">新增帳號</button>
      <table class="table table-bordered" style="margin-top: 30px">
        <thead>
          <tr>
            <th scope="col">帳號</th>
            <th scope="col">使用者</th>
            <th scope="col">手機</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(classAdviser, index) in classAdvisers" :key="index">
            <tr>
              <td>
                <a href="#" @click="open(classAdviser)">
                  {{ classAdviser.email }}
                </a>
              </td>
              <td>{{ classAdviser.name }}</td>
              <td>{{ classAdviser.profile.cellphone }}</td>
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
  <ClassAdviserNewModal ref="ClassAdviserModal" @hideModal="hide"></ClassAdviserNewModal>
</template>
