import { BaseValidator } from "../../../helpers/BaseClasses/BaseValidator";
import { GetAllNgoRequest } from "./request";

export class GetAllNgoValidator extends BaseValidator {
  private request: GetAllNgoRequest;
  constructor(request: GetAllNgoRequest) {
    super();
    this.request = request;
  }

  parseRequest(): String[] {
    const errors: string[] = [];

    this.request.skip &&
      !this.validateNumber(this.request.skip) &&
      errors.push("Invalid skip format");

    this.request.limit &&
      !this.validateNumber(this.request.limit) &&
      errors.push("Invalid limit format");

    return errors;
  }
}
