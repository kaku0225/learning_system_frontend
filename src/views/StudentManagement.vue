<script setup>
  import { ref, onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useStudentsAccountStore } from "@/stores/studentsAccount.js"
  import StudentNewModal from '../components/StudentNewModal.vue'
  import Modal from 'bootstrap/js/dist/modal'

  const store = useStudentsAccountStore()
  const { fetchStudents, fetchBranchSchools, assignSelectedStudent, mutationSwitchEnabled } = store
  const { filteredStudents, filter } = storeToRefs(store)

  const StudentModal = ref({ modal: null })

  function open(student) {
    fetchBranchSchools()
    if(student) {
      assignSelectedStudent(student)
    } else {
      assignSelectedStudent({info: { id: '', email: '', name: ''}, profile: { birthday: '', cellphone: '', phone: '', school: '', mainGrade: 'elementary_school', subGrade: 'first_grade', county: '', address: '' }, branchSchools: [] })
    }
    StudentModal.value.modal.show()
  }

  function hide(){
    StudentModal.value.modal.hide()
  }

  onMounted(() => {
    StudentModal.value.modal = new Modal('#studentModal', {})
    fetchStudents()
  })
</script>

<template>
  <h2>學員管理</h2>
  <hr>
  <div class="tab-content" id="myTabContent">
    <!-- class home work -->
    <div class="tab-pane fade show active" id="class-home-work" role="tabpanel" aria-labelledby="class-home-work-tab">
      <br>
      <div class="d-flex justify-content-between">
        <div>
          <button type="button" class="btn btn-primary" @click="open('')">新增學員</button>
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
            <th scope="col">學校</th>
            <th scope="col">手機</th>
            <th scope="col">年級</th>
            <th scope="col">分校</th>
            <th scope="col">核准</th>
          </tr>
        </thead>
        <tbody>
            <template v-for="(student, index) in filteredStudents" :key="index">            
              <tr>
                <td>
                  <a href="#" @click="open(student)">
                    {{ student.name }}
                  </a>
                </td>
                <td>{{ student.profile.school }}</td>
                <td>{{ student.profile.cellphone}}</td>
                <td>{{ $t(student.profile.mainGrade) }}</td>
                <td>{{ student.branchSchools.map(school => school.name).join('、') }}</td>
                <td>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" :checked="student.enabled" @click="mutationSwitchEnabled(student.id)">
                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                  </div>
                </td>
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
  <StudentNewModal @hideModal="hide"></StudentNewModal>
</template>
