import { LeftSection,RightSection,Container } from "./style";
import NavLinks from '../../molecules/NavLinks/Links'
import Cart from '../../molecules/Cart/Cart'
import Auth from '../../molecules/Auth/Auth'
import Image from 'next/image'

const logo = '/../public/images/logo.png'

function Header(){
    return (
        <Container>
            <LeftSection>
                <Image src={logo} height="100" width="200"/>
                <NavLinks/>
            </LeftSection>
            <RightSection>
                <Auth/>
                <Cart/>
            </RightSection>
        </Container>
    )
}


export default Header