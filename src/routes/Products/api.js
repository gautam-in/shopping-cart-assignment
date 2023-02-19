import axios from "axios";

export const getProductsAPI = async () => {
    const res = await axios.get("/productList",{headers:{
      "accepts":"application/json"
  }});
    return res.data;
  };