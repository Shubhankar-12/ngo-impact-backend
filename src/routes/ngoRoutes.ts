import express from "express";
import { createNgoController } from "../use_cases/ngo/create";
import { getAllNgoController } from "../use_cases/ngo/get_all";
export const ngoRouter = express.Router();

ngoRouter.post("/create", createNgoController.execute());

ngoRouter.get("/list", getAllNgoController.execute());
