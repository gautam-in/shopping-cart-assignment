import React, {useState} from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import CartModal from "../CartModal";
import CartList from "../Cart/CartList";
import { AllProducts } from "../../pages/products";

const products = AllProducts.slice(0, 1)

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
