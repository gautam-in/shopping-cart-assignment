import { createContext, useContext, useEffect, useReducer } from "react";
import { getFetch } from '../customHooks/getFetch';
import { productReducer } from './productReducer';

const ProductsContext = createContext()
const useProducts = () => useContext(ProductsContext)
const ProductsProvider = ({children}) => {
    const [productState, dispatch] = useReducer(productReducer, { serverData:[], productsData:[], categoryData: [], categoryValue:"" })
    useEffect(() => {
        (async () => {
            try {
                const bannerServerData = await getFetch("http://localhost:4000/productsJSON")
                const catServerData = await getFetch("http://localhost:4000/categoriesJSON")
                dispatch({type:"GET_PRODUCTS_DATA", payload: bannerServerData})
                dispatch({type:"SET_CATEGORY_DATA", payload: catServerData})

            }
            catch (e) {
                console.log(e)
            }
        })()
    },[])
    return (
        <ProductsContext.Provider value = {{ productState, dispatch}}>
            {children}
        </ProductsContext.Provider>
    )
}
export { useProducts, ProductsProvider}