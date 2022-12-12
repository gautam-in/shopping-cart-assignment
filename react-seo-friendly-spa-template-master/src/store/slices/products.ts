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


export const { filterby, clear } = ProductSlice.actions;

export default ProductSlice.reducer
