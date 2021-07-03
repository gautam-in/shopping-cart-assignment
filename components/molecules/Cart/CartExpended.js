import {CartExpand,CartExpandTop,
  CartExpandMiddle,
  CartExpandBottom,
  CartContainer
} from './CartStyle'
import {cartClose} from '../../../redux/actions/main'
import {connect} from 'react-redux'
import {Cross} from "@styled-icons/entypo/Cross";
import CartProduct from './CartProduct'
import Checkout from './Checkout'
 const CartExpended = ({cartInfo,cartClose})=>{
    const { open }  = cartInfo
    if(!open){
      return ''
    }

    return(
      <CartExpand>
        <CartContainer>
          <CartExpandTop>
            <div><strong>My Cart</strong><span>(1 item)</span></div>
            <div><Cross height='20' width='20' onClick={()=>cartClose()} /></div>
          </CartExpandTop>
          <CartExpandMiddle>
              <CartProduct/>
              <CartProduct/>
              <CartProduct/>
              <CartProduct/> 
              <CartProduct/>
               
          </CartExpandMiddle>
          <CartExpandBottom>
            <Checkout/>
          </CartExpandBottom>
          </CartContainer>
      </CartExpand>
    )
}


const mapStateToProps = state=>({ cartInfo:state.main })
const mapDispatchToProps = {cartClose} 
export default  connect(mapStateToProps,mapDispatchToProps)(CartExpended)  