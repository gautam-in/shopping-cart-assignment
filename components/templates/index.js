import React from 'react'
import Header from '../organism/Header/Header';
import {connect} from 'react-redux'
import {setUser,addToCart} from '../../redux/actions/main'


class PageLayout extends React.Component{
    
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        
        const {user,setUser} = this.props
        console.log("cart Data",user.cart)
        setUser(user) 
        addToCart(user.cart)
    }

    render(){
        
       const {children,userInfo} = this.props
        
        return ( 
            <>
                <Header userInfo={userInfo}/>
                {children}
            </>
        );
    }
}


const mapDispatchToProps = {setUser,addToCart} 
const mapStateToProps = (state)=>({ userInfo:state.user,cartInfo:state.cart })

export default  connect(mapStateToProps,mapDispatchToProps)(PageLayout)  