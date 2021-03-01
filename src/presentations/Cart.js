import React from 'react';
import {connect} from 'react-redux';
import LazyLoad from 'react-lazyload';
import {resetCartData} from '../actions/productActions';
class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            itemList: [],
            cartEmptyMesg: '<h2>No items in your cart</h2><br /> <p>Your favorite items are just a click away.</p>',
            totalCartValue:0
        }
        this.increaseQty = this.increaseQty.bind(this);
        this.decreaseQty = this.decreaseQty.bind(this);
        this.evaluateTotalPrice = this.evaluateTotalPrice.bind(this);
    }
    componentDidMount(){
        if(this.props.cartData){
            this.setState({itemList:this.props.cartData});
            setTimeout(()=>this.evaluateTotalPrice());
        }
    }
    increaseQty=(e,itm,i)=>{
        let tempObj = Object.assign({},this.state);
        itm.qty = itm.qty + 1;
        var itemIdx = tempObj.itemList.indexOf(itm);
        tempObj.itemList[i].qty = itm.qty;
        this.setState(tempObj);
        setTimeout(()=>this.evaluateTotalPrice());
    }
    decreaseQty=(e,itm,i)=>{
        let tempObj = Object.assign({},this.state);
        itm.qty = itm.qty - 1;
        if(itm.qty == 0){
            // var itemIdx = tempObj.itemList.indexOf(itm);
            tempObj.itemList.splice(i,1);
        }
        if(!tempObj.itemList.length){
            this.props.dispatch(resetCartData());
        }
        this.setState(tempObj);
        setTimeout(()=>this.evaluateTotalPrice());
    }
    evaluateTotalPrice=()=>{
        let itmLst = this.state.itemList;
        let totalValue = 0;
        for(let i=0;i<itmLst.length;i++){
            totalValue += itmLst[i].finalPrice;
        }
        this.setState({totalCartValue: totalValue});
    }
    render(){
        return(<div className="cart-page">
            {!this.props.hideHeader ? (<div className="cart-header modal-horizontal-space">
                <h2>My cart {this.state.itemList.length ? " ("+(this.state.itemList.length)+" items)" : " "}</h2>
                <div className="close-icon" onClick={this.props.closeModal}>
                &times;
                </div>
            </div>) : null }
            
            <div className="row">
                {this.state.itemList.length ? (<div>
                    <div className="modal-content-area">
                        <div className="itemlist-area">
                        <ul className="cart-items">
                        {this.state.itemList.map((item,i)=>(<li key={i} className="cart-item modal-horizontal-space">
                        <div className="cart-item-img">
                        <LazyLoad height={10} once>
                            <img src={window.location.origin + item.imageURL} alt="Lowest Price Guarenteed"></img>
                        </LazyLoad>
                        </div>
                        <div className="cart-item-info">
                            <p>{item.name}</p>
                            <div className="qty-process">
                                <span class="process-btn minus" onClick={(event)=>this.decreaseQty(event,item,i)}>
                                    {/* <p aria-label="increse item quantity">+</p> */}
                                </span>
                                <p>{item.qty}</p>
                                <span class="process-btn plus" onClick={(event)=>this.increaseQty(event,item,i)}>
                                    {/* <p aria-label="decrease item quantity">-</p> */}
                                </span>
                                <span>X {item.price}</span>
                            </div>
                        </div>
                        <div className="cart-item-totalprice">
                            <p>{item.finalPrice = item.qty * item.price}</p>
                        </div>
                        </li>))}
                        </ul>
                        </div>
                        <div className="site-promoto">
                            <div className="promo-img">
                                <LazyLoad height={25} once>
                                    <img src={window.location.origin + '/static/images/lowest-price.png'} alt="Lowest Price Guarenteed"></img>
                                </LazyLoad>
                            </div>
                            <div className="promo-text">
                                <p>You won't find it cheaper anywhere</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-area">
                    <div><p>Promo code can be applied on payment page</p></div>
                    <div onClick={this.props.checkoutComplete} className="footer-btn modal-horizontal-space">
                        <div className="checkouttxt">Proceed to checkout</div>
                        <div className="price-info">Rs.{this.state.totalCartValue} <span><i className="ion-ios-arrow-forward"></i></span></div>
                    </div>
                    </div>
                </div>) : (<div>
                    <div className="modal-horizontal-space no-cart-items">
                        <div dangerouslySetInnerHTML={{__html:this.state.cartEmptyMesg}}></div>
                    </div>
                    <div className="modal-horizontal-space footer-shop-btn">
                        
                        <button aria-label="Start shopping" onClick={!this.props.hideHeader ? this.props.closeModal : this.props.checkoutComplete} className="btn full-width-btn">Start Shopping</button>
                    </div>
                    </div>)}
            </div>
        </div>)
    }
}
function mapStateToProps(state){
    return{
        productInfo: state.productReducer
    }
}
export default connect(mapStateToProps)(Cart);