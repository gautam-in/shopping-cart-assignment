export const GetCategory = async () => {
  try {
    const result = await fetch("http://localhost:3000/categories");
    const categoryData = await result.json();
    if (categoryData && categoryData.length > 0) {
      return categoryData;
    }else{
        throw ('Server not Running, Please try Again Later')
    }
  } catch (err) {
    return err;
  }
};
