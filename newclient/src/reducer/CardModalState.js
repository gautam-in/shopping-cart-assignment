import { CARD_MODAL_STATE } from "../constants/ActionTypes";

const initialState = {
  show: false,
};

const cardmodalstate = (state = initialState, action) => {
  switch (action.type) {
    case CARD_MODAL_STATE:
      return {
        ...state,
        show: action.payload,
      };

    default:
      return state;
  }
};
export default cardmodalstate;
