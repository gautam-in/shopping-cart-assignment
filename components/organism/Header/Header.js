import { LeftSection,RightSection,Container } from "./style";
import NavLinks from '../../molecules/NavLinks/Links'
import Cart from '../../molecules/Cart/Cart'
import Auth from '../../molecules/Auth/Auth'
import {connect} from 'react-redux'
import Image from '../../atoms/Image/Image'
import {logo} from '../../../config'

function Header(){
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
        </>
    )
}

export default Header  