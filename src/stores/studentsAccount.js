import { ref, computed } from 'vue'
import { defineStore } from 'pinia';
import { useApolloClient } from '@vue/apollo-composable';
import { toast } from 'vue3-toastify'
import gql from 'graphql-tag'

export const useStudentsAccountStore = defineStore('studentsAccount', () => {
  const { resolveClient } = useApolloClient();
  const client = resolveClient()
  const students = ref([])

  const selectedStudent = ref({
    id: '',
    name: '',
    email: '',
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

  const showGradeSubSelect = computed(() => {
    return {
      elementary: selectedStudent.value.profile.mainGrade === 'elementary_school' ? true : false,
      junior: selectedStudent.value.profile.mainGrade === 'junior_high_school' ? true : false,
      senior: selectedStudent.value.profile.mainGrade === 'senior_high_school' || selectedStudent.value.profile.mainGrade === 'vocational_high_school' ? true : false
    }
  })

  const submitButtonText = computed(() => {
    return selectedStudent.value.id ? '更新' : '新增';
  })
  
  const titleText = computed(() => {
    return selectedStudent.value.id ? '更新學生' : '新增學生';
  })

  async function fetchStudents() {
    const response = await client.query({
      query: gql`
        query {
          students {
            id
            name
            email
            enabled
            profile {
              birthday
              cellphone
              phone
              school
              mainGrade
              subGrade
              county
              address
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

  function switchSubSelect() {
    if(selectedStudent.value.profile.mainGrade === 'elementary_school') {
      selectedStudent.value.profile.subGrade = 'first_grade';
    } else if(selectedStudent.value.profile.mainGrade === 'junior_high_school') {
      selectedStudent.value.profile.subGrade = 'seventh_grade';
    } else if(selectedStudent.value.profile.mainGrade === 'senior_high_school') {
      selectedStudent.value.profile.subGrade = 'tenth_grade';
    } else if(selectedStudent.value.profile.mainGrade === 'vocational_high_school') {
      selectedStudent.value.profile.subGrade = 'tenth_grade';
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

  function assignSelectedStudent(student){
    const { profile, branchSchools, ...info } = student;

    const schoolNames = branchSchools.map(school => school.name);
    const newProfile = Object.assign(
      {},
      ...Object.keys(profile)
        .filter(key => key !== '__typename')
        .map(key => ({ [key]: profile[key] }))
    );

    const newStudent = {
      ...info,
      branchSchools: schoolNames,
      profile: newProfile,
    };

    selectedStudent.value = newStudent
  }

  async function mutationStudentSignUp() {
    const response = await client.mutate({
      mutation: gql`
        mutation studentSignUpByClassAdviser($name: String!, $email: String!, $profile: StudentProfileInput!, $branchSchools: [String!]!) {
          studentSignUpByClassAdviser (input: { name: $name, email: $email, profile: $profile, branchSchools: $branchSchools }){
            students {
              id
              name
              email
              enabled
              profile {
                birthday
                cellphone
                phone
                school
                mainGrade
                subGrade
                county
                address
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
        name: selectedStudent.value.name,
        email: selectedStudent.value.email,
        profile: {
          ...selectedStudent.value.profile
        },
        branchSchools: selectedStudent.value.branchSchools
      },
    });
    if(response.data.studentSignUpByClassAdviser.success) {
      students.value = response.data.studentSignUpByClassAdviser.students
      return true
    } else {
      toast.error(response.data.studentSignUpByClassAdviser.message, { autoClose: 3000 })
      return false
    }
  }

  async function mutationStudentUpdate() {
    const response = await client.mutate({
      mutation: gql`
        mutation studentUpdateByClassAdviser($id: String!, $name: String!, $email: String!, $profile: StudentProfileInput!, $branchSchools: [String!]!) {
          studentUpdateByClassAdviser (input: { id: $id, name: $name, email: $email, profile: $profile, branchSchools: $branchSchools }){
            students {
              id
              name
              email
              enabled
              profile {
                birthday
                cellphone
                phone
                school
                mainGrade
                subGrade
                county
                address
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
        id: selectedStudent.value.id,
        name: selectedStudent.value.name,
        email: selectedStudent.value.email,
        profile: {
          ...selectedStudent.value.profile
        },
        branchSchools: selectedStudent.value.branchSchools
      },
    });
    if(response.data.studentUpdateByClassAdviser.success) {
      students.value = response.data.studentUpdateByClassAdviser.students
      return true
    } else {
      toast.error(response.data.studentUpdateByClassAdviser.message, { autoClose: 3000 })
      return false
    }
  }

  async function mutationSwitchEnabled(id) {
    const response = await client.mutate({
      mutation: gql`
        mutation switchEnabled($id: String!) {
          switchEnabled (input: { id: $id }){
            students {
              id
              name
              email
              enabled
              profile {
                birthday
                cellphone
                phone
                school
                mainGrade
                subGrade
                county
                address
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
        id: id,
      },
    });
    if(response.data.switchEnabled.success) {
      students.value = response.data.switchEnabled.students
    } else {
      toast.error(response.data.switchEnabled.message, { autoClose: 3000 })
    }
  }

  return { students, selectedStudent, branchSchools, showGradeSubSelect, titleText, submitButtonText, fetchStudents, switchSubSelect, fetchBranchSchools, assignSelectedStudent, mutationStudentSignUp, mutationStudentUpdate, mutationSwitchEnabled }
})