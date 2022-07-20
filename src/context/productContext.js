import { createContext, useContext, useEffect, useReducer } from "react";
import { getFetch } from '../customHooks/getFetch';
import { productReducer } from './productReducer';
import { useMediaQuery } from 'react-responsive'


export const ProductsContext = createContext()
const useProducts = () => useContext(ProductsContext)
const ProductsProvider = ({children}) => {
    const [productState, dispatch] = useReducer(productReducer, { serverData:[], productsData:[],bannerData: [], categoryData: [], categoryValue:"default", cartData: [], closeCartModel: true })
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    useEffect(() => {
        getFetch("http://localhost:4000/bannersJSON").then((res) => dispatch({type:"SET_BANNER_DATA", payload: res})).catch((e) => console.log(e))
        getFetch("http://localhost:4000/categoriesJSON").then((res) => dispatch({type:"SET_CATEGORY_DATA", payload: res})).catch((e) => console.log(e))
        getFetch("http://localhost:4000/productsJSON").then((res) => dispatch({type:"GET_PRODUCTS_DATA", payload: res})).catch((e) => console.log(e))

    },[])
   
    return (
        <ProductsContext.Provider value = {{ productState, dispatch, isDesktopOrLaptop}}>
            {children}
        </ProductsContext.Provider>
    )
}
export { useProducts, ProductsProvider}