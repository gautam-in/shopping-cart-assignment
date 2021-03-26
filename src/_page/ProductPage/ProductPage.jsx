import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
// import CarouselApp from '../../_components/CarouselApp'
import Header from '../../_components/header/header';
import Footer from '../../_components/footer/footer';
import { SideBar } from '../../_components/SideBar/SideBar';
import './style.scss';

export class ProductPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div >
            <Header />
            <div className='sideBarNav'>
            <SideBar />
            </div>
            <Footer />
            </div>
        );
    }
}

