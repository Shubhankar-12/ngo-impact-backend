import { BaseValidator } from "../../../helpers/BaseClasses/BaseValidator";
import { GetStatsRequest } from "./request";

export class GetStatsValidator extends BaseValidator {
  private request: GetStatsRequest;
  constructor(request: GetStatsRequest) {
    super();
    this.request = request;
  }

  parseRequest(): String[] {
    const errors: string[] = [];

    this.request.month !== undefined &&
      !this.validateMonth(this.request.month) &&
      errors.push("Invalid month format, should be in YYYY-MM format");

    return errors;
  }
}
