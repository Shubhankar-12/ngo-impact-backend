import { CreateNgoRequest } from "./request";

export interface CreateNgoDto {
  name: string;
  email: string;
  contact_number?: string;
  address?: string;
  state?: string;
  city?: string;
  registered_on?: Date;
  status?: string;
}

export class CreateNgoDtoConverter {
  private output_object: CreateNgoDto;

  constructor(data: CreateNgoRequest) {
    this.output_object = {
      name: data.name,
      email: data.email,
      contact_number: data.contact_number ? data.contact_number : undefined,
      address: data.address ? data.address : undefined,
      state: data.state ? data.state : undefined,
      city: data.city ? data.city : undefined,
      registered_on: data.registered_on ? data.registered_on : new Date(),
      status: data.status || "ENABLED",
    };
  }

  public getDtoObject(): CreateNgoDto {
    return this.output_object;
  }
}
