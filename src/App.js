import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

import AllRoute from "./AllRoute";

function App() {
  return (
    <Provider store={store}>
      <AllRoute />
    </Provider>
  );
}

export default App;
