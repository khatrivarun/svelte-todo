import type { UpdateTodo } from './../../models/dtos/update-todo.dto';
import type { CreateTodo } from './../../models/dtos/create-todo.dto';
import {
  fetchTodosFromDb,
  createNewTodo,
  updateTodo as updateTodoFN,
} from './../../backend/backend';
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
    updateTodo: (updateTodo: UpdateTodo) => {
      const updatedTodos = updateTodoFN(updateTodo);
      set(updatedTodos);
    },
  };
};

export const todoStore = createTodoStore();

