import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  let cartState = useSelector((state: any) => state.cart);
  console.log("cartState  from store : ", cartState);
  let cartText = "-";
  if (cartState) {
    cartText = `${cartState.totalItems} ${
      cartState.totalItems > 1 ? "items" : "item"
    }`;
  }

  return (
    <nav className=" h-28 shadow-lg">
      <div className="max-w-screen-lg mx-auto h-full flex justify-between items-center">
        <Link href="/offers" className="">
          <Image
            src="/static/images/logo_2x.png"
            width="150"
            height="150"
            alt="Logo Image"
          />
        </Link>
        <div className="hidden h-full md:flex lg:flex">
          <ul className="flex flex-col md:flex-row lg:flex-row h-full gap-4 items-end pb-4 text-gray-500 cursor-pointer  font-extrabold">
            <li>
              <Link href="/offers"> Home </Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </div>

        <div className="h-full flex flex-col pt-5 ">
          <ul className=" flex gap-4 mb-2 cursor-pointer">
            <li>
              <Link href="/login">SignIn</Link>
            </li>
            <li>
              <Link href="/logout">SignOut</Link>
            </li>
            <li>
              <Link href="/signup">Register</Link>
            </li>
            <li>
              <button
                data-collapse-toggle="mobile-menu"
                type="button"
                className="lg:hidden md:hidden inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
          <div className=" bg-[#ddd] flex-1 text-center py-2 cursor-pointer">
            <Image
              src="/static/images/cart1.svg"
              alt="cart"
              height={40}
              width={40}
              className="inline-block"
            />
            <span className="inline-block pl-2">{cartText}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
