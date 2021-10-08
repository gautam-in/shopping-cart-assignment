/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test" | "staging";
    PUBLIC_URL: string;
    REACT_APP_SCHEME: string;
    REACT_APP_BASE_URL: string;
    REACT_APP_VERSION: string;
    REACT_APP_PATH: string;
  }
}
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}
