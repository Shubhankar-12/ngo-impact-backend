import { Request, Response } from "express";
import { CreateNgoDtoConverter } from "./dto";
import { CreateNgoUseCase } from "./usecase";
import { CreateNgoRequest } from "./request";
import { CreateNgoValidator } from "./validator";

export class CreateNgoController {
  private createNgoUseCase: CreateNgoUseCase;

  constructor(createNgoUseCase: CreateNgoUseCase) {
    this.createNgoUseCase = createNgoUseCase;
  }

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const requestData = req.body as unknown as CreateNgoRequest;

      // Validate Request
      const validator = new CreateNgoValidator(requestData);
      const errors = validator.parseRequest();
      if (errors.length > 0) {
        res.status(400).json({ errors });
        return;
      }

      // Convert DTO
      const dtoObject = new CreateNgoDtoConverter(requestData);

      // Execute Use Case
      const result = await this.createNgoUseCase.execute(
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
    console.error("CreateNgoController Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  execute() {
    return (req: Request, res: Response) => this.handle(req, res);
  }
}
