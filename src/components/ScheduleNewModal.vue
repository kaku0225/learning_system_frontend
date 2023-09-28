<script setup>
  import { storeToRefs } from 'pinia'
  import { useTeachersScheduleStore } from "@/stores/teachersSchedule.js"

  const store = useTeachersScheduleStore()
  const { mutationScheduleCreateOrDestroy } = store
  const { teachers, selectedDate, hasMatchingDate } = storeToRefs(store)

</script>

<template>
  <div class="modal fade" id="ScheduleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ selectedDate.startStr }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="row g-3 p-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">姓名</th>
                <th scope="col">科目</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(teacher, index) in teachers" :key="index">
                <tr>
                  <td>{{ teacher.name }}</td>
                  <td>{{ teacher.subjects.map(subject => $t(subject.name)).join('、') }}</td>
                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" @click="mutationScheduleCreateOrDestroy(teacher)" :checked="hasMatchingDate(teacher)">
                      <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
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
