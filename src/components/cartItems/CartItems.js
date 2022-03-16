import React from "react";
import './cartItems.styles.scss';
import {PlusCircleFilled,MinusCircleFilled} from '@ant-design/icons';

const Cartitem = ({ cart_items, addItemsTOCart, removeitemsFromCart }) => {
    return (


        <div>{

            cart_items && cart_items.map((item) => {
                console.log("ir",item.price * item.quantity)
                return <div className="cart_item_holder flex">
                    <div className="cart_left_container flex">
                        <img src={item.imageURL} className="prod_img_inCart" />
                        <div className="name_price_cartholder">
                            <h3>{item.name}</h3>
                            <div className="price_holder">
                                <span onClick={() => removeitemsFromCart(item)} className="increDecr_symbol"> <MinusCircleFilled /></span>{item.quantity}<span onClick={() => addItemsTOCart(item)} className="increDecr_symbol"><PlusCircleFilled /></span><span className="multiply_symbol">&#88;</span> 
 Rs.{item.price}
                            </div>
                        </div>
                    </div>
                    <p className="final_price">Rs.{item.price * item.quantity}</p>
                </div>
            })

        }
        </div>
    )
}

export default Cartitem;