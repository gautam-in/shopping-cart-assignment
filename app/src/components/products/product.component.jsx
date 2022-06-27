import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';
import ProductCard from './product-card';
import './product.scss'
import { useLocation } from "react-router-dom";

const Products = () => {
    const location = useLocation();
    const [id, setId] = useState(null);
    const [productData, setproductData] = useState([]);
    const [category, setCategoryData] = useState([])

    useEffect(() => {
        if (location.state != null) {
            setId(location.state.id);
            location.state = null;
        }
        const fetchData = async () => {
            const category = await axios.get('http://localhost:8000/categories');
            setCategoryData(category.data);
            const res = await axios.get('http://localhost:8000/products');
            filterProducts(res.data);
        };
        fetchData();
    }, [id]);

    const setKey = (e) => {
        if (id !== e.target.id) {
            setId(e.target.id);
        } else {
            setId(null);
        }
    }
    const filterProducts = (data) => {
        if (id !== null) {
            let res = data.filter((item) => item.category === id);
            setproductData(res);
        } else {
            console.log("id",data,id)
            setproductData(data);
        }
    };

    return (
        <div className='products-section'>
            <Row >
                <Col sm={3}>
                <div className='side-menu'>
                    {category.map((item) => {
                        return (<div key={item.id} className={id === item.id ? 'menu-btn' +  " focusButton" : "menu-btn"}>
                            <button
                                key={item.id}
                                tabIndex={id && id !== item.id ? -1 : 0}
                                name={item.name}
                                id={item.id}
                                onClick={(e) => setKey(e)}
                            >
                                {item.name}
                            </button>
                        </div>)
                    })}
                    </div>
                </Col>
                <Col sm={9}>
                    <ProductCard products={productData} />
                </Col>
            </Row>
            </div>
    );
};

export default Products;
