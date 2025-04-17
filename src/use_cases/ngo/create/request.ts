/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CreateNgoRequest {
  name: string;
  email: string;
  contact_number?: string;
  address?: string;
  state?: string;
  city?: string;
  registered_on?: Date;
  status?: string;
}
