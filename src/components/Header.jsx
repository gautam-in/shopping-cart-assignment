import { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../static/images/logo.png';
import Navbar from './Navbar';
import CartCount from './cart/CartCount';
import { handleActiveLinkStatus } from '../utils';

class Header extends Component {
    render() {
        const {isUserLoggedIn} = this.props;

        return (
            <header>
                <Container>
                    <Row>
                        <Col xs="3">
                            <img src={logo} alt="logo" className='mb-1' />
                        </Col>

                        <Col xs="9">
                            <Row className='mb-3'>
                                <Col xs="9"></Col>
                                <Col xs="3" className={isUserLoggedIn ? '' : 'mt-5'}>
                                    <NavLink style={handleActiveLinkStatus} className='link-item mx-1' to="/">SignIn</NavLink>
                                    <NavLink style={handleActiveLinkStatus} className='link-item mx-1' to="/register">Register</NavLink>
                                </Col>
                            </Row>

                            {isUserLoggedIn && <Row>
                                <Col xs="9">
                                    <Navbar />
                                </Col>
                                <Col xs="3">
                                    <CartCount />
                                </Col>
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