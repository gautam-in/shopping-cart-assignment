import React from "react";
import { connect } from "react-redux";
import Button from '../../components/UI/Button/Button'
import CartCard from '../../components/UI/CartCard/CartCard'
import * as actions from "../../store/actions/index";

import classes from "./CartComponent.css";

const CartComponent = (props) => {
    const modCartList = {};
    const newCartList = [...props.cartList];
    newCartList.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    console.log(newCartList);
    let totalPrice = 0;
    newCartList && newCartList.length > 0 && newCartList.forEach(item => {
        if (modCartList[item.id]) {
            modCartList[item.id].push(item);
        } else {
            modCartList[item.id] = [item];
        }
        totalPrice += item.price;
    })
    console.log("count", modCartList);
    let cartContent = null;
    if (newCartList && newCartList.length === 0) {
        cartContent = <div>
            <div className={classes.CartContent}>
                <h3>No items in your cart</h3>
                <p>Your favourite items are just a click away</p>
            </div>
            <Button CustomBtn={classes.CustomBtnTabNoItem}
                clicked={() => props.onCartClick(false)}>Start Shopping</Button>
        </div>
    } else {
        cartContent = <div>
            <div className={[classes.CartContent, classes.CartCardContent].join(' ')}>
                {Object.keys(modCartList).length > 0 &&
                    Object.keys(modCartList).map(id => <CartCard data={modCartList[id][0]} count={modCartList[id].length} key={id} addToCartHandler={props.onAddToCart} />)
                }
                <div className={classes.LowestPriceWrap}>
                    <div className={classes.LowestPriceImgWrap}>
                        <img className={classes.LowestPriceImg} src={`../../../static/images/lowest-price.png`} alt="Lowest-price img" />
                    </div>
                    {"You won't find it cheaper anywhere"}
                </div>

            </div>
            <div className={classes.CartFooter}>
                <div className={classes.FooterInfo}>Promocode can be applied on payment page</div>
                <Button CustomBtn={classes.CustomBtnTab}
                    clicked={() => props.onCartClick(false)}>
                    <div className={classes.marLR}>Proceed to Checkout</div>
                    <div className={classes.marLR}>
                        <span >{`Rs. ${totalPrice}`}</span>
                        <span className={classes.marL}>{">"}</span>
                    </div>
                </Button>
            </div>

        </div >
    }

    return (
        <div className={classes.CartWrapper}>
            <div className={classes.CartHeader}>
                <h4>My Cart({newCartList.length} item)</h4>
                <div className={classes.CartHeaderImg}>
                    <img src="../../../static/images/close.svg" alt="Close img" onClick={() => props.onCartClick(false)} className={classes.CloseIcon} /></div>
            </div>
            {cartContent}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        cartList: state.product.addToCartProducts,
        cartFlag: state.product.cartFlag
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCartClick: () => dispatch(actions.cartHandler()),
        onAddToCart: (product, type) => dispatch(actions.addToCart(product, type)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
