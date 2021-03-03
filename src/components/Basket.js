import React from "react";
import {connect} from 'react-redux';
import {resetCartData} from '../actions/productActions';
import Cart from '../presentations/Cart';
import toastr from 'toastr';
import Header from '../presentations/Header';
import Constants from '../constants';
class Basket extends React.Component{
    constructor(props){
        super(props);
        this.state={}
        this.checkoutComplete = this.checkoutComplete.bind(this);
    }
    checkoutComplete = () => {
        if(this.props.productInfo.cartItems && this.props.productInfo.cartItems.length){
            toastr.success(Constants.TEXTS.TOASTS.cart_emptied,Constants.TEXTS.TOASTS.order_placed,{timeOut:1000});
        }
        this.props.resetCartData();
        this.props.router.push('/');
    }
    showCartView=()=>{
       
    }
    render(){
    const {props} = this;
    return(<div className="basket-page">
        <Header router={props.router} cartClick={this.showCartView} cartInfo={props.productInfo.cartItems} />
        <Cart hideHeader={true} cartData={props.productInfo.cartItems} checkoutComplete={this.checkoutComplete} />
        </div>)
    }
}
function mapStateToProps(state){
    return{
        productInfo: state.productReducer
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        resetCartData: ()=>{dispatch(resetCartData())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Basket);