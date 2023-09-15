import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApolloClient } from '@vue/apollo-composable';
import { toast } from 'vue3-toastify'
import gql from 'graphql-tag'
import router from '../router'


export const useLoginStore = defineStore('login', () => {
  const user = ref({ email: '', password: '' })
  const resetEmail = ref('')

  const { resolveClient } = useApolloClient();
  const client = resolveClient()

  async function mutationLogin() {
    const response = await client.mutate({
      mutation: gql`
        mutation login($email: String!, $password: String!) {
          login (input: {email: $email, password: $password }){
            user { jti type }
            success
            expiredTime
            message
            path
          }
        }
      `,
      variables: {
        email: user.value.email,
        password: user.value.password,
      },
    });

    if(response.data.login.success) {
      const jti = response.data.login.user.jti
      const expired_time = response.data.login.expiredTime
      document.cookie = `token=${jti}; expires=${new Date(expired_time)}; path=/`;
      router.push(response.data.login.path)
      user.value = { email: '', password: '' }
    } else {
      toast.error(response.data.login.message, { autoClose: 3000 })
    }
  }

  async function mutationSendResetPasswordEmail() {
    const response = await client.mutate({
      mutation: gql`
        mutation sendResetPasswordEmail ($email: String!) {
          sendResetPasswordEmail (input: { email: $email}) {
            user { id }
            success
            message
          }
        }
      `,
      variables: {
        email: resetEmail.value
      }
    });

    if(!response.data.sendResetPasswordEmail.success) {
      toast.error(response.data.sendResetPasswordEmail.message, { autoClose: 3000 })
      return false
    } else {
      resetEmail.value = ''
      return true
    }
  }
      

  return { user, resetEmail, mutationLogin, mutationSendResetPasswordEmail }
})
