import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux"
import { cartFooterText, cheapText, favItemText, noItemText, proceedToCheckoutText } from "../../constants";
import { addQuantity, removeCartItem, removeQuantity, toggleModal, toggleToast, updateQuantity } from "../../redux/actions";
import { displayCartItems } from "../../utils/Validation"
import Modal from "../custom/Modal";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Toast from "../custom/Toast";

const Cart = () => {
    const cartData = useSelector(state => state.TestReducer.cartData)
    const modalFlag = useSelector(state => state.TestReducer.modalFlag)
    const dispatch = useDispatch();
    const history = useHistory();
    const [show, setShow] = useState();
    const auth = useSelector(state => state.TestReducer.auth)

    const addHandler = (e, item) => {
        dispatch(addQuantity(item))
    }

    const removeHandler = (e, item) => {
        item.quantity > 1 ? dispatch(removeQuantity(item)) : dispatch(removeCartItem(item.id))
    }

    const handleCheckoutClick = () => {
        if (auth) {
            dispatch(toggleModal(false))
            setShow(true)
        } else {
            setShow(true)
            setTimeout(() => {
                history.push('/login')
                dispatch(toggleModal(false))
            }, 3000)
        }
    }

    const RenderCartList = () => {
        return <Fragment>{cartData.map(item => {
            return <div data-testid="cart-container" key={item.id} className="cart-detail-container">
                <img src={item.imageURL} alt={item.name}></img>
                <div className="cart-details-section">
                    <h4 style={{ marginTop: 0, marginBottom: 5 }}>{item.name}</h4>
                    <div className="cart-details-disp-flex">
                        <QuantityBar
                            item={item}
                            addHandler={addHandler}
                            removeHandler={removeHandler}
                        />
                        <p>Rs. {item.quantity * item.price}</p>
                    </div>
                </div>
            </div>
        })}
            <div className="cheap-image-container"><img src="/static/images/lowest-price.png" alt="lowest-price-text" />{cheapText}</div>
        </Fragment>
    }

    const FooterContent = () => {
        return cartData.length > 0 ? <Fragment><p className="align-center">{cartFooterText}</p>
            <button tabIndex={-1} onClick={handleCheckoutClick} className="each-category-button-style modal-footer-button-style">
                <div>{cartData.length ? proceedToCheckoutText : 'Start shopping'}</div>
                <div>{cartData.map((ele) => ele.price * ele.quantity).reduce((a, b) => a + b, 0).toFixed(2)}</div>
            </button>
        </Fragment> : <button onClick={() => dispatch(toggleModal(false))} className="each-category-button-style no-item-button" >Start Shopping</button>
    }

    return <>
        <Modal
            title={cartData.length > 0 ? `My Cart (${displayCartItems(cartData)} items)` : 'My Cart'}
            show={modalFlag}
            onClose={() => dispatch(toggleModal(false))}
            footerContent={<FooterContent />}
        >
            <>{cartData.length > 0 ?
                <RenderCartList /> :
                <div className="no-item-style">
                    <strong>{noItemText}</strong>
                    <p>{favItemText}</p>
                </div>}
            </>
        </Modal>
        {!auth ? <Toast
            show={show}
            position="top-left"
            description="User not Logged In, redirecting to login screen"
            title="Info"
            onClose={() => setShow(false)}
        /> : <Toast
            show={show}
            position="top-left"
            description="Checkout Successful"
            title="Success"
            onClose={() => setShow(false)}
        />}
    </>
}

const QuantityBar = ({ item, addHandler, removeHandler }) => {
    return <div className="quantity">
        <button data-testid="plus" className="each-category-button-style circle-button" id="plus" type="button" name="button" onClick={(e) => addHandler(e, item)}>
            +
        </button>
        <input
            data-testid="quantity-input"
            aria-label="quantity-input"
            type="number"
            name="name"
            value={item.quantity}
            disabled
        />
        <button data-testid="sub" className="circle-button each-category-button-style" id="sub" type="button" name="button" onClick={(e) => removeHandler(e, item)}>
            -
        </button>
        <p> x {item.price}</p>
    </div>
}



export default Cart;