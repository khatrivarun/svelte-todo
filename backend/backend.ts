import { Todo } from '../models/todo.model';
import { BACKEND_KEY } from './../constants/backend';

export const fetchTodosFromDb = (): Todo[] => {
  const backendTodosString = localStorage.getItem(BACKEND_KEY);

  if (backendTodosString) {
    const todos: any[] = JSON.parse(backendTodosString).todos;

    return todos.map((rawTodo: any) => Todo.fromJson(rawTodo));
  } else {
    return [];
  }
};

