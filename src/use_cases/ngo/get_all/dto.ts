import { GetAllNgoRequest } from "./request";

export interface GetAllNgoDto {
  skip?: number;
  limit?: number;
  search?: string;
}

export class GetAllNgoDtoConverter {
  private output_object: GetAllNgoDto;

  constructor(data: GetAllNgoRequest) {
    this.output_object = {
      skip: data.skip ? Number(data.skip) : 0,

      search: data.search ? data.search : "",
    };
    if (data.limit) {
      this.output_object.limit = Number(data.limit);
    }
  }

  public getDtoObject(): GetAllNgoDto {
    return this.output_object;
  }
}
