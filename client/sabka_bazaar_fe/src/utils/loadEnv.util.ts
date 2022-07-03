/* eslint-disable import/no-anonymous-default-export */
import { cleanEnv, str } from "envalid";
import { config } from "dotenv";
export default () => {
  /***
   * Load env into process.env
   */
  config();

  /**
   * Validate env variables are set
   */
  cleanEnv(process.env, {
    NODE_ENV: str({ default: "development" }),
    REACT_APP_SCHEME: str(),
    REACT_APP_BASE_URL: str(),
    REACT_APP_VERSION: str(),
    REACT_APP_PATH: str()
  });
};
