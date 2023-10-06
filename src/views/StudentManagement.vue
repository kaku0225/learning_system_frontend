<script setup>
  import { onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useStudentsAccountStore } from "@/stores/studentsAccount.js"

  const store = useStudentsAccountStore()
  const { fetchStudents } = store
  const { students } = storeToRefs(store)

  console.log(students)

  onMounted(() => {
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
          <button type="button" class="btn btn-primary">新增學員</button>
        </div>
        <div>
          <div class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="Search Name" aria-label="Search" aria-describedby="search-addon" />
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
            <template v-for="(student, index) in students" :key="index">            
              <tr>
                <td>{{ student.name }}</td>
                <td>{{ student.profile.school }}</td>
                <td>{{ student.profile.cellphone}}</td>
                <td>{{ $t(student.profile.mainGrade) }}</td>
                <td>{{ student.branchSchools.map(school => school.name).join('、') }}</td>
                <td>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" :checked="student.enabled">
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
</template>