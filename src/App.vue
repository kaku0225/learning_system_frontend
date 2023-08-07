<script setup>
  import { watchEffect, onMounted } from 'vue'
  import { useQuery } from '@vue/apollo-composable';
  import gql from 'graphql-tag'
  import router from './router'

  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
  function checkLogin() {
    const { result } = useQuery(
      gql`
        query CheckLogin($token: String!) {
          checkLogin(token: $token)
        }
      `,
      {
        token: token,
      }
    );
    watchEffect(() => {
      if (result.value && result.value.checkLogin !== true) {
        router.push('/login')
      }
    })
  }

  onMounted(() => {
    checkLogin()
  })
</script>

<template>
  <component :is="$route.meta.layout || 'div'">
  </component>
</template>

<style scoped>

.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}

#content {
    width: 100%;
    padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
}
</style>