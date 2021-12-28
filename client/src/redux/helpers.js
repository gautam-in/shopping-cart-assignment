export const mapCategories = categories => {
  // Filters categories which are not enabled, maps each with dir param, 
  // also sorts them based on order
  return categories
    .filter(category => category.enabled)
    .map((category, idx) => {
      const dir = idx % 2 === 0 ? "left" : "right";
      return {
        ...category,
        dir
      }
    })
    .sort((cate1, cate2) => cate1.order < cate2.order ? -1 : 
      (cate1.order > cate2.order ? 1 : 0))
}

export const filterProducts = (products, categoryId) => {
  return products.filter(product => product.category.indexOf(categoryId) !== -1);
}

export const addItemQty = (cartItems, id) => {
  return cartItems.map(item => {
    if(item.id === id) {
      return {
        ...item,
        qty: item.qty + 1
      }
    }
    return item;
  });
}

export const decreaseItemQty = (cartItems, id) => {
  return cartItems.reduce((result, item) => {
    if(item.id === id) {
      if(item.qty > 1) {
        return [...result, { ...item, qty: item.qty - 1 }];
      } else {
        return result;
      }
    }
    return [...result, item];
  }, []);
}
