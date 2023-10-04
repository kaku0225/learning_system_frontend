import { ref } from 'vue'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'
import { useApolloClient } from '@vue/apollo-composable';
import gql from 'graphql-tag'
import router from '../router';
import 'vue3-toastify/dist/index.css'

export const useSignUpStore = defineStore('signUp', () => {
  const { resolveClient } = useApolloClient();
  const client = resolveClient()

  const student = ref({
    info: {    
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    profile: {    
      birthday: '',
      cellphone: '',
      phone: '',
      school: '',
      mainGrade: 'elementary_school',
      subGrade: 'first_grade',
      county: 'keelung_city',
      address: ''
    },
    branchSchools: []
  })

  const branchSchools = ref([])

  const showGradeSubSelect = ref({
    elementary: true,
    junior: false,
    senior: false
  })

  function switchSubSelect(value) {
    if(value === 'senior_high_school' || value === 'vocational_high_school') {
      value = 'senior_high_school'
    }

    showGradeSubSelect.value = {
      elementary: value === 'elementary_school',
      junior: value === 'junior_high_school',
      senior: value === 'senior_high_school'
    };

    if(showGradeSubSelect.value.elementary) {
      student.value.profile.subGrade = 'first_grade';
    } else if(showGradeSubSelect.value.junior) {
      student.value.profile.subGrade = 'seventh_grade';
    } else if(showGradeSubSelect.value.senior) {
      student.value.profile.subGrade = 'tenth_grade';
    }
  }

  async function mutationSignUp() {
    const response = await client.mutate({
      mutation: gql`
        mutation studentSignUp($info: UserInput!, $profile: StudentProfileInput!, $branchSchools: [String!]!) {
          studentSignUp (input: { info: $info, profile: $profile, branchSchools: $branchSchools }){
            student { id }
            success
            message
          }
        }
      `,
      variables: {
        info: {
          ...student.value.info
        },
        profile: {
          ...student.value.profile
        },
        branchSchools: student.value.branchSchools
      },
    });

    if(response.data.studentSignUp.success) {
      router.push('/login')
    } else {
      toast.error(response.data.studentSignUp.message, { autoClose: 3000 })
    }
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

  return { student, showGradeSubSelect, branchSchools, switchSubSelect, mutationSignUp, fetchBranchSchools }
})
