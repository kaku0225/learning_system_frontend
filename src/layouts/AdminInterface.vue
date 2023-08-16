<script setup>

import Sidebar from '../components/SidebarsView.vue'
import { watchEffect, onMounted } from 'vue'
import { useMutation, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag'
import router from '../router'

const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');

const userActivityTimeout = 10 * 60 * 1000; // 10 minutes in milliseconds

let timeoutId

const { mutate: logout } = useMutation(gql`
  mutation logout ($token: String!) {
    logout (input: {token: $token }) {
      expiredTime
    }
  }
`, () => ({
  variables: {
    token: token,
    role: 'Admin'
  },
}))

const handleUserActivity = () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(mutationLogout, userActivityTimeout);
};

function mutationLogout(){
  logout().then(result => {
    clearTimeout(timeoutId);
    window.removeEventListener('mousemove', handleUserActivity);
    window.removeEventListener('keydown', handleUserActivity);
    const expired_time = result.data.logout.expiredTime
    document.cookie = `token=null; expires=${new Date(expired_time)}`;
    router.push('/login')
  });
}

function checkLogin() {
  const { result } = useQuery(
    gql`
      query CheckLogin($token: String!, $role: String!) {
        checkLogin(token: $token, role: $role){
          success
        }
      }
    `,
    {
      token: token,
      role: 'Admin'
    }
  );
  watchEffect(() => {
    if (result.value && result.value.checkLogin.success === false) {
      router.push('/login')
    }
  })
}

onMounted(() => {
  checkLogin()

  timeoutId = setTimeout(mutationLogout, userActivityTimeout);
  window.addEventListener('mousemove', handleUserActivity);
  window.addEventListener('keydown', handleUserActivity);
})
</script>

<template>
  <div class="wrapper">
    <Sidebar />
    <div id="content">
      <RouterView />
    </div>
  </div>
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
