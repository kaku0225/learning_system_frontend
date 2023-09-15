import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useApolloClient } from '@vue/apollo-composable';
import { toast } from 'vue3-toastify'
import gql from 'graphql-tag'

export const useTodoListStore = defineStore('todoList', () => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
  const { resolveClient } = useApolloClient();
  const client = resolveClient()
  const PendingTodoLists = ref([])
  const DoneTodoLists = ref([])
  const selectedTodoList = ref({
    id: '',
    title: '',
    content: ''
  })

  const title = computed(() => {
    return selectedTodoList.value.id ? selectedTodoList.value.title : '新增待辦事項';
  })

  async function fetchTodoListByStatus() {
    const response = await client.query({
      query: gql`
        query TodoListByStatus($token: String!) {
          todoListByStatus(token: $token) {
            pendingTodoLists {
              id
              title
              content
              createdAt
            }
            doneTodoLists {
              id
              title
              content
              createdAt
            }
          }
        }
      `,
      variables: {
        token: token
      },
      fetchPolicy: "no-cache",
    });

    if (response.data) {
      PendingTodoLists.value = response.data.todoListByStatus.pendingTodoLists;
      DoneTodoLists.value = response.data.todoListByStatus.doneTodoLists;
    }
  }

  function assignTodoList(todoList){
    selectedTodoList.value = todoList
  }

  async function createTodoList() {
    const response = await client.mutate({
      mutation: gql`
        mutation createTodoList($token: String!, $title: String!, $content: String!) {
          createTodoList (input: { token: $token, title: $title, content: $content }){
            todoList { id title content createdAt }
            success
            message
          }
        }
      `,
      variables: {
        token: token,
        title: selectedTodoList.value.title,
        content: selectedTodoList.value.content
      },
    });

    if(response.data.createTodoList.success) {
      selectedTodoList.value = { id: '', title: '', content: '' }
      PendingTodoLists.value = response.data.createTodoList.todoList
      return true
    } else {
      toast.error(response.data.login.message, { autoClose: 3000 })
      return false
    }
  }

  return { PendingTodoLists, DoneTodoLists, selectedTodoList, title, fetchTodoListByStatus, assignTodoList, createTodoList }
})
