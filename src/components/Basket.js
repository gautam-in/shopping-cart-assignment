import React from "react";
import {connect} from 'react-redux';
import {resetCartData} from '../actions/productActions';
import Cart from '../presentations/Cart';
import toastr from 'toastr';
import Header from '../presentations/Header';
class Basket extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.checkoutComplete = this.checkoutComplete.bind(this);
    }
    checkoutComplete = () => {
        if(this.props.productInfo.cartItems && this.props.productInfo.cartItems.length){
            toastr.success('Cart is emptied', 'Congratulations, Order Placed',{timeOut:1000});
        }
        this.props.dispatch(resetCartData());
        this.props.router.push('/');
    }
    showCartView=()=>{
       
    }
    render(){
    return(<div className="basket-page">
        <Header router={this.props.router} cartClick={this.showCartView} cartInfo={this.props.productInfo.cartItems} />
        <Cart hideHeader={true} cartData={this.props.productInfo.cartItems} checkoutComplete={this.checkoutComplete} />
        </div>)
    }
}
function mapStateToProps(state){
    return{
        productInfo: state.productReducer
    }
}
export default connect(mapStateToProps)(Basket);