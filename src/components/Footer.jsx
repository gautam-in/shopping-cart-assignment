import { Component } from 'react';
import { Container } from 'reactstrap';
import FooterStyled from './styled/Footer.styled';

class Footer extends Component {
    render() {
        return (
            <FooterStyled>
                <Container>
                    Copyright &copy; 2011-2022 Sabka Bazaar Grocery Supplies Pvt Ltd.
                </Container>
            </FooterStyled>
        );
    };
};
export default Footer;