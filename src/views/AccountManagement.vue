<script setup>
  import { ref, onMounted, watchEffect } from 'vue';
  import { useQuery } from '@vue/apollo-composable';
  import Modal from 'bootstrap/js/dist/modal'
  import ClassAdviserNewModal from '../components/ClassAdviserNewModal.vue'
  import gql from 'graphql-tag'

  const classAdvisers = ref([])

  const ClassAdviserModal = ref({ modal: null })

  function fetchClassAdvisers() {
    const { result } = useQuery(gql`
        query {
          classAdvisers {
            email
            name
            profile {
              cellphone
            }
          }
        }
      `);
    watchEffect(() => {
      if (result.value) {
        classAdvisers.value = result.value.classAdvisers;
      }
    })
  }

  function open() {
    ClassAdviserModal.value.modal.show()
  }

  function updateCurrentClassAdvisers(updatedClassAdvisers){
    classAdvisers.value = updatedClassAdvisers
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
      <button type="button" class="btn btn-primary" @click="open">新增帳號</button>
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
              <td>{{ classAdviser.email }}</td>
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
  <ClassAdviserNewModal ref="ClassAdviserModal" @updateClassAdvisers="updateCurrentClassAdvisers"></ClassAdviserNewModal>
</template>
