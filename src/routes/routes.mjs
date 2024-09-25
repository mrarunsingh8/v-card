import {Router} from "express";
import cardsRoute from "./cards/cardsRoute.mjs";

const routes = Router();

routes.use("/cards", cardsRoute);

export default routes;