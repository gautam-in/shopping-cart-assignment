import bannerReducer from './slices/banner';
import cartReducer from './slices/cart';
import categoryReducer from './slices/category';
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/form';
import productFilterReducer from './slices/product-filter';
import productReducer from './slices/products';

// eslint-disable-next-line import/named

const store = configureStore({
  reducer: {
    formData: formReducer,
    category: categoryReducer,
    banner: bannerReducer,
    cart: cartReducer,
    product: productReducer,
    productsFilter: productFilterReducer,
  },
});

export default store;
