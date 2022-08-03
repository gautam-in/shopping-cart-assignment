import { useDispatch } from "react-redux"

const CartItem = ({product}:any) =>{

    const dispatch = useDispatch()

    return (
        <div className="d-flex justify-content-between px-2 mb-3" style={{height:'85px', background: 'white'}}>
            <div className="align-self-center">
                <img src={product.imageURL} width='80px'/>
            </div>
            <div className="d-flex flex-column flex-fill px-2 justify-content-around">
                <div><p className="mb-0"><strong>{product.name}</strong></p></div>
                <div className="d-flex">
                    <div className="d-flex align-items-baseline">
                        <button 
                            className="mx-1 pb-1 border-0 d-inline-flex align-items-center justify-content-center" 
                            style={{width:'15px', height:'15px', borderRadius:'25px'}}
                            onClick={() =>
                                dispatch({ type: "DELETE_PRODUCTS", payload: product })
                              }
                            >-</button>
                        <small className="mx-1">{product.qty}</small>
                        <button 
                            className="mx-1 pb-1 border-0 d-inline-flex align-items-center justify-content-center" 
                            style={{width:'15px', height:'15px', borderRadius:'25px'}}
                            onClick={() =>
                                dispatch({ type: "ADD_PRODUCTS", payload: product })
                              }
                            >+</button>
                    </div>
                    <small> X {product.price}</small>
                </div>
            </div>
            <div className="align-self-center">
                <small>Rs. {product.qty * product.price}</small>
            </div>
        </div>
    )
}

export default CartItem