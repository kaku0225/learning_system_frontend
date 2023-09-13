import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag'

export const useClassAdvisersAccountStore = defineStore('classAdvisersAccount', () => {
  const classAdvisers = ref([])
  const selectedClassAdviser = ref({
    id: '',
    email: '',
    name: '',
    profile: {
      cellphone: ''
    },
    branch_schools: []
  })

  function fetchClassAdvisers() {
    const { result } = useQuery(gql`
        query {
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
        }
      `);
    watchEffect(() => {
      if (result.value) {
        classAdvisers.value = result.value.classAdvisers;
      }
    })
  }

  return { classAdvisers, selectedClassAdviser, fetchClassAdvisers }
})
