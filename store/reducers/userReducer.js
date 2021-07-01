import { SIGN_IN, SIGN_OUT } from '../../utils/constants';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem('user', action.payload.email);
      return { ...state, userId: action.payload.email };

    case SIGN_OUT:
      localStorage.clear();
      return { ...state, userId: null };
    default:
      return state;
  }
};

export default userReducer;
