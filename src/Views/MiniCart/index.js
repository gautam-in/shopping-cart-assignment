import '../../CSS/cart.css';
import '../../CSS/tablet.css';
import '../../CSS/mobile.css';
import React, { useEffect, useRef, useState } from 'react'
import { storeCartDataLocally } from '../../Utility/StoreLocally'
import { useNavigate } from 'react-router-dom'
import { retreiveLocalCartData } from '../../Utility/RetrieveLocalData'


const CartView = ({closeBtn, updateCartPage}) => {
    const [cartItems, setCartItems] = useState([])
    const [sum,setSum] = useState(0)
    const navigate = useNavigate()
    const timer = useRef()



    useEffect(() => {
        retrieveCartData()
        timer.current = setTimeout(() => {
            window.addEventListener('click', closeModal);
        },1000)
       
          return () => {
            clearTimeout(timer.current)
            window.removeEventListener('click', closeModal)
          }
          // eslint-disable-next-line
    },[])



    useEffect(() => {
        storeCartDataLocally(cartItems)
        let totalProductSum = 0
        cartItems.forEach(a => { totalProductSum += (a.price * a.amt)})
        setSum(totalProductSum)
        updateCartPage()
        // eslint-disable-next-line
    },[cartItems])



    const retrieveCartData = () => {
        let cartItems = retreiveLocalCartData()
        !!cartItems && !!cartItems.length && setCartItems(cartItems)
    }
   

    const increaseAmt = (id) => {
        let items = [...cartItems]
        items.forEach(item => {
            if(item.id === id){
                item.amt = item.amt + 1;
            }
        })
        setCartItems(items)
    }



    const decreaseAmt = (id) => {
        let items = [...cartItems]
        items.forEach( item => {
            if(item.id === id){
                if(item.amt === 1){
                    item.amt = 0;
                    alert(`Removing ${item.name} from cart`)
                }
                else
                    item.amt = item.amt - 1;
            }
        })
        items = items.filter((a) => a.amt !==0 )
        setCartItems(items)
    }



    const checkout = () => {
        alert("You have checked out the items from the cart.")
        localStorage.removeItem("cartData")
        navigate('/')
    }


    
    const closeModal = (e) => {
        let cart = document.getElementById('cart');
            if (!!cart && !cart.contains(e.target)){
                 closeCart()
        }
    }
    


    const closeCart = () => {closeBtn()}

    return (
        <React.Fragment>
            <div className='modal-div pointer'>
                    <div id='cart' className='cart-placeholder'>
                        <div className='flex-r md-12 heading align-center'>
                                {cartItems.length > 0 ? 
                                <h3 className='md-4 offset-md-2'>My Cart {cartItems.length} items</h3>
                                    :
                                <h3 className='md-4 offset-md-2'>My Cart</h3>}
                                <button onClick={closeCart} className='pointer close-cart-btn md-2 offset-md-4'>X</button>
                        </div>
                        
                        <div className='listing md-12'>
                            {
                                cartItems.length > 0 ?
                                    <ul>
                                        {!!cartItems && cartItems.length > 0 && cartItems.map((item) => {
                                            return(
                                                <li className='flex-r md-12' key={item.id}>
                                                    <img src={item.imageURL} alt={item.description} className='pro-img md-2'/>
                                                    <div className='flex-c align-center offset-md-2 md-4'>
                                                        <p className='mobile-font semi-bold no-wrap'>
                                                            {item.name.length > 50 ? item.name.substring(0,25).concat(" ...") : item.name}
                                                        </p>
                                                        <div className='flex-r md-12 action-center justify-spc-between'>
                                                            <button onClick={() => {decreaseAmt(item.id)}} className='minus-btn pointer'>-</button>
                                                            <p className='amount-section'> {item.amt} </p>
                                                            <button onClick={() => {increaseAmt(item.id)}} className='add-btn pointer'>+</button>
                                                            <p className='price semi-bold'>X {item.price}</p>
                                                        </div>
                                                    </div>
                                                    <div className='per-price-amt offset-md-2 md-3 bold'>
                                                            {item.price * item.amt}
                                                    </div>
                                            </li>
                                            )
                                        })}
                                    </ul>

                                    :
                                    
                                    <div className='blank-cart'>
                                        <p className='bold'> No items in your cart</p>
                                        <p>Your favourite items are just a click away</p>
                                    </div>
                            }
                        </div>

                        <div className='checkout-section flex-c align-center justify-start'>
                            {
                                !!cartItems.length ? 
                                <React.Fragment>
                                    <p>Promo code can be applied on payment page.</p>
                                    <div onClick={checkout} className='pointer flex-r justify-spc-around align-center checkout-block'>
                                        <p>Proceed to checkout </p>
                                        <p> Rs {sum}</p>
                                    </div>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <div onClick={() => {closeBtn()}} className='pointer flex-r justify-spc-around align-center checkout-block'>
                                        <p>Start Shopping</p>
                                    </div>
                                </React.Fragment>
                            }
                                
                        </div>

                    </div>
            </div>
        </React.Fragment>
           
    )
}

export default CartView