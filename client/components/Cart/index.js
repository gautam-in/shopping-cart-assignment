import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LowestPrice from '../../public/images/lowest-price.png'
import classes from './cart.module.scss';

const Cart = (props) => {
    const { products, onAdd, onDelete, hideCart, totalCount, totalCost } = props

    const renderCartContent = () => {
        if (totalCount < 1) {
            return (
                <div className={classes.noItems}>
                    <span >
                        <p className={classes.bold}>No items in your cart</p>
                        <p>Your Favourite items are just a click away</p>
                    </span>
                    <footer className={classes.footer}>
                        <Link href={'/'}>
                            <button className={classes.startShopping} onClick={() => hideCart()}>
                                Start Shopping
                            </button>
                        </Link>
                    </footer>
                </div>
            )
        }

        return (
            <>{products.map(product => {
                const { imageSrc, imageAlt, count, price, id, name } = product
                if (count < 1) return <></>
                return (
                    <section key={id} className={classes.productContainer}>
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            height={100}
                            width={130}
                        />
                        <span className={classes.productDetails}>
                            <p className={classes.productTItle}>{name}</p>
                            <span>
                                <span className={classes.cost}>
                                    <button className={classes.button} onClick={() => onDelete(id)}>-</button>
                                    &nbsp;&nbsp;{count}&nbsp;&nbsp;
                                    <button className={classes.button} onClick={() => onAdd(id)}>+</button>
                                    &nbsp;&nbsp;x&nbsp;Rs.{price}
                                </span>
                                <p className={classes.total}>Rs.{count * price}</p>
                            </span>
                        </span>
                    </section>)
            })}
                <div className={classes.lowestPrice}>
                    <Image src={LowestPrice} alt="lowest price guranteed" height={35} width={100} />
                    <p>You won't find it cheaper anywhere</p>
                </div>

                <footer className={classes.footer}>
                    <p>Promo code can be applied on payment page</p>
                    <button className={classes.checkoutButton} onClick={() => hideCart()}>
                        <p>Proceed to Checkout</p>
                        <p>Rs.{totalCost}</p>
                    </button>
                </footer></>
        )
    }

    return (
        <div className={classes.cartContainer}>
            <span className={classes.titleContainer}>
                <h2 className={classes.title}>My Cart</h2>&nbsp;&nbsp;
                <p className={classes.title}>(&nbsp;{totalCount}&nbsp;item{totalCount > 1 ? 's' : ''}&nbsp;)</p>
                <button className={classes.closeCart} onClick={() => hideCart()}>X</button>
            </span>
            {renderCartContent()}
        </div>
    );
}

Cart.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        imageSrc: PropTypes.string.isRequired,
        imageAlt: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired,
    onAdd: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    hideCart: PropTypes.func.isRequired,
    totalCount: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired
}

export default Cart;
