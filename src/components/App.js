import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import toastr from 'toastr';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOfflineMsg:''
        }
    }
    componentDidMount(){
        window.addEventListener('offline', this.offline);
        window.addEventListener('online', this.online);
    }
    componentWillUnmount(){
        window.removeEventListener('offline',this.offline);
        window.removeEventListener('online',this.online);
    }
    offline=() => {
        let errMsg = 'It seems that you are offline. Please check your internet connection.'
        this.setState({ isOfflineMsg: errMsg });
        toastr.warning('',errMsg);           
    }
    online=()=>{
        this.setState({ isOfflineMsg: false });
        toastr.success('','You are back online');
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
export default connect(mapStateToProps)(withRouter(App));