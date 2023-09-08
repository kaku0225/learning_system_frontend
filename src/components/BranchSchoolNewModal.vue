<script setup>
import { ref } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import { toast } from 'vue3-toastify'
import gql from 'graphql-tag'
import 'vue3-toastify/dist/index.css'

const emits = defineEmits(['updateClassAdvisers'])

const branchSchool = ref({
  name: '',
  phone: '',
  address: '',
  enabled: false,
})

const { mutate: createBranchSchool } = useMutation(gql`
  mutation createBranchSchool ($name: String!, $phone: String!, $address: String!, $enabled: Boolean!) {
    createBranchSchool (input: {name: $name, phone: $phone, address: $address, enabled: $enabled }) {
      branchSchools {
        name
        phone
        address
        users(type: "ClassAdviser") {
          name
        }
      }
      success
      message
    }
  }
`, () => ({
  variables: {
    name: branchSchool.value.name,
    phone: branchSchool.value.phone,
    address: branchSchool.value.address,
    enabled: branchSchool.value.enabled,
  },
}))

function mutationSignUp(){
  createBranchSchool().then(result => {
    if(result.data.createBranchSchool.success) {
      emits('updateBranchSchools', result.data.createBranchSchool.branchSchools)
      branchSchool.value = { email: '', name: '', cellphone: '', branchSchools: [] }
    } else {
      toast.error(result.data.createBranchSchool.message, { autoClose: 3000 })
    }
  });
}

</script>

<template>
  <div class="modal fade" id="BranchSchoolModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增分校</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form class="row g-3 p-3" @submit.prevent="mutationSignUp">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">分校名稱</label>
            <input type="text" class="form-control" id="inputEmail4" v-model="branchSchool.name">
          </div>
          <div class="col-md-6">
            <label for="inputName4" class="form-label">分校電話</label>
            <input type="text" class="form-control" id="inputName4" v-model="branchSchool.phone">
          </div>
          <div class="col-md-6">
            <label for="inputCellphone" class="form-label">分校地址</label>
            <input type="text" class="form-control" id="inputCellphone" v-model="branchSchool.address">
          </div>
          <div class="col-md-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="branchSchool.enabled">
              <label class="form-check-label" for="flexCheckDefault">
                啟用
              </label>
            </div>
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
