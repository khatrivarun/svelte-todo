import { CreateTodo } from './../models/dtos/create-todo.dto';
import { Todo } from '../models/todo.model';
import { BACKEND_KEY } from './../constants/backend';

export const fetchTodosFromDb = (): Todo[] => {
  const backendTodosString = localStorage.getItem(BACKEND_KEY);

  if (backendTodosString) {
    const todos: any[] = JSON.parse(backendTodosString);

    return todos.map((rawTodo: any) => Todo.fromJson(rawTodo));
  } else {
    return [];
  }
};

export const createNewTodo = (createTodo: CreateTodo): Todo[] => {
  const newTodo = Todo.newTodo(createTodo.content);
  const todos = fetchTodosFromDb();

  todos.push(newTodo);
  localStorage.setItem(BACKEND_KEY, JSON.stringify(todos));

  return fetchTodosFromDb();
};

