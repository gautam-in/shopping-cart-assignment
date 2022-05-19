import {FooterComponent,FooterCopyrightContainer,FooterCopyright} from './Footer.styles';

const Footer = () =>{
    return (
        <FooterComponent>
            <FooterCopyrightContainer>
                <FooterCopyright>
                Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
                </FooterCopyright>
            </FooterCopyrightContainer>
        </FooterComponent>
    )
}

export default Footer;