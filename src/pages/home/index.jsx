import { Component } from 'react';
import { connect } from 'react-redux';
import withLayout from '../../hocs/withLayout';
import UnAuthorizedPage from '../../components/UnAuthorizedPage';

class Home extends Component {
    componentDidMount() { };

    render() {
        const { isUserLoggedIn } = this.props;

        return (
            <>
                {isUserLoggedIn ? (
                    <>
                        Home
                    </>
                ) : <UnAuthorizedPage />}
            </>
        );
    };
};

const mapStateToProps = (state) => ({
    isUserLoggedIn: state.isUserLoggedIn
});
export default connect(mapStateToProps)(withLayout(Home));