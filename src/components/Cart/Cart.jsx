import React, { useEffect, useRef } from "react";
import styles from "./Cart.module.scss";
import { createPortal } from "react-dom";
import Button from "@components/Button";

export function Modal(props) {
    const el = useRef(null);
    const modalRootEl = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        el.current = document.createElement("div");
        modalRootEl.current = document.createElement("div");
        document.body.appendChild(modalRootEl.current);
        modalRootEl.current.appendChild(el.current);

        return () => {
            modalRootEl.current.removeChild(el.current);
        };
    }, []);

    useEffect(() => {
        function keyListener(e) {
            const listener = keyListenersMap.get(e.keyCode);
            return listener && listener(e);
        }

        if (props.isOpen) {
            document.body.style.overflow="hidden";
            modalRef.current?.focus();
            document.addEventListener("keydown", keyListener);
        } else {
            document.body.style.overflow="auto";
        }

        return () => {
            document.removeEventListener("keydown", keyListener);
        }
    }, [props.isOpen]);

    const handleTabKey = (e) => {
        if (!props.isOpen) {
            return;
        }

        const pressingShift = e.shiftKey;
        const pressingTab = e.key === 'Tab' || e.keyCode === 9;
        const focusableModalElements = modalRef.current.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstElement = focusableModalElements[0];
        const lastElement = focusableModalElements[focusableModalElements.length - 1];

        if (pressingTab && !pressingShift && document.activeElement === lastElement) {
            firstElement.focus();
            return e.preventDefault();
        }

        if (pressingShift && pressingTab && document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
        }
    };

    const keyListenersMap = new Map([[27, props.onClose], [9, handleTabKey]]);

    return props.isOpen ? createPortal(
        <div className={styles.modal} role="dialog" aria-modal="true" ref={modalRef} tabIndex={-1}>
            <div className={styles.overlay} onClick={props.onClose}></div>
            <div className={styles.modalContent}>
                {props.children}
            </div>
        </div>,
        el.current,
    ) : null;
}

export function Cart(props) {
    const { onClose, items, totalPrice, totalItems, onAdd, onRemove } = props;

    return (
        <div className={styles.cartWrapper}>
            <div className={styles.cartHead}>
                <h1 className={styles.cartTitle} data-testid="cart-title">My Cart ({totalItems} items)</h1>
                <button className={styles.close} onClick={onClose} aria-label="Close Modal" data-testid="cart-close">✕</button>
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
                                                    <button className={styles.productCounterButton} aria-label="Remove Product"
                                                        onClick={() => onRemove(cartItem)} data-testid="product-remove">-</button>
                                                    <p className={styles.productPrice}>{cartItem.count}</p>
                                                    <button className={styles.productCounterButton} aria-label="Add Product"
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