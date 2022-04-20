import { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../images/logo.png';
import Navbar from './Navbar';
import CartCount from './cart/CartCount';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <Container>
                    <Row>
                        <Col xs="3">
                            <img src={logo} alt="logo" />
                        </Col>

                        <Col xs="9">
                            <Row className='mb-3'>
                                <Col xs="9"></Col>
                                <Col xs="3">
                                    <Link className='link-item mx-1' to="/">SignIn</Link>
                                    <Link className='link-item mx-1' to="/register">Register</Link>
                                </Col>
                            </Row>

                            {this.props.isUserLoggedIn && <Row>
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