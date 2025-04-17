import { CreateNgoController } from "./controller";
import { CreateNgoUseCase } from "./usecase";

const createNgoUseCase = new CreateNgoUseCase();

export const createNgoController = new CreateNgoController(createNgoUseCase);
