import type { CreateTodo } from './../../models/dtos/create-todo.dto';
import { fetchTodosFromDb, createNewTodo } from './../../backend/backend';
import { writable } from 'svelte/store';

const createTodoStore = () => {
  const todos = fetchTodosFromDb();

  const { subscribe, set, update } = writable(todos);

  return {
    subscribe,
    createTodo: (createTodo: CreateTodo) => {
      const updatedTodos = createNewTodo(createTodo);
      set(updatedTodos);
    },
  };
};

export const todoStore = createTodoStore();

