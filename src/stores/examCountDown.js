import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag'

export const useExamCountDownStore = defineStore('examCountDown', () => {
  const s_exam = ref(0)
  const c_exam = ref(0)

  function countDown(){
    const { result } = useQuery(gql`
    query {
        examCountdown {
          sectionalExam
          comprehensiveAssessmentProgram
        }
      }
    `);

    watchEffect(() => {
      if (result.value) {
        s_exam.value = parseInt(result.value.examCountdown.sectionalExam)
        c_exam.value = parseInt(result.value.examCountdown.comprehensiveAssessmentProgram)
      }
    });
  }

  return { s_exam, c_exam, countDown }
})
