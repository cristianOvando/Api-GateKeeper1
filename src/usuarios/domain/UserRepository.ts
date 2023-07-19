import { Users } from "./users";

export interface UserRepository {
  login(username: string, password: string): Promise<Users | null>;
  crearUser(
    id: number,
    username: string,
    password: string
  ): Promise<Users | null>;
}
