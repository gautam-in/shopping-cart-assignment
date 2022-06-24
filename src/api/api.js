import axios from "axios";

const url = "http://localhost:4000/";

export const fetchData = (type) => axios.get(url + type);
