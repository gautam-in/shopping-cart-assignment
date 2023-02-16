import { useEffect } from "react";
import { useCartContext } from "../../context/cartContext";

interface ICartModal {
  onClose: () => void;
}
export default function CartModal({ onClose }: ICartModal) {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const { state } = useCartContext();

  return (
    <div
      className="z-50 block fixed left-0 top-0 h-full w-full bg-black/40"
      role="dialog"
    >
      <div className="relative h-full w-full max-w-6xl mx-auto ">
        <div className="absolute bottom-0 right-0 w-1/2">
          <div className="bg-black p-4 text-white flex justify-between">
            <div className="">
              My Cart (
              <span className="text-xs">{state.cart.length} items</span>)
            </div>
            <button onClick={onClose}>X</button>
          </div>
        </div>
      </div>
    </div>
  );
}
