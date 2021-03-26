import React from 'react';
import Header from '../_components/header/header';
import Footer from '../_components/footer/footer';
import { SideBar } from '../_components/SideBar/SideBar';

export class Page2 extends React.Component {

    render() {
        return (
            <div>
            <Header />
            <SideBar />
           <div>Page2</div>
            <Footer />
            </div>
        );
    }
}

