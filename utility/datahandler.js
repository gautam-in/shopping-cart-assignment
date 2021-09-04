import axios from "axios";
import { BaseURL } from "./config";

export async function getData(url) {
  return await axios.get(`${BaseURL}${url}`).then((response) => response.data);
}
