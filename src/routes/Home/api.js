import axios from "axios";

export const getOffersAPI = async () => {
  const res = await axios.get("/offerList",{headers:{
    "accepts":"application/json"
}});
  return res.data;
};

export const getCategoriesAPI = async () => {
    const res=await axios.get("/categoryList",{headers:{
        "accepts":"application/json"
    }});

    return res.data;
}
