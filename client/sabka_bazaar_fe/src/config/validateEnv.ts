/* eslint-disable import/no-anonymous-default-export */
import loadEnv from "utils/loadEnv.util";

// validate and load all environment variables
loadEnv();

export default {
  NODE_ENV: process.env.NODE_ENV,
  REACT_APP_SCHEME: process.env.REACT_APP_SCHEME,
  REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
  REACT_APP_VERSION: process.env.REACT_APP_VERSION,
  REACT_APP_PATH: process.env.REACT_APP_PATH
};
