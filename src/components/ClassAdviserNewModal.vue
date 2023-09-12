<script setup>
import { toRefs, computed } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import { toast } from 'vue3-toastify'
import Multiselect from 'vue-multiselect'
import gql from 'graphql-tag'
import 'vue3-toastify/dist/index.css'

const props = defineProps({ classAdviser: Object });
const { classAdviser } = toRefs(props);

const emits = defineEmits(['updateClassAdvisers'])

const options = [
  { name: 'Vue.js', code: 'vu' },
  { name: 'Javascript', code: 'js' },
  { name: 'Open Source', code: 'os' }
]

const { mutate: classAdviserSignUp } = useMutation(gql`
  mutation classAdviserSignUp ($name: String!, $email: String!, $cellphone: String!, $branchSchools: [String!]!) {
    classAdviserSignUp (input: {name: $name, email: $email, cellphone: $cellphone, branchSchools: $branchSchools }) {
      classAdvisers {
        id
        email
        name
        profile {
          cellphone
        }
        branchSchools {
          name
          code
        }
      }
      success
      message
    }
  }
`, () => ({
  variables: {
    name: classAdviser.value.name,
    email: classAdviser.value.email,
    cellphone: classAdviser.value.profile.cellphone,
    branchSchools: classAdviser.value.branchSchools.map(school => school.name)
  },
}))

const { mutate: classAdviserUpdate } = useMutation(gql`
  mutation classAdviserUpdate ($id: String!, $name: String!, $email: String!, $cellphone: String!, $branchSchools: [String!]!) {
    classAdviserUpdate (input: {id: $id, name: $name, email: $email, cellphone: $cellphone, branchSchools: $branchSchools }) {
      classAdvisers {
        id
        email
        name
        profile {
          cellphone
        }
        branchSchools {
          name
          code
        }
      }
      success
      message
    }
  }
`, () => ({
  variables: {
    id: classAdviser.value.id,
    name: classAdviser.value.name,
    email: classAdviser.value.email,
    cellphone: classAdviser.value.profile.cellphone,
    branchSchools: classAdviser.value.branchSchools.map(school => school.name)
  },
}))

const submitButtonText = computed(() => {
  return classAdviser.value.id ? '更新' : '新增';
})

const titleText = computed(() => {
  return classAdviser.value.id ? '更新帳號' : '新增帳號';
})

function addTag(newTag){
  const tag = {
    name: newTag,
    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
  }
  options.value.push(tag)
  classAdviser.value.push(tag)
}

function mutationSignUp(){
  classAdviserSignUp().then(result => {
    if(result.data.classAdviserSignUp.success) {
      emits('updateClassAdvisers', result.data.classAdviserSignUp.classAdvisers)
      classAdviser.value = { email: '', name: '', profile: {}, branchSchools: [] }
    } else {
      toast.error(result.data.classAdviserSignUp.message, { autoClose: 3000 })
    }
  });
}

function mutationUpdate(){
  console.log(classAdviser.value.branchSchools.map(school => school.name))
  classAdviserUpdate().then(result => {
    if(result.data.classAdviserUpdate.success) {
      emits('updateClassAdvisers', result.data.classAdviserUpdate.classAdvisers)
      classAdviser.value = { id: '', email: '', name: '', profile: {}, branchSchools: [] }
    } else {
      toast.error(result.data.classAdviserUpdate.message, { autoClose: 3000 })
    }
  });
}

function signUpOrUpdate(){
  if(classAdviser.value.id){
    mutationUpdate()
  } else {
    mutationSignUp()
  }
}

</script>

<template>
  <div class="modal fade" id="ClassAdviserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ titleText }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="row g-3 p-3" @submit.prevent="signUpOrUpdate">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" v-model="classAdviser.email">
          </div>
          <div class="col-md-6">
            <label for="inputName4" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputName4" v-model="classAdviser.name">
          </div>
          <div class="col-md-6">
            <label for="inputCellphone" class="form-label">手機</label>
            <input type="text" class="form-control" id="inputCellphone" v-model="classAdviser.profile.cellphone">
          </div>
          <div class="col-md-6">
            <label class="typo__label form-label">負責分校</label>
            <multiselect v-model="classAdviser.branchSchools" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
          </div>
          <div class="col-12 modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
            <button type="submit" class="btn btn-primary">{{ submitButtonText }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scope></style>
