import { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from 'reactstrap';
import { createSelector } from 'reselect';
import { addItemToCartRequest } from '../../store/actions';
import { productsSelector, categoryFilterSelector } from '../../store/selectors';

class ProductsList extends Component {
    render() {
        return (
            <Row className="mt-4">
                {this.props.filteredProducts.map(product => {
                    return (
                        <Col xs={12} md={6} xl={3} key={product.id} className="product-item text-center">
                            <h6 className="product-name">{product.name}</h6>
                            <div className="product-item-mflex">
                                <img src={product.imageURL} alt={product.name} className="product-image" />
                                <p className="product-description">{product.description}</p>
                            </div>

                            <Row>
                                <Col className="m-hide">
                                    <p className="product-price mt-1">MRP Rs.{product.price}</p>
                                </Col>
                                <Col className="buy-product-m">
                                    <button type="button" className="buy-now-btn" onClick={() => this.props.dispatch(addItemToCartRequest(product.id))}>
                                        <span className="m-hide">Buy Now</span>
                                        <span className="m-show">Buy Now @ MRP Rs.{product.price}</span>
                                    </button>
                                </Col>
                            </Row>
                        </Col>
                    )
                })}
            </Row>
        );
    };
};

const mapStateToProps = createSelector(
    [productsSelector, categoryFilterSelector],
    (products, categoryFilter) => ({
        filteredProducts: categoryFilter ? products.filter(product => product.category === categoryFilter) : products
    })
);
export default connect(mapStateToProps)(ProductsList);