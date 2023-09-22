import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApolloClient } from '@vue/apollo-composable';
import { toast } from 'vue3-toastify'
import gql from 'graphql-tag'

export const useTeachersAccountStore = defineStore('teachersAccount', () => {
  const { resolveClient } = useApolloClient();
  const client = resolveClient()

  const teachers = ref([])
  const selectedTeacher = ref({ id: '', email: '', name: '', branchSchools: [], subjects: [] })
  const selectedTeacherProfile = ref({ gender: '', cellphone: '', school: '', major: ''})

  async function mutationTeacherSignUp() {
    const response = await client.mutate({
      mutation: gql`
        mutation teacherSignUp($name: String!, $email: String!, $gender: String!, $cellphone: String!, $school: String!, $major: String!, $branchSchools: [String!]!, $subjects: [String!]!) {
          teacherSignUp (input: {name: $name, email: $email, gender: $gender, cellphone: $cellphone, school: $school, major: $major, branchSchools: $branchSchools, subjects: $subjects }){
            teachers {
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
              subjects {
                name
              }
            }
            success
            message
          }
        }
      `,
      variables: {
        name: selectedTeacher.value.name,
        email: selectedTeacher.value.email,
        gender: selectedTeacherProfile.value.gender,
        cellphone: selectedTeacherProfile.value.cellphone,
        school: selectedTeacherProfile.value.school,
        major: selectedTeacherProfile.value.major,
        branchSchools: selectedTeacher.value.branchSchools,
        subjects: selectedTeacher.value.subjects
      },
    });

    if(response.data.teacherSignUp.success) {
      teachers.value = response.data.teacherSignUp.teachers
      return true
    } else {
      toast.error(response.data.teacherSignUp.message, { autoClose: 3000 })
      return false
    }
  }

  // const { mutate: classAdviserSignUp } = useMutation(gql`
  //   mutation classAdviserSignUp ($name: String!, $email: String!, $cellphone: String!, $branchSchools: [String!]!) {
  //     classAdviserSignUp (input: {name: $name, email: $email, cellphone: $cellphone, branchSchools: $branchSchools }) {
  //       classAdvisers {
  //         id
  //         email
  //         name
  //         profile {
  //           cellphone
  //         }
  //         branchSchools {
  //           name
  //           code
  //         }
  //       }
  //       success
  //       message
  //     }
  //   }
  // `, () => ({
  //   variables: {
  //     name: selectedClassAdviser.value.name,
  //     email: selectedClassAdviser.value.email,
  //     cellphone: selectedClassAdviserProfile.value.cellphone,
  //     branchSchools: selectedClassAdviser.value.branchSchools.map(school => school.name)
  //   },
  // }))

  // const { mutate: classAdviserUpdate } = useMutation(gql`
  //   mutation classAdviserUpdate ($id: String!, $name: String!, $email: String!, $cellphone: String!, $branchSchools: [String!]!) {
  //     classAdviserUpdate (input: {id: $id, name: $name, email: $email, cellphone: $cellphone, branchSchools: $branchSchools }) {
  //       classAdvisers {
  //         id
  //         email
  //         name
  //         profile {
  //           cellphone
  //         }
  //         branchSchools {
  //           name
  //           code
  //         }
  //       }
  //       success
  //       message
  //     }
  //   }
  // `, () => ({
  //   variables: {
  //     id: selectedClassAdviser.value.id,
  //     name: selectedClassAdviser.value.name,
  //     email: selectedClassAdviser.value.email,
  //     cellphone: selectedClassAdviserProfile.value.cellphone,
  //     branchSchools: selectedClassAdviser.value.branchSchools.map(school => school.name)
  //   },
  // }))

  // const submitButtonText = computed(() => {
  //   return selectedClassAdviser.value.id ? '更新' : '新增';
  // })
  
  // const titleText = computed(() => {
  //   return selectedClassAdviser.value.id ? '更新帳號' : '新增帳號';
  // })

  async function fetchTeachers() {
    const { resolveClient } = useApolloClient();
    const client = resolveClient()

    const response = await client.query({
      query: gql`
        query {
          teachers {
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
            subjects {
              name
            }
          }
        }
      `,fetchPolicy: "no-cache"
    });

    if (response.data.teachers) {
      teachers.value = response.data.teachers
    }
  }

  function assignSelectedTeacher(teacher){
    const { profile, branchSchools, subjects, ...selectedWithoutProfile } = teacher;

    const schoolNames = branchSchools.map(school => school.name);
    const subjectNames = subjects.map(subject => subject.name)

    const newTeacher = {
      ...selectedWithoutProfile,
      branchSchools: schoolNames,
      subjects: subjectNames
    };

    selectedTeacherProfile.value = { ...profile }
    selectedTeacher.value = newTeacher

    // console.log(selectedTeacher.value)
  }

  // function reAssignClassAdvisers(reAssignClassAdvisers) {
  //   classAdvisers.value = reAssignClassAdvisers
  // }

  return { teachers, selectedTeacher, selectedTeacherProfile, fetchTeachers, assignSelectedTeacher, mutationTeacherSignUp }
})
