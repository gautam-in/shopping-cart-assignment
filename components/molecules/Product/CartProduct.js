import {PlusCircleFill} from "@styled-icons/bootstrap/PlusCircleFill"
import {MinusCircle} from "@styled-icons/boxicons-solid/MinusCircle" 
import {Cross} from "@styled-icons/entypo/Cross"
import { Container,LeftSection,MiddleSection,RightSection,Price} from './CartProductStyle'
import Image from '../../atoms/Image/Image'

function CartProduct({data}){
    const {name,imageURL,price} = data
    return (
        <Container>
            <LeftSection>
                <Image src={imageURL} alt={name} classname='cart-image' />
            </LeftSection>
            <MiddleSection>
                <div><h5>{name}</h5></div>
                <div><MinusCircle width="25" color="#bf2957"/>1<PlusCircleFill width="20" color="#bf2957"/><Cross width="20" /><Price>Rs.{price}</Price></div>
            </MiddleSection>
            <RightSection>
                <Price>Rs. {price}</Price>
            </RightSection>
        </Container>
    )
}

export default CartProduct