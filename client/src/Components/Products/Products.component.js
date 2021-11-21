import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


export default function ProductsComponent(props) {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const { id } = useParams();

    const getCategories = () => {
        axios.get('http://localhost:5000/categories')
            .then(res => {
                setCategories(res.data);
                console.log(categories, 'loaded categories in products component')
            })
    }
    const getProducts = (categoryId) => {
        axios.get('http://localhost:5000/products')
            .then(res => {
                if (categoryId != undefined) {
                    const filteredProducts = res.data.filter(product => (categoryId == product.category))
                    console.log(filteredProducts, " Products after filter")
                    setProducts(filteredProducts);
                } else {
                    setProducts(res.data);
                    console.log(products, 'without filter')
                }
            })
    }
    useEffect(() => {
        console.log(id,props, "id")
        getCategories();
    }, [])
    useEffect(() => {
        getProducts(id);
    }, [id])

    const handleBuyNow=(product)=>{
        props.addToCart(product);
    }
    return (
        <div className="container">
            <div className="row ">
                <div className="col-3 bg-grey ">
                    <nav>
                        <ul className="list-group list-group-flush">
                            {categories && categories.map((item, index) => (
                                <li key={index} className="list-group-item list-group-item-action bg-grey">
                                    <Link className="header-link " to={`${item.id}`}>{item.name}</Link></li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="col-9">
                    <div className="row my-2">
                        {products && products.map((product) => (
                            <div className="col-lg-3 col-sm-12 col-md-6">
                                <div key={product.id} className="  card-border">
                                    <div className="product-heading p-3">{product.name}</div>
                                    <div className="">
                                        <img src={product.imageURL} className="img-fluid" alt={product.name} />
                                        <div className="bg-grey product-decription small-font">{product.description}</div>
                                        <div className="row py-2">
                                            <div className="col small-font product-price m-auto">MRP Rs. {product.price}</div>
                                            <div className="col"><button className="btn btn-danger w-100 small-font" onClick={() => {  handleBuyNow(product) }}>Buy Now</button></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))

                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
