import React, { Component } from 'react';
import actions from '../actions/index';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
// import {location} from 'react-router';
import toastr from 'toastr';
// import NetworkDetector from '../hoc/NetworkDetector';
// import $ from 'jquery';
// import nicescroll from 'jquery.nicescroll';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOfflineMsg:''
        }
    }
    componentDidMount(){
        // document.addEventListener('touchstart wheel', function(){}, {passive: false})
        // $('body').niceScroll({
        //     // smoothscroll: true,
        //     cursorcolor: '#b1288d'
        // });
        window.addEventListener('offline', () => {
            let errMsg = 'It seems that you are offline. Please check your internet connection.'
            this.setState({ isOfflineMsg: errMsg });
            toastr.warning('',errMsg);
            // this.props.dispatch(push('/error')); //,query:{errorMsg: errMsg}
            // this.props.router.location.push({ //location
            //     action: 'PUSH',
            //     pathname: '/error',
            //     query: {
            //         errorMsg: errMsg
            //     }
            //   })
        });
        window.addEventListener('online', () => {
            this.setState({ isOfflineMsg: false });
            toastr.success('','You are back online');
            // window.location.reload();
            // window.history.back();
        });
    }
    render(){
        return (<div>
            {this.props.children}
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        signIn: state.signinReducer,
        signUp: state.signUpReducer,
    };
}
export default connect(mapStateToProps)(App);