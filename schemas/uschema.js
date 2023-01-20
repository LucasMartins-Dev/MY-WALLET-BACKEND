
import joi from "joi";

const uSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});
export default uSchema;