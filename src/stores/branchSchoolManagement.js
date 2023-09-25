import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useApolloClient } from '@vue/apollo-composable';
import { toast } from 'vue3-toastify'
import gql from 'graphql-tag'

export const useBranchSchoolManagementStore = defineStore('branchSchoolManagement', () => {
  const { resolveClient } = useApolloClient();
  const client = resolveClient()

  const branchSchools = ref([])
  const selectedBranchSchool = ref({ id: '', name: '', phone: '', address: '', enabled: false })

  async function mutationBranchSchoolCreate() {
    const response = await client.mutate({
      mutation: gql`
        mutation branchSchoolCreate($name: String!, $phone: String!, $address: String!, $enabled: Boolean!, $code: String!) {
          branchSchoolCreate (input: { name: $name, phone: $phone, address: $address, enabled: $enabled, code: $code }){
            branchSchools {
              id
              name
              phone
              address
              enabled
            }
            success
            message
          }
        }
      `,
      variables: {
        name: selectedBranchSchool.value.name,
        phone: selectedBranchSchool.value.phone,
        address: selectedBranchSchool.value.address,
        enabled: selectedBranchSchool.value.enabled,
        code: selectedBranchSchool.value.name,
      },
    });

    if(response.data.branchSchoolCreate.success) {
      branchSchools.value = response.data.branchSchoolCreate.branchSchools
      return true
    } else {
      toast.error(response.data.branchSchoolCreate.message, { autoClose: 3000 })
      return false
    }
  }

  async function mutationBranchSchoolUpdate() {
    const response = await client.mutate({
      mutation: gql`
        mutation branchSchoolUpdate($id: String!, $name: String!, $phone: String!, $address: String!, $enabled: Boolean!, $code: String!) {
          branchSchoolUpdate (input: {id: $id, name: $name, phone: $phone, address: $address, enabled: $enabled, code: $code }){
            branchSchools {
              id
              name
              phone
              address
              enabled
            }
            success
            message
          }
        }
      `,
      variables: {
        id: selectedBranchSchool.value.id,
        name: selectedBranchSchool.value.name,
        phone: selectedBranchSchool.value.phone,
        address: selectedBranchSchool.value.address,
        enabled: selectedBranchSchool.value.enabled,
        code: selectedBranchSchool.value.name,
      },
    });

    if(response.data.branchSchoolUpdate.success) {
      branchSchools.value = response.data.branchSchoolUpdate.branchSchools
      return true
    } else {
      toast.error(response.data.branchSchoolUpdate.message, { autoClose: 3000 })
      return false
    }
  }

  const submitButtonText = computed(() => {
    return selectedBranchSchool.value.id ? '更新' : '新增';
  })
  
  const titleText = computed(() => {
    return selectedBranchSchool.value.id ? '更新分校' : '新增分校';
  })

  async function fetchBranchSchools() {
    const { resolveClient } = useApolloClient();
    const client = resolveClient()

    const response = await client.query({
      query: gql`
        query {
          branchSchools {
            id
            name
            phone
            address
            enabled
          }
        }
      `,fetchPolicy: "no-cache"
    });

    if (response.data.branchSchools) {
      branchSchools.value = response.data.branchSchools
    }
  }

  function assignSelectedBranchSchool(branchSchool){
    selectedBranchSchool.value = { ...branchSchool }
  }

  return { branchSchools, selectedBranchSchool, titleText, submitButtonText, fetchBranchSchools, assignSelectedBranchSchool, mutationBranchSchoolCreate, mutationBranchSchoolUpdate }
})
