import { useRouter } from "next/router"

export default function ProductItem({product,actions,cartData,currentLogedInUser,styles}) {
  const router= useRouter()
    function addToCart(item) {
        if (currentLogedInUser) {
        const itemAlreadyInCart = cartData&&cartData.length ? 
        cartData.findIndex((cartItem)=>cartItem.id === item.id):-1
        if (itemAlreadyInCart >= 0) {
         return actions.addItemToCart(item)     
        }
        item.count = 1
        return actions.addItemToCart(item)   
        }    
        else {
         alert('log in to buy the products')
         return router.push({pathname:"/login"})
    }
    }
    return(
        <div className={styles.item}>
            <div className={styles.itemname}>
            <p style={{fontSize:20,fontWeight:"bold"}}>{product.name}</p>
            </div>
            <div className={styles.itemimage}>
            <img className={styles.productimage}  src={product?.imageURL} />
            </div>
            <div className={styles.itemdescription}>
            <p className={styles.description}>{product.description}</p>
            </div>
            <div className={styles.itembutton}>
                <div>
                <p style={{flex:1}}>MRP Rs.{product.price}</p>
                </div>
                <div>
                <button onClick={()=>{
                    addToCart(product)
                }} className={styles.buynow}>
                    Buy Now
                </button>
            </div>
            </div>
        </div>
    )
}