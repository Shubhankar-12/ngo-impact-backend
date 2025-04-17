import { Schema, Types } from "mongoose";
import { generateDisplayId } from "../../utils/general_utils";

export const ReportSchema = new Schema(
  {
    ngo_id: {
      type: Types.ObjectId,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    people_helped: {
      type: Number,
      required: true,
    },
    events_conducted: {
      type: Number,
      required: true,
    },
    funds_utilized: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["ENABLED", "DISABLED"],
      default: "ENABLED",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
