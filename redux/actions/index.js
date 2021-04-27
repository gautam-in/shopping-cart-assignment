import localInstance from '../apis/localhost';
///////////////////////// Fetching Banners /////////////////////////////////////
export const fetchBanners = () => {
  return async (dispatch) => {
    const resp = await localInstance.get('/api/banners');      
    dispatch({  type : 'FETCH_BANNERS', payload : resp.data })
  }
}

///////////////////////// Fetching Categories /////////////////////////////////////

export const fetchCategoryList = () => {
    return async (dispatch) => {
      const resp = await localInstance.get('/api/categories');      
      dispatch({  type : 'FETCH_CATEGORY_LIST', payload : resp.data })
    }
}
///////////////////////// Fetching Products /////////////////////////////////////
  
export const fetchProductsList = (catId) => { 
    const filterKey = catId;    
    return async (dispatch) => {
      const resp = await localInstance.get(`/api/products?filterby=${filterKey}`)
      dispatch({  type : 'FETCH_PRODUCTS', payload : resp.data })
    }  
}

//////////////////// Products / BuyNow Action Creator //////////////////////////////////////////
export const buyNow = (productObj) => {
  //console.log(productObj);
  return {
    type : 'BUY_NOW',
    payload : productObj
  }
}

//////////////////// Cart's Product > Increment (+) Action Creator //////////////////////////////////////////

export const increment = (productID) => {
  return {
    type : 'INCREMENT',
    payload : productID
  }
}

//////////////////// Cart's Product > Decrement (-) Action Creator //////////////////////////////////////////

export const decrement = (productID) => {
  return {
    type : 'DECREMENT',
    payload : productID
  }
}