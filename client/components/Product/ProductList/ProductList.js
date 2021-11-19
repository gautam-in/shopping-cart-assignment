import { ProductListWrapper } from "../../styles/Product/ProductList"
import ProductItem from "../ProductItem/ProductItem"
import { useSelector } from 'react-redux';


export default function ProductsList(props) {
    const products = props.products ? props.products : useSelector(state => state.product.allProducts) ;
    return (
        <ProductListWrapper>
            {products.map(product => <ProductItem  key={product.id} product={product}/>)}
        </ProductListWrapper>
    )
}