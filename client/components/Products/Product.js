import styles from '../../styles/product.module.scss';
import { useCart } from '../../util/cartState';
import axios from 'axios';
import {useApiRequest} from '../../util/useApiRequest';

const Product = ({ name, description, imageURL, price, id }) => {

    const { cart, setCart } = useCart()

    const addToCartHandler = () => {
        // const {data, isLoading, error} = useApiRequest("http://localhost:5000/addToCart");
        // console.log(data, isLoading, error);
        const cartItem = {
            id,
            name,
            price,
            imageURL,
            quantity: 1,

        }
        axios.post("http://localhost:5000/addToCart")
            .then(res => {
                console.log(res);
                setCart([...cart, cartItem]);
            })

    }

    return (
        <section className={styles.container}>
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.details}>
                <div className={styles.img}>
                    <img src={imageURL} alt={name} />
                </div>
                <p className={styles.description}>{description}</p>

            </div>
            <div className={styles.foot}>
                <p className={styles.price}>MRP Rs.{price}</p>
                {cart.find(i => i.id == id) ? (
                    <>
                        <button className={styles.button}>In Cart</button>
                        <button className={styles.tabButton}>In Cart @ Rs.{price}</button>
                    </>
                ) : (
                        <>
                            <button className={styles.button} onClick={addToCartHandler}>Buy Now</button>
                            <button className={styles.tabButton} onClick={addToCartHandler}>Buy Now @ Rs.{price}</button>
                        </>
                    )}
                {/* <button className={styles.button} onClick={addToCartHandler}>Buy Now</button> */}

            </div>
        </section>
    )
}

export default Product
