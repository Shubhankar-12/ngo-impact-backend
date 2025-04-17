import { GetStatsRequest } from "./request";

export interface GetStatsDto {
  month?: string;
}

export class GetStatsDtoConverter {
  private output_object: GetStatsDto;

  constructor(data: GetStatsRequest) {
    this.output_object = {
      month: data.month ? data.month : undefined,
    };
  }

  public getDtoObject(): GetStatsDto {
    return this.output_object;
  }
}
