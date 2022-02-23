import React, { useEffect, useState } from 'react'
import { Endpoints } from '../../Utils/Endpoints'
import { getMethod } from '../../Utils/httpServices'
import AddToCart from '../AddToCart'
import ProductList from './components/ProductList'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Products(props) {
    const [catgList, setCatgList] = useState([])
    const [productList, setProductList] = useState([])
    const [addToCartModal, setAddToCartModal] = useState(false)
    const [filterBy, setFilterBy] = useState('')
    const [buyNow, setBuyNow] = useState('')


    useEffect(() => {
        // document.body.style.overflow = 'hidden'
        getMethod(Endpoints.catgList).then((response) => {
            console.log(response)
            setCatgList(response.map((item) => { return { ...item, value: item.id, label: item.name } }))
        })
        getMethod(Endpoints.productsList).then((response) => {
            console.log(response)
            setProductList(response)
        })
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    const selectFilterHandler = (e) => {
        console.log(e.target.id)
        setFilterBy(e.target.id)

    }

    return (
        <>

            <Dropdown
                className='filterDropdown'
                controlClassName='custom-dropdown pg-lr-sp'
                options={catgList}
                onChange={(e) => { setFilterBy(e.value) }}
                value={filterBy}
                placeholder="Select an option" />
            <section className='product-component pg-lr-sp'>


                <aside className='sideBar'>
                    {
                        catgList.map((item) => (
                            <div key={item.id} id={item.id} className={'sideBar-item '
                                +
                                (filterBy == item.id ? "active" : "")}
                                onClick={selectFilterHandler}>
                                {item.name}
                            </div>
                        ))
                    }
                </aside>
                <div className='products'>
                    <ProductList
                        list={productList.filter((item) => (filterBy ? (item.category == filterBy) : item.category))}
                        onBuyNow={(item) => {
                            console.log("nj", item)
                            setBuyNow(item)
                            setAddToCartModal(true)
                            document.body.style.overflow = 'hidden'
                        }}
                    />
                </div>
                {
                    addToCartModal ?
                        <AddToCart
                            item={buyNow}
                            onClose={() => {
                                setBuyNow('')
                                setAddToCartModal(false)
                                document.body.style.overflow = 'unset'
                            }}
                        />
                        :
                        null
                }
            </section >
        </>
    )
}

export default Products