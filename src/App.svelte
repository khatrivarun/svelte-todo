<script lang="ts">
  import TodoForm from './components/TodoForm.svelte';
  import { todoStore } from './stores/todos.store';

  let name = 'world';
</script>

<div class="dark">
  <h1>SVELTE TODOS</h1>
  <TodoForm bind:value={name} />
  <p>{$todoStore.length}</p>
</div>
