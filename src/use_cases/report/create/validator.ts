import { BaseValidator } from "../../../helpers/BaseClasses/BaseValidator";
import { CreateReportRequest } from "./request";

export class CreateReportValidator extends BaseValidator {
  private request: CreateReportRequest;
  constructor(request: CreateReportRequest) {
    super();
    this.request = request;
  }

  parseRequest(): String[] {
    const errors: string[] = [];

    !this.validateId(this.request.ngo_id) &&
      errors.push("Invalid ngo_id format");

    !this.validateNumber(this.request.people_helped) &&
      errors.push("Invalid people_helped format");

    !this.validateNumber(this.request.events_conducted) &&
      errors.push("Invalid events_conducted format");

    !this.validateNumber(this.request.funds_utilized) &&
      errors.push("Invalid funds_utilized format");

    !this.validateMonth(this.request.month) &&
      errors.push("Invalid month format, should be in YYYY-MM format");

    this.request.status &&
      !this.validateStatus(this.request.status) &&
      errors.push("Invalid status format");

    return errors;
  }
}
