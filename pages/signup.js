import React from 'react'
import Register from '../components/templates/register/Register'
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
class SignUpPage extends React.Component{
    render(){
        return (
            <Register {...this.props} />
        )
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpPage);