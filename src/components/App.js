import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import toastr from 'toastr';
import Constants from '../constants';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isOfflineMsg:false
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
        let errMsg = Constants.TEXTS.DEFAULTS.offline_msg;
        // this.setState({ isOfflineMsg: true },()=>{
            toastr.warning('',errMsg); 
        // });          
    }
    online=()=>{
        // this.setState({ isOfflineMsg: false });
        toastr.success('',Constants.TEXTS.DEFAULTS.online_msg);
    }
    render(){
        return (<div>
            {this.props.children}
        </div>)
    }
}

export default withRouter(App);