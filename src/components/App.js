import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOfflineMsg:''
        }
    }
    componentDidMount(){
        window.addEventListener('offline', () => {
            let errMsg = 'It seems that you are offline. Please check your internet connection.'
            this.setState({ isOfflineMsg: errMsg });
            toastr.warning('',errMsg);           
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