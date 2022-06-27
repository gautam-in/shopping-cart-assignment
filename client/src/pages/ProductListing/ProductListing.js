import React from "react"
import LeftNav from "../../components/LeftNav/LeftNav"
import Products from "../../components/Products/Products"
import "../../styles/pages/productlist.scss"
const ProductListing = () => {
    return (<main className="productlist_leftnav_container">

        <LeftNav />
        <Products />
    </main>)
}

export default ProductListing