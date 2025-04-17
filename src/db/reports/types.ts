import { Document } from "mongoose";

export interface IReport {
  report_id: string;
  ngo_id: string;
  month: string;
  people_helped: number;
  events_conducted: number;
  funds_utilized: number;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface IReportDocument extends IReport, Document {}
