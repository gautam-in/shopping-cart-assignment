import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#EAEAEA]">
      <div className="container mx-auto text-center md:text-left  py-4 text-normal">
        Copyright 2011 - {new Date().getFullYear()} Sabka Bazaar Grocery
        Supplies Pvt Ltd
      </div>
    </footer>
  )
}

export default Footer
