
import joi from "joi";

const uSchema = joi.object({
  name: joi.string().required().min(3),
  email: joi.string().email().required(),
  password: joi.string().required().min(3),
});
export default uSchema;