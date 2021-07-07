import {CartExpand,CartExpandTop,
  CartExpandMiddle,
  CartExpandBottom,
  CartContainer
} from './CartStyle'
import {cartClose} from '../../../redux/actions/main'
import {connect} from 'react-redux'
import {CloseIcon} from '../../atoms/Icons/Icons'
import CartProduct from '../../molecules/Product/CartProduct'
import Checkout from './Checkout'
 
const CartExpended = ({cartInfo,cartClose,cartData})=>{
    
    const { open }  = cartInfo
    
    const cartItems = cartData.map((data) =>
        <CartProduct key={data.id} data={data}/>
    );

    // if(!open){
    //   return ''
    // }

    return(
      <CartExpand active={open}>
        <CartContainer>
          <CartExpandTop>
            <div><strong>My Cart</strong><span>({cartData.length} item)</span></div>
            <div onClick={()=>cartClose()}><CloseIcon  /></div>
          </CartExpandTop>
          <CartExpandMiddle>
              {cartItems}
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