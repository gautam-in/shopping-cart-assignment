import { Component } from 'react';
import { connect } from 'react-redux';
import withLayout from '../../hocs/withLayout';

class Login extends Component {
    componentDidMount() { };

    render() {
        return (
            <>
                Login
            </>
        );
    };
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(withLayout(Login));