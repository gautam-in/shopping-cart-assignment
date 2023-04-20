import React, { useEffect } from "react";
import styles from "./Cart.module.scss";
import { createPortal } from "react-dom";
import Button from "@components/Button";


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement("div");
        this.modalRootEl = document.createElement("div");
        document.body.appendChild(this.modalRootEl);
    }

    componentDidUpdate() {
        if (this.props.isOpen) {
            document.body.style.overflow="hidden";
        } else {
            document.body.style.overflow="auto";
        }
    }

    componentDidMount() {
        this.modalRootEl.appendChild(this.el);
    }

    componentWillUnmount() {
        this.modalRootEl.removeChild(this.el);
    }

    render() {
        return this.props.isOpen ? createPortal(
            <div className={styles.modal}>
                <div className={styles.overlay} onClick={this.props.onClose}></div>
                <div className={styles.modalContent}>
                    {this.props.children}
                </div>
            </div>,
            this.el,
        ) : null;
    }
}

export function Cart(props) {
    const { onClose, items, totalPrice, totalItems, onAdd, onRemove } = props;

    return (
        <div className={styles.cartWrapper}>
            <div className={styles.cartHead}>
                <h1 className={styles.cartTitle} data-testid="cart-title">My Cart ({totalItems} items)</h1>
                <button className={styles.close} onClick={onClose} data-testid="cart-close">✕</button>
            </div>
            {
                !items.length ? <>
                    <div className={styles.cartBody} data-testid="cart-empty">
                        <section className={styles.emptyCart}>
                            <div className={styles.emptyCartMessage}>
                                <h2 className={styles.emptyCartTitle} data-testid="cart-empty-title">No items in your cart</h2>
                                <p className={styles.emptyCartDescription}>Your favourite items are just a click away</p>
                            </div>
                            <div className={styles.startShopping}>
                                <Button className={styles.startShoppingButton}>Start Shopping</Button>
                            </div>
                        </section>
                    </div>
                </> : null
            }
            {
                items.length ? <>
                    <div className={styles.cartBody}>
                        <div className={styles.cartItems}>
                            {
                                items.map((cartItem) => (
                                    <div className={styles.cartItem} key={cartItem.id} data-testid="cart-item">
                                        <img src={cartItem.imageURL} className={styles.productImage} alt={cartItem.name} />
                                        <div className={styles.productWrapper}>
                                            <h2 className={styles.productsName} data-testid="product-name">{cartItem.name}</h2>
                                            <div className={styles.productCounterWrapper}>
                                                <div className={styles.productCounter}>
                                                    <button className={styles.productCounterButton}
                                                        onClick={() => onRemove(cartItem)} data-testid="product-remove">-</button>
                                                    <p className={styles.productPrice}>{cartItem.count}</p>
                                                    <button className={styles.productCounterButton}
                                                        onClick={() => onAdd(cartItem)} data-testid="product-add"
                                                        disabled={cartItem.count === cartItem.stock}
                                                    >+</button>
                                                    <p className={styles.multiply}>✕</p>
                                                    <p className={styles.productPrice}>{cartItem.price}</p>
                                                </div>
                                                <p className={styles.totalPrice}>Rs.{cartItem.price * cartItem.count}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className={styles.cartDiscount}>
                                <img src="/static/images/lowest-price.png" className={styles.discountImage} alt="Discounted Image" />
                                <p className={styles.discountText}>You won't find it cheaper anywhere</p>
                            </div>
                        </div>
                        <div className={styles.checkoutWrapper}>
                            <p className={styles.text}>Promo code can be applied on payment page</p>
                            <Button className={styles.checkoutButton}>
                                <span>Proceed to Checkout</span>
                                <span>Rs.{totalPrice} ❯</span>
                            </Button>
                        </div>
                    </div>
                </> : null
            }
        </div>
    );
}

export function CartModal(props) {

    const { isOpen, onClose, items, totalPrice, totalItems, onAdd, onRemove } = props;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={styles.cartModal}>
                <Cart
                    items={items}
                    onClose={onClose}
                    totalItems={totalItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    totalPrice={totalPrice}
                />
            </div>
        </Modal>
    );
}