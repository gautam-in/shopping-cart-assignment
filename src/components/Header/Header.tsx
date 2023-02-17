import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useCartContext } from "../../context/cartContext";
import { CartIcon } from "../Icons/Icons";

const DynamicCartModal = dynamic(() => import("../CartModal/CartModal"));

export default function Header() {
  return (
    <header className="w-full shadow z-40">
      <div className="max-w-6xl mx-auto flex items-end">
        <Link href="/" className="cursor-pointer ">
          <Image
            src={"/static/images/logo_2x.png"}
            alt="home"
            width={95}
            height={43}
            className="p-1"
          />
        </Link>
        <div className="flex-1">
          <ul className="sm:flex gap-4 ml-20 hidden">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="justify-end sm:flex mb-2 hidden ">
            <ul className="flex gap-2 text-sm">
              <li>
                <Link href="/signin">signIn</Link>
              </li>
              <li>
                <Link href="/register">register</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-between">
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  );
}

function CartButton() {
  const { state, isOpen, setIsOpen } = useCartContext();

  return (
    <>
      <button
        className="flex gap-1 bg-offWhite p-3 px-4"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <CartIcon className="fill-primary h-6 w-6" />
        <span>{state.cart.length}</span>items
      </button>
      {isOpen &&
        createPortal(
          <DynamicCartModal onClose={() => setIsOpen(false)} />,
          document.body
        )}
    </>
  );
}
