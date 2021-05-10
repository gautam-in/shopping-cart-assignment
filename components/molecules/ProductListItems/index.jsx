import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
   Col,
   Button,
   Card,CardBody,CardImg,CardText,
} from 'reactstrap';
import style from './productListItems.module.scss';

import { addToCart, removeFromCart } from "../../../redux_store/cart/actions"
// Redux State Configutration
const mapStateToProps = state => ({
   addingToCart: state.cart.addingToCart,
   errorMessage: state.cart.errorMessage,
});

// Redux Dispatch Configutration
const mapDispatchToProps = {
   addToCart: addToCart,
   removeFromCart: removeFromCart,
};

class ProductListItems extends Component {
   
   render() {
      const { item, index } = this.props
      // console.log(item);
      return (
        <Col md={3}>
            <Card
            className={style.productCardBody}
            // className="mb-3 product-card"
            >
                <CardText className={style.productHeading}>{item && item.name}</CardText>
                <CardImg top width="100%" src={item && item.imageURL} alt="Card image cap" />
                <CardBody className={style.cardBody}>
                    <CardText className={style.productCard}>{item && item.description}</CardText>
                  <span className="align-middle">Rs : {item && item.price}</span>
                  <Button className="float-right" onClick={(e) => { this.props.addToCart(item.id) }}>Buy Now</Button>
                </CardBody>
            </Card>
        </Col>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItems);