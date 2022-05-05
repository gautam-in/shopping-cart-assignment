import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SimpleImageSlider from 'react-simple-image-slider';
import { isMobile, isTablet } from '../utilities';

function ImageSlider() {
  const [mobile, setIsMobile] = useState(false);
  const [tablet, setIsTablet] = useState(false);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    function handleResize() {
      const mobile = isMobile();
      const tablet = isTablet();
      setIsMobile(mobile);
      setIsTablet(tablet);
    }
    window.addEventListener('resize', handleResize);

    const { REACT_APP_CLIENT_URL = 'http://localhost:3000', REACT_APP_BANNERS_URL = 'http://localhost:5000/banners' } = process.env;

    axios.get(REACT_APP_BANNERS_URL).then(response => {
      let { data } = response;
      data = data.sort(function(a, b) {
        return a.order - b.order;
      });
      const banners = data.map(element => `${REACT_APP_CLIENT_URL}${element.bannerImageUrl}`);
      setBanners(banners);
    }).catch(error => console.error(error));

    return () => window.removeEventListener('resize');
  }, []);

  if(banners.length === 0) return null;

  return (
    <div>
      <SimpleImageSlider
        width={mobile ? 400 : tablet ? 700 : 980}
        height={mobile ? 100 : tablet ? 180 : 240}
        images={banners}
        showBullets={true}
        style={{ margin: '0 auto' }}
      />
    </div>
  );
}

export default ImageSlider;
