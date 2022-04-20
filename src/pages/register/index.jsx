import {Component} from 'react';
import {connect} from 'react-redux';
import withLayout from '../../hocs/withLayout';

class Register extends Component {
    componentDidMount() {};

    render() {
        return (
            <>
            Register
            </>
        );
    };
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(withLayout(Register));