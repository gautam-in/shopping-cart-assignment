import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';

export interface ProductState {
  entities: any
  loading: string
  error: any
}



const initialState: ProductState = {
  entities: {
    products: [],
    categories: [],
    beverages: [],
    filtered: [],
    cartItems: []
  },
  loading: 'idle',
  error: null,
}

export const getAllProductsByCategories = createAsyncThunk(
    'Products/all',
    async (apiType: string) => {
      try {
        const response = await fetch(`http://localhost:5000/${apiType}`);
        const data = await response.json();
        return { type: apiType, data};
      } catch (error) {
        return { type: apiType, error};
      }
    }
  )

export const ProductSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<object>) => {
      const product: any = action?.payload;
      const checkItem = state.entities.cartItems.find((item: any) => item?.id === product?.id);
      if(!checkItem && action?.payload){
        state.entities.cartItems.push({...action.payload, count: 1})
      }else{
        state.entities.cartItems = state.entities.cartItems.map((item: any) => {
          if(item?.id === product?.id){
            return {...item, count: item?.count + 1};
          }
          return item;
        });
      }
      return;
    },
    removeCartItem: (state, action: PayloadAction<any>) => {
      if(action?.payload?.id){
        state.entities.cartItems = state.entities.cartItems.filter((item: any) => {
          return item?.id !== action?.payload?.id && item;
        });
      }
      return;
    },
    incrementCartItemCount: (state, action: PayloadAction<any>) => {
      if(action?.payload?.id){
        state.entities.cartItems = state.entities.cartItems.map((item: any) => {
          if(item?.id === action?.payload?.id){
            return {...item, count: item?.count + 1};
          }
          return item;
        });
      }
      return;
    },
    decrementCartItemCount: (state, action: PayloadAction<any>) => {
      if(action?.payload?.id){
        state.entities.cartItems = state.entities.cartItems.map((item: any) => {
          if(item?.id === action?.payload?.id){
            return {...item, count: item?.count > 2  ? item?.count - 1 : 1};
          }
          return item;
        });
      }
      return;
    },
    filterby: (state, action: PayloadAction<string>) => {
      if(action?.payload === '0') {
        state.entities.filtered = [];
        return;
      }
      state.entities.filtered = state.entities.products.filter((item:any) => item?.category === action?.payload)
    },
    clear: (state, action: PayloadAction<string>) => {
      switch(action?.payload){
        case "products": state.entities.products = []; return;
        case "categories": state.entities.categories = []; return;
        case "beverages": state.entities.beverages = []; return;
        case "filtered": state.entities.filtered = []; return;
        case "cartItems": state.entities.cartItems = []; return;
        default: return;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsByCategories.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(getAllProductsByCategories.fulfilled, (state, action) => {
        const entityType:string = action?.payload?.type;

        if (
          state.loading === 'pending' 
        ) {
          state.loading = 'idle';
          state.entities[entityType] = action?.payload?.data || [];
        }
      })
      .addCase(getAllProductsByCategories.rejected, (state, action) => {
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle';
          state.error = action.error;
        }
      })
  },
})


export const { filterby, clear, addToCart, incrementCartItemCount, decrementCartItemCount, removeCartItem } = ProductSlice.actions;

export default ProductSlice.reducer
