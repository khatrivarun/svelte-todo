import { v4 as uuidv4 } from 'uuid';

export class Todo {
  public uuid: string;
  public content: string;
  public isCompleted: boolean;

  static newTodo(content: string): Todo {
    const newTodo = new Todo();

    newTodo.uuid = uuidv4();
    newTodo.content = content;
    newTodo.isCompleted = false;

    return newTodo;
  }

  static fromJson(json: any): Todo {
    const todo = new Todo();

    todo.uuid = json.uuid;
    todo.content = json.content;
    todo.isCompleted = json.isCompleted;

    return todo;
  }
}

