import React from 'react'
import Header from '../organism/Header/Header';
import {connect} from 'react-redux'
import {setUser} from '../../redux/actions/main'


class PageLayout extends React.Component{
    
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const {user,setUser} = this.props
        setUser(user) 
    }

    render(){
        
       const {children} = this.props
        
        return ( 
            <>
                <Header/>
                {children}
            </>
        );
    }
}


const mapDispatchToProps = {setUser} 
const mapStateToProps = state=>({ userInfo:state.user })

export default  connect(mapStateToProps,mapDispatchToProps)(PageLayout)  