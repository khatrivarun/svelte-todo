export class CreateTodo {
  public content: string;

  static newDto(content: string): CreateTodo {
    const newTodo = new CreateTodo();

    newTodo.content = content;

    return newTodo;
  }
}

