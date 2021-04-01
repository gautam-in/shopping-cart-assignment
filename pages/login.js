import React from 'react'
import Login from '../components/Login'
import { connect } from 'react-redux'
import {mapDispatchToProps,mapStateToProps} from '../container/container'

class LoginPage extends React.Component{
    render(){
        return (
            <Login {...this.props} />
        )
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);