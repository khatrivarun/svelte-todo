export class UpdateTodo {
  public uuid: string;
  public content: string;
  public isCompleted: boolean;

  static newDto(
    uuid: string,
    content: string,
    isCompleted: boolean
  ): UpdateTodo {
    const newDto = new UpdateTodo();

    newDto.uuid = uuid;
    newDto.content = content;
    newDto.isCompleted = isCompleted;

    return newDto;
  }
}

