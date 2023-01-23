
import joi from "joi";

const bSchema = joi.object({
    description: joi.string().required(),
    value: joi.string().required(),
    type: joi.string().required()
  });
export default bSchema;