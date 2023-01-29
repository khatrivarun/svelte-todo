<script>
  import { todoStore } from './../stores/todos.store';
  export let value = '';

  function onSubmit() {
    todoStore.createTodo({
      content: value,
    });

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
        <input type="submit" class="px-5 p-1 bg-slate-300 rounded" />
      </div>
    </form>
  </div>
</div>
