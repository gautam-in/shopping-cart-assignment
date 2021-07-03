import { LeftSection,RightSection,Container } from "./style";
import NavLinks from '../../molecules/NavLinks/Links'
import Cart from '../../molecules/Cart/Cart'
import Auth from '../../molecules/Auth/Auth'
import CartExpended from  '../../molecules/Cart/CartExpended'
import {incrementCounter,cartOpen} from '../../../redux/actions/main'
import {connect} from 'react-redux'
import Image from '../../atoms/Image/Image'
import {logo} from '../../../config'

function Header({cartInfo,cartOpen}){
   const  {open} =  cartInfo
    return (
        <>
        <Container>
            <LeftSection>
                <Image src={logo} classname='Logo' alt='Logo'/>
                <NavLinks/>
            </LeftSection>
            <RightSection>
                <Auth />
                <Cart  />
            </RightSection>
        </Container>
        <CartExpended/>
        </>
    )
}

const mapStateToProps = state=>({ cartInfo:state.main })
const mapDispatchToProps = {incrementCounter,cartOpen} 
export default  connect(mapStateToProps,mapDispatchToProps)(Header)  