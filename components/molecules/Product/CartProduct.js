import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Container,LeftSection,RightSection,Price,
    ProductQuantity,ProductHeading,ProductActions,PriceRight,ProductPlus,ProductMinus
} from './CartProductStyle'
import Image from '../../atoms/Image/Image'
import {PlusIcon,MinusIcon,CloseIcon} from '../../atoms/Icons/Icons'
import Heading from '../../atoms/Heading/Heading'
import {filterProduct,removeFromCart} from '../../../utils/utils'

function CartProduct({data}){
    const {id,name,imageURL,price,quantity} = data
    
    const cartInfo = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const {cartData} = cartInfo;
    
    const manageQuantity = (increase = false,decrease=false)=>{
        const filterData = filterProduct(cartData,data,increase,decrease,price)
        dispatch({ type: 'ADD_TO_CART',payload:filterData })
    }

    const removeProductFromCart = (id)=>{
        const dataAfterRemoved = removeFromCart(cartData,id) 
        dispatch({ type: 'ADD_TO_CART',payload:dataAfterRemoved })
    }

    return (
        <Container>
            <LeftSection>
                <Image src={imageURL} alt={name} classname='cart-image' />
            </LeftSection>
            <RightSection>
                <ProductHeading>
                    {/* <Heading type='h4' cname='heading-h5-cart'>{name}</Heading> */}
                    {name}
                </ProductHeading>
                <ProductActions>
                    <ProductMinus onClick={()=>manageQuantity(false,true,price)}><MinusIcon  /></ProductMinus>  
                    <ProductQuantity>{quantity ? quantity : '1'}</ProductQuantity> 
                    <ProductPlus onClick={()=>manageQuantity(true,false,price)}><PlusIcon /></ProductPlus> 
                    <CloseIcon />
                    <Price>Rs.{ quantity ? quantity*price : price }</Price>
                    <PriceRight>Rs. { quantity ? quantity*price : price }</PriceRight>    
                </ProductActions>
            </RightSection>
        </Container>
    )
}

export default CartProduct