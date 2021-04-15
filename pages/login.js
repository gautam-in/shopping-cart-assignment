import React from 'react'
import Login from '../components/templates/login/Login'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../reducer/actions'

export function mapStateToProps(state) {
    return {
      userReducer:state.userReducer
    }
  }
  
export function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(ActionCreators, dispatch)}
  }

class LoginPage extends React.Component{
    render(){
        return (
            <Login {...this.props} />
        )
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);