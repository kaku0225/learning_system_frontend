import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useApolloClient } from '@vue/apollo-composable';
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export const useClassAdvisersAccountStore = defineStore('classAdvisersAccount', () => {
  const classAdvisers = ref([])
  const selectedClassAdviser = ref({ id: '', email: '', name: '', branch_schools: [] })
  const selectedClassAdviserProfile = ref({ cellphone: ''})

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
      name: selectedClassAdviser.value.name,
      email: selectedClassAdviser.value.email,
      cellphone: selectedClassAdviserProfile.value.cellphone,
      branchSchools: selectedClassAdviser.value.branchSchools.map(school => school.name)
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
      id: selectedClassAdviser.value.id,
      name: selectedClassAdviser.value.name,
      email: selectedClassAdviser.value.email,
      cellphone: selectedClassAdviserProfile.value.cellphone,
      branchSchools: selectedClassAdviser.value.branchSchools.map(school => school.name)
    },
  }))

  const submitButtonText = computed(() => {
    return selectedClassAdviser.value.id ? '更新' : '新增';
  })
  
  const titleText = computed(() => {
    return selectedClassAdviser.value.id ? '更新帳號' : '新增帳號';
  })

  async function fetchClassAdvisers() {
    const { resolveClient } = useApolloClient();
    const client = resolveClient()

    const response = await client.query({
      query: gql`
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
      `,fetchPolicy: "no-cache" 
    });

    if (response.data.classAdvisers) {
      classAdvisers.value = response.data.classAdvisers;
    }
  }

  function assignSelectedClassAdviser(classAdviser){
    const { profile, branchSchools, ...selectedWithoutProfile } = classAdviser;

    const newClassAdviser = {
      ...selectedWithoutProfile,
      branchSchools: branchSchools.map((school) => {
        return { name: school.name, code: school.code }
        // 創建新的對象，不包括 __typename 屬性
      }),
    };

    selectedClassAdviserProfile.value = { ...profile }
    selectedClassAdviser.value = newClassAdviser
  }

  function reAssignClassAdvisers(reAssignClassAdvisers) {
    classAdvisers.value = reAssignClassAdvisers
  }

  return { classAdvisers, selectedClassAdviser, selectedClassAdviserProfile, submitButtonText, titleText, fetchClassAdvisers, assignSelectedClassAdviser, classAdviserSignUp, classAdviserUpdate, reAssignClassAdvisers }
})
