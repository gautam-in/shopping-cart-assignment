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
        window.addEventListener('offline', this.checkBroswerState);
        window.addEventListener('online', this.checkBroswerState);
    }
    componentWillUnmount(){
        window.removeEventListener('offline',this.checkBroswerState);
        window.removeEventListener('online',this.checkBroswerState);
    }
    checkBroswerState=()=>{
        if(navigator.onLine == true){
            this.online()
        } else if(navigator.onLine == false){
            this.offline();
        }
    }
    offline=() => {
        // let errMsg = Constants.TEXTS.DEFAULTS.offline_msg;
        // this.setState({ isOfflineMsg: true },()=>{
        toastr.warning('',Constants.TEXTS.DEFAULTS.offline_msg); 
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