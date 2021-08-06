import CartIcon from '../../atoms/Icons/CartIcon'
import {Container,Count} from './CartStyle'
import {incrementCounter,cartOpen} from '../../../redux/actions/main'
import {connect} from 'react-redux'
import CartExpended from  '../../molecules/Cart/CartExpended'
import { useSelector } from 'react-redux'

function Cart({cartInfo,incrementCounter,cartOpen}){

  const user = useSelector((state) => state.user)
  const cart = useSelector((state) => state.cart)
  const cartCount = cart.cartData.length
    
  return (
      <>
        <Container onClick={(e)=>{ cartOpen()}}>
           <CartIcon/>
           <Count>{`${cartCount} Items`}</Count>
        </Container>
        <CartExpended cartData={user.cart}/>
      </>
    )
}

const mapStateToProps = state=>({ cartInfo:state.cart })
const mapDispatchToProps = {incrementCounter,cartOpen} 

export default  connect(mapStateToProps,mapDispatchToProps)(Cart)  
