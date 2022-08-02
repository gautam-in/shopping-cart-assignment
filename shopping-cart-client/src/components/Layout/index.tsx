import React, {useState} from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import CartModal from "../CartModal";
import CartList from "../Cart/CartList";

const products = [{
    "name": "Fresho Kiwi - Green, 3 pcs",
    "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
    "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
    "price": 87,
    "stock": 50,
    "category": "5b6899953d1a866534f516e2",
    "sku": "fnw-kiwi-3",
    "id": "5b6c6a7f01a7c38429530883"
  }]

const Layout  = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container fluid className='mx-0 p-0'>
            <Header handleShow={handleShow}/>
                <main>
                    <CartModal show={show} handleClose={handleClose}>
                        <CartList products={products} />
                    </CartModal>
                    <Outlet/>
                </main>
            <Footer />
        </Container>
  )
}

export default Layout;
