import {
  FETCH_BANNER_START,
  FETCH_BANNER_OK,
  FETCH_BANNER_ERROR,
  NEXT_SLIDE,
  PREV_SILDE,
  GOTO_SLIDE_INDEX,
  ANIMATING,
  ANIMATION_DONE,
} from '../actions/homePageActions';

const InitialHomeState = {
  activeIndex : 0,
  animating : false,
  loadingBanner: false,
  items: [
    {
      "bannerImageUrl": "/static/images/offers/offer1.jpg",
      "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
      "isActive": true,
      "order": 1,
      "id": "5b6c38156cb7d770b7010ccc"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer2.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs120 off on surf",
      "isActive": true,
      "order": 2,
      "id": "5b6c38336cb7d770b7010ccd"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer3.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs99 off on domex",
      "isActive": true,
      "order": 3,
      "id": "5b6c38456cb7d770b7010cce"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer4.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs99 off on bodywash",
      "isActive": true,
      "order": 4,
      "id": "5b6c38576cb7d770b7010ccf"
    },
    {
      "bannerImageUrl": "/static/images/offers/offer5.jpg",
      "bannerImageAlt": "Independence Day Deal - Rs70 off on tea",
      "isActive": true,
      "order": 5,
      "id": "5b6c386b6cb7d770b7010cd0"
    }
  ],
}

const homePageReducer = (state = InitialHomeState, action) => {
  let copy = { ...state, items: [...state.items] }
  const{animating,activeIndex,items} = copy
  switch (action.type) {
    case NEXT_SLIDE:
      console.log("Next")
      if (animating)
        return copy
      copy.activeIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
      return copy;
    case PREV_SILDE:
    if (animating)
    return copy
    copy.activeIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    return copy
    case GOTO_SLIDE_INDEX:
    if (animating) return copy
    copy.activeIndex = action.payload
    return copy
    case FETCH_BANNER_OK:
      copy.items = action.payload.banners
      copy.loadingBanner = false
    return copy
    case FETCH_BANNER_START:
    // copy.items = []
      copy.loadingBanner = true
    return copy
    case FETCH_BANNER_ERROR:
    // copy.items = []
      copy.loadingBanner = false
    copy.error = action.payload.error
    return copy
    case ANIMATING:
    copy.animating = true
    return copy
    case ANIMATION_DONE:
    copy.animating = false
    return copy
    default:
    return copy
  }
};

export default homePageReducer;