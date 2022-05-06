import { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import {createSelector} from 'reselect';
import CategoryFilter from './CategoryFilter';
import ProductsList from './ProductsList';
import UnAuthorizedPage from '../../components/UnAuthorizedPage';
import withLayout from '../../hocs/withLayout';
import { getProductsRequest } from '../../store/actions';
import {userLoginStatusSelector} from '../../store/selectors';

class Products extends Component {
    componentDidMount() {
        this.props.dispatch(getProductsRequest());
    };

    render() {
        return (
            <Container>
                {this.props.isUserLoggedIn ? (
                    <Row>
                        <Col xs={2} className="m-hide">
                            <CategoryFilter />
                        </Col>
                        <Col xs={12} md={10}>
                            <ProductsList />
                        </Col>
                    </Row>
                ) : <UnAuthorizedPage />}
            </Container>
        );
    };
};

const mapStateToProps = createSelector(
    [userLoginStatusSelector],
    (isUserLoggedIn) => ({
        isUserLoggedIn
    })
);
export default connect(mapStateToProps)(withLayout(Products));