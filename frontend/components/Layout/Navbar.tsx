import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="drop-shadow-md bg-white w-full fixed top-0 left-0 right-0 z-10">
      <div className="lg:container mx-auto flex justify-between">
        <>
          <div id="skip">
            <a href="#content">Skip to main content</a>
          </div>
          <Link href="/">
            <a
              aria-label="Sabka Bazaar"
              className="lg:w-[14%] md:w-[20%] w-[25%] lg:p-1 h-full self-center"
            >
              <picture>
                <source
                  className="object-cover"
                  srcSet="/static/images/logo_2x.png"
                  media="(min-width:768px)"
                />
                <img
                  className="object-cover"
                  src="/static/images/logo.png"
                  alt="logo"
                />
              </picture>
            </a>
          </Link>
        </>

        <div className="self-end justify-start grow space-x-4 ml-8 lg:ml-[10rem] mb-4 hidden md:flex">
          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div>
            <Link href="/products">
              <a>Products</a>
            </Link>
          </div>
        </div>

        <div className="flex md:flex-col justify-between md:pt-1 space-x-2">
          <div className="md:flex space-x-4 self-end mr-2 lg:mr-0 hidden">
            <div>
              <Link href="/login">
                <a className="text-sm hover:underline" tabIndex={0}>
                  SignIn
                </a>
              </Link>
            </div>
            <div>
              <Link href="/register">
                <a className="text-sm hover:underline" tabIndex={0}>
                  Register
                </a>
              </Link>
            </div>
          </div>
          <a
            href="/cart"
            className="bg-[#EAEAEA] px-6 py-4 flex items-center space-x-3 focus:border"
            aria-label={`0 items in cart`}
          >
            <svg
              version="1.1"
              id="Layer_1"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
              className="h-8 w-8 fill-[#d10054]"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span>{0} items</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
