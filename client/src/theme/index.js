import {ReactComponent as CartIcon } from '../assets/static/images/cart.svg';
import SlideOne from '../assets/static/images/offers/offer1.jpg';
import SlideTwo from '../assets/static/images/offers/offer2.jpg';
import SlideThree from '../assets/static/images/offers/offer3.jpg';
import SlideFour from '../assets/static/images/offers/offer4.jpg';
import SlideFive from '../assets/static/images/offers/offer5.jpg';

const theme = {
    colors: {
      BOX_SHADOW_LEFT: 'rgba(0, 0, 0, .3)',
      BOX_SHADOW_RIGHT: 'rgba(0, 0, 0, .1)',
      CTA_COLOR: '#bf2957',
      SCROLLBAR_BG: '#fbfbfb',
      SCROLLBAR_THUMB_BG: '#7d7d7d',
      SCROLLBAR_TRACK: '#f0f0f0',
      SCROLLBAR_BOX_SHADOW: 'rgba(0, 0, 0, .23)',
      WHITE: '#ffffff',
      BLACK: '#000000',
      GRAY: '#eaeaea',
    },
    fonts: {
      DOSIS: 'Dosis',
    },
    icons: {
      CART: CartIcon,
    },
    carousel_images: {
      slide_one: SlideOne,
      slide_two: SlideTwo,
      slide_three: SlideThree,
      slide_four: SlideFour,
      slide_five: SlideFive,
    },
    breakpoints: {
      SM_MOBILE: '320px',
      MOBILE: '480px',
      SM_TAB: '540px',
      TAB: '768px',
      LG_TAB: '995px',
      SM_LAPTOP: '1024px',
      LAPTOP: '1280px',
      DESKTOP: '1360px',
    },
  };
  
  export default theme;
  