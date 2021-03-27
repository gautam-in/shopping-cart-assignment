export default function CartItem({item,actions}) {
    return(
    <div  style={{display:"flex",position:"relative",justifyContent:"space-between",alignItems:"center",height:100,margin:"10px 0",background:"#fff",padding:"0 10px"}}>
        <div style={{flex:0.2}}> 
        <img src={item.imageURL}  width="100px" />
        </div>
        <div style={{flex:1,marginLeft:10}}>
            <p>{item.name}</p>
            <div style={{display:"flex",justifyContent:"flex-start",alignContent:'flex-start'}}>
            <div>
                <button 
                        onClick={()=>{
                            if (item.count === 1) {
                                actions.removeItemToCart(item);
                            } else if (item.count > 1) {
                                actions.decrementItemCount(item)
                            } 
                        }} 
                        style={{height:20,background:"rgb(204,0,82)",border:0}} type="button" name="button">
                    -
                </button>
            </div>
            <div style={{height:20,width:20,textAlign:'center'}}>
                <p style={{marginBlockStart:0,marginBlockEnd:0}}>
                    {item.count}
                </p>
            </div>
            <div>
                <button 
                    onClick={()=>{
                        actions.addItemToCart(item) 
                    }} 
                    style={{height:20,background:"rgb(204,0,82)",border:0}} type="button" name="button">
                    +
                </button>
            </div>
            <div style={{height:20, flex:1,textAlign:'center'}}>
                <p style={{marginBlockStart:0,marginBlockEnd:0}}>
                   x Rs.{item.price}
                </p>
            </div>
    </div>

        </div>
        <div style={{alignSelf:"flex-end"}}> 
        <p>Rs.{item.price *item.count}</p>
        </div>
    </div>)
    
}