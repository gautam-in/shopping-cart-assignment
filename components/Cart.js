import CartItem from "./CartItem"
function CartEmptyState() {
    return(
        <div style={{display:"flex",height:"100vh",width:"100%",backgroundColor:"#fff",justifyContent:"center",alignItems:"c"}}>
                    No items in cart
                Your favourite item are just a click away
        </div>
    )
    
}

export default function Cart({cartData,actions}) {
const totalPrice = cartData?.length&&cartData.reduce((tally,cartItem)=>{
    return tally + cartItem.count * cartItem.price
        },0)
return(
    <div style={{position:"fixed",background:"rgba(0,0,0,0.4)",top:0,bottom:0,right:0,left:0,zIndex:11,overflowY:"hidden"}}>
        <div style={{width:"80%",margin:"auto",position:"relative"}}>
        <div className="example" style={{width:"400px",minHeight:400,background:"rgb(240,240,255)",position:"absolute",top:100,right:0,overflowY:"scroll"}}>
            <header style={{display:"flex",background:"#000",height:40,width:"400px",justifyContent:"center",alignItems:"center",position:"fixed",top:100,zIndex:11}}>
            <div style={{flex:1}}>
            <p style={{marginBlockStart:0,marginBlockEnd:0,color:"#fff"}}>My Cart ({cartData?.length}) items</p> 
            </div>
            <button style={{background:"transparent",border:"none",color:"#fff"}} onClick={()=>actions.toggleCart()}>
                X
            </button>
            </header>

            <div>
                {cartData&&cartData.length?cartData.map((item)=>{
                    return(
                        <CartItem item={item} actions={actions}/>)
                    })
                :
                <CartEmptyState />
                }
            </div>
            {cartData&&cartData.lenght&&
            <div style={{display:"grid",gridTemplateColumns:"110px auto",background:"#fff",padding:"0 10px",justifyContent:"center",alignItems:'center'}}>
                <img src="../static/images/lowest-price.png" width="100px" />
                <p>You wont find it cheaper any where</p>
            </div>}

            <footer style={{display:"flex",flexDirection:"column",background:"#fff",height:100,width:"400px",justifyContent:"center",alignItems:"center",position:"fixed",bottom:0,zIndex:11}}>
                <div>
                    <p style={{marginBlockStart:0,marginBlockEnd:"10px"}}>Promo code can be applied on payment page</p> 
                </div>
                <button style={{border:"none",color:"#fff",background:"rgb(204,0,82)",width:"80%",height:50}} onClick={()=>actions.toggleCart()}>
                     {cartData&&cartData.length ?`Proceed to checkout Rs.${totalPrice}`: "Start Shopping"}
                </button>
            </footer>
        </div>
        </div>
        </div>
    )
    
}