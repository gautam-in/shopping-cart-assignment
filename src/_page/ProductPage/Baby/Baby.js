import React from 'react';
import Header from '../../../_components/header/header';
import Footer from '../../../_components/footer/footer';
import { SideBar } from '../../../_components/SideBar/SideBar';
import './style.scss';

export class Baby extends React.Component {

    render() {
        return (
            <div>
                <Header />
            <div className='main'>
            <div className='sideBarNav'>
                <SideBar />
                </div>
            <div className='content'>Baby</div>
            </div>
                <Footer />
            </div>
        );
    }
}

