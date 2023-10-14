export class UserDTO {
  public user_uuid: string;
  public name?: string;
  public surname?: string;
  public city?: string;
  public age?: number;

  constructor(params: any) {
    this.user_uuid = params.user_uuid;
    this.name = params?.name;
    this.surname = params?.surname;
    this.city = params?.city;
    this.age = params?.age;
  }
}
