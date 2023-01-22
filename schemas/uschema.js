
import joi from "joi";

const uSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmpassword: joi.string().valid(joi.ref('password')).required()
});
export default uSchema;