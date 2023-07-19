import { Request, Response } from "express";

import { LoginUseCase } from "../../application/LoginUseCase";

export class LoginUserController {
  constructor(readonly loginUseCase: LoginUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const { username, password } = req.params;
      const user = await this.loginUseCase.run(username, password);

      if (user) {
        res.status(200).send({
          status: "inicio de sesion exitoso",
          data: {
            username: user.username,
            password: user.password,
          },
        });
      } else {
        res.status(400).send({
          status: "error",
          msn: "oh no! algo salio mal al inciar sesion",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        status: "error",
        message: "Ocurrió un error",
      });
    }
  }
}