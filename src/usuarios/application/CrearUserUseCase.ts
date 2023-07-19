import { UserRepository } from "../domain/UserRepository";
import { Users } from "../domain/users";

export class CrearUserUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(
    id: number,
    username: string,
    password: string
  ): Promise<Users | null> {
    try {
      const users = await this.userRepository.crearUser(id, username, password);
      return users;
    } catch (error) {
      return null;
    }
  }
}
