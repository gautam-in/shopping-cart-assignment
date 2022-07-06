import React from 'react'
import { Home, Navbar, Footer } from "./../components/index-components"
const HomePage = () => {
  return (
    <div className = "bg-color">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default HomePage