import { CrearUserUseCase } from "../application/CrearUserUseCase";
import { LoginUseCase } from "../application/LoginUseCase";
import { CrearUserController } from "./controllers/CrearUserController";
import { LoginUserController } from "./controllers/LoginUserController";
import { MysqlUserRepository } from "./MysqlUsersRepository";

export const mysqlUserRepository = new MysqlUserRepository();
export const crearUserUseCase = new CrearUserUseCase(mysqlUserRepository);
export const loginUseCase = new LoginUseCase(mysqlUserRepository);

export const crearUserController = new CrearUserController(crearUserUseCase);
export const loginUserController = new LoginUserController(loginUseCase);
