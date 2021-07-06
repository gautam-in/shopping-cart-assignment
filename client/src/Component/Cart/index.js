import React,{  useContext,useEffect,useState } from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// import AddCartItem from "../../Helper/addItemCart/index.js";
// import AuthContext from "../../Auth.jsx";
import CartItems from './CartItem';
// import {
//   SubModal,  SlidingPopupWrapper,
//   Form,
//   ButtonWrapper,
//   RightSideBar,
//   RadioWrapper,
// } from "./style.js";
const Cart = (props) => {
  // const { valueCart } = useContext(AuthContext);
   const { handleClose,  } = props;
  const history = useHistory();
  const items = useSelector((state) => state.cart.itemsAdded);
    const [list, setList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleButtonClick = () => {
    items.length > 0 ? history.push("/home") : history.push("/products");
  };
  // console.log(items,list,"fwjifjwoe")
  // useEffect(() => {
  //   console.log("called")

  // }, [])
  // const clickCancelAdd = () => {
  //   console.log("close")
  // }
   const _product = useSelector(
    (state) =>
      state.products &&
      state.products.data &&
      state.products.data.find((i) =>{ return i.id })
  );

  const removePropagation = (e) => {
    e.stopPropagation();
  };

  const changeCount = (id, count) => {
    // console.log(id, count,"fyufyufuyf")
    const newList = list.map((item) => {
      // console.log(item)
      if (item.id === id) {
        item.count = count;
      }
      return item;
    });
    // console.log(newList)
    setList(newList);
    // setList({...list,...newList});
  };

  // const handleButtonClick = () => {
  //   updateCart([]);
  // };

  const calculateTotalPrice = () => {
    console.log(list,"fhiqow")
    let TPrice = 0;
    list.forEach((item) => {
      console.log("calculateTotal", item.price,_product.price, item.count);
      TPrice += _product.price * item.count;
    });
    // console.log("calculateTotal2", TPrice);
    setTotalPrice(TPrice);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [list]);

  useEffect(() => {
    const objMap = {};
    const listArr = [];
    items.forEach((item) => {
      if (!objMap[item.id]) {
        objMap[item.id] = 0;
        listArr.push(item);
      }
      objMap[item.id]++;
    });
    listArr.forEach((item) => {
      item.count = objMap[item.id];
    });
    setList(listArr);
  }, [items]);

  return (
    <section className="section-cart" onClick={removePropagation}>
    <div className="cart-header">
      <div className="title">
        My Cart <span>({`${items.length} item`})</span>
      </div>
      <div onClick={handleClose} className="close">
        x
      </div>
    </div>
    {items.length === 0 ? (
      <div className="container">
        <div className="empty-cart">
          <h2>No items in your cart</h2>
          <div>Your favorite items are just a click away</div>
        </div>
        <div className="empty-cart-btn">
          <button >Start Shopping</button>
        </div>
      </div>
    ) : (
      <>
        <div className="cart-body">
          {list.map((item) => (
            <div>
              <CartItems changeCount={changeCount} product={item} productId={item.id} />
            </div>
          ))}
             <div className="advertisement">
             <img
               className="addv-image"
                 src="/static/images/lowest-price.png"
                 alt="Sabka Bazaar Logo"
               />{" "}
               <span className="cheaper">you wont find it cheaper anywhere!</span>
             </div>
        </div>
        <div className="cart-footer">
          <div className="Promo-code">
            Promo code can be applied on payment page
          </div>
          <div className="empty-cart-btn">
            {/* <button   tabIndex={0}> */}
              <div onClick={handleButtonClick} className="empty-cart-btn-secondary">
                <div>{items.length > 0 ? "Proceed to checkout" : "Start Shopping"}</div>
                <div>
                  {`Rs.${totalPrice}`}
                  <span> {">"} </span>
                </div>
              </div>
            {/* </button> */}
          </div>
        </div>
      </>
    )}
  </section>
    // <div className="cart">
    //   {items.length > 0 ? (
    //     <div className="cart-filled">
    //       <h2>My Cart</h2>
    //       <section>
    //         {items.map((list) => {
    //           return (
    //             <div key={list.id} className="item">
    //               <AddCartItem productId={list.id} />
    //             </div>
    //           );
    //         })}
    //         <div className="advertisement">
    //           <img
    //             className="addv-image"
    //             src="/static/images/lowest-price.png"
    //             alt="Sabka Bazaar Logo"
    //           />{" "}
    //           you wont find it cheaper anywhere!
    //         </div>
    //       </section>
    //     </div>
    //   ) : (
    //     <div className="cart-empty">
    //       <div>
    //         <h2>No items in your cart</h2>
    //         <p>Your favourite items are just a click away</p>
    //       </div>
    //     </div>
    //   )}
    //   <div className="buttons">
    //     <button
    //       type="button"
    //       onClick={handleButtonClick}
    //       onKeyPress={handleButtonClick}
    //       tabIndex={0}
    //     >
    //       {items.length > 0 ? "Proceed to checkout" : "Start Shopping"}
    //     </button>
    //   </div>
    // </div>
  //   <>
  //   <SlidingPopupWrapper
  //     status={"true"}
  //     style={{ overflowY: "auto", height: "auto" }}
  //   >
  //     <SubModal>
  //       <Form>
  //         <ButtonWrapper>
  //           <div className="masterBoqTitle">My Cart</div>
  //           <div>
  //             <button
  //               className="closeButton"
  //               onClick={() => clickCancelAdd()}
  //             >
  //               <div className="closeText">CLOSE</div>
  //             </button>
  //           </div>
  //         </ButtonWrapper>
  //         <RightSideBar>dtdtuduyuuy</RightSideBar>
  //       </Form>
  //     </SubModal>
  //   </SlidingPopupWrapper>
  // </>
  );
};

export default Cart;