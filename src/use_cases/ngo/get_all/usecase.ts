import { INgo } from "../../../db/ngo";
import { ngoQueries } from "../../../db/queries";
import { ErrorResponse } from "../../../types/all_types";
import { GetAllNgoDto } from "./dto";

// response will have token and ngo data or error message

export class GetAllNgoUseCase {
  async execute(request: GetAllNgoDto): Promise<any> {
    const ngo = await ngoQueries.getAllNgos(request);

    if (ngo[0].paginatedResults.length == 0) {
      ngo[0].totalCount.push({ count: 0 });
    }

    return ngo[0];
  }
}
