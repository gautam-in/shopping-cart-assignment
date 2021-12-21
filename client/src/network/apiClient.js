import axios from "axios";

export default function apiClient() {
  return axios.create({
    baseURL: `http://localhost:5000/`,
  });
}

export const get=(endPoint)=>{
  return apiClient().get(endPoint)
}