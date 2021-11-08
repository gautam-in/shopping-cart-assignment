import React from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
const Format = (props) => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
export default Format