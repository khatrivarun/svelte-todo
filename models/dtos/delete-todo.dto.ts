export class DeleteDto {
  public uuid: string;

  static newDto(uuid: string): DeleteDto {
    const newDto = new DeleteDto();

    newDto.uuid = uuid;

    return newDto;
  }
}

