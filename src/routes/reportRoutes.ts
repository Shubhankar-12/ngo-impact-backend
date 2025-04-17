import express from "express";
import { createReportController } from "../use_cases/report/create";
import { getStatsController } from "../use_cases/report/get_stats";
export const reportRouter = express.Router();

reportRouter.post("/", createReportController.execute());
reportRouter.get("/dashboard", getStatsController.execute());
