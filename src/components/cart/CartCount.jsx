import { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import {toggleCartModalView} from '../../store/actions';

class CartCount extends Component {
    render() {
        const {cartItemsCount, dispatch} = this.props;

        return (
            <section id='cart-count' onClick={() => dispatch(toggleCartModalView())}>
                <Row>
                    <Col xs="4">
                        <img src="/static/images/cart.svg" alt="cart-icon" className='cart-icon' />
                    </Col>

                    <Col xs="8" className='mt-1'>
                        {cartItemsCount} items
                    </Col>
                </Row>
            </section>
        );
    };
};

const mapStateToProps = (state) => ({
    cartItemsCount: state.cart.reduce((acc, curr) => acc + curr.quantity, 0)
});
export default connect(mapStateToProps)(CartCount);