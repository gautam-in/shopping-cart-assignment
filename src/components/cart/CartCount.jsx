import { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import cartIcon from '../../static/images/cart.svg'

class CartCount extends Component {
    render() {
        return (
            <section id='cart-count'>
                <Row>
                    <Col xs="4">
                        <img src={cartIcon} alt="cart-icon" className='cart-icon' />
                    </Col>

                    <Col xs="8" className='mt-1'>
                        {this.props.cartItemsCount} items
                    </Col>
                </Row>
            </section>
        );
    };
};

const mapStateToProps = (state) => ({
    cartItemsCount: state.cart.reduce((acc, curr) => acc + curr.count, 0)
});
export default connect(mapStateToProps)(CartCount);