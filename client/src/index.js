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
