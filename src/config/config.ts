import path from "path";
import dotenv from "dotenv";
import joi from "joi";

dotenv.config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env"
  ),
});

interface Config {
  port: number;
  target: string;
  replaced: string;
}

const configSchema = joi
  .object()
  .keys({
    PORT: joi.number().positive().required(),
    TARGET: joi.string().required(),
    REPLACED: joi.string().required(),
  })
  .unknown();

const { value: envVars, error } = configSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config: Config = {
  port: envVars.PORT,
  target: envVars.TARGET,
  replaced: envVars.REPLACED,
};
