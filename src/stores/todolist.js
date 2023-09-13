import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag'

const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
export const useTodoListStore = defineStore('todoList', () => {
  const PendingTodoLists = ref([])
  const DoneTodoLists = ref([])

  function fetchTodoListByStatus() {
    const { result } = useQuery(
      gql`
        query TodoListByStatus($token: String!) {
          todoListByStatus(token: $token) {
            pendingTodoLists {
              title
              content
              createdAt
            }
            doneTodoLists {
              title
              content
              createdAt
            }
          }
        }
      `,
      {
        token: token,
      }
    );
    watchEffect(() => {
      if (result.value) {
        PendingTodoLists.value = result.value.todoListByStatus.pendingTodoLists;
        DoneTodoLists.value = result.value.todoListByStatus.doneTodoLists;
      }
    })
  }

  return { PendingTodoLists, DoneTodoLists, fetchTodoListByStatus }
})
