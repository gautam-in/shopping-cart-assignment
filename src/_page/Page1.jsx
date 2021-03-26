import React from 'react';
import Header from '../_components/header/header';
import Footer from '../_components/footer/footer';
import { SideBar } from '../_components/SideBar/SideBar';

export class Page1 extends React.Component {

    render() {
        return (
            <div>
            <Header />
            <div className='sideBarNav'>
            <SideBar />
            </div>
           <div>Page1</div>
            <Footer />
            </div>
        );
    }
}

