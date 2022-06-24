import axios from 'axios';
import { Component, useEffect, useState } from 'react';
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';
import ProductCard from './product-card';
import './product.scss'


class Products extends Component {
    // const [products, setProducts] = useState([]);
    // const [key, setKey] = useState('5b6899123d1a866534f516de');
    constructor() {
        super();
        this.state = {
            products: [],
            key: '5b6899953d1a866534f516e2'
        }
    }
    componentDidMount() {
        const fetchData = async () => {
            const product = await axios.get('http://localhost:8000/products');
            this.setState({ products: product.data });
        }
        fetchData();
    }
    setKey(e){
        this.setState({key:e})
    }

    render() {
        const {products,key} = this.state;
        const filteredProducts = products.filter((item) => {
            return item.category.includes(key)
        })
        return (

            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="5b6899953d1a866534f516e2" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column" onSelect={(k) => this.setKey(k)}>
                                <Nav.Item>
                                    <Nav.Link eventKey="5b6899953d1a866534f516e2">Fruits & Vegetables</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5b6899123d1a866534f516de">Bakery Cakes and Dairy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5b675e5e5936635728f9fc30">Beverages</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5b68994e3d1a866534f516df">Beauty and Hygiene</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5b6899683d1a866534f516e0">Baby Care</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey={key}>
                                    <ProductCard products={filteredProducts} />
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}

export default Products;
