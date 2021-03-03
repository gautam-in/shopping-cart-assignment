import React from 'react';
import {connect} from 'react-redux';
import LazyLoad from 'react-lazyload';
import {resetCartData} from '../actions/productActions';
class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            itemList: [],
            totalCartValue:0
        }
        // this.increaseQty = this.increaseQty.bind(this);
        // this.decreaseQty = this.decreaseQty.bind(this);
        // this.evaluateTotalPrice = this.evaluateTotalPrice.bind(this);
    }
    componentDidMount(){
        if(this.props.cartData){
            this.setState({itemList:this.props.cartData},()=>{
                this.evaluateTotalPrice();
            });
        }
    }
    increaseQty=(e,itm,i)=>{
        let tempObj = Object.assign({},this.state);
        itm.qty = itm.qty + 1;
        tempObj.itemList[i].qty = itm.qty;
        this.setState(tempObj,()=>{
            this.evaluateTotalPrice();
        });
    }
    decreaseQty=(e,itm,i)=>{
        let tempObj = Object.assign({},this.state);
        itm.qty = itm.qty - 1;
        if(itm.qty == 0){
            tempObj.itemList.splice(i,1);
        }
        if(!tempObj.itemList.length){
            this.props.resetCartData();
        }
        this.setState(tempObj,()=>{
            this.evaluateTotalPrice();
        });
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
        const {itemList,totalCartValue} = this.state;
        const {hideHeader,closeModal,checkoutComplete} = this.props;
        return(<main id="cart" role="dialog" tabIndex="10" aria-labelledby="dialog-title" className="cart-page">
            {!hideHeader ? (<section className="cart-header modal-horizontal-space">
                <h2 id="dialogue-title">My cart {itemList.length ? " ("+(itemList.length)+" items)" : " "}</h2>
                <div className="close-icon" aria-label="close dialog" onClick={closeModal}>
                &times;
                </div>
            </section>) : null }
            
            <section className="row">
                {itemList.length ? (<div>
                    <div className="modal-content-area">
                        <div className="itemlist-area">
                        <ul className="cart-items">
                        {itemList.map((item,i)=>(<li key={i} className="cart-item modal-horizontal-space">
                        <div className="cart-item-img">
                        <LazyLoad height={10} once>
                            <img src={window.location.origin + item.imageURL} alt="Lowest Price Guarenteed"></img>
                        </LazyLoad>
                        </div>
                        <div className="cart-item-info">
                            <p aria-label={item.name}>{item.name}</p>
                            <div className="qty-process">
                                <span className="process-btn minus" aria-label={"decreased item quantity to"+item.qty} onClick={(event)=>this.decreaseQty(event,item,i)}>
                                </span>
                                <p>{item.qty}</p>
                                <span className="process-btn plus" aria-label={'increased item quantity to'+item.qty} onClick={(event)=>this.increaseQty(event,item,i)}>
                                </span>
                                <span className="price-area">X <p aria-label={'Rs.'+item.price} title={item.price}>{item.price}</p></span>
                            </div>
                        </div>
                        <div className="cart-item-totalprice">
                            <p aria-label={item.finalPrice}>{item.finalPrice = item.qty * item.price}</p>
                        </div>
                        </li>))}
                        </ul>
                        </div>
                        <div className="site-promoto">
                            <div className="promo-img">
                                <LazyLoad height={25} once>
                                    <img src={window.location.origin + '/static/images/lowest-price.png'} alt="Lowest Price Guaranteed"></img>
                                </LazyLoad>
                            </div>
                            <div className="promo-text">
                                <p>You won't find it cheaper anywhere</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-area">
                    <div><p>Promo code can be applied on payment page</p></div>
                    <div aria-label={` ${'Proceed to checkout with '+totalCartValue+' rupees.'} `} onClick={checkoutComplete} className="footer-btn modal-horizontal-space">
                        <div className="checkouttxt">Proceed to checkout</div>
                        <div className="price-info">Rs.{totalCartValue} 
                            <span className="arrow right">
                            </span>
                        </div>
                    </div>
                    </div>
                </div>) : (<div>
                    <div className="modal-horizontal-space no-cart-items">
                        <div>
                        <h2>No items in your cart</h2><br /> <p>Your favorite items are just a click away.</p>
                        </div>
                    </div>
                    <div className="modal-horizontal-space footer-shop-btn">
                        
                        <button aria-label="Start shopping" onClick={!hideHeader ? closeModal : checkoutComplete} className="btn full-width-btn">Start Shopping</button>
                    </div>
                    </div>)}
            </section>
        </main>)
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
export default connect(mapStateToProps,mapDispatchToProps)(Cart);