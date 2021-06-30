import CartIcon from '../../atoms/Icons/CartIcon'
import {Container,Count} from './CartStyle'

function Cart(){
    return (
        <Container>
           <CartIcon/>
           <Count>1 Item</Count> 
        </Container>
    )
}

export default Cart