import SvgCartIcon from "../icons/CartIcon";
import { FlexRow, CartQty } from "./styled";

export default function CartWrap({ cartItemsCount = 0 }) {
  return (
    <FlexRow>
      <SvgCartIcon fill="#bf2957" width="30" height="30" />
      <CartQty>{`${cartItemsCount} items`}</CartQty>
    </FlexRow>
  );
}
