import { CrearAlertaUseCase } from "../application/CrearAlertaUseCase";
import { CrearNotificacionAlertaUseCase } from "../application/CrearNotificacionAlertaUseCase";
import { CrearAlertaController } from "./controllers/CrearAlertaController";
import { CrearNotificacionAlertaController } from "./controllers/CrearNotificacionAlertaController";
import { RabbitAlertaRepository } from "./RabbitAlertaRepository";

export const rabbitAlertaRepository = new RabbitAlertaRepository();
export const crearAlertaUseCase = new CrearAlertaUseCase(
  rabbitAlertaRepository
);
export const crearNotificacionAlertUseCase = new CrearNotificacionAlertaUseCase(
  rabbitAlertaRepository
);

export const crearAlertController = new CrearAlertaController(
  crearAlertaUseCase
);
export const crearNotificacionAlertController =
  new CrearNotificacionAlertaController(crearNotificacionAlertUseCase);
