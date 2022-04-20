import {Component} from 'react';
import {connect} from 'react-redux';

class PageNotFound extends Component {
    componentDidMount() {};

    render() {
        return (
            <>
            PageNotFound
            </>
        );
    };
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(PageNotFound);