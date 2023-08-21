<script setup>
import { useMutation } from '@vue/apollo-composable'
import router from '../router'
import gql from 'graphql-tag'

const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');

const { mutate: logout } = useMutation(gql`
  mutation logout ($token: String!) {
    logout (input: {token: $token }) {
      expiredTime
    }
  }
`, () => ({
  variables: {
    token: token,
  },
}))

function mutationLogout(){
  logout().then(result => {
    router.push('/login')
    const expired_time = result.data.logout.expiredTime
    document.cookie = `token=null; expires=${new Date(expired_time)}; path=/`;
  });
}

</script>

<template>  
  <nav id="sidebar" class="bg-body-secondary">
    <div class="sidebar-header bg-body-secondary">
      <h3>管理員</h3>
    </div>
    <ul class="list-unstyled components">
      <p>Dummy Heading</p>
      <li class="active">
        <a href="#homeSubmenu" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle">帳號管理</a>
        <ul class="collapse list-unstyled" id="homeSubmenu">
          <li>
            <router-link to="/admin_interface/account_management">帳號列表</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a href="#pageSubmenu" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle">分校管理</a>
        <ul class="collapse list-unstyled" id="pageSubmenu">
          <li>
            <router-link to="/assignment_review">分校列表</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a href="#" @click="mutationLogout">登出</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}

a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    color: #000;
    transition: all 0.3s;
}

#sidebar.active {
    margin-left: -250px;
}

#sidebar .sidebar-header {
    padding: 20px;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #000;
}

#sidebar ul p {
    color: #000;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}

#sidebar ul li a:hover {
    background: #fff;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #000;
}

a[data-bs-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
}

ul.CTAs {
    padding: 20px;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}

a.download {
    background: #fff;
    color: #7386D5;
}

a.article,
a.article:hover {
    background: #6d7fcc !important;
    color: #fff !important;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }
    #sidebar.active {
        margin-left: 0;
    }
    #sidebarCollapse span {
        display: none;
    }
}
</style>