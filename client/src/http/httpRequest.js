import axios from "axios";
import { API_URL } from "../constants";

const headers = {
  "Content-Type": "application/json",
};

const client = axios.create({
  baseURL: API_URL,
  headers,
  timeout: 5000,
});

const httpRequest = async function ({
  method = "GET",
  url = "/",
  headers = {},
  body = {},
}) {
  try {
    const response = await client({
      url,
      method,
      body,
      headers,
    });
    return response;
  } catch (error) {
    if (error.response) {
      console.error({
        Status: error.response.status,
        Data: error.response.data,
        Headers: error.response.headers,
      });
    } else {
      console.error({ "Error Message": error.message });
    }
  }
};

export default httpRequest;
