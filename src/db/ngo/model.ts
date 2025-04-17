import { model } from "mongoose";
import { NgoSchema } from "./schema";
import { INgoDocument } from "./types";

export const NgoModel = model<INgoDocument>("NGO", NgoSchema, "NGO");
