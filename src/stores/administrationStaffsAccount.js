import { ref, computed } from 'vue'
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
  const filter = ref({ name: '' })
  const branchSchools = ref([])

  const submitButtonText = computed(() => {
    return selectedAdministrationStaff.value.id ? '更新' : '新增';
  })
  
  const titleText = computed(() => {
    return selectedAdministrationStaff.value.id ? '更新帳號' : '新增帳號';
  })

  const filteredAdministrationStaffs = computed(() => {
    return administrationStaffs.value.filter((staff) =>
      staff.name.includes(filter.value.name)
    );
  });

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

  async function mutationAdministrationStaffUpdate() {
    const response = await client.mutate({
      mutation: gql`
        mutation administrationStaffUpdate($id: String!, $name: String!, $email: String!, $gender: String!, $cellphone: String!, $school: String!, $major: String!, $branchSchools: [String!]!) {
          administrationStaffUpdate (input: {id: $id, name: $name, email: $email, gender: $gender, cellphone: $cellphone, school: $school, major: $major, branchSchools: $branchSchools }){
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
        id: selectedAdministrationStaff.value.id,
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

    if(response.data.administrationStaffUpdate.success) {
      administrationStaffs.value = response.data.administrationStaffUpdate.administrationStaffs
      return true
    } else {
      toast.error(response.data.administrationStaffUpdate.message, { autoClose: 3000 })
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

  function assignSelectedAdministrationStaff(staff){
    const { profile, branchSchools, ...selectedWithoutProfile } = staff;

    const schoolNames = branchSchools.map(school => school.name);

    const newStaff = {
      ...selectedWithoutProfile,
      branchSchools: schoolNames,
    };

    selectedAdministrationStaffProfile.value = { ...profile }
    selectedAdministrationStaff.value = newStaff
  }

  async function fetchBranchSchools() {
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

  return { filteredAdministrationStaffs, selectedAdministrationStaff, selectedAdministrationStaffProfile, submitButtonText, titleText, filter, branchSchools, fetchAdministrationStaffs, mutationAdministrationStaffSignUp, assignSelectedAdministrationStaff, mutationAdministrationStaffUpdate, fetchBranchSchools }
})
