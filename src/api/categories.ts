import http from "./index";

const PREFIX = "/categories";

export const fetchCategories = () => http.get(PREFIX);
