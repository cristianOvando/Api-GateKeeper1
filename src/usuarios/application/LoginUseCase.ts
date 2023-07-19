import { UserRepository } from "../domain/UserRepository";
import { Users } from "../domain/users";

export class LoginUseCase {
  constructor(readonly usersRepository: UserRepository) {}

  async run(username: string, password: string): Promise<Users | null> {
    try {
      const user = await this.usersRepository.login(username, password);
      console.log("Username ", username);
      return user;
    } catch (error) {
      console.log(`No se ha podido iniciar sesion correctamente: `, error);
      return null;
    }
  }
}
