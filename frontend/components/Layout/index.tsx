import React from 'react'
import Navbar from 'components/Layout/Navbar'
import Footer from 'components/Layout/Footer'

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
