import { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import Banner from './Banner';
import Categories from './Categories';
import withLayout from '../../hocs/withLayout';
import UnAuthorizedPage from '../../components/UnAuthorizedPage';
import { getBannersAndCategoriesRequest } from '../../store/actions';

class Home extends Component {
    componentDidMount() {
        this.props.dispatch(getBannersAndCategoriesRequest());
    };

    render() {
        return (
            <Container>
                {this.props.isUserLoggedIn ? (
                    <>
                        <Banner />
                        <hr />
                        <Categories />
                    </>
                ) : <UnAuthorizedPage />}
            </Container>
        );
    };
};

const mapStateToProps = (state) => ({
    isUserLoggedIn: state.isUserLoggedIn
});
export default connect(mapStateToProps)(withLayout(Home));