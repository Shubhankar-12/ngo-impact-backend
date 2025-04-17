/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CreateReportRequest {
  ngo_id: string;
  month: string;
  people_helped: string;
  events_conducted: string;
  funds_utilized: string;
  status?: string;
}
