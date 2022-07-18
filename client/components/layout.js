import React from 'react';
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({children}) => {
    return (
        <div className="content">
            <Navbar/>
            <div className="container">
            {children}
            </div>
            <Footer/>
            
        </div>
    );
};

export default Layout;