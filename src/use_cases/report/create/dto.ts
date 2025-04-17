import { CreateReportRequest } from "./request";

export interface CreateReportDto {
  ngo_id: string;
  month: string;
  people_helped: number;
  events_conducted: number;
  funds_utilized: number;
  status?: string;
}

export class CreateReportDtoConverter {
  private output_object: CreateReportDto;

  constructor(data: CreateReportRequest) {
    this.output_object = {
      ngo_id: data.ngo_id,
      month: data.month,
      people_helped: Number(data.people_helped),
      events_conducted: Number(data.events_conducted),
      funds_utilized: Number(data.funds_utilized),
      status: data.status || "ENABLED",
    };
  }

  public getDtoObject(): CreateReportDto {
    return this.output_object;
  }
}
