import { useSelector } from 'react-redux';
import { ProductDetailContainer, DetailContainer } from '../../components/styles/Product/ProductDetail';
import { Button } from '../../components/styles/Product/ProductItem';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/actions/authAction';

export default function ProductDetail({ query }) {
    const dispatch = useDispatch()
    const pid = query.pid;
    const allProducts = useSelector(state => state.product.allProducts);
    let product;
    if(allProducts.length > 0) {
        product = allProducts.find(product => product.id === pid);
    }

    console.log(product)

    return (
        <ProductDetailContainer>
                <img src={product.imageURL} alt={product.name}/>
                <DetailContainer>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>

                    { product.stock > 0 ? <h4 className="in-stock">In Stock</h4> : <h4 className="out-stock">Out Of Stock</h4> }
                    <h3>Price : {product.price.toFixed(2)}</h3>

                    <Button className="productBuyBtnSmallDevice" onClick={() => {
                        dispatch(addProductToCart(product, {}))
                    }}>
                        <span>Add To Cart</span>
                        <span>MRP: {product.price.toFixed(2)}</span>  
                    </Button>
                </DetailContainer>
        </ProductDetailContainer>
    )   
}


