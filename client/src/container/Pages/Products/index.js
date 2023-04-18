import React, { useState } from 'react'
import Categories from './Categories'
import ProductList from './ProductList'
import MobileView from './MobileView'
import { useLocation } from 'react-router-dom'
import style from './style.module.scss'

export default function Products() {
  const {state} = useLocation()
  const [filterCategory,setFilterCategory] = useState(state?.category)
  const updateCategoryFilter = (category) => {
    if(filterCategory === category)
      setFilterCategory(null)
    else
      setFilterCategory(category)
  }
  return (
    <div className={style.products}>
      <div className="hidden sm:block">
        <a className={style.skip} href="#main">Skip to Main Content</a>
        <div className='flex gap-4'>
          <aside className='bg-[#eaeaea] basis-1/6'>
            <Categories {...{filterCategory,updateCategoryFilter}} />
          </aside>
          <main id="main" className='basis-5/6 my-4'>
            <ProductList filterByCategoryId={filterCategory} />
          </main>
        </div>
      </div>
      <MobileView {...{filterCategory}}/>
    </div>
  )
}
