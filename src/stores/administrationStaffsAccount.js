import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApolloClient } from '@vue/apollo-composable';
import { toast } from 'vue3-toastify'
import gql from 'graphql-tag'

export const useAdministrationStaffsAccountStore = defineStore('administrationStaffsAccount', () => {
  const { resolveClient } = useApolloClient();
  const client = resolveClient()

  const administrationStaffs = ref([])
  const selectedAdministrationStaff = ref({ id: '', email: '', name: '', branchSchools: [] })
  const selectedAdministrationStaffProfile = ref({ gender: '', cellphone: '', school: '', major: ''})

  async function mutationAdministrationStaffSignUp() {
    const response = await client.mutate({
      mutation: gql`
        mutation administrationStaffSignUp($name: String!, $email: String!, $gender: String!, $cellphone: String!, $school: String!, $major: String!, $branchSchools: [String!]!) {
          administrationStaffSignUp (input: {name: $name, email: $email, gender: $gender, cellphone: $cellphone, school: $school, major: $major, branchSchools: $branchSchools }){
            administrationStaffs {
              id
              email
              name
              profile {
                gender
                cellphone
                school
                major
              }
              branchSchools {
                name
              }
            }
            success
            message
          }
        }
      `,
      variables: {
        name: selectedAdministrationStaff.value.name,
        email: selectedAdministrationStaff.value.email,
        gender: selectedAdministrationStaffProfile.value.gender,
        cellphone: selectedAdministrationStaffProfile.value.cellphone,
        school: selectedAdministrationStaffProfile.value.school,
        major: selectedAdministrationStaffProfile.value.major,
        branchSchools: selectedAdministrationStaff.value.branchSchools,
        subjects: selectedAdministrationStaff.value.subjects
      },
    });

    if(response.data.administrationStaffSignUp.success) {
      administrationStaffs.value = response.data.administrationStaffSignUp.administrationStaffs
      return true
    } else {
      toast.error(response.data.administrationStaffSignUp.message, { autoClose: 3000 })
      return false
    }
  }

  async function fetchAdministrationStaffs() {
    const { resolveClient } = useApolloClient();
    const client = resolveClient()

    const response = await client.query({
      query: gql`
        query {
          administrationStaffs {
            id
            name
            email
            profile {
              gender
              cellphone
              school
              major
            }
            branchSchools {
              name
            }
          }
        }
      `,fetchPolicy: "no-cache"
    });

    if (response.data.administrationStaffs) {
      administrationStaffs.value = response.data.administrationStaffs
    }
  }

  return { administrationStaffs, selectedAdministrationStaff, selectedAdministrationStaffProfile, fetchAdministrationStaffs, mutationAdministrationStaffSignUp }
})
