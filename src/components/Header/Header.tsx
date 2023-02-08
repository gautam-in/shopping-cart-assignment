import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "../Icons/Icons";

export default function Header() {
  return (
    <header className="w-full shadow">
      <div className="max-w-5xl mx-auto flex items-end">
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
            <button className="flex gap-1 bg-offWhite p-3 px-4">
              <CartIcon className="fill-primary h-6 w-6" />
              <span>0</span>items
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
