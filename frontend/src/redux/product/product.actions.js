import axios from "axios";

export const listProductDetails = (categoryId) => async () => {
  try {

    const { data } = await axios.post(`/api/products/getProductByCatId`, { categoryId });

    return Promise.resolve(data)

  } catch (errObj) {
    let error = errObj.response && errObj.response.data.message
      ? errObj.response.data.message
      : errObj.message;

    console.log({ error })
    return Promise.resolve({ error })
  }
};
