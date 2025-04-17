import { GetStatsController } from "./controller";
import { GetStatsUseCase } from "./usecase";

const getStatsUseCase = new GetStatsUseCase();

export const getStatsController = new GetStatsController(getStatsUseCase);
