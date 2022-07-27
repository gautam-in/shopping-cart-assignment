const CartItem = ({product}:any) =>{
    console.log(product)
    return (
        <div className="d-flex align-items-center justify-content-around" style={{height:'85px', background: 'white'}}>
            <div>
                <img src={product.imageURL} width='80px'/>
            </div>
            <div className="d-flex flex-column">
                <div><p><strong>{product.name}</strong></p></div>
                <div className="d-flex">
                    <div className="d-flex align-items-baseline">
                        <button className="mx-1 pb-1 border-0 d-inline-flex align-items-center justify-content-center" style={{width:'15px', height:'15px', borderRadius:'25px'}}>-</button>
                        <p className="mx-1">{product.quantity||0}</p>
                        <button className="mx-1 pb-1 border-0 d-inline-flex align-items-center justify-content-center" style={{width:'15px', height:'15px', borderRadius:'25px'}}>+</button>
                    </div>
                    <div> X {product.price}</div>
                </div>
            </div>
            <div>
                <p>totalPrice</p>
            </div>
        </div>
    )
}

export default CartItem