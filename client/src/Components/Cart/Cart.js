import React from 'react'
import { Button, Modal } from 'antd';
import { CartWrapper } from './Cart.style';
import { config } from '../../config';
import { useNavigate } from 'react-router-dom';
import {increaseProductQuantity, decreaseProductQuantity, orderComplete} from './CartAction';
import { useSelector, useDispatch } from 'react-redux';


const LowestPriceImage = `${config.base_url}/static/images/lowest-price.png`

const Cart = ({ openModal, closeCartModel}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart_product } = useSelector(state => state.CARTREDUCER);
    const { currentUser } = useSelector(state => state.SIGNUPREDUCER);

    const imageUrlFormatter = (url) => {
        return `${config.base_url}${url}`;
      }
    
    const calculateCartTotal = (cart_product) => {
        let total = 0;
        cart_product.map(product => {
            total += product.price * product.count;
        })
        return total;
    }

    const increaseQuantity = (product) => {
        dispatch(increaseProductQuantity(product));
    }

    const decreaseQuantity = (product) => {
        dispatch(decreaseProductQuantity(product));
    }

    const handleOrder = () => {
        if(currentUser){
            dispatch(orderComplete());
            navigate('/order');
        }
        else{
            navigate('/login');
        }
    }

    const renderFooter = () => {
        if(cart_product && cart_product.length > 0){
            return (
                <div className='footer_container'>
                    <div style={{ textAlign: "center", fontSize: "12px", padding: "5px"}}>Promo code can be applied on payment page</div>
                    <div className='checkout_button' onClick={handleOrder}>
                        <div>Proceed to Checkout</div>
                        <div>Rs {calculateCartTotal(cart_product)}</div>
                    </div>
                </div>
            )
        } else if(cart_product && cart_product.length === 0){
            return (
                <div className='footer_container'>
                    <div className='checkout_button' 
                        style={{ display: "block", textAlign:"center"}}
                        onClick={() => closeCartModel()}
                    >
                        Start Shopping
                    </div>
                </div>
            )
        }
    }
    
  return (
    <CartWrapper>
        <Modal
            title={`My Cart (${cart_product && cart_product.length} items)`}
            style={{
                width:"420px"
            }}
            visible={openModal}
            centered
            bodyStyle={{height: 480, backgroundColor: "#eaeaea", padding:"20px 0", overflow:"auto"}}
            onCancel={() => closeCartModel()}
            footer={[
                renderFooter()
            ]}
        >
        <>
        {cart_product && cart_product.length > 0 ? cart_product.map((product, index) => {
            return (
                <div className='cart_detail_container' key={product.id}>
                    <img  src={imageUrlFormatter(product.imageURL)} alt='image'/>
                    <div className='cart_detail'>
                        <h4><strong>{product.name}</strong></h4>
                        <div className='cart_calculation'>
                            <Button type="danger" shape="circle" onClick={()=>decreaseQuantity(product)}>-</Button>
                                <div>{product.count}</div>
                            <Button type="danger" shape="circle" onClick={()=>increaseQuantity(product)}>+</Button>
                            <div>x &nbsp; {product.price}</div>
                        </div>
                    </div>
                <div className='cart_price'>Rs {product.price * product.count}</div>
            </div>
            )
        })
            : <div className='no_cart_item'>
               <h3><strong> No items in your cart</strong></h3>
               <div>Your favourite items are just a click away</div>
            </div>
        }
        <div className='lowest_price'>
            <img src={LowestPriceImage} alt="lowest_price_guaranteed"/>
            <div>You wont find it cheaper anywhere</div>
        </div>
        </>
      </Modal>
    </CartWrapper>
  )
}

export default Cart
