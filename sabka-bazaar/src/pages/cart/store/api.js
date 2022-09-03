export const postCartItemToServer = async (options) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASEURL}/addToCart`,
      options
    );
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
