import React from "react";
import Header from "../Header/Header";
import { connect } from 'react-redux'
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../../reducer/actions'
import styles from './layout.module.scss'

export function mapStateToProps(state) {
    return {
      userReducer:state.userReducer,
      cartReducer:state.cartReducer
    }
  }
  
export function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(ActionCreators, dispatch)}
  }

class PageLayout extends React.Component {
    render(){
        const {children,cartReducer,actions,userReducer} = this.props
    return(
        <div>
            <Header actions={actions} totalItemsInCart={cartReducer?.cartData?.length} currentLogedInUser={userReducer?.currentLogedInUser} />
            <main className={styles.content} >
            {children}
            </main>
            <Footer actions={actions} totalItemsInCart={cartReducer?.cartData?.length} currentLogedInUser={userReducer?.currentLogedInUser} />
            {cartReducer?.isCartOpen && <Cart cartData={cartReducer?.cartData} actions={actions}  />}
        </div>
    )
    
}}

export default connect(mapStateToProps,mapDispatchToProps)(PageLayout);