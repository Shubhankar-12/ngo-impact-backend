import { BaseValidator } from "../../../helpers/BaseClasses/BaseValidator";
import { CreateNgoRequest } from "./request";

export class CreateNgoValidator extends BaseValidator {
  private request: CreateNgoRequest;
  constructor(request: CreateNgoRequest) {
    super();
    this.request = request;
  }

  parseRequest(): String[] {
    const errors: string[] = [];

    !this.validateEmail(this.request.email) &&
      errors.push("Invalid email format");

    this.request.status &&
      !this.validateStatus(this.request.status) &&
      errors.push("Invalid status format");

    return errors;
  }
}
