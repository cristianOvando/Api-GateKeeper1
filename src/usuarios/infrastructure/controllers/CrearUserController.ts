import { Request, Response } from "express";

import { CrearUserUseCase } from "../../application/CrearUserUseCase";

export class CrearUserController {
  constructor(readonly crearUserUseCase: CrearUserUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const users = await this.crearUserUseCase.run(
        data.id,
        data.username,
        data.password
      );

      if (users)
        res.status(201).send({
          status: "Registro exitoso",
          data: {
            id: users?.id,
            username: users?.username,
            password: users?.password,
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "No se pudo agregar el usuario correctamente",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "error existente: ",
        msn: error,
      });
    }
  }
}