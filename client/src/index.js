<<<<<<< HEAD
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { lazy ,Suspense} from "react";

const App = lazy(()=>import("./App.js"));
 
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback ={<div>Loading...</div>}>
    <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
=======
import 'react-app-polyfill/stable';
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import store from "./store";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
>>>>>>> 5c61fa810bfdac7324f5508c516b2d7a14df4d81
