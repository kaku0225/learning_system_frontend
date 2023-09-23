import { ref, computed } from 'vue'
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

  async function mutationTeacherUpdate() {
    const response = await client.mutate({
      mutation: gql`
        mutation teacherUpdate($id: String! $name: String!, $email: String!, $gender: String!, $cellphone: String!, $school: String!, $major: String!, $branchSchools: [String!]!, $subjects: [String!]!) {
          teacherUpdate (input: {id: $id, name: $name, email: $email, gender: $gender, cellphone: $cellphone, school: $school, major: $major, branchSchools: $branchSchools, subjects: $subjects }){
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
        id: selectedTeacher.value.id,
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

    if(response.data.teacherUpdate.success) {
      teachers.value = response.data.teacherUpdate.teachers
      return true
    } else {
      toast.error(response.data.teacherUpdate.message, { autoClose: 3000 })
      return false
    }
  }

  const submitButtonText = computed(() => {
    return selectedTeacher.value.id ? '更新' : '新增';
  })
  
  const titleText = computed(() => {
    return selectedTeacher.value.id ? '更新帳號' : '新增帳號';
  })

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
  }

  return { teachers, selectedTeacher, selectedTeacherProfile, titleText, submitButtonText, fetchTeachers, assignSelectedTeacher, mutationTeacherSignUp, mutationTeacherUpdate }
})
