import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from './product-card';
import './product.scss'
import { useLocation } from "react-router-dom";
import { ProductsURL, CategoryURL } from '../../store/url/api';

const Products = () => {
    const location = useLocation();
    const [id, setCategory] = useState(null);
    const [productData, setproductData] = useState([]);
    const [category, setCategoryData] = useState([])

    useEffect(() => {
        if (location.state != null) {
            setCategory(location.state.id);
            location.state = null;
        }
        const fetchData = async () => {
            const categories = await axios.get(CategoryURL);
            setCategoryData(categories.data);
            const products = await axios.get(ProductsURL);
            filterProducts(products.data);
        };
        fetchData();
    }, [id]);

    // set category id based on sidemenu
    const setCategoryId = (e) => {
        if (id !== e.target.id) {
            setCategory(e.target.id);
        } else {
            setCategory(null);
        }
    }

    // filter products based on sidemenu select
    const filterProducts = (data) => {
        if (id !== null) {
            let filteredValue = data.filter((item) => item.category === id);
            setproductData(filteredValue);
        } else {
            setproductData(data);
        }
    };
    const handleChange = (e) => {
        console.log(e.target.value)
        if (id !== e.target.value) {
            setCategory(e.target.value);
        } else {
            setCategory(null);
        }
    };
    return (
        <div className='products-section'>
            <Row>
                <Col sm={3}>
                    <div className="sidemenuSelect">
                        <select
                            name="categories"
                            onChange={handleChange}
                            value={id ? id : " "}
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
                                    onClick={(e) => setCategoryId(e)}
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
