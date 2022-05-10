import { Component } from 'react';
import { connect } from 'react-redux';
import {createSelector} from 'reselect';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import HeaderStyled from './styled/Header.styled';
import Navbar from './Navbar';
import CartCount from './cart/CartCount';
import Cart from './cart';
import { handleActiveLinkStatus } from '../utils';
import {userLoginStatusSelector} from '../store/selectors';

class Header extends Component {
    render() {
        const {isUserLoggedIn} = this.props;

        return (
            <HeaderStyled>
                <Container>
                    <Row>
                        <Col xs="3">
                            <img src="/static/images/logo.png" alt="sabka bazaar" className='logo mb-1' />
                        </Col>

                        <Col xs="9">
                            <Row className='mb-3'>
                                <Col xs="8" md="10"></Col>
                                <Col xs="2" className={isUserLoggedIn ? 'ml-xs-20' : 'mt-5'}>
                                    <NavLink style={handleActiveLinkStatus} className='link-item mx-1' to="/">SignIn</NavLink>
                                    <NavLink style={handleActiveLinkStatus} className='link-item mx-1' to="/register">Register</NavLink>
                                </Col>
                            </Row>

                            {isUserLoggedIn && <Row>
                                <Col xs="8" md="10">
                                    <Navbar />
                                </Col>
                                <Col xs="2" className='ml-xs-20'>
                                    <CartCount />
                                </Col>
                                <Cart />
                            </Row>}
                        </Col>
                    </Row>
                </Container>
            </HeaderStyled>
        );
    };
};

const mapStateToProps = createSelector(
    [userLoginStatusSelector],
    (isUserLoggedIn) => ({
        isUserLoggedIn
    })
);
export default connect(mapStateToProps)(Header);