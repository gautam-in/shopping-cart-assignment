import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

import ProductTable from '../../components/List/ProductTable'
import SideBar from '../../components/SideBar'

import { getCategories, getProducts } from '../../lib/AJAX'

export default function Product({ products, categories }) {
    const [selectedMenu, setSelectedMenu] = useState('')
    const [productData, setProductData] = useState(products)
    const router = useRouter()

    useEffect(() => {
        if (router?.query?.category) {
            let category = categories.find((c) => c.key === router.query.category)
            filterProducts(category?.id)
            setSelectedMenu(category?.id)
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
        if (window.history.pushState) {
            let category = categories.find((c) => c.id === id)
            var newurl = router.pathname + `/?category=${category.key}`;
            window.history.pushState({ path: newurl }, "", newurl)
        }
        if (selectedMenu === id) {
            setSelectedMenu('')

        } else {
            setSelectedMenu(id)

        }
    }

    return (
        <main className='product-view-container'>
            <SideBar categories={categories} onSelect={onSelect} selectedMenu={selectedMenu} />
            <ProductTable products={productData} />

        </main>
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
