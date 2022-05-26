import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios  from 'axios'
import {getUrl,API_URL} from '../../api/apiUrls'
const initialState = {
    loading: false,
    productsList: [],
    categoriesList: [],
    error: '',
    cartItems: [],
    cartErr: '',
    totalCartPrice: 0,
    selectedCategory: undefined,
    filteredProducts: [],
    totalCartItems: 0
}


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts', (categoryId) => {
        return axios.get(getUrl(API_URL.fetchProducts)).then((res) => {
                return {data: res.data, categoryId}
        })
    }
  )

export const addToCart = createAsyncThunk(
    'productsCard/addToCart', ({product, flag='inc'}) =>{
        let data = {productId: product.id}
        return axios.post(getUrl(API_URL.addToCart),data).then((res)=>{
             if(res.data.response == 'Success'){
                return {product, flag}
            }
        })
    }
)
const addToProductCart = (state,product,existingProduct) =>{
    if(!existingProduct)  {
        state.cartItems.push({...product, quantity: 1, totalPrice: product.price, stock: product.stock -1, totalStock: product.stock })
    }else{
        existingProduct.quantity +=1
        existingProduct.stock -=1
        existingProduct.totalPrice = existingProduct.quantity * product.price
    }
}
const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state,action) =>{
            let {data,categoryId} = action.payload
            state.loading = false
            state.productsList = data
            state.selectedCategory = categoryId
            state.error = ''
            if(categoryId) {
                state.filteredProducts = data.filter((item,i) => {
                    return item.category == categoryId
                })
            }else{
                state.filteredProducts = []
            }
        })
        builder.addCase(fetchProducts.rejected, (state,action) =>{
            state.loading = false
            state.productsList = []
            state.error = action.error.message
        })

        builder.addCase(addToCart.fulfilled, (state,action) =>{
            let {product, flag} = action.payload
            let existingProduct = state.cartItems.find((item) => item.id === product.id)
            if(existingProduct && ((existingProduct?.totalStock === existingProduct?.quantity) && flag == 'inc') || ((existingProduct?.totalStock === existingProduct?.stock) && flag == 'dec')) {
                return
            }
            
            if(flag == 'inc') {
                addToProductCart(state,product,existingProduct)
                state.totalCartPrice += parseFloat(product.price)
                state.totalCartItems += 1
            }else{
                state.totalCartPrice = state.totalCartPrice> 0 ? state.totalCartPrice - parseFloat(product.price)  : 0
                state.totalCartItems = state.totalCartItems > 0 ?state.totalCartItems-1 : 0
                if(existingProduct?.stock == existingProduct?.totalStock - 1) {
                    state.cartItems = state.cartItems.filter((item) => item.id !== product.id);
                    return
                }
                existingProduct.quantity -=1
                existingProduct.stock +=1
                existingProduct.totalPrice -= parseFloat(product.price) 
            }
           
            state.cartErr = ''
            
            
        })
        builder.addCase(addToCart.rejected, (state,action) =>{
            state.cartErr = action.error.message
        })
    }
})

export default productsSlice