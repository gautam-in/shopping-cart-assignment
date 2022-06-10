import React from 'react'
import Layout from '../components/Layout'
import CategoryWrapper from '../components/Products/CategoryContext'
import Head from 'next/head'

const Products = () => {
  return (
    <Layout>
      <Head>
        <title>Products List - Sabka Bazaar</title>
      </Head>
      <div className="flex -mt-4">
        <CategoryWrapper />
      </div>
    </Layout>
  )
}

export default Products
