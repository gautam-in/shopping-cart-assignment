import React from "react";

import classes from "./CartCard.css";

const CartCard = ({ data, count, addToCartHandler }) => {
    let path = `../..${data.imageURL}`;
    let price = `Rs.${data.price}`;
    let finalPrice = `Rs.${data.price * count}`;

    return (
        <div className={classes.CardWrapper}>
            <div className={classes.CardImgWrapper}>
                <img src={`${path}`} alt={data.name} className={classes.CardImg} />
            </div>
            <div className={classes.CardInfo}>
                <div className={classes.CardHeader}>{data.name}</div>
                <div className={classes.CardPriceInfo}>
                    <div className={classes.PriceWrapper}>
                        <div className={classes.MinusPlusWrap} onClick={() => addToCartHandler(data, "sub")}>
                            <img className={classes.MinusPlusImg} src={`../../static/images/minus.svg`} alt="Minus img" />
                        </div>
                        <div className={classes.AlignSpace}>
                            {count}
                        </div>
                        <div className={classes.MinusPlusWrap} onClick={() => addToCartHandler(data, "add")}>
                            <img className={classes.MinusPlusImg} src={`../../static/images/plus.svg`} alt="Plus img" />
                        </div>
                        <div className={classes.AlignSpace}>
                            {"X"}
                        </div>
                        <div>
                            {price}
                        </div>
                    </div>
                    <div className={classes.FinalPriceWrap}>{finalPrice}</div>
                </div>

            </div>
        </div>
    );
};
export default CartCard;
