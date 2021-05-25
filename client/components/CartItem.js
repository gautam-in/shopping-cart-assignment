import styles from '../styles/cartItem.module.scss';

const CartItem = ({ name, imageURL, price, id, quantity, inc, dec }) => {


    return (
        <div className={styles.cartItem}>
            <div className={styles.cartInfo}>
                <div className={styles.image}>
                    <img src={imageURL} alt={name} />
                </div>
                <div className={styles.info}>
                    <p>{name}</p>
                    <div className={styles.quantity}>
                        <p className={styles.incBtn} onClick={() => dec(id)}>-</p>
                        {quantity}
                        <p className={styles.decBtn} onClick={() => inc(id)}>+</p>
                        <p> {`x Rs.${price}`} </p>
                    </div>
                </div>
            </div>
            <div className={styles.total}>
                <p>Rs.{+quantity * +price}</p>
            </div>
        </div>
    )
}

export default CartItem
