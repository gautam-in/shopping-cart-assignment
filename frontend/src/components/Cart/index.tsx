import { Modal } from "../Modal";
import CartBody from "./CartBody";
import CartHeader from "./CartHeader";

export const Cart = ({
  show,
  setShowCart,
}: {
  show: boolean;
  setShowCart: () => void;
}) => {
  return (
    <Modal show={show} title={<CartHeader />} onClose={() => setShowCart()}>
      <CartBody />
    </Modal>
  );
};
