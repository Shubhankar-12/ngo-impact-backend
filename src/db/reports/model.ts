import { model } from "mongoose";
import { ReportSchema } from "./schema";
import { IReportDocument } from "./types";

export const ReportModel = model<IReportDocument>(
  "report",
  ReportSchema,
  "reports"
);
