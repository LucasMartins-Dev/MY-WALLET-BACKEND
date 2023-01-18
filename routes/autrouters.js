

import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import uSchema from "../schemas/uSchema.js";
import { signUp, signIn } from "../controllers/authControllers.js";
const route = Router();
route.post("/sign-up", validateSchema(uSchema), signUp);
route.post("/sign-in", signIn);

export default route;