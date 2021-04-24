import localInstance from '../../components/apis/localhost';

export const fetchCategoryList = () => {
    return async (dispatch) => {
      const resp = await localInstance.get('/api/categories');      
      dispatch({  type : 'FETCH_CATEGORY_LIST', payload : resp.data })
    }
}
//////////////////////////////////////////////////////////////
  
export const fetchProductsList = (catId) => { 
    const filterKey = catId;    
    return async (dispatch) => {
      const resp = await localInstance.get(`/api/products?filterby=${filterKey}`)
      dispatch({  type : 'FETCH_PRODUCTS', payload : resp.data })
    }  
}