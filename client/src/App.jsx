import "./assets/styles/app.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { CartContextProvider } from "./context";

const App = () => {
  return (
    <CartContextProvider>
      <RouterProvider router={router}></RouterProvider>;
    </CartContextProvider>
  );
};

export default App;
