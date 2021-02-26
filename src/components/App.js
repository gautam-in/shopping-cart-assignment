import React, { Component } from 'react';
import actions from '../actions/index';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
// import $ from 'jquery';
// import nicescroll from 'jquery.nicescroll';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount(){
        // document.addEventListener('touchstart wheel', function(){}, {passive: false})
        // $('body').niceScroll({
        //     // smoothscroll: true,
        //     cursorcolor: '#b1288d'
        // });
    }
    render(){
        return (<div>
            {this.props.children}
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        userAccount: {}
    };
}
export default connect(mapStateToProps)(App);