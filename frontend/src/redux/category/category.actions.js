import axios from "axios";

export const listCategoryDetails = () => async () => {
  try {
    const { data } = await axios.get(`/api/category`);

    return Promise.resolve(data)

  } catch (errObj) {
    let error = errObj.response && errObj.response.data.message
      ? errObj.response.data.message
      : errObj.message;

    console.log({ error })
    return Promise.reject({ error })
  }
};
