import React from 'react';
import Carousel from 'react-material-ui-carousel'
// import { bannerList } from '../../server/banners/banner'
import Banner from './banners'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretCircleLeft } from '@fortawesome/free-solid-svg-icons'
import {faCaretCircleRight } from '@fortawesome/free-solid-svg-icons'
import Catagories from './Catagory';

export default function HomePage(props){
    return (
    <div>
      {/* <Carousel
      NextIcon={<i className="fas fa-caret-circle-right carousel-style">Next</i>}
      PrevIcon={<i className="fas fa-caret-circle-right carousel-style">Prev</i>}
      >
    {
      bannerList.map((list,index)=><Banner  key={index} list={list} />)
    }
      </Carousel> */}
      <div className="banner-border"></div>
      <div>
      <Catagories />
      </div>
      </div>
    )
}