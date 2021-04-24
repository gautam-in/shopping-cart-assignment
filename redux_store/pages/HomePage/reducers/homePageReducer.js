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
  items: [],
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