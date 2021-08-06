import {CartExpand,CartExpandTop,
  CartExpandMiddle,
  CartExpandBottom,
  CartContainer,
  CartOverlayStyled,
  CartClose,
  CartHeading,
  HeadingText,
  ItemCount
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
      <>
      <CartOverlayStyled open={open}/>
      <CartExpand active={open}>
        <CartContainer>
          <CartExpandTop>
            
            <CartHeading>
              <HeadingText>My Cart</HeadingText>
              <ItemCount>({cartData.length} item)</ItemCount>
            </CartHeading>

            <CartClose onClick={()=>cartClose()}><CloseIcon  /></CartClose>
          </CartExpandTop>
          <CartExpandMiddle>
              {cartItems}
          </CartExpandMiddle>
          <CartExpandBottom>
            <Checkout totalCost={totalCost}/>
          </CartExpandBottom>
          </CartContainer>
      </CartExpand>
      </>
    )
}


const mapStateToProps = state=>({ cartInfo:state.cart,userInfo:state.user })
const mapDispatchToProps = {cartClose} 
export default  connect(mapStateToProps,mapDispatchToProps)(CartExpended)  