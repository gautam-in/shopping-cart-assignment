import { Container,LeftSection,MiddleSection,RightSection,Price,CartHeading,
    CartCountContainer,ProductQuantity
} from './CartProductStyle'
import Image from '../../atoms/Image/Image'
import {PlusIcon,MinusIcon,CloseIcon} from '../../atoms/Icons/Icons'
import Heading from '../../atoms/Heading/Heading'

function CartProduct({data}){
    const {name,imageURL,price} = data
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
                    <MinusIcon /><ProductQuantity>1</ProductQuantity><PlusIcon />
                    <CloseIcon />
                    <Price>Rs.{price}</Price>
                </CartCountContainer>
            </MiddleSection>
            <RightSection>
                <Price>Rs. {price}</Price>
            </RightSection>
        </Container>
    )
}

export default CartProduct