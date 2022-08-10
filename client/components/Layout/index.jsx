import React, { memo } from 'react';

import Header from './header';
// import Logo from "../../../static/images/logo.png"


const Layout = memo((props) => {
    return (
        <section>
            <Header />
            <div className="wrapper">
                {props.children}
            </div>
        </section>
    );
});

export default Layout;