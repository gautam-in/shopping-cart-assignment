import React from 'react'
import Banner from './Banner'
import ProductCategory from './Product_Category'
import Footer from './Footer'
export default function Home() {
  return (
    <div>
      <div className='react-container content'>
        <Banner />
        <ProductCategory />
      </div>
        <Footer />
    </div>
  )
}
