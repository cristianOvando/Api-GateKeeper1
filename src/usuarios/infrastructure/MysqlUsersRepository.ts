import { query } from "../../database/mysql";
import { UserRepository } from "../domain/UserRepository";
import { Users } from "../domain/users";

export class MysqlUserRepository implements UserRepository {
  async login(username: string, password: string): Promise<Users | null> {
    const sql = "SELECT * FROM users";
    const params: any[] = [username];

    try {
      const [data]: any = await query(sql, params);
      console.log("este es el data: ", data);
      const userData = Object.values(JSON.parse(JSON.stringify(data)));

      if (userData.length === 0) {
        return null;
      }

      const user: any = userData[0];

      if (user.password !== password) {
        return null;
      }

      return new Users(user.id, user.username, user.password);
    } catch (error) {
      return null;
    }
  }

  async crearUser(
    id: number,
    username: string,
    password: string
  ): Promise<Users | null> {
    const sql = "INSERT INTO users (id, username, password) VALUES (?, ?, ?)";
    const params: any[] = [id, username, password];
    try {
      const result: any = await query(sql, params);
      const insertarId = result[0].insertarId;

      return new Users(insertarId, username, password);
    } catch (error) {
      return null;
    }
  }
}
