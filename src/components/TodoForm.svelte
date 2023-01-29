<script lang="ts">
  import type { Todo } from '../../models/todo.model';
  import { todoStore } from './../stores/todos.store';
  import { createEventDispatcher } from 'svelte';

  export let todo: Todo;
  export let editMode = false;

  let value = todo ? todo.content : '';

  const dispatch = createEventDispatcher();

  function onSubmit() {
    if (!editMode)
      todoStore.createTodo({
        content: value,
      });
    else {
      todoStore.updateTodo({
        ...todo,
        content: value,
      });

      dispatch('submit-complete');
    }

    value = '';
  }
</script>

<div class="flex flex-col justify-center items-center">
  <div class="bg-slate-200 shadow-lg rounded">
    <form on:submit|preventDefault={onSubmit}>
      <div class="flex flex-row justify-center items-center m-4">
        <input
          type="text"
          name="content"
          id="content"
          class="rounded-md p-1 m-1 mx-5"
          bind:value
        />
        <input
          type="submit"
          class="px-5 p-1 bg-slate-300 rounded"
          value={editMode ? 'Update' : 'Submit'}
        />
      </div>
    </form>
  </div>
</div>
