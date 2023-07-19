import { Request, Response } from "express";

import { CrearAlertaUseCase } from "../../application/CrearAlertaUseCase";

export class CrearAlertaController {
  constructor(readonly createAlertUseCase: CrearAlertaUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const alert = await this.createAlertUseCase.run(
        data.id,
        data.tipo,
        data.descripcion,
        data.hora
      );

      if (alert)
        res.status(201).send({
          status: "Registro exitoso",
          data: {
            id: alert?.id,
            tipo: alert?.tipo,
            descripcion: alert?.descripcion,
            hora: alert?.hora,
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "El registro no fue completado correctamente",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Se ha detectado un error",
        msn: error,
      });
    }
  }
}
