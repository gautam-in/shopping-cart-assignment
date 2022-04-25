import {Component} from 'react';
import {connect} from 'react-redux';
import UnAuthorizedPage from '../../components/UnAuthorizedPage';
import withLayout from '../../hocs/withLayout';

class Products extends Component {
    componentDidMount() {};

    render() {
        const { isUserLoggedIn } = this.props;

        return (
            <>
                {isUserLoggedIn ? (
                    <>
                        Products
                    </>
                ) : <UnAuthorizedPage />}
            </>
        );
    };
};

const mapStateToProps = (state) => ({
    isUserLoggedIn: state.isUserLoggedIn
});
export default connect(mapStateToProps)(withLayout(Products));