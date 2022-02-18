import cartReducer, {
  GlobalState,
  initialState,
} from "./reducers/cart-reducer";
import { useReducer } from "react";
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  // const callReducer = () => {
  //   dispatch({
  //     type: "ADD_TO_CART",
  //   });
  // };
  return (
    <GlobalState.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export default Provider;
