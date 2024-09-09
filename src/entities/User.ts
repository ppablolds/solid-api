import { uuid } from "uuidv4";

export class User {
  //readonly, faz com que seja único
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, "id">, id?: string) {
    //this.name = props.name
    //this.email = props.email
    //this.password = props.password
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
