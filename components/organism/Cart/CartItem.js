import styles from './cart.module.scss'
export default function CartItem({item,actions}) {
    return(
    <div className={styles.cartitem}>
        <div style={{flex:0.2}}> 
        <img src={item.imageURL} alt={item.name}  width="100px" />
        </div>
        <div className={styles.cartitemcontent}>
            <p>{item.name}</p>
            <div className={styles.cartcount}>
            <div>
                <button 
                        onClick={()=>{
                            if (item.count === 1) {
                                actions.removeItemToCart(item);
                            } else if (item.count > 1) {
                                actions.decrementItemCount(item)
                            } 
                        }} 
                         type="button" name="button">
                    -
                </button>
            </div>
            <div className={styles.itemcount}>
                <p >
                    {item.count}
                </p>
            </div>
            <div>
                <button 
                    onClick={()=>{
                        actions.addItemToCart(item) 
                    }} type="button" name="button">
                    +
                </button>
            </div>
            <div className={styles.itemmultiplier}>
                <p >
                   x Rs.{item.price}
                </p>
            </div>
    </div>

        </div>
        <div className="itemprice"> 
        <p>Rs.{item.price *item.count}</p>
        </div>
    </div>)
    
}