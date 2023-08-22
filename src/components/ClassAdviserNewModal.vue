<script setup>
import { ref } from 'vue'
import Multiselect from 'vue-multiselect'

const value = ref([{ name: 'Javascript', code: 'js' }]);
const options = [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' }
      ]

function addTag(newTag){
  const tag = {
    name: newTag,
    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
  }
  this.options.push(tag)
  this.value.push(tag)
}
</script>

<template>
  <div class="modal fade" id="ClassAdviserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增帳號</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="row g-3 p-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
          <div class="col-md-6">
            <label for="inputName4" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputName4">
          </div>
          <div class="col-md-6">
            <label for="inputCellphone" class="form-label">手機</label>
            <input type="email" class="form-control" id="inputCellphone">
          </div>
          <div class="col-md-6">
            <label class="typo__label form-label">負責分校</label>
            <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
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

<style scope></style>
