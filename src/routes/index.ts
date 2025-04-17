import express from "express";
import { ngoRouter } from "./ngoRoutes";
import { reportRouter } from "./reportRoutes";

const apiRouter = express.Router();
apiRouter.use("/ngo", ngoRouter);
apiRouter.use("/report", reportRouter);

export { apiRouter };
