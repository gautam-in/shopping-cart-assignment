import { useDispatch } from "react-redux"

const CartItem = ({product}:any) =>{

    const dispatch = useDispatch()

    return (
        <div className="d-flex align-items-center justify-content-around mb-3" style={{height:'85px', background: 'white'}}>
            <div>
                <img src={product.imageURL} width='80px'/>
            </div>
            <div className="d-flex flex-column">
                <div><p><strong>{product.name}</strong></p></div>
                <div className="d-flex">
                    <div className="d-flex align-items-baseline">
                        <button 
                            className="mx-1 pb-1 border-0 d-inline-flex align-items-center justify-content-center" 
                            style={{width:'15px', height:'15px', borderRadius:'25px'}}
                            onClick={() =>
                                dispatch({ type: "DELETE_PRODUCTS", payload: product })
                              }
                            >-</button>
                        <p className="mx-1">{product.qty}</p>
                        <button 
                            className="mx-1 pb-1 border-0 d-inline-flex align-items-center justify-content-center" 
                            style={{width:'15px', height:'15px', borderRadius:'25px'}}
                            onClick={() =>
                                dispatch({ type: "ADD_PRODUCTS", payload: product })
                              }
                            >+</button>
                    </div>
                    <div> X {product.price}</div>
                </div>
            </div>
            <div>
                <p>Rs. {product.qty * product.price}</p>
            </div>
        </div>
    )
}

export default CartItem