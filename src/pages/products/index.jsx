import { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import CategoryFilter from './CategoryFilter';
import ProductsList from './ProductsList';
import Cart from '../../components/cart';
import UnAuthorizedPage from '../../components/UnAuthorizedPage';
import withLayout from '../../hocs/withLayout';
import { getProductsRequest } from '../../store/actions';

class Products extends Component {
    componentDidMount() {
        this.props.dispatch(getProductsRequest());
    };

    render() {
        const { isUserLoggedIn } = this.props;

        return (
            <>
                {isUserLoggedIn ? (
                    <Row>
                        <Col xs={2}>
                            <CategoryFilter />
                        </Col>
                        <Col xs={10}>
                            <ProductsList />
                        </Col>

                        <Cart />
                    </Row>
                ) : <UnAuthorizedPage />}
            </>
        );
    };
};

const mapStateToProps = (state) => ({
    isUserLoggedIn: state.isUserLoggedIn
});
export default connect(mapStateToProps)(withLayout(Products));