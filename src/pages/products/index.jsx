import {Component} from 'react';
import {connect} from 'react-redux';
import withLayout from '../../hocs/withLayout';

class Products extends Component {
    componentDidMount() {};

    render() {
        return (
            <>
                Products
            </>
        );
    };
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(withLayout(Products));