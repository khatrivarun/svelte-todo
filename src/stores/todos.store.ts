import { fetchTodosFromDb } from './../../backend/backend';
import { writable } from 'svelte/store';

const createTodoStore = () => {
  const todos = fetchTodosFromDb();


  const { subscribe, set, update } = writable(todos);

  return {
    subscribe,
  };
};

export const todoStore = createTodoStore();

