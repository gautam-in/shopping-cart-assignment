import axios from "axios";

export const getData = async (url) => {
  try {
    const res = await axios.get(`${url}`);
    const data = await res.data;
    return data;
  } catch (e) {
    return e;
  }
};
