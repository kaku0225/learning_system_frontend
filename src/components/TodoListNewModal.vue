<script setup>
import { ref } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const emits = defineEmits(['closeTodoModal'])
const todoList = ref({
    title: '',
    content: ''
  })
const cookieValue = document.cookie
    .split(';')
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith('token='));

const token = cookieValue ? cookieValue.split('=')[1] : null;
const { mutate: create } = useMutation(gql`
  mutation create ($token: String!, $title: String!, $content: String!) {
    create (input: {token: $token, title: $title, content: $content }) {
      todoList { title content createdAt }
      success
      message
    }
  }
`, () => ({
  variables: {
    token: token,
    title: todoList.value.title,
    content: todoList.value.content
  },
}))


function close(){
  emits('closeTodoModal')
}

function mutationCreate(){
  create().then(result => {
    close()
    emits('todoLists', result.data.create.todoList)
  });
}

</script>

<template>
  <div class="modal fade" id="todoListModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增待辦事項</h5>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">標籤名稱</label>
              <input type="text" class="form-control" id="recipient-name" v-model="todoList.title">
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">待辦事項</label>
              <textarea class="form-control" id="message-text" v-model="todoList.content"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close">關閉</button>
          <button type="button" class="btn btn-primary" @click="mutationCreate">新增</button>
        </div>
      </div>
    </div>
  </div>
</template>
