import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch , useSelector } from "react-redux";
import { handleDisplayCartModal } from "../../actions/cart";
import { getTotalPriceAndQuantityOfCartItems } from "../../utils/cart.util";
import CustomButton from '../customButton/CustomButton';
import { removeItemFromCart , addItemToCart } from "../../actions/cart";
import "./cartModal.style.css";

const CartModal = () => {
const { shouldDisplayCartModal = false , cartItems=[] } = useSelector(state=>state.cart)
const dispatch = useDispatch();
const { totalQuantity = 0 , totalPrice =0 } = getTotalPriceAndQuantityOfCartItems(cartItems)
const { products: filteredProducts = [] } = useSelector(state=>state.products)



  return (
    <Modal show={shouldDisplayCartModal} onHide={()=>{
        dispatch(
            handleDisplayCartModal()
          )
    }}>
        <Modal.Header closeButton>
          <Modal.Title>My Cart {`(${totalQuantity} ${totalQuantity>1?'items':'item'})`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
            totalQuantity === 0 ?
            <div className='cart-items'>
            <strong>No items in your cart</strong>
            <p>Your favourite items are just a click away</p>
            </div>:<>
            {
                cartItems.map((cartItem)=>{
                const {name,price,quantity ,id } = cartItem
                const productItem = filteredProducts.find(product=>product.id===id)  
                const selectedCategory = productItem?.imageURL.split('/')[4] 
                const imageUrl = productItem?.imageURL.split('/')[5];
                const imgPath = `../../assets/products/${selectedCategory}/${imageUrl}`;
                

                    return <div className='cart-item' key={id}>
                        <img src={imgPath} alt={name} className='cartItem_image' />
                        <div className='cart-item__name-details'>
                          <p>{name}</p>
                          <div className='cart-item__quantity--price'>
        <button className="arrow" onClick={() => dispatch(removeItemFromCart(cartItem))}>
          -
        </button>
        <span className="value">{quantity}</span>
        <button className="arrow" onClick={() => dispatch(addItemToCart(cartItem))}>
           +       
        </button>
        <p> X Rs {price} </p>

                          </div>
   
                        </div>

                    </div>
                })
            }
            <section className='lowest_price'>
            <img src={`../../assets/lowest-price.png`} alt={'Lowest price'} />
            <strong className='cheap-price-text'>
              You would not find cheaper anywhere
            </strong>

            </section>
            <section className='total_price'>
              <p>
                Total
              </p>
              <strong>
              Rs {totalPrice}
              </strong> 
            </section>
            </>
        }
        </Modal.Body>
        <Modal.Footer>
            
          <CustomButton handleClick={()=>{
            dispatch(
                handleDisplayCartModal()
              )
          }}>
            Proceed to checkout
          </CustomButton>
        </Modal.Footer>
      </Modal>
  )
}

export default CartModal