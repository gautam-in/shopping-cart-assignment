import App from "./App";
import { Provider } from 'react-redux';
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { store } from './src/redux/store/store.js';

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
