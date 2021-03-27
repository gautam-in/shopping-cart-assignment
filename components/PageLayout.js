import React from "react";
import Header from "./common/Header";
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as actions from '../actions/userActions'
import Cart from "./Cart";
import Footer from "./common/Footer";
// import '../styles/style.scss'

function mapStateToProps(state) {
    return state
  }
  
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
  }
class PageLayout extends React.Component {

    render(){
        const {children,currentLogedInUser,actions,isCartOpen,cartData} = this.props
    return(
        <div>
            <Header actions={actions} totalItemsInCart={cartData?.length} currentLogedInUser={currentLogedInUser} />
            <div className="content" >
            {children}
            </div>
            <Footer actions={actions} totalItemsInCart={cartData?.length} currentLogedInUser={currentLogedInUser} />
            {isCartOpen && <Cart cartData={cartData} actions={actions}  />}
        </div>
    )
    
}}

export default connect(mapStateToProps,mapDispatchToProps)(PageLayout);