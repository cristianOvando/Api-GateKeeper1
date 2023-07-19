import express from "express";

import { loginUserController } from "./dependencies";
import { crearUserController } from "./dependencies";

export const usersRouter = express.Router();

usersRouter.get(
  "/:username/:password",
  loginUserController.run.bind(loginUserController)
);
usersRouter.post("/", crearUserController.run.bind(crearUserController));
