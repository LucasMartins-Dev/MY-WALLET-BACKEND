import { Router } from "express";
import { signUp, signIn } from "../controllers/authControllers.js";
import schemavalidate from "../middlewares/vschemavalidate.js";
import uSchema from "../schemas/uSchema.js";

const route = Router();
route.post("/sign-up", schemavalidate(uSchema), signUp);
route.post("/sign-in", signIn);

export default route;