import { IReportDocument, ReportModel } from "../reports";
import { Types, Model } from "mongoose";

const ObjectId = Types.ObjectId;

export class ReportQueries {
  private reportModel: Model<IReportDocument>;

  constructor() {
    this.reportModel = ReportModel;
  }

  createReport = async (data: any): Promise<any> => {
    return await this.reportModel.create(data);
  };

  getDuplicateReport = async (data: any): Promise<any> => {
    let aggregateQuery: any[] = [];

    aggregateQuery.push({
      $match: {
        ngo_id: new ObjectId(data.ngo_id),
        month: data.month,
        status: {
          $ne: "DISABLED",
        },
      },
    });

    return await this.reportModel.aggregate(aggregateQuery);
  };

  getReportAnalytics = async (data: any): Promise<any> => {
    let aggregateQuery: any[] = [];

    aggregateQuery.push({
      $match: {
        status: {
          $ne: "DISABLED",
        },
      },
    });

    if (data.month) {
      aggregateQuery.push({
        $match: {
          month: data.month,
        },
      });
    }

    if (data.ngo_id) {
      aggregateQuery.push({
        $match: {
          ngo_id: new ObjectId(data.ngo_id),
        },
      });
    }

    aggregateQuery.push({
      $group: {
        _id: null,
        totalPeopleHelped: { $sum: "$people_helped" },
        totalEventsConducted: { $sum: "$events_conducted" },
        totalFundsUtilized: { $sum: "$funds_utilized" },
        uniqueNgos: { $addToSet: "$ngo_id" },
      },
    });
    aggregateQuery.push({
      $project: {
        _id: 0,
        totalPeopleHelped: 1,
        totalEventsConducted: 1,
        totalFundsUtilized: 1,
        totalNgosReporting: { $size: "$uniqueNgos" },
      },
    });

    const result = await this.reportModel.aggregate(aggregateQuery);
    return (
      result[0] || {
        totalPeopleHelped: 0,
        totalEventsConducted: 0,
        totalFundsUtilized: 0,
        totalNgosReporting: 0,
      }
    );
  };
}
