import {Component} from 'react';
import {connect} from 'react-redux';
import withLayout from '../../hocs/withLayout';

class Home extends Component {
    componentDidMount() {};

    render() {
        return (
            <>
                Home
            </>
        );
    };
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(withLayout(Home));