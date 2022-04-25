import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import CarouselComp from '../Components/CarouselComp';
import Category from '../Components/Category';




const HomePage = () => {
    return (
        <>
            <CarouselComp />
            <Category />
        </>
    )
}

export default HomePage;