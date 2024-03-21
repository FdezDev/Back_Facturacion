import { PgsqlClientRepository } from "./pgsqlClientRepository";
import { AddClientUseCase } from "../application/addClientUsecase";
import { AddClientController } from "./controller/addClientController";


export const pgsqlClientRepository = new PgsqlClientRepository();

export const addClientUseCase = new AddClientUseCase(pgsqlClientRepository);
export const addClientController = new AddClientController(addClientUseCase);