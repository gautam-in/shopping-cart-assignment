import styles from './cartItem.module.scss'
export default function CartItem({ item, actions, count }) {
   return (
      <div className={styles.cartitem}>
         <div style={{ flex: 0.2 }}>
            <img src={item.imageURL} alt={item.name} width="100px" />
         </div>
         <div className={styles.cartitemcontent}>
            <p><b>{item.name}</b></p>
            <div className={styles.cartcount}>
               <div>
                  <button
                     onClick={() => {
                        actions.removeFromCart(item.id)
                     }}
                     type="button" name="removebutton"><b>-</b></button>
               </div>
               <div className={styles.itemcount}>
                  <p>{count}</p>
               </div>
               <div>
                  <button
                     onClick={() => {
                        actions.addToCart(item.id)
                     }}
                     type="button"
                     name="addbutton"><b>+</b></button>
               </div>
               <div className={styles.itemmultiplier}>
                  <p>
                     x Rs.{item.price}
                  </p>
               </div>
            </div>

         </div>
         <div className="itemprice">
            <p>Rs.{item.price * count}</p>
         </div>
      </div>)

}