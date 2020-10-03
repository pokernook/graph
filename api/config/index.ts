import env from "env-var";

export const config = {
  appSecret: env.get("APP_SECRET").required().asString(),
  port: env.get("PORT").default(3000).asPortNumber(),
};
