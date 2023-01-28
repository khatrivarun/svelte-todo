import { DeleteDto } from './../models/dtos/delete-todo.dto';
import { CreateTodo } from './../models/dtos/create-todo.dto';
import { Todo } from '../models/todo.model';
import { BACKEND_KEY } from './../constants/backend';
import { UpdateTodo } from '../models/dtos/update-todo.dto';

export const fetchTodosFromDb = (): Todo[] => {
  const backendTodosString = localStorage.getItem(BACKEND_KEY);

  if (backendTodosString) {
    const todos: any[] = JSON.parse(backendTodosString);

    return todos.map((rawTodo: any) => Todo.fromJson(rawTodo));
  } else {
    localStorage.setItem(BACKEND_KEY, JSON.stringify([]));
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

export const updateTodo = (updateTodo: UpdateTodo): Todo[] => {
  const todos = fetchTodosFromDb();

  const index = todos.findIndex((todo) => todo.uuid === updateTodo.uuid);
  const oldTodo = todos[index];

  oldTodo.content = updateTodo.content;
  oldTodo.isCompleted = updateTodo.isCompleted;

  todos[index] = oldTodo;
  localStorage.setItem(BACKEND_KEY, JSON.stringify(todos));

  return fetchTodosFromDb();
};

export const deleteDto = (deleteDto: DeleteDto): Todo[] => {
  const todos = fetchTodosFromDb();

  const updatedTodos = todos.filter((todo) => todo.uuid !== deleteDto.uuid);
  localStorage.setItem(BACKEND_KEY, JSON.stringify(updatedTodos));

  return fetchTodosFromDb();
};
