import { INgo } from "../../../db/ngo";
import { ngoQueries } from "../../../db/queries";
import { ErrorResponse } from "../../../types/all_types";
import { CreateNgoDto } from "./dto";

// response will have token and ngo data or error message

export class CreateNgoUseCase {
  async execute(request: CreateNgoDto): Promise<INgo | ErrorResponse> {
    const existingNgo = await ngoQueries.getDuplicateNgo(request.email);
    if (existingNgo) {
      return {
        error: "Ngo already exists",
      };
    }
    const ngo = await ngoQueries.createNgo(request);
    if (ngo) {
      return {
        ngo_id: ngo._id.toString(),
        display_id: ngo.display_id,
        name: ngo.name,
        email: ngo.email,
        contact_number: ngo.contact_number,
        address: ngo.address,
        state: ngo.state,
        city: ngo.city,
        registered_on: ngo.registered_on,
        status: ngo.status,
        created_at: ngo.created_at,
        updated_at: ngo.updated_at,
      };
    }

    return {
      error: "Error creating ngo",
    };
  }
}
