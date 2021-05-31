import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from "../Navbar/Navbar"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../store/actions"
import Backdrop from "../Backdrop/Backdrop"
import Cart from "../Cart/Cart"
import "./Products.scss"
export default function Products() {
    const dispatch = useDispatch()
    const show = useSelector(state => state.showCart)
    const [products, setProducts] = React.useState([])
    const [productsCopy, setProductsCopy] = React.useState([])
    const [selctecdCategory, setselctecdCategory] = useState('')
    const [filter, setfilter] = useState(false)
    const [filterItems, setfilterItems] = useState([])
    const [category, setcategory] = useState('select')

    useEffect(() => {

        setfilterItems([
            { id: '5b6899953d1a866534f516e2', name: 'Fruits & Vegetables', visited: false },
            { id: '5b6899123d1a866534f516de', name: 'Bakery Cakes and Dairy', visited: false },
            { id: '5b675e5e5936635728f9fc30', name: 'Beverages', visited: false },
            { id: '5b68994e3d1a866534f516df', name: 'Beauty and Hygiene', visited: false },
            { id: '5b6899683d1a866534f516e0', name: 'Baby Care', visited: false },
        ])
    }, [])
    const apiCall = async () => {
        let res = await axios.get('http://localhost:5000/products')
        setProducts(res.data.map(dt => ({ ...dt, count: 0 })))
        setProductsCopy(res.data)
    }
    const clickHandler = (e) => {
        
        const prds = productsCopy;

        setcategory(e.target.value)
        const optionattribute = e.target.options[e.target.selectedIndex].dataset

        const filteredproducts = prds.filter(p => p.category === optionattribute.catid)
        setProducts(filteredproducts)
    }
    const filterProducts = (category) => {
        const { id, name, visited } = category
        const prds = productsCopy;
        const filteritemscopy = [...filterItems]
        const index = filterItems.findIndex(f => f.id === id)
        filteritemscopy[index].visited = !filteritemscopy[index].visited

        if (!visited) {

            const filteredproducts = prds.filter(p => p.category === id)

            setselctecdCategory(name)
            setProducts(filteredproducts)
            setfilterItems(filteritemscopy)

        }
        else {
            setProducts(productsCopy)
            setfilterItems(filteritemscopy)
        }



    }
    useEffect(() => {
        apiCall()
    }, [])
    const options = filterItems.map(category => <option
        data-catid={category.id}
    // className={selctecdCategory === category.name && category.visited ? "selected-category align" : "align highlight"}
    >{category.name}</option>)
    return (
        <div>

            <div> <Navbar /></div>
            <Backdrop />
            {show && <div className="cart-align"><Cart /></div>}
            <div className="products">
                <div className="left-pane">
                    {filterItems.map(category => <div
                        className={selctecdCategory === category.name && category.visited ? "selected-category align" : "align highlight"}
                        onClick={() => filterProducts(category)}>{category.name}</div>)}
                </div>
                <div className="cat-dropdown">
                    <select onChange={clickHandler} aria-label="cat-dropdown">{options}</select>
                </div>
                <div className="right-pane">

                    {/* <div class="parent"> */}
                    {products.length > 0 && products.map(prd => {
                        if (prd.hasOwnProperty('imageURL')) {
                            const imageurl = prd.imageURL.split("/").reverse()
                            const url1 = imageurl[0]
                            const url2 = imageurl[1]

                            return <div className="each-item">
                                <h3> {prd.name}</h3>
                                <div >
                                    <img className="product"
                                        src={require(`../../../static/images/products/${url2}/${url1}`).default}
                                        alt={url1} />
                                </div>
                                <div
                                    className="description"
                                >{prd.description}</div>
                                <div
                                    className="item-buy"
                                >
                                    <div className="mrp">MRP Rs.{prd.price}</div>
                                    <div className="buy"><button className="buynow" onClick={() => dispatch(actions.addToCart(prd))}>Buy Now</button></div>
                                </div>
                            </div>
                        }
                    })}
                </div></div>

            {/* </div> */}


        </div>
    )
}
