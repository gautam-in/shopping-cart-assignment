import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
  children?: JSX.Element | JSX.Element[]
}

const Layout = ({children}: Props) => {
  return (
    <>
      <Navbar />
      <main id="main" className="mt-28 lg:container mx-auto">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
