import { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from 'reactstrap';
import { addItemToCartRequest } from '../../store/actions';

class ProductsList extends Component {
    getProductsByFilter = () => {
        const { products, categoryFilter } = this.props;
        return categoryFilter ? products.filter(product => product.category === categoryFilter) : products;
    };

    render() {
        return (
            <Row className="mt-4">
                {this.getProductsByFilter().map(product => {
                    return (
                        <Col xs={12} md={3} key={product.id} className="product-item text-center">
                            <h6 className="product-name">{product.name}</h6>
                            <img src={product.imageURL} alt="product-image" className="product-image" />
                            <p className="product-description">{product.description}</p>

                            <Row>
                                <Col>
                                    <p className="mt-1">MRP Rs.{product.price}</p>
                                </Col>
                                <Col>
                                    <button type="button" className="buy-now-btn" onClick={() => this.props.dispatch(addItemToCartRequest(product.id))}>Buy Now</button>
                                </Col>
                            </Row>
                        </Col>
                    )
                })}
            </Row>
        );
    };
};

const mapStateToProps = ({ products, categoryFilter }) => ({
    products,
    categoryFilter
});
export default connect(mapStateToProps)(ProductsList);