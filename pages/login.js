import React from 'react'
import Login from '../components/Login'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as actions from '../actions/userActions'

function mapStateToProps(state) {
    return state
  }
  
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
  }
class LoginPage extends React.Component{
    render(){
        return (
            <Login {...this.props} />
        )
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);