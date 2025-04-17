import { Request, Response } from "express";
import { GetAllNgoDtoConverter } from "./dto";
import { GetAllNgoUseCase } from "./usecase";
import { GetAllNgoRequest } from "./request";
import { GetAllNgoValidator } from "./validator";

export class GetAllNgoController {
  private getAllNgoUseCase: GetAllNgoUseCase;

  constructor(getAllNgoUseCase: GetAllNgoUseCase) {
    this.getAllNgoUseCase = getAllNgoUseCase;
  }

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const requestData = req.query as unknown as GetAllNgoRequest;

      // Validate Request
      const validator = new GetAllNgoValidator(requestData);
      const errors = validator.parseRequest();
      if (errors.length > 0) {
        res.status(400).json({ errors });
        return;
      }

      // Convert DTO
      const dtoObject = new GetAllNgoDtoConverter(requestData);

      // Execute Use Case
      const result = await this.getAllNgoUseCase.execute(
        dtoObject.getDtoObject()
      );

      if (typeof result === "object" && "error" in result) {
        res.status(400).json({ error: result.error });
        return;
      }
      const formattedResponse = {
        result: result.paginatedResults,
        metadata: {
          totalCount: result.totalCount?.[0]?.count || 0,
        },
      };
      res.status(200).json(formattedResponse);
    } catch (error: any) {
      this.handleError(res, error);
    }
  }

  private handleError(res: Response, error: any): void {
    console.error("GetAllNgoController Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  execute() {
    return (req: Request, res: Response) => this.handle(req, res);
  }
}
