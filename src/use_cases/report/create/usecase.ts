import { IReport } from "../../../db/reports";
import { reportQueries } from "../../../db/queries";
import { ErrorResponse } from "../../../types/all_types";
import { CreateReportDto } from "./dto";

// response will have token and report data or error message

export class CreateReportUseCase {
  async execute(request: CreateReportDto): Promise<IReport | ErrorResponse> {
    const existingReport = await reportQueries.getDuplicateReport(request);

    if (existingReport.length > 0) {
      return {
        error: "Report already exists for this month of selected NGO",
      };
    }
    const report = await reportQueries.createReport(request);
    if (report) {
      return {
        report_id: report._id.toString(),
        ngo_id: report.ngo_id,
        month: report.month,
        people_helped: report.people_helped,
        events_conducted: report.events_conducted,
        funds_utilized: report.funds_utilized,
        status: report.status,
        created_at: report.created_at,
        updated_at: report.updated_at,
      };
    }

    return {
      error: "Error creating report",
    };
  }
}
