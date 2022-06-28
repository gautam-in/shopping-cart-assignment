import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
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

    // set category id based on sidemenu
    const setKey = (e) => {
        if (id !== e.target.id) {
            setId(e.target.id);
        } else {
            setId(null);
        }
    }

    // filter products based on sidemenu select
    const filterProducts = (data) => {
        if (id !== null) {
            let res = data.filter((item) => item.category === id);
            setproductData(res);
        } else {
            console.log("id", data, id)
            setproductData(data);
        }
    };
    const handleChange = (e) => {
        console.log(e.target.value)
        if (id !== e.target.value) {
            setId(e.target.value);
        } else {
            setId(null);
        }
    };
    return (
        <div className='products-section'>
            <Row >
                <Col sm={3}>
                    <div className="sidemenuSelect">
                        <select
                            name="categories"
                            onChange={handleChange}
                            defaultValue={"Categories"}
                        >
                            <option value="Categories" disabled>
                                Categories
                            </option>
                            {category.map((item) => (
                                <option key={item.id} value={item.id} id={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='side-menu'>
                        {category.map((item) => {
                            return (<div key={item.id} className={id === item.id ? 'menu-btn' + " focusButton" : "menu-btn"}>
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
                    <Row>
                        {productData.map((item) => (
                            <Col xs={12} lg={4} md={6} sm={6} key={item.id}>
                                <ProductCard
                                    product={item} />
                            </Col>
                        )
                        )}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Products;
