import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import ProductTable from '../../components/List/ProductTable'
import SideBar from '../../components/SideBar'
import Cart from '../../components/Cart'

import { getCategories, getProducts } from '../../lib/AJAX'
import { RetriveCartList } from '../../lib/indexDB'
import { CartContext } from '../../Context/cart-state'
import DropDown from '../../components/DropDown'
import { useWindowSize } from '../../hooks/useWindowSize'

export default function Product({ products, categories }) {
    let context = useContext(CartContext)
    const { isMobile } = useWindowSize()

    const [selectedMenu, setSelectedMenu] = useState('')
    const [selectedMenuItem, setSelectedMenuItem] = useState('All')

    const [productData, setProductData] = useState(products)
    const [cartProducts, setCartProducts] = useState([])

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            RetriveCartList((result) => {
                setCartProducts(result)
            })
        }, 1000);

    })


    useEffect(() => {
        if (router?.query?.category) {
            let category = categories.find((c) => c.key === router.query.category)
            filterProducts(category?.id)
            setSelectedMenu(category?.id)
            setSelectedMenuItem(category?.name)
        }
    }, [router.query.category])

    useEffect(() => {
        if (selectedMenu !== '') {
            filterProducts(selectedMenu)
        } else {
            setProductData(products)
        }
    }, [selectedMenu])

    const filterProducts = (categoryId) => {
        let filteredProd = products.filter((p) => p.category === categoryId)
        setProductData(filteredProd)
    }

    const onSelect = (id) => {
        let category = categories.find((c) => c.id === id)
        if (window.history.pushState) {
            var newurl = router.pathname + `/?category=${category.key}`;
            window.history.pushState({ path: newurl }, "", newurl)
        }

        if (selectedMenu === id) {
            setSelectedMenu('')
        } else {
            setSelectedMenu(id)
            setSelectedMenuItem(category?.name)

        }
    }

    return (
        <>
            <Head>
                <title>Sabka Bazar E-commerce App</title>
            </Head>
            <main className='product-view-container'>
                <SideBar categories={categories} onSelect={onSelect} selectedMenu={selectedMenu} />
                {isMobile
                    &&
                    <DropDown categories={categories} onSelect={onSelect} selectedMenu={selectedMenu} selectedMenuItem={selectedMenuItem} />
                }
                <ProductTable products={productData} />
                {context.cartOpened &&
                    <Cart
                        data={cartProducts}
                        onHide={() => context.toggleCart(false)}
                        onProceed={() => context.toggleCart(false)} />
                }
            </main>
        </>
    )
}

export async function getServerSideProps() {
    const products = await getProducts()
    const categories = await getCategories()
    return {
        props: {
            products,
            categories
        }
    }
}
