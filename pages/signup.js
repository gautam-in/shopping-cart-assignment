import React from 'react'
import Register from '../components/Register'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as actions from '../actions/userActions'

function mapStateToProps(state) {
    return state
  }
  
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
  }

class SignUpPage extends React.Component{
    render(){
        return (
            <Register {...this.props} />
        )
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpPage);