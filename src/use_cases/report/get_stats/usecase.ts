import { reportQueries } from "../../../db/queries";
import { GetStatsDto } from "./dto";

export class GetStatsUseCase {
  async execute(request: GetStatsDto): Promise<any> {
    const stats = await reportQueries.getReportAnalytics(request);
    if (!stats) {
      return {
        error: "No data found",
      };
    }

    return stats;
  }
}
