import http from "./index";

const PREFIX = "/banners";

export const getCatalog = () => http.get(PREFIX);
