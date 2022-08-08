import React, { memo } from 'react';

import Header from './header';
// import Logo from "../../../static/images/logo.png"


const Layout = memo((props) => {
    return (
        <section>
            <Header />
            {props.children}
        </section>
    );
});

export default Layout;