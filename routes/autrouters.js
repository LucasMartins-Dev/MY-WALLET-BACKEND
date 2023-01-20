import { Router } from "express";
import { signUp, signIn } from "../controllers/autcontrollers.js";
import schemavalidate from "../middlewares/schemavalidate.js";
import uSchema from "../schemas/uschema.js";

const route = Router();
route.post("/sign-up", schemavalidate(uSchema), signUp);
route.post("/sign-in", signIn);

export default route;