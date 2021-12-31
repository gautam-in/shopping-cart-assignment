export const validate = ({ type, value, required, ariaLabel }) => {
  let errMessage = '';
  let hasError = false;
  if(required && value === "") {
    hasError = true;
    errMessage = `${ariaLabel} is required`;
  }
  if(type === "email" && value !== "") {
    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
    if(!validEmail) {
      hasError = true;
      errMessage = "Invalid Email"
    }
  }
  if(type === "password" && value !== "") {
    const validPassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])).{7,}/.test(value);
    if(!validPassword) {
      hasError = true;
      errMessage = "Password should contain atleast 1 uppercase, 1 lowercase, 1 digit with min length of 8"
    }
  }
  return { hasError, errMessage };
}

export const isItemAlreadyInCart = (items, id) => {
  return !!items.find(item => item.id === id);
}

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
