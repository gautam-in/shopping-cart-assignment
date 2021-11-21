import React from 'react'

export default function Modal(props) {
    if (props.toggleModal == false) return null;

    return (
        <>
            <div style={{ position: "fixed", zIndex: 3, top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,.7)" }}></div>
            <div className="card" style={{ position: 'fixed', top: "16%", left: "50%", right: "4%", zIndex: 4 }}>
                <div className="card-head d-flex p-2" style={{ backgroundColor: "black", margin: 0, color: "white" }}>
                    <h5 className="mr-auto">My Cart ( {props.totalItems} Items ) </h5>
                    <button className="btn text-light" style={{ position: 'absolute', right: "2%" }} onClick={() => { props.setToggleModal() }}> <i class="fas fa-times"></i> </button>
                </div>
                <div className="card-body bg-grey">
                    {props.cartItems && props.cartItems.map((item) => (
                        <div className="row  bg-white ">
                            <div className="col-2"><img className="img-fluid" src={item.imageURL} /></div>
                            <div className="col-7">
                                <div className="row"><p>{item.name}</p></div>
                                <div className="d-flex mx-5">
                                    <i onClick={()=>(props.increaseQuantity(item.id))}  class="fas fa-plus-circle mx-2 p-1 " style={{color:"maroon"}}></i>
                                    <span className="mx-2 "> {item.quantity} </span>
                                    <i onClick={()=>(props.decreaseQuantity(item.id))} class="fas fa-minus-circle mx-2 p-1" style={{color:"maroon"}}></i>

                                </div>
                            </div>
                            <div className="col-3  p-4">
                               Rs. {item.price* item.quantity}
                            </div>
                        </div>
                    ))}
                    <div className="row my-3 bg-white">
                        <div className="col m-auto"><img className='img-fluid' src="static/images/lowest-price.png"></img></div>
                        <div className="col m-auto">You won't find it cheaper anywhere</div>
                    </div>
                </div>
                <div className="card-footer">
                        <p>promocode can be applied on payment page</p>
                        <button className="btn  btn-danger btn-block w-100">Proceed to Checkout <span>Rs {props.totalValue} </span> <i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </>
    )
}
