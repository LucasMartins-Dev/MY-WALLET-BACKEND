import { Router } from "express";
import { balanceget, balancepost } from "../controllers/balancecontrollers.js";
import bSchema from "../schemas/bschema.js";
import schemavalidate from "../middlewares/schemavalidate.js";
import tokenvalidate from "../middlewares/tokenvalidate.js";

const route = Router();
route.post(
  "/balance",
  tokenvalidate,
  schemavalidate(bSchema),
  balancepost
);
route.get("/balance", tokenvalidate, balanceget);

export default route;