import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { bannerList } from './BannerData'
import Banner from './banners'
import { SkipNext, SearchTwoTone } from '@material-ui/icons';
import Catagories from './Catagory';

export default function HomePage(props){
    return (
    <div>
      <Carousel
      NextIcon={<SearchTwoTone />}
      PrevIcon={<SkipNext  style={{color:"red"}}/>}
      >
    {
      bannerList.map((list,index)=><Banner  key={index} list={list} />)
    }
      </Carousel>
      <div className="banner-border"></div>
      <div>
      <Catagories />
      </div>
      </div>
    )
}