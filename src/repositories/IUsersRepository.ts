import { User } from "../entities/User";

export interface IUsersRepository {
  //Metodos
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}
