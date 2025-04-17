import { Request, Response } from "express";
import { CreateReportDtoConverter } from "./dto";
import { CreateReportUseCase } from "./usecase";
import { CreateReportRequest } from "./request";
import { CreateReportValidator } from "./validator";

export class CreateReportController {
  private createReportUseCase: CreateReportUseCase;

  constructor(createReportUseCase: CreateReportUseCase) {
    this.createReportUseCase = createReportUseCase;
  }

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const requestData = req.body as unknown as CreateReportRequest;

      // Validate Request
      const validator = new CreateReportValidator(requestData);
      const errors = validator.parseRequest();
      if (errors.length > 0) {
        res.status(400).json({ errors });
        return;
      }

      // Convert DTO
      const dtoObject = new CreateReportDtoConverter(requestData);

      // Execute Use Case
      const result = await this.createReportUseCase.execute(
        dtoObject.getDtoObject()
      );

      if (typeof result === "object" && "error" in result) {
        res.status(400).json({ error: result.error });
        return;
      }

      res.status(200).json(result);
    } catch (error: any) {
      this.handleError(res, error);
    }
  }

  private handleError(res: Response, error: any): void {
    console.error("CreateReportController Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  execute() {
    return (req: Request, res: Response) => this.handle(req, res);
  }
}
