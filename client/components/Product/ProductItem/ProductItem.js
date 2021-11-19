import { ProductCard, ProductPrice, TitleContainer ,ProductDescription, ButtonBlock, Button} from '../../styles/Product/ProductItem'
import { useDispatch , useSelector } from 'react-redux';
import { addProductToCart } from '../../../store/actions/authAction';

export default function ProductItem({product}) {
    const dispatch = useDispatch();
    const curUser = useSelector(state => state.auth.curUser)
    return (
            <ProductCard>
                <TitleContainer>
                    <h4>{product.name}</h4>
                 </TitleContainer>
                 <img src={product.imageURL} alt={product.name}/>
                <ProductDescription>{product.description.substr(0,120) + '...'}</ProductDescription>
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