import { ref } from 'vue'
import { defineStore } from 'pinia';
import { useApolloClient } from '@vue/apollo-composable';
import gql from 'graphql-tag'

export const useStudentsAccountStore = defineStore('studentsAccount', () => {
  const { resolveClient } = useApolloClient();
  const client = resolveClient()
  const students = ref([])

  async function fetchStudents() {
    const response = await client.query({
      query: gql`
        query {
          students {
            id
            name
            enabled
            profile {
              cellphone
              school
              mainGrade
            }
            branchSchools {
              name
            }
          }
        }
      `,fetchPolicy: "no-cache"
    });

    if (response.data.students) {
      students.value = response.data.students
    }
  }

  return { students, fetchStudents }
})