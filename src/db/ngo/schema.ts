import { Schema, Types } from "mongoose";
import { generateDisplayId } from "../../utils/general_utils";

export const NgoSchema = new Schema(
  {
    display_id: { type: String, default: () => generateDisplayId() },
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact_number: { type: String },
    address: { type: String },
    state: { type: String },
    city: { type: String },
    registered_on: { type: Date, default: Date.now },
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
