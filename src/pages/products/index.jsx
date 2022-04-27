import { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import CategoryFilter from './CategoryFilter';
import ProductsList from './ProductsList';
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
            <Container>
                {isUserLoggedIn ? (
                    <Row>
                        <Col xs={2}>
                            <CategoryFilter />
                        </Col>
                        <Col xs={10}>
                            <ProductsList />
                        </Col>
                    </Row>
                ) : <UnAuthorizedPage />}
            </Container>
        );
    };
};

const mapStateToProps = (state) => ({
    isUserLoggedIn: state.isUserLoggedIn
});
export default connect(mapStateToProps)(withLayout(Products));