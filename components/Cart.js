import { useEffect, useState } from "react";
import styled from "styled-components";

const CartStyles = styled.main`
  margin: 2rem 0;
  position: relative;
  min-height: 100vh;
  padding: 2rem 0;
  margin-bottom: 50px;
  .mycart {
    background: #fff;
    padding: 2rem;
  }
  .orders {
    background: #fff;
    padding: 2rem;
    margin: 2rem 0;
  }
  .orders-promotion {
    display: flex;
    align-items: center;
    padding: 2rem;
    background-color: #fff;
    p {
      flex-basis: 70%;
      justify-self: flex-start;
      margin-left: 3rem;
      font-size: 1.5rem;
    }
  }

  .checkout {
    position: absolute;

    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    button {
      color: #fff;
      display: flex;
      justify-content: space-between;
      background-color: var(--primary-color);
      width: 100%;
      padding: 2rem;
      border-radius: 5px;
      font-size: 2rem;
      font-weight: 500;
    }
  }
`;

const CartItemStyles = styled.div`
  display: flex;
  height: 100px;
  background-color: #fff;
  margin: 2rem 0;
  border: 2rem solid #fff;

  img {
    width: auto;
    height: 100%;
    margin-right: 2rem;
  }
  .no-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    .buttons {
      display: flex;
      align-items: center;
    }
    button {
      background-color: var(--primary-color);
      text-align: center;
      border-radius: 5px;
      padding: 10px;
      color: #fff;
      margin: 0 10px;
      padding-top: 10px;
    }
  }
`;

export default function Cart() {
  const [key, setKey] = useState(undefined);
  const items = key?.length

  useEffect(() => {
    setKey(JSON.parse(localStorage.getItem("products")));
  }, [items]);

const onClick = (idx)=>{
  setKey(key.splice(idx,0))
}

  return (
    <CartStyles>
      <div>
        <div className="mycart">
          <p>
            My Cart <small> (item)</small>
          </p>
        </div>
        <div className="orders">
          <h1>orders</h1>
        </div>
        <div>
          {key?.map((ite) => {
            return (
              <CartItemStyles key={ite.id}>
                <img src={ite.imageURL} alt="" />
                <div className="items">
                  <div>
                    <h3>{ite.name}</h3>
                  </div>
                  <div className="no-items">
                    <div className="buttons">
                      <button>
                        <p>+</p>
                      </button>
                      {"quentity"}
                      <button>
                        <p>-</p>
                      </button>
                    </div>
                    <div className="cost">Rs 180/-</div>
                  </div>
                </div>
              </CartItemStyles>
            );
          })}
        </div>
        <div className="orders-promotion">
          <img src="/lowest-price.png" alt="lowest price" />
          <p>Yow won`t find cheaper anywhere</p>
        </div>
        <div className="checkout">
          <div>
            <p>Promo code can be applied on payment page</p>
          </div>
          <div>
            <button>
              <div>
                <p>Proceed to Checkout</p>
              </div>
              <div>
                <p>Rs200&gt;</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </CartStyles>
  );
}
