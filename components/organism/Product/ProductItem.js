import { useRouter } from "next/router"
import styles from './productitem.module.scss'

export default function ProductItem({product,actions,cartData,currentLogedInUser}) {
  const router= useRouter()

    function addToCart(item) {
        const itemAlreadyInCart = cartData&&cartData.length ? 
        cartData.findIndex((cartItem)=>cartItem.id === item.id):-1;
        // if item in cart increase the count
        if (itemAlreadyInCart >= 0) {
         return actions.addItemToCart(item);   
        }
        // if item not in cart add item to cart
        item.count = 1
        return actions.addItemToCart(item);   
       
    }

    return(
        <div className={styles.item}>
            <div className={styles.itemname}>
            <p style={{fontSize:20,fontWeight:"bold"}}>{product.name}</p>
            </div>
            <div role="button" className={styles.itemimage}>
                <img className={styles.productimage}  src={product?.imageURL} alt={product.name} />
            </div>
            <div role="button"  className={styles.itemdescription}>
                <p className={styles.description}>{product.description}</p>
            </div>
            <div role="button"  className={styles.itembutton}>
                {window.innerWidth > 1199&&
                <div role="button">
                <p style={{flex:1}}>MRP Rs.{product.price}</p>
                </div>}
                <div>
                <button onClick={()=>{
                    addToCart(product)
                }} className={styles.buynow}>
                    Buy Now {window.innerWidth < 1199 && `@ Rs.${product.price}`}
                </button>
            </div>
            </div>
        </div>
    )
}