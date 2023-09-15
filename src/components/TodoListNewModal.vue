<script setup>
  import { storeToRefs } from 'pinia'
  import { useTodoListStore } from "@/stores/todoList.js"

  const store = useTodoListStore()
  const { createTodoList } = store
  const { title, selectedTodoList } = storeToRefs(store)
  const emits = defineEmits(['closeTodoModal', 'closeModal'])

  async function mutationCreate(){
    const close = await createTodoList()
    if(close){
      emits('closeModal')
    }
  }
</script>

<template>
  <div class="modal fade" id="todoListModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
        </div>
        <div class="modal-body" style="white-space: pre-line" v-if="selectedTodoList.id">
          {{ selectedTodoList.content }}
        </div>
        <div class="modal-body" v-else>
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">標籤名稱</label>
              <input type="text" class="form-control" id="recipient-name" v-model="selectedTodoList.title">
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">待辦事項</label>
              <textarea class="form-control" id="message-text" v-model="selectedTodoList.content"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
          <button type="button" class="btn btn-primary" @click="mutationCreate" v-if="!selectedTodoList.id">新增</button>
        </div>
      </div>
    </div>
  </div>
</template>
