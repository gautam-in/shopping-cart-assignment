import React from 'react'
import Register from '../components/Register'
import { connect } from 'react-redux'
import {mapDispatchToProps,mapStateToProps} from '../container/container'

class SignUpPage extends React.Component{
    render(){
        return (
            <Register {...this.props} />
        )
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpPage);