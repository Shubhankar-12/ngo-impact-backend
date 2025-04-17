import * as dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import express, { Application } from "express";
import bodyParser from "body-parser";

import { apiRouter } from "./routes";

// opening a db connection
import { DataBase } from "./db/connection";
import { createNgoCron } from "./utils/crons/createNgoCron";
import { createReportCron } from "./utils/crons/createReportCron";
DataBase.getDatabaseConnection();

const app: Application = express();
console.log("App started");

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.use("*", (req, res) => {
  res.status(404);
  res.send({
    isSuccess: false,
    data: null,
    statusCode: 404,
    errors: [
      {
        code: 404,
        message: "Error 404",
      },
    ],
  });
});

// createNgoCron();
// createReportCron();

export { app };
