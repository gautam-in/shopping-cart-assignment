import {CartExpand,CartExpandTop,
  CartExpandMiddle,
  CartExpandBottom,
  CartContainer
} from './CartStyle'
import {cartClose} from '../../../redux/actions/cart'
import {connect} from 'react-redux'
import {CloseIcon} from '../../atoms/Icons/Icons'
import CartProduct from '../../molecules/Product/CartProduct'
import Checkout from './Checkout'
 
const CartExpended = ({cartInfo,cartClose})=>{
    const { open,cartData }  = cartInfo
    let totalCost = 0
      const cartItems = cartData.map((data) =>{
        let {quantity,price} = data
        totalCost += quantity ? price*quantity : price
        return <CartProduct key={data.id} data={data}/>
      }
    );

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
            <Checkout totalCost={totalCost}/>
          </CartExpandBottom>
          </CartContainer>
      </CartExpand>
    )
}


const mapStateToProps = state=>({ cartInfo:state.cart,userInfo:state.user })
const mapDispatchToProps = {cartClose} 
export default  connect(mapStateToProps,mapDispatchToProps)(CartExpended)  