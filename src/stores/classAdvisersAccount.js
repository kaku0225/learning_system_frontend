import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag'

export const useClassAdvisersAccountStore = defineStore('classAdvisersAccount', () => {
  const classAdvisers = ref([])
  const selectedClassAdviser = ref({ id: '', email: '', name: '', branch_schools: [] })
  const selectedClassAdviserProfile = ref({ cellphone: ''})

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

  function assignSelectedClassAdviser(classAdviser){
    const { profile, ...selectedWithoutProfile } = classAdviser;

    const newClassAdviser = {
      ...selectedWithoutProfile,
      branchSchools: classAdviser.branchSchools.map((school) => {
        return { name: school.name, code: school.code }
        // 創建新的對象，不包括 __typename 屬性
      }),
    };

    selectedClassAdviserProfile.value = { ...profile }
    selectedClassAdviser.value = newClassAdviser
  }

  return { classAdvisers, selectedClassAdviser, selectedClassAdviserProfile, fetchClassAdvisers, assignSelectedClassAdviser }
})
