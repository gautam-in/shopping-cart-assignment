import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Container,LeftSection,MiddleSection,RightSection,Price,CartHeading,
    CartCountContainer,ProductQuantity
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
            <MiddleSection>
                <CartHeading>
                    <Heading type='h5' cname='heading-h5-cart'>{name}</Heading>
                </CartHeading>
                <CartCountContainer>
                    <span onClick={()=>manageQuantity(false,true,price)}><MinusIcon  /></span>
                    <ProductQuantity>{quantity ? quantity : '1'}</ProductQuantity>
                    <span onClick={()=>manageQuantity(true,false,price)}><PlusIcon /></span>
                    <span onClick={()=>removeProductFromCart(id)}><CloseIcon /></span>
                    <Price>Rs.{ quantity ? quantity*price : price }</Price>
                </CartCountContainer>
            </MiddleSection>
            <RightSection>
                <Price>Rs. { quantity ? quantity*price : price }</Price>
            </RightSection>
        </Container>
    )
}

export default CartProduct