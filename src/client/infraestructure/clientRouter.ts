import express from "express";
import { addClientController } from "./dependencies";

export const clientRouter = express.Router();

// Ruta para agregar un nuevo Client
clientRouter.post(
    "/create",
    addClientController.run.bind(addClientController)
);