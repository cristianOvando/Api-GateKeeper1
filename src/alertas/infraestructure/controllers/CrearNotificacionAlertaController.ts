import { Request, Response } from "express";

import { CrearNotificacionAlertaUseCase } from "../../application/CrearNotificacionAlertaUseCase";

export class CrearNotificacionAlertaController {
  constructor(
    readonly crearNotificacionAlertaUseCase: CrearNotificacionAlertaUseCase
  ) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const alert = await this.crearNotificacionAlertaUseCase.run(
        data.id,
        data.tipo,
        data.descripcion,
        data.hora
      );

      if (alert)
        res.status(201).send({
          status: "alerta exitosa",
          data: {
            affectedUserId: alert?.id,
            tipo: alert?.tipo,
            descripcion: alert?.descripcion,
            hora: alert?.hora,
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "La notificacion no se mando correctamente",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Error detectado",
        msn: error,
      });
    }
  }
}
