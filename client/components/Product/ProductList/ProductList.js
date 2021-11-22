import { ProductListWrapper } from "../../styles/Product/ProductList"
import ProductItem from "../ProductItem/ProductItem"
import { useSelector } from 'react-redux';


export default function ProductsList(props) {
    const products = props.products ? props.products : useSelector(state => state.product.allProducts) ;
    console.log(products.length)
    return (
         <ProductListWrapper>
            { products.length > 0 ? products.map(product => <ProductItem  key={product.id} product={product}/>) : <h2>Sorry! No Products Found for this category</h2>}

        </ProductListWrapper>
    )
}