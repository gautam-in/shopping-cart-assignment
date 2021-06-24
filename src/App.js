import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

import Routes from "./Routes";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
