import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Layout  = () => {
    return (
        <Container fluid className='mx-0 p-0'>
            <Header />
                <Outlet/>
            <Footer />
        </Container>
  )
}

export default Layout;