import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function ProductsComponent(props) {
    const [categories, setCategories] = useState();

    const getCategories = () => {
        axios.get('http://localhost:5000/categories')
            .then(res => {
                setCategories(res.data);
                console.log(categories, 'loaded categories in products component')
            })
    }
    useEffect(() => {
        getCategories();

    }, [])

    return (
        <div className="container">
            <div className="row ">
                <div className="col-3 bg-grey ">
                    <nav>
                        <ul className="list-group list-group-flush">
                            {categories && categories.map(item => (
                                <li className="list-group-item list-group-item-action bg-grey">
                                    <Link className="header-link " to={`/${item.id}`}>{item.name}</Link></li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="col-9"></div>
            </div>
        </div>
    )
}
