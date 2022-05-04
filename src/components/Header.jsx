import { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import CartCount from './cart/CartCount';
import Cart from './cart';
import { handleActiveLinkStatus } from '../utils';

class Header extends Component {
    render() {
        const {isUserLoggedIn} = this.props;

        return (
            <header>
                <Container>
                    <Row>
                        <Col xs="3">
                            <img src="/static/images/logo.png" alt="logo" className='logo mb-1' />
                        </Col>

                        <Col xs="9">
                            <Row className='mb-3'>
                                <Col xs="10"></Col>
                                <Col xs="2" className={isUserLoggedIn ? '' : 'mt-5'}>
                                    <NavLink style={handleActiveLinkStatus} className='link-item mx-1' to="/">SignIn</NavLink>
                                    <NavLink style={handleActiveLinkStatus} className='link-item mx-1' to="/register">Register</NavLink>
                                </Col>
                            </Row>

                            {isUserLoggedIn && <Row>
                                <Col xs="10">
                                    <Navbar />
                                </Col>
                                <Col xs="2">
                                    <CartCount />
                                </Col>
                                <Cart />
                            </Row>}
                        </Col>
                    </Row>
                </Container>
            </header>
        );
    };
};

const mapStateToProps = (state) => ({
    isUserLoggedIn: state.isUserLoggedIn
});
export default connect(mapStateToProps)(Header);