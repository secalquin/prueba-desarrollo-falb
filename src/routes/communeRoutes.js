import express from "express";
import { getCommuneById } from "../controllers/communeController";

const routes = express.Router();

routes.get("/:nombre", getCommuneById);

export default routes;
