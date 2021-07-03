import CartIcon from '../../atoms/Icons/CartIcon'
import {Container,Count} from './CartStyle'
import {incrementCounter} from '../../../redux/actions/main'
import {connect} from 'react-redux'

 
function Cart({cartInfo,incrementCounter}){

  const {cartCount} = cartInfo
    return (
        <Container>
           <CartIcon/>
           <Count>{`${cartCount} Items`}</Count>
           {/* <button onClick={(e)=>{ incrementCounter(cartCount)}}>Cart Count</button>  */}
        </Container>
    )
}

const mapStateToProps = state=>({ cartInfo:state.main })
const mapDispatchToProps = {incrementCounter} 

export default  connect(mapStateToProps,mapDispatchToProps)(Cart)  
