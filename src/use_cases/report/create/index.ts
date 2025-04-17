import { CreateReportController } from "./controller";
import { CreateReportUseCase } from "./usecase";

const createReportUseCase = new CreateReportUseCase();

export const createReportController = new CreateReportController(
  createReportUseCase
);
