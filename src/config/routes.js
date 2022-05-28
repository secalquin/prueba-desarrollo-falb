import express from "express";
import communesRoutes from "../routes/communeRoutes";

const routes = express.Router();

routes.use("/communes", communesRoutes);

export default routes;
