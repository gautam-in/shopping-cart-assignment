import { ProductCard, ProductPrice, ProductTitle ,ProductDescription, ButtonBlock, Button} from '../../styles/Product/ProductItem'
import { useDispatch , useSelector } from 'react-redux';
import { addProductToCart } from '../../../store/actions/authAction';

export default function ProductItem({product}) {
    const dispatch = useDispatch();
    const curUser = useSelector(state => state.auth.curUser)
    const cartItems = useSelector(state => state.auth.cart)
    return (
            <ProductCard>
                <ProductTitle>{product.name}</ProductTitle>
                 <img src={product.imageURL} alt={product.name}/>
                <ProductDescription>{product.description}</ProductDescription>
                <ButtonBlock>
                    <ProductPrice><strong>MRP Rs. {product.price}</strong></ProductPrice>
                    <Button onClick={() => {
                       dispatch(addProductToCart(product, curUser))
                    }}>Buy Now</Button>
                </ButtonBlock>
                <Button className="productBuyBtnSmallDevice" onClick={() => {
                    dispatch(addProductToCart(product, curUser))
                  }}>
                    Buy Now @ MRP Rs.{product.price}  
                </Button>
            </ProductCard>
    )
} 