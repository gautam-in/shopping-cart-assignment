import Image from "next/image";
import styled from "styled-components";
import { useStore } from "../store/Store";
import { removeFromCart, updateCart } from "../actions/cartActions";
import { db } from "../firebase";

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  background: #fff;
  margin: 10px 0;
`;

const Detail = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  margin: 0 15px;
  .price-block {
    display: flex;
    align-items: center;
  }

  .times {
    margin: 0 10px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ItemCounter = styled.div`
  display: flex;
  align-items: center;

  .count {
    margin: 0 10px;
  }
`;

const CounBtn = styled.button`
  border: 0;
  background: var(--colorPrimary);
  height: 20px;
  width: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
`;

const Price = styled.div`
  align-self: flex-end;
  font-weight: bold;
`;

export default function CartItem({ name, imageURL, price, count, id }) {
  const [globalState, dispatch] = useStore();
  let newCount = count;
  function handleProductCount(countType) {
    if (countType === "minus") {
      if (newCount === 1) {
        dispatch(removeFromCart({ id }));
        db.collection("cartItems")
          .where("user", "==", globalState.user?.email)
          .where("id", "==", id)
          .get()
          .then((snapShot) => {
            snapShot.forEach((doc) => {
              db.collection("cartItems").doc(doc.id).delete();
            });
          });
        return;
      }
      newCount--;
    } else if (countType === "plus") {
      newCount++;
    }
    dispatch(updateCart({ id, count: newCount }));
    db.collection("cartItems")
      .where("user", "==", globalState.user?.email)
      .where("id", "==", id)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          db.collection("cartItems").doc(doc.id).update({
            count: newCount,
          });
        });
      });
  }
  return (
    <Item>
      <Image src={imageURL} width="50" height="50" alt="Apple - " />
      <Detail>
        <Title>{name}</Title>
        <div className="price-block">
          <ItemCounter>
            <CounBtn onClick={() => handleProductCount("minus")}>-</CounBtn>
            <span className="count">{count}</span>
            <CounBtn onClick={() => handleProductCount("plus")}>+</CounBtn>
          </ItemCounter>
          <span className="times">x</span>
          <span className="unitPrice">Rs.{price}</span>
        </div>
      </Detail>
      <Price>Rs.{count * price}</Price>
    </Item>
  );
}
