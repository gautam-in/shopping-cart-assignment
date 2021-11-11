import { useStore } from "../../store/Store";
import { addToCart, updateCart } from "../../actions/cartActions";
import { useRouter } from "next/router";
import { db } from "../../firebase";
import {
  ButtonRow,
  BuyBtn,
  Product,
  ProductDescription,
  ProductImage,
  ProductTitle,
} from "./productStyles";

export default function ProductCard({
  name,
  price,
  imageURL,
  description,
  id,
}) {
  const router = useRouter();
  const [globalState, dispatch] = useStore();
  const cartItems = globalState.cartItems;
  const handleAddToCart = () => {
    if (!globalState.user) {
      router.push("/signin");
      return;
    }
    let currentItem = cartItems.find((cartItem) => cartItem.id === id);
    if (currentItem) {
      //update count of existing item
      currentItem.count++;
      dispatch(updateCart({ id: currentItem.id, count: currentItem.count }));
      db.collection("cartItems")
        .where("user", "==", globalState.user?.email)
        .where("id", "==", id)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            db.collection("cartItems").doc(doc.id).update({
              count: currentItem.count,
            });
          });
        });
    } else {
      // push new item to store
      dispatch(
        addToCart({
          name,
          price,
          imageURL,
          id,
          count: 1,
          user: globalState.user.email,
        })
      );
      db.collection("cartItems").add({
        name,
        price,
        imageURL,
        id,
        count: 1,
        user: globalState.user.email,
      });
    }
  };
  return (
    <Product>
      <ProductTitle>{name}</ProductTitle>
      <div>
        <ProductImage src={imageURL} alt={name} />
        <ProductDescription>{description}</ProductDescription>
        <ButtonRow>
          <span>MRP &#8377;{price}</span>
          <BuyBtn onClick={handleAddToCart}>Buy Now</BuyBtn>
        </ButtonRow>
      </div>
    </Product>
  );
}
