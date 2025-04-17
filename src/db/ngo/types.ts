import { Document } from "mongoose";

export interface INgo {
  ngo_id: string;
  display_id: string;
  name: string;
  email: string;
  contact_number: string;
  address: string;
  state: string;
  city: string;
  registered_on: Date;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface INgoDocument extends INgo, Document {}
