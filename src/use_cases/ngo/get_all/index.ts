import { GetAllNgoController } from "./controller";
import { GetAllNgoUseCase } from "./usecase";

const getAllNgoUseCase = new GetAllNgoUseCase();

export const getAllNgoController = new GetAllNgoController(getAllNgoUseCase);
