import axios from "axios";

export const postCartItemToServer = async (productId) => {
  console.log("PROD ID :", productId);
  const data = {
    id: productId,
  };
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASEURL}/addToCart`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
