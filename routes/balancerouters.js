import { Router } from "express";
import { create, getitens} from "../controllers/balancecontrollers.js";
import bSchema from "../schemas/bschema.js";
import schemavalidate from "../middlewares/schemavalidate.js";
import tokenvalidate from "../middlewares/tokenvalidate.js";

const route = Router();

route.use(tokenvalidate)
route.post("/nova-entrada",schemavalidate(bSchema),create)
route.post("/nova-saida",schemavalidate(bSchema),create)
  route.get("/balance", getitens);


export default route;