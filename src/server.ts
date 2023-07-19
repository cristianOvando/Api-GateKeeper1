import { config as dotEnvConfig } from "dotenv";
import express from "express";
dotEnvConfig();

import { alertaRouter } from "./alertas/infraestructure/AlertaRouter";
import { config } from "./config";
import { usersRouter } from "./usuarios/infrastructure/UsersRouter";

function boostrap() {
  const app = express();

  app.use(express.json());
  app.use("/Users", usersRouter);
  app.use("/Alerta", alertaRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`Api corriendo en el puerto ${port}`);
  });
}

boostrap();
