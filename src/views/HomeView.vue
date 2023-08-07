<script setup>
  import { ref, onMounted, watchEffect } from 'vue'
  import { useQuery } from '@vue/apollo-composable';
  import gql from 'graphql-tag'
  import Modal from 'bootstrap/js/dist/modal'
  import ExamCountDown from '../components/ExamCountDownView.vue'
  import Rank from '../components/RankView.vue'
  import TodoListNewModal from '../components/TodoListNewModal.vue'
  import TodoListMessageModal from '../components/TodoListMessageModal.vue'
  
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');

  const PendingTodoLists = ref([])
  const DoneTodoLists = ref([])
  const title = ref('')
  const content = ref('')

  function fetchDoneList() {
    const { result } = useQuery(
      gql`
        query TodoList($token: String!, $status: String!) {
          todoList(token: $token, status: $status) {
            title
            content
            createdAt
          }
        }
      `,
      {
        token: token,
        status: 'done',
      }
    );
    watchEffect(() => {
      if (result.value) {
        DoneTodoLists.value = result.value.todoList;
      }
    })
  }

  function fetchPendingList() {
    const { result } = useQuery(
      gql`
        query TodoList($token: String!, $status: String!) {
          todoList(token: $token, status: $status) {
            title
            content
            createdAt
          }
        }
      `,
      {
        token: token,
        status: 'pending',
      }
    );
    watchEffect(() => {
      if (result.value) {
        PendingTodoLists.value = result.value.todoList;
      }
    })
  }

  const TodoListContentModal = ref({modal: null})

  const TodoListModal = ref({ modal: null })

  function open(){
    TodoListModal.value.modal.show()
  }

  function contentOpen(newContent, newTitle) {
    content.value = newContent
    title.value = newTitle
    TodoListContentModal.value.modal.show()
  }

  function close(){
    TodoListModal.value.modal.hide()
  }

  function contentClose(){
    TodoListContentModal.value.modal.hide()
  }

  function resetTodoList(todoList) {
    PendingTodoLists.value = todoList
  }

  onMounted(() => {
    TodoListModal.value.modal = new Modal('#todoListModal', {})
    TodoListContentModal.value.modal = new Modal('#todoListMessageModal', {})
    fetchPendingList()
    fetchDoneList()
  })
</script>

<template>
  <ExamCountDown></ExamCountDown>
  <br>
  <Rank></Rank>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card">
        <img src="https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" class="card-img-top" alt="Skyscrapers"/>
        <div class="card-body">
          <h5 class="card-title">待辦事項</h5>
          <div class="list-group list-group-flush">
            <template v-for="(todolist, index) in PendingTodoLists" :key="index">
              <button type="button" class="list-group-item list-group-item-action mt-1" @click="contentOpen(todolist.content, todolist.title)">
                <div class="row">
                  <div class="col">
                    <span>{{ todolist.title }}</span>
                  </div>
                </div>
                <div>
                  <small>{{ todolist.createdAt }}</small>
                </div>
              </button>
            </template>
          </div>
        </div>
        <div class="card-footer d-flex">
          <div class="ms-auto">
            <button type="button" class="btn btn-outline-success btn-sm border-0" data-toggle="modal" data-target="#exampleModal" @click="open">新增標籤</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" class="card-img-top" alt="Los Angeles Skyscrapers"/>
        <div class="card-body">
          <h5 class="card-title">已完成事項</h5>
          <div class="list-group list-group-flush">
            <template v-for="(todolist, index) in DoneTodoLists" :key="index">
              <button type="button" class="list-group-item list-group-item-action mt-1" @click="contentOpen(todolist.content, todolist.title)">
                <div class="row">
                  <div class="col">
                    <span>{{ todolist.title }}</span>
                  </div>
                  <div class="col-auto">
                    <span class="badge bg-primary rounded-pill">14</span>
                  </div>
                </div>
                <div>
                  <small>{{ todolist.createdAt }}</small>
                </div>
              </button>
            </template>
          </div>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://plus.unsplash.com/premium_photo-1682309567426-5517a398b4dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1812&q=80" class="card-img-top" alt="Palm Springs Road"/>
        <div class="card-body">
          <h5 class="card-title">通知</h5>
          <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action mt-1">
              <div class="row">
                <div class="col">
                  <span>A second link item</span>
                </div>
                <div class="col-auto">
                  <span class="badge bg-primary rounded-pill">14</span>
                </div>
              </div>
              <div>
                <small>2022-02-01</small>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action mt-1">
              <div class="row">
                <div class="col">
                  <span>A second link item</span>
                </div>
                <div class="col-auto">
                  <span class="badge bg-primary rounded-pill">14</span>
                </div>
              </div>
              <div>
                <small>2022-02-01</small>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action mt-1">
              <div class="row">
                <div class="col">
                  <span>A second link item</span>
                </div>
                <div class="col-auto">
                  <span class="badge bg-primary rounded-pill">14</span>
                </div>
              </div>
              <div>
                <small>2022-02-01</small>
              </div>
            </a>
          </div>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
  <TodoListNewModal ref="TodoListModal" @closeTodoModal="close" @todoLists="resetTodoList"></TodoListNewModal>
  <TodoListMessageModal ref="TodoListContentModal" :content="content" :title="title" @todoListContentClose="contentClose"></TodoListMessageModal>
</template>


<style scoped>
</style>