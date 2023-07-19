import express from "express";

import { crearAlertController } from "./dependencies";
import { crearNotificacionAlertController } from "./dependencies";

export const alertaRouter = express.Router();

alertaRouter.post("/", crearAlertController.run.bind(crearAlertController));
alertaRouter.post(
  "/",
  crearNotificacionAlertController.run.bind(crearNotificacionAlertController)
);
