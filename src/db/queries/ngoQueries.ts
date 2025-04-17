import { INgoDocument, NgoModel } from "../ngo";
import { Types, Model } from "mongoose";

const ObjectId = Types.ObjectId;

export class NgoQueries {
  private ngoModel: Model<INgoDocument>;

  constructor() {
    this.ngoModel = NgoModel;
  }

  createNgo = async (data: any): Promise<any> => {
    return await this.ngoModel.create(data);
  };

  getDuplicateNgo = async (email: string): Promise<any> => {
    return await this.ngoModel.findOne({ email: email, status: "ENABLED" });
  };

  getAllNgos = async (data: any): Promise<any> => {
    let aggregateQuery: any[] = [];

    aggregateQuery.push({
      $match: {
        status: {
          $ne: "DISABLED",
        },
      },
    });

    if (data.search) {
      const dataSearch = data.search
        ? data.search.replace(/[()]/g, "\\$&")
        : "";

      aggregateQuery.push({
        $match: {
          $or: [
            { name: { $regex: dataSearch, $options: "i" } },
            { email: { $regex: dataSearch, $options: "i" } },
            { display_id: { $regex: dataSearch, $options: "i" } },
          ],
        },
      });
    }

    aggregateQuery.push({
      $sort: {
        registered_on: 1,
      },
    });

    aggregateQuery.push({
      $project: {
        _id: 0,
        ngo_id: "$_id",
        name: 1,
        email: 1,
        display_id: 1,
        status: 1,
        registered_on: 1,
        updated_at: 1,
      },
    });

    const $facet: any = {
      paginatedResults: [],
      totalCount: [{ $count: "count" }],
    };
    if (data.skip != undefined) {
      $facet.paginatedResults.push({ $skip: data.skip });
    }
    if (data.limit != undefined) {
      $facet.paginatedResults.push({ $limit: data.limit });
    }
    aggregateQuery.push({ $facet });

    return await this.ngoModel.aggregate(aggregateQuery);
  };
}
