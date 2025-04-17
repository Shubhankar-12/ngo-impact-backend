import { Request, Response } from "express";
import { GetStatsDtoConverter } from "./dto";
import { GetStatsUseCase } from "./usecase";
import { GetStatsRequest } from "./request";
import { GetStatsValidator } from "./validator";

export class GetStatsController {
  private getStatsUseCase: GetStatsUseCase;

  constructor(getStatsUseCase: GetStatsUseCase) {
    this.getStatsUseCase = getStatsUseCase;
  }

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const requestData = req.query as unknown as GetStatsRequest;

      // Validate Request
      const validator = new GetStatsValidator(requestData);
      const errors = validator.parseRequest();
      if (errors.length > 0) {
        res.status(400).json({ errors });
        return;
      }

      // Convert DTO
      const dtoObject = new GetStatsDtoConverter(requestData);

      // Execute Use Case
      const result = await this.getStatsUseCase.execute(
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
    console.error("GetStatsController Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  execute() {
    return (req: Request, res: Response) => this.handle(req, res);
  }
}
