<script setup>
import { toRefs } from 'vue';

const props = defineProps({ selectedTodoList: Object });
const emits = defineEmits(['todoListContentClose']);
const { selectedTodoList } = toRefs(props);

function contentClose(){
  emits('todoListContentClose')
}
</script>

<template>
  <div class="modal fade" id="todoListMessageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ selectedTodoList.title }}</h5>
        </div>
        <div class="modal-body" style="white-space: pre-line">
          {{ selectedTodoList.content }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="contentClose">Close</button>
          <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
        </div>
      </div>
    </div>
  </div>
</template>