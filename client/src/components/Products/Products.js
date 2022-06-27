import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { fetchProductList } from "../../features/productList/ProductListSlice"
import Product from "../Products/Product"
import "../../styles/components/products.scss"

const Products = () => {

    const [filteredCategory, setFilteredCategory] = React.useState([])

    const dispatch = useDispatch()

    const { data } = useSelector(state => state.ProductListReducer)
    const { updatedSelectedCategory: { categoryId } } = useSelector(state => state.CategoryReducer)
    const { cartOpen } = useSelector(state => state.CartReducer)
    React.useEffect(() => {
        dispatch(fetchProductList())



    }, [])

    React.useEffect(() => {
        const filteredData = data.filter(i => i.category == categoryId)
        setFilteredCategory(filteredData)

    }, [categoryId])



    return (<main className="productList_Container">
        {data && !categoryId && data.map(product => {
            return (<Product product={product} key={product.id} />)
        })}

        {data && categoryId && filteredCategory.map(product => {
            return (<Product product={product} key={product.id} />
            )
        })}
    </main>)
}


export default Products