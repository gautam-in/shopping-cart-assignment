import Image from "next/image";
import style from "./CartItem.module.scss";
import Button from "../../common/components/atoms/Button";
import { useDispatchStore } from "../../common/context/contextProvider";

export default function CartItem({ item }) {
  const { cartState, dispatch } = useDispatchStore();
  const { price, quantity, imageURL, name, id } = item;
  const handleAction = (action, id) => {
    dispatch({ type: action, payload: { id } });
  };
  return (
    <>
      <div className={style.ItemContainer}>
        <div className={style.ImageContainer}>
          <Image alt={name} src={imageURL} width={100} height={100} />
        </div>
        <div className={style.description}>
          <span>{name}</span>
          <div className={style.quantity}>
            <Button
              onClick={() => {
                handleAction("QUANT_DEC", id);
              }}
            >
              -
            </Button>
            <span>{quantity}</span>
            <Button
              onClick={() => {
                handleAction("QUANT_INC", id);
              }}
            >
              +
            </Button>
            <span>x</span>
            <span>{price}</span>
          </div>
        </div>
        <div className={style.price}>{price * quantity}</div>
      </div>
    </>
  );
}
export function CartEndMessage({ message }) {
  return (
    <>
      <div className={style.ItemEmptyContainer}>
        <Image
          alt="lowest price tag"
          src="/static/images/lowest-price.png"
          width={144}
          height={51}
        />
        <span>{message}</span>
      </div>
    </>
  );
}
