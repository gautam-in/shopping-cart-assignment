import React, { Component } from 'react';
import  TopNavbar  from '../components/TopNavbar';
import CategoryComp from '../components/CategoryComp';
import HeroCorousal from '../components/HeroCorousal';
import { Outlet } from 'react-router-dom';


class Home extends Component {
    
    render() {
        
        return (
            <>
            <TopNavbar/>
            <HeroCorousal  />
            <CategoryComp />
            <Outlet />
            </>
            
        );
    }
}

export default Home;