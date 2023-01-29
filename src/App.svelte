<script lang="ts">
  import { Todo } from '../models/todo.model';
  import TodoForm from './components/TodoForm.svelte';
  import { todoStore } from './stores/todos.store';

  let todo: Todo = {
    uuid: '074b3b23-5b38-44a3-821f-99d32b62bf83',
    content: 'csacsaccscsc',
    isCompleted: false,
  };
  let editMode = true;

  function onSubmitComplete() {
    todo = Todo.emptyTodo();
    editMode = false;
  }
</script>

<div class="dark">
  <h1>SVELTE TODOS</h1>
  <TodoForm {todo} {editMode} on:submit-complete={onSubmitComplete} />
  <p>{$todoStore.length}</p>
</div>
