import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useApolloClient } from '@vue/apollo-composable';
import { toast } from 'vue3-toastify'
import { useRoute } from 'vue-router'
import gql from 'graphql-tag'
import router from '../router';
import 'vue3-toastify/dist/index.css'

export const useResetPasswordStore = defineStore('resetPassword', () => {
  const password = ref('')
  const passwordConfirmation = ref('')
  const route = useRoute()

  const { resolveClient } = useApolloClient();
  const client = resolveClient()

  const passwordDifferentInputAttribute = computed(() => {
    return password.value !== passwordConfirmation.value ? 'border border-danger' : ''
  })

  const passwordDifferentTextAttribute = computed(() => {
    if(password.value !== passwordConfirmation.value) {
      return 'text-danger'
    } else if(password.value === '' && passwordConfirmation.value === '') {
      return ''
    } else {
      return 'text-success'
    }
  })

  const buttonDisabled = computed(() => {
    if(password.value !== passwordConfirmation.value || password.value === '' && passwordConfirmation.value === '') {
      return true
    } else {
      return false
    }
  })

  async function reset() {
    const response = await client.mutate({
      mutation: gql`
        mutation resetPassword($token: String!, $password: String!, $passwordConfirmation: String!) {
          resetPassword (input: {token: $token, password: $password, passwordConfirmation: $passwordConfirmation }){
            user { id }
            success
            message
          }
        }
      `,
      variables: {
        token: route.query.token,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value
      },
    });

    if(response.data.resetPassword.success) {
      router.push('/login')
    } else {
      toast.error(response.data.resetPassword.message, { autoClose: 3000 })
    }
  }

  return { password, passwordConfirmation, passwordDifferentInputAttribute, passwordDifferentTextAttribute, buttonDisabled, reset }
})
