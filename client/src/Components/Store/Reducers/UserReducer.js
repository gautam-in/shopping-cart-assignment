const INITIAL_STATE = {
    isLoggedIn: false,
  };
  
  const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SIGN_IN':
        return {
          ...state,
          isLoggedIn: true,
        };
      case 'SIGN_OUT':
        return {
          ...state,
          isLoggedIn: false,
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;