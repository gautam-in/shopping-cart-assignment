export default function CartItem({item,actions}) {
    return(
    <div className="cartitem">
        <div style={{flex:0.2}}> 
        <img src={item.imageURL}  width="100px" />
        </div>
        <div className="cartitemcontent">
            <p>{item.name}</p>
            <div className="cartcount">
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
            <div className="itemcount">
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
            <div className="itemmultiplier">
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